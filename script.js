function calculate() {
  let subject1 = parseFloat(document.getElementById("subject1").value);
  let subject2 = parseFloat(document.getElementById("subject2").value);
  let subject3 = parseFloat(document.getElementById("subject3").value);
  let subject4 = parseFloat(document.getElementById("subject4").value);
  let subject5 = parseFloat(document.getElementById("subject5").value);
  let subject6 = parseFloat(document.getElementById("subject6").value);
  let subject7 = parseFloat(document.getElementById("subject7").value);
  let totalPoints = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7;
  let weightedAverage = totalPoints / 7;
  let result = document.getElementById("result");
  result.innerHTML = `The general weighted average is ${weightedAverage.toFixed(2)}`;
}
