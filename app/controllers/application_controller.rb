class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :require_login


    #testing sessions/cookies middleware
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: {count: session[:count]}
    end
  
end
