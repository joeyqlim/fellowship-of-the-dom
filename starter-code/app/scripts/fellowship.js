console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var sectionME = document.createElement('section');
  sectionME.setAttribute('id', 'middle-earth');
  body.appendChild(sectionME);

  lands.forEach((land)=> {
    var x = document.createElement('article');
    x.innerHTML = `<h1>${land}</h1>`; 
    sectionME.appendChild(x)
  })
}

makeMiddleEarth();
console.log(body) // works!

// Part 2
var theShire = body.querySelectorAll('article')[0];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var hobbitList = document.createElement('ul');
  hobbits.forEach((hobbit) => {
    var y = document.createElement('li');
    y.setAttribute('class', 'hobbit');
    y.innerText = `${hobbit}`;
    hobbitList.appendChild(y);
  })
  theShire.appendChild(hobbitList);
}

makeHobbits(); // works. instructions are unclear.

// Part 3
var frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var ringDiv = document.createElement('div');
  ringDiv.classList = 'magic-imbued-jewelry';
  ringDiv.setAttribute('onclick', 'nazgulScreech()');
  frodo.appendChild(ringDiv);
}

keepItSecretKeepItSafe(); // works


// Part 4

var rivendell = body.querySelectorAll('article')[1];

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');
  var buddiesList = document.createElement('ul');
  buddies.forEach((buddy) => {
    var z = document.createElement('li');
    z.innerText = `${buddy}`;
    buddiesList.appendChild(z);
  })
  aside.appendChild(buddiesList);
  rivendell.appendChild(aside);
}

makeBuddies();


// Part 5

var strider = body.querySelectorAll('li')[7];
console.log(strider)

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var newNode = 'Aragorn';
  strider.innerText = newNode;
}

beautifulStranger(); // works


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
