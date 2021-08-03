#! /usr/bin/env node

const { program } = require('commander')
const process = require('./commands/process')


program
    .command('process')
    .description('Process a Markdown file to html')
    .action(process)
// TODO : Rajouter des options
// - Nom -> Mettre une valeur par défaut (timestamp)
// - Endroit où mettre le fichier -> Mettre une valeur par défaut (fichier courant)
// - Fichier de base avec le contenu
// - Contenu direct
// - Le type de style que l'on veut -> Mettre une valeur par défaut (default) -> si le style n'existe pas, on lance une erreur.

program.parse()
