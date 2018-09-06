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

<img src="https://gw.alipayobjects.com/zos/rmsportal/UKOCnQFrJIFXejHDbeMc.png" width="638" />

In command,

<img src="https://gw.alipayobjects.com/zos/rmsportal/gGGbCONYdUVZNgvWEhWT.png" width="810" />

In command without compress,

<img src="https://gw.alipayobjects.com/zos/rmsportal/FRsefIYiXqUQaFnWnMCl.png" width="541" />

## Why this package exist?

To avoid cases like these,

<img src="https://gw.alipayobjects.com/zos/rmsportal/hnhsKMQPjxChymfDETUT.png" width="1246" />

## LICENSE

MIT
