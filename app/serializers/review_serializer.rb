class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :customer_id, :comment
end
