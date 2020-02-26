class ResultsController < ApplicationController
    def index
        @votes = Vote.all
        @votes_count_table = Vote.find_by_sql ["SELECT result, COUNT(*) AS num FROM votes GROUP BY result"]
    end
end
