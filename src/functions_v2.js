myFunctions = {
  

 updateList : function (anyList) {
    const userList = myFunctions.createUserList(anyList);
    elSelector.innerHTML = ''; // Clear the current list
    elSelector.appendChild(userList); // Append the new list
  },



  filters : function (lijst) {
       
   
   
    // declare gender
    const ageCheckbox = (document.querySelector("input[name=age]").checked);
    // both checkboxes
    const maleCheckbox = (document.querySelector("input[name=male]").checked);
    const femaleCheckbox = (document.querySelector("input[name=female]").checked);
    // turn the other one false and the other way around
    
    // active filters
    let filteredList = lijst;
    let maleFilter = lijst.filter(user => user.gender === 'male');
    let femaleFilter = lijst.filter(user => user.gender === 'female');
    let ageFilter = lijst.filter(user => user.dob.age <= 40)
    // combi's
    let fAgeFilter = ageFilter.filter(user => user.gender === 'female'); 
    let mAgeFilter = ageFilter.filter(user => user.gender === 'male'); 

  


    //filters
    //triple
    if (!maleCheckbox && !femaleCheckbox && !ageCheckbox) {
      filteredList = lijst;
    } 
    if (maleCheckbox && femaleCheckbox && ageCheckbox) {
      filteredList = ageFilter;
    }
    
    //singles
    if (maleCheckbox && !femaleCheckbox && !ageCheckbox) {
      filteredList = maleFilter;
    }
    if (!maleCheckbox && femaleCheckbox && !ageCheckbox) {
      filteredList = femaleFilter;
    }
    if (!maleCheckbox && !femaleCheckbox && ageCheckbox) {
      filteredList = ageFilter;
    }

    // duos
    if (!maleCheckbox && femaleCheckbox && ageCheckbox) {
      filteredList = fAgeFilter;
    }
    if (maleCheckbox && !femaleCheckbox && ageCheckbox) {
      filteredList = mAgeFilter;
    }
    if (maleCheckbox && femaleCheckbox && !ageCheckbox) {
      filteredList = lijst;
    }
    
    myFunctions.updateList(filteredList);
    },
  

  

  filterTrigger : function (lijst) {
    
       // age filter
    const checkbox = document.querySelector("input[name=age]");
    checkbox.addEventListener('click', function() {
    myFunctions.filters(lijst);
    })

    // male filter
    const checkboxm = document.querySelector("input[name=male]");
    checkboxm.addEventListener('click', function() {
    myFunctions.filters(lijst);
    });
  
    // female filter
    const checkboxf = document.querySelector("input[name=female]");
    checkboxf.addEventListener('click', function() {
    myFunctions.filters(lijst);
    });
    

  },
   
  
  // create header
    createUserNameHeader : function (user) {
      const userHeading = document.createElement('h2');
      userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
      return userHeading;
    },
  
    // create image
    createUserImage : function (user) {
      const userImage = document.createElement('img');
      userImage.src = `${user.picture.large}`;
      return userImage;
    },
  
    // create persona
    createPersona : function (user) {
      const userDiv = document.createElement('div');
      userDiv.classList.add('persona','cta','bg', 'male');
      if (user.gender == 'female') {
      userDiv.classList.add('female');
      }
      return userDiv;
    },
  
  
    // ---------- data.results is a callback passed to users
    createUserList: function (users)  {
  
      const userList = document.createElement('div');
      userList.classList.add('wrapper');
  
    for (let i = 0; i < users.length; i++) {
     
      const userDiv = myFunctions.createPersona(users[i]); 
  
      userDiv.appendChild(myFunctions.createUserNameHeader(users[i]));                       
      userDiv.appendChild(myFunctions.createUserImage(users[i]));  
      
      userList.appendChild(userDiv);
    }
  
    return userList;
  },
  
  
  
  
    //  FETCH
    getUsers: function (element) {
    fetch('https://randomuser.me/api/?results=52')
      .then(response => response.json())
      
      .then(data => { 
        // ---------- create container (data.results calls back to the function)
        const userList = myFunctions.createUserList(data.results);    
        elSelector = document.querySelector(element);
        elSelector.appendChild(userList);
           
        // Add the event listener after the list is created
        myFunctions.filterTrigger(data.results);
        
      });
      
  }
  
  //end of myFunctions:
   }
  
  
    console.log("salt> Functions loaded");
      
  