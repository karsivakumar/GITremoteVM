"use strict";

// this is Foo.js
require('./bar');

console.log('inside foo.js');
[1, 2, 3].map(function (n) {
  return n + 1;
});
//# sourceMappingURL=foo.js.map
;"use strict";

// this is bar.js
console.log('inside bar.js');
//# sourceMappingURL=bar.js.map
