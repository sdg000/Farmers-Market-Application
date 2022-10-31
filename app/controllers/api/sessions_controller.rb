class Api::SessionsController < ApplicationController

    # custom farmer login method ..
    def farmerlogin
        farmer = Farmer.find_by(username: params[:username])
        if farmer&.authenticate(params[:password])
            session[:farmer_id] = farmer.id
            render json: farmer
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

end
