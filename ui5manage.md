## Managing UI5 projects

### Environment
- [ ] use templetes from WEBIDE to _kickstart/create/extend_ project
- [ ] create git repository (_gitlab, github, cloudcockpit_)
- [ ] export project from WEBIDE and copy files to your local git repository (this step is important because of "dot"-files)
- [ ] use your favourite ide or texteditor (if you want to use webide, delete the origin project folder then clone)
- [ ] switch environment to your mood

#### to enhance local environment with features e.g. grunt
> _you need the following step for 'npm install' otherwise npm doesn't know where sap is_
- [ ] create .npmrc file in you workplace folder with the following content: ```@sap:registry=https://npm.sap.com/```
> _add express to dev dependencies_
- [ ]  `npm install express -D`
> _you need this step for the dependencies e.g. grunt_
- [ ] ```npm install```
#### local node.js server
- [ ] copy [server.js](static_server.js) into your project
- [ ] just execute the server with ```node static_server.js```

### Grunt

| Task          | Description   |
| ------------- |:-------------:|
| lint     | Validates the project code using ESLint according to the rules defined in the .eslintrc configuration file located in the root of your project. |
| clean      | Cleans the dist target folder from the previous build results.      |
| build | Produces a new build output in the dist folder of your project that is ready and optimized for better performance in the productive environment. |

> The following tasks are executed during the **build**:
> * Minification of .css files
> * Minification of JavaScript files (minified files)
> * Copying of the original files to the dist folder with -dbg suffix added for debugging purposes
> * Generation of the Component-preload.js and Component-preload-dbg.js preload files for the debug and minified files
> * Minification of the preload file
> * Generation of the CachebusterInfo.json file
> * Generation of the changes-bundle.json file. The file contains a collection of all the changes that are made to an SAP Fiori element application and are located in the changes folder.
