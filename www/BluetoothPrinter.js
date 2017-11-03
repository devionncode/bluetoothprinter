var exec = require('cordova/exec');

exports.list = function (fnSuccess, fnError) {
  exec(fnSuccess, fnError, "BluetoothPrinter", "list", []);
};
exports.connect = function (name, fnSuccess, fnError) {
  exec(fnSuccess, fnError, "BluetoothPrinter", "connect", [name]);
};
exports.disconnect = function (fnSuccess, fnError) {
  exec(fnSuccess, fnError, "BluetoothPrinter", "disconnect", []);
};
exports.print = function (str, fnSuccess, fnError) {
  exec(fnSuccess, fnError, "BluetoothPrinter", "print", [str]);
};
exports.printText = function (str, fnSuccess, fnError) {
  exec(fnSuccess, fnError, "BluetoothPrinter", "printText", [str]);
};
exports.printImage = function (str, fnSuccess, fnError) {
  exec(fnSuccess, fnError, "BluetoothPrinter", "printImage", [str]);
};
exports.printPOSCommand = function (str, fnSuccess, fnError) {
  exec(fnSuccess, fnError, "BluetoothPrinter", "printPOSCommand", [str]);
};