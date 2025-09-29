import { Matcher, expect, asAdobeType } from "kt-testing-suite-core";

// Matcher específico para After Effects
export const layerMatchers: Matcher<any> = {
    toBeLayer: function () {
        expect(this.actual).not().toBeNull();
        expect(this.actual).not().toBeUndefined();
        expect(this.actual).toHaveProperty("nullLayer");
        return this;
    },
    toBeAVLayer: function () {
        const layer = asAdobeType<AVLayer>(this.actual);
        expect(layer).toBeInstanceOf(AVLayer);
        return this;
    },
    toBeTextLayer: function () {
        const layer = asAdobeType<TextLayer>(this.actual);
        expect(layer).toBeInstanceOf(TextLayer);
        return this;
    },

    toBeCameraLayer: function () {
        const layer = asAdobeType<CameraLayer>(this.actual);
        expect(layer).toBeInstanceOf(CameraLayer);
        return this;
    },

    toBeLightLayer: function () {
        const layer = asAdobeType<LightLayer>(this.actual);
        expect(layer).toBeInstanceOf(LightLayer);
        return this;
    },

    toBeSolidLayer: function () {
        const layer = asAdobeType<AVLayer>(this.actual);
        expect(layer).toBeInstanceOf(AVLayer);
        expect(layer.source.mainSource).toBeInstanceOf(SolidSource);
        return this;
    },

    toBeFootageLayer: function () {
        const layer = asAdobeType<AVLayer>(this.actual);
        expect(layer).toBeInstanceOf(AVLayer);
        expect(layer.source.mainSource).toBeInstanceOf(FootageSource);
        return this;
    },

    toBeCompLayer: function () {
        const layer = asAdobeType<AVLayer>(this.actual);
        expect(layer.source).toBeComp();
        return this;
    },

    toBeNullLayer: function () {
        const layer = asAdobeType<AVLayer>(this.actual);
        expect(layer.nullLayer).toBe(true);
        return this;
    },

    toBeAdjustmentLayer: function () {
        const layer = asAdobeType<AVLayer>(this.actual);
        expect(layer.adjustmentLayer).toBe(true);
        return this;
    },

    toBeShapeLayer: function () {
        const layer = asAdobeType<ShapeLayer>(this.actual);
        expect(layer).toBeInstanceOf(ShapeLayer);
        return this;
    },

    toBeAudioLayer: function () {
        const layer = asAdobeType<AVLayer>(this.actual);
        expect(layer).toBeInstanceOf(AVLayer);
        expect(layer.source).toBeAudio();
        return this;
    },

    toMatchDuration: function (expectedDuration: number) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer.outPoint - layer.inPoint).toBe(expectedDuration);
        return this;
    },

    toMatchInPoint: function (expectedInPoint: number) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer).toHaveProperty("inPoint", expectedInPoint);
        return this;
    },
    toMatchOutPoint: function (expectedOutPoint: number) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer).toHaveProperty("outPoint", expectedOutPoint);
        return this;
    },
    toMatchStartTime: function (expectedStartTime: number) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer).toHaveProperty("startTime", expectedStartTime);
        return this;
    },
    toMatchIndex: function (expectedIndex: number) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer.index).toBe(expectedIndex);
        return this;
    },
    toHaveEffect: function (effectName: string) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        const effects = layer.property("ADBE Effect Parade");
        expect(effects).not().toBeNull();
        expect(effects).not().toBeUndefined();

        let hasEffect = false;
        for (let i = 1; i <= effects.propertyGroup.length; i++) {
            const prop = effects.property(i);
            if (prop.name === effectName) {
                hasEffect = true;
                break;
            }
        }

        expect(hasEffect).toBe(true);
        return this;
    },

    toMatchEffectByMatchName: function (matchName: string) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        const effects = layer.property("ADBE Effect Parade");
        expect(effects).not().toBeNull();
        expect(effects).not().toBeUndefined();

        let hasEffect = false;
        for (let i = 1; i <= effects.propertyGroup.length; i++) {
            const prop = effects.property(i);
            if (prop.matchName === matchName) {
                hasEffect = true;
                break;
            }
        }

        expect(hasEffect).toBe(true);
        return this;
    },
    toHaveParent: function (expectedParent: Layer) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer.parent).toBe(expectedParent);
        return this;
    },

    toMatchOpacity: function (expectedOpacity: number) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.transform.opacity.value).toBe(expectedOpacity);
        return this;
    },
    toMatchScale: function (
        expectedScale: [number, number] | [number, number, number]
    ) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.transform.scale.value).toEqual(expectedScale);
        return this;
    },
    toMatchPosition: function (
        expectedPosition: [number, number] | [number, number, number]
    ) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.transform.position.value).toEqual(expectedPosition);
        return this;
    },
    toMatchRotation: function (expectedRotation: number) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.transform.rotation.value).toBe(expectedRotation);
        return this;
    },
    toMatchXRotation: function (expectedXRotation: number) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.xRotation).toBe(expectedXRotation);
        return this;
    },
    toMatchYRotation: function (expectedYRotation: number) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.yRotation).toBe(expectedYRotation);
        return this;
    },
    toMatchZRotation: function (expectedZRotation: number) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.zRotation).toBe(expectedZRotation);
        return this;
    },
    toMatch3DLayer: function (expected3D: boolean = true) {
        const layer = asAdobeType<AVLayer>(this.actual);
        this.expect(layer).toBeAVLayer();
        expect(layer.threeDLayer).toBe(expected3D);
        return this;
    },
    toToBeLocked: function (expectedLocked: boolean = true) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer.locked).toBe(expectedLocked);
        return this;
    },
    toToBeSolo: function (expectedSolo: boolean = true) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer.solo).toBe(expectedSolo);
        return this;
    },
    toToBeShy: function (expectedShy: boolean = true) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer.shy).toBe(expectedShy);
        return this;
    },
    toToBeGuideLayer: function (expectedGuideLayer: boolean = true) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer).hasProperty("guideLayer", expectedGuideLayer);
        return this;
    },
    toToBeHidden: function (expectedHidden: boolean) {
        const layer = asAdobeType<Layer>(this.actual);
        this.expect(layer).toBeLayer();
        expect(layer.enabled).toBe(!expectedHidden);
        return this;
    },
};
