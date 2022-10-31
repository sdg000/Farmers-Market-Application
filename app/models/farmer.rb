class Farmer < ApplicationRecord
    has_secure_password
    
    # associations
    has_many :products, dependent: :destroy
    has_many :reviews, through: :products
    
    
    # validations
    validates :username, presence: true
    validates :username, uniqueness: true

end
