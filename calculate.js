function dosomething(){
    let price=document.getElementById("price").value;
    let tax = document.getElementById("tax").value;
    if(price<0 || tax< 0){
        alert
    }
    document.getElementById("ans").innerHTML=((price*1)+(price*tax*0.01));
    
}