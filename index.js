let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('button1');
let fortune = document.getElementById('Fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  Fortune.innerHTML = fortuneSelector();
  button1.innerHTML='';
  button1.style.cursor = 'default';
  button1.style.backgroundColor='rgb(132, 0, 255)';
  document.getElementById('button1').removeAttribute("onclick");
  
  

}

