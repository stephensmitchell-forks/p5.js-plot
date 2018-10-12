var dfile, diamonds; // load from JSON

var foo; // p5.Plot() object

var mylook = {strokecolor: [255, 0, 255], fillcolor: [0, 255, 0], background: false};
var crazygrid = {rows: 50, cols: 50, backgroundcolor: 'Black', gridcolor: 'White'};

var lukecrap = [{stuff: 50, things: 20}, {stuff: 55, things: 33}, {stuff: 33, things: 45}];
var myData = [{"x":5, "y":10}, {"x":5, "y":10}, {"x":5, "y":10}, {"x":5, "y":10}, {"x":5, "y":10}, {"x":5, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":10, "y":10}, {"x":17, "y":10}, {"x":17, "y":10}, {"x":17, "y":10}, {"x":17, "y":10}, {"x":17, "y":10}];
var boxData = [{"x":13, "y":"a"}, {"x":16, "y":"a"}, {"x":57, "y":"a"}, {"x":34, "y":"a"}, {"x":26, "y":"a"}, {"x":67, "y":"a"}, {"x":12, "y":"a"},
 {"x":45, "y":"b"}, {"x":32, "y":"b"}, {"x":24, "y":"b"}, {"x":86, "y":"b"}, {"x":65, "y":"b"}, {"x":37, "y":"b"}, {"x":98, "y":"b"}];

function preload() {
	dfile = loadStrings('diamonds.json'); // load the big file
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	diamonds = JSON.parse(dfile);


  // mix and match:

	// CONSTRUCTOR:
	//foo = new p5.Plot(); // easy
		foo = new p5.Plot({ left: width*0.2, top: height*0.3, right: width*0.8, bottom: height*0.7 });
	//foo = new p5.Plot({ left: 100, top: 100, right: 400, bottom: 200, backgroundcolor: 'lightBlue' });

	//noLoop();
}

function draw() {
  background(255);

	// PLOT COMMAND:
  //foo.plot({type: 'line', data: lukecrap, xkey: 'stuff', ykey: 'things'});
	//foo.plot({type: 'point', data: lukecrap, xkey: 'stuff', ykey: 'things'});
	//foo.plot({ data: mpg, xkey: 'year', ykey: 'displ' }); // default line
	//foo.plot({ type: 'density', data: economics, xkey: 'pop', strokeweight: 5});
	//foo.plot({ type: 'box', data: economics, xkey: 'pop', strokeweight: 5});
  //foo.plot({ type: 'histogram', data: economics, xkey: 'pop', strokeweight: 5});
  //foo.plot({ type: 'box', data: mpg, xkey: 'displ', ykey: 'year', strokeweight: 5});
  //foo.plot({ type: 'box', data: diamonds, xkey: 'price', ykey: 'clarity', strokeweight: 1});
	//foo.plot({ type: 'box', data: boxData, xkey: 'x', ykey: 'y', strokeweight: 5});
	//foo.plot({ type: 'area', data: economics, xkey: 'pop', ykey: 'unemploy', strokeweight: 5 }, mylook); // custom look
	foo.plot({ type: 'point', data: diamonds, xkey: 'carat', ykey: 'price', strokecolor: [255, 0, 0, 32], fillcolor: [128, 128, 255, 32] });
	//foo.plot({ type: 'point', data: diamonds, xkey: 'carat', ykey: 'price', strokecolor: [255, 0, 0, 32], fillcolor: [128, 128, 255, 32] }, crazygrid);

  foo.hover(mouseX, mouseY);
}
