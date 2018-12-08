const mongoose = require('mongoose');
const { Schema } = mongoose;
const LogDataSchema = new Schema({
  Source_File: {
    type: String
  },
  Output_File: {
    type: String
  },
  Preset_Used: {
    type: String
  },
  Video: {
    type: String
  },
  Audio: {
    type: String
  },
  Bitrate: {
    type: String
  },
  Encoding_Time: {
    type: String
  }
});

module.exports = mongoose.model('LogData', LogDataSchema, 'LogData');