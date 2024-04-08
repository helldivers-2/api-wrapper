#!/usr/bin/env node

const OpenAPI = require('openapi-typescript-codegen');
const { outDir, specUrl, clientName } = require('./config.json');

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
