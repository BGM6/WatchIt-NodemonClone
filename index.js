#!/usr/bin/env node
import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import program from 'caporal';

const start = debounce(() => {
    console.log('Starting user program');
}, 100);

chokidar.watch('.')
    .on('add', start)
    .on('change', () => console.log('File Changed'))
    .on('unlink', () => console.log('File Unlinked'));
