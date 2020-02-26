Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'votes#index'

 resources :votes
 resources :results do 
    collection do
      post 'remove_all'
    end
  end
end
