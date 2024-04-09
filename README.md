# Helldivers 2 TypeScript API wrapper

This is a simple node application to generate Typescript code for [helldivers-2/api](https://github.com/helldivers-2/api). Using the above provided OpenApi spec this application will generate all the nessecary models and services to interact with the api in a TypeScript application.

## How to use
### With source
- clone repo
- ``npm install``
- ``npm run generate``

### With npm
- ``npm i @helldivers-2/api-wrapper``
- ``npx @helldivers-2/api-wrapper index.js``

this will create a generated folder (configurable) containing all the models, services, ect.
Now to use the services you need to create an instance of the client.

``` javascript
const hellDivers2Client = new HellDivers2Client({
    BASE: 'https://helldivers-2-dotnet.fly.dev'
});

const res = hellDivers2Client.v1.getApiV1AssignmentsAll();
// do stuff
```

### Options:
The script will use the values provided in the config.json file. The following options will override the defaults.

``--outDir <directory>`` overrides where the script will put the generated code. Defaults to ``generated``

``--clientName <client name>`` overrides what the client class will be called. Defaults to ``HellDivers2Client``


## Contributing
Open a pull request.

## Thanks
- dealloc and all the contributors to the hell divers 2 api
- Ferdi Koomen for [openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen).
- Arrowhead for making such an awesome game
