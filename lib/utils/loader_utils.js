'use strict';

const processor_config = require('./../../configs/processor_config.json')

const h1_processor = require('./../md_processors/h1_processor')
const h2_processor = require('./../md_processors/h2_processor')
const h3_processor = require('./../md_processors/h3_processor')
const h4_processor = require('./../md_processors/h4_processor')
const h5_processor = require('./../md_processors/h5_processor')
const h6_processor = require('./../md_processors/h6_processor')


exports.load_processors = function load_processors() {
    // TODO : Ajouter commentaire
    // TODO : Ajouter filtre pour désactiver des processors
    let map_processors = new Map();
    processor_config.processors.forEach(processor => {
        map_processors.set(processor + "_processor",  this[processor + "_processor"])
    });

    return map_processors;
}
