# umi-plugin-ecma5-validator

Ecmascript 5 syntax validator plugin for umi.

## Usage

Install via yarn or npm.

```bash
$ yarn add umi-plugin-react
```

Configure it in the `.umirc.js`.

```js
export default {
  plugins: [
    ['umi-plugin-ecma5-validator', option],
  ],
};
```

## Option

### option.codeFrame

Specify the option for [@babel/code-frame](https://babeljs.io/docs/en/next/babel-code-frame#options).

### option.acorn

Specify the option for [acorn](https://github.com/acornjs/acorn).

## Pictures

In browser,

<img src="https://gw.alipayobjects.com/zos/rmsportal/UKOCnQFrJIFXejHDbeMc.png" />

In command,

<img src="https://gw.alipayobjects.com/zos/rmsportal/gGGbCONYdUVZNgvWEhWT.png" />

In command without compress,

<img src="https://gw.alipayobjects.com/zos/rmsportal/FRsefIYiXqUQaFnWnMCl.png" />

## LICENSE

MIT
