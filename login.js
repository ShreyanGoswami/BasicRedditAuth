function login(){
	
	var CLIENT_ID="xxxx";
	var state="xwsqwr";
	var SCOPE_STRING="identity edit flair history modconfig modflair modlog modposts modwiki mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread";
	var URI="http://localhost:65010/authorize_callback";
	var auth_string="https://www.reddit.com/api/v1/authorize?client_id="+CLIENT_ID+"&response_type=code&state="+state+
	"&redirect_uri="+URI+"&scope="+SCOPE_STRING;
	window.open(auth_string);
	// console.log("Clicked");
	
}