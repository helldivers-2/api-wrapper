# Hell Divers 2 TypeScript API wrapper

This is a simple node application to generate Typescript code for [helldivers-2/api](https://github.com/helldivers-2/api). Using the above provided OpenApi spec this application will generate all the nessecary models and services to interact with the api in a TypeScript application. 

## Why did I make this?
I created this to help me with developing my discord bot. Putting this on github to help any other developers working with TS that are making cool things for Hell Divers 2.

## How to use
### With source
- clone repo
- ``npm install``
- ``npm run generate``

### With npm
- ``npm i helldivers2-api-wrapper``
- ``npx helldivers2-api-wrpper index.js``

this will create a generated folder (configurable) containing all the models, services, ect.
Now to use the services you need to create an instance of the client.

``` javascript
const hellDivers2Client = new HellDivers2Client({
    BASE: 'https://helldivers-2-dotnet.fly.dev'
});

const res = hellDivers2Client.v1.getApiV1AssignmentsAll();
// do stuff
```


## Contributing
Open a pull request.

## Thanks
- dealloc and all the contributors to the hell divers 2 api
- Ferdi Koomen for [openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen).
- Arrowhead for making such an awesome game
