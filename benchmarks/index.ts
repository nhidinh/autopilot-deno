// Copyright 2020-present Divy Srivastava and friends. All rights reserved. MIT license.

import AutoPilot from "../mod.ts";
import { logger } from "./deps.ts";

import { createBench, runBench } from "./collect.ts";

let pilot = new AutoPilot();

// collect all benchmark defs
createBench(pilot, logger);

// run all benchmarks
runBench();
