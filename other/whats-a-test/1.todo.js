// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const test_sum = () => {
    let a = 5;
    let b = 11;
    let expected = 16;
    let actual = sum(a,b);
    if (actual !== expected)
        throw new Error(`Failed test 1: sum(a,b) == ${actual} != ${expected}`);
    else
        console.log(`Function sum passed test 1 with inputs (${a}, ${b})`);
}

const test_sub = () => {
    let a = 17;
    let b = 41;
    let expected = -24;
    let actual = subtract(17, 41);
    if (actual !== expected)
        throw new Error(`Failed test 1: subtract(17, 41) == ${actual} != ${expected}`);
    else
        console.log(`Function subtract passed test 1 with inputs (${a}, ${b})`);

}

test_sum();
test_sub();
