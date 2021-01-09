// Teacher's Code*******************************
// Get the average of an array of scores
const scores = [ 20, 50, 75, 100, 115 ];
let total = 0;

for ( let i = 0; i < scores.length; i++ ) {
  total += scores[i];
}

console.log( total / scores.length ); //72