//what variables do we need to save
//program state
let userInputColor;
let currentColor;
let score = 0;
let currentColorValDiff;
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
    b: 130
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
    colorname: 'Luxurious red',
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
];

// jQuery Dom References
const $totalScore = $('.total-score-amt');
const $colorName = $('.color-name');
const $colorInput = $('#color-picker');
const $submitColorButton = $('.submit-color-button');

$totalScore.html(score);


//what functions might need

//what events might we need

//see color name 

//we'll have to convert hex to RGB

