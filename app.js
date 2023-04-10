
var result = confirm('Did you want to skip the welcoming message?'); 

if (result == true) {
   
   
    } else {
     
    let Username = prompt('Please Enter Your Name');

    let Gender = prompt('Please enter your Gender!');
      if(Gender == 'male') {
        alert('Welcome Mr', Username)
      } else if (Gender == 'female') {
        alert('Welcom Ms' , Username)
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


// let Username = prompt('Please Enter Your Name');

// let Gender = prompt('Please enter your Gender!');
//   if(Gender == 'male') {
//     alert('Welcome Mr', Username)
//   } else if (Gender == 'female') {
//     alert('Welcom Ms' , Username)
//   } else {
//     alert(' ')
//   }


//   let age = prompt('Please Enter Your age');

//   if(age <= 0) {
//     alert('Not allowed!!!')
//   } else {
//     alert('Allowed')
//   }
