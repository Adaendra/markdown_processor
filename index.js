#! /usr/bin/env node

const { program } = require('commander')
const process = require('./commands/process')
const generate_squeleton = require('./commands/generate_squeleton')
var package_json = require('./package.json');

program.version(package_json.version)

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
    .option(
        '-f, --file <files_to_process...>',
        'Path to the MarkDown files to process.'
    )
    .option(
        '-t, --title <title_in_html_file>',
        'Title to show in the HTML file',
        ''
    )
    .option(
        '--subtitle <subtitle_in_html_file>',
        'Subtitle to show in the HTML file',
        ''
    )
    .option(
        '--copyrights <copyrights>',
        'Copyrights',
        ''
    )
    .addOption(new program.Option(
        '--theme <css_theme>',
        'CSS Theme to use in the generated HTML file')
        .choices(['', 'dark', 'default', 'rpg'])
        .default('default')
    )
    .option(
        '--custom-theme <custom theme path>',
        'Path to the custom theme file'
    )
    .addOption(new program.Option(
        '-o, --output <output>',
        'Output format')
        .choices(['html', 'pdf'])
        .default('html')
    )
    .option(
        '--folders <folders>',
        'Path to the folders with all the MarkDown files to process.'
    )
    .option(
        '--table <table of content levels>',
        'To add a table of content. Select which levels of title must be added in. Formats: \'[1-6]\' or \'[1-6]-[1-6]\''
    )
    .option(
        '--front-matter',
        'To have a front matter in your file'
    )
    .option(
        '--option-file <path to option file>',
        'Use a JSON option file to use the CLI easily.'
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
        .choices(['dark', 'default', 'rpg'])
    )
    .description('Generate a css squeleton to create a custom theme or clone an existing theme.')
    .action(generate_squeleton)

program.parse()
