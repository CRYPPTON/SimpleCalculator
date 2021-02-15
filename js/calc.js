var degree = Math.PI / 180.0;
var exp_for_ev = "";

function numb(id) {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+""+id;
    document.getElementById("out").innerHTML = exp_for_ev+""+id;

}

function add() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"+";
    document.getElementById("out").innerHTML = exp_for_ev+"+";
}

function division(){
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"/";
    document.getElementById("out").innerHTML = exp_for_ev+"/";
}

function multip() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"*";
    document.getElementById("out").innerHTML = exp_for_ev+"*";
}

function subtr() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"-";
    document.getElementById("out").innerHTML = exp_for_ev+"-";
}

function bracket_o() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"(";
    document.getElementById("out").innerHTML = exp_for_ev+"(";
}

function bracket_c() {    
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+")";
    document.getElementById("out").innerHTML = exp_for_ev+")";
}

function delete_all() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = "";
    document.getElementById("out").innerHTML = "";
}

function delete_last() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp.slice(0,-1);
    document.getElementById("out").innerHTML = exp_for_ev.slice(0,-1);
}

function coma() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+".";
    document.getElementById("input").innerHTML = exp_for_ev+".";
}

function perc_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML+"/100";
    var res = eval(exp);
    document.getElementById("input").innerHTML = res;
    document.getElementById("out").innerHTML = res;
}

function sin_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML
    document.getElementById("input").innerHTML = exp+"sin(" ;
    document.getElementById("out").innerHTML = exp_for_ev+`Math.sin(${degree}*` ;
}
function cos_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML
    document.getElementById("input").innerHTML = exp+"cos(" ;
    document.getElementById("out").innerHTML = exp_for_ev+`Math.cos(${degree}*` ;
}
function tan_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"tan(" ;
    document.getElementById("out").innerHTML = exp_for_ev+`Math.tan(${degree}*` ;
}

function pi_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"兀";
    exp_for_ev = document.getElementById("out").innerHTML = exp_for_ev+"Math.PI";
}

function sqrt_() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"√(";
    document.getElementById("out").innerHTML = exp_for_ev+"Math.sqrt(";
}

function pow_(){
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = exp+"^";
    document.getElementById("out").innerHTML = exp_for_ev+`**`;
}

function inv(){
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = 1+"/"+exp;
    document.getElementById("out").innerHTML = 1+"/"+exp_for_ev;
}

function fact_() {
    var num =parseInt(document.getElementById("input").innerHTML);
    var i;
    var sum = 1; 
    for (i = 1; i < num+1; i++) {
        sum*=i;
    }
    document.getElementById("input").innerHTML = sum;
    document.getElementById("out").innerHTML = sum;
}

function result() {
    exp_for_ev = document.getElementById("out").innerHTML;
    var exp = document.getElementById("input").innerHTML;
    var res_out = eval(exp_for_ev);
    document.getElementById("input").innerHTML = res_out;
    document.getElementById("out").innerHTML = res_out;
    
}

/*Problem
*generator izraza
*del
*ln
*in
*2ed
*/





