// calculator
// Get the display element from the HTML document
const display = document.getElementById("display")
// Function to append input to the display
function appendToDisplay(input) {
    // Concatenate the current value of the display with the new input
    display.value += input;

}
// Function to clear the display
    function clearDisplay(){
        // Set the display's value to an empty string, effectively clearing it
     display.value ="";
    }
// Function to calculate the expression in the display
    function calculate(){
    try{
        // Evaluate the expression in the display using eval()
        // and update the display with the result
        display.value = eval(display.value);
    }
   catch (error){
       // If there is an error (e.g., invalid input), set the display to "Error"
        display.value ="Error";
   }
}