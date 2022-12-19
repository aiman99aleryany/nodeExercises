// $ node  // to enter toe REPL
// require('crypto') // this will list all the methods available by 'crypto' core library
// then I can just generate import it now and use the one I want.

import { randomBytes } from "node:crypto";

const randomId = randomBytes(16).toString("hex");

console.log(randomId);
