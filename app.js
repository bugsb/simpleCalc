//selector
// alert('ok')

const ip1 = document.getElementById("ip1")
const ip2 = document.getElementById('ip2')
var res = document.getElementById("res")
console.log('1')
const Add = document.getElementById('Add')
const Sub = document.getElementById('Sub')
const Mul = document.getElementById('Mul')
const Div = document.getElementById('Div')
const Mod = document.getElementById('Mod')




Add.addEventListener("click", function(){ 
    let ret = Number(ip1.value) + Number(ip2.value);
    // alert(ret);
    res.value = ret;
});
Sub.addEventListener("click", function(){ 
    let ret = Number(ip1.value) - Number(ip2.value);
    // alert(ret);
    res.value = ret;
});
Mul.addEventListener("click", function(){ 
    let ret = Number(ip1.value) * Number(ip2.value);
    // alert(ret);
    res.value = ret;
});
Div.addEventListener("click", function(){ 
    let ret = Number(ip1.value) / Number(ip2.value);
    // alert(ret);
    res.value = ret;
});

Mod.addEventListener("click", function(){ 
    let ret = Number(ip1.value) % Number(ip2.value);
    // alert(ret);
    res.value = ret;
});