class Product < ApplicationRecord
    # associations
    belongs_to :farmer
    has_many :reviews

    # validations
    validates :name, presence: true
    validates :category, presence: true
    validates :price, presence: true
end
