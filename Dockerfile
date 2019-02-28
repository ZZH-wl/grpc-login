FROM golang
ADD . /go/src/grpc-login
WORKDIR /go/src/grpc-login
RUN go install grpc-login
RUN rm -rf /go/src

ENTRYPOINT /go/bin/grpc-login
EXPOSE 8080
