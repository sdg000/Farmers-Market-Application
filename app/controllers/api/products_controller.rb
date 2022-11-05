class Api::ProductsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    before_action :require_farmer_login



    # create product for a specific farmer
    def create
        product = @current_farmer.products.create!(product_params)
        render json: product, status: :created
    end

    # delete product from farmer's list of products
    def destroy
        product = @current_farmer.products.find_by(id: params[:id])
        product.destroy
        head :no_content
    end

    private
    
    # allowed parameters
    def product_params
        params.permit(:name, :category, :image_url, :price)
    end

    # authorization
    def require_farmer_login
        @current_farmer = Farmer.find_by(id: session[:farmer_id])
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :farmer_id
    end

    # handle allowed parameter errors
    def render_invalid_response(exceptions)
        render json: { errors: exceptions.record.errors.full_messages }, status: :unprocessable_entity
    end


end
