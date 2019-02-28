/**
 * @fileoverview gRPC-Web generated client stub for grpc_login
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpc_login = require('./grpc_login_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_login.RegisterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_login.RegisterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.grpc_login.RegisterClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.grpc_login.RegisterClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_login.RegisterRequest,
 *   !proto.grpc_login.RegisterResponse>}
 */
const methodInfo_Register_RegisterUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_login.RegisterResponse,
  /** @param {!proto.grpc_login.RegisterRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_login.RegisterResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_login.RegisterRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_login.RegisterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_login.RegisterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_login.RegisterClient.prototype.registerUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_login.Register/RegisterUser',
      request,
      metadata,
      methodInfo_Register_RegisterUser,
      callback);
};


/**
 * @param {!proto.grpc_login.RegisterRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_login.RegisterResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc_login.RegisterPromiseClient.prototype.registerUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.registerUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_login.LoginClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_login.LoginPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.grpc_login.LoginClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.grpc_login.LoginClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_login.LoginRequest,
 *   !proto.grpc_login.LoginResponse>}
 */
const methodInfo_Login_UserLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_login.LoginResponse,
  /** @param {!proto.grpc_login.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_login.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_login.LoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_login.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_login.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_login.LoginClient.prototype.userLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_login.Login/UserLogin',
      request,
      metadata,
      methodInfo_Login_UserLogin,
      callback);
};


/**
 * @param {!proto.grpc_login.LoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_login.LoginResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc_login.LoginPromiseClient.prototype.userLogin =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.userLogin(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_login.HelloClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_login.HelloPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.grpc_login.HelloClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.grpc_login.HelloClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_login.HelloRequest,
 *   !proto.grpc_login.HelloResponse>}
 */
const methodInfo_Hello_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_login.HelloResponse,
  /** @param {!proto.grpc_login.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_login.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_login.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_login.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_login.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_login.HelloClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_login.Hello/SayHello',
      request,
      metadata,
      methodInfo_Hello_SayHello,
      callback);
};


/**
 * @param {!proto.grpc_login.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_login.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc_login.HelloPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sayHello(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.grpc_login;

