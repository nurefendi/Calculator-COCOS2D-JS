require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Scrip":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2c241ugWKFMPI3gUPcvxdzU', 'Scrip');
// Scrip.js

"use strict";

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
        this.editbox.string = input.getNilai();
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
        //  var masuk = new input.setNilai();
        //   masuk = this.editbox.string;
        //   input.setNilai(masuk);
        // this.editbox.string="";
        //this.editbox.string += "*";
        input.getNilai();
    },
    onButtonClickBagi: function onButtonClickBagi() {
        this.editbox.string += "/";
    },
    onButtonClickKurang: function onButtonClickKurang() {
        this.editbox.string += "-";
    },
    onButtonClickTambah: function onButtonClickTambah() {
        this.editbox.string += "+";
    },
    onButtonClickSamadengan: function onButtonClickSamadengan() {
        this.editbox.string = input.getNilai();
    }

});

cc._RFpop();
},{"globalVariables":"globalVariables"}],"globalVariables":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5ca96qRk8VMjYN8l0Wvfe1V', 'globalVariables');
// globalVariables.js

"use strict";

/*
var input = {
    getNilai:function(){
        var nilai = 0;
        return nilai;
    },
    setNilai:function(){
        return nilai;
    },
    
}
module.exports = input;
*/
var input = {
    nilai: 0
};
input.load();
module.exports = input;

cc._RFpop();
},{}]},{},["Scrip","globalVariables"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcC5qcyIsImFzc2V0cy9nbG9iYWxWYXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQlE7O0FBc0JaO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDRjtBQUNGO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0U7QUFDQTtBQUNEO0FBQ0E7QUFDRTtBQUNDO0FBQ0E7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0k7QUFDSDs7QUF0Rkk7Ozs7Ozs7Ozs7QUNEVDs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0k7QUFEUTtBQUdaO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5wdXQgPSByZXF1aXJlKCdnbG9iYWxWYXJpYWJsZXMnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgICAgIGJ0bjEgOiBjYy5CdXR0b24sIGJ0bjQgOiBjYy5CdXR0b24sIGJ0bjcgOiBjYy5CdXR0b24sXHJcbiAgICAgICAgYnRuMiA6IGNjLkJ1dHRvbiwgYnRuNSA6IGNjLkJ1dHRvbiwgYnRuOCA6IGNjLkJ1dHRvbixcclxuICAgICAgICBidG4zIDogY2MuQnV0dG9uLCBidG42IDogY2MuQnV0dG9uLCBidG45IDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGJ0bjAgOiBjYy5CdXR0b24sIGJ0bnRpdGlrIDogY2MuQnV0dG9uLCBidG5zYW1hZGVuZ2FuIDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGJ0bmthbGkgOiBjYy5CdXR0b24sIGJ0bnRhbWJhaCA6IGNjLkJ1dHRvbixcclxuICAgICAgICBidG5iYWdpIDogY2MuQnV0dG9uLCBidG5rdXJhbmcgOiBjYy5CdXR0b24sIGJ0bmNsZWFyIDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGVkaXRib3ggOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGxibCA6IGNjLkxhYmVsLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdGJveC5zdHJpbmcgPSBpbnB1dC5nZXROaWxhaSgpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25CdXR0b25DbGlja0NsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nID1cIlwiO1xyXG4gICAgIH0sXHJcbiAgICBvbkJ1dHRvbkNsaWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiMVwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2sxOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiMlwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2syOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiM1wiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2szOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiNFwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiNVwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s1OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiNlwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s2OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiN1wiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s3OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiOFwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s4OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiOVwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2s5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiMFwiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2t0aXRpazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Ym94LnN0cmluZyArPSBcIi5cIjtcclxuICAgIH0sXHJcbiAgICBvbkJ1dHRvbkNsaWNrS2FsaTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vICB2YXIgbmlsYWkxID0gdGhpcy5lZGl0Ym94LnN0cmluZztcclxuICAgICAgLy8gIHZhciBtYXN1ayA9IG5ldyBpbnB1dC5zZXROaWxhaSgpO1xyXG4gICAgIC8vICAgbWFzdWsgPSB0aGlzLmVkaXRib3guc3RyaW5nO1xyXG4gICAgIC8vICAgaW5wdXQuc2V0TmlsYWkobWFzdWspO1xyXG4gICAgICAgLy8gdGhpcy5lZGl0Ym94LnN0cmluZz1cIlwiO1xyXG4gICAgICAgIC8vdGhpcy5lZGl0Ym94LnN0cmluZyArPSBcIipcIjtcclxuICAgICAgICBpbnB1dC5nZXROaWxhaSgpO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2tCYWdpOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVkaXRib3guc3RyaW5nICs9IFwiL1wiO1xyXG4gICAgfSxcclxuICAgIG9uQnV0dG9uQ2xpY2tLdXJhbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdGJveC5zdHJpbmcgKz0gXCItXCI7XHJcbiAgICB9LFxyXG4gICAgb25CdXR0b25DbGlja1RhbWJhaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Ym94LnN0cmluZyArPSBcIitcIjtcclxuICAgIH0sXHJcbiAgICBvbkJ1dHRvbkNsaWNrU2FtYWRlbmdhbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Ym94LnN0cmluZyA9IGlucHV0LmdldE5pbGFpKCk7XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiLypcclxudmFyIGlucHV0ID0ge1xyXG4gICAgZ2V0TmlsYWk6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgbmlsYWkgPSAwO1xyXG4gICAgICAgIHJldHVybiBuaWxhaTtcclxuICAgIH0sXHJcbiAgICBzZXROaWxhaTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBuaWxhaTtcclxuICAgIH0sXHJcbiAgICBcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGlucHV0O1xyXG4qL1xyXG52YXIgaW5wdXQgPSB7XHJcbiAgICBuaWxhaTowLFxyXG59O1xyXG5pbnB1dC5sb2FkKCk7XHJcbm1vZHVsZS5leHBvcnRzID0gaW5wdXQ7ICJdLCJzb3VyY2VSb290IjoiIn0=