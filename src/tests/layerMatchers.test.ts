// src/tests/layerMatchers.test.ts
import { AE } from "../expect";
import {
    describe,
    it,
    expect,
    beforeAll,
    afterAll,
} from "kt-testing-suite-core";

describe("Layer Matchers", () => {
    let testComp: CompItem;
    let solidLayer: Layer;
    let textLayer: TextLayer;
    let nullLayer: Layer;
    let adjustmentLayer: AVLayer;

    beforeAll(() => {
        // Create test composition
        testComp = app.project.items.addComp(
            "Test Composition",
            1920,
            1080,
            1,
            10,
            30
        );

        // Create different types of layers
        solidLayer = testComp.layers.addSolid(
            [1, 0, 0],
            "Solid Layer",
            1920,
            1080,
            1,
            10
        ) as Layer;
        textLayer = testComp.layers.addText("Test Text");
        nullLayer = testComp.layers.addNull();
        adjustmentLayer = testComp.layers.addSolid(
            [0.5, 0.5, 0.5],
            "Adjustment",
            1920,
            1080,
            1,
            10
        ) as AVLayer;
        adjustmentLayer.adjustmentLayer = true;
    });

    afterAll(() => {
        // Clean up
        if (testComp) testComp.remove();
    });

    describe("toBeLayer", () => {
        it("should pass for valid layers", () => {
            AE.expect(solidLayer).toBeLayer();
            AE.expect(textLayer).toBeLayer();
            AE.expect(nullLayer).toBeLayer();
        });

        it("should fail for null or undefined", () => {
            expect(() => AE.expect(null).toBeLayer()).toThrow();
            expect(() => AE.expect(undefined).toBeLayer()).toThrow();
        });
    });

    describe("toBeTextLayer", () => {
        it("should pass for text layers", () => {
            AE.expect(textLayer).toBeTextLayer();
        });

        it("should fail for non-text layers", () => {
            expect(() => AE.expect(solidLayer).toBeTextLayer()).toThrow();
        });
    });

    describe("toBeAVLayer", () => {
        it("should pass for AV layers", () => {
            AE.expect(solidLayer).toBeAVLayer();
            AE.expect(adjustmentLayer).toBeAVLayer();
        });

        it("should fail for non-AV layers", () => {
            expect(() => AE.expect(textLayer).toBeAVLayer()).toThrow();
        });
    });

    describe("toBeSolidLayer", () => {
        it("should pass for solid layers", () => {
            AE.expect(solidLayer).toBeSolidLayer();
        });

        it("should fail for non-solid layers", () => {
            expect(() => AE.expect(textLayer).toBeSolidLayer()).toThrow();
        });
    });

    describe("toBeNullLayer", () => {
        it("should pass for null layers", () => {
            AE.expect(nullLayer).toBeNullLayer();
        });

        it("should fail for non-null layers", () => {
            expect(() => AE.expect(solidLayer).toBeNullLayer()).toThrow();
        });
    });

    describe("toBeAdjustmentLayer", () => {
        it("should pass for adjustment layers", () => {
            AE.expect(adjustmentLayer).toBeAdjustmentLayer();
        });

        it("should fail for non-adjustment layers", () => {
            expect(() => AE.expect(solidLayer).toBeAdjustmentLayer()).toThrow();
        });
    });

    describe("toMatchDuration", () => {
        it("should pass when duration matches", () => {
            AE.expect(solidLayer).toMatchDuration(10);
        });

        it("should fail when duration doesn't match", () => {
            expect(() => AE.expect(solidLayer).toMatchDuration(5)).toThrow();
        });
    });

    describe("toMatchIndex", () => {
        it("should pass when index matches", () => {
            AE.expect(solidLayer).toMatchIndex(4);
            AE.expect(textLayer).toMatchIndex(3);
        });

        it("should fail when index doesn't match", () => {
            expect(() => AE.expect(solidLayer).toMatchIndex(3)).toThrow();
        });
    });

    describe("toMatchOpacity", () => {
        it("should pass when opacity matches", () => {
            AE.expect(solidLayer).toMatchOpacity(100);
        });

        it("should fail when opacity doesn't match", () => {
            expect(() => AE.expect(solidLayer).toMatchOpacity(50)).toThrow();
        });
    });

    describe("toMatchScale", () => {
        it("should pass when scale matches", () => {
            AE.expect(solidLayer).toMatchScale([100, 100, 100]);
        });

        it("should fail when scale doesn't match", () => {
            expect(() =>
                AE.expect(solidLayer).toMatchScale([50, 50, 50])
            ).toThrow();
        });
    });

    describe("toMatchPosition", () => {
        it("should pass when position matches", () => {
            AE.expect(solidLayer).toMatchPosition([960, 540, 0]);
        });

        it("should fail when position doesn't match", () => {
            expect(() =>
                AE.expect(solidLayer).toMatchPosition([0, 0, 0])
            ).toThrow();
        });
    });

    describe("toMatchRotation", () => {
        it("should pass when rotation matches", () => {
            AE.expect(solidLayer).toMatchRotation(0);
        });

        it("should fail when rotation doesn't match", () => {
            expect(() => AE.expect(solidLayer).toMatchRotation(45)).toThrow();
        });
    });

    describe("toMatch3DLayer", () => {
        it("should pass when 3D layer state matches", () => {
            AE.expect(solidLayer).toMatch3DLayer(false);
        });

        it("should fail when 3D layer state doesn't match", () => {
            expect(() => AE.expect(solidLayer).toMatch3DLayer(true)).toThrow();
        });
    });

    describe("toToBeLocked", () => {
        it("should pass when locked state matches", () => {
            AE.expect(solidLayer).toToBeLocked(false);
        });

        it("should fail when locked state doesn't match", () => {
            expect(() => AE.expect(solidLayer).toToBeLocked(true)).toThrow();
        });
    });

    describe("toToBeHidden", () => {
        it("should pass when hidden state matches", () => {
            AE.expect(solidLayer).toToBeHidden(false);
        });

        it("should fail when hidden state doesn't match", () => {
            expect(() => AE.expect(solidLayer).toToBeHidden(true)).toThrow();
        });
    });
});
