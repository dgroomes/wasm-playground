# wasm-playground

📚 Learning and exploring WebAssembly (Wasm).


## Description

I'm learning about WebAssembly. In part, by reading the book [The Art of WebAssembly](https://wasmbook.com/).

This project is laid out in the following file and directory structure:

* `add.wat`
  * A WAT (WebAssembly Text Format) program that adds two integers.  
* `add-wat.js`
  * This is a "runner" program. It's a JavaScript/Node program that invokes the WAT-based Wasm module to add two integers.
    The Node runtime is used as an "embedding environment" for the Wasm module.
* `add-rust/`
  * A Rust (Cargo) project that produces a Wasm module that adds two integers.
* `add-rust.js`
  * This is a "runner" program for the Rust-based Wasm module. 


## Instructions

Follow these instructions to compile and run the WAT-based Wasm program:

1. Install WABT
   * WABT (pronounced "wabbit") is the *The WebAssembly Binary Toolkit*. Find it on GitHub: <https://github.com/webassembly/wabt>.
   * Below are the commands I used to install WABT. Choose a directory of your choice. I chose `/Users/davidgroomes/repos/opensource/wabt`.  
   * ```shell
     git clone --recurse-submodules https://github.com/WebAssembly/wabt
     ```
   * ```shell
     cd wabt/
     ```
   * ```shell
     mkdir build
     cd build
     cmake ..
     cmake --build .
     ```
   * Make sure to add the build directory to the `PATH`. Something like: `export PATH="$PATH:/Users/davidgroomes/repos/opensource/wabt/build"`
2. Install Node
   * Use `nvm`. We need Node as an "embedding environment" to run a Wasm module.
3. Compile the WAT source code
   * ```shell
     wat2wasm add.wat
     ```
4. Run the program
   * ```shell
     node add-wat.js 1 2
     ```
   * Success! You executed a Wasm module via Node!

Now, let's try a Rust-based Wasm module. Follow these instructions to compile and run the Rust-based Wasm module:

1. Install the `wasm-bind-gen` CLI:
   * ```shell
     cargo install -f wasm-bindgen-cli
     ```
3. Compile the Rust code to a Wasm module:
   * ```shell
     cargo build --manifest-path=rust-add/Cargo.toml --target=wasm32-unknown-unknown
     ```
4. Generate the Rust bindings for the Wasm module
   * ```shell
     wasm-bindgen --out-dir rust-add/pkg rust-add/target/wasm32-unknown-unknown/debug/rust_add.wasm
     ```
5. Run the program:
   * ```shell
     node --experimental-wasm-modules --no-warnings add-rust.mjs 1 2
     ```


## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE Write some basic WAT code
* [ ] Write more WAT code
* [x] DONE Run a WAT program from a NodeJS embedding environment
* [ ] Run a WAT program using [wasm3](https://github.com/wasm3/wasm3) (a Wasm interpreter)
* [x] DONE Compile a "hello world" Rust program to Wasm (UPDATE 2022-06-27: I don't want all this web stuff. I don't
      want the final artifact to be a web page, I want to be able to run it in a NodeJS embedding environment.)
      How to build a package? I think `wasm-pack build --target bundler`.
      UPDATE 2: Can I compile the Rust code using `cargo` directly, and use `--target=wasm/32/unknown/unknown` like this <https://stackoverflow.com/a/71673305/>?
      UPDATE 3: Yes, Cargo + `wasm-bind-gen` is all I need. Works great (for this toy program at least).
* [ ] Compile a "hello world" Kotlin program to Wasm (This isn't possible right now. Kotlin needs to finalize and release
      their Wasm stuff. I think it's in flux.)
* [ ] Compile a "hello world" Go program to Wasm
* [ ] Use ES modules for `add-wat.js`. I want to avoid CommonJS as much as feasible.
* [ ] Consider splitting into a `wat/` subproject and a `rust/` subproject.


## Reference

* [Book: *The Art of WebAssembly*](https://wasmbook.com/)
* [MDN: *Converting WebAssembly text format to wasm*](https://developer.mozilla.org/en-US/docs/WebAssembly/Text_format_to_wasm)
* [MDN: *Compiling from Rust to WebAssembly*](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
* [Online book: *Rust and WebAssembly*](https://rustwasm.github.io/docs/book/)
* [GitHub repo: `wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen)
  > Facilitating high-level interactions between Wasm modules and JavaScript
* [Node.js docs: *Wasm modules*](https://nodejs.org/api/esm.html#wasm-modules)
  * This describes the `--experimental-wasm-modules` flag.
