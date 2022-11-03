class Api::SessionsController < ApplicationController
    before_action :require_farmer_login
    skip_before_action :require_farmer_login, only: :farmerlogin

    # custom farmer login method ..
    def farmerlogin
        farmer = Farmer.find_by(username: params[:username])
        if farmer&.authenticate(params[:password])
            session[:farmer_id] = farmer.id
            render json: farmer, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    # custom farmer logout method
    def farmerlogout
        session.delete :farmer_id
        head :no_content
    end

    private
  
    def require_farmer_login  
    #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :farmer_id
    end


end
