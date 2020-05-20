var keyword_1 = "1";
var keyword_2 = "2";
var keyword_3 = "3";
var keyword_4 = "4";
var keyword_5 = "5";
var keyword_6 = "6";

var current_selected = "default";

var key_1 = false;
var key_2 = false;
var key_3 = false;
var key_4 = false;
var key_5 = false;
var key_6 = false;


function uifocus(x) {
    window.current_selected = x;
    var i;
    for (i = 1; i < 7; i++) {
        document.getElementById(i).classList.add('clue_hide');
    }
  console.log("all clues hidden")
  document.getElementById(x).classList.remove('clue_hide');
  console.log("clue #" + x + " removed hidden attr");
  document.getElementById(x).classList.add('clue_active');
  console.log("clue #" + x + " active");
  document.getElementById("guessbutton").classList.remove('guess_button_hidden');
  document.getElementById("guess").classList.remove('bar_hidden');
  document.getElementById("backbutton").classList.remove('back_button_hidden');
  document.getElementById("helpbutton").classList.add('help_button_hidden');
}
function uiunfocus() {
    var i;
    for (i = 1; i < 7; i++) {
        document.getElementById(i).classList.remove('clue_hide');
        console.log("clue #" + i + " unhidden")
        document.getElementById(i).classList.remove('clue_active');
        console.log("clue #" + i + " removed active attr");
    }
    document.getElementById("guessbutton").classList.add('guess_button_hidden');
  document.getElementById("guess").classList.add('bar_hidden');
  document.getElementById("backbutton").classList.add('back_button_hidden');
  document.getElementById("helpbutton").classList.remove('help_button_hidden');
    document.getElementById("guess").value = "What's Different?";
    wincheck();
}

function wawa() {
    hideKeyboard();
  var x = document.getElementById('guess').value;
    console.log("the users input was '" + x + "'");
  /* document.getElementById('alert').innerHTML = 'The user input is: ' + x;*/
    console.log("the current selected image is hunt" + current_selected + ".jpg");
    if (current_selected == 1) {
        if ( x == keyword_1) {
            console.log("good job");
            document.getElementById("stamp1").classList.add('stampt');
            window.key_1 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 2) {
        if ( x == keyword_2) {
            console.log("good job");
            document.getElementById("stamp2").classList.add('stampt');
            window.key_2 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 3) {
        if ( x == keyword_3) {
            console.log("good job");
            document.getElementById("stamp3").classList.add('stampt');
            window.key_3 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 4) {
        if ( x == keyword_4) {
            console.log("good job");
            document.getElementById("stamp4").classList.add('stampt');
            window.key_4 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 5) {
        if ( x == keyword_5) {
            console.log("good job");
            document.getElementById("stamp5").classList.add('stampt');
            window.key_5 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 6) {
        if ( x == keyword_6) {
            console.log("good job");
            document.getElementById("stamp6").classList.add('stampt');
            window.key_6 = true;
        } else {
            console.log("bad boy");
        };
    };
};



function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that rusn

        wawa();
    };
};


function hideKeyboard() {
	document.activeElement.blur();
	this.blur();
};

function wincheck() {
    console.log(key_1);
    console.log(key_2);
    console.log(key_3);
    console.log(key_4);
    console.log(key_5);
    console.log(key_6);
}