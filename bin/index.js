#! /usr/bin/env node
const { exec } = require("child_process");

const arg = process.argv.slice(2);
const appName = arg[0];

const command = `npx degit imattdunbar/create-virts-app#main ${appName}`

exec(command, (error, stdout, stderr) => {
    if (error || stderr) {
        process.exit(1);
    }
    else {
        console.log('Created successfully.');
    }
})
