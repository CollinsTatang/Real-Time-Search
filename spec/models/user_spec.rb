require 'rails_helper'

RSpec.describe User, type: :model do
  subject do
    User.new(
      email: 'collins@yahoo.com',
      password: 'oracle',
    ) 
  end

  it 'is not valid without a password' do
    subject.password = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without an email' do
    subject.email = nil
    expect(subject).to_not be_valid
  end
end
