#!/usr/bin/env node

const OpenAPI = require('openapi-typescript-codegen');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

const { specUrl } = require('./config.json');

// defaults
let { outDir, clientName } = require('./config.json');

// override defaults if provided
if (argv.outDir) {
    outDir = argv.outDir;
}

if (argv.clientName) {
    clientName = argv.clientName;
}

function generateApiWrapper() {
    fetch(specUrl).then(async response => {
        if(response.ok) {
            spec = await response.json();
            OpenAPI.generate({
                input: spec,
                output: outDir,
                clientName: clientName
            });
        }
    });
}

generateApiWrapper();
