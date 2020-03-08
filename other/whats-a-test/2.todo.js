// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

Tip: I want to be able to use it like so:

> expect(actual).toBe(expected)

Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

const {sum, subtract} = require('./math')

const expect = actual => {
    // problem is error will always be thrown from line 34
    // now you can look at the stack trace to see where the expect
    // function was called, but that's suboptimal
    return {toBe(expected) {
        if (actual !== expected)
            throw new Error(`Failed test case: returned value of ${actual} !== expected value of ${expected}`);
    }
} };
// since the first test fails, the second test doesn't start
// we have no indication the second function is also failing
expect(sum(3,7)).toBe(10);
expect(subtract(7,3)).toBe(4);
