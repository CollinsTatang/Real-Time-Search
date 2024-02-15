require 'rails_helper'

RSpec.describe Article, type: :model do
  subject do
    user = User.create(
      email: 'collins@yahoo.com',
      password: 'oracle'
    )
    Article.new(
      title: 'Burger',
      user_id: user.id
    )
  end

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is not be valid without a title' do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it 'is valid without an email' do
    subject.email= nil
    expect(subject).to_not be_valid
  end
end