//! © 2015 Nathan Rugg <nmrugg@gmail.com> | MIT
var lzma = require("./src/lzma_worker.js");


module.exports.compress   = lzma.compress;
module.exports.decompress = lzma.decompress;

