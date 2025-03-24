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
    toBeFootage: function () {
        expect(this.actual).toBeInstanceOf(FootageItem);
        return this;
    },
    toBeImage: function () {
        const actual = this.actual as unknown as FootageItem;
        expect(actual).not().toBeComp();
        expect(actual).not().toBeFolder();
        expect(actual).not().hasAudio();
        expect(actual).hasVideo();
        expect(actual).toHaveDuration(0);
        return this;
    },
    toBeVideo: function () {
        const actual = this.actual as unknown as FootageItem;
        expect(actual).not().toBeComp();
        expect(actual).toBeFootage();
        expect(actual).hasVideo();
        expect(actual.duration).toBeGreaterThan(0);
        return this;
    },
    toBeItem: function () {
        expect(this.actual).toPassAnyOf([
            'toBeComp',
            'toBeFolder',
            'toBeFootage',
            'toBeAudio',
            'toBeVideo'
        ]);
        return this;
    },
    toBeAudio: function () {
        expect(this.actual).not().toBeComp();
        expect(this.actual).toBeFootage();
        expect(this.actual).hasAudio();
        expect(this.actual).not().hasVideo();
        return this;
    },

    toHasAudio: function () {
        const actual = this.actual as unknown as FootageItem;
        expect(actual).toHaveProperty('hasAudio');
        expect(actual.hasAudio).toBe(true);
        return this;
    },
    toHasVideo: function () {
        const actual = this.actual as unknown as FootageItem;
        expect(actual).toHaveProperty('hasVideo');
        expect(actual.hasVideo).toBe(true);
        return this;
    },
    toHaveDuration: function (duration: number) {
        const actual = this.actual as unknown as FootageItem;
        expect(actual).toHaveProperty('duration');
        expect(actual.duration).toBe(duration);
        return this;
    }
};
