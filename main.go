package main

import (
	"context"
	"fmt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	pb "grpc-login/proto"
	"log"
	"net"
)

const (
	// Address gRPC服务地址
	Address = "0.0.0.0:9090"
)

// 定义registerService并实现约定的接口
type registerService struct{}

func (r registerService) UserLogin(context.Context, *pb.LoginRequest) (*pb.LoginResponse, error) {
	panic("implement me")
}

// RegisterService ...
var RegisterService = registerService{}

func (r registerService) RegisterUser(ctx context.Context, in *pb.RegisterRequest) (*pb.RegisterResponse, error) {

	resp := new(pb.RegisterResponse)
	resp.Message = fmt.Sprintf("Hello %s.\nPassword info: token=%s", in.User, in.Password)

	return resp, nil
}

// 定义loginService并实现约定的接口
type loginService struct{}

// LoginService ...
var LoginService = loginService{}

func (l loginService) UserLogin(ctx context.Context, in *pb.LoginRequest) (*pb.LoginResponse, error) {

	if in.User != "admin" || in.Password != "admin" {
		return nil, status.Errorf(codes.Unauthenticated, "Token认证信息无效: user=%s, password=%s", in.User, in.Password)
	}

	resp := new(pb.LoginResponse)
	resp.Token = fmt.Sprintf("qazxsw123edcvfr4567890okmnjiuhbvgytfr")

	return resp, nil
}

// 定义helloService并实现约定的接口
type helloService struct{}

// HelloService ...
var HelloService = helloService{}

// SayHello 实现Hello服务接口
func (h helloService) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {
	// 解析metada中的信息并验证
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, status.Errorf(codes.Unauthenticated, "无Token认证信息")
	}

	var (
		token string
	)

	if val, ok := md["authorization"]; ok {
		token = val[0]
	}

	if token != "qazxsw123edcvfr4567890okmnjiuhbvgytfr" {
		return nil, status.Errorf(codes.Unauthenticated, "Token认证信息无效: token=%s", token)
	}

	resp := new(pb.HelloResponse)
	resp.Message = fmt.Sprintf("Hello %s.\nToken info: token=%s", in.Name, token)

	return resp, nil
}

func main() {
	listen, err := net.Listen("tcp", Address)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// 实例化grpc Server, 并开启TLS认证
	s := grpc.NewServer()

	// 注册HelloService
	pb.RegisterRegisterServer(s, RegisterService)
	pb.RegisterLoginServer(s, LoginService)
	pb.RegisterHelloServer(s, HelloService)

	log.Println("Listen on " + Address + " with Token")

	s.Serve(listen)

}
