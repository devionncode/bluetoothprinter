var exec = require('cordova/exec');

var BTPrinter = {
   list: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "list", []);
   },
   connect: function(name, fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "connect", [name]);
   },
   disconnect: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "disconnect", []);
   },
   print: function(str, fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "print", [str]);
   },
   printText: function(str, fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printText", [str]);
   },
    printImage: function(str, fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printImage", [str]);
    },
   printPOSCommand: function(str, fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printPOSCommand", [str]);
   }
};

exports = BTPrinter;