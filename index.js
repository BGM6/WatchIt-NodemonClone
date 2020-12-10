#!/usr/bin/env node
import chokidar from 'chokidar';

chokidar.watch('.')
    .on('add', () => console.log('File Added'))
    .on('change', () => console.log('File Changed'))
    .on('unlink', () => console.log('File Unlinked'));
