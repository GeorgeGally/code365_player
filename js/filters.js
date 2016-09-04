// filters
var ud = 'undefined';
var cover = document.getElementById('cover');

var FILTER_VALS = {};
var covers = ['red', 'green', 'blue', 'purple'];
var el = document.querySelector('canvas');

function go(me, className) {
  var activeButton = document.querySelector('button.active');
  if (activeButton) {
    activeButton.classList.remove('active');
    el.classList.remove(activeButton.textContent);
  }

  me.classList.add('active');
  el.classList.toggle(className);
}

function stop() {
  var activeButton = document.querySelector('button.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  el.className = '';
}

function reset() {
  FILTER_VALS = {};
  render();
  //document.querySelector('output').textContent = '-webkit-filter: none;';
  el.className = '';

  var ranges = document.querySelectorAll('input[type="range"]');
  for (var i = 0, r; r = ranges[i]; i++) {
    r.value = r.min;
  }
  changeCover('');
}

function set(filter, value) {
  FILTER_VALS[filter] = typeof value == 'number' ? Math.round(value * 10) / 10 : value;
  if (value == 0 || (typeof value == 'string' && value.indexOf('0') == 0)) {
    delete FILTER_VALS[filter];
  }
  render();
}

function render() {
  var vals = [];
  Object.keys(FILTER_VALS).sort().forEach(function(key, i) {
    vals.push(key + '(' + FILTER_VALS[key] + ')');
  });
  var val = vals.join(' ');
  el.style.webkitFilter = val;
  //document.querySelector('output').textContent = '-webkit-filter: ' + (val ? val : 'none') + ';';
}

function changeCover(value) {
	for (var i = 0; i < covers.length; i++) {
		$(cover).removeClass(covers[i]);
	};
	$(cover).addClass(value);
}

