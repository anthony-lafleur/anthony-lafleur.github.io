window.addEventListener('load', function () {
    setTimeout( function() { document.getElementById("loading_screen").classList.add('loading_1'); }, 250);
    setTimeout( function() { document.getElementById("loading_screen").classList.add('loaded'); }, 750);
    setTimeout( function() {  window.speech_instance = 0;continuee() }, 1100);
})



var keyword_1 = "596";
var keyword_2 = "108";
var keyword_3 = "219";
var keyword_4 = "326";
var keyword_5 = "487";
var keyword_6 = "368";

var current_selected = "default";
var TTW_stamp = 500;
var characterwritetime = 1;
var focused = false;

var key_1 = false;
var key_2 = false;
var key_3 = false;
var key_4 = false;
var key_5 = false;
var key_6 = false;



var text = [
    /* Intro texts  */
    [
    "Hey! Glad you could make it to the party!",
    "I'm super excited to share this new game with you.",
    "In a few moments I'm going to show you some clues.",
    "You can tap one of these clues to get a better look at it.",
    "Each clue will lead you to a different location.",
    "At each location you will find a 3 digit PIN.",
    "(or a puzzle to obtain a PIN)",
    "Enter the PIN to receive a stamp.",
    "Once you have collected all 6 stamps...",
    "I'll tell you where to find me!",
    "Oh... and your prize...",
    "Let the Scavenger Hunt begin!"
    ],
    
    
    
    /* Win texts */
    [
    "Great Job!",
    "You've found and solved all of my puzzles!"
    ]
           ];

function forcewin() {
window.key_1 = true;
window.key_2 = true;
window.key_3 = true;
window.key_4 = true;
window.key_5 = true;
window.key_6 = true;
    wincheck();
}


function uifocus(x) {
    if (focused == false) {
    disableScroll();
    document.getElementById("clues").classList.add('clues_expanded');
    window.focused = true;
    window.current_selected = x;
    document.getElementById(x).scrollIntoView();
    document.getElementById("clues").scrollBy(0, -200);
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
}
function uiunfocus() {
    enableScroll();
  document.getElementById("clues").classList.remove('clues_expanded');
    window.focused = false;
    document.getElementById(window.current_selected).scrollIntoView();
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
    document.getElementById("guess").value = "PIN";
    wincheck();
}

function stamp(x) {
            document.getElementById("stamp" + x).classList.add('stampt' + x);
            
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
    if ( key_1 == true &&
       key_2 == true &&
       key_3 == true &&
       key_4 == true &&
       key_5 == true &&
       key_6 == true ) {
    setTimeout( function() { document.getElementById("win_screen").classList.add('win1'); }, 250);
    setTimeout( function() { document.getElementById("win_screen").classList.add('win'); }, 750);
    setTimeout( function() {  window.speech_instance = 1;window.speech_number = 0;continuee() }, 1100);
    }
}



// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}






var speech_instance = 0;
var speech_number = 0;

function continuee() {
    disablettc();
    
    console.log("Playing speech blurb \nINSTANCE #" + speech_instance + "\nNUMBER #" + speech_number);
    speech(speech_instance,speech_number);
    window.speech_number += 1;
}


/* print speech */
function speech(x,y) {
    
    if (text[x][y] == null) {
        clearBox("speech");
        setTimeout( function() { document.getElementById("win_screen").classList.remove('win1'); }, 500);
        setTimeout( function() { document.getElementById("win_screen").classList.remove('win'); }, 0);
    } else {    
        clearBox("speech");
        $("#speech").writeText(text[x][y]);
        setTimeout(function(){ enablettc(); }, ( 10 + characterwritetime ) * text[x][y].length);
    }
}







function enablettc() {
    document.getElementById("arrow").classList.remove('arrow_hidden');
    document.getElementById("continue").classList.add('continue');
    console.log("[TAP ENABLED]")
}
function disablettc() {
    console.log("[TAP DISABLED]");
    document.getElementById("continue").classList.remove('continue');
    document.getElementById("arrow").classList.add('arrow_hidden');
}

(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, characterwritetime);
    };
    
})(jQuery);
    
    

