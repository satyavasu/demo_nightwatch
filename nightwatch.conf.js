const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

const config = {
    src_folders: [
        'test/DemoTest.js', // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
    ],
    output_folder: './node_modules/nightwatch/reports', // reports (test outcome) output by Nightwatch
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        selenium_port: 4444,
        selenium_host: 'localhost',
    },
    webdriver: {
      server_path: chromedriver.path,
   
    },
    test_settings: {
        default: {
          "webdriver": {
            "server_path": chromedriver.path,
            "port": 4444,
      
          },
            screenshots: {
                enabled: false,
                on_failure: false,
                on_success: false,
                path: '' //not needed until screenshots are enabled.
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true,
                networkConnectionEnabled: true,
                chromeOptions: {
                    args: [
                        "start-fullscreen",
                        'no-sandbox',
                        'disable-web-security',
                        'ignore-certificate-errors',
                        'allow-insecure-localhost',
                        'disable-gpu',
                        'window-size=1280,1696', // head less we need to define the browser size
                    ],
                }
            },
            globals: {
                waitForConditionTimeout: 5000,
            }
        }
    },
 };


module.exports = config;