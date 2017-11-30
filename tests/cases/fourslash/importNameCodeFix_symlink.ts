/// <reference path="fourslash.ts" />

// @moduleResolution: node
// @noLib: true

// @Filename: /node_modules/a/index.d.ts
// @symlink: /node_modules/b/index.d.ts
////export const foo: number;

// @Filename: /a.ts
////import { foo } from "b";

// @Filename: /b.ts
////[|foo/**/;|]

goTo.file("/a.ts");
debug.printErrorList();
goTo.file("/b.ts");

// No import fix for `a`
verify.importFixAtPosition([
`import { render } from "b";

render;`,
]);
