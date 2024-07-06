Rails.application.routes.draw do
  get '/search', to: 'search#index'
  post '/search', to: 'search#index'
  get '/analytics', to: 'analytics#index'
end