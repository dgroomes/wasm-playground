(;
This is a simple module defined by "The Art of WebAssembly" book.
Intellij has a nice WebAssembly plugin which enables IDE support for .wat files. It doesn't support auto-formatting
though so I'm just making up a format style by the seat of my pants.
;)

(module
    ;; Define a function to add two numbers together
    (func (export "add") (param $value_1 i32) (param $value_2 i32) (result i32)
    local.get $value_1
    local.get $value_2
    i32.add))
