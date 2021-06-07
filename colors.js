const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);

} colors.forEach(element => console.log(element));

//1 for 2, while 3
//2 1
//3 minder code is minder fouten.
//4  

var obj = {
    name: "Simon",
    age: "20",
    hobby: "voetbal",
    clothingstyle: "simple",
    hipster: false,
}

for (var propt in obj) {
    console.log(propt + ': ' + obj[propt]);
}