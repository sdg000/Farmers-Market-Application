class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :image_url, :price
  has_one :farmer
end
