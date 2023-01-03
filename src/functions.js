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
///////////////////////////////////////////////////////
    //  FETCH
  getUsers: function (element) {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {

        // create container
        const userList = document.createElement('div');
        userList.classList.add('wrapper');
      
        // create persona's (1 by 1)
        for (let i = 0; i < data.results.length; i++) {

          const user = data.results[i];

            const userHeading = document.createElement('h2');
            userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
            userList.appendChild(userHeading);

            const userImage = document.createElement('img');
            userImage.src = `${user.picture.large}`;

            const userDiv = document.createElement('div');
            userDiv.classList.add('persona');
            if (user.gender == 'female') {
              userDiv.classList.add('female');
            }

            
            userDiv.appendChild(userImage);  
            userDiv.appendChild(userHeading);                       
            userList.appendChild(userDiv);
            
        }

    // specify place of insertion
      elSelector = document.querySelector(element);
      elSelector.appendChild(userList);
    })
    
  }
}
  console.log("salt> Functions loaded");
    

