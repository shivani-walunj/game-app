
let secretnumber=Math.trunc((Math.random())*20)+1;
console.log(secretnumber);
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
 const guess= Number(document.querySelector('.guess').value);
console.log(guess);
 if(!guess)
 {
  document.querySelector('.message').textContent= "⛔ No Number";
 }else if(guess===secretnumber){
document.querySelector('.message').textContent="🙈🎉  Correct guess ✨";
document.querySelector('body').style.backgroundColor='#60b347';
document.querySelector('.number').style.width='30rem';
document.querySelector('.number').textContent=guess;
if(highscore<score)
{
  highscore=score;
  document.querySelector('.highscore').textContent=highscore;
}
 }
 else if(guess>secretnumber){
  if(score>0)
  {
  document.querySelector('.message').textContent=" Too high";
  score-=2;
  document.querySelector('.score').textContent=score;
  }
  else{
    document.querySelector('.message').textContent="You lost";
   }
 }
   else if(guess<secretnumber){
    if(score>0){
    document.querySelector('.message').textContent="Too Low";
    score-=2;
    document.querySelector('.score').textContent=score;
   }
   else{
    document.querySelector('.message').textContent="You lost";
   }
     }
})
document.querySelector('.again').addEventListener('click',function()
{
  score=20;
  secretnumber=Math.trunc((Math.random())*20)+1;
  document.querySelector('.message').textContent="Start guessing...";
  document.querySelector('.score').textContent=score;
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
})
