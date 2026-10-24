# @x12i/nexus usage example

Platform-neutral evidence-graph compiler (x12i-nexus/1).

This consuming application demonstrates **compile a small evidence-backed graph draft without a datastore** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Compile an evidence-backed graph in a platform-neutral consumer.
- Keep graph compilation separate from storage and transport choices.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/nexus)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
