import {
    extendMatchers,
    type Matcher,
    type Expect
} from 'kt-testing-suite-core';
import { compMatchers } from './matchers/compMatchers';
import { projectItemMatchers } from './matchers/projectItemMatchers';

export namespace AE {
    export function expect<T>(actual: T): Expect<T> & Matcher<T> {
        return extendMatchers(actual, [projectItemMatchers]);
    }
}
