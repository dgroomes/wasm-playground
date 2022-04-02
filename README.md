# wasm-playground

📚 Learning and exploring WebAssembly (WASM).

## Description

I'm learning about WebAssembly mostly by reading the book [The Art of WebAssembly](https://wasmbook.com/).

I'd like to do the following:

  * Write some basic WAT code
  * Run a WAT program from a NodeJS embedding environment
  * Run a WAT program using [wasm3](https://github.com/wasm3/wasm3) (a WASM interpreter)
  * Compile a "hello world" Rust program to WASM
  * Compile a "hello world" Kotlin program to WASM
  * Compile a "hello world" Go program to WASM

## Instructions

Follow these instructions to compile and run the code:

1. Install WABT
   * WABT (pronouned "wabbit") is the *The WebAssembly Binary Toolkit*. Find it on GitHub: <https://github.com/webassembly/wabt>
   * `git clone --recurse-submodules https://github.com/WebAssembly/wabt`
   * `cd wabt/`
   * ```shell
     mkdir build
     cd build
     cmake ..
     cmake --build .
     ```
   * Make sure to add the build directory to the `PATH`. Something like: `export PATH="$PATH:/Users/davidgroomes/repos/opensource/wabt/build"`
2. Install latest Node
   * Use `nvm`. We need Node as an "embedding environment" to run a WASM program.
3. Compile the WAT
   * `wat2wasm add.wat`
4. Run the program
   * `node add.js 1 2`
   * Success! You ran a WASM program via Node!

## Reference

* [Book: *The Art of WebAssembly*](https://wasmbook.com/)
* [MDN: *Converting WebAssembly text format to wasm*](https://developer.mozilla.org/en-US/docs/WebAssembly/Text_format_to_wasm)
