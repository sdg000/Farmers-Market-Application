class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :require_login


    #testing sessions/cookies middleware
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: {count: session[:count]}
    end


    private
  
    # def require_login
    #   @current_user = User.find_by(id: session[:user_id])
  
    #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    # end
  
end
