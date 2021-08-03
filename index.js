#! /usr/bin/env node

const { program } = require('commander')
const process = require('./commands/process')

program.version("0.1.0")

program
    .command('process')
    .description('Process a Markdown file to html')
    .addOption(
        new program.Option(
            '-n, --name <file_name_destination>',
            'Name of the generated file. If not defined, the name will be the current timestamp.'
        )
    )
    .addOption(
        new program.Option(
            '-d, --destination <file_path_destination>',
            'Path to the generated file.'
        ).default('./', 'Current folder')
    )
    .addOption(
        new program.Option(
            '-f, --file <file_to_process>',
            'Path to the MarkDown to process.'
        )
    )
    .action(process)

// TODO : Rajouter des options
// - Fichier de base avec le contenu
// - Contenu direct
// - Le type de style que l'on veut -> Mettre une valeur par défaut (default) -> si le style n'existe pas, on lance une erreur.

program.parse()
