window.addEventListener('load', function () {
  document.getElementById("loading_screen").classList.add('loaded');
})



var keyword_1 = "1";
var keyword_2 = "2";
var keyword_3 = "3";
var keyword_4 = "4";
var keyword_5 = "5";
var keyword_6 = "6";

var current_selected = "default";
var TTW_stamp = 500;

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
  document.getElementById("backbutton").classList.remove('back_button_hidden');
  document.getElementById("helpbutton").classList.add('help_button_hidden');
    
    if ( x == 1 && key_1 == false ) {
      document.getElementById("guessbutton").classList.remove('guess_button_hidden');
      document.getElementById("guess").classList.remove('bar_hidden');
    }
    if ( x == 2 && key_2 == false ) {
      document.getElementById("guessbutton").classList.remove('guess_button_hidden');
      document.getElementById("guess").classList.remove('bar_hidden');
    }
    if ( x == 3 && key_3 == false ) {
      document.getElementById("guessbutton").classList.remove('guess_button_hidden');
      document.getElementById("guess").classList.remove('bar_hidden');
    }
    if ( x == 4 && key_4 == false ) {
      document.getElementById("guessbutton").classList.remove('guess_button_hidden');
      document.getElementById("guess").classList.remove('bar_hidden');
    }
    if ( x == 5 && key_5 == false ) {
      document.getElementById("guessbutton").classList.remove('guess_button_hidden');
      document.getElementById("guess").classList.remove('bar_hidden');
    }
    if ( x == 6 && key_6 == false ) {
      document.getElementById("guessbutton").classList.remove('guess_button_hidden');
      document.getElementById("guess").classList.remove('bar_hidden');
    }
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
    document.getElementById("guess").value = "What's the code?";
    wincheck();
}

function stamp(x) {
            document.getElementById("stamp" + x).classList.add('stampt');
            wincheck();
}

function hide_guess_bar() {
  document.getElementById("guessbutton").classList.add('guess_button_hidden');
  document.getElementById("guess").classList.add('bar_hidden');
}


function wawa() {
  var x = document.getElementById('guess').value;
    console.log("the users input was '" + x + "'");
    console.log("the current selected image is hunt" + current_selected + ".jpg");
    if (current_selected == 1) {
        if ( x == keyword_1) {
            console.log("good job");
            hideKeyboard();
            setTimeout(function(){ stamp(1); }, TTW_stamp);
            window.key_1 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 2) {
        if ( x == keyword_2) {
            console.log("good job");
            hideKeyboard();
            setTimeout(function(){ stamp(2); }, TTW_stamp);
            window.key_2 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 3) {
        if ( x == keyword_3) {
            console.log("good job");
            hideKeyboard();
            setTimeout(function(){ stamp(3); }, TTW_stamp);
            window.key_3 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 4) {
        if ( x == keyword_4) {
            console.log("good job");
            hideKeyboard();
            setTimeout(function(){ stamp(4); }, TTW_stamp);
            window.key_4 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 5) {
        if ( x == keyword_5) {
            console.log("good job");
            hideKeyboard();
            setTimeout(function(){ stamp(5); }, TTW_stamp);
            window.key_5 = true;
        } else {
            console.log("bad boy");
        };
    };
    if (current_selected == 6) {
        if ( x == keyword_6) {
            console.log("good job");
            hideKeyboard();
            setTimeout(function(){ stamp(6); }, TTW_stamp);
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
    hide_guess_bar()
	document.activeElement.blur();
	this.blur();
};

function wincheck() {
    console.log("Win Check:\n" +
                "Key #1:" + key_1 + "\n" +
                "Key #2:" + key_2 + "\n" +
                "Key #3:" + key_3 + "\n" +
                "Key #4:" + key_4 + "\n" +
                "Key #5:" + key_5 + "\n" +
                "Key #6:" + key_6 + "\n"
                );
}