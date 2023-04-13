
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
   let arr = [];
    // 1- create a function that takes a question as a parameter and prompts the 
    // question then returns the answer.

  let ask= (q)=>{
     let answers = prompt(q);
     return answers;
      
    }
    // 2- call this function on three questions.
    let ans1 = ask('Are you a student?');
    let ans2 = ask('Are you in your final year of university?');
    let ans3 = ask('Do you prefer online education?');
    
      // ask(ans1);
      // ask(ans2);
      // ask(ans3);



 let pushToArr = (ans1, ans2, ans3) => {

  arr.push(ans1, ans2, ans3);
   
  return arr;

}

 pushToArr(ans1, ans2, ans3);

 let printArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
    }  
  }          


      // 4- create a function to loop through the answers array and check each element if it 
      // is empty then replace it with "invalid" string.
          let loopThroughTheAnswers = (arr) => {

          for (let i = 0; i < arr.length; i++) {
              if(arr[0] ===''){
                arr[0]="invalid";
               }
              else if(arr[1] ==='') {
                arr[1]="invalid";
             }
              else if(arr[2] === ''){
              arr[2] = 'invalid';

             }

        }
        
        }
        loopThroughTheAnswers(arr); 
        printArr(arr);

      




