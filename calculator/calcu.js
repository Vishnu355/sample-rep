function mclicked(val)
{
    document.getElementById("screen").value+=val;
}
function eclicked(){
    var txt=document.getElementById("screen").value;
    var result=eval(txt);
    document.getElementById("screen").value=result;
}
function clr(){
    document.getElementById("screen").value="";
}