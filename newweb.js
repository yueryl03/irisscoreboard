/*
You will create a scoreboard that allows the user to add and remove points

1. You will need variables to store the points
2. When a user clicks on the add button, you will need to add to the variable, and then display it in HTML
3. When a user clicks the subtract button, you will need to subtract from the variable, and then display it in HTML
4. Use CSS Grids to build your scoreboard layout

CHALLENGE:
- Create a reset button that resets both scores
- Make it so your scoreboard cannot go below 0 points

GOOD LUCK 🤹‍♂️
*/

var p1score = 0;
var p2score = 0;



document.querySelector('.buttonplayer1plus').addEventListener("click", function(){
  // 1. add 1 to the variable player1score
p1score = p1score + 1;
  // 2. display the variable using innerHTML
  document.querySelector(".player1score").innerHTML = p1score;
})
document.querySelector('.buttonplayer1minus').addEventListener("click", function(){
  p1score = p1score - 1;
  if(p1score>0){
    document.querySelector(".player1score").innerHTML = p1score;
  }else if(p1score=0){
    document.querySelector(".player1score").innerHTML = 0;
  }else{
    document.querySelector(".player1score").innerHTML = 0;
  }})
document.querySelector('.buttonplayer2plus').addEventListener("click", function(){
  p2score = p2score + 1;
  document.querySelector(".player2score").innerHTML = p2score;

})
document.querySelector('.buttonplayer2minus').addEventListener("click", function(){
  p2score = p2score - 1;
  if(p2score>0){
    document.querySelector(".player2score").innerHTML = p2score;
  }else if(p2score=0){
    document.querySelector(".player2score").innerHTML = 0;
  }else{
    document.querySelector(".player2score").innerHTML = 0;
}})

document.querySelector('.buttonreset').addEventListener("click", function(){
  document.querySelector(".player1score").innerHTML = 0;
  document.querySelector(".player2score").innerHTML = 0;
})
