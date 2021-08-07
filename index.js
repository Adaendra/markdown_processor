#! /usr/bin/env node

const { program } = require('commander')
const process = require('./commands/process')

program.version("0.1.0")

program.showHelpAfterError('(add --help for additional information)');

program
    .command('process')
    .description('Process a Markdown file to html')
    .option(
        '-n, --name <file_name_destination>',
        'Name of the generated file. If not defined, the name will be the current timestamp.'
    )
    .option(
        '-d, --destination <file_path_destination>',
        'Path to the generated file.',
        './'
    )
    .requiredOption(
        '-f, --file <files_to_process...>',
        'Path to the MarkDown files to process.'
    )
    .option(
        '-t, --titre <title_in_html_file>',
        'Title to show in the HTML file',
        ''
    )
    .addOption(new program.Option(
        '--theme <css_theme>',
        'CSS Theme to use in the generated HTML file')
        .choices(['default', 'rpg'])
        .default('default')
    )
    .action(process)

// TODO : Rajouter des options
// - Le type de style que l'on veut -> Mettre une valeur par défaut (default) -> si le style n'existe pas, on lance une erreur.

program.parse()
