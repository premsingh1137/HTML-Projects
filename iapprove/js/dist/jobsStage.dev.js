"use strict";

function search() {
  // Get the value entered by the user
  var searchValue = document.getElementById("searchField").value; // Update the display div with the entered value

  document.getElementById("displayValue").textContent = searchValue;
}