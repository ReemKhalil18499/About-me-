'use strict';


let Name=prompt("what is your name?");
alert("Welcome"+  Name);

let score=0;

function question1() {
let ans=prompt('Guess My favorite Number From 1/5')
for(let i = 2; i > -1; i--){
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
alert("its too high , please try again !")
ans=prompt('Guess My favorite Number From 1/5')
}
if(i===0){
    alert("You are out of tries the answer was 4! ")
}
}
}
question1();

function question2() {
let favoritecolor=prompt('is my favorite color pink?');
favoritecolor=favoritecolor.toLowerCase(); 

if(favoritecolor==='yes'|| favoritecolor==='y' ){
    
     alert('correct my name is Reem!');
     score++;

 } 
 else if (favoritecolor==='no'|| favoritecolor==='n' )
     alert('Wrong! , My name is Reem');
     
}
     question2();   

     function question3() {
 let school=prompt('did i study in LTUC?');
 school=school.toLowerCase(); 
 if(school==='yes'|| school==='y'){
    alert('Correct!, i Studied in LTUC!');
    score++;

  } 
  else if (school==='no'|| school==='n' ){
    alert('Wrong,i Studied in LTUC! '); 
  }
}
  question3();
  function question4() {
let age=prompt('am i 22 years old?');
age=age.toLowerCase(); 
 if(age==='yes'|| age==='y' ){
     alert('Correct i am 22 years old  ');
     score++;

 } 
   else if (age==='no'|| favoritecolor==='n' ){
     alert('Wrong i am 22 years old  ');
   }
  }
  question4();
     
   function question5() {
     let live=prompt('Do i live in amman?');
     live=live.toLowerCase(); 
 if(live==='yes'|| live==='y'){
    alert('Correct , i live in amman ! ');
    score++;

}
 else if (live ==='no'|| live==='n' ){
    
    alert('Wrong, i live in amman ! ');
}
   }
question5();

function question6() {
let happy=prompt('am i happy?');
 if(happy==='yes'|| happy==='y'){
    alert('Correct i am happy hope the same for you! ');
    score++;

} else if (happy==='no'|| happy==='n' ) {
  
    alert('Wrong, i am happy ! ');
}
}
question6();

function question7() {
let food=['mansaf','sushi','kbsa','kfta'];
let food1=prompt("what is my favorite food ?")
let food2=false
for (let i = 5;i > -1;i--){ 
for (let j = 0; j <food.length ;j++){
    if (food[j]===food1) {
        alert("yes you are correct , here are all the answers"+ food);
        food2=true
        score++;
        break;
    }
    }
    alert("it is wrong please Try again !")
    food1=prompt("what is my favorite food ?")
}
}
question7();
alert('you have a score of '+ score+'/7');


function question1() {
    let ans = prompt('Guess My favorite Number From 1/5')
    for (let i = 0; i < 4; i++)
        if (ans === '4') {
            alert('Correct! Its 4 !')
            score++;
            break;
        }
        else if (ans < '4') {
            alert("its too low , Try again !")
            ans = prompt('Guess My favorite Number From 1/5')

        }
        else if (ans > '4') {
            alert("its too high , please try again !")
            ans = prompt('Guess My favorite Number From 1/5')
        }

}
question1();


function question2() {


    let favoritecolor = prompt('is my favorite color pink?');
    favoritecolor = favoritecolor.toLowerCase();

    if (favoritecolor === 'yes' || favoritecolor === 'y') {

        alert('correct my name is Reem!');
        score++;

    }
    else if (favoritecolor === 'no' || favoritecolor === 'n')
        alert('Wrong! , My name is Reem');
}
question2();


function question3() {

    let school = prompt('did i study in LTUC?');
    school = school.toLowerCase();
    if (school === 'yes' || school === 'y') {
        alert('Correct!, i Studied in LTUC!');
        score++;

    }
    else if (school === 'no' || school === 'n') {
        alert('Wrong,i Studied in LTUC! ');
    }
}
question3();

function question4() {
    let age = prompt('am i 22 years old?');
    age = age.toLowerCase();
    if (age === 'yes' || age === 'y') {
        console.log('correct!');
        alert('Correct i am 22 years old  ');
        score++;

    }
    else if (age === 'no' || age === 'n') {
        alert('Wrong i am 22 years old  ');
    }
}
question4();

function question5() {

    let live = prompt('Do i live in amman?');
    live = live.toLowerCase();
    if (live === 'yes' || live === 'y') {
        console.log('correct!');
        alert('Correct , i live in amman ! ');
        score++;

    }
    else if (live === 'no' || live === 'n') {

        alert('Wrong, i live in amman ! ');
    }
}
question5();



function question6() {

    let happy = prompt('am i happy?');
    happy = happy.toLowerCase();
    if (happy === 'yes' || happy === 'y') {
        console.log('correct!');
        alert('Correct i am happy hope the same for you! ');
        score++;

    } else if (happy === 'no' || happy === 'n') {

        alert('Wrong, i am happy ! ');
    }
}
question6();


function question7() {
    let food2;
    let food = ['mansaf', 'sushi', 'kbsa', 'kfta']
    let food1 = prompt("what is my favorite food ?")
     food2 = false;
    for (let i = 5; i > -1; i--) {
        for (let j = 0; j < food.length; j++) {
            console.log(food[j]);
            if (food[j] === food1) {
                alert("yes you are correct , here are all the answers" + food);
                 food2 = true; 
                score++;
                break;
            }
        }
        alert("it is wrong please Try again !");
        food1 = prompt("what is my favorite food ?")
            
        }

    }
    question7();
    alert('you have a score of ' + score + '/7');


