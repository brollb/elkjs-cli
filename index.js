if (!process.argv[2]) {
    console.log(`${process.argv[1]} <filename>`);
}

const path = require('path');
const filename = path.resolve(process.argv[2]);
const graph = require(filename);

const Elk = require('./elk.bundled');
const elk = new Elk();

elk.layout(graph)
    .then(graph => console.log(JSON.stringify(graph, null, 2)));
