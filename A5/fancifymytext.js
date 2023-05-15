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
  