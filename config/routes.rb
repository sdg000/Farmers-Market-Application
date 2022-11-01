Rails.application.routes.draw do
  
  resources :farmers
  # seperating REST routes from custom routes using Namespacing
  namespace :api do
  
    resources :farmers, only: :index
    # resources :reviews
    # resources :products
    # resources :customers
  
    # farmer signup
    post "/farmersignup", to: "farmers#create"

    # farmer login
    post "/farmerlogin", to: "sessions#farmerlogin"

    # farmer auto login
    get "/farmer-auth", to: "farmers#show"

    # farmer logout
    delete "/farmerlogout", to: "sessions#farmerlogout"
  

  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
