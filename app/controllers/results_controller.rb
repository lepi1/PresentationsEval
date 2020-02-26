class ResultsController < ApplicationController
    def index
        @votes = Vote.all
        @votes_count_table = Vote.find_by_sql ["SELECT result, COUNT(*) AS num FROM votes GROUP BY result"]

    end

    def remove_all
        Vote.delete_all
        flash[:notice] = "You have removed all results!"
        redirect_to results_path
    end
end
