const { serialize } = require ("./index.js")
//const example = require ("./examples/core/colors/basicColors.js")
const example = require ("./examples/core/expansions/expand.js")
console.log( serialize({smooth:true}, example.main())[0])
