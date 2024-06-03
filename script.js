class Brawler {
  constructor(name, info, range, ult, hyperCharge) {
    this.brawlerName = name;
    this.brawlerInfo = info;
    this.range = range;
    this.ult = ult;
    this.hyperCharge = hyperCharge;
  }
}

const brawlers = [
  new Brawler(
    "Colt",
    "Colt is the star attraction at Starr Park! His good looks, charisma and gun twirling tricks win over any audience, except maybe Shelly.",
    "Long",
    "Bullet Storm",
    "Dual Wielding"
  ),
  new Brawler(
    "Bull",
    "Bull isn't as carefree as he was in his youth, but just because his rowdy days are behind him doesn't mean he won't still crush someone who's asking for it.",
    "Normal",
    "Bulldozer",
    "Jaws of Steel"
  ),
  new Brawler(
    "El Primo (El Corazon)",
    "El Primo is always in the spotlight and that's right where he wants to be! There's no audience he can't win over, except maybe his fellow performers...",
    "Short",
    "Flying Elbow Drop",
    "Gravity Leap"
  ),
  new Brawler(
    "Brock",
    "Brock is a smack-talking video game enthusiast. His big attitude hides a more introverted personality, but he'll still do whatever it takes to win!",
    "Long",
    "Rocket Rain",
    "Rocket Barrage"
  ),
  new Brawler(
    "Barley",
    "A bartending robot designed to mix drinks and banter with patrons, Barley also makes sure to keep his bar clean, to the detriment of anyone who makes a mess.",
    "Long",
    "Last Call",
    "none"
  ),
  new Brawler(
    "Rosa",
    "Rosa is a botanist with a strong connection to plants. She's also a boxer, and won't hesitate to punch one of her specimens if it goes out of control.",
    "Short",
    "Strong Stuff",
    "Grasping Roots"
  ),
  new Brawler(
    "Nita",
    "Nita is a ferocious child who never backs down from a fight! The teddy bear on her head serves as a warning to others: don't poke the bear.",
    "Normal",
    "Over Bearing",
    "Hyper Bearing"
  ),
  new Brawler(
    "Poco",
    "Poco believes music can change people's lives. He's so enthusiastic about it that he never stops playing, even after people ask him to!",
    "Long",
    "Encore",
    "none"
  )
];

function generateRandomBrawlerInfo() {
  const randomIndex = Math.floor(Math.random() * brawlers.length);
  const randomBrawler = brawlers[randomIndex];
  const brawlerInfoElement = document.getElementById('brawler-info');
  brawlerInfoElement.innerHTML = `
    <p><strong>Brawler Name:</strong> ${randomBrawler.brawlerName}</p>
    <p><strong>Info:</strong> ${randomBrawler.brawlerInfo}</p>
    <p><strong>Range:</strong> ${randomBrawler.range}</p>
    <p><strong>Ultimate Ability:</strong> ${randomBrawler.ult}</p>
    <p><strong>Hyper Charge Ability:</strong> ${randomBrawler.hyperCharge}</p>
  `;
}

document.getElementById('generate-btn').addEventListener('click', generateRandomBrawlerInfo);
