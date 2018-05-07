//what variables do we need to save
//program state
let userInputColor;
let currentColor;
let score = 0;
let currentColorValDiff;
const $guessColorTxt = $('.guess-color-txt');
const $actualColorTxt = $('.actual-color-txt');
//what should your data structure be for colors
const colors = [
    {
    colorName: 'Honey Bees',
    r: 251,
    g:214,
    b:130,
    },
{
    colorName: 'Tassel',
    r: 198,
    g: 136,
    b: 74,
},
{
    colorName: 'Fireweed',
    r: 123,
    g: 55,
    b: 48,
    },
{
    colorName: 'Magical',
    r: 192,
    g: 175,
    b: 208,
},
{
    colorName: 'Cyberspace',
    r: 68,
    g: 72,
    b: 77,
    },
{
    colorName: 'Dirty Martini',
    r: 221,
    g: 208,
    b: 182,
},
{
   
    colorName: 'Dress Blues',
    r: 43,
    g: 67,
    b: 130,
},
{

    colorName: "Caviar",
    r: 49,
    g: 48,
    b: 130,
},
{
 
    colorName: 'Salty Dog',
    r: 35,
    g: 64,
    b: 88,
  },
{
    colorName: 'Forget Me Not',
    r: 113,
    g: 105,
    b: 152,
  },
{
    colorName: 'Jacaranda',
    r: 146,
    g: 208,
    b: 208,    
  },
{
    colorName: "Queen Anne's Lace",
    r: 236,
    g: 234,
    b: 213,
    },
    {
    colorName: 'Mariner',
    r: 152,
    g: 193,
    b: 203,
  },
{
    colorName: 'Luxurious red',
    r: 134,
    g: 58,
    b: 66,
  },
{
    colorName: 'Potentially Purple',
    r: 209,
    g: 203,
    b: 223,
    },
{
    colorName: 'Knitting Needles',
    r: 195, 
    g: 193, 
    b: 188, 
}
];

// jQuery Dom References
const $totalScore = $('.total-score-amt');
const $colorName = $('.color-name');
const $colorInput = $('#color-picker');
const $submitColorBtn = $('.submit-color-btn');

$totalScore.html(score);

function playRound() {
    console.log(colors);
    currentColor = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
    console.log(currentColor);
    
    $colorName.html(currentColor.colorName);
}

playRound();

$submitColorBtn.click(function(){
    const hexInput = $colorInput.val();
    console.log('selected!');
    console.log(hexToRgb(hexInput));
    userInputColor = hexToRgb(hexInput);
    $guessColorTxt.html(`You guessed rgb(${userInputColor.r}, ${ userInputColor.g }, ${ userInputColor.b})`);

    console.log(hexInput);
})
//sourced from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


//what functions might need

//what events might we need

//see color name 

//we'll have to convert hex to RGB

