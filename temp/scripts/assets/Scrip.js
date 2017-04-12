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