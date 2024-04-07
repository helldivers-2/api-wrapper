# Hell Divers 2 TypeScript API wrapper

This is a simple node application to generate Typescript code for [helldivers-2/api](https://github.com/helldivers-2/api). Using the above provided OpenApi spec this application will generate all the nessecary models and services to interact with the api in a TypeScript application. 

## Why did I make this?
I created this to help me with developing my discord bot. Putting this on github to help any other developers working with TS that are making cool things for Hell Divers 2.

## How to use
- clone repo
- run ```npm install```
- once that completes run ```npm run generate```
- this will create a generated folder (configurable) containing all the models, services, ect.
- Now to use the services you need to create an instance of the client
    ``` javascript
    const hellDivers2Client = new HellDivers2Client({
        BASE: 'https://helldivers-2-dotnet.fly.dev'
    });

    const res = hellDivers2Client.v1.getApiV1AssignmentsAll();
    // do stuff
    ```
- you are now ready to rock!

## Contributing
Open a pull request.

## License and Usage
This project comes as it. I take no responiblitiy or fault for any damages ect. I offer no guarantees this is bug free. Use at your own risk. Use it how you like. I don't care.


## Thanks
- dealloc and all the contributors to the hell divers 2 api
- Ferdi Koomen for [openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen).
- Arrowhead for making such an awesome game