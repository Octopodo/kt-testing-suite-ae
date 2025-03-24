import { AE } from '../expect'; // Ajusta la ruta según tu estructura
import { describe, it, expect } from 'kt-testing-suite-core';

describe('Project Matchers Suite', () => {
    // Limpiar el proyecto antes de cada test para evitar interferencias
    // toBeItem
    describe('toBeItem', () => {
        it('passes for any Item type', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            const folder = app.project.items.addFolder('TestFolder');
            AE.expect(comp).toBeItem();
            AE.expect(folder).toBeItem();
            comp.remove();
            folder.remove();
        });

        it('fails for non-Item values', () => {
            AE.expect(() => AE.expect(42).toBeItem()).toThrow();
            AE.expect(() => AE.expect('string').toBeItem()).toThrow();
            AE.expect(() => AE.expect(null).toBeItem()).toThrow();
        });
    });

    // toBeCompItem
    describe('toBeCompItem', () => {
        it('passes for CompItem', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            AE.expect(comp).toBeCompItem();
            comp.remove();
        });

        it('fails for non-CompItem values', () => {
            const folder = app.project.items.addFolder('TestFolder');
            AE.expect(() => AE.expect(folder).toBeCompItem()).toThrow();
            AE.expect(() => AE.expect(42).toBeCompItem()).toThrow();
            folder.remove();
        });
    });

    // toBeFolderItem
    describe('toBeFolderItem', () => {
        it('passes for FolderItem', () => {
            const folder = app.project.items.addFolder('TestFolder');
            AE.expect(folder).toBeFolderItem();
            folder.remove();
        });

        it('fails for non-FolderItem values', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            AE.expect(() => AE.expect(comp).toBeFolderItem()).toThrow();
            AE.expect(() => AE.expect(null).toBeFolderItem()).toThrow();
            comp.remove();
        });
    });

    // toBeFootageItem
    describe('toBeFootageItem', () => {
        it('passes for FootageItem', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            const solid = comp.layers.addSolid(
                [1, 1, 1],
                'TestSolid',
                1920,
                1080,
                1
            );
            const footage = app.project.item(2); // El sólido aparece como FootageItem
            AE.expect(footage).toBeFootageItem();
            comp.remove();
            solid.remove();
        });

        it('fails for non-FootageItem values', () => {
            const folder = app.project.items.addFolder('TestFolder');
            AE.expect(() => AE.expect(folder).toBeFootageItem()).toThrow();
            AE.expect(() => AE.expect(undefined).toBeFootageItem()).toThrow();
            folder.remove();
        });
    });

    // toHaveName
    describe('toHaveName', () => {
        it('passes when Item has the expected name', () => {
            const comp = app.project.items.addComp(
                'MyComp',
                1920,
                1080,
                1,
                10,
                30
            );
            AE.expect(comp).toHaveName('MyComp');
            comp.remove();
        });

        it('fails when Item has a different name', () => {
            const comp = app.project.items.addComp(
                'MyComp',
                1920,
                1080,
                1,
                10,
                30
            );
            AE.expect(() => AE.expect(comp).toHaveName('WrongName')).toThrow();
            comp.remove();
        });

        it('fails for non-Item values', () => {
            AE.expect(() => AE.expect(42).toHaveName('Test')).toThrow();
        });
    });

    // toContainItems
    describe('toContainItems', () => {
        it('passes when FolderItem has the expected number of items', () => {
            const folder = app.project.items.addFolder('TestFolder');
            const comp = folder.items.addComp('Comp1', 1920, 1080, 1, 10, 30);
            AE.expect(folder).toContainItems(1);
            folder.remove();
            comp.remove();
        });

        it('fails when FolderItem has a different number of items', () => {
            const folder = app.project.items.addFolder('TestFolder');
            const comp = folder.items.addComp('Comp1', 1920, 1080, 1, 10, 30);
            AE.expect(() => AE.expect(folder).toContainItems(2)).toThrow();
            folder.remove();
            comp.remove();
        });

        it('fails for non-FolderItem values', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            AE.expect(() => AE.expect(comp).toContainItems(1)).toThrow();
            comp.remove();
        });
    });

    // toBeSelected
    describe('toBeSelected', () => {
        it('passes when Item is selected', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            comp.selected = true;
            AE.expect(comp).toBeSelected();
            comp.remove();
        });

        it('fails when Item is not selected', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            comp.selected = false;
            AE.expect(() => AE.expect(comp).toBeSelected()).toThrow();
            comp.remove();
        });

        it('fails for non-Item values', () => {
            AE.expect(() => AE.expect(42).toBeSelected()).toThrow();
        });
    });

    // toBeActiveItem
    describe('toBeActiveItem', () => {
        it('passes when Item is the active item', () => {
            const comp = app.project.items.addComp(
                'TestComp',
                1920,
                1080,
                1,
                10,
                30
            );
            comp.openInViewer(); // Hace que sea el activeItem
            AE.expect(comp).toBeActiveItem();
            comp.remove();
        });

        it('fails when Item is not the active item', () => {
            const comp1 = app.project.items.addComp(
                'Comp1',
                1920,
                1080,
                1,
                10,
                30
            );
            const comp2 = app.project.items.addComp(
                'Comp2',
                1920,
                1080,
                1,
                10,
                30
            );
            comp2.openInViewer(); // Comp2 es el activeItem
            AE.expect(() => AE.expect(comp1).toBeActiveItem()).toThrow();
            comp1.remove();
            comp2.remove();
        });

        it('fails for non-Item values', () => {
            AE.expect(() => AE.expect(42).toBeActiveItem()).toThrow();
        });
    });
});
