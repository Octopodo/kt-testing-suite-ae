import { Matcher, expect } from 'kt-testing-suite-core';
interface AeItem extends Item, CompItem, FolderItem, FootageItem, AVItem {}

// Matcher específico para After Effects
export const projectItemMatchers: Matcher<any> = {
    toBeComp: function () {
        expect(this.actual).toBeInstanceOf(CompItem);
        return this;
    },
    toBeFolder: function () {
        expect(this.actual).toBeInstanceOf(FolderItem);
        return this;
    },
    toBeAudio: function () {
        expect(this.actual).not().toBeInstanceOf(CompItem);
        expect(this.actual).toBeInstanceOf(FootageItem);
        expect(this.actual).toHaveProperty('hasAudio', true);
        expect(this.actual).toHaveProperty('hasVideo', false);
        return this;
    },
    toBeVideo: function () {
        expect(this.actual).not().toBeInstanceOf(CompItem);
        expect(this.actual).toBeInstanceOf(FootageItem);
        expect(this.actual).toHaveProperty('hasVideo', true);
        return this;
    },
    toBeImage: function () {
        expect(this.actual).not().toBeInstanceOf(CompItem);
        expect(this.actual).toBeInstanceOf(FootageItem);
        expect(this.actual).toHaveProperty('hasVideo', true);
        expect(this.actual).toHaveProperty('duration', 0);
        expect(this.actual).toHaveProperty('hasAudio', false);
        return this;
    },
    toBeItem: function () {
        expect(this.actual).toPassAny([
            'toBeComp',
            'toBeFolder',
            'toBeAudio',
            'toBeVideo',
            'toBeImage'
        ]);
        return this;
    }

};
