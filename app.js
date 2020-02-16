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