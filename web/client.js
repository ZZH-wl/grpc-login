const {HelloRequest, HelloResponse} = require('./proto/grpc_login_pb.js');
const {LoginRequest, LoginResponse} = require('./proto/grpc_login_pb.js');
const {HelloClient} = require('./proto/grpc_login_grpc_web_pb.js');
const {LoginClient} = require('./proto/grpc_login_grpc_web_pb.js');

const loginClient = new LoginClient('http://192.168.3.182:8080');
const helloClient = new HelloClient('http://192.168.3.182:8080');

let token = "";
const loginRequest = new LoginRequest();
loginRequest.setUser('admin');
loginRequest.setPassword('admin');
loginClient.userLogin(loginRequest, {}, (err, loginResponse) => {
    if (err) {
        console.log(err);
        console.log(loginResponse);
    } else {
        console.log(111)
        console.log('token:' + loginResponse.getToken());
        token = loginResponse.getToken();

    }

});

const helloRequest = new HelloRequest();
helloRequest.setName('admin');

const metadata = {"authorization": token};
console.log(metadata);
helloClient.sayHello(helloRequest, metadata, (err, helloResponse) => {
    if (err) {
        console.log('error');
    } else {
        console.log('message:' + helloResponse.getMessage());
    }
});

