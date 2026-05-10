function getValues() {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);

      return { num1, num2 };
    }

    function add() {
      let { num1, num2 } = getValues();
      document.getElementById("result").innerHTML =
        "Result: " + (num1 + num2);
    }

    function subtract() {
      let { num1, num2 } = getValues();
      document.getElementById("result").innerHTML =
        "Result: " + (num1 - num2);
    }

    function multiply() {
      let { num1, num2 } = getValues();
      document.getElementById("result").innerHTML =
        "Result: " + (num1 * num2);
    }

    function divide() {
      let { num1, num2 } = getValues();

      if (num2 === 0) {
        document.getElementById("result").innerHTML =
          "Cannot divide by zero";
      } else {
        document.getElementById("result").innerHTML =
          "Result: " + (num1 / num2);
      }
    }

    function squareRoot() {
      let { num1 } = getValues();

      document.getElementById("result").innerHTML =
        "Result: " + Math.sqrt(num1);
    }

    function cubeRoot() {
      let { num1 } = getValues();

      document.getElementById("result").innerHTML =
        "Result: " + Math.cbrt(num1);
    }

    function power() {
      let { num1, num2 } = getValues();

      document.getElementById("result").innerHTML =
        "Result: " + Math.pow(num1, num2);
    }