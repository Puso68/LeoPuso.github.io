/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

function handleClick() {
  var textarea = document.getElementById("input-text");
  var cipherResult = shiftCipher(textarea.value);

  var resultElement = document.getElementById("result");
  resultElement.textContent = cipherResult;
}


/**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }

  return result;
}

function textSize12pt() {
  var textarea = document.getElementById("input-text");
  var resultElement = document.getElementById("result");

  textarea.style.fontSize = "12pt"
  resultElement.style.fontSize = "12pt"

}

function textSize24pt() {
  var textarea = document.getElementById("input-text");
  var resultElement = document.getElementById("result");

  textarea.style.fontSize = "24pt"
  resultElement.style.fontSize = "24pt"

}

function allCaps() {
  var textarea = document.getElementById("input-text");
  var resultElement = document.getElementById("result");
 

  var checkbox = document.getElementById("all-caps");
  
  if (checkbox.checked) {
    textarea.value = textarea.value.toUpperCase();
    resultElement.textContent = resultElement.textContent.toUpperCase();
    
  } else {
    textarea.value = textarea.value.toLowerCase();
    resultElement.textContent = resultElement.textContent.toLowerCase();
  }

}

function resetFields() {
  var textarea = document.getElementById("input-text");
  textarea.value = ""; // Reset the textarea's value

  var fieldset = document.querySelector("fieldset");
  fieldset.innerHTML = `
    <legend>Text to Encrypt</legend>
    <textarea id="input-text" rows="10" cols="60" placeholder="Enter your message to encrypted here"></textarea>
  `;

  var resultElement = document.getElementById("result");
  resultElement.textContent = "";
}
