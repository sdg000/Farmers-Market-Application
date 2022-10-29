Rails.application.routes.draw do

  #route to to test sessions / cookies in application controller
  get '/hello', to: 'application#hello_world'
end
