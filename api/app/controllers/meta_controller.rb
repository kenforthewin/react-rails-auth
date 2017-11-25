class MetaController < ApplicationController
  def index
    render json: {signed_in: user_signed_in?}.to_json
  end
end
