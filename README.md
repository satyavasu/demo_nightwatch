//Nightwatchjs framework set up
I am using linux os for this nightwatchjs progect

Pre requriments for setup gor nightwatchjs
* Install node.js and npm
    sudo apt-get install nodejs
    node --version

 * Install and npm   
    sudo apt-get install npm
    npm -v

* Install yarn
    sudo apt-get install yarn
    yarn –version

* Install java
    sudo apt install oracle-java8-set-default
    javac -version
    // Set PATH as global ( export PATH=$PATH:{your path} )

* Insatll selenium server
    npm install selenium-server chromedriver –save-dev
    npm install selenium-server
    // Set PATH as global ( export PATH=$PATH:{your path} )

* Install web driver(Chrome driver)
    npm install chromedriver --save-dev
    // Set PATH as global ( export PATH=$PATH:{your path} )

* install nightwatch
    npm install nightwatch

Note: Download latest versions or update to latest version

Before run the tests we need to run the npm update or yarn command for downloading the dependency

Running Tests
* command for the running the tests 
     npm test // this test is from package.js scripts
     yarn test // this test is from package.js scripts

* We can use elements id's/class/xpath and etc..
For using id in the script we should be pass '#' before the id (ex: '#username')
For using clsss in the script we should be pass '.' before the id (ex: '.username')
For using xpath in the script we should be pass 'xpath' before the id (ex: 'xpath','#username')

Here is the nightwatchjs link http://nightwatchjs.org/guide