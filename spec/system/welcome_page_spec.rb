require 'rails_helper'

RSpec.describe 'WelcomePage', type: :system do
  it 'says hello on welcome page' do
    visit '/welcome'
    expect(page.text).to match(/Hello World!/)
  end

  it 'is enhanced with JavaScript on', js: true do
    visit '/welcome'
    expect(page).to have_text('ENHANCED!')
  end
end
