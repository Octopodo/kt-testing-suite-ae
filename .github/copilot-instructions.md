# KT Testing Suite AE - AI Agent Instructions

## Architecture Overview

This is an Adobe After Effects extension for the KT Testing Suite, providing AE-specific matchers for testing ExtendScript scripts. The codebase follows a modular matcher pattern:

- **Core Framework**: Extends `kt-testing-suite-core` with AE-specific assertions
- **Entry Point**: `AE.expect()` namespace (see `src/expect/index.ts`)
- **Matchers**: Layer matchers (`src/expect/matchers/layerMatchers.ts`) and project item matchers (`src/expect/matchers/projectItemMatchers.ts`)
- **Build System**: Uses `kt-extendscript-builder` to transpile TypeScript to ExtendScript (ES3)

## Key Patterns & Conventions

### AE-Specific Testing

```typescript
// Always use AE.expect() for AE objects, never base expect()
AE.expect(layer).toBeSolidLayer();
AE.expect(comp).toBeComp();

// Use asAdobeType() helper for type assertions
const layer = asAdobeType<AVLayer>(this.actual);

// Chain matchers fluently
AE.expect(layer)
    .toBeAVLayer()
    .toMatchOpacity(100)
    .toMatchScale([100, 100, 100]);
```

### Layer Type Checking

```typescript
// Check layer types with instanceof Adobe classes
expect(layer).toBeInstanceOf(AVLayer); // AVLayer, TextLayer, CameraLayer, etc.

// Common layer property checks
expect(layer.transform.opacity.value).toBe(expectedOpacity);
expect(layer.transform.position.value).toEqual([x, y, z]);
```

### Test Structure

```typescript
describe("Layer Tests", () => {
    let testComp: CompItem;
    let solidLayer: Layer;

    beforeAll(() => {
        // Create test AE objects in beforeAll
        testComp = app.project.items.addComp("Test", 1920, 1080, 1, 10, 30);
        solidLayer = testComp.layers.addSolid(
            [1, 0, 0],
            "Solid",
            1920,
            1080,
            1,
            10
        );
    });

    afterAll(() => {
        // Clean up AE objects
        if (testComp) testComp.remove();
    });
});
```

## Development Workflow

### Building & Testing

- **Build Tests**: `npm run build-tests` (minified) or `npm run build-tests-debug` (readable)
- **Run Tests**: Use Adobe ExtendScript Debugger pointing to `dist.test/index.test.js`
- **TypeScript Target**: ES3 for ExtendScript compatibility
- **Type Definitions**: Uses `types-for-adobe/AfterEffects/23.0`

### File Organization

- `src/expect/` - AE-specific expectation extensions
- `src/tests/` - Test files demonstrating matcher usage
- `docs/matchers.md` - Comprehensive matcher documentation
- `kt.config.json` - KT build configuration

## Common Pitfalls

- **Don't use base `expect()`** for AE objects - always use `AE.expect()`
- **Type assertions required** - Use `asAdobeType<T>()` before accessing AE properties
- **ES3 limitations** - No modern JS features, arrow functions, etc.
- **AE object lifecycle** - Always clean up created comps/layers in `afterAll()`
- **Property access** - AE properties use 1-based indexing (effects, masks, etc.)

## Dependencies & Integration

- **kt-testing-suite-core**: Base testing framework
- **kt-extendscript-builder**: TypeScript → ExtendScript transpiler
- **types-for-adobe**: TypeScript definitions for AE API
- **ExtendScript Debugger**: Required for running tests in AE environment</content>
  <parameter name="filePath">c:\work\dev\KT_aeft\kt-testing-suite-ae\.github\copilot-instructions.md
