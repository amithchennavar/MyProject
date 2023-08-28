function calculateMarks() {
    var scienceMarks = parseFloat(document.getElementById("science").value);
    var computerMarks = parseFloat(document.getElementById("computer").value);
    var mathsMarks = parseFloat(document.getElementById("maths").value);

    var totalMarks = scienceMarks + computerMarks + mathsMarks;
    var percentage = (totalMarks / 300) * 100;

    
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
    document.getElementById("obtainedMarks").innerText = totalMarks;
    document.getElementById("totalMarks").innerText = "300";
    document.getElementById("result").style.display = "block";
}




