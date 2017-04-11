require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Scrip":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2c241ugWKFMPI3gUPcvxdzU', 'Scrip');
// Scrip.js

"use strict";

/* var economy = require('Economy')
cc.Class({
    extends: cc.Component,

    properties: {
        gameName: "",
    },
    onLoad: function () {
    var cash = economy.getMoney();
    }
} */
var input = require('globalVariables');
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        btn1: cc.Button, btn4: cc.Button, btn7: cc.Button,
        btn2: cc.Button, btn5: cc.Button, btn8: cc.Button,
        btn3: cc.Button, btn6: cc.Button, btn9: cc.Button,
        btn0: cc.Button, btntitik: cc.Button, btnsamadengan: cc.Button,
        btnkali: cc.Button, btntambah: cc.Button,
        btnbagi: cc.Button, btnkurang: cc.Button, btnclear: cc.Button,
        editbox: cc.EditBox,
        lbl: cc.Label

    },

    // use this for initialization
    onLoad: function onLoad() {
        var inputan = input.getNilai();
    },

    onButtonClickClear: function onButtonClickClear() {
        this.editbox.string = "";
    },
    onButtonClick: function onButtonClick() {
        this.editbox.string += "1";
    },
    onButtonClick1: function onButtonClick1() {
        this.editbox.string += "2";
    },
    onButtonClick2: function onButtonClick2() {
        this.editbox.string += "3";
    },
    onButtonClick3: function onButtonClick3() {
        this.editbox.string += "4";
    },
    onButtonClick4: function onButtonClick4() {
        this.editbox.string += "5";
    },
    onButtonClick5: function onButtonClick5() {
        this.editbox.string += "6";
    },
    onButtonClick6: function onButtonClick6() {
        this.editbox.string += "7";
    },
    onButtonClick7: function onButtonClick7() {
        this.editbox.string += "8";
    },
    onButtonClick8: function onButtonClick8() {
        this.editbox.string += "9";
    },
    onButtonClick9: function onButtonClick9() {
        this.editbox.string += "0";
    },
    onButtonClicktitik: function onButtonClicktitik() {
        this.editbox.string += ".";
    },
    onButtonClickKali: function onButtonClickKali() {
        //  var nilai1 = this.editbox.string;
        this.editbox.string += "*";
    },
    onButtonClickBagi: function onButtonClickBagi() {
        this.editbox.string += "/";
    },
    onButtonClickKurang: function onButtonClickKurang() {
        this.editbox.string += "-";
    },
    onButtonClickTambah: function onButtonClickTambah() {
        this.editbox.string += "+";
    }

});

cc._RFpop();
},{"globalVariables":"globalVariables"}],"globalVariables":[function(require,module,exports){
"use strict";
cc._RFpush(module, '461c8mdXM5Fa7HnMWOjPyXU', 'globalVariables');
// globalVariables.js

"use strict";

// var money = 200;

/* var economy = {

    getMoney:function()
    {
        return money;
    },
    }
module.exports = economy;

*/

var nilai = 4;
var input = {
    getNilai: function getNilai() {
        return nilai;
    }

};
module.exports = input;

cc._RFpop();
},{}]},{},["Scrip","globalVariables"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcC5qcyIsImFzc2V0cy9nbG9iYWxWYXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQlE7O0FBdUJaO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDRjtBQUNGO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0U7QUFDRTtBQUNIO0FBQ0Q7QUFDSTtBQUNIO0FBQ0Q7QUFDSTtBQUNIO0FBQ0Q7QUFDSTtBQUNIOztBQS9FSTs7Ozs7Ozs7OztBQ1pUOztBQUVBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7O0FBSE87QUFNWiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHZhciBlY29ub215ID0gcmVxdWlyZSgnRWNvbm9teScpXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2FtZU5hbWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2FzaCA9IGVjb25vbXkuZ2V0TW9uZXkoKTtcclxuICAgIH1cclxufSAqL1xyXG52YXIgaW5wdXQgPSByZXF1aXJlKCdnbG9iYWxWYXJpYWJsZXMnKVxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgYnRuMSA6IGNjLkJ1dHRvbiwgYnRuNCA6IGNjLkJ1dHRvbiwgYnRuNyA6IGNjLkJ1dHRvbixcclxuICAgICAgICBidG4yIDogY2MuQnV0dG9uLCBidG41IDogY2MuQnV0dG9uLCBidG44IDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGJ0bjMgOiBjYy5CdXR0b24sIGJ0bjYgOiBjYy5CdXR0b24sIGJ0bjkgOiBjYy5CdXR0b24sXHJcbiAgICAgICAgYnRuMCA6IGNjLkJ1dHRvbiwgYnRudGl0aWsgOiBjYy5CdXR0b24sIGJ0bnNhbWFkZW5nYW4gOiBjYy5CdXR0b24sXHJcbiAgICAgICAgYnRua2FsaSA6IGNjLkJ1dHRvbiwgYnRudGFtYmFoIDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGJ0bmJhZ2kgOiBjYy5CdXR0b24sIGJ0bmt1cmFuZyA6IGNjLkJ1dHRvbiwgYnRuY2xlYXIgOiBjYy5CdXR0b24sXHJcbiAgICAgICAgZWRpdGJveCA6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgbGJsIDogY2MuTGFiZWwsXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlucHV0YW4gPSBpbnB1dC5nZXROaWxhaSgpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25CdXR0b25DbGlja0NsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nID1cIlwiO1xyXG4gICAgIH0sXHJcbiAgICBvbkJ1dHRvbkNsaWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiMVwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2sxOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiMlwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2syOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiM1wiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2szOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiNFwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiNVwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s1OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiNlwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s2OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiN1wiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s3OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiOFwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s4OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiOVwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiMFwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2t0aXRpazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Ym94LnN0cmluZyArPSBcIi5cIjtcclxuICAgIH0sXHJcbiAgICBvbkJ1dHRvbkNsaWNrS2FsaTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vICB2YXIgbmlsYWkxID0gdGhpcy5lZGl0Ym94LnN0cmluZztcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiKlwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2tCYWdpOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiL1wiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2tLdXJhbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdGJveC5zdHJpbmcgKz0gXCItXCI7XHJcbiAgICB9LFxyXG4gICAgb25CdXR0b25DbGlja1RhbWJhaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Ym94LnN0cmluZyArPSBcIitcIjtcclxuICAgIH0sXHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCIvLyB2YXIgbW9uZXkgPSAyMDA7XHJcblxyXG4vKiB2YXIgZWNvbm9teSA9IHtcclxuXHJcbiAgICBnZXRNb25leTpmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG1vbmV5O1xyXG4gICAgfSxcclxuICAgIH1cclxubW9kdWxlLmV4cG9ydHMgPSBlY29ub215O1xyXG5cclxuKi9cclxuXHJcbnZhciBuaWxhaSA9IDQ7XHJcbnZhciBpbnB1dCA9IHtcclxuICAgIGdldE5pbGFpOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIG5pbGFpO1xyXG4gICAgfSxcclxuICAgIFxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5wdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==