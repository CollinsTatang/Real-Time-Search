class Article < ApplicationRecord

    belongs_to :user, class_name: 'User'
    scope :by_user, -> (user) { where(user:user) }
    validates_presence_of :title
    #validates :title, presence: true, allow_blank: false, allow_nil: false, length: { in: 5..50 }
end
