import {
    describe,
    it,
    expect,
    runTests,
    getSuites,
} from "kt-testing-suite-core";

import { AE } from "../expect";

import "./project.test";
import "./projectItemMatchers.test";
import "./layerMatchers.test";
runTests();
