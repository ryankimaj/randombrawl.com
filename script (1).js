class Brawler {
  constructor(name, info, range, ult, hyperCharge, imageSrc) {
    this.brawlerName = name;
    this.brawlerInfo = info;
    this.range = range;
    this.ult = ult;
    this.hyperCharge = hyperCharge;
    this.imageSrc = imageSrc;
  }
  getRangeModifier() {
    switch (this.range) {
      case "Short":
        return 0.2;
      case "Long":
        return -0.2;
      case "Normal":
        return 0.15;
      default:
        return 0;
    }
  }
}


const brawlers = [
  new Brawler(
    
    "Colt",
    "Colt is the star attraction at Starr Park! His good looks, charisma and gun twirling tricks win over any audience, except maybe Shelly.",
    "Long",
    "Bullet Storm",
    "Dual Wielding",
    "images/colt.png"
    
  ),
  new Brawler(
    
    "Bull",
    "Bull isn't as carefree as he was in his youth, but just because his rowdy days are behind him doesn't mean he won't still crush someone who's asking for it.",
    "Normal",
    "Bulldozer",
    "Jaws of Steel",
    "images/bull.webp"
    
  ),
  new Brawler(
    
    "El Primo (El Corazon)",
    "El Primo is always in the spotlight and that's right where he wants to be! There's no audience he can't win over, except maybe his fellow performers...",
    "Short",
    "Flying Elbow Drop",
    "Gravity Leap",
    "images/el primo.webp"
    
  ),
  new Brawler(
    
    "Brock",
    "Brock is a smack-talking video game enthusiast. His big attitude hides a more introverted personality, but he'll still do whatever it takes to win!",
    "Long",
    "Rocket Rain",
    "Rocket Barrage",
    "images/Brock.webp"
    
  ),
  new Brawler(
    
    "Barley",
    "A bartending robot designed to mix drinks and banter with patrons, Barley also makes sure to keep his bar clean, to the detriment of anyone who makes a mess.",
    "Long",
    "Last Call",
    "none",
    "images/Barley.webp"
    
  ),
  new Brawler(
    
    "Rosa",
    "Rosa is a botanist with a strong connection to plants. She's also a boxer, and won't hesitate to punch one of her specimens if it goes out of control.",
    "Short",
    "Strong Stuff",
    "Grasping Roots",
    "images/Rosa.webp"
    
  ),
  new Brawler(
    
    "Nita",
    "Nita is a ferocious child who never backs down from a fight! The teddy bear on her head serves as a warning to others: don't poke the bear.",
    "Normal",
    "Over Bearing",
    "Hyper Bearing",
    "images/Nita.webp"
    
  ),
  new Brawler(
    
    "Poco",
    "Poco believes music can change people's lives. He's so enthusiastic about it that he never stops playing, even after people ask him to!",
    "Long",
    "Encore",
    "none",
    "images/Poco.webp"
    
  )
];

function generateRandomBrawlerInfo() {
  const randomIndex = Math.floor(Math.random() * brawlers.length);
  
  const randomBrawler1 = brawlers[randomIndex];
  
  const randomIndex2 = Math.floor(Math.random() * brawlers.length);
  
  let randomBrawler2 = brawlers[randomIndex2];
  
  while (randomBrawler1 === randomBrawler2) {
    randomBrawler2 = brawlers[Math.floor(Math.random() * brawlers.length)];
  }

  const brawlerInfoElement = document.getElementById('brawler-info');
  brawlerInfoElement.innerHTML = `
    <img src="${randomBrawler1.imageSrc}" class="brawler-image">
    <p><strong>Brawler Name:</strong> ${randomBrawler1.brawlerName}</p>
    <p><strong>Info:</strong> ${randomBrawler1.brawlerInfo}</p>
    <p><strong>Range:</strong> ${randomBrawler1.range}</p>
    <p><strong>Ultimate Ability:</strong> ${randomBrawler1.ult}</p>
    <p><strong>Hyper Charge Ability:</strong> ${randomBrawler1.hyperCharge}</p>
    <hr>
    <img src="${randomBrawler2.imageSrc}" class="brawler-image">
    <p><strong>Brawler Name:</strong> ${randomBrawler2.brawlerName}</p>
    <p><strong>Info:</strong> ${randomBrawler2.brawlerInfo}</p>
    <p><strong>Range:</strong> ${randomBrawler2.range}</p>
    <p><strong>Ultimate Ability:</strong> ${randomBrawler2.ult}</p>
    <p><strong>Hyper Charge Ability:</strong> ${randomBrawler2.hyperCharge}</p>
  `;


  document.getElementById('back-btn').style.display = 'inline-block';
  document.getElementById('battle-btn').style.display = 'inline-block';
}

function resetPage() {

  document.getElementById('brawler-info').innerHTML = '<p>Click the button to generate information about a random brawler.</p>';

  document.getElementById('back-btn').style.display = 'none';
  document.getElementById('battle-btn').style.display = 'none';
}

function battle () {

  const randomBrawler1 = brawlers[Math.floor(Math.random() * brawlers.length)];
  const randomBrawler2 = brawlers[Math.floor(Math.random() * brawlers.length)];

  
  const randomModifier1 = randomBrawler1.getRangeModifier();
  const randomModifier2 = randomBrawler2.getRangeModifier();

  const random1 = Math.random();
  const random2 = Math.random();

  const chance1 = random1 + randomModifier1;
  const chance2 = random2 + randomModifier2;

  let winner;

  if (chance1 > chance2) {
    this.brawlerName = randomBrawler1.brawlerName;
    winner = randomBrawler1;
  } 
  else if (chance1 < chance2) {
    this.brawlerName = randomBrawler2.brawlerName;
    winner = randomBrawler2;
  } 
  else {
    this.brawlerName = "It's a tie!";
    winner = "It's a tie!";
  }

  alert(`The winner is: ${winner.brawlerName} !`);

}

document.getElementById('generate-btn').addEventListener('click', generateRandomBrawlerInfo);
document.getElementById('back-btn').addEventListener('click', resetPage);
document.getElementById('battle-btn').addEventListener('click', battle);
