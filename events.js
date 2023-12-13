console.log('This is Seperate Js File');
// Option 2  [<button onclick="makeRed()">Make Red</button>] Mostly use this option 2//

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3.1//

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor ='blue';
}

// option 3.2 //

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple (){
    document.body.style.background = 'purple '
}

//option 4

const pinkButton = document.getElementById( 'make-pink');
pinkButton.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 final[ This one is also important]

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor ='goldenrod';
})