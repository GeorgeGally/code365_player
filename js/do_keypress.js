/*var gui;
var pressakey = 1; 
var bankDestination = 0; 
var thisKey; 
var microMuffle=0; 
var pressedKeys= 0;
var catNum= 0;
var currentFile = 0;
var currentKey = 0;
var currentSet = 0;
var currentBank = 0;
var clock, showCursor; 
var shiftNumbers = [33,64,35,36,37,94,38,42,40,41];
var mic_level = 0;
var ui_show = 0;
var mouseSetting = "SHOW";
var qualitySetting = "HIGH";
var fileName = 0;
var fileLocation = "";
var black = false;
var cover_colours = ["#ffffff","red","blue","yellow","pink","purple"];
var cover_count = 0;
var animate;
var ui = 0;

//changeFile(98);

$(this).keypress(function(){

	var keyCode = event.keyCode;
	doSomethingWithKeyPress(keyCode);

});

function doSomethingWithKeyPress(thisKey) {
	
	resetEverything();
	
	if(thisKey !=32) {
		black = false;
		$('#cover').html('');
		$('#cover2').removeClass('black');
	}

	//console.log( "KeyCode " + thisKey );

	// CHANGE FILE // keys a-z - keycode 97-122
	if (thisKey>=97 && thisKey<=122) {
		//console.log ("CHANGE FILE " + thisKey);
		changeFile(thisKey+1);

	// CHANGE SET // keys 0-9 - keycode 48-57
	} else if (thisKey>= 48 && thisKey<= 57) {
		console.log("CHANGE SET " + thisKey);
		changeSet(thisKey);

	//CHANGE bank
	} else if (shiftNumbers.indexOf(thisKey)!=-1) {

		console.log ("CHANGE bank " + shiftNumbers.indexOf(thisKey));
		clock = false;
	
	} else if (thisKey == 220 && clock == false) {
		
		clock = true;

	} else if (thisKey>47 && thisKey<58) {
		
		changeBank(shiftNumbers.indexOf(thisKey));
	
	} else if (thisKey == 39) {
		
		strobeOn=!strobeOn;		
	
	} else if (thisKey == 47) {
		
		showUI();
	
	} else if (thisKey == 32) {
		
		black = !black;
		console.log("black: " + black);
		
		if( black ) { 
			$('#cover2').addClass('black');
		} else {
			$('#cover2').removeClass('black');
		}

	} else if (thisKey == 97) {

	} else if (thisKey == 98) {
	
	} else if (thisKey == 45) { //MICROPHONE keys [ + ]:
	
		console.log("Reduce Gain: "+ microMuffle);
		microMuffle = microMuffle-0.1;

	} else if (thisKey == 61) {
		
		microMuffle = microMuffle+0.1;
		console.log("Add Gain: "+ microMuffle)

	} else if (thisKey == 43) {
	
		console.log("Reduce Gain: "+ microMuffle);
		microMuffle = microMuffle-0.5;

	} else if (thisKey == 95) {
	
		microMuffle = microMuffle+0.5;
		console.log("Add Gain: "+ microMuffle);

	} else if (thisKey == 93) {
		
		cover_count = (cover_count + 1)%6;

	} else if (thisKey == 92) {
	
		showStats = !showStats;
		$(stats_container).toggleClass('none');

	} else if (thisKey == 59) {
	
		scanLinesOn = !scanLinesOn;

	} else if (thisKey == 91) {
	
		pixelateOn = !pixelateOn;

	// MOUSE SETTINGS
	} else if (thisKey == 9) {
  		if (!showCursor) {
   			showCursor = true; 
  			noCursor(); 
  		} else {
   			showCursor= false; 
   			console.log(" Show cursor");
  			cursor(); 
	}


	
}

}

var fileref;

function changeFile( thisKey ) {

	if (fileref != undefined) document.getElementsByTagName("head")[0].removeChild(fileref);
		
		//if (ctx != undefined) ctx.globalCompositeOperation = "source-over";
		currentFile = thisKey-97;	 
		console.log ("----- File: " + currentFile);
		var loc = currentBank+ '/'+ currentSet +'/' +currentFile;
		var filename = 'art/' +  loc + '.js';
		fileref = document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename);
        document.getElementsByTagName("head")[0].appendChild(fileref);
        document.location.hash = loc;

}


function changeBank(thisKey ) {
	
	ctx.globalCompositeOperation = "source-over";
	currentBank = thisKey;
	console.log ("----- Change Bank" + currentBank);	
	changeFile(98);

}


function changeSet(thisKey ) {
	
	console.log ("----- Change Set: " + currentSet);
	currentSet = thisKey-48;
	changeFile(98);

}


showUI();

function showUI(){
	
	if (ui === 0) {
		console.log ("----- Hide UI");
		ui = 1;
		$('.ui').slideUp();
	} else {
		console.log ("----- Show UI");
		ui = 0;
		$('.ui').slideDown();
	}

}

*/