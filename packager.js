var electronInstaller = require("electron-winstaller");
var path = require("path");
resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: path.join("TradingView-win32-x64"), //The path of the package file just generated
  outputDirectory: path.join("./app"), //Output path
  authors: "Millennius Labs",
  exe: "TradingView.exe", //Find the name of the exe in appDirectory
  noMsi: false, //No need for mis! [write picture description here] (https://img-blog.csdn.net/20180712225817503?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI2NjI2MTEz/font/5a6L5L2T/fontsize/400/fill/I0JBQkdisk /70)
  setupIcon: "./TradingView-win32-x64/resources/app/icon.ico", //The icon file address of the generated exe file
  setupExe: "tradingview-setup-win64-0.0.1.exe",
  version: "0.0.1",
  title: "TradingView",
  setupMsi: "tradingview-setup-win64-0.0.1.exe",
});

resultPromise.then(
  () => console.log("It worked!"),
  (e) => console.log(`No dice: ${e.message}`)
);
