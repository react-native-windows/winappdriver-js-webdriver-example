/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { PageObject, By2 } from "selenium-appium";

class ButtonPage extends PageObject {
  isPageLoaded() {
    return this.button1Button.isDisplayed();
  }

  private get button1Button() { return By2.nativeAccessibilityId('Button1'); }
  private get control1Ooutput() { return By2.nativeAccessibilityId('Control1Output');}

  clickButton1() {
      return this.button1Button.click();      
  }

  getControl1Output() {
      return this.control1Ooutput.getText();
  }
}

export default new ButtonPage();