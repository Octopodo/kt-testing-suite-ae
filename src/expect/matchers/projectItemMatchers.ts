import { Matcher, expect, asAdobeType } from "kt-testing-suite-core";

// Matcher específico para After Effects
export const projectItemMatchers: Matcher<any> = {
    toBeComp: function () {
        let item = asAdobeType<AVItem>(this.actual);
        expect(item).toBeInstanceOf(CompItem);

        return this;
    },

    toBeFolder: function () {
        let item = asAdobeType<FolderItem>(this.actual);
        expect(item).toBeInstanceOf(FolderItem);
        return this;
    },

    toBeAudio: function () {
        let item = asAdobeType<FootageItem>(this.actual);
        expect(item).not().toBeInstanceOf(CompItem);
        expect(item).toBeInstanceOf(FootageItem);
        expect(item).toHaveProperty("hasAudio", true);
        expect(item).toHaveProperty("hasVideo", false);
        return this;
    },

    toBeVideo: function () {
        let item = asAdobeType<FootageItem>(this.actual);
        expect(item).not().toBeInstanceOf(CompItem);
        expect(item).toBeInstanceOf(FootageItem);
        expect(item).toHaveProperty("hasVideo", true);
        return this;
    },

    toBeImage: function () {
        let item = asAdobeType<FootageItem>(this.actual);
        expect(item).not().toBeInstanceOf(CompItem);
        expect(item).toBeInstanceOf(FootageItem);
        expect(item).toHaveProperty("hasVideo", true);
        expect(item).toHaveProperty("duration", 0);
        expect(item).toHaveProperty("hasAudio", false);
        return this;
    },

    toBeItem: function () {
        this.toPassAny([
            "toBeComp",
            "toBeFolder",
            "toBeAudio",
            "toBeVideo",
            "toBeImage",
        ]);
        return this;
    },

    toBeCollection: function () {
        expect(this.actual).toPassAny([
            { toBeInstanceOf: ItemCollection },
            { toBeInstanceOf: LayerCollection },
            { toBeInstanceOf: OMCollection },
            { toBeInstanceOf: RQItemCollection },
        ]);
        return this;
    },
};
