

function biggerText() {
    
    var textarea = document.getElementById("mineText");
    textarea.style.fontSize = "24pt";
  }

function FancyShmancy() {
    var textarea = document.getElementById("mineText");
    textarea.style.fontWeight="bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
}
  
function boring() {
    var textarea = document.getElementById("mineText");
    textarea.style.fontWeight="normal";
}

function moo() {
    var textarea = document.getElementById("mineText");
    textarea.value = textarea.value.toUpperCase();
    var parts = textarea.value.split(" ");
    textarea.value = parts.join("-MOO ");
  }

function resetStyling() {
    var textarea = document.getElementById("mineText");
    textarea.style.textDecoration = "none"; // Reset text decoration
    textarea.style.color = "black";
    textarea.style.fontWeight="normal";
    textarea.style.fontSize = "initial"; // Reset font size
    textarea.value = textarea.value.replace(/-MOO /g, " "); // Remove "-MOO " from the text
    var text = textarea.value.toLowerCase(); // Convert the entire text to lowercase
    var formattedText = text.charAt(0).toUpperCase() + text.slice(1); // Capitalize the first letter
    textarea.value = formattedText; // Update the textarea with the formatted text

}
  
  
  
function resetAll() {
    var textarea = document.getElementById("mineText");
    textarea.value = ""; // Clear the textarea
    textarea.style.textDecoration = "none"; // Reset text decoration
    textarea.style.fontSize = "initial"; // Reset font size

}
  