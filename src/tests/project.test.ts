import { AE } from '../expect'; // Ajusta la ruta según tu estructura
import { describe, it, expect, beforeAll, afterAll } from 'kt-testing-suite-core';

describe('Project Matchers Suite', () => {
    let testComp: CompItem;
    let testFolder: FolderItem;
    beforeAll(() => {
        testComp = app.project.items.addComp(
            'TestComp',
            1920,
            1080,
            1,
            10,
            30
        );
        testFolder = app.project.items.addFolder('TestFolder');
    });
    afterAll(() => {
        testComp.remove();
        testFolder.remove();
    });

    // toBeCompItem
    describe('toBeCompItem', () => {
        it('passes for CompItem', () => {
            AE.expect(testComp).toBeComp();
        });

        it('fails for non-CompItem values', () => {
            AE.expect(() => AE.expect(testFolder).toBeCompItem()).toThrow();
            AE.expect(() => AE.expect(42).toBeCompItem()).toThrow();
        });
    });

    // toBeFolderItem
    describe('toBeFolderItem', () => {
        it('passes for FolderItem', () => {
            AE.expect(testFolder).toBeFolder();
        });

        it('fails for non-FolderItem values', () => {
            AE.expect(() => AE.expect(testComp).toBeFolder()).toThrow();
            AE.expect(() => AE.expect(42).toBeFolder()).toThrow();
        });
    });

});
