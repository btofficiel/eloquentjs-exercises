var size = 8;
var board = "";
var x;
var y;

for (y = 0; y < size; y += 1) {
    for (x = 0; x < size; x += 1) {
        if ((x + y) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);