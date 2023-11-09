


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

let xMax = canvas.height;
let yMax = canvas.width;
let slope = 1.2;
let intercept = 70;

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Plot Scatter
ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
  let x = xArray[i]*xMax/150;
  let y = yArray[i]*yMax/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}

// Plot Line
ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "blue";
ctx.stroke();

// Line Function<br>
function f(x) {
  return x * slope + intercept;
}

//Bar Charts
const xxArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yyArray = [55, 49, 44, 24, 15];

const data = [{
  x:xxArray,
  y:yyArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);

//Horizontal Bar Chart
const xxxArray = [55, 49, 44, 24, 15];
const yyyArray = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];

const ddata = [{
  x:xxxArray,
  y:yyyArray,
  type:"bar",
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const llayout = {title:"World Wide Wine Production"};

Plotly.newPlot("mypPlot", ddata, llayout);

//Pie Chart
const xpArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const ypArray = [55, 49, 44, 24, 15];

const lpayout = {title:"World Wide Wine Production"};

const dpata = [{labels:xpArray, values:ypArray, type:"pie"}];

Plotly.newPlot("myPie", dpata, lpayout);

//Donut pie chart
const xdArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const ydArray = [55, 49, 44, 24, 15];

const ldayout = {title:"World Wide Wine Production"};

const dpdata = [{labels:xdArray, values:ydArray, hole:.4, type:"pie"}];

Plotly.newPlot("myPied", dpdata, ldayout);

//y = Math.sin(x)
let exp = "Math.sin(x)";

// Generate values
const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 0.1) {
  xValues.push(x);
  yValues.push(eval(exp));
}

// Display using Plotly
const dyata = [{x:xValues, y:yValues, mode:"lines"}];
const lyayout = {title: "y = " + exp};
Plotly.newPlot("mySinx", dyata, lyayout);

//y = Math.cos(x)
let excp = "Math.cos(x)";

// Generate values
const xcValues = [];
const ycValues = [];
for (let x = 0; x <= 10; x += 0.2) {
  xcValues.push(x);
  ycValues.push(eval(excp));
}

// Display using Plotly
const dcata = [{x:xcValues, y:ycValues, mode:"markers"}];
const lcayout = {title: "y = " + excp};
Plotly.newPlot("myCosx", dcata, lcayout);

//Scatter plot
const xsArray = [50,60,70,80,90,100,110,120,130,140,150];
const ysArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const dsata = [{
  x:xsArray,
  y:ysArray,
  mode:"markers"
}];

// Define Layout
const lsayout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myScat", dsata, lsayout);

//Line Graph 
const xlArray = [50,60,70,80,90,100,110,120,130,140,150];
const ylArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const dlata = [{
  x: xlArray,
  y: ylArray,
  mode:"lines"
}];

// Define Layout
const lliayout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myLine", dlata, lliayout);

//Bubble plot
const xbArray = [1,2,3,4];
const ybArray = [10,20,30,40];

const trace1 = {
  x: xbArray,
  y: ybArray,
  mode: 'markers',
  marker: {
    color: ['red', 'green',  'blue', 'orange'],
    size: [20, 30, 40, 50]
  }
};

const trace2 = {
  x: [1, 2, 3, 4],
  y: [15, 30, 45, 60],
  mode: 'markers',
  marker: {
    color: 'rgb(31, 119, 180)',
    size: 18,
    symbol: ['circle', 'square', 'diamond', 'cross']
  },
};

const dbata = [trace1, trace2];

const lbayout = {
  title: "Plotting Bubbles"
};

Plotly.newPlot('myBubble', dbata, lbayout);

//Linear Graph
let exlp = "x + 17";

// Generate values
const xlgValues = [];
const ylgValues = [];
for (let x = 0; x <= 10; x += 1) {
  xlgValues.push(x);
  ylgValues.push(eval(exlp));
}

// Define Data
const lgdata = [{
  x: xlgValues,
  y: ylgValues,
  mode:"lines"
}];

// Define Layout
const lglayout = {title: "y = " + exlp};

// Display using Plotly
Plotly.newPlot("myLinear", lgdata, lglayout);

//Multiple Lines
let exp1 = "x";
let exp2 = "1.5*x";
let exp3 = "1.5*x + 7";

// Generate values
const x1Values = [];
const x2Values = [];
const x3Values = [];
const y1Values = [];
const y2Values = [];
const y3Values = [];

for (let x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
}

// Define Data
const Mdata = [
  {x: x1Values, y: y1Values, mode:"lines"},
  {x: x2Values, y: y2Values, mode:"lines"},
  {x: x3Values, y: y3Values, mode:"lines"}
];

//Define Layout
const Mlayout = {title: "[y=" + exp1 + "]  [y=" + exp2 + "]  [y=" + exp3 + "]"};

// Display using Plotly
Plotly.newPlot("myMlines", Mdata, Mlayout);