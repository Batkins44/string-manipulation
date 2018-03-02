"use strict";

var txtInput = document.getElementById("input");

var button = document.getElementById("btn");
var reverseDiv = document.getElementById("reverse");
var alphaDiv = document.getElementById("alphabits");
var palDiv = document.getElementById("palindrome");



function reversal() {
var splitString = testString.split("");
var reverseString = splitString.reverse();
var joinString = reverseString.join("");
console.log(joinString);
reverseDiv.innerHTML = `${joinString}`;

}

function alphabits() {
var splitString = testString.split("");
var alphaSort = splitString.sort();
var joinString = alphaSort.join("");
console.log(joinString);
alphaDiv.innerHTML = `${joinString}`;


}

function palindrome() {
    var splitString = testString.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");
    if (joinString == testString){
        console.log("Yes");
        palDiv.innerHTML = "<h1>YES!!!!!!</h1>";
    }
        else{
            palDiv.innerHTML = "<h1>NO!!!!!</h1>";
        }

    }


var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

function alphaOnly(event) {
    var key = event.keyCode;
    console.log(key);
    if (key < 65 || key > 122){
        if (key !== 13 && key !== 32){
        removeNum();
        }
    }else if(key > 90 && key < 97){
        if (key !== 13 && key !== 32){
            removeNum();
            }
    }
    if (key == 13){
        runAll();
    }
    

    
    console.log("here");
  }

function removeNum(){
    window.alert("Only letters");
    $('#input').focus(function() {
    $(this).val('');

});

}

function runAll(){
testString = txtInput.value;
reversal();
alphabits();
palindrome();
txtInput.value = "";
}

function enterFunction(event){
    var key = event.keycode;
    if(key == 13){
        runAll();
    }
}

txtInput.addEventListener("keypress",alphaOnly);
button.addEventListener("click",runAll);

