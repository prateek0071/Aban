var abanVal = 9777;
    var showAbanVal = document.getElementById("abanval");
    showAbanVal.innerHTML = abanVal;

    var sendingAmount = document.getElementById("sendingVal");
    function validation(){
        if (sendingAmount.value >= abanVal) {
      errorVal.innerHTML = `Maximum amount is ${abanVal}`;
    }else{
      abanVal = abanVal - sendingAmount.value;
      showAbanVal.innerHTML = abanVal;
      errorVal.innerHTML = ``;
      alert("your amount has been sent to your desired person successfully");

    }
    }

