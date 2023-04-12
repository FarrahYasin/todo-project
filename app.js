
var result = confirm('Did you want to skip the welcoming message?'); 

if (result == true) {
   
    } else {
     
    let Username = prompt('Please Enter Your Name');

    let Gender = prompt('Please enter your Gender!');
      if(Gender == 'male') {
        alert('Welcome Mr '+ Username)
      } else if (Gender == 'female') {
        alert('Welcom Ms ' + Username)

      } else {
        alert(' ')
      }
    
    
      let age = prompt('Please Enter Your age');
    
      if(age <= 0) {
        alert('Not allowed!!!')
      } else {
        alert('Allowed')
      }
  }


  // lab 06
  


var arr = [];

var userInputQ1 = prompt('Are you a student?');
var userInputQ2 = prompt('Are you in your final year of university?');
var userInputQ3 = prompt('Do you prefer online education?');


let pushToArr = (userInputQ1, userInputQ2, userInputQ3) => {

    // arr = arr.push(userInputQ1,userInputQ2, userInputQ3);
    arr.push(userInputQ1, userInputQ2, userInputQ3);
    //  console.log(arr[i]);
  return arr;
  
  }
  // pushToArr();
  
  let printArr = (arr) => {

    for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
      
    }
    
    }  

let checkUserInput = (userInputQ1, userInputQ2, userInputQ3) => {

    if(userInputQ1 === 'Yes' || userInputQ2 === 'Yes' || userInputQ3 ==='Yes') {
      return 'Yes' + pushToArr(userInputQ1, userInputQ2, userInputQ3) + printArr(arr);

    }else if(userInputQ1 === 'No'  || userInputQ2 === 'No' || userInputQ3 ==='No') {
      return 'No' +pushToArr(userInputQ1, userInputQ2, userInputQ3) + printArr(arr);
    }
    else if(userInputQ1 === '' && userInputQ2 === '' && userInputQ3 === '' ){
      console.log('Invalid');// if the answers was empty 
    }
    else 
      console.log('you should answer Yes or No only!'); 
  }

// var userInputQ1 = prompt('Are you a student?');
// var userInputQ2 = prompt('Are you in your final year of university?');
// var userInputQ3 = prompt('Do you prefer online education?');

// var results = checkUserInput(userInputQ1,userInputQ2,userInputQ3);
checkUserInput(userInputQ1,userInputQ2,userInputQ3);








