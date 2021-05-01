'use strict';

const processor_config = require('./../../configs/processor_config.json')

this.h1_processor = require('./../md_processors/h1_processor')
this.h2_processor = require('./../md_processors/h2_processor')
this.h3_processor = require('./../md_processors/h3_processor')
this.h4_processor = require('./../md_processors/h4_processor')
this.h5_processor = require('./../md_processors/h5_processor')
this.h6_processor = require('./../md_processors/h6_processor')
this.list_processor = require('./../md_processors/list_processor')
this.ordered_list_processor = require('./../md_processors/ordered_list_processor')
this.horizontal_rule_processor = require('./../md_processors/horizontal_rule_processor')
this.bold_processor = require('./../md_processors/bold_processor')
this.italic_processor = require('./../md_processors/italic_processor')
this.strikethrough_processor = require('./../md_processors/strikethrough_processor')
this.link_processor = require('./../md_processors/link_processor')
this.image_processor = require('./../md_processors/image_processor')
this.array_processor = require('./../md_processors/array_processor')
this.code_block_processor = require('./../md_processors/code_block_processor')


exports.load_processors = function load_processors() {
    // TODO : Ajouter commentaire
    // TODO : Ajouter filtre pour désactiver des processors

    return processor_config.processors.map(processor => this[processor + "_processor"]);
}
