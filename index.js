#! /usr/bin/env node

const { program } = require('commander')
const process = require('./commands/process')
const generate_squeleton = require('./commands/generate_squeleton')

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
        .choices(['', 'default', 'rpg'])
    )
    .action(process)


program
    .command('generate_squeleton')
    .option(
        '-n, --name <file_name_destination>',
        'Name of the generated file. If not defined, the name will be the current timestamp.'
    )
    .addOption(new program.Option(
        '--theme <css_theme>',
        'CSS Theme to copy')
        .choices(['default', 'rpg'])
    )
    .description('Generate a css squeleton to create a custom theme or clone an existing theme.')
    .action(generate_squeleton)

program.parse()
