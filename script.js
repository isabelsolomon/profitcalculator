function calculateproduct(product,fullsell,fullcost,halfsell,halfcost,quartersell,quartercost){
    let fullqty=Number(document.getElementById(product + "fullqty").value);
    let halfqty=Number(document.getElementById(product+"halfqty").value);
    let quarterqty=Number(document.getElementById(product + "quarterqty").value);
  let total=((fullsell-fullcost)*fullqty)+((halfsell-halfcost)*halfqty)+((quartersell-quartercost)*quarterqty);

  document.getElementById(product +"profit").innerText= total;
  calculategrandtotal();
}
  
  function calculategrandtotal(){
    let profits=document.querySelectorAll("[id$='profit']");
    let grandtotal=0;
    profits.forEach(profit =>{
        grandtotal+= Number(profit.innerText);
    });
    document.getElementById("grandtotal").innerText=grandtotal;
    
  }
  function saverecord(){
    let total=document.getElementById("grandtotal").innerText;
    let date=new Date().toLocaleDateString();
    let record={date:date,total:total};
    let records=JSON.parse(localStorage.getItem("profits")) || [];
    records.push(record);
    localStorage.setItem("profits",JSON.stringify(records));
    displayrecords();
  }
  function displayrecords(){
    let history=document.getElementById("history");
    let records=JSON.parse(localStorage.getItem("profits")) || [];
    history.innerHTML="";
      let totalsaved=0;
    records.forEach(record =>{
        history.innerHTML+= "<p>" + record.date +"-"+ record.total+ "</p>";
        totalsaved+=Number(record.total);
    });
      document.getElementById("savedtotal").innerText=totalsaved;
  }
  displayrecords();
  function clearrecords(){
    localStorage.removeItem("profits");
    document.getElementById("history").innerHTML ="";
      
  }
  function clearinputs(){
    let inputs=document.querySelectorAll("input");
    inputs.forEach(input =>{
        input.value="";
    });
    let profits= document.querySelectorAll("[id$='profits']");
    profits.forEach(profit =>{
        profit.innerText="0";
    });
    document.getElementById("grandtotal").innerText="0";
  }
