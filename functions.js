// const getCompanyName = () => "SALT";
// console.log("salt> Functions loaded")

 myFunctions = {
  getCompanyName : function ()  {
      return "SALT";
  },
  invertColorsOfResults : function ()  {
    const mainResultElements = document.querySelectorAll('.mainResult');
  
    for (let i = 0; i < mainResultElements.length; i++) {
      const element = mainResultElements[i];
      console.log(element.textContent);
  
      if(element.classList.contains('positiveResult')){
        element.classList.remove('positiveResult');
        element.classList.add('negativeResult');
        continue;
      }
  
      if(element.classList.contains('negativeResult')){
        element.classList.remove('negativeResult');
        element.classList.add('positiveResult');
        continue;
      }
    }
  },
  // conditional formatting
  addStyleBasedOfContent : function (element, content) {
  const convertedNumber = Number(content);

  if(Number.isNaN(convertedNumber)) {
    return;
  }
  if(convertedNumber < 0) {
    element.classList.add('negativeResult');
    return;
  }
  element.classList.add('positiveResult');
},

  // search for elements and add values to class property.
  addResultStyling : function ()  {
  const mainResultElements = document.querySelectorAll('.mainResult');

  for (let i = 0; i < mainResultElements.length; i++) {
    // this code below takes out the text from the HTML and stores it in content
    const content = mainResultElements[i].textContent;

    // selects the elements with corresponding content and passes it back to the function
    myFunctions.addStyleBasedOfContent(mainResultElements[i], content);

    // so this function outputs nothing it basically initiates the addStyleBasedOfContent function
  
  }
},

  buttonSmash : function ()  {
  const btn = document.getElementById('btnInversion');
  btn.onclick = myFunctions.invertColorsOfResults;
},
}
  console.log("salt> Functions loaded");
    