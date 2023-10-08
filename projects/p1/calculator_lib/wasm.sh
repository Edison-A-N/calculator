#!/bin/bash

# 编译 Rust 代码为 WebAssembly
cargo build --target wasm32-unknown-unknown --release

# 将生成的 wasm 文件复制到 "web/public" 文件夹下
cp target/wasm32-unknown-unknown/release/calculator_lib.wasm ../web/public
