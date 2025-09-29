# KT Testing Suite AE

Extension of the KT Testing Suite for Adobe After Effects, providing specific matchers for testing After Effects scripts in ExtendScript.

## Overview

This extension adds custom matchers for After Effects, allowing you to write tests for layers, compositions, and other AE elements in an easy and expressive way. It is designed to work with [KT Testing Suite Core](https://github.com/Octopodo/kt-testing-suite-core) and [KT ExtendScript Builder](https://github.com/Octopodo/kt-extendscript-builder).

## Installation

To install the extension, use the following command:

```bash
npm install kt-testing-suite-ae
```

## Writing Tests

Examples of writing tests using the suite with AE-specific matchers:

```typescript
// src/tests/my-tests.test.ts
import { AE } from "kt-testing-suite-ae";
import { describe, it, expect } from "kt-testing-suite-core";

describe("Layer Tests", () => {
    it("should be a solid layer with correct opacity", () => {
        AE.expect(someLayer).toBeSolidLayer();
        AE.expect(someLayer).toMatchOpacity(100);
    });

    it("should have specific scale and position", () => {
        AE.expect(someLayer).toMatchScale([100, 100, 100]);
        AE.expect(someLayer).toMatchPosition([960, 540, 0]);
    });
});
```

## Adobe Type Helpers

Use type helpers to avoid TypeScript errors when accessing Adobe-specific properties (see [KT Testing Suite Core](https://github.com/Octopodo/kt-testing-suite-core) for details).

## Build Tests

To transpile tests to ExtendScript, run:

```bash
npm run build-tests
```

## Run Tests

To execute tests, use the [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug), pointing to your tests entry file, usually `src/tests/index.test.ts`.

Example output:

```
Suite: Layer Tests
  Test: should be a solid layer with correct opacity
    ✅ Passed

Test Results:
Passed: 1
Failed: 0
```

## Using Hooks

The suite supports hooks for setup and teardown (see [KT Testing Suite Core](https://github.com/Octopodo/kt-testing-suite-core) for details).

## Documentation

For detailed documentation on AE-specific matchers, see the `docs/` folder:

- [Matchers](docs/matchers.md)

## Test Files

Test files are located in `src/tests/`:

- [Layer Matchers Tests](src/tests/layerMatchers.test.ts)
- [Project Item Matchers Tests](src/tests/projectItemMatchers.test.ts)

## Links

- [KT Testing Suite Core](https://github.com/Octopodo/kt-testing-suite-core)
- [KT ExtendScript Builder](https://github.com/Octopodo/kt-extendscript-builder)
- [Bolt CEP](https://github.com/hyperbrew/bolt-cep)
- [After Effects Scripting Guide](https://ae-scripting.docsforadobe.dev/)
- [Types for Adobe](https://github.com/docsforadobe/Types-for-Adobe)

## About

Base extension for testing Adobe After Effects scripts.

### Resources

Read the full README on [GitHub](https://github.com/Octopodo/kt-testing-suite-ae).
