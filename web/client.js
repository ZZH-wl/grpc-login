const {HelloRequest, HelloResponse} = require('./proto/grpc_login_pb.js');
const {LoginRequest, LoginResponse} = require('./proto/grpc_login_pb.js');
const {HelloClient} = require('./proto/grpc_login_grpc_web_pb.js');
const {LoginClient} = require('./proto/grpc_login_grpc_web_pb.js');

const loginClient = new LoginClient('http://192.168.3.182:8080');
const helloClient = new HelloClient('http://192.168.3.182:8080');


var token ="";
const loginRequest = new LoginRequest();
loginRequest.setUser('admin');
loginRequest.setPassword('admin');
console.log(loginRequest)
loginClient.login(loginRequest, (err, LoginResponse) => {
	if(err){
		console.log(err);
		console.log(LoginResponse);
	}else{
		console.log(111)
		console.log('token:'+LoginResponse.getToken());
		token = LoginResponse.getToken()
	}
});

const helloRequest = new HelloRequest();
helloRequest.setName('admin');
request.setPassword('123456');

const metadata = {"token":token}
helloClient.sayHello(helloRequest, metadata, (err, HelloResponse) => {
	if(err){
	console.log('error');
	}else{
	console.log('message:'+HelloResponse.getMessage());
	}
});

