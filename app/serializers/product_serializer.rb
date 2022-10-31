class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :image_url, :price, :farmer_id
end
