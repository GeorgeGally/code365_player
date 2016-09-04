var blocksize = 20;
var blockshape = 0;
var pixelateOn = false;
var strobeOn = false;
var scanLinesOn = false;
var showStats = false;
var vignetteOn = false;
var _dd;
var _ss;
var _mm;
var v;

function UiUtilities(){
  //   _dd = "File: " + currentFile + " Bank: " + currentBank;
  // if(mic!= undefined) v = Math.round(findMapping(mic.getSprectrum(100), 100));
  // _ss = " Sound: " + v;
  // _mm = " Sensitivity : " + microMuffle.toFixed(2);;
  // if (pixelateOn == true) pixelate();
  // if (strobeOn == true) strobe();
  // if (scanLinesOn == true) scanLines();
  // if (vignetteOn == true) vignette();
  // $('.ui2').html(_dd + _ss + _mm);
}

function scanLines(gap){
	if (gap == undefined) gap = 6;
	for (var y = 0; y < height; y+=gap*2) {
		ctx.fillStyle = rgba(0,0,0,0.9);
		ctx.fillRect(0,y,w,gap);
	};
}


function copy()
{
var image = [];
var imgData=ctx.getImageData(0,0,width/2,height);
	var d = [];
	for (var i=0;i<imgData.data.length;i+=4)
  {
  image[imgData.data.length-i] = imgData.data[i]
  image[imgData.data.length-i-1] = imgData.data[i+1]
  image[imgData.data.length-i-2] = imgData.data[i+2]
  image[imgData.data.length-i-3] = imgData.data[i+3]
  }
imgData.data = image;
	ctx.putImageData(imgData,w/2,0);

}


function strobe(){
		 if (random(100)>8) {
   ctx.fillStyle="black";
   //console.log('xx')
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
  }
}


function pixelate() {
  
  if (blocksize == undefined) blocksize = 20;
    var imgData=ctx.getImageData(0,0,w,h); 
    ctx.clearRect(0,0,w,h);
    //var sourceBuffer8 = new Uint8Array(imgData.data.buffer);
    //var sourceBuffer8 = new Uint8ClampedArray(imgData.data.buffer);
    var sourceBuffer32 = new Uint32Array(imgData.data.buffer);
    for(var x = 0; x < w; x += blocksize)
    {
        for(var y = 0; y < h; y += blocksize)
        {

          var pos = (x + y * w);
          var b = (sourceBuffer32[pos] >> 16) & 0xff;
          var g = (sourceBuffer32[pos] >> 8) & 0xff;
          var r = (sourceBuffer32[pos] >> 0) & 0xff;
          ctx.fillStyle = rgb(r,g,b);
          if (blockshape == 0) {
            ctx.fillRect(x, y, blocksize, blocksize);
          } else {
            ctx.fillEllipse(x, y, blocksize, blocksize);
          };

        }
    }

}


function reverseUint32 (uint32) {

    var s32 = new Uint32Array(4);
    var s8 = new Uint8Array(s32.buffer);
    var t32 = new Uint32Array(4);
    var t8 = new Uint8Array(t32.buffer);        
    reverseUint32 = function (x) {
        s32[0] = x;
        t8[0] = s8[3];
        t8[1] = s8[2];
        t8[2] = s8[1];
        t8[3] = s8[0];
        return t32[0];
    }
    return reverseUint32(uint32);

};



var vignette_img = new Image();
vignette_img.src = '../rbvj/images/vignette.png';
var vignette = function() {
  //ctx.drawImage(vignette_img,0, 0, window.innerWidth, window.innerHeight);
}




