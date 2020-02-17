function myFunction() {
    alert("Your form has been submitted");
    document.getElementById("event").value = "";
    document.getElementById("eventTitle").value = "";
    document.getElementById("ddate").value = "";
    document.getElementById("pdate").value = "";
    document.getElementById("edate").value = "";
    
        
}
function cancelClear() {
    alert("Your form has been canceled")
    document.getElementById("event").value = "";
    document.getElementById("eventTitle").value = "";
    document.getElementById("ddate").value = "";
    document.getElementById("pdate").value = "";
    document.getElementById("edate").value = "";
}  
function errorDate(){
    let firstDate = document.getElementById("ddate").value;
    let lastDate = document.getElementById("edate").value;

   if(firstDate > lastDate){
        alert("Set Date is not proper")
        document.getElementById("edate").value = "";
   }
}