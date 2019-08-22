/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

/*eslint-disable*/

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('snet_places365_scene_recognition.SceneRecognitionRequest', null, global);
goog.exportSymbol('snet_places365_scene_recognition.SceneRecognitionResult', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_places365_scene_recognition.SceneRecognitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_places365_scene_recognition.SceneRecognitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_places365_scene_recognition.SceneRecognitionRequest.displayName = 'snet_places365_scene_recognition.SceneRecognitionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.toObject = function(opt_includeInstance) {
  return snet_places365_scene_recognition.SceneRecognitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_places365_scene_recognition.SceneRecognitionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
snet_places365_scene_recognition.SceneRecognitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputImage: msg.getInputImage(),
    predict: msg.getPredict()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_places365_scene_recognition.SceneRecognitionRequest}
 */
snet_places365_scene_recognition.SceneRecognitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_places365_scene_recognition.SceneRecognitionRequest;
  return snet_places365_scene_recognition.SceneRecognitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_places365_scene_recognition.SceneRecognitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_places365_scene_recognition.SceneRecognitionRequest}
 */
snet_places365_scene_recognition.SceneRecognitionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredict(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_places365_scene_recognition.SceneRecognitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_places365_scene_recognition.SceneRecognitionRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getInputImage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPredict();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_places365_scene_recognition.SceneRecognitionRequest} The clone.
 */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.cloneMessage = function() {
  return /** @type {!snet_places365_scene_recognition.SceneRecognitionRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string input_image = 1;
 * @return {string}
 */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.getInputImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.setInputImage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string predict = 2;
 * @return {string}
 */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.getPredict = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
snet_places365_scene_recognition.SceneRecognitionRequest.prototype.setPredict = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_places365_scene_recognition.SceneRecognitionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_places365_scene_recognition.SceneRecognitionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_places365_scene_recognition.SceneRecognitionResult.displayName = 'snet_places365_scene_recognition.SceneRecognitionResult';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_places365_scene_recognition.SceneRecognitionResult.prototype.toObject = function(opt_includeInstance) {
  return snet_places365_scene_recognition.SceneRecognitionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_places365_scene_recognition.SceneRecognitionResult} msg The msg instance to transform.
 * @return {!Object}
 */
snet_places365_scene_recognition.SceneRecognitionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_places365_scene_recognition.SceneRecognitionResult}
 */
snet_places365_scene_recognition.SceneRecognitionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_places365_scene_recognition.SceneRecognitionResult;
  return snet_places365_scene_recognition.SceneRecognitionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_places365_scene_recognition.SceneRecognitionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_places365_scene_recognition.SceneRecognitionResult}
 */
snet_places365_scene_recognition.SceneRecognitionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_places365_scene_recognition.SceneRecognitionResult} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_places365_scene_recognition.SceneRecognitionResult.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_places365_scene_recognition.SceneRecognitionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_places365_scene_recognition.SceneRecognitionResult.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_places365_scene_recognition.SceneRecognitionResult} The clone.
 */
snet_places365_scene_recognition.SceneRecognitionResult.prototype.cloneMessage = function() {
  return /** @type {!snet_places365_scene_recognition.SceneRecognitionResult} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string data = 1;
 * @return {string}
 */
snet_places365_scene_recognition.SceneRecognitionResult.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_places365_scene_recognition.SceneRecognitionResult.prototype.setData = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, snet_places365_scene_recognition);
