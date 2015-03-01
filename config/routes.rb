Rails.application.routes.draw do
  root "application#index"
  
  # will need to place API endpoints above wildcard below
  
  match "*path" => "application#index", via: [:get]
end
