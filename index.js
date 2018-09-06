const { extname } = require('path');
const acorn = require('acorn');
const chalk = require('chalk');
const { codeFrameColumns } = require('@babel/code-frame');

module.exports = function (api, opts = {}) {
  const { debug } = api;

  class ES5Validator {
    apply(compiler) {
      compiler.hooks.afterEmit.tap('ES5Validator', compilation => {
        const fileNames = Object.keys(compilation.assets);
        debug(`got files: ${fileNames.join(', ')}`);
        fileNames.forEach((fileName) => {
          if (extname(fileName) === '.js') {
            debug(`validate es5 for ${fileName}`);
            const asset = compilation.assets[fileName];
            const source = asset.source();

            try {
              acorn.parse(source, {
                ecmaVersion: 5,
                ...(opts.acorn || {}),
              });
              debug(`parse success ${fileName}`);
            } catch (e) {
              debug(`parse failed ${fileName}`);
              const errMsg = [
                chalk.red(`Error: ECMAScript 5 validate failed when parsing ${chalk.green.bold(fileName)} (${e.loc.line}, ${e.loc.column})`),
              ];
              if (e.loc.line === 1 && process.env.NODE_ENV === 'production' && process.env.COMPRESS !== 'none') {
                errMsg.push('');
                errMsg.push(`It's hard to locate the problem when code if compressed, try to disable compression and run again.`);
                errMsg.push('');
                errMsg.push(`   COMPRESS=none umi build`);
              } else {
                errMsg.push('');
                errMsg.push(codeFrameColumns(source, {
                  start: e.loc,
                }, {
                  highlightCode: true,
                  forceColor: true,
                  message: 'Invalid ECMAScript 5 syntax',
                  linesAbove: 10,
                  linesBelow: 2,
                  ...(opts.codeFrame || {}),
                }));
              }
              errMsg.push('');
              errMsg.push(chalk.cyan(`Please submit a PR for the problematic package at https://github.com/umijs/es5-imcompatible-versions`));
              compilation.errors.push(
                new Error(errMsg.join('\n')),
              );
            }
          }
        });
      });
    }
  }

  api.chainWebpackConfig((webpackConfig) => {
    webpackConfig
      .plugin('ecma5-validate')
      .use(ES5Validator);
  })
};
