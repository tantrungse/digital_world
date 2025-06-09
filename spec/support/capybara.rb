require 'selenium/webdriver'

Capybara.register_driver :selenium_chrome_in_container do |app|
  options = Selenium::WebDriver::Chrome::Options.new
  Capybara::Selenium::Driver.new app,
    browser: :remote,
    url: 'http://selenium_chrome:4444/wd/hub',
    options: options
end

Capybara.register_driver :headless_selenium_chrome_in_container do |app|
  options = Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--headless')
  options.add_argument('--disable-gpu')
  options.add_argument('--no-sandbox')
  options.add_argument('--disable-dev-shm-usage')
  Capybara::Selenium::Driver.new app,
    browser: :remote,
    url: 'http://selenium_chrome:4444/wd/hub',
    options: options
end
