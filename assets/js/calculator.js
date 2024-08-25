function calculate() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	var operation = document.getElementById('operation').value;
  
	// Perform the calculation
	if (operation === '+') {
	  result = num1 + num2;
	} else if (operation === '-') {
	  result = num1 - num2;
	} else if (operation === '*') {
	  result = num1 * num2;
	} else if (operation === '/') {
	  if (num2 !== 0) {
		result = num1 / num2;
	  } else {
		alert("Cannot divide by zero!");
		return;
	  }
	}  // Display the result
    document.getElementById('result').value = result;
  }
  
  // Clear the input fields
  function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operation').value = '';
    document.getElementById('result').value = '';
  } 