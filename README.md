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

# Publishing kite-zerodha as a snap

Follow above steps to generate electron client app with url, then...

Install `electron-builder` version `22.9.1`

Run
```
$ npm run dist
```
to generate dist/linux-unpacked and `kite-zerodha_x.x.x_amd64.snap`.

Locate `dist/` and run: (.snap file is usually in KiteZerodha-linux-x64 folder after nativefier generated / resources/app/dist)
```
$ snapcraft upload --release=stable kite-zerodha_x.x.x_amd64.snap
```

Start using the snap using:
```
$ sudo snap install kite-zerodha
```

### Tested with electron-builder@22.9.1, did not work with latest version of `electron-builder` at the time of publishing.