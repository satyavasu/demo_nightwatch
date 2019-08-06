module.exports = {
  "@tag": ["testgoogle"],
  disabled: false,
  'Opening the website': function(browser) {
      browser
      .url("https://www.saucedemo.com/index.html")
      .waitForElementVisible('#login_button_container')
    },
    'Login page test': function(browser) {
      browser
        .waitForElementVisible('#login_button_container')
        .setValue('xpath',"//input[@placeholder='Username']","standard_user")
        .pause('1000')
        .setValue('xpath',"//*[@placeholder='Password']","secret_sauce")
      .pause(2000)
          .click('xpath',"//input[@value='LOGIN']")
          .pause(2000)
    },
          'Add to cart test': function(browser) {
            browser
          .click('xpath',"//div//div[@class='inventory_list']//div[2]//div[3]//button[1]")
          .waitForElementVisible('.remove-from-cart-button')
          },
          'Click and go to cart test': function(browser) {
            browser
            .pause(2000)
          .click('#shopping_cart_container')
          .waitForElementVisible('.cart_checkout_link')
          .pause(1000)
          },
          'Click on checkout test': function(browser) {
            browser
          .click('.cart_checkout_link')
          .waitForElementVisible('.cart_checkout_link')
          },
          'Enter zipcode test': function(browser) {
            browser
          .waitForElementVisible('.cart_checkout_link')
          .setValue('xpath','//*[@data-test="firstName"]',"testFirstName")
          .pause('1000')
          .setValue('xpath',"//*[@placeholder='Last Name']","testLastName")
          .pause('1000')
          .setValue('xpath',"//*[@placeholder='Zip/Postal Code']","EC2A4PH")
          .click('xpath',"//input[@value='CONTINUE']")
          },
          'Payment card validation test': function(browser) {
            browser
            .getText('.summary_value_label',function(result){
              this.assert.containsText('.summary_value_label',result.value)
            })
        },
        'Total cost validation test': function(browser) {
          browser
          .getText('.summary_total_label',function(result){
            this.assert.containsText('.summary_total_label',result.value)
          })
      },
      'Click on finish test': function(browser) {
        browser
        .click('.cart_checkout_link')
      },
      'successMessage test': function(browser) {
        browser
        .pause(2000)
        .getText('.complete-header',function(result){
          this.assert.containsText('.complete-header',result.value)
          this.assert.containsText('.complete-header', result.value)
        })
    },
    after: function(browser) {
      console.log('after')
      browser.end()
  },
  Finished: function(browser) {
    browser
        .perform(() => {
            console.log(
                '[perform]: Finished Test:',
                browser.currentTest.name,
            )
        })
        .end()
},
}