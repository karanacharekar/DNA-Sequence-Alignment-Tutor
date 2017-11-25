

    function global(query_seq,db_seq,matrix,alpha,gap_penalty){
	console.log("insd global")
	alpha = alpha.toUpperCase();

	console.log(query_seq)
	console.log(db_seq)

	var row_len = query_seq.length+1
	var col_len = db_seq.length+1
	var score_mat = new Array(row_len).fill(null).map(()=>new Array(col_len).fill(null));
	console.log(score_mat)
	var i=0;
	score_mat[0][0]=0;


	for(var j=1;j<=db_seq.length;j++) {
		score_mat[i][j] = score_mat[i][j-1] + gap_penalty; 
		}
					
	var j=0;
	for(i=1;i<=query_seq.length;i++) {
		score_mat[i][j] = score_mat[i-1][j] + gap_penalty; 
		}


	for(i=1;i<query_seq.length+1;i++){
		for( j=1;j<db_seq.length+1;j++){
			console.log(i+","+j)
			var query_char = (query_seq.charAt(i-1)).toUpperCase();
			var db_char = (db_seq.charAt(j-1)).toUpperCase();
			//console.log(query_char)
			//console.log(db_char)
			var val = matrix[alpha.indexOf(query_char)][alpha.indexOf(db_char)];
			//console.log(val)
			
			score_mat[i][j]= Math.max(Math.max(score_mat[i][j-1] + gap_penalty,score_mat[i-1][j]+gap_penalty),score_mat[i-1][j-1] + val);

		}
		
	}

	console.log(score_mat)
	console.log("finalyy")
	

	var aligned_query = "";
	var aligned_db = "";
	i = query_seq.length;
	j = db_seq.length;
	var backtrack = [[[i,j]]];
			
	while(i!= 0 && j!=0) {
		var temp = []
		n = backtrack.length;
		console.log(i+","+j)
		console.log(backtrack);
		var query_char = (query_seq.charAt(i-1)).toUpperCase();
		var db_char = (db_seq.charAt(j-1)).toUpperCase();
		var val = matrix[alpha.indexOf(query_char)][alpha.indexOf(db_char)];
				
		if(score_mat[i][j] == (score_mat[i-1][j-1] + val)) {
			aligned_query = query_seq.charAt(i-1) + aligned_query;
			aligned_db = db_seq.charAt(j-1) + aligned_db;
			temp.push([i-1,j-1])
			i--;
			j--;
		}
					
		else if(score_mat[i][j] == (score_mat[i-1][j] + gap_penalty)) {
			aligned_query = query_seq.charAt(i-1) + aligned_query;
			aligned_db = "-" + aligned_db;
			temp.push([i-1,j])
			i--;
		}
		
		else if(score_mat[i][j] == (score_mat[i][j-1] + gap_penalty))  {
			aligned_query = "-" + aligned_query;
			aligned_db = db_seq.charAt(j-1) + aligned_db;
			temp.push([i,j-1])
			j--;
		}
		backtrack.push(temp)
		}

		var return_res = [score_mat,backtrack,aligned_query,aligned_db]
		return return_res;
}

      
	function local(query_seq,db_seq,matrix,alpha,gap_penalty){

		console.log("insd local")
		alpha = alpha.toUpperCase();
		console.log(query_seq)
		console.log(db_seq)
		var row_len = query_seq.length+1
		var col_len = db_seq.length+1
		var score_mat = new Array(row_len).fill(null).map(()=>new Array(col_len).fill(null));
		console.log("----")
		console.log(score_mat)
		var fin_score = 0
		var fin_score_row = 0
		var fin_score_col = 0
		var i=0;
		score_mat[0][0]=0;
			
		for(var j=1;j<=db_seq.length;j++) {
			score_mat[i][j] = 0; 
		}
		
		
		var j=0;
		for(i=1;i<=query_seq.length;i++) {
			score_mat[i][j] = 0; 
		}
		
		
		
		for(i = 1;i<=query_seq.length;i++) {
			for(j = 1;j<=db_seq.length;j++) {
				var query_char = (query_seq.charAt(i-1)).toUpperCase();
				var db_char = (db_seq.charAt(j-1)).toUpperCase();
				var val = matrix[alpha.indexOf(query_char)][alpha.indexOf(db_char)];
				score_mat[i][j]= Math.max(0,Math.max(Math.max(score_mat[i][j-1] + gap_penalty,score_mat[i-1][j]+gap_penalty),score_mat[i-1][j-1] + val));
				if(score_mat[i][j] > fin_score) {
					fin_score = score_mat[i][j];
					fin_score_row = i;
					fin_score_col = j;
				}	
			}
		}
		
		
		var aligned_query = "";
		var aligned_db = "";
		i =  fin_score_row;
		j =  fin_score_col;
		var backtrack = [[[i,j]]];
		
		console.log(score_mat)	
		console.log(i)
		console.log(j)

		while(score_mat[i][j]!=0) {
			var temp = []
			n = backtrack.length;
			var query_char = (query_seq.charAt(i-1)).toUpperCase();
			var db_char = (db_seq.charAt(j-1)).toUpperCase();
			var val = matrix[alpha.indexOf(query_char)][alpha.indexOf(db_char)];
			
			if(score_mat[i][j] == (score_mat[i-1][j-1] + val)) {
				aligned_query = query_seq.charAt(i-1) + aligned_query;
				aligned_db = db_seq.charAt(j-1) + aligned_db;
				temp.push([i-1,j-1])
				i--;
				j--;
			}
			
			else if (score_mat[i][j] == (score_mat[i-1][j] + gap_penalty) &&  score_mat[i][j]!=0) {
				aligned_query = query_seq.charAt(i-1) + aligned_query;
				aligned_db = "-" + aligned_db;
				temp.push([i-1,j])
				i--;
			}
			else if (score_mat[i][j] == (score_mat[i][j-1] + gap_penalty) &&  score_mat[i][j]!=0) {
				aligned_query = "-" + aligned_query;
				aligned_db = db_seq.charAt(j-1) + aligned_db;
				temp.push([i,j-1])
				j--;
			}
			backtrack.push(temp)
			}

			var return_res = [score_mat,backtrack,aligned_query,aligned_db]
			return return_res;
				
	}