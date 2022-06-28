/*
This program delegates to a Rust-based Wasm module to add two user-proved numbers together.
*/

import {add} from './rust-add/pkg/rust_add.js'

const value1 = parseInt(process.argv[2]);
const value2 = parseInt(process.argv[3]);

// Delegate to the Rust-based Wasm 'add' function.
const sum = add(value1, value2)

console.log(`${value1} + ${value2} = ${sum}`)
