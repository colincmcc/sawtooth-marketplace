/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var rule_pb = require('./rule_pb.js');
goog.exportSymbol('proto.Offer', null, global);
goog.exportSymbol('proto.Offer.Status', null, global);
goog.exportSymbol('proto.OfferContainer', null, global);

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
proto.Offer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Offer.repeatedFields_, null);
};
goog.inherits(proto.Offer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Offer.displayName = 'proto.Offer';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Offer.repeatedFields_ = [4,9];



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
proto.Offer.prototype.toObject = function(opt_includeInstance) {
  return proto.Offer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Offer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Offer.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    label: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ownersList: jspb.Message.getRepeatedField(msg, 4),
    source: jspb.Message.getFieldWithDefault(msg, 5, ""),
    sourceQuantity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    target: jspb.Message.getFieldWithDefault(msg, 7, ""),
    targetQuantity: jspb.Message.getFieldWithDefault(msg, 8, 0),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    rule_pb.Rule.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.Offer}
 */
proto.Offer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Offer;
  return proto.Offer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Offer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Offer}
 */
proto.Offer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addOwners(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setSourceQuantity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setTargetQuantity(value);
      break;
    case 9:
      var value = new rule_pb.Rule;
      reader.readMessage(value,rule_pb.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 10:
      var value = /** @type {!proto.Offer.Status} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.Offer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Offer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Offer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Offer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSourceQuantity();
  if (f !== 0) {
    writer.writeSint64(
      6,
      f
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTargetQuantity();
  if (f !== 0) {
    writer.writeSint64(
      8,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      rule_pb.Rule.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Offer.Status = {
  STATUS_UNSET: 0,
  OPEN: 1,
  CLOSED: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.Offer.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Offer.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.Offer.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Offer.prototype.setLabel = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.Offer.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Offer.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string owners = 4;
 * @return {!Array<string>}
 */
proto.Offer.prototype.getOwnersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.Offer.prototype.setOwnersList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.Offer.prototype.addOwners = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.Offer.prototype.clearOwnersList = function() {
  this.setOwnersList([]);
};


/**
 * optional string source = 5;
 * @return {string}
 */
proto.Offer.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.Offer.prototype.setSource = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional sint64 source_quantity = 6;
 * @return {number}
 */
proto.Offer.prototype.getSourceQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.Offer.prototype.setSourceQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string target = 7;
 * @return {string}
 */
proto.Offer.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.Offer.prototype.setTarget = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional sint64 target_quantity = 8;
 * @return {number}
 */
proto.Offer.prototype.getTargetQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.Offer.prototype.setTargetQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated Rule rules = 9;
 * @return {!Array<!proto.Rule>}
 */
proto.Offer.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, rule_pb.Rule, 9));
};


/** @param {!Array<!proto.Rule>} value */
proto.Offer.prototype.setRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Rule}
 */
proto.Offer.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.Rule, opt_index);
};


proto.Offer.prototype.clearRulesList = function() {
  this.setRulesList([]);
};


/**
 * optional Status status = 10;
 * @return {!proto.Offer.Status}
 */
proto.Offer.prototype.getStatus = function() {
  return /** @type {!proto.Offer.Status} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.Offer.Status} value */
proto.Offer.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 10, value);
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
proto.OfferContainer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.OfferContainer.repeatedFields_, null);
};
goog.inherits(proto.OfferContainer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.OfferContainer.displayName = 'proto.OfferContainer';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.OfferContainer.repeatedFields_ = [1];



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
proto.OfferContainer.prototype.toObject = function(opt_includeInstance) {
  return proto.OfferContainer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OfferContainer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OfferContainer.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.Offer.toObject, includeInstance)
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
 * @return {!proto.OfferContainer}
 */
proto.OfferContainer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OfferContainer;
  return proto.OfferContainer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OfferContainer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OfferContainer}
 */
proto.OfferContainer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Offer;
      reader.readMessage(value,proto.Offer.deserializeBinaryFromReader);
      msg.addEntries(value);
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
proto.OfferContainer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OfferContainer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OfferContainer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OfferContainer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Offer.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Offer entries = 1;
 * @return {!Array<!proto.Offer>}
 */
proto.OfferContainer.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.Offer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Offer, 1));
};


/** @param {!Array<!proto.Offer>} value */
proto.OfferContainer.prototype.setEntriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Offer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Offer}
 */
proto.OfferContainer.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Offer, opt_index);
};


proto.OfferContainer.prototype.clearEntriesList = function() {
  this.setEntriesList([]);
};


goog.object.extend(exports, proto);
