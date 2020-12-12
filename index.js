#!/usr/bin/env node
import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import program from 'caporal';


program
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action((args) => {
        const start = debounce(() => {
            console.log('Starting user program');
        }, 100);

        chokidar.watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start);
    });

program.parse(process.argv);

