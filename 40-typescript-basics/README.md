# TypeScript Basics

If we run `tsc script.ts`, we transpile from TypeScript to JavaScript but the resulting JavaScript is of version ES5 (ES2012).

If we instead create a `tsconfig.json` using `tsc --init` and specify how we want the TypeScript compiler to work. We can then run just `tsc` and the compiler will read the config from `tsconfig.json`.
