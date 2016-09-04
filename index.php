
<!DOCTYPE html>
<html>
<head>
<title>RBVJs</title>

<meta name="robots" content="all" />
<meta name="description" content="Radarboy VJs" />
	
<meta property="og:image" content="http://radarboy.com/lab/previews/universe.jpg"/>
<meta property="og:description" content="VJing in the browser - because you can. And should" />
<meta name="twitter:description" content="VJing in the browser - because you can. And should" />
<meta name="twitter:image" content="http://radarboy.com/lab/previews/universe.jpg" />

<meta name="author" content="George Gally" />
<meta name="Copyright" content="Copyright (c) Radarboy" />
<meta name="keywords" content="radarboy, george gally, toys, javascript, webgl, 3D, threejs, art" />


<script type="text/javascript" src="js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="js/creative.js"></script>

<script src="js/utils.js"></script>
  

<link rel="stylesheet" href="css/normalize.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/ui.css" type="text/css" media="screen" />

</head>

<body style="background:#000000; color: white">

<div class="cover" id="cover" width="1024px" height="800px"></div>  

<div id="myProgress">
  <div id="myBar"></div>
</div>

<script type="text/javascript">

  var genres = ["slomo", "deeptechno", "ebm", "disco", "deepdisco", "indiedisco", "slomodisco", "slomohouse", "downtempotechno", "downtempo", "deepness", "pixies", "lowmotion", "plastikman", "minimalhouse", "acidhouse", "cosmic", "cosmicdisco", "ambient"];
  
  var files = [];
  var timerLength = 100000;

  $.ajax({
      type: "POST",
      url: "get_files.php",
      success: function(msg) {
        //console.log(msg);
        msg = jQuery.parseJSON(msg);
        processFiles(msg)
      }
  })


  function processFiles(msg){
    for (var i = msg.length - 1; i >= 0; i--) {
      //console.log(msg[i]);
      files.push(msg[i]);
    }
    console.log(files.length);
    timer();
  }


window.addEventListener('keydown', keyPress, false);

function keyPress(){
  
  var keyCode = event.keyCode;
  if (keyCode == 32) {
  console.log('keypress');
  var newfile = randomInt(files.length);
  //console.log(newfile)
  newPage( files[newfile] );
}
};

//console.log(filelist[1]);

var timer_counter = 0;

var timer = function() {

  var newfile = randomInt(files.length-1);
  
  newPage( files[newfile] );
  move();
  }


function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            timer();
        } else {
          width += 0.2; 
          elem.style.width = width + '%'; 
        }
    }
}

//move();


function newPage( file ) {
  console.log("* " + file);
  var genre = "#" + genres[randomInt(genres.length-1)];
  file += genre;
  location.hash = file; 
  resize();
  cover.innerHTML="";
  cover.innerHTML='<object style="cursor:none;" width="100%" height="100%" id="site" type="text/html" data="'+ file +'" ></object>'; 
}


function resize() {
  width = w = window.innerWidth,
  height = h = window.innerHeight,
  $('#cover').html('');
  scanLinesOn = false;
  gui = null;
}

window.addEventListener('resize', resize, false);


</script>

 


<div id="stats_holder"></div>
	<!-- <div id="control_panel" class="control_panel ui">

<article style="margin-left: 50px; font-size: 11px">

  <section>
    <button onclick="reset()" style="display: inline; float: left; margin-right: 20px;">reset</button> <output>-webkit-filter: none;</output>
  </section>
  <section class="cols">
    <span><span>blur</span><input type="range" oninput="set('blur', this.value + 'px');" value="0" step="1" min="0" max="10"></span>
    <span><span>grayscale</span><input type="range" oninput="set('grayscale', this.valueAsNumber);" value="0" step="0.1" min="0" max="1"></span>
    <span><span>drop-shadow</span><input type="range" oninput="set('drop-shadow', this.value + 'px ' + this.value + 'px 20px black');" value="0" step="1" min="0" max="100"></span>
    <span><span>sepia</span><input type="range" oninput="set('sepia', this.valueAsNumber);" value="0" step="0.1" min="0" max="1"></span>
    <span><span>brightness</span><input type="range" oninput="set('brightness', this.valueAsNumber);" value="0" step="0.1" min="0" max="10"></span>
    <span><span>contrast</span><input type="range" oninput="set('contrast', this.valueAsNumber);" value="0" step="0.1" min="0" max="10"></span>
    <span><span>hue-rotate</span><input type="range" oninput="set('hue-rotate', this.value + 'deg');" value="0" step="30" min="0" max="360"></span>
    <span><span>invert</span><input type="range" oninput="set('invert', this.valueAsNumber);" value="0" step="0.1" min="0" max="1"></span>
    <span><span>saturate</span><input type="range" oninput="set('saturate', this.valueAsNumber);" value="0" step="0.1" min="0" max="10"></span>
    <span><span>opacity</span><input type="range" oninput="set('opacity', this.valueAsNumber);" value="0" step="0.1" min="0" max="1"></span>

    <span><span>Cover Colour</span>
    <select id="select1" onChange="changeCover(value)">
			<option value="">None</option>
			<option value="red">Red</option>
			<option value="green">Green</option>
			<option value="blue">Blue</option>
			<option value="purple">Purple</option>
		</select>
	</span>
  </section>
  <section style="float: left">
    <span>Animations:</span>
    <button onclick="go(this, 'blur')">blur</button>
    <button onclick="go(this, 'grayscale')">grayscale</button>
    <button onclick="go(this, 'sepia')">sepia</button>
    <button onclick="stop()">stop</button>
  </section>
</article>

	</div> -->



<script src="js/filters.js"></script>




</body>
</html>
