const http=require('http');
const url=require('url');
const port=65010;
const querystring=require('querystring');

const server=http.createServer(function(req,res){
	var q=url.parse(req.url,true);
	if(q.pathname=='/authorize_callback'){
		// console.log("Authorization call");
		var options={
			host: 'https://www.reddit.com/api/v1/access_token',
			port:null,
			method: 'POST',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded',
				'Authorization':'xxxx' //client Secret
			}
		}
		
		var post_req=http.request(options,function(res){
			res.setEncoding('utf8');
			res.on('data',function(chunk){
				console.log('Response: '+chunk);
			});
		});
		
		var params=url.parse(req.url,true).query;
		
		var code=params.code;
		// console.log(code);
		
		var post_data={
			'grant_type':'authorization',
			'redirect_uri':'localhost:65010/callback',
			'code':code
		}
		
		var string_data=querystring.stringify(post_data);
		
		post_req.write(string_data);
		post_req.end();
		
	}else{
		res.send("Nothing");
	}
	
	
}).listen(port);
