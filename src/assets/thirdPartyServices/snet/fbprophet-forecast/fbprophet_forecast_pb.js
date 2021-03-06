/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/*eslint-disable*/

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('snet_fbprophet_forecast.Input', null, global);
goog.exportSymbol('snet_fbprophet_forecast.Output', null, global);

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
snet_fbprophet_forecast.Input = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, snet_fbprophet_forecast.Input.repeatedFields_, null);
};
goog.inherits(snet_fbprophet_forecast.Input, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_fbprophet_forecast.Input.displayName = 'snet_fbprophet_forecast.Input';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
snet_fbprophet_forecast.Input.repeatedFields_ = [2,3];



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
snet_fbprophet_forecast.Input.prototype.toObject = function(opt_includeInstance) {
  return snet_fbprophet_forecast.Input.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_fbprophet_forecast.Input} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
snet_fbprophet_forecast.Input.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dsList: jspb.Message.getRepeatedField(msg, 2),
    yList: jspb.Message.getRepeatedFloatingPointField(msg, 3),
    period: jspb.Message.getFieldWithDefault(msg, 4, 0),
    points: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!snet_fbprophet_forecast.Input}
 */
snet_fbprophet_forecast.Input.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_fbprophet_forecast.Input;
  return snet_fbprophet_forecast.Input.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_fbprophet_forecast.Input} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_fbprophet_forecast.Input}
 */
snet_fbprophet_forecast.Input.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDs(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setYList(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPeriod(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_fbprophet_forecast.Input.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  snet_fbprophet_forecast.Input.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!snet_fbprophet_forecast.Input} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
snet_fbprophet_forecast.Input.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getYList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getPeriod();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPoints();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
snet_fbprophet_forecast.Input.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
snet_fbprophet_forecast.Input.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string ds = 2;
 * @return {!Array<string>}
 */
snet_fbprophet_forecast.Input.prototype.getDsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
snet_fbprophet_forecast.Input.prototype.setDsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Input.prototype.addDs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


snet_fbprophet_forecast.Input.prototype.clearDsList = function() {
  this.setDsList([]);
};


/**
 * repeated float y = 3;
 * @return {!Array<number>}
 */
snet_fbprophet_forecast.Input.prototype.getYList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array<number>} value */
snet_fbprophet_forecast.Input.prototype.setYList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Input.prototype.addY = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


snet_fbprophet_forecast.Input.prototype.clearYList = function() {
  this.setYList([]);
};


/**
 * optional int32 period = 4;
 * @return {number}
 */
snet_fbprophet_forecast.Input.prototype.getPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
snet_fbprophet_forecast.Input.prototype.setPeriod = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 points = 5;
 * @return {number}
 */
snet_fbprophet_forecast.Input.prototype.getPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
snet_fbprophet_forecast.Input.prototype.setPoints = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
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
snet_fbprophet_forecast.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, snet_fbprophet_forecast.Output.repeatedFields_, null);
};
goog.inherits(snet_fbprophet_forecast.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_fbprophet_forecast.Output.displayName = 'snet_fbprophet_forecast.Output';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
snet_fbprophet_forecast.Output.repeatedFields_ = [1,2,3,4,5,6,7];



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
snet_fbprophet_forecast.Output.prototype.toObject = function(opt_includeInstance) {
  return snet_fbprophet_forecast.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_fbprophet_forecast.Output} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
snet_fbprophet_forecast.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedList: jspb.Message.getRepeatedFloatingPointField(msg, 1),
    trendList: jspb.Message.getRepeatedFloatingPointField(msg, 2),
    seasonalList: jspb.Message.getRepeatedFloatingPointField(msg, 3),
    forecastList: jspb.Message.getRepeatedFloatingPointField(msg, 4),
    forecastDsList: jspb.Message.getRepeatedField(msg, 5),
    forecastLowerList: jspb.Message.getRepeatedFloatingPointField(msg, 6),
    forecastUpperList: jspb.Message.getRepeatedFloatingPointField(msg, 7)
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
 * @return {!snet_fbprophet_forecast.Output}
 */
snet_fbprophet_forecast.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_fbprophet_forecast.Output;
  return snet_fbprophet_forecast.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_fbprophet_forecast.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_fbprophet_forecast.Output}
 */
snet_fbprophet_forecast.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setObservedList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setTrendList(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setSeasonalList(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setForecastList(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addForecastDs(value);
      break;
    case 6:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setForecastLowerList(value);
      break;
    case 7:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setForecastUpperList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_fbprophet_forecast.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  snet_fbprophet_forecast.Output.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!snet_fbprophet_forecast.Output} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
snet_fbprophet_forecast.Output.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObservedList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getTrendList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getSeasonalList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getForecastList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
  f = message.getForecastDsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getForecastLowerList();
  if (f.length > 0) {
    writer.writePackedFloat(
      6,
      f
    );
  }
  f = message.getForecastUpperList();
  if (f.length > 0) {
    writer.writePackedFloat(
      7,
      f
    );
  }
};


/**
 * repeated float observed = 1;
 * @return {!Array<number>}
 */
snet_fbprophet_forecast.Output.prototype.getObservedList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/** @param {!Array<number>} value */
snet_fbprophet_forecast.Output.prototype.setObservedList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Output.prototype.addObserved = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


snet_fbprophet_forecast.Output.prototype.clearObservedList = function() {
  this.setObservedList([]);
};


/**
 * repeated float trend = 2;
 * @return {!Array<number>}
 */
snet_fbprophet_forecast.Output.prototype.getTrendList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/** @param {!Array<number>} value */
snet_fbprophet_forecast.Output.prototype.setTrendList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Output.prototype.addTrend = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


snet_fbprophet_forecast.Output.prototype.clearTrendList = function() {
  this.setTrendList([]);
};


/**
 * repeated float seasonal = 3;
 * @return {!Array<number>}
 */
snet_fbprophet_forecast.Output.prototype.getSeasonalList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array<number>} value */
snet_fbprophet_forecast.Output.prototype.setSeasonalList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Output.prototype.addSeasonal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


snet_fbprophet_forecast.Output.prototype.clearSeasonalList = function() {
  this.setSeasonalList([]);
};


/**
 * repeated float forecast = 4;
 * @return {!Array<number>}
 */
snet_fbprophet_forecast.Output.prototype.getForecastList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/** @param {!Array<number>} value */
snet_fbprophet_forecast.Output.prototype.setForecastList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Output.prototype.addForecast = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


snet_fbprophet_forecast.Output.prototype.clearForecastList = function() {
  this.setForecastList([]);
};


/**
 * repeated string forecast_ds = 5;
 * @return {!Array<string>}
 */
snet_fbprophet_forecast.Output.prototype.getForecastDsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
snet_fbprophet_forecast.Output.prototype.setForecastDsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Output.prototype.addForecastDs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


snet_fbprophet_forecast.Output.prototype.clearForecastDsList = function() {
  this.setForecastDsList([]);
};


/**
 * repeated float forecast_lower = 6;
 * @return {!Array<number>}
 */
snet_fbprophet_forecast.Output.prototype.getForecastLowerList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/** @param {!Array<number>} value */
snet_fbprophet_forecast.Output.prototype.setForecastLowerList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Output.prototype.addForecastLower = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


snet_fbprophet_forecast.Output.prototype.clearForecastLowerList = function() {
  this.setForecastLowerList([]);
};


/**
 * repeated float forecast_upper = 7;
 * @return {!Array<number>}
 */
snet_fbprophet_forecast.Output.prototype.getForecastUpperList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/** @param {!Array<number>} value */
snet_fbprophet_forecast.Output.prototype.setForecastUpperList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_fbprophet_forecast.Output.prototype.addForecastUpper = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


snet_fbprophet_forecast.Output.prototype.clearForecastUpperList = function() {
  this.setForecastUpperList([]);
};


goog.object.extend(exports, snet_fbprophet_forecast);
