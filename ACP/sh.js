var keyword_1 = "lighthouse1";
var keyword_2 = "lighthouse2";
var keyword_3 = "lighthouse3";
var keyword_4 = "lighthouse4";
var keyword_5 = "lighthouse5";
var keyword_6 = "lighthouse6";

var current_selected = "default";

var key1 = false;
var key2 = false;
var key3 = false;
var key4 = false;
var key5 = false;
var key6 = false;


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
}

function wawa() {
  var x = document.getElementById('guess').value;
    console.log("the users input was '" + x + "'");
  /* document.getElementById('alert').innerHTML = 'The user input is: ' + x;*/
    console.log("the current selected image is hunt" + current_selected + ".jpg");
    if (current_selected == 1) {
        if ( x == keyword_1) {
            console.log("good job");
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 2) {
        if ( x == keyword_2) {
            console.log("good job");
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 3) {
        if ( x == keyword_3) {
            console.log("good job");
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 4) {
        if ( x == keyword_4) {
            console.log("good job");
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 5) {
        if ( x == keyword_5) {
            console.log("good job");
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 6) {
        if ( x == keyword_6) {
            console.log("good job");
        } else {
            console.log("bad boy");
        };
    };
};