var txtInput = document.querySelector(".text-input");
var btnTranslate = document.querySelector(".btn-translate");
var output = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL (text) {
  return serverURL + "?" + "text=" +text
}
// function clickHandler(){
//   console.log(txtInput.value)
// }

// console.log(getTranslatedURL)
function errorHandler(error){
  console.log("error occured", error);
}
function clickHandler() {
  var inputText = txtInput.value; // taking input

  // calling server for processing
  fetch(getTranslateURL(inputText))
      .then(response => response.json())
      .then(json => {
          var translatedText = json.contents.translated;
          output.innerText = translatedText; // output
         })
      .catch(errorHandler)   
};



btnTranslate.addEventListener("click", clickHandler);