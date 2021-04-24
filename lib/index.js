'use strict';

let loader_utils = require('./utils/loader_utils')

class MarkdownProcessor {

    // ----- Constructor
    constructor() {
        this.processors = loader_utils.load_processors()
    }

    // ----- Public Methods
    process(str) {
        this.processors.forEach(processor => str = processor(str))
    }

}

module.exports = new MarkdownProcessor()
