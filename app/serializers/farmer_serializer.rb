class FarmerSerializer < ActiveModel::Serializer
  attributes :id, :username, :location
  has_many :products
end
