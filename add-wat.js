/*
This code is adapted from "The Art of WebAssembly" book.
It accompanies the 'add.wat' WAT code.

It loads a Wasm module and delegates to it to add two user-proved numbers together.
*/
const fs = require('fs');
const value1 = parseInt(process.argv[2]);
const value2 = parseInt(process.argv[3]);

/**
 * Add two numbers together... but do it from a WebAssembly program instead of JavaScript code!
 * @param a an integer
 * @param b an integer
 * @return Promise<Int>
 */
async function add(a, b) {
    // Load the Wasm module byte source.
    const bytes = fs.readFileSync(__dirname + '/add.wasm');
    const wasmModule = await WebAssembly.instantiate(new Uint8Array(bytes));
    return wasmModule.instance.exports.add(value1, value2);
}

add(value1, value2).then(sum => {
    console.log(`${value1} + ${value2} = ${sum}`)
})
