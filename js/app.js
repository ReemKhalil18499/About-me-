'use strict';






let Name=prompt("what is your name?");
alert("Welcome"+ Name);

let score=0;

let ans=prompt('Guess My favorite Number From 1/5')
for(let i= 0; i<4; i++)
if(ans==='4'){
alert('Correct! Its 4 !')
score++;
break;
}
else if (ans<'4'){
    alert("its too low , Try again !")
    ans=prompt('Guess My favorite Number From 1/5')

}
else if(ans>'4'){
alert("its too high , pleasse try again !")
 ans=prompt('Guess My favorite Number From 1/5')
}


let favoritecolor=prompt('is my favorite color pink?');
favoritecolor=favoritecolor.toLowerCase(); 

if(favoritecolor==='yes'|| favoritecolor==='y' ){
    
     alert('correct my name is Reem!');
     score++;

 } 
 else if (favoritecolor==='no'|| favoritecolor==='n' )
     alert('Wrong! , My name is Reem');
     

 
 let school=prompt('did i study in LTUC?');
 school=school.toLowerCase(); 
 if(school==='yes'|| school==='y'){
    alert('Correct!, i Studied in LTUC!');
    score++;

  } 
  else if (school==='no'|| school==='n' ){
    alert('Wrong,i Studied in LTUC! '); 
  }

let age=prompt('am i 22 years old?');
age=age.toLowerCase(); 
 if(age==='yes'|| age==='y' ){
     console .log('correct!');
     alert('Correct i am 22 years old  ');
     score++;

 } 
   else if (age==='no'|| favoritecolor==='n' ){
     alert('Wrong i am 22 years old  ');
   }

     
     let live=prompt('Do i live in amman?');
     live=live.toLowerCase(); 
 if(live==='yes'|| live==='y'){
    console .log('correct!');
    alert('Correct , i live in amman ! ');
    score++;

}
 else if (live ==='no'|| live==='n' ){
    
    alert('Wrong, i live in amman ! ');
}
let happy=prompt('am i happy?');
happy=happy.toLowerCase(); 
 if(happy==='yes'|| happy==='y'){
    console .log('correct!');
    alert('Correct i am happy hope the same for you! ');
    score++;

} else if (happy==='no'|| happy==='n' ) {
  
    alert('Wrong, i am happy ! ');
}

let food=['mansaf','sushi','kbsa','kfta']
let food1;
for (let i = 0; i < 6; i++){ 
    console . log('first loop',i);
    food1=prompt("what is my favorite food ?");
    food1=food1.toLowerCase();


for (let j = 0; j <food.length ;j++){
    console . log('second loop',j);
    if (food1===food[j]) {
        alert("yes you are correct ")
        i=7; 
        score++;

        
    }
    }  
if (i!=7){
alert("it is wrong please Try again !")
}

}

alert('you have a score of '+ score+'/7');

