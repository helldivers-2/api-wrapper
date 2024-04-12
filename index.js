#!/usr/bin/env node

const OpenAPI = require('openapi-typescript-codegen');
const { Command } = require('commander');
const program = new Command();

const { version } = require('./package.json') 
let { defaultUrl, outDir, clientName } = require('./config.json');

program
  .version(version, '-v, --version')
  .description('Generate typescript files for the helldivers-2 community api')
  .option('-u, --url <url string>', 'OpenApi spec url', `${defaultUrl}`)
  .option('-o, --outDir <path>', 'Directory to write generated files to.', `${outDir}`)
  .option('-c, --clientName <string>', 'Client class name', `${clientName}`)
  .action((options) => {
    let specUrl = defaultUrl;

    if (options.url) {
        try { 
            specUrl = new URL(options.url);
        } catch(error) { 
            throw error;
        }
    }

    if (options.outDir) {
        outDir = options.outDir;
    }

    if (options.clientName) {
        clientName = options.clientName;
    }

    const fetchOptions = {
        method: "GET", 
        redirect: "follow",
        headers: {
            "Accept": "application/json",
        }
    };

    fetch(specUrl, fetchOptions).then(response => {
        if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        } else {
            return response.json();
        }
    }).then((spec) => {
        OpenAPI.generate({
            input: spec,
            output: outDir,
            clientName: clientName
        }).catch(error => {
            throw error;
        }).finally(_ => console.log("Done"));
    }).catch(error => {
        throw error;
    });
  });

program.parse();