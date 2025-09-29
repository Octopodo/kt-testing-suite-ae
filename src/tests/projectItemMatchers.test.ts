// src/tests/projectItemMatchers.test.ts
import { AE } from "../expect";
import {
    describe,
    it,
    expect,
    beforeAll,
    afterAll,
} from "kt-testing-suite-core";

describe("Project Item Matchers", () => {
    let testComp: CompItem;
    let testFolder: FolderItem;

    beforeAll(() => {
        // Create test project items
        testComp = app.project.items.addComp(
            "Test Composition",
            1920,
            1080,
            1,
            10,
            30
        );
        testFolder = app.project.items.addFolder("Test Folder");
    });

    afterAll(() => {
        // Clean up all test items
        if (testComp) testComp.remove();
        if (testFolder) testFolder.remove();
    });

    describe("toBeComp", () => {
        it("should pass for composition items", () => {
            AE.expect(testComp).toBeComp();
        });

        it("should fail for non-composition items", () => {
            expect(() => AE.expect(testFolder).toBeComp()).toThrow();
        });
    });

    describe("toBeFolder", () => {
        it("should pass for folder items", () => {
            AE.expect(testFolder).toBeFolder();
        });

        it("should fail for non-folder items", () => {
            expect(() => AE.expect(testComp).toBeFolder()).toThrow();
        });
    });

    describe("toBeVideo", () => {
        it("should pass for video footage", () => {
            // TODO: Implement when footage creation is available
        });
    });

    describe("toBeImage", () => {
        it("should pass for image footage", () => {
            // TODO: Implement when footage creation is available
        });
    });

    describe("toBeItem", () => {
        it("should pass for any valid project item", () => {
            AE.expect(testComp).toBeItem();
            AE.expect(testFolder).toBeItem();
        });

        it("should fail for invalid items", () => {
            expect(() => AE.expect(null).toBeItem()).toThrow();
            expect(() => AE.expect(undefined).toBeItem()).toThrow();
        });
    });

    describe("toBeCollection", () => {
        it("should pass for item collections", () => {
            AE.expect(app.project.items).toBeCollection();
        });

        it("should pass for layer collections", () => {
            AE.expect(testComp.layers).toBeCollection();
        });

        it("should fail for non-collection objects", () => {
            expect(() => AE.expect(testComp).toBeCollection()).toThrow();
        });
    });
});
