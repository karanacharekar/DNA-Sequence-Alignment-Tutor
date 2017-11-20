
var Align = (function () {
  "use strict";
   return {
      global: (function (query,db,scoring_matrix,alpha,gap_penalty){
	
	var score_mat = [qury.length+1][db.length+1]

	var i=0;
	score_mat[0][0]=0;
	for(int j=1;j<=db_seq.length();j++) {
		score_mat[i][j] = score_mat[i][j-1] + gap_penalty; 
		}
					
	var j=0;
	for(i=1;i<=query_seq.length();i++) {
		score_mat[i][j] = score_mat[i-1][j] + gap_penalty; 
		}


	for(var m=1;m<query.length;m++){
		for(var n=1;n<db.length;n++){

			var query_char = (query_seq.charAt(i-1)).toUpperCase();
			var db_char = (db_seq.charAt(j-1)).toUpperCase();
			var val = matrix[alpha.indexOf(query_char)][alpha.indexOf(db_char)];
			score_mat[i][j]= Math.max(Math.max(score_mat[i][j-1] + gap_penalty,score_mat[i-1][j]+gap_penalty),score_mat[i-1][j-1] + val);

		}
	}
	var aligned_query = "";
	var aligned_db = "";
	i = query_seq.length;
	j = db_seq.length;
	var backtrack = [[[i,j]]];
			
	while(i!= 0 && j!=0) {
		var temp = []
		n = backtrack.length;
		char query_char = Character.toUpperCase(query_seq.charAt(i-1));
		char db_char = Character.toUpperCase(db_seq.charAt(j-1));
		int val = matrix[alpha.indexOf(query_char)][alpha.indexOf(db_char)];
				
		if(score_mat[i][j] == (score_mat[i-1][j-1] + val)) {
			aligned_query = query_seq.charAt(i-1) + aligned_query;
			aligned_db = db_seq.charAt(j-1) + aligned_db;
			temp.push([i-1,j-1])
			i--;
			j--;
		}
					
		if(score_mat[i][j] == (score_mat[i-1][j] + gap_penalty)) {
			aligned_query = query_seq.charAt(i-1) + aligned_query;
			aligned_db = "-" + aligned_db;
			temp.push([i-1,j])
			i--;
		}
		
		if(score_mat[i][j] == (score_mat[i][j-1] + gap_penalty))  {
			aligned_query = "-" + aligned_query;
			aligned_db = db_seq.charAt(j-1) + aligned_db;
			temp.push([i,j-1])
			j--;
		}
		backtrack.push(temp)
		}
		return backtrack;
}()),



      local: (function () {
        return console.log('test 2');
      })
   };
}());



