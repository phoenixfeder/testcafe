# TestCafé with Cucumber

## Install

* Copy folder 'features' in the root directory of your project
* Add following dependecies in your package.json:
  ```
  "base64-img": "^1.0.4",
  "cucumber": "^4.2.1",
  "eslint": "^4.19.1",
  "npm": "^6.0.0",
  "testcafe": "^0.22.0"
  ```
* Now ```npm install``` again
* If you use Webstorm ignore all errors with the feature files, because Webstorm doesn't know the architecture of this project

  Tip: use [Visual Studio Code](https://code.visualstudio.com/)
* To start future tests you can start tests with following command in cmd/terminal while inside the root-folder of your project:
  ```./node_modules/.bin/cucumber-js.cmd``` or ```./node_modules/.bin/cucumber-js```
  Also you can define a run command in your package.json:
  ```
  "scripts": {
    "test": "./node_modules/.bin/cucumber-js.cmd", //on Linux/IOS without .cmd
    ...
  }
  ```
* To run your tests you enter ```npm run test``` in cmd/terminal

  Note: The Tests run inside your standard browser. If you want use another browser you can add the scripts of my package.json and copy the needed lines.
  
## How to use

* You write your cucumber features inside the folder feature
* If you run the test without implementing step definitions, the framwork suggest them and you can copy it to your own steps.js (stepdefinition files should go into the folder with the same name)
* You should use one stepdefinition for each feature file
* Look at the example in my repository
* If you want to use pre-defined reusable stuff you can write it inside the support/pages folder (look at the example)

## Basics

* TestCafé uses a testController object with all commands inside
* you can use every command in the [Documentation](https://devexpress.github.io/testcafe/documentation/test-api/)
* Again look at the example of the using of testController and adapt to your needs
  
  Note: Be aware of that testcafe needs asynchrone functions, so you await all testController commands and every step should have an async function
