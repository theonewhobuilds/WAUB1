

function display(val) {
  document.getElementById("result").value += val;
  
}

function solve() {
  let x = document.getElementById("result").value;

  // Check if x is equal to 234
  if (x === "234") {
    document.getElementById("result").value = "Who are you?";
    return "Who are you?";
  }

  // If x is not 234, proceed with the evaluation
  let y = eval(x);

  document.getElementById("result").value = y;
  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

// Function to handle a specific condition
function handleTriggerCondition() {
    // Your custom logic for the triggered condition
    document.getElementById("result").value += val;
    // Call other functions or perform specific actions
    console.log("Condition triggered! Calling a different function.");
  }

function controlFunctions(val) {
    // Check the condition
    if (val === "triggerCondition") {
      // Call a different function when the condition is met
      handleTriggerCondition();
    } else {
      // Default behavior, call other functions
      display(val);
      
    }
  }
  
  