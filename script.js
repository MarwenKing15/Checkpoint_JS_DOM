/********************PLUS FUNCTIONS*****************/
function plus_function_item1(){
  var price=document.getElementById("price_item1").innerHTML;
  var p=Number(price);
  var t=Number(document.getElementById("vat_item1").innerHTML);
var v=document.getElementById('valu1').value;
v++;
valu1.setAttribute('value',v);
var total=(p*v)+t;
document.getElementById('total_item1').innerHTML = total;
}; 

function plus_function_item2(){
  var price=document.getElementById("price_item2").innerHTML;
  var p=Number(price);
  var t=Number(document.getElementById("vat_item2").innerHTML);
var v=document.getElementById('valu2').value;
v++;
valu2.setAttribute('value',v);
var total=(p*v)+t;
document.getElementById('total_item2').innerHTML = total;
};

function plus_function_item3(){
  var price=document.getElementById("price_item3").innerHTML;
  var p=Number(price);
  var t=Number(document.getElementById("vat_item3").innerHTML);
var v=document.getElementById('valu3').value;
v++;
valu3.setAttribute('value',v);
var total=(p*v)+t;
document.getElementById('total_item3').innerHTML = total;
};

/**********************MINUS FUNCTIONS**************/

function minus_function_item1(){
  var price=document.getElementById("price_item1").innerHTML;
  var p=Number(price);
  var t=Number(document.getElementById("vat_item1").innerHTML);
var v=document.getElementById('valu1').value;
if(v>0)
{
 v--; 
}
valu1.setAttribute('value',v);
var total=(p*v)+t;
if(v==0)
{
  document.getElementById('total_item1').innerHTML = 0;
}
else{
  document.getElementById('total_item1').innerHTML = total;
}

}; 

function minus_function_item2(){
  var price=document.getElementById("price_item2").innerHTML;
  var p=Number(price);
  var t=Number(document.getElementById("vat_item2").innerHTML);
var v=document.getElementById('valu2').value;
if(v>0)
{
 v--; 
}
valu2.setAttribute('value',v);
var total=(p*v)+t;
if(v==0)
{
  document.getElementById('total_item2').innerHTML = 0;
}
else{
  document.getElementById('total_item2').innerHTML = total;
}
}; 

function minus_function_item3(){
  var price=document.getElementById("price_item3").innerHTML;
  var p=Number(price);
  var t=Number(document.getElementById("vat_item3").innerHTML);
var v=document.getElementById('valu3').value;
if(v>0)
{
 v--; 
}
valu3.setAttribute('value',v);
var total=(p*v)+t;
if(v==0)
{
  document.getElementById('total_item3').innerHTML = 0;
}
else{
  document.getElementById('total_item3').innerHTML = total;
}
}; 

/***********************FUNCTION LIKE***************/

function like_item1(){
  var i=document.getElementById('like1');
  var x = document.getElementById("btn1").value;
  switch(x){
    case'dl':
      i.setAttribute('class','fas fa-heart');
      document.getElementById("btn1").value = "l";
      break;
    case'l':
      i.setAttribute('class','far fa-heart');
      document.getElementById("btn1").value = "dl";
      break;
    default:
      i.setAttribute('class','far fa-heart');
  }
  
}

function like_item2(){
  var i=document.getElementById('like2');
  var x = document.getElementById("btn2").value;
  switch(x){
    case'dl':
      i.setAttribute('class','fas fa-heart');
      document.getElementById("btn2").value = "l";
      break;
    case'l':
      i.setAttribute('class','far fa-heart');
      document.getElementById("btn2").value = "dl";
      break;
    default:
      i.setAttribute('class','far fa-heart');
  }
  
}

function like_item3(){
  var i=document.getElementById('like3');
  var x = document.getElementById("btn3").value;
  switch(x){
    case'dl':
      i.setAttribute('class','fas fa-heart');
      document.getElementById("btn3").value = "l";
      break;
    case'l':
      i.setAttribute('class','far fa-heart');
      document.getElementById("btn3").value = "dl";
      break;
    default:
      i.setAttribute('class','far fa-heart');
  }
  
}

/***********************FUNCTION DELETE***************/
var arr=document.querySelectorAll(".delete_item");
 for (let x = 0; x < arr.length; x++) {
    arr[x].addEventListener("click", function () {
    arr[x].parentNode.parentNode.style.display = "none";
    })
}

  
/********************************** TOTAL FUNCTION *******************************/
function total_price(){
  var total=0;
  var total_items1=0;
  var total_items2=0;
  var total_items3=0;
  var total_ofall=0;

  var q_item1=document.getElementById('valu1').value;
  var q_item2=document.getElementById('valu2').value;
  var q_item3=document.getElementById('valu3').value;

  var prix_item1=document.getElementById("price_item1").innerHTML;
  var p_item1=Number(prix_item1);
  var t_item1=Number(document.getElementById("vat_item1").innerHTML);

  var prix_item2=document.getElementById("price_item2").innerHTML;
  var p_item2=Number(prix_item2);
  var t_item2=Number(document.getElementById("vat_item2").innerHTML);

  var prix_item3=document.getElementById("price_item3").innerHTML;
  var p_item3=Number(prix_item3);
  var t_item3=Number(document.getElementById("vat_item3").innerHTML);


  if(q_item1>0){
    total+=t_item1;
    total_items1=(p_item1*q_item1)+t_item1;
  }
  if(q_item2>0){
    total+=t_item2;
    total_items2=(p_item2*q_item2)+t_item2;
  }
  if(q_item3>0){
    total+=t_item3;
    total_items3=(p_item3*q_item3)+t_item3;
  }
  var total_vat=total.toFixed(2);
  document.getElementById('total_items_vat').innerHTML = total_vat;
  document.getElementById('shipp').innerHTML = 25;
  total_ofall=total_items1+total_items2+total_items3+25;
  if(q_item1>0||q_item2>0||q_item3>0){
    document.getElementById('tot').innerHTML = total_ofall;
  }
  else{
    document.getElementById('tot').innerHTML = 0;
  }
}