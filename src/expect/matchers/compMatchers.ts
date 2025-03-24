import { Matcher, expect } from 'kt-testing-suite-core';

export const compMatchers: Matcher<any> = {
    toBeComp: function () {
        expect(() => expect(this.actual).toBeInstanceOf(CompItem));
        return this;
    }
};
