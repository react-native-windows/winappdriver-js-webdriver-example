This repo is already merged into [WinAppDriver repo](https://github.com/microsoft/WinAppDriver/tree/master/Samples/JavaScript)

# winappdriver-js-webdriver-example

There are two popular JavaScript WebDrivers which could be used for WinAppDriver testing: [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) and [webdriverio](https://webdriver.io/).

This is used to demo UI automation testing with WinAppDriver which the test runner is JavaScript. It includes the examples and Azure Pipeline with selenium-webdirver and WebDriverIO.
1. Jest + selenium-webdriver + WinAppDriver
2. Jasmine + WebDriverIO + WinAppDriver


[WinAppDriver](https://github.com/Microsoft/WinAppDriver) is recommended to do E2E test for Windows apps.
Here I validate [Xaml-Controls-Gallery](https://github.com/Microsoft/Xaml-Controls-Gallery) application using JavaScript + WinAppDriver.

This test project highlights the following basic interactions to demonstrate how UI testing using Windows Application Driver work.
- Azure pipeline
- Finding element using 'accessibility id' and 'name'
- Sending click action to an element
- Retrieving element value
- WinAppDriver integration with WebDriverIO and selenium-webdriver

I prototyped and successfully made the two webdrivers to be happy with WinAppDriver. And you can use any of them on your project.

## Examples
I provided two examples which are using selenium-webdriver or webdriverio.

- [selenium-webdriver example](packages/selenium-webdriver/README.md) in packages/selenium-webdriver

selenium-webdriver is the offical WebDriver JavaScript binding from selenium project. Unfortunately selenium-webdriver doesn't support [Mobile JSON Wire Protocol Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).
[selenium-appium](https://www.npmjs.com/package/selenium-appium) is selenium-webdriver extension to make selenium-webdriver to drive Appium to run automation.

- [webdriverio example](packages/webdriverio/README.md) in packages/webdriverio

WinAppDriver doesn't implement w3c WebDriver completely, so currently I workaround the problem by [WebDriver](https://github.com/react-native-windows/webdriver). In your project, you have to use private webdriver in package.json lke this:
```
    "webdriverio": "^5.10.1",
    "webdriver": "git+https://github.com/react-native-windows/webdriver.git",
```

## Azure pipeline for WinAppDriver
Please refer to [.ado](.ado) folder in this project. 
For WinAppDriver, see [WinAppDriver in CI with Azure Pipelines](https://github.com/microsoft/WinAppDriver/blob/master/Docs/CI_AzureDevOps.md)

## Dependencies
* Install nodejs, make sure a recent version of [Node.js](https://nodejs.org) is installed. 
[Chocolatey](https://chocolatey.org/) is the recommended installation method. But you can also install Node directly from [NodeJs](https://nodejs.org/en/download/).  To use chocolately, from an elevated Command Prompt, run:
  ```
  choco install nodejs
  ```
* Install [Yarn](https://yarnpkg.com/en/docs/install) (*optional* if you use npm command directly)

* Install 'xaml controls Gallery'
- Download and Install it from Microsoft Store.
- Or build and deploy Xaml-Controls-Gallery submodule

* Install the most recent stable [WinAppDriver](https://github.com/Microsoft/WinAppDriver/releases) on the test device

## Note
To know more about how to integrate JavaScript test runner and WinAppDriver for UI automation, please refer to:
- [E2E test](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/E2ETest.md) on React Native for Windows. [MoreAboutE2ETest.md](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/MoreAboutE2ETest.md) provides some background why React Native Windows choose WinAppDriver and node test runner for E2E testing.

- [winappdriver-js-webdriver-example](https://github.com/react-native-windows/winappdriver-js-webdriver-example), Which includes:
1. Jest + selenium-webdriver + WinAppDriver
2. Jasmine + WebDriverIO + WinAppDriver

- [selenium-webdriver-winappdriver-example](https://github.com/react-native-windows/selenium-webdriver-winappdriver-example). 
An example of jest, selenium-webdriver and winappdriver integration

- [selenium-appium](https://github.com/react-native-windows/selenium-appium). selenium-appium is selenium-webdriver extension to make selenium-webdriver to drive Appium to run automation for native, hybrid and mobile web and desktop apps.

- [Choose the right E2E automation framework for React Native Windows](https://medium.com/@licanhua/choose-the-right-e2e-automation-framework-for-react-native-windows-83ade8b16b52)
- [How to: Use Jest + selenium-webdriver + WinAppDriver to do Windows UI testing](https://medium.com/@licanhua/how-to-use-jest-selenium-webdriver-winappdriver-to-do-windows-ui-testing-c9d074e698ed)
- [Automated Windows UI testing by Jest + selenium-appium + selenium-webdriver + WinAppDriver](https://medium.com/@licanhua/automated-windows-ui-testing-by-jest-selenium-appium-selenium-webdriver-winappdriver-6cb708121d71)
- [Inspecting UI Elements for WinAppDriver automation using Appium Desktop](https://medium.com/@licanhua/inspecting-ui-elements-for-winappdriver-automation-using-appium-desktop-8f178b2d0d6c)


