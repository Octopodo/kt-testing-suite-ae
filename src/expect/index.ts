import {
    extendMatchers,
    type Matcher,
    type Expect,
} from "kt-testing-suite-core";

import { projectItemMatchers } from "./matchers/projectItemMatchers";
import { layerMatchers } from "./matchers/layerMatchers";

export namespace AE {
    export function expect<T>(actual: T): Expect<T> & Matcher<T> {
        return extendMatchers(actual, [projectItemMatchers, layerMatchers]);
    }
}
