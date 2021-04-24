'use strict';

let loader_utils = require('./utils/loader_utils')

console.log('coucou')
class MarkdownProcessor {

    // ----- Constructor
    constructor() {
        this.processors = loader_utils.load_processors()
    }

    // ----- Public Methods
    process() {
        console.log('process')
        console.log(this.processors)
    }

}

module.exports = new MarkdownProcessor()
