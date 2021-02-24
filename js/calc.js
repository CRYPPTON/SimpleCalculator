var degree = Math.PI / 180.0;
var exp_for_ev = "";

function numb(id) {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;

    if(exp[0] == "="){
        exp_for_ev = "";
        exp = "";
    }

    document.getElementById("input").innerHTML = exp+""+id;
    document.getElementById("out").innerHTML = exp_for_ev+""+id;

}

function add() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;

    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
     
    document.getElementById("input").innerHTML = exp+"+";
    document.getElementById("out").innerHTML = exp_for_ev+"+";
}

function division(){
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"/";
    document.getElementById("out").innerHTML = exp_for_ev+"/";
}

function multip() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"*";
    document.getElementById("out").innerHTML = exp_for_ev+"*";
}

function subtr() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"-";
    document.getElementById("out").innerHTML = exp_for_ev+"-";
}

function bracket_o() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"(";
    document.getElementById("out").innerHTML = exp_for_ev+"(";
}

function bracket_c() {    
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+")";
    document.getElementById("out").innerHTML = exp_for_ev+")";
}

function delete_all() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = "";
    document.getElementById("out").innerHTML = "";
}

function delete_last() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;

    console.log(exp_for_ev)
    console.log(exp)
    if(exp_for_ev.includes("Math.sqrt") && (!exp.includes("√(")) )  {
        console.log("NE SADRŽi")
        exp_for_ev = exp_for_ev.substring(0,exp_for_ev.indexOf("M")+1);
        exp = exp_for_ev
    }
    if(exp_for_ev.includes("Math.sin") && (!exp.includes("sin(")) )  {
        console.log("NE SADRŽi")
        exp_for_ev = exp_for_ev.substring(0,exp_for_ev.indexOf("M")+1);
        exp = exp_for_ev
    }
    if(exp_for_ev.includes("Math.cos") && (!exp.includes("cos(")) )  {
        console.log("NE SADRŽi")
        exp_for_ev = exp_for_ev.substring(0,exp_for_ev.indexOf("M")+1);
        exp = exp_for_ev
    }

    if(!exp.includes("cos(") && exp.length <4){
       // exp_for_ev = "";
        exp = exp.replace("cos","")
    } 
    if(exp.length<4){
        exp_for_ev = exp
    }
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp.slice(0,-1);
    document.getElementById("out").innerHTML = exp_for_ev.slice(0,-1);
}

function coma() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+".";
    document.getElementById("out").innerHTML = exp_for_ev+".";
}

function perc_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML+"/100";
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    var res = eval(exp);
    document.getElementById("input").innerHTML = res;
    document.getElementById("out").innerHTML = res;
}

function sin_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"sin(" ;
    document.getElementById("out").innerHTML = exp_for_ev+`Math.sin(${degree}*` ;
}
function cos_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"cos(" ;
    document.getElementById("out").innerHTML = exp_for_ev+`Math.cos(${degree}*` ;
}
function tan_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"tan(" ;
    document.getElementById("out").innerHTML = exp_for_ev+`Math.tan(${degree}*` ;
}

function pi_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"兀";
    exp_for_ev = document.getElementById("out").innerHTML = exp_for_ev+"Math.PI";
}

function sqrt_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"√(";
    document.getElementById("out").innerHTML = exp_for_ev+"Math.sqrt(";
}

function pow_(){
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = exp+"^";
    document.getElementById("out").innerHTML = exp_for_ev+`**`;
}

function inv(){
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){
        exp = exp.substring(1,exp.length)
    }
    document.getElementById("input").innerHTML = 1+"/"+exp;
    document.getElementById("out").innerHTML = 1+"/"+exp_for_ev;
}

function fact_() {
    exp = document.getElementById("input").innerHTML;
    if(exp[0]=="="){ 
        exp = exp.substring(1,exp.length)
    }
    var num =parseInt(exp);
    console.log(num)
    var i;
    var sum = 1; 
    for (i = 1; i < num+1; i++) {
        sum*=i;
    }
    document.getElementById("input").innerHTML = sum;
    document.getElementById("out").innerHTML = sum;
}

function result() {
    var exp_for_ev = document.getElementById("out").innerHTML;
    var res_out = eval(exp_for_ev);
    document.getElementById("input").innerHTML = "="+res_out;
    document.getElementById("out").innerHTML = res_out;
    
}

/*Problem
*generator izraza       // delimično sredjeno
*del                       //delimično sredjeno
*ln
*in
*2ed
*/





