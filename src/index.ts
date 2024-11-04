import "module-alias/register";

import moduleA from "@modules/module-a";
import moduleB from "@modules/module-b";

console.log(moduleA("imported from root"));
console.log(moduleB("imported from root"));
