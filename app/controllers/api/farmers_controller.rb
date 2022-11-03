class Api::FarmersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    # authorization
    before_action :require_farmer_login
    skip_before_action :require_farmer_login, only: [:create, :show]


    # return all farmers
    def index
        render json: Farmer.all, status: :ok
    end

    # method for farmer signup
    def create
        # byebug
        farmer = Farmer.create!(farmer_params)
        session[:farmer_id] = farmer.id
        render json: farmer, status: :created
    end

    # method for farmer auto login
    def show
        farmer = Farmer.find_by(id: session[:farmer_id])
        render json: farmer, status: :ok
    end



    private

    def farmer_params
        params.permit(:username, :location, :password, :password_confirmation)
    end

    def render_invalid_response(exceptions)
        render json: { errors: exceptions.record.errors.full_messages }, status: :unprocessable_entity
    end

    def require_login
        # @current_user = User.find_by(id: session[:user_id])
    
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end
  
    def require_farmer_login  
    #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :farmer_id
    end

  

end
