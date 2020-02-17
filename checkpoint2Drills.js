//0. Example from curriculum
console.log('0. Example from curriculum');
const sumOf = function(list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}
let list = [2,4,6,8,10];
console.log(sumOf(list));
console.log('-------------------------------');

//1. Counting Sheep
console.log('1. Counting Sheep');
const sheep = function(numberOfSheep) {
    if (numberOfSheep === 0) {
        return 'All sheep jumped over the fence';
    };
    return `${numberOfSheep}: Another sheep jumps over the fence \n` + sheep(numberOfSheep - 1);
};
console.log(sheep(3));
console.log('-------------------------------');

//2. Power Calculator
console.log('2. Power Calculator');
const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return 'exponent should be >= 0'
    };
    if (exponent === 1) {
        return base;
    };
    return base * powerCalculator(base, exponent - 1);
};
console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));
console.log('-------------------------------');

//3. Reverse String
console.log('3. Reverse String');
const reverseString = function(string) {
    if (string === '' ) {
        return string;
    };
    return reverseString(string.slice(1)) + string[0];
};
console.log(reverseString('Here is a string.'));
console.log('-------------------------------');

//4. nth Triangular
console.log('4. nth Triangular');
const nthTriangular = function(nth) {
    if (nth === 1) {
        return nth;
    };
    return nth + nthTriangular(nth - 1);
};
console.log(nthTriangular(6));
console.log('-------------------------------');

//5. String Splitter
console.log('5. String Splitter');
const stringSplitter = function(string, splitter) {
    if (string.indexOf(splitter) === -1) {
        return [string];
    };
    return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)];
};
console.log(stringSplitter('02/20/2020', '/'));
console.log('-------------------------------');

//6. Fibonacci
console.log('6. Fibonacci');
const fibonacciArray = function(fib) {
    if (fib === 2) {
        return [1, 1];
    };
    let fibArray = fibonacciArray(fib-1);
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibArray;
};
const fibonacciAnswer = function(fib) {
    if (fib <= 2) {
        return 1;
    };
    return fibonacciAnswer(fib - 2) + fibonacciAnswer(fib - 1);
};
console.log(fibonacciArray(2));
console.log(fibonacciAnswer(2));
console.log(fibonacciArray(10));
console.log(fibonacciAnswer(10));
console.log('-------------------------------');

console.log('7. Factorial');
const factorial = function(num) {
    if (num === 1) {
        return num;
    };
    return num * factorial(num-1);
};
console.log(factorial(5));
console.log('-------------------------------');

console.log('8. Find a way out of the maze');
const findPath = function(importedMaze, row = 0, column = 0, path = '') {
    const maze = importedMaze.map(row => [...row]);
    const maxRow = maze.length - 1;
    const maxColumn = maze[0].length - 1;
    if (row > maxRow || row < 0 || column > maxColumn || column < 0) {
        return false;
    };
    if (maze[row][column] === 'e') {
        return `A path out is: ${path}.\n`;
    };
    if (maze[row][column] !== ' ') {
        return false;
    };
    maze[row][column] = '+';
    if (findPath(maze.map(row => [...row]), row, column + 1, path.concat('R'))) {
        return findPath(maze.map(row => [...row]), row, column + 1, path.concat('R'));
    };
    if (findPath(maze.map(row => [...row]), row + 1, column, path.concat('D'))) {
        return findPath(maze.map(row => [...row]), row + 1, column, path.concat('D'));
    };
    if (findPath(maze.map(row => [...row]), row, column - 1, path.concat('L'))) {
        return findPath(maze.map(row => [...row]), row, column - 1, path.concat('L'));
    };
    if (findPath(maze.map(row => [...row]), row - 1, column, path.concat('U'))) {
        return findPath(maze.map(row => [...row]), row - 1, column, path.concat('U'));
    };
};
const mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
const myLargeMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
console.log(findPath(mySmallMaze));
console.log(findPath(myLargeMaze));
console.log('-------------------------------');

console.log('9. Find ALL the ways out of the maze');
const findAllPaths = function(importedMaze, row = 0, column = 0, path = '') {
    const maze = importedMaze.map(row => [...row]);
    const maxRow = maze.length - 1;
    const maxColumn = maze[0].length - 1;
    if (row > maxRow || row < 0 || column > maxColumn || column < 0) {
        return '';
    };
    if (maze[row][column] === 'e') {
        return `One of the paths out is: ${path}.\n`;
    };
    if (maze[row][column] !== ' ') {
        return '';
    };
    maze[row][column] = '+';
    return (
        findAllPaths(maze.map(row => [...row]), row, column + 1, path.concat('R')) +
        findAllPaths(maze.map(row => [...row]), row + 1, column, path.concat('D')) +
        findAllPaths(maze.map(row => [...row]), row, column - 1, path.concat('L')) +
        findAllPaths(maze.map(row => [...row]), row - 1, column, path.concat('U'))
    );
};
console.log(findAllPaths(mySmallMaze));
console.log(findAllPaths(myLargeMaze));
console.log('-------------------------------');

console.log('10. Anagrams');
console.log('-------------------------------');


console.log('11. Organization Chart');
console.log('-------------------------------');


console.log('12. Binary Representation');
console.log('-------------------------------');