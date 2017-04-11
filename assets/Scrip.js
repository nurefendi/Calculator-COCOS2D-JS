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
        btn1 : cc.Button, btn4 : cc.Button, btn7 : cc.Button,
        btn2 : cc.Button, btn5 : cc.Button, btn8 : cc.Button,
        btn3 : cc.Button, btn6 : cc.Button, btn9 : cc.Button,
        btn0 : cc.Button, btntitik : cc.Button, btnsamadengan : cc.Button,
        btnkali : cc.Button, btntambah : cc.Button,
        btnbagi : cc.Button, btnkurang : cc.Button,
        editbox : cc.EditBox,
        lbl : cc.Label,
        
        
    },

    // use this for initialization
    onLoad: function () {
        var input = "2";
    },
    
    onButtonClick: function() {
        this.lbl.string="CALCULATOR";
        this.editbox.string = "";
       // input += "1";
      //  this.editbox.string += input;
    },
    onButtonClick1: function() {
        this.editbox.string = string.input;
    },
     
    
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
