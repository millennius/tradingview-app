# tradingview-app

```
$ npm install -g nativefier
```

An electron based desktop client application for tradingview.com

Clone this repository if you want to build from source.
Run

```
$ npm install
$ npm run generate-release
$ npm run package-windows
```

If you face $Product.versionNumber not found error, then go to package.json inside the folder generated after `generate-release` script (it is usually "TradingView-win32-x64" or similar) and then rename the package name to contain no dash or hyphens.

Run `package-windows` script again.
