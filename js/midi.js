var Jazz;
var active_element;
var current_in;
var msg;
var sel;
var midi_count = 0;
var hue_rotate = 0;
//// Callback function
function midiProc(t,a,b,c){
 //msg.innerHTML=msg.innerHTML+midiString(a,b,c)+"<br>";
  var s11 = midiString(a,b,c);
  console.log("midiString: " + s11);
 //msg.scrollTop=msg.scrollHeight;
  console.log(" a: "+a+" b: "+b+" c: "+c);

 if (a == 183 && b == 32 && c> 0 && c <20) { 
  
  midi_count = midi_count +1;
  console.log(" midi_count: " + midi_count);
    if (midi_count == 28) { 
    changeSet(49); 
    midi_count = 0;
  } else {
    //changeSet(0);
  }
    var filecount = midi_count%27;
    //console.log(" filecount: " + filecount);
    doSomethingWithKeyPress(96+midi_count);
} else if (a == 183 && b == 32 && c>100) {
    midi_count = (midi_count - 1);
    console.log(" midi_count: " + midi_count);
  if (midi_count == 27) { 
    changeSet(48); } 
    else {
    //changeSet(1);
  }
    //midi_count = (midi_count - (128 - c));
    if (midi_count < 0) midi_count = 27;
    doSomethingWithKeyPress(96+midi_count);
}
else if (a == 183 && b == 33 && c<100) { 
    num = (num + c);
    if (num > 200) num = 200;
    if (num < 0) num = 127;
    //console.log("num: "+num);
} else if (a == 183 && b == 33 && c>100) {
    num = (num - (128 - c));
    if (num < 1) num = 1;
    //console.log("num: "+num);

} else if (a == 135 && b == 100 && c==127) { 
strobeOn = !strobeOn;
} else if (a == 135 && b == 108 && c==127) { 
scanLinesOn = !scanLinesOn;
}

 if (a == 183 && b == 34 && c<100) { 
    movers = (movers + c);
    if (movers > 200) movers = 200;
    if (movers < 1) movers = 1;
    //console.log("movers: "+movers);
} else if (a == 183 && b == 34 && c>100) {
    movers = (movers - (128 - c));
    if (movers < 1) movers = 1;
    //console.log("movers: "+movers);
}

 if (a == 183 && b == 35 && c<100) { 
  microMuffle +=1;
    //sound_sensitivity = (sound_sensitivity + c/5);
    //if (sound_sensitivity > 200) sound_sensitivity = 200;
    //if (sound_sensitivity < -100) sound_sensitivity = -100;
    console.log("sound_sensitivity: "+sound_sensitivity);
} else if (a == 183 && b == 35 && c>100) {
  microMuffle -=1;
    //sound_sensitivity = (sound_sensitivity - (128 - c)/5);
    //if (sound_sensitivity < -100) sound_sensitivity = -100;
    //console.log("sound_sensitivity: "+sound_sensitivity);
}

 if (a == 183 && b == 120) { 
    var hue_rotate = map(c, 0, 127, 0, 360);
    set('hue-rotate', hue_rotate + 'deg');
    //console.log("hue_rotate: " + hue_rotate);
}
 if (a == 183 && b == 121) { 
    var sat = map(c, 0, 127, 0.1, 2);
    set('saturate', sat);
    //console.log("sat: " + sat);
}
 if (a == 183 && b == 122) { 
    var brightness = map(c, 0, 127, 0.1, 2);
    set('brightness', brightness);
    //console.log("brightness: " + brightness);
}

 if (a == 151) { 
 $('#cover').addClass('black');
 }
 if (a == 135) { 
 $('#cover').removeClass('black');
 }


}
function midiString(a,b,c){
 var cmd=Math.floor(a/16);
 var note=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'][b%12]+Math.floor(b/12);
 a=a.toString(16);
 b=(b<16?'0':'')+b.toString(16);
 c=(c<16?'0':'')+c.toString(16);
 var str=a+" "+b+" "+c+"    ";
 if(cmd==8){
  str+="Note Off   "+note;
 }
 else if(cmd==9){
  str+="Note On    "+note;
 }
 else if(cmd==10){
  str+="Aftertouch "+note;
 }
 else if(cmd==11){
  str+="Control    "+b;
 }
 else if(cmd==12){
  str+="Program    "+b;
 }
 else if(cmd==13){
  str+="Aftertouch";
 }
 else if(cmd==14){
  str+="Pitch Wheel";
 }
 return str;
}

//// Listbox
function changeMidi(){
 try{
  if(sel.selectedIndex){
   //current_in=Jazz.MidiInOpen(sel.options[sel.selectedIndex].value,midiProc);
  } else {
   //Jazz.MidiInClose(); current_in='';
  }
  for(var i=0;i<sel.length;i++){
   if(sel[i].value==current_in) sel[i].selected=1;
  }
 }
 catch(err){
  console.log(err)
 }
}

//// Connect/disconnect
function connectMidiIn(){
 try{
  var str=Jazz.MidiInOpen(current_in,midiProc);
  for(var i=0;i<sel.length;i++){
   if(sel[i].value==str) sel[i].selected=1;
  }
 }
 catch(err){}
}
function disconnectMidiIn(){
 try{
  Jazz.MidiInClose(); sel[0].selected=1;
 }
 catch(err){}
}
function onFocusIE(){
 active_element=document.activeElement;
 connectMidiIn();
}
function onBlurIE(){
 if(active_element!=document.activeElement){ active_element=document.activeElement; return;}
 disconnectMidiIn();
}

//// Initialize
Jazz=document.getElementById("Jazz1"); 
if(!Jazz || !Jazz.isJazz) Jazz = document.getElementById("Jazz2");
msg=document.getElementById("msg");
sel=document.getElementById("midiIn");
try{
  console.log(Jazz)
 current_in=Jazz.MidiInOpen(0,midiProc);
 //var list=Jazz.MidiInList();
 // for(var i in list){
 //  sel[sel.options.length]=new Option(list[i],list[i],list[i]==current_in,list[i]==current_in);
 // }
}
catch(err){
  console.log("-- "+err)
}
changeMidi(1);