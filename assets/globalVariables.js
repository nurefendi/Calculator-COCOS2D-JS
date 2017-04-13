var input = {
    nilai:0,
    nilai2:0,
    operator:"",
    load:function() {
        return input.nilai;
    },
    load2:function() {
        return input.nilai2;
    },
    bcoperator:function(){
        return input.operator;
    }
    
};
input.load();
input.load2();
input.bcoperator();
module.exports = input; 