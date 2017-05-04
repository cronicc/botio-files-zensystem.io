var botio = require(process.env['BOTIO_MODULE']);
var shell = require('shelljs');

shell.config.silent = true;

// Recursively copy latest build to public directory
shell.exec('cp -r /mnt/latest/* /mnt/public');

botio.message('#### Published');
botio.message('You can view your repo files at: '+botio.public_url);