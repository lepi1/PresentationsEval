class VotesController < ApplicationController
    def create
        @vote = Vote.new(result:params[:commit])
        @vote.save
        redirect_to root_path
    end
       
end
