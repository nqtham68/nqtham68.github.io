window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Decoder: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fb66464xtACo5Gu9M2a6K/", "Decoder");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __asyncValues = this && this.__asyncValues || function(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = "function" === typeof __values ? __values(o) : o[Symbol.iterator](), 
      i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    };
    var __await = this && this.__await || function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    var __asyncGenerator = this && this.__asyncGenerator || function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        g[n] && (i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([ n, v, a, b ]) > 1 || resume(n, v);
          });
        });
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        (f(v), q.shift(), q.length) && resume(q[0][0], q[0][1]);
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var prettyByte_1 = require("./utils/prettyByte");
    var ExtensionCodec_1 = require("./ExtensionCodec");
    var int_1 = require("./utils/int");
    var utf8_1 = require("./utils/utf8");
    var typedArrays_1 = require("./utils/typedArrays");
    var State;
    (function(State) {
      State[State["ARRAY"] = 0] = "ARRAY";
      State[State["MAP_KEY"] = 1] = "MAP_KEY";
      State[State["MAP_VALUE"] = 2] = "MAP_VALUE";
    })(State || (State = {}));
    var HEAD_BYTE_REQUIRED = -1;
    var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
    var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
    exports.DataViewIndexOutOfBoundsError = function() {
      try {
        EMPTY_VIEW.getInt8(0);
      } catch (e) {
        return e.constructor;
      }
      throw new Error("never reached");
    }();
    var MORE_DATA = new exports.DataViewIndexOutOfBoundsError("Insufficient data");
    var DEFAULT_MAX_LENGTH = 4294967295;
    var Decoder = function() {
      function Decoder(extensionCodec, maxStrLength, maxBinLength, maxArrayLength, maxMapLength, maxExtLength, mapKeys) {
        void 0 === extensionCodec && (extensionCodec = ExtensionCodec_1.ExtensionCodec.defaultCodec);
        void 0 === maxStrLength && (maxStrLength = DEFAULT_MAX_LENGTH);
        void 0 === maxBinLength && (maxBinLength = DEFAULT_MAX_LENGTH);
        void 0 === maxArrayLength && (maxArrayLength = DEFAULT_MAX_LENGTH);
        void 0 === maxMapLength && (maxMapLength = DEFAULT_MAX_LENGTH);
        void 0 === maxExtLength && (maxExtLength = DEFAULT_MAX_LENGTH);
        void 0 === mapKeys && (mapKeys = null);
        this.extensionCodec = extensionCodec;
        this.maxStrLength = maxStrLength;
        this.maxBinLength = maxBinLength;
        this.maxArrayLength = maxArrayLength;
        this.maxMapLength = maxMapLength;
        this.maxExtLength = maxExtLength;
        this.mapKeys = mapKeys;
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = [];
      }
      Decoder.prototype.setBuffer = function(buffer) {
        this.bytes = typedArrays_1.ensureUint8Array(buffer);
        this.view = typedArrays_1.createDataView(this.bytes);
        this.pos = 0;
      };
      Decoder.prototype.appendBuffer = function(buffer) {
        if (this.headByte !== HEAD_BYTE_REQUIRED || this.hasRemaining()) {
          var remainingData = this.bytes.subarray(this.pos);
          var newData = typedArrays_1.ensureUint8Array(buffer);
          var concated = new Uint8Array(remainingData.length + newData.length);
          concated.set(remainingData);
          concated.set(newData, remainingData.length);
          this.setBuffer(concated);
        } else this.setBuffer(buffer);
      };
      Decoder.prototype.hasRemaining = function(size) {
        void 0 === size && (size = 1);
        return this.view.byteLength - this.pos >= size;
      };
      Decoder.prototype.createNoExtraBytesError = function(posToShow) {
        var _a = this, view = _a.view, pos = _a.pos;
        return new RangeError("Extra " + (view.byteLength - pos) + " byte(s) found at buffer[" + posToShow + "]");
      };
      Decoder.prototype.decodeOneSync = function() {
        var object = this.decodeSync();
        if (this.hasRemaining()) throw this.createNoExtraBytesError(this.pos);
        return object;
      };
      Decoder.prototype.decodeOneAsync = function(stream) {
        var stream_1, stream_1_1;
        return __awaiter(this, void 0, Promise, function() {
          var e_1, _a, decoded, object, buffer, e_1_1, _b, headByte, pos, totalPos;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              decoded = false;
              _c.label = 1;

             case 1:
              _c.trys.push([ 1, 6, 7, 12 ]);
              stream_1 = __asyncValues(stream);
              _c.label = 2;

             case 2:
              return [ 4, stream_1.next() ];

             case 3:
              if (!(stream_1_1 = _c.sent(), !stream_1_1.done)) return [ 3, 5 ];
              buffer = stream_1_1.value;
              if (decoded) throw this.createNoExtraBytesError(this.totalPos);
              this.appendBuffer(buffer);
              try {
                object = this.decodeSync();
                decoded = true;
              } catch (e) {
                if (!(e instanceof exports.DataViewIndexOutOfBoundsError)) throw e;
              }
              this.totalPos += this.pos;
              _c.label = 4;

             case 4:
              return [ 3, 2 ];

             case 5:
              return [ 3, 12 ];

             case 6:
              e_1_1 = _c.sent();
              e_1 = {
                error: e_1_1
              };
              return [ 3, 12 ];

             case 7:
              _c.trys.push([ 7, , 10, 11 ]);
              if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1.return))) return [ 3, 9 ];
              return [ 4, _a.call(stream_1) ];

             case 8:
              _c.sent();
              _c.label = 9;

             case 9:
              return [ 3, 11 ];

             case 10:
              if (e_1) throw e_1.error;
              return [ 7 ];

             case 11:
              return [ 7 ];

             case 12:
              if (decoded) {
                if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);
                return [ 2, object ];
              }
              _b = this, headByte = _b.headByte, pos = _b.pos, totalPos = _b.totalPos;
              throw new RangeError("Insufficient data in parcing " + prettyByte_1.prettyByte(headByte) + " at " + totalPos + " (" + pos + " in the current buffer)");
            }
          });
        });
      };
      Decoder.prototype.decodeStream = function(stream) {
        return __asyncGenerator(this, arguments, function decodeStream_1() {
          var e_2, _a, stream_2, stream_2_1, buffer, result, e_3, e_2_1;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 11, 12, 17 ]);
              stream_2 = __asyncValues(stream);
              _b.label = 1;

             case 1:
              return [ 4, __await(stream_2.next()) ];

             case 2:
              if (!(stream_2_1 = _b.sent(), !stream_2_1.done)) return [ 3, 10 ];
              buffer = stream_2_1.value;
              this.appendBuffer(buffer);
              _b.label = 3;

             case 3:
              _b.trys.push([ 3, 8, , 9 ]);
              _b.label = 4;

             case 4:
              false;
              result = this.decodeSync();
              return [ 4, __await(result) ];

             case 5:
              return [ 4, _b.sent() ];

             case 6:
              _b.sent();
              return [ 3, 4 ];

             case 7:
              return [ 3, 9 ];

             case 8:
              e_3 = _b.sent();
              if (!(e_3 instanceof exports.DataViewIndexOutOfBoundsError)) throw e_3;
              return [ 3, 9 ];

             case 9:
              return [ 3, 1 ];

             case 10:
              return [ 3, 17 ];

             case 11:
              e_2_1 = _b.sent();
              e_2 = {
                error: e_2_1
              };
              return [ 3, 17 ];

             case 12:
              _b.trys.push([ 12, , 15, 16 ]);
              if (!(stream_2_1 && !stream_2_1.done && (_a = stream_2.return))) return [ 3, 14 ];
              return [ 4, __await(_a.call(stream_2)) ];

             case 13:
              _b.sent();
              _b.label = 14;

             case 14:
              return [ 3, 16 ];

             case 15:
              if (e_2) throw e_2.error;
              return [ 7 ];

             case 16:
              return [ 7 ];

             case 17:
              return [ 2 ];
            }
          });
        });
      };
      Decoder.prototype.decodeArrayStream = function(stream) {
        return __asyncGenerator(this, arguments, function decodeArrayStream_1() {
          var e_4, _a, headerParsed, decoded, itemsLeft, stream_3, stream_3_1, buffer, result, e_5, e_4_1;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              headerParsed = false;
              decoded = false;
              itemsLeft = 0;
              _b.label = 1;

             case 1:
              _b.trys.push([ 1, 13, 14, 19 ]);
              stream_3 = __asyncValues(stream);
              _b.label = 2;

             case 2:
              return [ 4, __await(stream_3.next()) ];

             case 3:
              if (!(stream_3_1 = _b.sent(), !stream_3_1.done)) return [ 3, 12 ];
              buffer = stream_3_1.value;
              if (decoded) throw this.createNoExtraBytesError(this.totalPos);
              this.appendBuffer(buffer);
              if (!headerParsed) {
                itemsLeft = this.readArraySize();
                headerParsed = true;
                this.complete();
              }
              _b.label = 4;

             case 4:
              _b.trys.push([ 4, 9, , 10 ]);
              _b.label = 5;

             case 5:
              false;
              result = this.decodeSync();
              return [ 4, __await(result) ];

             case 6:
              return [ 4, _b.sent() ];

             case 7:
              _b.sent();
              itemsLeft--;
              if (0 === itemsLeft) {
                decoded = true;
                return [ 3, 8 ];
              }
              return [ 3, 5 ];

             case 8:
              return [ 3, 10 ];

             case 9:
              e_5 = _b.sent();
              if (!(e_5 instanceof exports.DataViewIndexOutOfBoundsError)) throw e_5;
              return [ 3, 10 ];

             case 10:
              this.totalPos += this.pos;
              _b.label = 11;

             case 11:
              return [ 3, 2 ];

             case 12:
              return [ 3, 19 ];

             case 13:
              e_4_1 = _b.sent();
              e_4 = {
                error: e_4_1
              };
              return [ 3, 19 ];

             case 14:
              _b.trys.push([ 14, , 17, 18 ]);
              if (!(stream_3_1 && !stream_3_1.done && (_a = stream_3.return))) return [ 3, 16 ];
              return [ 4, __await(_a.call(stream_3)) ];

             case 15:
              _b.sent();
              _b.label = 16;

             case 16:
              return [ 3, 18 ];

             case 17:
              if (e_4) throw e_4.error;
              return [ 7 ];

             case 18:
              return [ 7 ];

             case 19:
              return [ 2 ];
            }
          });
        });
      };
      Decoder.prototype.decodeSync = function() {
        DECODE: while (true) {
          var headByte = this.readHeadByte();
          var object = void 0;
          if (headByte >= 224) object = headByte - 256; else if (headByte < 192) if (headByte < 128) object = headByte; else if (headByte < 144) {
            var size = headByte - 128;
            if (0 !== size) {
              this.pushMapState(size);
              this.complete();
              continue DECODE;
            }
            object = {};
          } else if (headByte < 160) {
            var size = headByte - 144;
            if (0 !== size) {
              this.pushArrayState(size);
              this.complete();
              continue DECODE;
            }
            object = [];
          } else {
            var byteLength = headByte - 160;
            object = this.decodeUtf8String(byteLength, 0);
          } else if (192 === headByte) object = null; else if (194 === headByte) object = false; else if (195 === headByte) object = true; else if (202 === headByte) object = this.readF32(); else if (203 === headByte) object = this.readF64(); else if (204 === headByte) object = this.readU8(); else if (205 === headByte) object = this.readU16(); else if (206 === headByte) object = this.readU32(); else if (207 === headByte) object = this.readU64(); else if (208 === headByte) object = this.readI8(); else if (209 === headByte) object = this.readI16(); else if (210 === headByte) object = this.readI32(); else if (211 === headByte) object = this.readI64(); else if (217 === headByte) {
            var byteLength = this.lookU8();
            object = this.decodeUtf8String(byteLength, 1);
          } else if (218 === headByte) {
            var byteLength = this.lookU16();
            object = this.decodeUtf8String(byteLength, 2);
          } else if (219 === headByte) {
            var byteLength = this.lookU32();
            object = this.decodeUtf8String(byteLength, 4);
          } else if (220 === headByte) {
            var size = this.readU16();
            if (0 !== size) {
              this.pushArrayState(size);
              this.complete();
              continue DECODE;
            }
            object = [];
          } else if (221 === headByte) {
            var size = this.readU32();
            if (0 !== size) {
              this.pushArrayState(size);
              this.complete();
              continue DECODE;
            }
            object = [];
          } else if (222 === headByte) {
            var size = this.readU16();
            if (0 !== size) {
              this.pushMapState(size);
              this.complete();
              continue DECODE;
            }
            object = {};
          } else if (223 === headByte) {
            var size = this.readU32();
            if (0 !== size) {
              this.pushMapState(size);
              this.complete();
              continue DECODE;
            }
            object = {};
          } else if (196 === headByte) {
            var size = this.lookU8();
            object = this.decodeBinary(size, 1);
          } else if (197 === headByte) {
            var size = this.lookU16();
            object = this.decodeBinary(size, 2);
          } else if (198 === headByte) {
            var size = this.lookU32();
            object = this.decodeBinary(size, 4);
          } else if (212 === headByte) object = this.decodeExtension(1, 0); else if (213 === headByte) object = this.decodeExtension(2, 0); else if (214 === headByte) object = this.decodeExtension(4, 0); else if (215 === headByte) object = this.decodeExtension(8, 0); else if (216 === headByte) object = this.decodeExtension(16, 0); else if (199 === headByte) {
            var size = this.lookU8();
            object = this.decodeExtension(size, 1);
          } else if (200 === headByte) {
            var size = this.lookU16();
            object = this.decodeExtension(size, 2);
          } else {
            if (201 !== headByte) throw new Error("Unrecognized type byte: " + prettyByte_1.prettyByte(headByte));
            var size = this.lookU32();
            object = this.decodeExtension(size, 4);
          }
          this.complete();
          var stack = this.stack;
          while (stack.length > 0) {
            var state = stack[stack.length - 1];
            if (state.type === State.ARRAY) {
              state.array[state.position] = object;
              state.position++;
              if (state.position !== state.size) continue DECODE;
              stack.pop();
              object = state.array;
            } else {
              if (state.type === State.MAP_KEY) {
                "number" === typeof object && this.mapKeys && (object = this.mapKeys[object]);
                if ("string" !== typeof object) throw new Error("The type of key must be string but " + typeof object);
                state.key = object;
                state.type = State.MAP_VALUE;
                continue DECODE;
              }
              if (state.type === State.MAP_VALUE) {
                state.map[state.key] = object;
                state.readCount++;
                if (state.readCount !== state.size) {
                  state.key = null;
                  state.type = State.MAP_KEY;
                  continue DECODE;
                }
                stack.pop();
                object = state.map;
              }
            }
          }
          return object;
        }
      };
      Decoder.prototype.readHeadByte = function() {
        this.headByte === HEAD_BYTE_REQUIRED && (this.headByte = this.readU8());
        return this.headByte;
      };
      Decoder.prototype.complete = function() {
        this.headByte = HEAD_BYTE_REQUIRED;
      };
      Decoder.prototype.readArraySize = function() {
        var headByte = this.readHeadByte();
        switch (headByte) {
         case 220:
          return this.readU16();

         case 221:
          return this.readU32();

         default:
          if (headByte < 160) return headByte - 144;
          throw new Error("Unrecognized array type byte: " + prettyByte_1.prettyByte(headByte));
        }
      };
      Decoder.prototype.pushMapState = function(size) {
        if (size > this.maxMapLength) throw new Error("Max length exceeded: map length (" + size + ") > maxMapLengthLength (" + this.maxMapLength + ")");
        this.stack.push({
          type: State.MAP_KEY,
          size: size,
          key: null,
          readCount: 0,
          map: {}
        });
      };
      Decoder.prototype.pushArrayState = function(size) {
        if (size > this.maxArrayLength) throw new Error("Max length exceeded: array length (" + size + ") > maxArrayLength (" + this.maxArrayLength + ")");
        this.stack.push({
          type: State.ARRAY,
          size: size,
          array: new Array(size),
          position: 0
        });
      };
      Decoder.prototype.decodeUtf8String = function(byteLength, headerOffset) {
        if (byteLength > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + byteLength + ") > maxStrLength (" + this.maxStrLength + ")");
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength) throw MORE_DATA;
        var offset = this.pos + headerOffset;
        var object;
        object = utf8_1.utf8DecodeJs(this.bytes, offset, byteLength);
        this.pos += headerOffset + byteLength;
        return object;
      };
      Decoder.prototype.decodeBinary = function(byteLength, headOffset) {
        if (byteLength > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + byteLength + ") > maxBinLength (" + this.maxBinLength + ")");
        if (!this.hasRemaining(byteLength + headOffset)) throw MORE_DATA;
        var offset = this.pos + headOffset;
        var object = this.bytes.subarray(offset, offset + byteLength);
        this.pos += headOffset + byteLength;
        return object;
      };
      Decoder.prototype.decodeExtension = function(size, headOffset) {
        if (size > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + size + ") > maxExtLength (" + this.maxExtLength + ")");
        var extType = this.view.getInt8(this.pos + headOffset);
        var data = this.decodeBinary(size, headOffset + 1);
        return this.extensionCodec.decode(data, extType);
      };
      Decoder.prototype.lookU8 = function() {
        return this.view.getUint8(this.pos);
      };
      Decoder.prototype.lookU16 = function() {
        return this.view.getUint16(this.pos);
      };
      Decoder.prototype.lookU32 = function() {
        return this.view.getUint32(this.pos);
      };
      Decoder.prototype.readU8 = function() {
        var value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
      };
      Decoder.prototype.readI8 = function() {
        var value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
      };
      Decoder.prototype.readU16 = function() {
        var value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
      };
      Decoder.prototype.readI16 = function() {
        var value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
      };
      Decoder.prototype.readU32 = function() {
        var value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
      };
      Decoder.prototype.readI32 = function() {
        var value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
      };
      Decoder.prototype.readU64 = function() {
        var value = int_1.getUint64(this.view, this.pos);
        this.pos += 8;
        return value;
      };
      Decoder.prototype.readI64 = function() {
        var value = int_1.getInt64(this.view, this.pos);
        this.pos += 8;
        return value;
      };
      Decoder.prototype.readF32 = function() {
        var value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
      };
      Decoder.prototype.readF64 = function() {
        var value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
      };
      return Decoder;
    }();
    exports.Decoder = Decoder;
    cc._RF.pop();
  }, {
    "./ExtensionCodec": "ExtensionCodec",
    "./utils/int": "int",
    "./utils/prettyByte": "prettyByte",
    "./utils/typedArrays": "typedArrays",
    "./utils/utf8": "utf8"
  } ],
  Encoder: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9a8fTNgQ1CN6PV+C6PvQAc", "Encoder");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var utf8_1 = require("./utils/utf8");
    var ExtensionCodec_1 = require("./ExtensionCodec");
    var int_1 = require("./utils/int");
    var typedArrays_1 = require("./utils/typedArrays");
    exports.DEFAULT_MAX_DEPTH = 100;
    exports.DEFAULT_INITIAL_BUFFER_SIZE = 2048;
    var Encoder = function() {
      function Encoder(extensionCodec, maxDepth, initialBufferSize, sortKeys, mapKeys) {
        void 0 === extensionCodec && (extensionCodec = ExtensionCodec_1.ExtensionCodec.defaultCodec);
        void 0 === maxDepth && (maxDepth = exports.DEFAULT_MAX_DEPTH);
        void 0 === initialBufferSize && (initialBufferSize = exports.DEFAULT_INITIAL_BUFFER_SIZE);
        void 0 === sortKeys && (sortKeys = false);
        void 0 === mapKeys && (mapKeys = Array());
        this.extensionCodec = extensionCodec;
        this.maxDepth = maxDepth;
        this.initialBufferSize = initialBufferSize;
        this.sortKeys = sortKeys;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
        this.mapKeys = null;
        if (mapKeys.length > 0) {
          this.mapKeys = {};
          for (var i = 0; i < mapKeys.length; i++) this.mapKeys[mapKeys[i]] = i;
        }
      }
      Encoder.prototype.encode = function(object, depth) {
        if (depth > this.maxDepth) throw new Error("Too deep objects in depth " + depth);
        if (this.mapKeys && Object.keys(this.mapKeys).length > 255) throw new Error("Only support mapkey lenght <= 255");
        null == object ? this.encodeNil() : "boolean" === typeof object ? this.encodeBoolean(object) : "number" === typeof object ? this.encodeNumber(object) : "string" === typeof object ? this.encodeString(object) : this.encodeObject(object, depth);
      };
      Encoder.prototype.getUint8Array = function() {
        return this.bytes.subarray(0, this.pos);
      };
      Encoder.prototype.ensureBufferSizeToWrite = function(sizeToWrite) {
        var requiredSize = this.pos + sizeToWrite;
        this.view.byteLength < requiredSize && this.resizeBuffer(2 * requiredSize);
      };
      Encoder.prototype.resizeBuffer = function(newSize) {
        var newBuffer = new ArrayBuffer(newSize);
        var newBytes = new Uint8Array(newBuffer);
        var newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
      };
      Encoder.prototype.encodeNil = function() {
        this.writeU8(192);
      };
      Encoder.prototype.encodeBoolean = function(object) {
        false === object ? this.writeU8(194) : this.writeU8(195);
      };
      Encoder.prototype.encodeNumber = function(object) {
        if (Number.isSafeInteger(object)) if (object >= 0) if (object < 128) this.writeU8(object); else if (object < 256) {
          this.writeU8(204);
          this.writeU8(object);
        } else if (object < 65536) {
          this.writeU8(205);
          this.writeU16(object);
        } else if (object < 4294967296) {
          this.writeU8(206);
          this.writeU32(object);
        } else {
          this.writeU8(207);
          this.writeU64(object);
        } else if (object >= -32) this.writeU8(224 | object + 32); else if (object >= -128) {
          this.writeU8(208);
          this.writeI8(object);
        } else if (object >= -32768) {
          this.writeU8(209);
          this.writeI16(object);
        } else if (object >= -2147483648) {
          this.writeU8(210);
          this.writeI32(object);
        } else {
          this.writeU8(211);
          this.writeI64(object);
        } else {
          this.writeU8(203);
          this.writeF64(object);
        }
      };
      Encoder.prototype.writeStringHeader = function(byteLength) {
        if (byteLength < 32) this.writeU8(160 + byteLength); else if (byteLength < 256) {
          this.writeU8(217);
          this.writeU8(byteLength);
        } else if (byteLength < 65536) {
          this.writeU8(218);
          this.writeU16(byteLength);
        } else {
          if (!(byteLength < 4294967296)) throw new Error("Too long string: " + byteLength + " bytes in UTF-8");
          this.writeU8(219);
          this.writeU32(byteLength);
        }
      };
      Encoder.prototype.encodeString = function(object) {
        var maxHeaderSize = 5;
        var strLength = object.length;
        var byteLength = utf8_1.utf8Count(object);
        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
        this.writeStringHeader(byteLength);
        utf8_1.utf8EncodeJs(object, this.bytes, this.pos);
        this.pos += byteLength;
      };
      Encoder.prototype.encodeObject = function(object, depth) {
        var ext = this.extensionCodec.tryToEncode(object);
        if (null != ext) this.encodeExtension(ext); else if (Array.isArray(object)) this.encodeArray(object, depth); else if (ArrayBuffer.isView(object)) this.encodeBinary(object); else {
          if ("object" !== typeof object) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(object));
          this.encodeMap(object, depth);
        }
      };
      Encoder.prototype.encodeBinary = function(object) {
        var size = object.byteLength;
        if (size < 256) {
          this.writeU8(196);
          this.writeU8(size);
        } else if (size < 65536) {
          this.writeU8(197);
          this.writeU16(size);
        } else {
          if (!(size < 4294967296)) throw new Error("Too large binary: " + size);
          this.writeU8(198);
          this.writeU32(size);
        }
        var bytes = typedArrays_1.ensureUint8Array(object);
        this.writeU8a(bytes);
      };
      Encoder.prototype.encodeArray = function(object, depth) {
        var size = object.length;
        if (size < 16) this.writeU8(144 + size); else if (size < 65536) {
          this.writeU8(220);
          this.writeU16(size);
        } else {
          if (!(size < 4294967296)) throw new Error("Too large array: " + size);
          this.writeU8(221);
          this.writeU32(size);
        }
        for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
          var item = object_1[_i];
          this.encode(item, depth + 1);
        }
      };
      Encoder.prototype.encodeMap = function(object, depth) {
        var keys = Object.keys(object);
        this.sortKeys && keys.sort();
        var size = keys.length;
        if (size < 16) this.writeU8(128 + size); else if (size < 65536) {
          this.writeU8(222);
          this.writeU16(size);
        } else {
          if (!(size < 4294967296)) throw new Error("Too large map object: " + size);
          this.writeU8(223);
          this.writeU32(size);
        }
        for (var i = 0; i < size; i++) {
          var key = keys[i];
          if (this.mapKeys) {
            var keyIdx = this.mapKeys[key];
            if (null != keyIdx) this.writeU8(this.mapKeys[key]); else {
              console.warn("Object key '" + key + "' not found in mapKeys! You might need to add this");
              this.encodeString(key);
            }
          } else this.encodeString(key);
          this.encode(object[key], depth + 1);
        }
      };
      Encoder.prototype.encodeExtension = function(ext) {
        var size = ext.data.length;
        if (1 === size) this.writeU8(212); else if (2 === size) this.writeU8(213); else if (4 === size) this.writeU8(214); else if (8 === size) this.writeU8(215); else if (16 === size) this.writeU8(216); else if (size < 256) {
          this.writeU8(199);
          this.writeU8(size);
        } else if (size < 65536) {
          this.writeU8(200);
          this.writeU16(size);
        } else {
          if (!(size < 4294967296)) throw new Error("Too large extension object: " + size);
          this.writeU8(201);
          this.writeU32(size);
        }
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
      };
      Encoder.prototype.writeU8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
      };
      Encoder.prototype.writeU8a = function(values) {
        var size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
      };
      Encoder.prototype.writeI8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
      };
      Encoder.prototype.writeU16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
      };
      Encoder.prototype.writeI16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
      };
      Encoder.prototype.writeU32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
      };
      Encoder.prototype.writeI32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
      };
      Encoder.prototype.writeF64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
      };
      Encoder.prototype.writeU64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        int_1.setUint64(this.view, this.pos, value);
        this.pos += 8;
      };
      Encoder.prototype.writeI64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        int_1.setInt64(this.view, this.pos, value);
        this.pos += 8;
      };
      return Encoder;
    }();
    exports.Encoder = Encoder;
    cc._RF.pop();
  }, {
    "./ExtensionCodec": "ExtensionCodec",
    "./utils/int": "int",
    "./utils/typedArrays": "typedArrays",
    "./utils/utf8": "utf8"
  } ],
  ErrorCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6555tca3pJB4zaSZGKtm7o", "ErrorCode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MpCode = function() {
      function MpCode() {}
      MpCode.CONNECT_ERROR = 1e3;
      MpCode.MAKER_NOT_INIT = 1001;
      MpCode.INVALID_ROOM = 1002;
      MpCode.ROOM_NOT_EXIST = 1003;
      MpCode.ROOM_FULL = 1004;
      MpCode.SOCKET_JOIN_FAILED = 1005;
      MpCode.QUICK_JOIN_FAILED = 1006;
      MpCode.KICK_PLAYER_FALIED = 1007;
      MpCode.INVALID_PARAMS = 1008;
      MpCode.HAS_NOT_PERMIT = 1009;
      MpCode.START_GAME_FAILED = 1010;
      MpCode.JOIN_ROOM_FAILED = 1011;
      return MpCode;
    }();
    exports.MpCode = MpCode;
    var MpEvent = function() {
      function MpEvent() {}
      MpEvent.S_ERROR = "serror";
      MpEvent.S_CONNECTED = "connected";
      MpEvent.S_ROOM_CREATED = "roomCreated";
      MpEvent.S_ROOM_JOINED = "roomJoined";
      MpEvent.S_QUICK_ROOM_JOINED = "qroomJoined";
      MpEvent.S_QUICK_ROOM_LEFT = "qroomLeft";
      MpEvent.S_ROOM_PLAYER_JOINED = "playerJoined";
      MpEvent.S_ROOM_PLAYER_LEFT = "playerLeft";
      MpEvent.S_ROOM_MASTER_CHANGE = "masterChange";
      MpEvent.S_PLAYER_STATUS_CHANGE = "status";
      MpEvent.S_IDLE_PLAYER_CHANGE = "playerChange";
      MpEvent.S_QROOM_RESULT = "roomResult";
      MpEvent.S_QPLAYER_RESULT = "playerResult";
      MpEvent.S_GAME_STARTED = "startGame";
      MpEvent.S_GAME_CANCEL = "gameCancel";
      MpEvent.S_GAME_STARTING = "gameStarting";
      MpEvent.S_ROOM_INFO_RESULT = "rInfoResult";
      MpEvent.S_PLAYER_KICKED = "kickedOut";
      MpEvent.S_PLAYER_INVITED = "invited";
      MpEvent.S_ROOM_MESSAGE = "sroomMsg";
      MpEvent.S_DEBUG_RESULT = "debugResult";
      MpEvent.C_QUERY_ROOM = "queryRoom";
      MpEvent.C_QUERY_PLAYER = "queryPlayer";
      MpEvent.C_ROOM_INFO = "roomInfo";
      MpEvent.C_CREATE_ROOM = "create";
      MpEvent.C_JOIN_ROOM = "join";
      MpEvent.C_LEAVE_ROOM = "leave";
      MpEvent.C_PLAYER_READY = "ready";
      MpEvent.C_KICK_PLAYER = "kick";
      MpEvent.C_QUICK_PLAY = "quickPlay";
      MpEvent.C_QUICK_JOIN = "quickJoin";
      MpEvent.C_CANCEL_PLAY = "cancelPlay";
      MpEvent.C_INVITE = "invite";
      MpEvent.C_START_GAME = "playgame";
      MpEvent.C_ROOM_MESSAGE = "roomMsg";
      MpEvent.C_DEBUG = "debugInfo";
      return MpEvent;
    }();
    exports.MpEvent = MpEvent;
    cc._RF.pop();
  }, {} ],
  ExtData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "047d9WaOaRNp5ZLNu5d0/un", "ExtData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ExtData = function() {
      function ExtData(type, data) {
        this.type = type;
        this.data = data;
      }
      return ExtData;
    }();
    exports.ExtData = ExtData;
    cc._RF.pop();
  }, {} ],
  ExtensionCodec: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a859dQ1VbpPRYLA8yTWyNLz", "ExtensionCodec");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ExtData_1 = require("./ExtData");
    var timestamp_1 = require("./timestamp");
    var ExtensionCodec = function() {
      function ExtensionCodec() {
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        this.encoders = [];
        this.decoders = [];
        this.register(timestamp_1.timestampExtension);
      }
      ExtensionCodec.prototype.register = function(_a) {
        var type = _a.type, encode = _a.encode, decode = _a.decode;
        if (type >= 0) {
          this.encoders[type] = encode;
          this.decoders[type] = decode;
        } else {
          var index = 1 + type;
          this.builtInEncoders[index] = encode;
          this.builtInDecoders[index] = decode;
        }
      };
      ExtensionCodec.prototype.tryToEncode = function(object) {
        for (var i = 0; i < this.builtInEncoders.length; i++) {
          var encoder = this.builtInEncoders[i];
          if (null != encoder) {
            var data = encoder(object);
            if (null != data) {
              var type = -1 - i;
              return new ExtData_1.ExtData(type, data);
            }
          }
        }
        for (var i = 0; i < this.encoders.length; i++) {
          var encoder = this.encoders[i];
          if (null != encoder) {
            var data = encoder(object);
            if (null != data) {
              var type = i;
              return new ExtData_1.ExtData(type, data);
            }
          }
        }
        if (object instanceof ExtData_1.ExtData) return object;
        return null;
      };
      ExtensionCodec.prototype.decode = function(data, type) {
        var decoder = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        return decoder ? decoder(data, type) : new ExtData_1.ExtData(type, data);
      };
      ExtensionCodec.defaultCodec = new ExtensionCodec();
      return ExtensionCodec;
    }();
    exports.ExtensionCodec = ExtensionCodec;
    cc._RF.pop();
  }, {
    "./ExtData": "ExtData",
    "./timestamp": "timestamp"
  } ],
  LabelLocalized: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b2e4HVWKBCIaBIbtjNKeSy", "LabelLocalized");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    var i18n = require("i18n");
    var LabelLocalized = function(_super) {
      __extends(LabelLocalized, _super);
      function LabelLocalized() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._textKey = "TEXT_KEY";
        _this.label = null;
        _this.textProp = null;
        return _this;
      }
      Object.defineProperty(LabelLocalized.prototype, "textKey", {
        get: function() {
          return this._textKey;
        },
        set: function(value) {
          this._textKey = value;
          this.updateLabel();
        },
        enumerable: true,
        configurable: true
      });
      LabelLocalized.prototype.onLoad = function() {
        this.label = this.getComponent(cc.Label);
        this.updateLabel();
      };
      LabelLocalized.prototype.updateLabel = function() {
        null == this.label && (this.label = this.getComponent(cc.Label));
        if (this.label) {
          var keys = this.textKey.trim().split("+");
          var text = "";
          for (var i = 0; i < keys.length; ++i) text += i18n.t(keys[i], this.textProp);
          this.label.string = text;
        }
      };
      LabelLocalized.prototype.updateTextProp = function(props) {
        this.textProp = props;
        this.updateLabel();
      };
      __decorate([ property() ], LabelLocalized.prototype, "_textKey", void 0);
      __decorate([ property({
        multiline: true,
        tooltip: "Enter i18n text key"
      }) ], LabelLocalized.prototype, "textKey", null);
      LabelLocalized = __decorate([ ccclass, requireComponent(cc.Label), executeInEditMode, menu("i18n:MAIN_MENU.component.renderers/LabelLocalized") ], LabelLocalized);
      return LabelLocalized;
    }(cc.Component);
    exports.default = LabelLocalized;
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  MpController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50558dpQXxF651W6mUyApjn", "MpController");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MpMacher_1 = require("./MpMacher");
    var Connection = function() {
      function Connection() {
        this.ready = false;
      }
      return Connection;
    }();
    var MpController = function() {
      function MpController() {
        var _this = this;
        this.onDisconnect = function() {};
        this.dataCache = [];
        this.onData = function(data, from) {
          _this.dataCache.push({
            data: data,
            from: from
          });
        };
        this.serverPlayer = "";
        this.localPlayer = "";
        this.connections = {};
        this.rtcConfig = {
          iceServers: [ {
            urls: "stun:stun.l.google.com:19302"
          }, {
            urls: "stun:global.stun.twilio.com:3478?transport=udp"
          }, {
            urls: "turn:13.250.13.83:3478?transport=udp",
            username: "YzYNCouZM1mhqhmseWk6",
            credential: "YzYNCouZM1mhqhmseWk6"
          }, {
            urls: "turn:turn.anyfirewall.com:443?transport=tcp",
            username: "webrtc",
            credential: "webrtc"
          }, {
            urls: "turn:numb.viagenie.ca",
            username: "nqtham68@hotmail.com",
            credential: "123456?a"
          } ]
        };
        this.sdpConstraints = {
          offerToReceiveAudio: false,
          offerToReceiveVideo: false
        };
        this.dataChannelConfig = {
          ordered: false,
          maxRetransmits: 0
        };
        this.connectionCount = 0;
      }
      MpController.prototype.setDataReceiver = function(receiver) {
        var _this = this;
        this.onData = receiver;
        this.dataCache.forEach(function(data) {
          _this.onData(data.data, data.from);
        });
        this.dataCache = [];
      };
      MpController.prototype.send = function(id, data) {
        try {
          this.connections[id] && this.connections[id].channel.send(data);
        } catch (e) {
          this.disconnect(id);
          this.onDisconnect(id);
        }
      };
      MpController.prototype.sendServer = function(data) {
        this.connections[this.serverPlayer] ? this.send(this.serverPlayer, data) : cc.warn("Send to server player failed");
      };
      MpController.prototype.broadcast = function(data) {
        for (var id in this.connections) this.send(id, data);
      };
      MpController.prototype.disconnect = function(id) {
        if (this.connections[id]) {
          this.connections[id].channel.close();
          delete this.connections[id];
        } else cc.warn("Disconnect to invalid id: " + id);
      };
      MpController.prototype.startGame = function() {
        var _this = this;
        this.room.players.forEach(function(player, idx) {
          _this.serverPlayer === player.id && (_this.serverPlayer = idx.toString());
          _this.localPlayer === player.id && (_this.localPlayer = idx.toString());
          if (_this.connections[player.id]) {
            _this.connections[idx] = _this.connections[player.id];
            _this.connections[idx].player = player;
          }
          delete _this.connections[player.id];
          player.id = idx.toString();
        });
      };
      MpController.prototype.init = function(signalChannel) {
        var _this = this;
        this.signal = signalChannel;
        this.signal.on("rtc-roomInfo", function(data) {
          _this.connections = {};
          _this.room = new MpMacher_1.Room(data.room);
          _this.serverPlayer = data.server;
          if (_this.localPlayer === _this.serverPlayer) {
            _this.connectionCount = _this.room.players.length - 1;
            window.GAME_SERVER = true;
          } else {
            _this.connectionCount = 1;
            window.GAME_SERVER = false;
          }
        });
        this.signal.on("rtc-reqOffer", function(data) {
          if (_this.connections[data.player]) console.warn("request duplicate for: " + data.player); else {
            var connection_1 = new Connection();
            connection_1.peer = new RTCPeerConnection(_this.rtcConfig);
            connection_1.channel = connection_1.peer.createDataChannel("mp", _this.dataChannelConfig);
            connection_1.channel.onclose = function() {
              var playerId = connection_1.player && connection_1.player.id || data.player;
              console.log("connection " + playerId + " closed");
              _this.onDisconnect(playerId);
            };
            connection_1.channel.onopen = function() {
              console.log("connection " + data.player + " openned");
              connection_1.ready = true;
              _this.checkReady();
            };
            connection_1.channel.onerror = function(e) {
              var playerId = connection_1.player && connection_1.player.id || data.player;
              console.log("connection " + playerId + " error: " + e);
            };
            connection_1.channel.onmessage = function(e) {
              var playerId = connection_1.player && connection_1.player.id || data.player;
              _this.onData(e.data, playerId);
            };
            connection_1.peer.onicecandidate = function(event) {
              event && event.candidate && _this.signal.emit("rtc-data", {
                type: "ice",
                to: data.player,
                data: event.candidate
              });
            };
            connection_1.peer.createOffer(_this.sdpConstraints).then(function(sdp) {
              connection_1.peer.setLocalDescription(sdp);
              _this.signal.emit("rtc-data", {
                type: "offer",
                to: data.player,
                data: sdp
              });
            });
            _this.connections[data.player] = connection_1;
          }
        });
        this.signal.on("rtc-rtcData", function(data) {
          if ("offer" == data.type) {
            var connection_2 = new Connection();
            connection_2.peer = new RTCPeerConnection(_this.rtcConfig);
            connection_2.peer.onicecandidate = function(event) {
              event && event.candidate && _this.signal.emit("rtc-data", {
                type: "ice",
                to: data.player,
                data: event.candidate
              });
            };
            connection_2.peer.ondatachannel = function(event) {
              connection_2.channel = event.channel;
              connection_2.channel.onclose = function() {
                var playerId = connection_2.player && connection_2.player.id || data.player;
                console.log("connection " + playerId + " closed");
                _this.onDisconnect(playerId);
              };
              connection_2.channel.onopen = function() {
                console.log("connection " + data.player + " openned");
                connection_2.ready = true;
                _this.checkReady();
              };
              connection_2.channel.onerror = function(e) {
                var playerId = connection_2.player && connection_2.player.id || data.player;
                console.log("connection " + playerId + " error: " + e);
              };
              connection_2.channel.onmessage = function(e) {
                var playerId = connection_2.player && connection_2.player.id || data.player;
                _this.onData(e.data, playerId);
              };
            };
            _this.connections[data.player] = connection_2;
            _this.connections[data.player].peer.setRemoteDescription(data.data);
            _this.connections[data.player].peer.createAnswer(_this.sdpConstraints).then(function(sdp) {
              _this.connections[data.player].peer.setLocalDescription(sdp);
              _this.signal.emit("rtc-data", {
                type: "answer",
                to: data.player,
                data: sdp
              });
            });
          } else "answer" == data.type ? _this.connections[data.player].peer.setRemoteDescription(data.data) : "ice" == data.type && _this.connections[data.player].peer.addIceCandidate(data.data);
        });
        return this;
      };
      MpController.prototype.checkReady = function() {
        var readyCount = 0;
        for (var id in this.connections) this.connections[id].ready && readyCount++;
        readyCount == this.connectionCount && this.signal.emit("rtc-ready");
      };
      return MpController;
    }();
    exports.MpController = MpController;
    cc._RF.pop();
  }, {
    "./MpMacher": "MpMacher"
  } ],
  MpMacher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa40fpbjhxC4K/OlVsP7Wch", "MpMacher");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ErrorCode_1 = require("./ErrorCode");
    var MpController_1 = require("./MpController");
    var Player = function() {
      function Player() {
        this.master = false;
        this.ready = false;
      }
      return Player;
    }();
    exports.Player = Player;
    var Room = function() {
      function Room(data) {
        this.players = [];
        this.id = data.id;
        this.max = data.max;
        this.data = data.data;
        this.players = data.players;
      }
      Room.prototype.getPlayer = function(id) {
        for (var i = 0; i < this.players.length; i++) if (this.players[i].id == id) return this.players[i];
        return null;
      };
      Room.prototype.removePlayer = function(id) {
        for (var i = 0; i < this.players.length; i++) if (this.players[i].id == id) return this.players.splice(i, 1)[0];
      };
      return Room;
    }();
    exports.Room = Room;
    var PlayType;
    (function(PlayType) {
      PlayType[PlayType["NORMAL"] = 0] = "NORMAL";
      PlayType[PlayType["PAIR"] = 1] = "PAIR";
    })(PlayType = exports.PlayType || (exports.PlayType = {}));
    var MatchMaker = function() {
      function MatchMaker() {
        this._listenIdleChange = false;
      }
      MatchMaker.prototype.connect = function(server, gameId, playerName, playerData) {
        var cdata = {
          gameId: gameId,
          name: playerName,
          data: JSON.stringify(playerData)
        };
        this.socket = window.io.connect(server, {
          query: cdata,
          reconnection: false
        });
        this.setServerListener();
        this.controller = new MpController_1.MpController().init(this.socket);
      };
      MatchMaker.prototype.disconnect = function() {
        this.socket.disconnect(true);
      };
      MatchMaker.prototype.createRoom = function(data) {
        this.socket.emit(ErrorCode_1.MpEvent.C_CREATE_ROOM, data);
      };
      MatchMaker.prototype.joinRoom = function(roomId) {
        this.socket.emit(ErrorCode_1.MpEvent.C_JOIN_ROOM, roomId);
      };
      MatchMaker.prototype.leaveRoom = function() {
        this.socket.emit(ErrorCode_1.MpEvent.C_LEAVE_ROOM);
      };
      MatchMaker.prototype.sendRoomMessage = function(message) {
        this.socket.emit(ErrorCode_1.MpEvent.C_ROOM_MESSAGE, message);
      };
      MatchMaker.prototype.setReady = function(ready) {
        this.socket.emit(ErrorCode_1.MpEvent.C_PLAYER_READY, ready);
      };
      MatchMaker.prototype.kickPlayer = function(playerId) {
        this.socket.emit(ErrorCode_1.MpEvent.C_KICK_PLAYER, playerId);
      };
      MatchMaker.prototype.invitePlayer = function(playerId, data) {
        this.socket.emit(ErrorCode_1.MpEvent.C_INVITE, {
          player: playerId,
          data: data
        });
      };
      MatchMaker.prototype.getRooms = function() {
        this.socket.emit(ErrorCode_1.MpEvent.C_QUERY_ROOM);
      };
      MatchMaker.prototype.getIdlePlayers = function(listenChange) {
        this.socket.emit(ErrorCode_1.MpEvent.C_QUERY_PLAYER);
        this.setListenIdlePlayersChange(listenChange);
      };
      MatchMaker.prototype.setListenIdlePlayersChange = function(listen) {
        var _this = this;
        if (this._listenIdleChange == listen) return;
        this._listenIdleChange = listen;
        listen ? this.socket.on(ErrorCode_1.MpEvent.S_IDLE_PLAYER_CHANGE, function(data) {
          _this.listener.onIdlePlayersChange(data);
        }) : this.socket.removeAllListeners(ErrorCode_1.MpEvent.S_IDLE_PLAYER_CHANGE);
      };
      MatchMaker.prototype.quickJoinRoom = function(data) {
        this.socket.emit(ErrorCode_1.MpEvent.C_QUICK_JOIN, data);
      };
      MatchMaker.prototype.quickPlay = function(data) {
        this.socket.emit(ErrorCode_1.MpEvent.C_QUICK_PLAY, data);
      };
      MatchMaker.prototype.startGame = function() {
        this.socket.emit(ErrorCode_1.MpEvent.C_START_GAME);
      };
      MatchMaker.prototype.cancelPlay = function() {
        this.socket.emit(ErrorCode_1.MpEvent.C_CANCEL_PLAY);
      };
      MatchMaker.prototype.setServerListener = function() {
        var _this = this;
        this.socket.on("connect_error", function(error) {
          console.warn("Failed to connect to server");
          _this.listener.onError(ErrorCode_1.MpCode.CONNECT_ERROR);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_ERROR, function(error) {
          _this.listener.onError(error);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_CONNECTED, function(data) {
          _this.localPlayer = new Player();
          _this.localPlayer.id = data.id;
          _this.localPlayer.name = data.name;
          _this.controller.localPlayer = data.id;
          _this.listener.onConnected(data.id, data.name);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_ROOM_CREATED, function(data) {
          _this.listener.onRoomCreated(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_ROOM_JOINED, function(data) {
          _this.listener.onRoomJoined(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_ROOM_PLAYER_JOINED, function(data) {
          _this.listener.onRoomPlayerJoined(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_ROOM_PLAYER_LEFT, function(data) {
          _this.listener.onRoomPlayerLeft(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_PLAYER_KICKED, function() {
          _this.listener.onPlayerKicked();
        });
        this.socket.on(ErrorCode_1.MpEvent.S_ROOM_MESSAGE, function(data) {
          _this.listener.onRoomMessage(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_PLAYER_STATUS_CHANGE, function(data) {
          _this.listener.onPlayerStatusChange(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_ROOM_MASTER_CHANGE, function(data) {
          _this.listener.onRoomMasterChange(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_QROOM_RESULT, function(data) {
          _this.listener.onRoomsResult(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_QPLAYER_RESULT, function(data) {
          _this.listener.onPlayersResult(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_QUICK_ROOM_JOINED, function() {
          _this.listener.onQuickRoomJoined();
        });
        this.socket.on(ErrorCode_1.MpEvent.S_PLAYER_INVITED, function(data) {
          _this.listener.onPlayerInvite(data);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_GAME_STARTED, function() {
          _this.controller.startGame();
          _this.listener.onGameStarted(_this.controller);
        });
        this.socket.on(ErrorCode_1.MpEvent.S_GAME_CANCEL, function() {
          _this.listener.onGameCancel();
        });
        this.socket.on(ErrorCode_1.MpEvent.S_GAME_STARTING, function() {
          _this.listener.onGameStarting();
        });
      };
      return MatchMaker;
    }();
    exports.MatchMaker = MatchMaker;
    cc._RF.pop();
  }, {
    "./ErrorCode": "ErrorCode",
    "./MpController": "MpController"
  } ],
  NetComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "660e096CYJN4YEBm/vr1FqE", "NetComponent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("./NetModules");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple;
    var SyncMode;
    (function(SyncMode) {
      SyncMode[SyncMode["None"] = 0] = "None";
      SyncMode[SyncMode["Position"] = 1] = "Position";
    })(SyncMode || (SyncMode = {}));
    var NetComponent = function(_super) {
      __extends(NetComponent, _super);
      function NetComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.syncRate = 20;
        _this.interpolate = true;
        _this.syncMode = SyncMode.Position;
        _this.syncVars = {};
        _this._posBuffer = [];
        _this.lastCaptureData = {};
        return _this;
      }
      NetComponent.prototype.onLoad = function() {
        this.lastTimeSync = Date.now();
        this.collectSyncVars();
        CC_SERVER && (this.interpolate = false);
      };
      NetComponent.prototype.start = function() {
        if (GAME_SERVER) {
          this.schedule(this.syncToClient.bind(this), 1 / this.syncRate);
          this.syncToClient();
        }
      };
      NetComponent.prototype.onEnable = function() {
        NetModules_1.NetManager.instance.registerNetObject(this);
      };
      NetComponent.prototype.onDisable = function() {
        NetModules_1.NetManager.instance.unregisterNetObject(this);
      };
      NetComponent.prototype.update = function(dt) {
        if (GAME_SERVER) ; else {
          if (this.interpolate) {
            var factor = this.syncRate / cc.game.getFrameRate();
            var time = Date.now() - 1e3 / this.syncRate;
            while (this._posBuffer.length >= 2 && this._posBuffer[1].time <= time) this._posBuffer.shift();
            if (this._posBuffer.length >= 2 && this._posBuffer[0].time <= time && time <= this._posBuffer[1].time) {
              this._posBuffer[0].delta || (this._posBuffer[0].delta = factor);
              var r = this._posBuffer[0].delta;
              var target = this._posBuffer[0].pos.lerp(this._posBuffer[1].pos, r);
              this.node.setPosition(target);
              this._posBuffer[0].delta += factor;
            }
          }
          this.isSync() || this.deSync();
        }
      };
      NetComponent.prototype.applyServerData = function(data) {
        this.lastTimeSync = Date.now();
        if (data.pos) {
          this.interpolate ? this._posBuffer.push({
            time: Date.now(),
            pos: cc.v2(data.pos)
          }) : this.node.setPosition(data.pos);
          this._lastStatePos || this.node.setPosition(data.pos);
          this._lastStatePos = data.pos;
        }
        if (data.vars) for (var syncvar in data.vars) if (this.syncVars[syncvar]) {
          this.syncVars[syncvar]._syncVars[syncvar] = data.vars[syncvar];
          this.syncVars[syncvar][syncvar] = 2586;
        } else cc.warn("SyncVar local not match");
      };
      NetComponent.prototype.isSync = function() {
        return Date.now() - this.lastTimeSync < 1e3 / this.syncRate * 8;
      };
      NetComponent.prototype.deSync = function() {
        this.enabled = false;
      };
      NetComponent.prototype.captureData = function() {
        var data = {
          id: this.id
        };
        var position = NetModules_1.vec2Round(this.node.position);
        0 == (this.syncMode & SyncMode.Position) && this.lastCaptureData.pos || this.lastCaptureData.pos && this.lastCaptureData.pos.x == position.x && this.lastCaptureData.pos.y == position.y || (data.pos = position);
        data.vars = {};
        for (var syncvar in this.syncVars) {
          var value = this.syncVars[syncvar][syncvar];
          this.lastCaptureData.vars && NetModules_1.compareObj(value, this.lastCaptureData.vars[syncvar]) || (data.vars[syncvar] = value);
        }
        0 == Object.keys(data.vars).length && delete data.vars;
        this.lastCaptureData = NetModules_1.mergeDeep(this.lastCaptureData, data);
        return data;
      };
      NetComponent.prototype.captureDataFull = function() {
        var data = {
          id: this.id,
          name: this.creator,
          pos: NetModules_1.vec2Round(this.node.position)
        };
        data.vars = {};
        for (var syncvar in this.syncVars) data.vars[syncvar] = this.syncVars[syncvar][syncvar];
        0 == Object.keys(data.vars).length && delete data.vars;
        return data;
      };
      NetComponent.prototype.syncToClient = function() {
        var data = this.captureData();
        NetModules_1.NetManager.instance.messageQueue.push({
          sync: data
        });
      };
      NetComponent.prototype.collectSyncVars = function() {
        var _this = this;
        var comps = this.node._components;
        comps.forEach(function(comp) {
          if (comp._syncVarsPool) {
            comp._syncVars = comp._syncVars || {};
            comp._syncVarsPool.forEach(function(syncvar) {
              _this.syncVars[syncvar] && cc.error("SyncVar name conflict. There are more than one syncvar on the same object!");
              _this.syncVars[syncvar] = comp;
            });
          }
        });
      };
      __decorate([ property({
        tooltip: "Sync fps between server and client"
      }) ], NetComponent.prototype, "syncRate", void 0);
      __decorate([ property() ], NetComponent.prototype, "interpolate", void 0);
      __decorate([ property({
        type: cc.Enum(SyncMode)
      }) ], NetComponent.prototype, "syncMode", void 0);
      __decorate([ ClientOnly ], NetComponent.prototype, "applyServerData", null);
      __decorate([ ServerOnly ], NetComponent.prototype, "captureData", null);
      __decorate([ ServerOnly ], NetComponent.prototype, "captureDataFull", null);
      __decorate([ ServerOnly ], NetComponent.prototype, "syncToClient", null);
      NetComponent = __decorate([ ccclass, disallowMultiple ], NetComponent);
      return NetComponent;
    }(cc.Component);
    exports.NetComponent = NetComponent;
    function SyncVar(notify) {
      return function(target, propertyKey) {
        target._syncVarsPool = target._syncVarsPool || [];
        target._syncVarsPool.push(propertyKey);
        Object.defineProperty(target, propertyKey, {
          get: function() {
            this._syncVars = this._syncVars || {};
            return this._syncVars[propertyKey];
          },
          set: function(value) {
            var _this = this;
            if (GAME_SERVER || !this.node) {
              this._syncVars = this._syncVars || {};
              this._syncVars[propertyKey] = value;
              notify && this.scheduleOnce(function() {
                notify.apply(_this, [ _this._syncVars[propertyKey] ]);
              });
            } else 2586 === value ? notify && this.scheduleOnce(function() {
              notify.apply(_this, [ _this._syncVars[propertyKey] ]);
            }) : cc.error("Only server can set value to SyncVar");
          },
          enumerable: true,
          configurable: true
        });
      };
    }
    exports.SyncVar = SyncVar;
    function ServerOnly(target, propertyKey, descriptor) {
      var method = descriptor.value;
      descriptor.value = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var result;
        GAME_SERVER && (result = method.apply(this, args));
        return result;
      };
      return descriptor;
    }
    exports.ServerOnly = ServerOnly;
    function ClientOnly(target, propertyKey, descriptor) {
      var method = descriptor.value;
      descriptor.value = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var result;
        GAME_SERVER || (result = method.apply(this, args));
        return result;
      };
      return descriptor;
    }
    exports.ClientOnly = ClientOnly;
    cc._RF.pop();
  }, {
    "./NetModules": "NetModules"
  } ],
  NetConnection: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8998byZgWJF/qMkQj1c2a4F", "NetConnection");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("./NetModules");
    var msgpack_1 = require("../../msgpack");
    var USE_MSGPACK = true;
    var NetConnection = function() {
      function NetConnection(channel) {
        this.channel = channel;
        this.channel.onDisconnect = function(id) {
          cc.warn("player disconnected: " + id);
        };
        this.mapKeys = NetModules_1.systemKeys;
      }
      NetConnection.prototype.setDataReceiver = function(receiver) {
        this.onDataReceived = receiver;
        this.channel.setDataReceiver(this.onChannelData.bind(this));
      };
      NetConnection.prototype.addMapKeys = function(keys) {
        this.mapKeys = this.mapKeys.concat(keys);
      };
      NetConnection.prototype.onChannelData = function(data, from) {
        data = USE_MSGPACK ? msgpack_1.decode(new Uint8Array(data), {
          mapKeys: this.mapKeys
        }) : JSON.parse(data);
        this.onDataReceived(data, from);
      };
      NetConnection.prototype.send = function(data, to) {
        data = USE_MSGPACK ? msgpack_1.encode(data, {
          mapKeys: this.mapKeys
        }) : JSON.stringify(data);
        to ? this.channel.send(to, data) : GAME_SERVER ? this.channel.broadcast(data) : this.channel.sendServer(data);
      };
      NetConnection.prototype.disconnect = function(id) {
        this.channel.disconnect(id);
      };
      Object.defineProperty(NetConnection.prototype, "onDisconnect", {
        set: function(handle) {
          this.channel.onDisconnect = handle;
        },
        enumerable: true,
        configurable: true
      });
      return NetConnection;
    }();
    exports.NetConnection = NetConnection;
    cc._RF.pop();
  }, {
    "../../msgpack": "index",
    "./NetModules": "NetModules"
  } ],
  NetManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c89ceJklLxGOaHIJJma6Si0", "NetManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("./NetModules");
    window.GAME_SERVER = window.GAME_SERVER || false;
    window.CC_SERVER = window.CC_SERVER || false;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple;
    var NetEvent;
    (function(NetEvent) {
      NetEvent[NetEvent["READY"] = 0] = "READY";
      NetEvent[NetEvent["DISCONNECT"] = 1] = "DISCONNECT";
    })(NetEvent = exports.NetEvent || (exports.NetEvent = {}));
    var NetManager = function(_super) {
      __extends(NetManager, _super);
      function NetManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spawnObjects = [];
        _this.messageRate = 20;
        _this._spawnPrefabs = {};
        _this._netObjects = {};
        _this.ready = false;
        _this._objectsInfo = {};
        return _this;
      }
      NetManager_1 = NetManager;
      Object.defineProperty(NetManager.prototype, "syncRate", {
        get: function() {
          return this.messageRate;
        },
        enumerable: true,
        configurable: true
      });
      NetManager.prototype.setNetObjectChangedListener = function(listener) {
        this.onNetObjectChanged = listener;
      };
      NetManager.prototype.setEventListener = function(listener) {
        this.onEvent = listener;
      };
      NetManager.prototype.onLoad = function() {
        NetManager_1.instance = this;
      };
      NetManager.prototype.init = function(controller) {
        var _this = this;
        if (!controller) return;
        this.spawnObjects.forEach(function(obj) {
          _this._spawnPrefabs[obj.name] = obj;
        });
        this.localPlayer = controller.localPlayer;
        this.serverPlayer = controller.serverPlayer;
        this.room = controller.room;
        this._netConnection = new NetModules_1.NetConnection(controller);
        this.messageQueue = new NetModules_1.NetMessageQueue(this._netConnection);
        this._netConnection.setDataReceiver(this.onNetData.bind(this));
        this._netConnection.onDisconnect = this.onDisConnected.bind(this);
        this.schedule(function() {
          _this.messageQueue.update();
        }, 1 / this.messageRate);
        GAME_SERVER && this.schedule(this.pingTask.bind(this), 1);
        GAME_SERVER ? this.room.getPlayer(this.localPlayer).ready = true : this.messageQueue.push({
          sys: {
            ready: true
          }
        });
      };
      NetManager.prototype.addMapKeys = function(keys) {
        this._netConnection.addMapKeys(keys);
      };
      NetManager.prototype.update = function(dt) {
        var _this = this;
        if (!this.room) return;
        var time = Date.now();
        if (GAME_SERVER) {
          var disPlayers_1 = [];
          this.room.players.forEach(function(player) {
            player.id != _this.localPlayer && time - player.lastRep > 1e4 && disPlayers_1.push(player.id);
          });
          disPlayers_1.forEach(function(id) {
            var player = _this.room.removePlayer(id);
            _this._netConnection.disconnect(player.id);
            _this.onEvent && _this.onEvent(NetEvent.DISCONNECT, player);
          });
        } else {
          var serverPlayer = this.room.getPlayer(this.serverPlayer);
          if (serverPlayer && time - serverPlayer.lastRep > 12e3) {
            this.onEvent && this.onEvent(NetEvent.DISCONNECT, this.serverPlayer);
            this._netConnection.disconnect(this.serverPlayer);
            this.room.removePlayer(this.serverPlayer);
          }
          for (var id in this._objectsInfo) time - this._objectsInfo[id] > 15e3 && delete this._objectsInfo[id];
        }
      };
      NetManager.prototype.getNetObject = function(objectId) {
        return this._netObjects[objectId];
      };
      NetManager.prototype.getLocalPlayer = function() {
        return this._netObjects[this.localPlayer];
      };
      NetManager.prototype.pingTask = function() {
        this.messageQueue.push({
          sys: {
            ping: true
          }
        });
      };
      NetManager.prototype.spawnObject = function(name, position, id) {
        if ("string" !== typeof name) return this.spawnFromPrefab(name, position, id);
        if (this._spawnPrefabs[name]) return this.spawnFromPrefab(this._spawnPrefabs[name], position, id);
        cc.warn("Object not register to spawn object: " + name);
        return null;
      };
      NetManager.prototype.spawnFromPrefab = function(prefab, position, id) {
        var node = cc.instantiate(prefab);
        var netcomp = node.getComponent(NetModules_1.NetComponent);
        netcomp instanceof NetModules_1.NetPlayer && this.localPlayer === id && (netcomp.isLocalPlayer = true);
        netcomp.id = id || NetModules_1.ShortId.generate();
        netcomp.creator = prefab.name;
        position && node.setPosition(position);
        this.onNetObjectChanged(netcomp, true);
        GAME_SERVER && this.messageQueue.push({
          spawn: {
            id: netcomp.id,
            name: prefab.name,
            pos: NetModules_1.vec2Round(netcomp.node.position)
          }
        });
        return node;
      };
      NetManager.prototype.onDisConnected = function(id) {
        var player = this.room.getPlayer(id);
        if (player) {
          this.room.removePlayer(id);
          this.onEvent && this.onEvent(NetEvent.DISCONNECT, player);
        }
      };
      NetManager.prototype.onNetData = function(netdatas, from) {
        var _this = this;
        netdatas.forEach(function(data) {
          if (data.sys) {
            var sysData = data.sys;
            if (null != sysData.ready) {
              _this.room.getPlayer(from).ready = true;
              var allready = true;
              for (var i = 0; i < _this.room.players.length; i++) if (!_this.room.players[i].ready) {
                allready = false;
                break;
              }
              if (allready) {
                _this.ready = true;
                _this.onEvent && _this.onEvent(NetEvent.READY);
                _this.messageQueue.push({
                  sys: {
                    allready: true
                  }
                });
              }
            }
            if (null != sysData.allready) {
              _this.ready = true;
              _this.onEvent && _this.onEvent(NetEvent.READY);
            }
            if (null != sysData.ping) {
              var player = _this.room.getPlayer(from);
              if (player) {
                player.lastRep = Date.now();
                _this.messageQueue.push({
                  sys: {
                    pong: true
                  }
                });
              }
            }
            if (null != sysData.pong) {
              var player = _this.room.getPlayer(from);
              player && (player.lastRep = Date.now());
            }
            if (sysData.info && _this._netObjects[sysData.info]) {
              var info = _this._netObjects[sysData.info].captureDataFull();
              _this.messageQueue.push({
                spawn: {
                  id: info.id,
                  name: info.name,
                  pos: info.pos
                },
                to: from
              });
              _this.messageQueue.push({
                sync: {
                  id: info.id,
                  vars: info.vars
                },
                to: from
              });
            }
          }
          data.spawn && _this.spawnObject(data.spawn.name, data.spawn.pos, data.spawn.id);
          if (data.sync) if (_this._netObjects[data.sync.id]) _this._netObjects[data.sync.id].applyServerData(data.sync); else if (null == _this._objectsInfo[data.sync.id]) {
            cc.warn("Objects not in sync: " + data.sync.id);
            _this.messageQueue.push({
              sys: {
                info: data.sync.id
              }
            });
            _this._objectsInfo[data.sync.id] = Date.now();
          }
          data.move && (_this._netObjects[data.move.id] ? _this._netObjects[data.move.id].applyPlayerMove(data.move) : cc.warn("Player not in sync: " + data.move.id));
          data.act && (_this._netObjects[data.act.id] ? _this._netObjects[data.act.id].applyAction(data.act) : cc.warn("Player not in sync: " + data.act.id));
        });
      };
      NetManager.prototype.registerNetObject = function(object) {
        if (this._netObjects[object.id]) cc.warn("Already registered: " + object.id); else {
          this._netObjects[object.id] = object;
          delete this._objectsInfo[object.id];
        }
      };
      NetManager.prototype.unregisterNetObject = function(object) {
        this._netObjects[object.id] ? delete this._netObjects[object.id] : cc.warn("Not yet registered: " + object.id);
        this.onNetObjectChanged(object, false);
      };
      var NetManager_1;
      NetManager.instance = null;
      __decorate([ property([ cc.Prefab ]) ], NetManager.prototype, "spawnObjects", void 0);
      __decorate([ property({
        tooltip: "fps to send data between server <-> client"
      }) ], NetManager.prototype, "messageRate", void 0);
      __decorate([ NetModules_1.ServerOnly ], NetManager.prototype, "spawnObject", null);
      NetManager = NetManager_1 = __decorate([ ccclass, disallowMultiple ], NetManager);
      return NetManager;
    }(cc.Component);
    exports.NetManager = NetManager;
    cc._RF.pop();
  }, {
    "./NetModules": "NetModules"
  } ],
  NetMessageQueue: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "390d1r0AW1EE43JjmmJRpdK", "NetMessageQueue");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.systemKeys = [ "sys", "spawn", "sync", "move", "act", "to", "id", "pos", "x", "y", "ready", "allready", "ping", "pong", "info", "name", "vars", "seq" ];
    var NetMessageQueue = function() {
      function NetMessageQueue(connectionChannel) {
        this.queue = [];
        this.pqueue = {};
        this.connection = connectionChannel;
      }
      NetMessageQueue.prototype.push = function(message) {
        message = Object.assign({}, message);
        if (message.to) {
          var to = message.to;
          this.pqueue[to] = this.pqueue[to] || [];
          delete message.to;
          this.pqueue[to].push(message);
        } else this.queue.push(message);
      };
      NetMessageQueue.prototype.update = function() {
        if (this.queue.length > 0) {
          this.connection.send(this.queue);
          this.queue = [];
        }
        for (var id in this.pqueue) this.connection.send(this.pqueue[id], id);
        this.pqueue = {};
      };
      return NetMessageQueue;
    }();
    exports.NetMessageQueue = NetMessageQueue;
    cc._RF.pop();
  }, {} ],
  NetModules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "484e42oaftLBoqSOHUUdPVt", "NetModules");
    "use strict";
    function __export(m) {
      for (var p in m) exports.hasOwnProperty(p) || (exports[p] = m[p]);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export(require("./NetUtils"));
    __export(require("./NetMessageQueue"));
    __export(require("./NetConnection"));
    __export(require("./NetManager"));
    __export(require("./NetComponent"));
    __export(require("./NetPlayer"));
    cc._RF.pop();
  }, {
    "./NetComponent": "NetComponent",
    "./NetConnection": "NetConnection",
    "./NetManager": "NetManager",
    "./NetMessageQueue": "NetMessageQueue",
    "./NetPlayer": "NetPlayer",
    "./NetUtils": "NetUtils"
  } ],
  NetPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ceaaeMTfN9NuJcH5kFPjupE", "NetPlayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = this && this.__assign || Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
      }
      return t;
    };
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("./NetModules");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NetPlayer = function(_super) {
      __extends(NetPlayer, _super);
      function NetPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLocalPlayer = false;
        _this.lasMoveSeq = 0;
        _this._pendingMoves = [];
        _this._moves = [];
        return _this;
      }
      NetPlayer.prototype.start = function() {
        _super.prototype.start.call(this);
        this.isLocalPlayer && (this.interpolate = false);
      };
      NetPlayer.prototype.playerMove = function(move) {
        if (this.isLocalPlayer) {
          this.syncMove(move);
          this._pendingMoves.push(move);
          var pos = this.applyMove(move);
          this.node.setPosition(pos);
        }
      };
      NetPlayer.prototype.playerAction = function(action) {
        this.isLocalPlayer && (GAME_SERVER ? this.applyAction(action) : this.syncAction(action));
      };
      NetPlayer.prototype.applyServerData = function(data) {
        _super.prototype.applyServerData.call(this, data);
        if (this.isLocalPlayer) {
          var pos = cc.v2(this._lastStatePos);
          var i = 0;
          while (i < this._pendingMoves.length) {
            var move = this._pendingMoves[i];
            if (move.seq <= this.lasMoveSeq) this._pendingMoves.splice(i, 1); else {
              pos = this.applyMove(move, pos);
              i++;
            }
          }
          this.node.setPosition(pos);
        }
      };
      NetPlayer.prototype.applyPlayerMove = function(move) {
        this._moves.push(move);
      };
      NetPlayer.prototype.captureData = function() {
        var data;
        if (this.isLocalPlayer) data = _super.prototype.captureData.call(this); else {
          var current = this.node.position;
          this._statePos = this._statePos || current;
          this.node.setPosition(this._statePos);
          data = _super.prototype.captureData.call(this);
          this.node.setPosition(current);
        }
        return data;
      };
      NetPlayer.prototype.isSync = function() {
        return Date.now() - this.lastTimeSync < 12e3;
      };
      NetPlayer.prototype.update = function(dt) {
        var _this = this;
        _super.prototype.update.call(this, dt);
        if (GAME_SERVER) {
          if (this.interpolate && !CC_SERVER && this._posBuffer.length > 0) {
            var pos = this._posBuffer.shift().pos;
            this.node.setPosition(pos);
          }
          if (this._moves.length > 0) {
            this._moves.sort(function(a, b) {
              return a.seq - b.seq;
            });
            var pos_1;
            this._posBuffer.length > 0 && (pos_1 = this._posBuffer[this._posBuffer.length - 1].pos);
            this._moves.forEach(function(move) {
              _this.lasMoveSeq = move.seq;
              pos_1 = _this.applyMove(move, pos_1);
              _this._posBuffer.push({
                time: 0,
                pos: pos_1
              });
            });
            this._statePos = pos_1;
            this._moves = [];
          }
        }
      };
      NetPlayer.prototype.syncMove = function(move) {
        GAME_SERVER || NetModules_1.NetManager.instance.messageQueue.push({
          move: __assign({}, move, {
            id: this.id
          })
        });
      };
      NetPlayer.prototype.syncAction = function(action) {
        GAME_SERVER || NetModules_1.NetManager.instance.messageQueue.push({
          act: __assign({}, action, {
            id: this.id
          })
        });
      };
      __decorate([ NetModules_1.SyncVar() ], NetPlayer.prototype, "lasMoveSeq", void 0);
      __decorate([ NetModules_1.ClientOnly ], NetPlayer.prototype, "applyServerData", null);
      __decorate([ NetModules_1.ServerOnly ], NetPlayer.prototype, "applyPlayerMove", null);
      __decorate([ NetModules_1.ClientOnly ], NetPlayer.prototype, "syncMove", null);
      __decorate([ NetModules_1.ClientOnly ], NetPlayer.prototype, "syncAction", null);
      NetPlayer = __decorate([ ccclass ], NetPlayer);
      return NetPlayer;
    }(NetModules_1.NetComponent);
    exports.NetPlayer = NetPlayer;
    cc._RF.pop();
  }, {
    "./NetModules": "NetModules"
  } ],
  NetUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4f683dqZX9LSrleD53PAsQp", "NetUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShortId = function() {
      function ShortId() {}
      ShortId.generate = function() {
        var id = "";
        for (var i = 0; i < 6; i++) id += this.ALPHABET.charAt(Math.floor(Math.random() * this.ALPHABET.length));
        return id;
      };
      ShortId.ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return ShortId;
    }();
    exports.ShortId = ShortId;
    function mergeDeep() {
      var objects = [];
      for (var _i = 0; _i < arguments.length; _i++) objects[_i] = arguments[_i];
      var isObject = function(obj) {
        return obj && "object" === typeof obj;
      };
      return objects.reduce(function(prev, obj) {
        Object.keys(obj).forEach(function(key) {
          var pVal = prev[key];
          var oVal = obj[key];
          Array.isArray(pVal) && Array.isArray(oVal) ? prev[key] = pVal.concat.apply(pVal, oVal) : isObject(pVal) && isObject(oVal) ? prev[key] = mergeDeep(pVal, oVal) : prev[key] = oVal;
        });
        return prev;
      }, {});
    }
    exports.mergeDeep = mergeDeep;
    function compareObj(x, y) {
      if (x === y) return true;
      if (!(x instanceof Object) || !(y instanceof Object)) return false;
      for (var p in x) {
        if (!x.hasOwnProperty(p)) continue;
        if (!y.hasOwnProperty(p)) return false;
        if (x[p] === y[p]) continue;
        if (!compareObj(x[p], y[p])) return false;
      }
      for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
      return true;
    }
    exports.compareObj = compareObj;
    function vec2Round(x, y) {
      if ("object" === typeof x) return cc.v2(Math.round(x.x), Math.round(x.y));
      return cc.v2(Math.round(x), Math.round(y));
    }
    exports.vec2Round = vec2Round;
    cc._RF.pop();
  }, {} ],
  RichTextLocalized: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7eff8OjwNOL6lnQdtt4Djg", "RichTextLocalized");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LabelLocalized_1 = require("./LabelLocalized");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    var RichTextLocalized = function(_super) {
      __extends(RichTextLocalized, _super);
      function RichTextLocalized() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RichTextLocalized.prototype.onLoad = function() {
        this.label = this.getComponent(cc.RichText);
        this.updateLabel();
      };
      RichTextLocalized.prototype.updateLabel = function() {
        null == this.label && (this.label = this.getComponent(cc.RichText));
        _super.prototype.updateLabel.call(this);
      };
      RichTextLocalized = __decorate([ ccclass, requireComponent(cc.RichText), menu("i18n:MAIN_MENU.component.renderers/RichTextLocalized"), executeInEditMode ], RichTextLocalized);
      return RichTextLocalized;
    }(LabelLocalized_1.default);
    exports.default = RichTextLocalized;
    cc._RF.pop();
  }, {
    "./LabelLocalized": "LabelLocalized"
  } ],
  bomb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5683canS41OK4ALimSoUbh7", "bomb");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("../libs/multiplayer/components/NetModules");
    var path_visual_1 = require("./path-visual");
    var global_var_1 = require("../core/global-var");
    var player_1 = require("./player");
    var BombState;
    (function(BombState) {
      BombState[BombState["NONE"] = -1] = "NONE";
      BombState[BombState["DROP"] = 0] = "DROP";
      BombState[BombState["IDLE"] = 1] = "IDLE";
      BombState[BombState["BIND"] = 2] = "BIND";
      BombState[BombState["THROW"] = 3] = "THROW";
    })(BombState = exports.BombState || (exports.BombState = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bomb = function(_super) {
      __extends(Bomb, _super);
      function Bomb() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.speed = 400;
        _this.dropSpeed = 200;
        _this.exploreTime = 5;
        _this.mask = null;
        _this.exploreRange = null;
        _this.state = BombState.NONE;
        _this.movePath = new path_visual_1.BezierPath();
        _this.throwTime = 0;
        _this.throwTimeCount = 0;
        _this.maskHeight = 0;
        _this.exploreTimeCount = 0;
        _this.cprogress = 0;
        _this.explored = false;
        return _this;
      }
      Bomb_1 = Bomb;
      Bomb.prototype.onLoad = function() {
        this.exploreRange.active = false;
        this.exploreRange.scale = 1;
        this.maskHeight = this.mask.height;
        this.mask.height = 0;
        this.maxRange = global_var_1.default.instance.get("maxFireRange");
      };
      Bomb.prototype.start = function() {
        var colliders = this.getComponents(cc.Collider);
        if (GAME_SERVER) {
          this.state = BombState.DROP;
          colliders.forEach(function(col) {
            1 == col.tag ? col.enabled = false : null;
          });
        } else colliders.forEach(function(col) {
          return col.enabled = false;
        });
      };
      Bomb.prototype.onStateChange = function() {
        if (this.state == BombState.DROP) ; else if (this.state == BombState.THROW) {
          path_visual_1.default.getBezierPath(this.node.position, this.throwVector, this.maxRange, this.movePath);
          var s = this.movePath.endPos.sub(this.movePath.startPos).mag();
          this.throwTime = s / this.speed;
          this.throwTimeCount = 0;
        }
      };
      Bomb.prototype.onBindToPlayer = function() {
        this.bindId ? this.binPlayer = NetModules_1.NetManager.instance.getNetObject(this.bindId).getComponent(player_1.default) : this.binPlayer = null;
      };
      Bomb.prototype.setDropTarget = function(dropPos) {
        this.dropTarget = dropPos;
      };
      Bomb.prototype.startThrow = function(val) {
        path_visual_1.default.getBezierPath(this.node.position, this.throwVector, this.maxRange, this.movePath);
        var s = this.movePath.endPos.sub(this.movePath.startPos).mag();
        this.throwTime = s / this.speed;
        this.throwTimeCount = 0;
      };
      Bomb.prototype.setBindPlayer = function(playerId) {
        if (playerId) {
          this.state = BombState.BIND;
          this.bindId = playerId;
        } else {
          this.state = BombState.IDLE;
          this.bindId = "";
        }
      };
      Bomb.prototype.setThrowDirection = function(control) {
        this.throwVector = control;
        this.state = BombState.THROW;
      };
      Bomb.prototype.canCapture = function() {
        return this.state == BombState.DROP || this.state == BombState.IDLE;
      };
      Bomb.prototype.update = function(dt) {
        var _this = this;
        if (!this.explored) {
          if (this.state == BombState.DROP) {
            var dy = this.dropSpeed * dt;
            this.node.y -= dy;
            if (this.node.y < this.dropTarget.y) {
              this.node.y = this.dropTarget.y;
              GAME_SERVER && (this.state = BombState.IDLE);
            }
          }
          if (this.state > BombState.DROP) {
            this.exploreTimeCount += dt;
            GAME_SERVER && (this.progress = Math.round(this.exploreTimeCount / this.exploreTime * 100) / 100);
            this.cprogress = Math.round(this.exploreTimeCount / this.exploreTime * 100) / 100;
            if (Math.abs(this.cprogress - this.progress) > .1) {
              this.cprogress = this.progress;
              this.exploreTimeCount = this.cprogress * this.exploreTime;
            }
            this.mask.height = this.cprogress * this.maskHeight;
            if (this.cprogress >= 1) {
              this.explored = true;
              this.exploreRange.active = true;
              this.exploreRange.runAction(cc.sequence(cc.scaleTo(.35, 14), cc.callFunc(function() {
                var colliders = _this.getComponents(cc.Collider);
                colliders.forEach(function(collid) {
                  0 == collid.tag ? collid.enabled = false : null;
                  1 == collid.tag ? collid.enabled = true : null;
                });
                _this.binPlayer && _this.binPlayer.onBindFireExplore(_this.getComponent(NetModules_1.NetComponent).id);
              }), cc.delayTime(.2), cc.callFunc(function() {
                _this.node.removeFromParent();
              })));
            }
          }
          this.state == BombState.BIND && this.binPlayer && this.node.setPosition(this.binPlayer.node.x, this.binPlayer.node.y + 14);
          if (this.state == BombState.THROW && this.throwTime > 0) {
            this.throwTimeCount += dt;
            this.throwTimeCount > this.throwTime && (this.throwTimeCount = this.throwTime);
            var p = this.movePath.getPoint(this.throwTimeCount / this.throwTime);
            this.node.setPosition(p);
            if (this.throwTimeCount >= this.throwTime) {
              this.throwTime = 0;
              GAME_SERVER && (this.state = BombState.IDLE);
            }
          }
        }
      };
      var Bomb_1;
      __decorate([ property() ], Bomb.prototype, "speed", void 0);
      __decorate([ property() ], Bomb.prototype, "dropSpeed", void 0);
      __decorate([ property() ], Bomb.prototype, "exploreTime", void 0);
      __decorate([ property(cc.Node) ], Bomb.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], Bomb.prototype, "exploreRange", void 0);
      __decorate([ NetModules_1.SyncVar(Bomb_1.prototype.onStateChange) ], Bomb.prototype, "state", void 0);
      __decorate([ NetModules_1.SyncVar() ], Bomb.prototype, "throwVector", void 0);
      __decorate([ NetModules_1.SyncVar() ], Bomb.prototype, "progress", void 0);
      __decorate([ NetModules_1.SyncVar() ], Bomb.prototype, "dropTarget", void 0);
      __decorate([ NetModules_1.SyncVar(Bomb_1.prototype.onBindToPlayer) ], Bomb.prototype, "bindId", void 0);
      Bomb = Bomb_1 = __decorate([ ccclass ], Bomb);
      return Bomb;
    }(cc.Component);
    exports.default = Bomb;
    cc._RF.pop();
  }, {
    "../core/global-var": "global-var",
    "../libs/multiplayer/components/NetModules": "NetModules",
    "./path-visual": "path-visual",
    "./player": "player"
  } ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c40dbVkwulCgaxnZg5s0ilJ", "config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config = function() {
      function Config() {}
      Config.PROJECT_ID = "pol-battle";
      Config.PROJECT_VERSION = "1.0.0";
      return Config;
    }();
    exports.default = Config;
    cc._RF.pop();
  }, {} ],
  decodeAsync: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3109a0MiU1IY5ZQ7aBXqeAv", "decodeAsync");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Decoder_1 = require("./Decoder");
    var decode_1 = require("./decode");
    var stream_1 = require("./utils/stream");
    exports.defaultDecodeAsyncOptions = decode_1.defaultDecodeOptions;
    function decodeAsync(streamLike, options) {
      void 0 === options && (options = decode_1.defaultDecodeOptions);
      return __awaiter(this, void 0, Promise, function() {
        var stream, decoder;
        return __generator(this, function(_a) {
          stream = stream_1.ensureAsyncIterabe(streamLike);
          decoder = new Decoder_1.Decoder(options.extensionCodec, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
          return [ 2, decoder.decodeOneAsync(stream) ];
        });
      });
    }
    exports.decodeAsync = decodeAsync;
    function decodeArrayStream(streamLike, options) {
      void 0 === options && (options = decode_1.defaultDecodeOptions);
      var stream = stream_1.ensureAsyncIterabe(streamLike);
      var decoder = new Decoder_1.Decoder(options.extensionCodec, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
      return decoder.decodeArrayStream(stream);
    }
    exports.decodeArrayStream = decodeArrayStream;
    function decodeStream(streamLike, options) {
      void 0 === options && (options = decode_1.defaultDecodeOptions);
      var stream = stream_1.ensureAsyncIterabe(streamLike);
      var decoder = new Decoder_1.Decoder(options.extensionCodec, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
      return decoder.decodeStream(stream);
    }
    exports.decodeStream = decodeStream;
    cc._RF.pop();
  }, {
    "./Decoder": "Decoder",
    "./decode": "decode",
    "./utils/stream": "stream"
  } ],
  decode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f237bPI7KhFJpmtga+fFcCi", "decode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Decoder_1 = require("./Decoder");
    exports.defaultDecodeOptions = {};
    function decode(buffer, options) {
      void 0 === options && (options = exports.defaultDecodeOptions);
      var decoder = new Decoder_1.Decoder(options.extensionCodec, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength, options.mapKeys);
      decoder.setBuffer(buffer);
      return decoder.decodeOneSync();
    }
    exports.decode = decode;
    cc._RF.pop();
  }, {
    "./Decoder": "Decoder"
  } ],
  encode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e035b+GR4hNS6Ae7Et5S6S4", "encode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Encoder_1 = require("./Encoder");
    var defaultEncodeOptions = {};
    function encode(value, options) {
      void 0 === options && (options = defaultEncodeOptions);
      var encoder = new Encoder_1.Encoder(options.extensionCodec, options.maxDepth, options.initialBufferSize, options.sortKeys, options.mapKeys);
      encoder.encode(value, 1);
      return encoder.getUint8Array();
    }
    exports.encode = encode;
    cc._RF.pop();
  }, {
    "./Encoder": "Encoder"
  } ],
  "event-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f534eiXgTxDaIAsHCAjGshJ", "event-manager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Listenner = function() {
      function Listenner() {
        this.target = null;
        this.callback = null;
        this.priority = 0;
        this.excuteOnce = false;
      }
      return Listenner;
    }();
    var EventManager = function() {
      function EventManager() {
        this.eventListenners = {};
      }
      Object.defineProperty(EventManager, "instance", {
        get: function() {
          null == EventManager._instance && (EventManager._instance = new EventManager());
          return EventManager._instance;
        },
        enumerable: true,
        configurable: true
      });
      EventManager.prototype.register = function(event, callback, target, priority, excuteOnce) {
        void 0 === target && (target = null);
        void 0 === priority && (priority = 0);
        void 0 === excuteOnce && (excuteOnce = false);
        var listenner = {
          target: target,
          callback: callback,
          priority: priority,
          excuteOnce: excuteOnce
        };
        if (this.eventListenners[event]) this.eventListenners[event].push(listenner); else {
          this.eventListenners[event] = [];
          this.eventListenners[event].push(listenner);
        }
        this.eventListenners[event].sort(function(a, b) {
          return b.priority - a.priority;
        });
        return callback;
      };
      EventManager.prototype.registerOnce = function(event, callback, target, priority) {
        void 0 === target && (target = null);
        void 0 === priority && (priority = 0);
        this.register(event, callback, target, priority, true);
      };
      EventManager.prototype.unregister = function(event, callback, target) {
        void 0 === target && (target = null);
        if (this.eventListenners[event]) {
          var toRemove_1 = [];
          for (var i = 0; i < this.eventListenners[event].length; i++) {
            var listenner = this.eventListenners[event][i];
            null == callback ? listenner.target == target && toRemove_1.push(i) : listenner.target == target && listenner.callback == callback && toRemove_1.push(i);
          }
          this.eventListenners[event] = this.eventListenners[event].filter(function(val, id) {
            return -1 === toRemove_1.indexOf(id);
          });
          0 == this.eventListenners[event].length && delete this.eventListenners[event];
        }
      };
      EventManager.prototype.unregisterTarget = function(target) {
        var _loop_1 = function(event) {
          var toRemove = [];
          for (var i = 0; i < this_1.eventListenners[event].length; i++) {
            var listenner = this_1.eventListenners[event][i];
            listenner.target == target && toRemove.push(i);
          }
          this_1.eventListenners[event] = this_1.eventListenners[event].filter(function(val, id) {
            return -1 === toRemove.indexOf(id);
          });
          0 == this_1.eventListenners[event].length && delete this_1.eventListenners[event];
        };
        var this_1 = this;
        for (var event in this.eventListenners) _loop_1(event);
      };
      EventManager.prototype.remove = function(event) {
        this.eventListenners[event] && delete this.eventListenners[event];
      };
      EventManager.prototype.dispatch = function(event) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        if (this.eventListenners[event]) {
          var excuteOnce_1 = [];
          this.eventListenners[event].forEach(function(listenner) {
            listenner.target ? listenner.callback.call(listenner.target, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]) : listenner.callback(params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]);
            true == listenner.excuteOnce && excuteOnce_1.push(listenner);
          });
          excuteOnce_1.forEach(function(listenner) {
            _this.unregister(event, listenner.callback, listenner.target);
          });
        }
      };
      EventManager._instance = null;
      return EventManager;
    }();
    exports.default = EventManager;
    cc._RF.pop();
  }, {} ],
  "fire-spawner": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1110hD8uZK/bDL8USBjADW", "fire-spawner");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("../libs/multiplayer/components/NetModules");
    var bomb_1 = require("./bomb");
    var event_manager_1 = require("../core/event-manager");
    var game_net_1 = require("./game-net");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BombSpawner = function(_super) {
      __extends(BombSpawner, _super);
      function BombSpawner() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.delayActive = 3;
        _this.spawnRate = .5;
        _this.firePrefab = null;
        return _this;
      }
      BombSpawner.prototype.start = function() {
        GAME_SERVER && this.scheduleOnce(this.activeSpawn.bind(this), this.delayActive);
        event_manager_1.default.instance.register(game_net_1.default.EVT_GAME_OVER, this.onGameOver, this);
      };
      BombSpawner.prototype.activeSpawn = function() {
        this.spawn();
        this.schedule(this.spawn, 1 / this.spawnRate);
      };
      BombSpawner.prototype.spawn = function() {
        var x = 30 + 1220 * Math.random();
        var targetY = 30 + 660 * Math.random();
        var bomb = NetModules_1.NetManager.instance.spawnObject(this.firePrefab, cc.v2(x, 750));
        bomb.getComponent(bomb_1.default).setDropTarget(NetModules_1.vec2Round(x, targetY));
      };
      BombSpawner.prototype.onGameOver = function() {
        this.unschedule(this.spawn);
      };
      BombSpawner.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      __decorate([ property() ], BombSpawner.prototype, "delayActive", void 0);
      __decorate([ property() ], BombSpawner.prototype, "spawnRate", void 0);
      __decorate([ property(cc.Prefab) ], BombSpawner.prototype, "firePrefab", void 0);
      BombSpawner = __decorate([ ccclass ], BombSpawner);
      return BombSpawner;
    }(cc.Component);
    exports.default = BombSpawner;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../libs/multiplayer/components/NetModules": "NetModules",
    "./bomb": "bomb",
    "./game-net": "game-net"
  } ],
  "game-net": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6cfao6BLFO8o37xoD1nxS2", "game-net");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("../libs/multiplayer/components/NetModules");
    var event_manager_1 = require("../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameNet = function(_super) {
      __extends(GameNet, _super);
      function GameNet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameTime = 180;
        _this.gameOver = false;
        return _this;
      }
      GameNet_1 = GameNet;
      Object.defineProperty(GameNet.prototype, "time", {
        get: function() {
          return this.stime;
        },
        enumerable: true,
        configurable: true
      });
      GameNet.prototype.start = function() {
        if (GAME_SERVER) {
          this.stime = this.gameTime;
          this.ltime = this.stime;
          this.score1 = 0;
          this.score2 = 0;
        }
      };
      GameNet.prototype.update = function(dt) {
        if (this.gameOver) return;
        if (GAME_SERVER && !this.gameOver) {
          this.ltime -= dt;
          this.stime = Math.round(this.ltime);
          if (this.ltime < 0) {
            this.stime = 0;
            this.gameOver = true;
          }
        }
        if (0 == this.stime) {
          this.gameOver = true;
          event_manager_1.default.instance.dispatch(GameNet_1.EVT_GAME_OVER);
        }
      };
      var GameNet_1;
      GameNet.EVT_GAME_OVER = "gnend";
      __decorate([ property() ], GameNet.prototype, "gameTime", void 0);
      __decorate([ NetModules_1.SyncVar() ], GameNet.prototype, "stime", void 0);
      __decorate([ NetModules_1.SyncVar() ], GameNet.prototype, "score1", void 0);
      __decorate([ NetModules_1.SyncVar() ], GameNet.prototype, "score2", void 0);
      GameNet = GameNet_1 = __decorate([ ccclass ], GameNet);
      return GameNet;
    }(cc.Component);
    exports.default = GameNet;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../libs/multiplayer/components/NetModules": "NetModules"
  } ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "588f7csCUlCcIdWak4fdVB/", "game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var loader_1 = require("../core/loader");
    var player_1 = require("./player");
    var NetModules_1 = require("../libs/multiplayer/components/NetModules");
    var global_var_1 = require("../core/global-var");
    var popup_1 = require("../core/popup");
    var game_net_1 = require("./game-net");
    var utils_1 = require("../utils");
    var event_manager_1 = require("../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var customMapKeys = [ "stime", "score1", "score2", "lasMoveSeq", "face", "team", "health", "bindFireId", "strength", "speed", "state", "throwVector", "progress", "dropTarget", "bindId", "time", "dir" ];
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.root = null;
        _this.playerPrefab = null;
        _this.firePrefab = null;
        _this.gameSyncPrefab = null;
        _this.gameTime = null;
        _this.score1 = null;
        _this.score2 = null;
        _this.deathTime = null;
        _this.gameOverMsg = null;
        _this.team1Pos = [];
        _this.team2Pos = [];
        _this.gameSync = null;
        return _this;
      }
      Game_1 = Game;
      Game.prototype.onLoad = function() {
        if (!loader_1.default.loaded) return;
        Game_1.instance = this;
        cc.director.getCollisionManager().enabled = true;
        this.deathTime.node.parent.active = false;
        this.gameOverMsg.node.parent.active = false;
      };
      Game.prototype.start = function() {
        if (!loader_1.default.loaded) return;
        cc.log("Is server: " + GAME_SERVER);
        var connection = global_var_1.default.instance.get("connection", true);
        if (!connection) {
          cc.director.loadScene("main-menu");
          return;
        }
        event_manager_1.default.instance.register(player_1.default.EVT_DEATH_TIME, this.onPlayerDeathTimeUpdate, this);
        event_manager_1.default.instance.register(player_1.default.EVT_REVIVE, this.onPlayerRevive, this);
        event_manager_1.default.instance.register(player_1.default.EVT_DEATH, this.onPlayerDeath, this);
        event_manager_1.default.instance.register(game_net_1.default.EVT_GAME_OVER, this.onGameOver, this);
        NetModules_1.NetManager.instance.setNetObjectChangedListener(this.onNetObjectChanged.bind(this));
        NetModules_1.NetManager.instance.init(connection);
        NetModules_1.NetManager.instance.setEventListener(this.onNetEvent.bind(this));
        NetModules_1.NetManager.instance.addMapKeys(customMapKeys);
        GAME_SERVER && NetModules_1.NetManager.instance.spawnObject(this.gameSyncPrefab);
        this.createPlayer();
      };
      Game.prototype.update = function(dt) {
        if (this.gameSync) {
          var time = utils_1.Utils.time2String(this.gameSync.time);
          this.gameTime.string = time;
          this.gameSync.score1 && (this.score1.string = this.gameSync.score1.toString());
          this.gameSync.score2 && (this.score2.string = this.gameSync.score2.toString());
        }
      };
      Game.prototype.onNetEvent = function(event, data) {
        if (event == NetModules_1.NetEvent.DISCONNECT && !this.gameSync.gameOver) {
          cc.log("player disconnected: " + data.id);
          if (GAME_SERVER) {
            NetModules_1.NetManager.instance.getNetObject(data.id).node.removeFromParent();
            1 == NetModules_1.NetManager.instance.room.players.length ? popup_1.default.instance.showInfoPopup("All player quit!!", function() {
              cc.director.loadScene("main-menu");
            }) : popup_1.default.instance.showNotify("[" + data.name + "] disconnted");
          } else popup_1.default.instance.showInfoPopup("Disconnected to server!", function() {
            cc.director.loadScene("main-menu");
          });
        }
      };
      Game.prototype.onNetObjectChanged = function(object, spawn) {
        if (spawn) {
          this.gameSync || (this.gameSync = object.getComponent(game_net_1.default));
          this.root.addChild(object.node);
        } else {
          object.getComponent(game_net_1.default) && (this.gameSync = null);
          object.node.removeFromParent();
        }
      };
      Game.prototype.createPlayer = function() {
        var _this = this;
        if (GAME_SERVER) {
          var room = NetModules_1.NetManager.instance.room;
          if (room.players[0].data && room.players[0].data.team) room.players.forEach(function(player, idx) {
            player.team = player.data.team;
          }); else {
            var half_1 = room.players.length / 2;
            room.players.forEach(function(player, idx) {
              player.team = idx < half_1 ? 1 : 2;
            });
          }
          var team1Idx_1 = 0, team2Idx_1 = 0;
          NetModules_1.NetManager.instance.room.players.forEach(function(playerInfo) {
            var playerNode = NetModules_1.NetManager.instance.spawnObject(_this.playerPrefab, null, playerInfo.id);
            var pos;
            pos = 1 == playerInfo.team ? _this.team1Pos[team1Idx_1++].position : _this.team2Pos[team2Idx_1++].position;
            playerNode.setPosition(pos);
            var player = playerNode.getComponent(player_1.default);
            player.team = playerInfo.team;
          });
        }
      };
      Game.prototype.showDeathMessage = function(deathTime) {
        this.deathTime.node.parent.active = true;
        this.deathTime.string = deathTime.toString();
      };
      Game.prototype.hideDeathMessage = function() {
        this.deathTime.node.parent.active = false;
      };
      Game.prototype.onPlayerDeathTimeUpdate = function(player, time) {
        player.netPlayer.isLocalPlayer && this.showDeathMessage(time);
      };
      Game.prototype.onPlayerRevive = function(player) {
        player.netPlayer.isLocalPlayer && this.hideDeathMessage();
      };
      Game.prototype.onPlayerDeath = function(player) {
        GAME_SERVER && (1 == player.team ? this.gameSync.score2 += 1 : 2 == player.team && (this.gameSync.score1 += 1));
      };
      Game.prototype.onGameOver = function() {
        var localPlayer = NetModules_1.NetManager.instance.getLocalPlayer().getComponent(player_1.default);
        var teamWin = this.gameSync.score1 > this.gameSync.score2 ? 1 : this.gameSync.score1 < this.gameSync.score2 ? 2 : 0;
        if (0 == teamWin) {
          this.gameOverMsg.node.parent.active = true;
          this.gameOverMsg.string = "RAW";
        } else if (localPlayer.team == teamWin) this.gameOverMsg.node.parent.active = true; else {
          this.gameOverMsg.node.parent.active = true;
          this.gameOverMsg.string = "YOU LOSE";
          this.gameOverMsg.node.color = cc.color(100, 100, 100);
        }
        this.hideDeathMessage();
        localPlayer.enabled = false;
      };
      Game.prototype.onButtonHome = function() {
        cc.director.loadScene("main-menu");
      };
      Game.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      var Game_1;
      __decorate([ property(cc.Node) ], Game.prototype, "root", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "playerPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "firePrefab", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "gameSyncPrefab", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "gameTime", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "score1", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "score2", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "deathTime", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "gameOverMsg", void 0);
      __decorate([ property([ cc.Node ]) ], Game.prototype, "team1Pos", void 0);
      __decorate([ property([ cc.Node ]) ], Game.prototype, "team2Pos", void 0);
      Game = Game_1 = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../core/global-var": "global-var",
    "../core/loader": "loader",
    "../core/popup": "popup",
    "../libs/multiplayer/components/NetModules": "NetModules",
    "../utils": "utils",
    "./game-net": "game-net",
    "./player": "player"
  } ],
  "global-var": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4c37rL56ROQ6roJFidboDa", "global-var");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GlobalVar = function() {
      function GlobalVar() {
        this._vars = {};
      }
      Object.defineProperty(GlobalVar, "instance", {
        get: function() {
          GlobalVar._instance || (GlobalVar._instance = new GlobalVar());
          return GlobalVar._instance;
        },
        enumerable: true,
        configurable: true
      });
      GlobalVar.prototype.set = function(varName, value) {
        this._vars[varName] = value;
      };
      GlobalVar.prototype.get = function(varName, deleteAfterRead) {
        void 0 === deleteAfterRead && (deleteAfterRead = false);
        var data = this._vars[varName];
        data && deleteAfterRead && delete this._vars[varName];
        return data;
      };
      return GlobalVar;
    }();
    exports.default = GlobalVar;
    cc._RF.pop();
  }, {} ],
  i18n: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb41b4cbx9AcpIzAaOE+6ZV", "i18n");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    var Polyglot = require("polyglot");
    var supported_languages = window.i18n.supported_languages || [];
    var saveLanguage = cc.sys.localStorage.getItem("__gamesave-language");
    var lang = "";
    if (null == saveLanguage) {
      lang = cc.sys.language;
      if (supported_languages.length > 0 && -1 == supported_languages.indexOf(lang)) {
        lang = supported_languages[0];
        true;
        cc.sys.localStorage.setItem("__gamesave-language", lang);
      }
    } else lang = saveLanguage;
    var data = window.i18n.languages[lang] || {};
    var polyglot = new Polyglot({
      phrases: data,
      allowMissing: true
    });
    module.exports = {
      init: function init(language) {
        if (!window.i18n.languages[language]) {
          console.warn("Language is not support: " + language);
          return false;
        }
        (true, window.i18n.languages[language]) && cc.sys.localStorage.setItem("__gamesave-language", language);
        lang = language;
        data = window.i18n.languages[lang] || {};
        polyglot.replace(data);
        return true;
      },
      getSaveLang: function getSaveLang() {
        return cc.sys.localStorage.getItem("__gamesave-language");
      },
      t: function t(key, opt) {
        return polyglot.t(key, opt);
      }
    };
    cc._RF.pop();
  }, {
    polyglot: "polyglot"
  } ],
  index: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b50e1JZGRD3J/2RyA6goJI", "index");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var encode_1 = require("./encode");
    exports.encode = encode_1.encode;
    var decode_1 = require("./decode");
    exports.decode = decode_1.decode;
    var decodeAsync_1 = require("./decodeAsync");
    exports.decodeAsync = decodeAsync_1.decodeAsync;
    exports.decodeArrayStream = decodeAsync_1.decodeArrayStream;
    exports.decodeStream = decodeAsync_1.decodeStream;
    var Decoder_1 = require("./Decoder");
    exports.Decoder = Decoder_1.Decoder;
    var Encoder_1 = require("./Encoder");
    exports.Encoder = Encoder_1.Encoder;
    var ExtensionCodec_1 = require("./ExtensionCodec");
    exports.ExtensionCodec = ExtensionCodec_1.ExtensionCodec;
    exports.ExtensionCodecType = ExtensionCodec_1.ExtensionCodecType;
    exports.ExtensionDecoderType = ExtensionCodec_1.ExtensionDecoderType;
    exports.ExtensionEncoderType = ExtensionCodec_1.ExtensionEncoderType;
    var ExtData_1 = require("./ExtData");
    exports.ExtData = ExtData_1.ExtData;
    var timestamp_1 = require("./timestamp");
    exports.EXT_TIMESTAMP = timestamp_1.EXT_TIMESTAMP;
    exports.encodeDateToTimeSpec = timestamp_1.encodeDateToTimeSpec;
    exports.encodeTimeSpecToTimestamp = timestamp_1.encodeTimeSpecToTimestamp;
    exports.decodeTimestampToTimeSpec = timestamp_1.decodeTimestampToTimeSpec;
    exports.encodeTimestampExtension = timestamp_1.encodeTimestampExtension;
    exports.decodeTimestampExtension = timestamp_1.decodeTimestampExtension;
    cc._RF.pop();
  }, {
    "./Decoder": "Decoder",
    "./Encoder": "Encoder",
    "./ExtData": "ExtData",
    "./ExtensionCodec": "ExtensionCodec",
    "./decode": "decode",
    "./decodeAsync": "decodeAsync",
    "./encode": "encode",
    "./timestamp": "timestamp"
  } ],
  "input-keyboard": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "369a0/J34ZJH491Vd2knpx4", "input-keyboard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var input_1 = require("./input");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InputKeyboard = function(_super) {
      __extends(InputKeyboard, _super);
      function InputKeyboard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.keys = {};
        _this.preAngle = -1;
        return _this;
      }
      InputKeyboard.prototype.start = function() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      };
      InputKeyboard.prototype.update = function() {
        this.updateMove();
      };
      InputKeyboard.prototype.onKeyUp = function(event) {
        var code = event.keyCode;
        code == cc.macro.KEY.up ? code = cc.macro.KEY.w : null;
        code == cc.macro.KEY.down ? code = cc.macro.KEY.s : null;
        code == cc.macro.KEY.left ? code = cc.macro.KEY.a : null;
        code == cc.macro.KEY.right ? code = cc.macro.KEY.d : null;
        this.keys[code] = 0;
      };
      InputKeyboard.prototype.onKeyDown = function(event) {
        var code = event.keyCode;
        code == cc.macro.KEY.up ? code = cc.macro.KEY.w : null;
        code == cc.macro.KEY.down ? code = cc.macro.KEY.s : null;
        code == cc.macro.KEY.left ? code = cc.macro.KEY.a : null;
        code == cc.macro.KEY.right ? code = cc.macro.KEY.d : null;
        this.keys[code] = 1;
        code == cc.macro.KEY.space && input_1.default.instance.fireAction(false, null);
      };
      InputKeyboard.prototype.updateMove = function() {
        var angle = this.getMoveDirection();
        if (angle > -1) {
          this.preAngle = angle;
          input_1.default.instance.setMoveDirection(angle);
        } else if (-1 != this.preAngle) {
          input_1.default.instance.setMoveDirection(-1);
          this.preAngle = -1;
        }
      };
      InputKeyboard.prototype.getMoveDirection = function() {
        var moveDirection = -1;
        this.keys[cc.macro.KEY.w] ? moveDirection = this.keys[cc.macro.KEY.a] ? 135 : this.keys[cc.macro.KEY.d] ? 45 : 90 : this.keys[cc.macro.KEY.d] ? moveDirection = this.keys[cc.macro.KEY.w] ? 45 : this.keys[cc.macro.KEY.s] ? 315 : 0 : this.keys[cc.macro.KEY.s] ? moveDirection = this.keys[cc.macro.KEY.d] ? 315 : this.keys[cc.macro.KEY.a] ? 225 : 270 : this.keys[cc.macro.KEY.a] && (moveDirection = this.keys[cc.macro.KEY.w] ? 135 : this.keys[cc.macro.KEY.s] ? 225 : 180);
        return moveDirection;
      };
      InputKeyboard = __decorate([ ccclass ], InputKeyboard);
      return InputKeyboard;
    }(cc.Component);
    exports.default = InputKeyboard;
    cc._RF.pop();
  }, {
    "./input": "input"
  } ],
  "input-touch": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cbeekttxxB3Ib7WIq9fOXf", "input-touch");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var move_around_control_1 = require("../move-around-control");
    var input_1 = require("./input");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InputTouch = function(_super) {
      __extends(InputTouch, _super);
      function InputTouch() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moveControl = null;
        _this.fireControl = null;
        _this.preAngle = -1;
        return _this;
      }
      InputTouch.prototype.start = function() {
        this.fireControl.onMoveEnd = this.fireControlRelease.bind(this);
      };
      InputTouch.prototype.update = function() {
        if (this.moveControl) {
          var move = this.moveControl.getMoveDelta();
          if (move) {
            var angle = cc.misc.radiansToDegrees(Math.atan2(move.y, move.x));
            angle < 0 && (angle += 360);
            input_1.default.instance.setMoveDirection(angle);
            this.preAngle = angle;
          } else if (-1 != this.preAngle) {
            input_1.default.instance.setMoveDirection(-1);
            this.preAngle = -1;
          }
        }
        if (this.fireControl) {
          var fire = this.fireControl.getMoveDelta();
          input_1.default.instance.setFireTarget(fire);
        }
      };
      InputTouch.prototype.fireControlRelease = function(cancel, target) {
        input_1.default.instance.fireAction(cancel, target);
      };
      __decorate([ property(move_around_control_1.default) ], InputTouch.prototype, "moveControl", void 0);
      __decorate([ property(move_around_control_1.default) ], InputTouch.prototype, "fireControl", void 0);
      InputTouch = __decorate([ ccclass ], InputTouch);
      return InputTouch;
    }(cc.Component);
    exports.default = InputTouch;
    cc._RF.pop();
  }, {
    "../move-around-control": "move-around-control",
    "./input": "input"
  } ],
  input: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43beadNE/5GVrAprStuVZ6C", "input");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../../core/event-manager");
    var Input = function() {
      function Input() {
        this._moveDir = -1;
        this.moveSeq = 0;
        this.fastSpeedMode = false;
      }
      Object.defineProperty(Input, "instance", {
        get: function() {
          Input._instance || (Input._instance = new Input());
          return Input._instance;
        },
        enumerable: true,
        configurable: true
      });
      Input.prototype.setMoveDirection = function(angleDeg) {
        this._moveDir = Math.round(angleDeg);
      };
      Input.prototype.getMoveData = function() {
        var time = Date.now();
        this.lastMoveTime = this.lastMoveTime || time;
        var dt = time - this.lastMoveTime;
        this.lastMoveTime = time;
        if (this._moveDir >= 0) return {
          time: dt,
          seq: this.moveSeq++,
          dir: this._moveDir,
          speed: 0
        };
        return null;
      };
      Input.prototype.fireAction = function(cancel, target) {
        event_manager_1.default.instance.dispatch(Input.EVT_THROW_FIRE, cancel, target);
      };
      Input.prototype.setFireTarget = function(target) {
        this.fireTarget = target;
      };
      Input.prototype.getFireTarget = function() {
        return this.fireTarget;
      };
      Input.prototype.setFastSpeedMode = function(fast) {
        if (this.fastSpeedMode != fast) {
          this.fastSpeedMode = fast;
          event_manager_1.default.instance.dispatch(Input.EVT_FAST_SPEED, fast);
        }
      };
      Input.EVT_THROW_FIRE = "fire";
      Input.EVT_FAST_SPEED = "fspeed";
      return Input;
    }();
    exports.default = Input;
    cc._RF.pop();
  }, {
    "../../core/event-manager": "event-manager"
  } ],
  int: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01033oRWHJPapW+naIo6jRq", "int");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function setUint64(view, offset, value) {
      var high = value / 4294967296;
      var low = value;
      view.setUint32(offset, high);
      view.setUint32(offset + 4, low);
    }
    exports.setUint64 = setUint64;
    function setInt64(view, offset, value) {
      var high = Math.floor(value / 4294967296);
      var low = value;
      view.setUint32(offset, high);
      view.setUint32(offset + 4, low);
    }
    exports.setInt64 = setInt64;
    function getInt64(view, offset) {
      var high = view.getInt32(offset);
      var low = view.getUint32(offset + 4);
      return 4294967296 * high + low;
    }
    exports.getInt64 = getInt64;
    function getUint64(view, offset) {
      var high = view.getUint32(offset);
      var low = view.getUint32(offset + 4);
      return 4294967296 * high + low;
    }
    exports.getUint64 = getUint64;
    cc._RF.pop();
  }, {} ],
  "join-team": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1ea0GMaKRCcI4fbxQL0XuI", "join-team");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var loader_1 = require("../../../core/loader");
    var global_var_1 = require("../../../core/global-var");
    var matchmaker_control_1 = require("../../multiplayer/matchmaker-control");
    var event_manager_1 = require("../../../core/event-manager");
    var ErrorCode_1 = require("../../../libs/multiplayer/ErrorCode");
    var popup_1 = require("../../../core/popup");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JoinTeam = function(_super) {
      __extends(JoinTeam, _super);
      function JoinTeam() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.teamId = null;
        _this.joinButton = null;
        return _this;
      }
      JoinTeam_1 = JoinTeam;
      JoinTeam.prototype.start = function() {
        if (!loader_1.default.loaded) return;
        this.matcherCtrl = global_var_1.default.instance.get("matcherControl");
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ROOM_JOINED, function(room) {
          cc.log("joined room: " + JSON.stringify(room));
          event_manager_1.default.instance.dispatch(JoinTeam_1.EVT_TEAM_JOINED, room);
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ERROR, function(errorCode) {
          errorCode == ErrorCode_1.MpCode.ROOM_NOT_EXIST ? popup_1.default.instance.showInfoPopup("Team does not exist") : errorCode == ErrorCode_1.MpCode.JOIN_ROOM_FAILED && popup_1.default.instance.showInfoPopup("Can not join room");
        }, this);
      };
      JoinTeam.prototype.onButtonJoin = function() {
        cc.log("join team: " + this.teamId.string);
        this.matcherCtrl.matchmaker.joinRoom(this.teamId.string);
      };
      JoinTeam.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      var JoinTeam_1;
      JoinTeam.EVT_TEAM_JOINED = "team-join";
      __decorate([ property(cc.EditBox) ], JoinTeam.prototype, "teamId", void 0);
      __decorate([ property(cc.Button) ], JoinTeam.prototype, "joinButton", void 0);
      JoinTeam = JoinTeam_1 = __decorate([ ccclass ], JoinTeam);
      return JoinTeam;
    }(cc.Component);
    exports.default = JoinTeam;
    cc._RF.pop();
  }, {
    "../../../core/event-manager": "event-manager",
    "../../../core/global-var": "global-var",
    "../../../core/loader": "loader",
    "../../../core/popup": "popup",
    "../../../libs/multiplayer/ErrorCode": "ErrorCode",
    "../../multiplayer/matchmaker-control": "matchmaker-control"
  } ],
  "live-team-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "376e9wHYUJLAq2qIAVNwmt7", "live-team-item");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../../../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LiveTeamItem = function(_super) {
      __extends(LiveTeamItem, _super);
      function LiveTeamItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roomName = null;
        _this.playerCount = null;
        return _this;
      }
      LiveTeamItem_1 = LiveTeamItem;
      LiveTeamItem.prototype.start = function() {};
      LiveTeamItem.prototype.onButtonJoin = function() {
        event_manager_1.default.instance.dispatch(LiveTeamItem_1.EVT_JOIN_ROOM, this.roomId);
      };
      LiveTeamItem.prototype.setData = function(room) {
        this.roomId = room.id;
        this.roomName.string = room.id;
        this.playerCount.string = room.current + "/" + room.max;
      };
      var LiveTeamItem_1;
      LiveTeamItem.EVT_JOIN_ROOM = "live_join_room";
      __decorate([ property(cc.Label) ], LiveTeamItem.prototype, "roomName", void 0);
      __decorate([ property(cc.Label) ], LiveTeamItem.prototype, "playerCount", void 0);
      LiveTeamItem = LiveTeamItem_1 = __decorate([ ccclass ], LiveTeamItem);
      return LiveTeamItem;
    }(cc.Component);
    exports.default = LiveTeamItem;
    cc._RF.pop();
  }, {
    "../../../core/event-manager": "event-manager"
  } ],
  "live-team": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58d06gP0pBMoqRdT9C+W7uZ", "live-team");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var live_team_item_1 = require("./live-team-item");
    var matchmaker_control_1 = require("../../multiplayer/matchmaker-control");
    var event_manager_1 = require("../../../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LiveTeam = function(_super) {
      __extends(LiveTeam, _super);
      function LiveTeam() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
      }
      LiveTeam.prototype.onLoad = function() {
        this.templateItem = this.content.getComponentInChildren(live_team_item_1.default);
        this.content.removeAllChildren();
      };
      LiveTeam.prototype.start = function() {
        var _this = this;
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ROOM_RESULT, function(rooms) {
          cc.log("room result: " + JSON.stringify(rooms));
          _this.content.removeAllChildren();
          rooms.forEach(function(room) {
            var node = cc.instantiate(_this.templateItem.node);
            node.getComponent(live_team_item_1.default).setData(room);
            _this.content.addChild(node);
          });
        }, this);
        event_manager_1.default.instance.register(live_team_item_1.default.EVT_JOIN_ROOM, function(roomId) {
          _this.matcher.matchmaker.joinRoom(roomId);
        }, this);
      };
      LiveTeam.prototype.onButtonRefresh = function() {
        this.matcher.matchmaker.getRooms();
      };
      LiveTeam.prototype.setMatcher = function(matcher) {
        this.matcher = matcher;
      };
      LiveTeam.prototype.reset = function() {
        this.content.removeAllChildren();
        this.onButtonRefresh();
      };
      LiveTeam.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      __decorate([ property(cc.Node) ], LiveTeam.prototype, "content", void 0);
      LiveTeam = __decorate([ ccclass ], LiveTeam);
      return LiveTeam;
    }(cc.Component);
    exports.default = LiveTeam;
    cc._RF.pop();
  }, {
    "../../../core/event-manager": "event-manager",
    "../../multiplayer/matchmaker-control": "matchmaker-control",
    "./live-team-item": "live-team-item"
  } ],
  loader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9353alEtjFNbItXpbB1+rL+", "loader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_var_1 = require("./global-var");
    var player_ref_1 = require("../player-ref");
    var event_manager_1 = require("./event-manager");
    var sound_manager_1 = require("./sound-manager");
    var localization_1 = require("./localization");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loader = function(_super) {
      __extends(Loader, _super);
      function Loader() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextScene = "main-menu";
        _this.targetLoad = "";
        _this._loadInstances = {
          PlayerRef: false,
          Sound: false
        };
        _this._loadGame = false;
        return _this;
      }
      Loader_1 = Loader;
      Loader.prototype.onLoad = function() {
        if (false == Loader_1.loaded) if ("loader" != this.getCurrentSceneName()) {
          var nextScene = "" != this.targetLoad ? this.targetLoad : this.getCurrentSceneName();
          global_var_1.default.instance.set("loader-nextScene", nextScene);
          cc.director.loadScene("loader");
        } else {
          Loader_1.loaded = true;
          var next = global_var_1.default.instance.get("loader-nextScene", true);
          this.nextScene = null != next ? next : this.nextScene;
        }
      };
      Loader.prototype.start = function() {
        "loader" == this.getCurrentSceneName() && this.initLoader();
      };
      Loader.prototype.initLoader = function() {
        var _this = this;
        window.GAME_SERVER = false;
        event_manager_1.default.instance.registerOnce("PlayerRef-init", function() {
          _this._loadInstances["PlayerRef"] = true;
        }, this);
        event_manager_1.default.instance.registerOnce("Sound_initialized", function() {
          _this._loadInstances["Sound"] = true;
        }, this);
        player_ref_1.default.current;
        sound_manager_1.default.instance.init();
        null == localization_1.default.getCurrentLanguage() && localization_1.default.setLanguage(cc.sys.language);
      };
      Loader.prototype.update = function(dt) {
        player_ref_1.default.current.initialized && (this._loadInstances["PlayerRef"] = true);
        var allLoaded = true;
        for (var inst in this._loadInstances) if (false == this._loadInstances[inst]) {
          allLoaded = false;
          break;
        }
        if (allLoaded && !this._loadGame) {
          this._loadGame = true;
          cc.director.loadScene(this.nextScene);
        }
      };
      Loader.prototype.getCurrentSceneName = function() {
        var scene = "";
        cc.game._sceneInfos.forEach(function(element) {
          if (element.uuid == cc.director._scene._id) {
            scene = element.url;
            scene = scene.substring(scene.lastIndexOf("/") + 1).match(/[^\.]+/)[0];
          }
        });
        return scene;
      };
      var Loader_1;
      Loader.loaded = false;
      __decorate([ property ], Loader.prototype, "targetLoad", void 0);
      Loader = Loader_1 = __decorate([ ccclass ], Loader);
      return Loader;
    }(cc.Component);
    exports.default = Loader;
    cc._RF.pop();
  }, {
    "../player-ref": "player-ref",
    "./event-manager": "event-manager",
    "./global-var": "global-var",
    "./localization": "localization",
    "./sound-manager": "sound-manager"
  } ],
  lobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cb50ULFU9NEY6vgXWZvLzy", "lobby");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_var_1 = require("../../../core/global-var");
    var event_manager_1 = require("../../../core/event-manager");
    var MpMacher_1 = require("../../../libs/multiplayer/MpMacher");
    var new_team_1 = require("./new-team");
    var join_team_1 = require("./join-team");
    var live_team_1 = require("./live-team");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Lobby = function(_super) {
      __extends(Lobby, _super);
      function Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mainNode = null;
        _this.joinButtonNode = null;
        _this.newTeamNode = null;
        _this.joinTeamNode = null;
        _this.liveTeamNode = null;
        _this.backNode = null;
        _this.pageStack = [];
        return _this;
      }
      Lobby.prototype.start = function() {
        var _this = this;
        this.newTeamNode.x = -1e3;
        this.joinTeamNode.x = -1e3;
        this.liveTeamNode.x = -1e3;
        this.backNode.active = false;
        this.currentPage = this.mainNode;
        this.matcherCtrl = global_var_1.default.instance.get("matcherControl");
        this.newTeamNode.getComponent(new_team_1.default).setLobby(this);
        this.liveTeamNode.getComponent(live_team_1.default).setMatcher(this.matcherCtrl);
        event_manager_1.default.instance.register(join_team_1.default.EVT_TEAM_JOINED, function(room) {
          _this.currentPage == _this.liveTeamNode ? _this.pushPage(_this.newTeamNode, _this.liveTeamNode) : _this.pushPage(_this.newTeamNode, _this.mainNode);
          _this.newTeamNode.getComponent(new_team_1.default).reset();
          _this.newTeamNode.getComponent(new_team_1.default).setRoomInfo(room);
        }, this);
      };
      Lobby.prototype.onButtonNewTeam = function() {
        this.pushPage(this.newTeamNode, this.mainNode);
        this.newTeamNode.getComponent(new_team_1.default).reset();
        this.matcherCtrl.matchmaker.createRoom({
          max: 3,
          play: MpMacher_1.PlayType.PAIR
        });
      };
      Lobby.prototype.onButtonJoinTeam = function() {
        this.pushPage(this.joinTeamNode, this.joinButtonNode);
        this.joinTeamNode.getComponentInChildren(cc.EditBox).setFocus();
      };
      Lobby.prototype.onButtonLiveTeam = function() {
        this.pushPage(this.liveTeamNode, this.mainNode);
      };
      Lobby.prototype.onButtonBackPage = function() {
        this.popPage();
        0 == this.pageStack.length && (this.backNode.active = false);
      };
      Lobby.prototype.pushPage = function(page, replacer) {
        this.pageStack.push({
          in: page,
          out: replacer
        });
        this.runInOutAction(replacer, "out", "right");
        this.runInOutAction(page, "in", null, .8);
        this.backNode.active = true;
      };
      Lobby.prototype.popPage = function() {
        if (this.pageStack.length > 0) {
          var stack = this.pageStack.pop();
          stack.in == this.newTeamNode && this.matcherCtrl.matchmaker.leaveRoom();
          this.runInOutAction(stack.in, "out", "left");
          this.runInOutAction(stack.out, "in", null, .8);
        }
      };
      Lobby.prototype.runInOutAction = function(node, state, to, time) {
        void 0 === time && (time = .5);
        if ("in" == state) {
          this.currentPage = node;
          node.runAction(cc.moveTo(time, 0, node.y).easing(cc.easeBackInOut()));
          node == this.mainNode && this.joinTeamNode.x >= 100 ? this.runInOutAction(this.joinTeamNode, state, to, time) : node == this.liveTeamNode && this.liveTeamNode.getComponent(live_team_1.default).reset();
        } else if ("out" == state) if ("left" == to) {
          node.runAction(cc.moveTo(time, -1e3, node.y).easing(cc.easeBackInOut()));
          node == this.mainNode && Math.abs(this.joinTeamNode.x) <= 1 && this.runInOutAction(this.joinTeamNode, state, to, time);
        } else if ("right" == to) {
          node.runAction(cc.moveTo(time, 1e3, node.y).easing(cc.easeBackInOut()));
          node == this.mainNode && Math.abs(this.joinTeamNode.x) <= 1 && this.runInOutAction(this.joinTeamNode, state, to, time);
        }
      };
      Lobby.prototype.onButtonBackMM = function() {
        this.matcherCtrl.matchmaker.disconnect();
        cc.director.loadScene("main-menu");
      };
      Lobby.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      __decorate([ property(cc.Node) ], Lobby.prototype, "mainNode", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "joinButtonNode", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "newTeamNode", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "joinTeamNode", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "liveTeamNode", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "backNode", void 0);
      Lobby = __decorate([ ccclass ], Lobby);
      return Lobby;
    }(cc.Component);
    exports.default = Lobby;
    cc._RF.pop();
  }, {
    "../../../core/event-manager": "event-manager",
    "../../../core/global-var": "global-var",
    "../../../libs/multiplayer/MpMacher": "MpMacher",
    "./join-team": "join-team",
    "./live-team": "live-team",
    "./new-team": "new-team"
  } ],
  localization: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71238deafNK+p8wUFQbZvd1", "localization");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var i18n = require("i18n");
    var Localization = function() {
      function Localization() {}
      Localization.get = function(key) {
        var text = i18n.t(key);
        "" == text && (text = "N/A");
        return text;
      };
      Localization.setLanguage = function(lang) {
        if (i18n.init(lang)) {
          var rootNodes = cc.director.getScene().children;
          var allLocalizedLabels = [];
          for (var i = 0; i < rootNodes.length; ++i) {
            var labels = rootNodes[i].getComponentsInChildren("LabelLocalized");
            Array.prototype.push.apply(allLocalizedLabels, labels);
          }
          for (var i = 0; i < allLocalizedLabels.length; ++i) {
            var label = allLocalizedLabels[i];
            label.updateLabel();
          }
        }
      };
      Localization.getCurrentLanguage = function() {
        return i18n.getSaveLang();
      };
      return Localization;
    }();
    exports.default = Localization;
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  localstorage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d6cbnEduhL24nzgJOC4f8D", "localstorage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var config_1 = require("../config");
    var LocalStorage = function() {
      function LocalStorage() {}
      LocalStorage.setItem = function(key, value) {
        cc.sys.localStorage.setItem(this._key(key), value);
      };
      LocalStorage.getItem = function(key, _default) {
        var val = cc.sys.localStorage.getItem(this._key(key));
        return val || _default;
      };
      LocalStorage.removeItem = function(key) {
        cc.sys.localStorage.removeItem(this._key(key));
      };
      LocalStorage._key = function(key) {
        return config_1.default.PROJECT_ID + key;
      };
      return LocalStorage;
    }();
    exports.default = LocalStorage;
    cc._RF.pop();
  }, {
    "../config": "config"
  } ],
  "main-menu": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ed0aJhOqZCxoUZ/Kdztn4n", "main-menu");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var popup_1 = require("../../core/popup");
    var player_ref_1 = require("../../player-ref");
    var matchmaker_control_1 = require("../multiplayer/matchmaker-control");
    var event_manager_1 = require("../../core/event-manager");
    var global_var_1 = require("../../core/global-var");
    var ErrorCode_1 = require("../../libs/multiplayer/ErrorCode");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainMenu = function(_super) {
      __extends(MainMenu, _super);
      function MainMenu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerName = null;
        _this.editNameButton = null;
        _this.playerDisplay = null;
        _this.playerPols = [];
        _this.playerPolsMask = [];
        _this.playerCols = [];
        _this.playerColor = [];
        _this.playType = "quick";
        return _this;
      }
      MainMenu.prototype.onLoad = function() {
        var _this = this;
        this.playerName.string = player_ref_1.default.current.name;
        this.playerCols.forEach(function(node) {
          _this.playerColor.push(node.color);
        });
        this.currentPol = player_ref_1.default.current.displayIdx;
        if (-1 == this.currentPol) {
          this.currentPol = Math.floor(Math.random() * this.playerPols.length);
          player_ref_1.default.current.displayIdx = this.currentPol;
        }
        this.currentCol = player_ref_1.default.current.displayColor;
        if (-1 == this.currentCol) {
          this.currentCol = Math.floor(Math.random() * this.playerCols.length);
          player_ref_1.default.current.displayColor = this.currentCol;
        }
      };
      MainMenu.prototype.start = function() {
        var _this = this;
        this.matchmakerCtrl = new matchmaker_control_1.MatchMakerControl();
        this.updatePlayerDisplay();
        global_var_1.default.instance.set("player-pols", this.playerPols);
        global_var_1.default.instance.set("player-cols", this.playerColor);
        global_var_1.default.instance.set("player-pols-m", this.playerPolsMask);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ERROR, function(errorCode) {
          popup_1.default.instance.hideWaitingPopup();
          errorCode == ErrorCode_1.MpCode.START_GAME_FAILED ? _this.matchmakerCtrl.matchmaker.disconnect() : popup_1.default.instance.showInfoPopup("Network error: " + errorCode);
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_CONNECTED, function(id, name) {
          if ("quick" == _this.playType) {
            popup_1.default.instance.showWaitingPopup("waiting match...", true, function() {
              _this.matchmakerCtrl.matchmaker.leaveRoom();
              _this.matchmakerCtrl.matchmaker.disconnect();
            });
            _this.matchmakerCtrl.matchmaker.quickPlay({
              max: 6
            });
          } else if ("team" == _this.playType) {
            global_var_1.default.instance.set("matcherControl", _this.matchmakerCtrl);
            cc.director.loadScene("team");
          }
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_GAME_STARTED, function(connection) {
          popup_1.default.instance.hideWaitingPopup();
          cc.log("game start");
          global_var_1.default.instance.set("connection", connection);
          cc.director.loadScene("game");
        }, this);
      };
      MainMenu.prototype.onButtonQuickPlay = function() {
        this.playType = "quick";
        popup_1.default.instance.showWaitingPopup("connecting...");
        this.matchmakerCtrl.connect({
          p: this.currentPol,
          c: this.currentCol
        });
      };
      MainMenu.prototype.onButtonTeamPlay = function() {
        this.playType = "team";
        popup_1.default.instance.showWaitingPopup("connecting...");
        this.matchmakerCtrl.connect({
          p: this.currentPol,
          c: this.currentCol
        });
      };
      MainMenu.prototype.onEditPlayerName = function(target, action) {
        if ("begin" == action) this.editNameButton.node.runAction(cc.moveBy(.5, 57, 0)); else if ("end" == action) {
          this.editNameButton.node.runAction(cc.moveBy(.5, -57, 0));
          this.onButtonEditPlayerName();
        } else "return" == action && this.onButtonEditPlayerName();
      };
      MainMenu.prototype.onButtonEditPlayerName = function() {
        player_ref_1.default.current.name = this.playerName.string;
      };
      MainMenu.prototype.onButtonSelectPol = function(event, step) {
        this.currentPol += +step;
        this.currentPol < 0 && (this.currentPol = this.playerPols.length - 1);
        this.currentPol >= this.playerPols.length && (this.currentPol = 0);
        this.updatePlayerDisplay();
        player_ref_1.default.current.displayIdx = this.currentPol;
      };
      MainMenu.prototype.onButtonSelectCol = function(event, idx) {
        this.currentCol = +idx;
        this.updatePlayerDisplay();
        player_ref_1.default.current.displayColor = this.currentCol;
      };
      MainMenu.prototype.updatePlayerDisplay = function() {
        this.playerDisplay.spriteFrame = this.playerPols[this.currentPol];
        this.playerDisplay.node.color = this.playerColor[this.currentCol];
      };
      MainMenu.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      __decorate([ property(cc.EditBox) ], MainMenu.prototype, "playerName", void 0);
      __decorate([ property(cc.Button) ], MainMenu.prototype, "editNameButton", void 0);
      __decorate([ property(cc.Sprite) ], MainMenu.prototype, "playerDisplay", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], MainMenu.prototype, "playerPols", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], MainMenu.prototype, "playerPolsMask", void 0);
      __decorate([ property([ cc.Node ]) ], MainMenu.prototype, "playerCols", void 0);
      MainMenu = __decorate([ ccclass ], MainMenu);
      return MainMenu;
    }(cc.Component);
    exports.default = MainMenu;
    cc._RF.pop();
  }, {
    "../../core/event-manager": "event-manager",
    "../../core/global-var": "global-var",
    "../../core/popup": "popup",
    "../../libs/multiplayer/ErrorCode": "ErrorCode",
    "../../player-ref": "player-ref",
    "../multiplayer/matchmaker-control": "matchmaker-control"
  } ],
  "map-scale": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aab48p56jtNI5rbzxqq9YTE", "map-scale");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MapScale = function(_super) {
      __extends(MapScale, _super);
      function MapScale() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MapScale.prototype.onLoad = function() {
        this.widget = this.getComponent(cc.Widget);
        this.target = this.widget.target || this.node.parent;
        this.target.on(cc.Node.EventType.SIZE_CHANGED, this.onTargetSizeChange, this);
        this.onTargetSizeChange();
      };
      MapScale.prototype.onTargetSizeChange = function() {
        this.widget.updateAlignment();
        var rx = this.target.width / this.node.width;
        var ry = this.target.height / this.node.height;
        var r = Math.min(rx, ry);
        this.node.setScale(r);
      };
      MapScale = __decorate([ ccclass ], MapScale);
      return MapScale;
    }(cc.Component);
    exports.default = MapScale;
    cc._RF.pop();
  }, {} ],
  "matchmaker-control": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e219dsk+jBK84F7Ej7HVz/M", "matchmaker-control");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MpMacher_1 = require("../../libs/multiplayer/MpMacher");
    var config_1 = require("../../config");
    var player_ref_1 = require("../../player-ref");
    var event_manager_1 = require("../../core/event-manager");
    var MatchMakerControl = function() {
      function MatchMakerControl() {
        this.serverUrl = "http://35.201.210.174:3333";
        this.matchmakerListen = {
          onError: function(errorCode) {
            cc.error("Matchmaker error: " + errorCode);
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ERROR, errorCode);
          },
          onConnected: function(id, name) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_CONNECTED, id, name);
          },
          onRoomCreated: function(room) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ROOM_CREATED, room);
          },
          onRoomJoined: function(room) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ROOM_JOINED, room);
          },
          onRoomPlayerJoined: function(player) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ROOM_PLAYER_JOINED, player);
          },
          onRoomPlayerLeft: function(player) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ROOM_PLAYER_LEFT, player);
          },
          onPlayerKicked: function() {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_PLAYER_KICKED);
          },
          onPlayerInvite: function(info) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_PLAYER_INVITED, info);
          },
          onRoomMessage: function(message) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ROOM_MESSAGE, message);
          },
          onPlayerStatusChange: function(status) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_PLAYER_STATUS_CHANGE, status);
          },
          onRoomMasterChange: function(newMasterId) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ROOM_MASTER_CHANGE, newMasterId);
          },
          onRoomsResult: function(rooms) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_ROOM_RESULT, rooms);
          },
          onPlayersResult: function(players) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_PLAYER_RESULT, players);
          },
          onQuickRoomJoined: function() {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_QUICK_ROOM_JOINED);
          },
          onGameStarted: function(controller) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_GAME_STARTED, controller);
          },
          onGameStarting: function() {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_GAME_STARTING);
          },
          onGameCancel: function() {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_GAME_CANCEL);
          },
          onIdlePlayersChange: function(info) {
            event_manager_1.default.instance.dispatch(MatchMakerControl.MAKER_IDLE_PLAYER_CHANGE, info);
          }
        };
      }
      MatchMakerControl.prototype.connect = function(data) {
        this.matchmaker = new MpMacher_1.MatchMaker();
        this.matchmaker.listener = this.matchmakerListen;
        this.matchmaker.connect(this.serverUrl, config_1.default.PROJECT_ID, player_ref_1.default.current.name, data);
      };
      MatchMakerControl.MAKER_ERROR = "_mm_error";
      MatchMakerControl.MAKER_CONNECTED = "_mm_connected";
      MatchMakerControl.MAKER_ROOM_CREATED = "_mm_room_created";
      MatchMakerControl.MAKER_ROOM_JOINED = "_mm_room_joined";
      MatchMakerControl.MAKER_ROOM_PLAYER_JOINED = "_mm_room_player_joined";
      MatchMakerControl.MAKER_ROOM_PLAYER_LEFT = "_mm_room_player_left";
      MatchMakerControl.MAKER_ROOM_MASTER_CHANGE = "_mm_room_master_change";
      MatchMakerControl.MAKER_PLAYER_KICKED = "_mm_player_kicked";
      MatchMakerControl.MAKER_PLAYER_INVITED = "_mm_player_invited";
      MatchMakerControl.MAKER_ROOM_MESSAGE = "_mm_room_msg";
      MatchMakerControl.MAKER_PLAYER_STATUS_CHANGE = "_mm_room_player_status";
      MatchMakerControl.MAKER_ROOM_RESULT = "_mm_room_result";
      MatchMakerControl.MAKER_PLAYER_RESULT = "_mm_player_result";
      MatchMakerControl.MAKER_QUICK_ROOM_JOINED = "_mm_quick_room_joined";
      MatchMakerControl.MAKER_IDLE_PLAYER_CHANGE = "_mm_idle_player_change";
      MatchMakerControl.MAKER_GAME_STARTED = "_mm_game_started";
      MatchMakerControl.MAKER_GAME_STARTING = "_mm_game_starting";
      MatchMakerControl.MAKER_GAME_CANCEL = "_mm_game_cancel";
      return MatchMakerControl;
    }();
    exports.MatchMakerControl = MatchMakerControl;
    cc._RF.pop();
  }, {
    "../../config": "config",
    "../../core/event-manager": "event-manager",
    "../../libs/multiplayer/MpMacher": "MpMacher",
    "../../player-ref": "player-ref"
  } ],
  "move-around-control": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3b06MYrp5O1Z+nSwEu0Bfg", "move-around-control");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MoveControl = function(_super) {
      __extends(MoveControl, _super);
      function MoveControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moveSprite = null;
        _this.aroundSprite = null;
        _this.maxDistance = 120;
        _this.onMoveEnd = function() {};
        _this.moveData = cc.Vec2.ZERO;
        return _this;
      }
      MoveControl.prototype.start = function() {
        this.basePos = this.moveSprite.node.position;
        this.basePosWorld = this.moveSprite.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.aroundSprite.enabled = false;
        this.node.opacity = 100;
        this.moveSprite.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.moveSprite.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.moveSprite.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.moveSprite.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      MoveControl.prototype.getMoveDelta = function() {
        if (0 == this.moveData.x && 0 == this.moveData.y) return null;
        return this.moveData;
      };
      MoveControl.prototype.onTouchStart = function(event) {
        this.node.opacity = 255;
        this.aroundSprite.enabled = true;
        this.moveSprite.node.runAction(cc.scaleTo(.3, 1.2));
      };
      MoveControl.prototype.onTouchMove = function(event) {
        var pos = event.getLocation();
        var delta = pos.sub(this.basePosWorld);
        var angel = Math.atan2(delta.y, delta.x);
        var tx = Math.cos(angel) * Math.min(this.maxDistance, Math.abs(delta.x));
        var ty = Math.sin(angel) * Math.min(this.maxDistance, Math.abs(delta.y));
        var p = cc.v2(tx, ty).sub(this.basePos);
        this.moveData = cc.v2(p.x / this.maxDistance, p.y / this.maxDistance);
        this.moveSprite.node.setPosition(tx, ty);
      };
      MoveControl.prototype.endMove = function() {
        this.aroundSprite.enabled = false;
        this.node.opacity = 100;
        this.moveSprite.node.setPosition(this.basePos);
        this.moveData = cc.v2(0, 0);
        this.moveSprite.node.runAction(cc.scaleTo(.2, 1));
      };
      MoveControl.prototype.onTouchEnd = function(event) {
        var target = this.moveData;
        var cancel = target.magSqr() <= .0225;
        this.endMove();
        this.onMoveEnd(cancel, target);
      };
      __decorate([ property(cc.Sprite) ], MoveControl.prototype, "moveSprite", void 0);
      __decorate([ property(cc.Sprite) ], MoveControl.prototype, "aroundSprite", void 0);
      __decorate([ property() ], MoveControl.prototype, "maxDistance", void 0);
      MoveControl = __decorate([ ccclass ], MoveControl);
      return MoveControl;
    }(cc.Component);
    exports.default = MoveControl;
    cc._RF.pop();
  }, {} ],
  "new-team-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ff0bV2DNVO07hgFrBd10wv", "new-team-item");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../../../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewTeamItem = function(_super) {
      __extends(NewTeamItem, _super);
      function NewTeamItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerName = null;
        _this.coverBackground = null;
        _this.readyStatus = null;
        _this.kickoutButton = null;
        _this.readyFrame = null;
        _this.waitFrame = null;
        _this.playerId = "";
        _this.hasPlayer = false;
        _this.ready = false;
        return _this;
      }
      NewTeamItem_1 = NewTeamItem;
      NewTeamItem.prototype.onButonKick = function() {
        event_manager_1.default.instance.dispatch(NewTeamItem_1.EVT_KICK_PLAYER, this.playerId);
      };
      NewTeamItem.prototype.playerJoin = function(player) {
        this.hasPlayer = true;
        this.playerId = player.id;
        this.playerName.string = player.name;
        this.setReady(player.ready);
        this.coverBackground.runAction(cc.moveTo(.5, 0, this.coverBackground.y));
      };
      NewTeamItem.prototype.playerLeft = function() {
        this.hasPlayer = false;
        this.playerId = "";
        this.playerName.string = "None";
        this.readyStatus.node.active = false;
        this.kickoutButton.node.active = false;
        this.setReady(false);
        this.coverBackground.runAction(cc.moveTo(.5, -this.coverBackground.width, this.coverBackground.y));
      };
      NewTeamItem.prototype.reset = function() {
        this.playerName.string = "None";
        this.readyStatus.node.active = false;
        this.kickoutButton.node.active = false;
        this.setReady(false);
        this.hasPlayer = false;
        this.coverBackground.x = -this.coverBackground.width;
      };
      NewTeamItem.prototype.setMasterView = function() {
        if (!this.hasPlayer) return;
        this.kickoutButton.node.y = 22;
        this.readyStatus.node.y = -22;
        this.readyStatus.node.active = true;
        this.kickoutButton.node.active = true;
      };
      NewTeamItem.prototype.setNormalView = function() {
        if (!this.hasPlayer) return;
        this.readyStatus.node.y = 0;
        this.readyStatus.node.active = true;
      };
      NewTeamItem.prototype.setReady = function(ready) {
        if (!this.hasPlayer) return;
        this.ready = null != ready ? ready : !this.ready;
        this.ready ? this.readyStatus.spriteFrame = this.readyFrame : this.readyStatus.spriteFrame = this.waitFrame;
      };
      var NewTeamItem_1;
      NewTeamItem.EVT_KICK_PLAYER = "kick-player";
      __decorate([ property(cc.Label) ], NewTeamItem.prototype, "playerName", void 0);
      __decorate([ property(cc.Node) ], NewTeamItem.prototype, "coverBackground", void 0);
      __decorate([ property(cc.Sprite) ], NewTeamItem.prototype, "readyStatus", void 0);
      __decorate([ property(cc.Button) ], NewTeamItem.prototype, "kickoutButton", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewTeamItem.prototype, "readyFrame", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewTeamItem.prototype, "waitFrame", void 0);
      NewTeamItem = NewTeamItem_1 = __decorate([ ccclass ], NewTeamItem);
      return NewTeamItem;
    }(cc.Component);
    exports.default = NewTeamItem;
    cc._RF.pop();
  }, {
    "../../../core/event-manager": "event-manager"
  } ],
  "new-team": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "563e4eCSe1AUo3doH4thC/x", "new-team");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var new_team_item_1 = require("./new-team-item");
    var matchmaker_control_1 = require("../../multiplayer/matchmaker-control");
    var global_var_1 = require("../../../core/global-var");
    var event_manager_1 = require("../../../core/event-manager");
    var loader_1 = require("../../../core/loader");
    var popup_1 = require("../../../core/popup");
    var ErrorCode_1 = require("../../../libs/multiplayer/ErrorCode");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewTeam = function(_super) {
      __extends(NewTeam, _super);
      function NewTeam() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.readyButton = null;
        _this.startButton = null;
        _this.teamSlots = [];
        _this.playerSlots = {};
        _this.isMaster = false;
        return _this;
      }
      NewTeam.prototype.start = function() {
        var _this = this;
        if (!loader_1.default.loaded) return;
        this.matcherCtrl = global_var_1.default.instance.get("matcherControl");
        this.myPlayerId = this.matcherCtrl.matchmaker.localPlayer.id;
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ROOM_CREATED, function(room) {
          _this.setRoomInfo(room);
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ROOM_PLAYER_JOINED, function(player) {
          if (_this.playerSlots[player.id]) cc.warn("Slot not empty"); else {
            _this.playerSlots[player.id] = _this.teamSlots[player.slot];
            _this.teamSlots[player.slot].playerJoin(player);
            _this.updateMasterView();
            _this.checkStartReady();
          }
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ROOM_PLAYER_LEFT, function(player) {
          _this.playerSlots[player.id].playerLeft();
          delete _this.playerSlots[player.id];
          _this.checkStartReady();
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_PLAYER_STATUS_CHANGE, function(status) {
          _this.playerSlots[status.id].setReady(status.ready);
          _this.checkStartReady();
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_PLAYER_KICKED, function() {
          popup_1.default.instance.showInfoPopup("You has been kicked out!");
          _this.lobby.onButtonBackPage();
        });
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ROOM_MASTER_CHANGE, function(masterId) {
          cc.log("master room chagne to: " + masterId);
          _this.masterPlayerId = masterId;
          _this.myPlayerId === masterId && (_this.isMaster = true);
          _this.updateMasterView();
        });
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_GAME_STARTED, function(connection) {
          cc.log("game start");
          global_var_1.default.instance.set("connection", connection);
          cc.director.loadScene("game", function() {
            popup_1.default.instance.hideWaitingPopup();
          });
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_GAME_STARTING, function() {
          popup_1.default.instance.showWaitingPopup("Starting game", true, function() {
            _this.matcherCtrl.matchmaker.cancelPlay();
          });
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_GAME_CANCEL, function() {
          popup_1.default.instance.hideWaitingPopup();
        }, this);
        event_manager_1.default.instance.register(matchmaker_control_1.MatchMakerControl.MAKER_ERROR, function(errorCode) {
          if (errorCode == ErrorCode_1.MpCode.START_GAME_FAILED) {
            popup_1.default.instance.hideWaitingPopup();
            _this.lobby.onButtonBackPage();
          }
        }, this);
        event_manager_1.default.instance.register(new_team_item_1.default.EVT_KICK_PLAYER, function(playerId) {
          _this.playerSlots[playerId] ? _this.isMaster ? _this.matcherCtrl.matchmaker.kickPlayer(playerId) : cc.warn("Not permit permission") : cc.warn("Invalid player at slot");
        });
        this.reset();
      };
      NewTeam.prototype.setLobby = function(lobby) {
        this.lobby = lobby;
      };
      NewTeam.prototype.setRoomInfo = function(room) {
        this.title.string = "Team " + room.id;
        this.initPlayers(room.players);
      };
      NewTeam.prototype.onButtonReady = function() {
        this.playerSlots[this.myPlayerId].setReady();
        this.checkStartReady();
        this.matcherCtrl.matchmaker.setReady(this.playerSlots[this.myPlayerId].ready);
      };
      NewTeam.prototype.onButtonStart = function() {
        if (!this.isMaster) return;
        cc.log("start game");
        this.isMaster && this.matcherCtrl.matchmaker.startGame();
      };
      NewTeam.prototype.initPlayers = function(players) {
        var _this = this;
        players.forEach(function(player) {
          _this.teamSlots[player.slot].playerJoin(player);
          if (player.master) {
            _this.masterPlayerId = player.id;
            _this.myPlayerId === player.id && (_this.isMaster = true);
          }
          _this.playerSlots[player.id] = _this.teamSlots[player.slot];
        });
        this.updateMasterView();
      };
      NewTeam.prototype.updateMasterView = function() {
        this.isMaster ? this.setMasterView() : this.setNormalView();
      };
      NewTeam.prototype.setMasterView = function() {
        cc.log("set master view");
        this.readyButton.node.active = true;
        this.startButton.node.active = true;
        this.readyButton.node.x = -91;
        for (var id in this.playerSlots) id === this.myPlayerId ? this.playerSlots[id].setNormalView() : this.playerSlots[id].setMasterView();
      };
      NewTeam.prototype.setNormalView = function() {
        cc.log("set normal view");
        this.readyButton.node.active = true;
        this.readyButton.node.x = 0;
        for (var id in this.playerSlots) this.playerSlots[id].setNormalView();
      };
      NewTeam.prototype.checkStartReady = function() {
        if (this.isMaster) {
          var allReady = true;
          for (var id in this.playerSlots) if (!this.playerSlots[id].ready) {
            allReady = false;
            break;
          }
          this.startButton.interactable = !!allReady;
        }
      };
      NewTeam.prototype.reset = function() {
        this.title.string = "Team";
        this.teamSlots.forEach(function(slot) {
          slot.reset();
        });
        this.playerSlots = {};
        this.isMaster = false;
        this.masterPlayerId = null;
        this.readyButton.node.active = false;
        this.startButton.node.active = false;
        this.startButton.interactable = false;
      };
      NewTeam.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      __decorate([ property(cc.Label) ], NewTeam.prototype, "title", void 0);
      __decorate([ property(cc.Button) ], NewTeam.prototype, "readyButton", void 0);
      __decorate([ property(cc.Button) ], NewTeam.prototype, "startButton", void 0);
      __decorate([ property([ new_team_item_1.default ]) ], NewTeam.prototype, "teamSlots", void 0);
      NewTeam = __decorate([ ccclass ], NewTeam);
      return NewTeam;
    }(cc.Component);
    exports.default = NewTeam;
    cc._RF.pop();
  }, {
    "../../../core/event-manager": "event-manager",
    "../../../core/global-var": "global-var",
    "../../../core/loader": "loader",
    "../../../core/popup": "popup",
    "../../../libs/multiplayer/ErrorCode": "ErrorCode",
    "../../multiplayer/matchmaker-control": "matchmaker-control",
    "./new-team-item": "new-team-item"
  } ],
  "path-visual": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ae1eZqfLFCEJyY4BSNEE0J", "path-visual");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PathVisual = function(_super) {
      __extends(PathVisual, _super);
      function PathVisual() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pathSeg = null;
        _this.pathEnd = null;
        _this.maxRange = 500;
        _this.segNodes = [];
        _this.maxSeg = 15;
        return _this;
      }
      PathVisual_1 = PathVisual;
      PathVisual.prototype.start = function() {
        for (var i = 0; i < this.maxSeg; i++) {
          var node_1 = new cc.Node("seg");
          node_1.addComponent(cc.Sprite).spriteFrame = this.pathSeg;
          this.node.addChild(node_1);
          this.segNodes.push(node_1);
          node_1.active = false;
        }
        var node = new cc.Node("endx");
        node.addComponent(cc.Sprite).spriteFrame = this.pathEnd;
        this.node.addChild(node);
        this.segNodes.push(node);
        node.active = false;
        this.bezier = new BezierPath();
      };
      PathVisual.prototype.generatePath = function(directionVector) {
        var endPos = cc.v2(directionVector.x * this.maxRange, directionVector.y * this.maxRange);
        var l = endPos.mag() / 2;
        PathVisual_1.getBezierPath(cc.Vec2.ZERO, directionVector, this.maxRange, this.bezier);
        var node = this.segNodes[this.maxSeg];
        node.setPosition(this.bezier.endPos);
        node.active = true;
        var segUsed = Math.ceil(2 * l / this.maxRange * (this.maxSeg - 3)) + 3;
        for (var i = 1; i < this.maxSeg; i++) if (i < segUsed) {
          var p = this.bezier.getPoint(i / segUsed);
          this.segNodes[i].active = true;
          this.segNodes[i].setPosition(p);
        } else this.segNodes[i].active = false;
      };
      PathVisual.prototype.setDirectionVector = function(vector) {
        this.generatePath(vector);
      };
      PathVisual.getBezierPath = function(start, control, maxRange, out) {
        start = cc.v2(start);
        control = cc.v2(control);
        var path = out || new BezierPath();
        var target = cc.v2(control.x * maxRange, control.y * maxRange);
        var s = target.mag();
        var end = start.add(target);
        var a = Math.atan2(control.y, control.x);
        var pa = (1 - bezier(.06, .19, Math.abs(Math.sin(a)))) * this.controlPointAngle;
        var r = control.x > 0 ? pa : 360 - pa;
        var v = control.rotate(cc.misc.degreesToRadians(r));
        a = Math.atan2(v.y, v.x);
        var c1 = cc.v2(Math.cos(a) * s / 2, Math.sin(a) * s / 2);
        c1 = start.add(c1);
        r = control.x > 0 ? 180 - pa : 180 + pa;
        v = control.rotate(cc.misc.degreesToRadians(r));
        a = Math.atan2(v.y, v.x);
        var c2 = cc.v2(Math.cos(a) * s / 2, Math.sin(a) * s / 2);
        c2.addSelf(target);
        c2 = start.add(c2);
        path.setData(start, end, c1, c2);
        return path;
      };
      var PathVisual_1;
      PathVisual.controlPointAngle = 60;
      __decorate([ property(cc.SpriteFrame) ], PathVisual.prototype, "pathSeg", void 0);
      __decorate([ property(cc.SpriteFrame) ], PathVisual.prototype, "pathEnd", void 0);
      PathVisual = PathVisual_1 = __decorate([ ccclass ], PathVisual);
      return PathVisual;
    }(cc.Component);
    exports.default = PathVisual;
    var BezierPath = function() {
      function BezierPath() {}
      BezierPath.prototype.setData = function(startPos, endPos, control1, control2) {
        this.startPos = startPos;
        this.endPos = endPos;
        this.control1 = control1;
        this.control2 = control2;
      };
      BezierPath.prototype.getPoint = function(t) {
        var x = (1 - t) * (1 - t) * (1 - t) * this.startPos.x + 3 * (1 - t) * (1 - t) * t * this.control1.x + 3 * (1 - t) * t * t * this.control2.x + t * t * t * this.endPos.x;
        var y = (1 - t) * (1 - t) * (1 - t) * this.startPos.y + 3 * (1 - t) * (1 - t) * t * this.control1.y + 3 * (1 - t) * t * t * this.control2.y + t * t * t * this.endPos.y;
        return cc.v2(x, y);
      };
      return BezierPath;
    }();
    exports.BezierPath = BezierPath;
    function bezier(c1y, c2y, t) {
      return 3 * (1 - t) * (1 - t) * t * c1y + 3 * (1 - t) * t * t * c2y + t * t * t * 1;
    }
    cc._RF.pop();
  }, {} ],
  "player-ref": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a529iwQnlGbq3EfIYgrRWO", "player-ref");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("./core/event-manager");
    var localstorage_1 = require("./core/localstorage");
    var PlayerRef = function() {
      function PlayerRef() {
        this.initialized = false;
        this._id = "";
        this._name = "";
        this._displayIdx = -1;
        this._displayColor = -1;
      }
      Object.defineProperty(PlayerRef, "current", {
        get: function() {
          if (null == this._current) {
            this._current = new PlayerRef();
            this._current.init();
          }
          return this._current;
        },
        enumerable: true,
        configurable: true
      });
      PlayerRef.prototype.init = function() {
        this._name = localstorage_1.default.getItem("user-name", "NickName");
        this._displayIdx = +localstorage_1.default.getItem("displayIdx", "-1");
        this._displayColor = +localstorage_1.default.getItem("displayColor", "-1");
        cc.log("player init");
        event_manager_1.default.instance.dispatch("PlayerRef-init", "success");
        this.initialized = true;
      };
      Object.defineProperty(PlayerRef.prototype, "id", {
        get: function() {
          return this._id;
        },
        enumerable: true,
        configurable: true
      });
      PlayerRef.prototype.setId = function(id) {
        this._id = id;
      };
      Object.defineProperty(PlayerRef.prototype, "name", {
        get: function() {
          return this._name;
        },
        set: function(name) {
          this._name = name;
          localstorage_1.default.setItem("user-name", name);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PlayerRef.prototype, "displayIdx", {
        get: function() {
          return this._displayIdx;
        },
        set: function(val) {
          this._displayIdx = val;
          localstorage_1.default.setItem("displayIdx", "" + val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PlayerRef.prototype, "displayColor", {
        get: function() {
          return this._displayColor;
        },
        set: function(val) {
          this._displayColor = val;
          localstorage_1.default.setItem("displayColor", "" + val);
        },
        enumerable: true,
        configurable: true
      });
      PlayerRef._current = null;
      return PlayerRef;
    }();
    exports.default = PlayerRef;
    cc._RF.pop();
  }, {
    "./core/event-manager": "event-manager",
    "./core/localstorage": "localstorage"
  } ],
  player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8460bDVRMZEZoLdoxG5Rd3b", "player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetModules_1 = require("../libs/multiplayer/components/NetModules");
    var input_1 = require("./input/input");
    var event_manager_1 = require("../core/event-manager");
    var path_visual_1 = require("./path-visual");
    var bomb_1 = require("./bomb");
    var global_var_1 = require("../core/global-var");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerAction;
    (function(PlayerAction) {
      PlayerAction[PlayerAction["FIRE_THROW"] = 0] = "FIRE_THROW";
      PlayerAction[PlayerAction["FAST_SPEED"] = 1] = "FAST_SPEED";
    })(PlayerAction || (PlayerAction = {}));
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.normalSpeed = 150;
        _this.display = null;
        _this.playerName = null;
        _this.healthNode = null;
        _this.maxHeath = 3;
        _this.maxFireRange = 500;
        _this.pathVisual = null;
        _this.face = 90;
        _this.team = -1;
        _this.death = false;
        _this.deathTime = 10;
        return _this;
      }
      Player_1 = Player;
      Player.prototype.onLoad = function() {
        this.netPlayer = this.getComponent(NetModules_1.NetPlayer);
        this.netPlayer.isLocalPlayer || (this.pathVisual.enabled = false);
        this.pathVisual.maxRange = this.maxFireRange;
        global_var_1.default.instance.set("maxFireRange", this.maxFireRange);
      };
      Player.prototype.start = function() {
        this.netPlayer.applyMove = this.applyMove.bind(this);
        this.netPlayer.applyAction = this.applyAction.bind(this);
        if (this.netPlayer.isLocalPlayer) {
          event_manager_1.default.instance.register(input_1.default.EVT_THROW_FIRE, this.onThrowFire, this);
          event_manager_1.default.instance.register(input_1.default.EVT_FAST_SPEED, this.onFastSpeed, this);
        }
        if (GAME_SERVER) {
          this.strength = 100;
          this.health = this.maxHeath;
          this.speed = this.normalSpeed;
        }
        this.setupDisplay();
      };
      Player.prototype.update = function(dt) {
        if (this.health <= 0 && false == this.death) {
          this.death = true;
          this.deathTime = 10;
          event_manager_1.default.instance.dispatch(Player_1.EVT_DEATH, this);
        } else if (true == this.death && this.health > 0) {
          this.death = false;
          event_manager_1.default.instance.dispatch(Player_1.EVT_REVIVE, this);
        }
        if (this.death) {
          this.deathTime -= dt;
          event_manager_1.default.instance.dispatch(Player_1.EVT_DEATH_TIME, this, Math.ceil(this.deathTime));
        }
        if (this.netPlayer.isLocalPlayer) {
          var move = input_1.default.instance.getMoveData();
          if (!this.death) {
            if (move) {
              move.speed = this.speed;
              this.netPlayer.playerMove(move);
              this.display.node.setRotation(360 - (move.dir - 90));
            }
            if (this.bindFireId) {
              var fireTarget = input_1.default.instance.getFireTarget();
              var dis = fireTarget ? fireTarget.magSqr() : 0;
              if (dis > .0225) {
                this.pathVisual.node.active = true;
                this.pathVisual.setDirectionVector(fireTarget);
              } else this.pathVisual.node.active = false;
            }
          }
        } else {
          var rot = 360 - (this.face - 90);
          this.display.node.setRotation(rot);
        }
        var hp = this.health / this.maxHeath * this.healthNodeMaxHeight;
        this.healthNode.height = Math.max(hp, 0);
        if (GAME_SERVER) {
          this.death && Math.ceil(this.deathTime) <= 0 && (this.health = this.maxHeath);
          if (this.speed > this.normalSpeed) {
            this.strength -= 20 * dt;
            this.strength < 0 && (this.strength = 0);
            0 == this.strength && (this.speed = this.calcSpeed());
          } else {
            if (this.strength < 100) {
              this.strength += 7 * dt;
              this.strength > 50 && (this.speed = this.calcSpeed());
            }
            this.strength > 100 && (this.strength = 100);
          }
        }
      };
      Player.prototype.setupDisplay = function() {
        var playerInfo = NetModules_1.NetManager.instance.room.getPlayer(this.netPlayer.id);
        this.displayIdx = playerInfo.data.p;
        this.colorIdx = playerInfo.data.c;
        var pols = global_var_1.default.instance.get("player-pols");
        var polsMask = global_var_1.default.instance.get("player-pols-m");
        var cols = global_var_1.default.instance.get("player-cols");
        this.display.spriteFrame = pols[this.displayIdx];
        var healthSprite = this.healthNode.getComponentInChildren(cc.Sprite);
        healthSprite.spriteFrame = polsMask[this.displayIdx];
        healthSprite.node.color = cols[this.colorIdx];
        this.playerName.string = playerInfo.name;
        this.healthNodeMaxHeight = this.healthNode.height;
      };
      Player.prototype.applyMove = function(move, base) {
        var dx = Math.cos(cc.misc.degreesToRadians(move.dir)) * move.speed * move.time / 1e3;
        var dy = Math.sin(cc.misc.degreesToRadians(move.dir)) * move.speed * move.time / 1e3;
        GAME_SERVER && (this.face = move.dir);
        base = base || this.node.position;
        var pos = cc.v2(base.x + dx, base.y + dy);
        var playerHW = 45;
        var top, bottom, left, right;
        top = 720 - playerHW;
        bottom = playerHW;
        if (1 == this.team) {
          left = playerHW;
          right = 640 - playerHW;
        } else {
          left = 640 + playerHW;
          right = 1280 - playerHW;
        }
        pos.x < left && (pos.x = left);
        pos.x > right && (pos.x = right);
        pos.y < bottom && (pos.y = bottom);
        pos.y > top && (pos.y = top);
        return pos;
      };
      Player.prototype.applyAction = function(action) {
        if (this.death) return;
        if (action.action == PlayerAction.FIRE_THROW) {
          var obj = NetModules_1.NetManager.instance.getNetObject(this.bindFireId);
          if (obj) {
            obj.getComponent(bomb_1.default).setThrowDirection(action.data);
            this.bindFireId = "";
          } else cc.warn("Can not get Fire object: " + this.bindFireId);
        } else if (action.action == PlayerAction.FAST_SPEED) {
          var active = action.data;
          this.speed = this.calcSpeed(active);
        }
      };
      Player.prototype.onThrowFire = function(cancel, target) {
        if (!this.bindFireId && this.death) return;
        if (!cancel) {
          target || (target = cc.v2(Math.cos(cc.misc.degreesToRadians(this.face)), Math.sin(cc.misc.degreesToRadians(this.face))));
          var action = {
            action: PlayerAction.FIRE_THROW,
            data: target
          };
          this.netPlayer.playerAction(action);
        }
        this.pathVisual.node.active = false;
      };
      Player.prototype.onFastSpeed = function(fast) {
        if (this.strength <= 0 && true == fast) return;
        var action = {
          action: PlayerAction.FAST_SPEED,
          data: fast
        };
        this.netPlayer.playerAction(action);
      };
      Player.prototype.calcSpeed = function(fast) {
        void 0 === fast && (fast = false);
        if (this.strength > 0 && fast) return this.normalSpeed + 1 * this.normalSpeed;
        var speed = this.normalSpeed;
        this.strength < 50 && (speed -= .7 * this.normalSpeed);
        return speed;
      };
      Player.prototype.onCollisionEnter = function(other, self) {
        if (0 == other.tag && !this.bindFireId) {
          var fire = other.node.getComponent(bomb_1.default);
          if (fire.canCapture()) {
            fire.setBindPlayer(this.netPlayer.id);
            this.bindFireId = other.node.getComponent(NetModules_1.NetComponent).id;
          }
        }
        1 == other.tag && (this.health -= 1);
      };
      Player.prototype.onBindFireExplore = function(id) {
        id == this.bindFireId && (this.bindFireId = "");
      };
      Player.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      var Player_1;
      Player.EVT_DEATH = "pdeath";
      Player.EVT_DEATH_TIME = "pdeathtime";
      Player.EVT_REVIVE = "previve";
      __decorate([ property({
        displayName: "Speed"
      }) ], Player.prototype, "normalSpeed", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "display", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "playerName", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "healthNode", void 0);
      __decorate([ property() ], Player.prototype, "maxHeath", void 0);
      __decorate([ property() ], Player.prototype, "maxFireRange", void 0);
      __decorate([ property(path_visual_1.default) ], Player.prototype, "pathVisual", void 0);
      __decorate([ NetModules_1.SyncVar() ], Player.prototype, "face", void 0);
      __decorate([ NetModules_1.SyncVar() ], Player.prototype, "team", void 0);
      __decorate([ NetModules_1.SyncVar() ], Player.prototype, "health", void 0);
      __decorate([ NetModules_1.SyncVar() ], Player.prototype, "bindFireId", void 0);
      __decorate([ NetModules_1.SyncVar() ], Player.prototype, "strength", void 0);
      __decorate([ NetModules_1.SyncVar() ], Player.prototype, "speed", void 0);
      __decorate([ NetModules_1.ServerOnly ], Player.prototype, "onCollisionEnter", null);
      __decorate([ NetModules_1.ServerOnly ], Player.prototype, "onBindFireExplore", null);
      Player = Player_1 = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../core/global-var": "global-var",
    "../libs/multiplayer/components/NetModules": "NetModules",
    "./bomb": "bomb",
    "./input/input": "input",
    "./path-visual": "path-visual"
  } ],
  polyglot: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "fc9daZr2NhGiIHGcSpiJP7z", "polyglot");
      "use strict";
      var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      (function(root, factory) {
        "function" === typeof define && define.amd ? define([], function() {
          return factory(root);
        }) : "object" === ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? module.exports = factory(root) : root.Polyglot = factory(root);
      })("undefined" !== typeof global ? global : void 0, function(root) {
        var replace = String.prototype.replace;
        function Polyglot(options) {
          options = options || {};
          this.phrases = {};
          this.extend(options.phrases || {});
          this.currentLocale = options.locale || "en";
          this.allowMissing = !!options.allowMissing;
          this.warn = options.warn || warn;
        }
        Polyglot.VERSION = "1.0.0";
        Polyglot.prototype.locale = function(newLocale) {
          newLocale && (this.currentLocale = newLocale);
          return this.currentLocale;
        };
        Polyglot.prototype.extend = function(morePhrases, prefix) {
          var phrase;
          for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === ("undefined" === typeof phrase ? "undefined" : _typeof(phrase)) ? this.extend(phrase, key) : this.phrases[key] = phrase;
          }
        };
        Polyglot.prototype.unset = function(morePhrases, prefix) {
          var phrase;
          if ("string" === typeof morePhrases) delete this.phrases[morePhrases]; else for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === ("undefined" === typeof phrase ? "undefined" : _typeof(phrase)) ? this.unset(phrase, key) : delete this.phrases[key];
          }
        };
        Polyglot.prototype.clear = function() {
          this.phrases = {};
        };
        Polyglot.prototype.replace = function(newPhrases) {
          this.clear();
          this.extend(newPhrases);
        };
        Polyglot.prototype.t = function(key, options) {
          var phrase, result;
          options = null == options ? {} : options;
          "number" === typeof options && (options = {
            smart_count: options
          });
          if ("string" === typeof this.phrases[key]) phrase = this.phrases[key]; else if ("string" === typeof options._) phrase = options._; else if (this.allowMissing) phrase = key; else {
            this.warn('Missing translation for key: "' + key + '"');
            result = key;
          }
          if ("string" === typeof phrase) {
            options = clone(options);
            result = choosePluralForm(phrase, this.currentLocale, options.smart_count);
            result = interpolate(result, options);
          }
          return result;
        };
        Polyglot.prototype.has = function(key) {
          return key in this.phrases;
        };
        var delimeter = "||||";
        var pluralTypes = {
          chinese: function chinese(n) {
            return 0;
          },
          german: function german(n) {
            return 1 !== n ? 1 : 0;
          },
          french: function french(n) {
            return n > 1 ? 1 : 0;
          },
          russian: function russian(n) {
            return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          czech: function czech(n) {
            return 1 === n ? 0 : n >= 2 && n <= 4 ? 1 : 2;
          },
          polish: function polish(n) {
            return 1 === n ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          icelandic: function icelandic(n) {
            return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
          }
        };
        var pluralTypeToLanguages = {
          chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
          german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
          french: [ "fr", "tl", "pt-br" ],
          russian: [ "hr", "ru" ],
          czech: [ "cs", "sk" ],
          polish: [ "pl" ],
          icelandic: [ "is" ]
        };
        function langToTypeMap(mapping) {
          var type, langs, l, ret = {};
          for (type in mapping) if (mapping.hasOwnProperty(type)) {
            langs = mapping[type];
            for (l in langs) ret[langs[l]] = type;
          }
          return ret;
        }
        var trimRe = /^\s+|\s+$/g;
        function trim(str) {
          return replace.call(str, trimRe, "");
        }
        function choosePluralForm(text, locale, count) {
          var ret, texts, chosenText;
          if (null != count && text) {
            texts = text.split(delimeter);
            chosenText = texts[pluralTypeIndex(locale, count)] || texts[0];
            ret = trim(chosenText);
          } else ret = text;
          return ret;
        }
        function pluralTypeName(locale) {
          var langToPluralType = langToTypeMap(pluralTypeToLanguages);
          return langToPluralType[locale] || langToPluralType.en;
        }
        function pluralTypeIndex(locale, count) {
          return pluralTypes[pluralTypeName(locale)](count);
        }
        var dollarRegex = /\$/g;
        var dollarBillsYall = "$$$$";
        function interpolate(phrase, options) {
          for (var arg in options) if ("_" !== arg && options.hasOwnProperty(arg)) {
            var replacement = options[arg];
            "string" === typeof replacement && (replacement = replace.call(options[arg], dollarRegex, dollarBillsYall));
            phrase = replace.call(phrase, new RegExp("%\\{" + arg + "\\}", "g"), replacement);
          }
          return phrase;
        }
        function warn(message) {
          root.console && root.console.warn && root.console.warn("WARNING: " + message);
        }
        function clone(source) {
          var ret = {};
          for (var prop in source) ret[prop] = source[prop];
          return ret;
        }
        return Polyglot;
      });
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2517+l3BlDPqhUWyhQt7/S", "popup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Popup = function(_super) {
      __extends(Popup, _super);
      function Popup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dialogPopup = null;
        _this.waitingPopup = null;
        _this.notifyPopup = null;
        _this.waitingPopupNode = null;
        return _this;
      }
      Popup_1 = Popup;
      Object.defineProperty(Popup, "instance", {
        get: function() {
          if (this._instance) return this._instance;
          cc.error("Popup does not init yet, this need to be init in loader");
          return null;
        },
        enumerable: true,
        configurable: true
      });
      Popup.prototype.onLoad = function() {
        Popup_1._instance = this;
        cc.game.addPersistRootNode(this.node);
        this.node.zIndex = 1e3;
      };
      Popup.prototype.showInfoPopup = function(content, closeCallback) {
        var canvas = cc.find("Canvas");
        var node = cc.instantiate(this.dialogPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = canvas;
        blockInput.left = 0;
        blockInput.right = 0;
        var contentNode = node.getChildByName("content");
        contentNode.getChildByName("content-text").getComponent(cc.Label).string = content;
        contentNode.getChildByName("positivebutton").active = false;
        contentNode.getChildByName("negativebutton").active = false;
        var button = contentNode.getChildByName("okbutton").getComponent(cc.Button);
        button.node.on("click", function() {
          node.removeFromParent();
          closeCallback && closeCallback();
        });
        canvas.addChild(node);
        this.playAppearAnim(contentNode, canvas);
      };
      Popup.prototype.showConfirmPopup = function(content, positiveButLabel, negativeButLabel, positiveCallback, negativeCallback) {
        var canvas = cc.find("Canvas");
        var node = cc.instantiate(this.dialogPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = canvas;
        blockInput.left = 0;
        blockInput.right = 0;
        var contentNode = node.getChildByName("content");
        contentNode.getChildByName("content-text").getComponent(cc.Label).string = content;
        contentNode.getChildByName("okbutton").active = false;
        contentNode.getChildByName("positivebutton").getComponentInChildren(cc.Label).string = positiveButLabel;
        contentNode.getChildByName("negativebutton").getComponentInChildren(cc.Label).string = negativeButLabel;
        var button1 = contentNode.getChildByName("positivebutton").getComponent(cc.Button);
        button1.node.on("click", function() {
          node.removeFromParent();
          positiveCallback && positiveCallback();
        });
        var button2 = contentNode.getChildByName("negativebutton").getComponent(cc.Button);
        button2.node.on("click", function() {
          node.removeFromParent();
          negativeCallback && negativeCallback();
        });
        canvas.addChild(node);
        this.playAppearAnim(contentNode, canvas);
      };
      Popup.prototype.showWaitingPopup = function(content, cacelable, closeCallback) {
        var _this = this;
        void 0 === cacelable && (cacelable = false);
        this.hideWaitingPopup();
        var canvas = cc.find("Canvas");
        var node = cc.instantiate(this.waitingPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = canvas;
        blockInput.left = 0;
        blockInput.right = 0;
        var contentNode = node.getChildByName("content");
        contentNode.getChildByName("content-text").getComponentInChildren(cc.Label).string = content;
        var closeButton = contentNode.getComponentInChildren(cc.Button).node;
        closeButton.active = cacelable;
        cacelable && closeButton.on("click", function() {
          _this.hideWaitingPopup();
          closeCallback && closeCallback();
        });
        this.waitingPopupNode = node;
        canvas.addChild(node);
        this.playAppearAnim(contentNode, canvas);
      };
      Popup.prototype.hideWaitingPopup = function() {
        this.waitingPopupNode && this.waitingPopupNode.removeFromParent();
      };
      Popup.prototype.showNotify = function(content, duration) {
        void 0 === duration && (duration = 3);
        var node = cc.instantiate(this.notifyPopup);
        node.getChildByName("content").getChildByName("content-text").getComponentInChildren(cc.Label).string = content;
        cc.find("Canvas").addChild(node);
        this.scheduleOnce(function() {
          node.removeFromParent();
        }, duration);
      };
      Popup.prototype.playAppearAnim = function(node, container) {
        var h = node.height;
        var ch = container.height;
        node.setPosition(node.x, h + ch / 2);
        node.runAction(cc.moveBy(.3, 0, -(h + ch / 2)).easing(cc.easeSineOut()));
      };
      var Popup_1;
      Popup._instance = null;
      __decorate([ property(cc.Prefab) ], Popup.prototype, "dialogPopup", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "waitingPopup", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "notifyPopup", void 0);
      Popup = Popup_1 = __decorate([ ccclass ], Popup);
      return Popup;
    }(cc.Component);
    exports.default = Popup;
    cc._RF.pop();
  }, {} ],
  prettyByte: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6badGZGolKVLuiyXxNMeI9", "prettyByte");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function prettyByte(byte) {
      return (byte < 0 ? "-" : "") + "0x" + Math.abs(byte).toString(16).padStart(2, "0");
    }
    exports.prettyByte = prettyByte;
    cc._RF.pop();
  }, {} ],
  "sound-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59e6dC1iuNE15G3c1/RKO6a", "sound-manager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var event_manager_1 = require("./event-manager");
    var SoundManager = function() {
      function SoundManager() {
        this.sounds = {};
        this.playingSounds = {};
        this.initialized = false;
        this.enable = true;
        this.effectEnable = true;
        this.musicEnable = true;
        this.DEBUG_LOG = false;
      }
      SoundManager_1 = SoundManager;
      Object.defineProperty(SoundManager, "instance", {
        get: function() {
          null == SoundManager_1._instance && (SoundManager_1._instance = new SoundManager_1());
          return SoundManager_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SoundManager.prototype, "soundEnable", {
        get: function() {
          return this.enable;
        },
        enumerable: true,
        configurable: true
      });
      SoundManager.prototype.setEnable = function(enable) {
        this.enable = enable;
        cc.sys.localStorage.setItem("Sound_enable", enable ? 1 : 0);
        this.setEffectEnable(enable);
        this.setMusicEnable(enable);
      };
      Object.defineProperty(SoundManager.prototype, "soundEffectEnable", {
        get: function() {
          return this.effectEnable;
        },
        enumerable: true,
        configurable: true
      });
      SoundManager.prototype.setEffectEnable = function(enable) {
        this.effectEnable = enable;
        cc.sys.localStorage.setItem("Sound_effect_enable", enable ? 1 : 0);
      };
      Object.defineProperty(SoundManager.prototype, "soundMusicEnable", {
        get: function() {
          return this.musicEnable;
        },
        enumerable: true,
        configurable: true
      });
      SoundManager.prototype.setMusicEnable = function(enable) {
        this.musicEnable = enable;
        cc.sys.localStorage.setItem("Sound_music_enable", enable ? 1 : 0);
      };
      SoundManager.prototype.log = function(message) {
        this.DEBUG_LOG && cc.log(message);
      };
      SoundManager.prototype.error = function(message) {
        this.DEBUG_LOG && cc.error(message);
      };
      SoundManager.prototype.init = function() {
        var _this = this;
        cc.loader.loadResDir("sounds", cc.AudioClip, function(error, assets, urls) {
          urls.length > 0 && assets.forEach(function(sound, index) {
            _this.sounds[sound.name] = sound;
          });
          _this.initialized = true;
          _this.enable = !cc.sys.localStorage.getItem("Sound_enable") || 1 == parseInt(cc.sys.localStorage.getItem("Sound_enable"));
          _this.effectEnable = !cc.sys.localStorage.getItem("Sound_effect_enable") || 1 == parseInt(cc.sys.localStorage.getItem("Sound_effect_enable"));
          _this.musicEnable = !cc.sys.localStorage.getItem("Sound_music_enable") || 1 == parseInt(cc.sys.localStorage.getItem("Sound_music_enable"));
          cc.log("sound init");
          event_manager_1.default.instance.dispatch("Sound_initialized");
        });
      };
      SoundManager.prototype.playMusic = function(clipName, loop) {
        void 0 === loop && (loop = true);
        if (!this.musicEnable || !this.initialized) return null;
        clipName = clipName.toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play music: " + clipName);
          var id = cc.audioEngine.playMusic(this.sounds[clipName], loop);
          this.playingSounds[clipName] = id;
          return id;
        }
        this.error("playMusic - clipName: " + clipName + " not found");
        return null;
      };
      SoundManager.prototype.playEffect = function(clipName, loop) {
        void 0 === loop && (loop = false);
        if (!this.enable || !this.initialized) return null;
        clipName = clipName.toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play effect: " + clipName);
          var id = cc.audioEngine.playEffect(this.sounds[clipName], loop);
          this.playingSounds[clipName] = id;
          return id;
        }
        this.error("playEffect - clipName: " + clipName + " not found");
        return null;
      };
      SoundManager.prototype.playRandom = function(clipsName, loop, effect) {
        void 0 === loop && (loop = false);
        void 0 === effect && (effect = true);
        if (!this.enable || !this.initialized) return null;
        var idx = Math.floor(Math.random() * clipsName.length);
        var clipName = clipsName[idx].toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play random: " + clipName);
          var id = null;
          id = effect ? this.playEffect(clipName, loop) : this.playMusic(clipName, loop);
          this.playingSounds[clipName] = id;
          return id;
        }
        this.error("playRandom - clipName: " + clipsName[idx] + " not found");
        return null;
      };
      SoundManager.prototype.pause = function(clipName) {
        if (!this.enable) return;
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName] && cc.audioEngine.getState(this.playingSounds[clipName]) === cc.audioEngine.AudioState.PLAYING) cc.audioEngine.pause(this.playingSounds[clipName]); else {
          this.error("Pause sound: " + clipName + " is not in playing list");
          delete this.playingSounds[clipName];
        }
      };
      SoundManager.prototype.resume = function(clipName) {
        if (!this.enable) return;
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName] && cc.audioEngine.getState(this.playingSounds[clipName]) === cc.audioEngine.AudioState.PAUSED) cc.audioEngine.resume(this.playingSounds[clipName]); else {
          this.error("Resume sound: " + clipName + " is not in pause list");
          delete this.playingSounds[clipName];
        }
      };
      SoundManager.prototype.stop = function(clipName) {
        if (!this.enable) return;
        this.log("stop sound: " + clipName);
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName]) {
          cc.audioEngine.stop(this.playingSounds[clipName]);
          delete this.playingSounds[clipName];
        } else this.error("Stop sound: " + clipName + " is not in playing list");
      };
      SoundManager.prototype.isPlaying = function(clipName) {
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName]) {
          var state = cc.audioEngine.getState(this.playingSounds[clipName]);
          return state == cc.audioEngine.AudioState.PLAYING;
        }
        return false;
      };
      SoundManager.prototype.pauseAll = function() {
        cc.audioEngine.pauseAll();
      };
      SoundManager.prototype.resumeAll = function() {
        if (!this.enable) return;
        cc.audioEngine.resumeAll();
      };
      SoundManager.prototype.stopAll = function() {
        if (!this.enable) return;
        cc.audioEngine.stopAll();
      };
      SoundManager.prototype.setMusicVolume = function(volume) {
        if (!this.musicEnable) return;
        cc.audioEngine.setMusicVolume(volume);
      };
      SoundManager.prototype.setEffectVolume = function(volume) {
        if (!this.effectEnable) return;
        cc.audioEngine.setEffectsVolume(volume);
      };
      SoundManager.prototype.getSoundId = function(clipName) {
        clipName = clipName.toLowerCase();
        return this.playingSounds[clipName];
      };
      var SoundManager_1;
      SoundManager._instance = null;
      SoundManager = SoundManager_1 = __decorate([ ccclass ], SoundManager);
      return SoundManager;
    }();
    exports.default = SoundManager;
    cc._RF.pop();
  }, {
    "./event-manager": "event-manager"
  } ],
  stream: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5584dbNgdEMZrqyIe6ZVSp", "stream");
    "use strict";
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __await = this && this.__await || function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    var __asyncGenerator = this && this.__asyncGenerator || function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        g[n] && (i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([ n, v, a, b ]) > 1 || resume(n, v);
          });
        });
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        (f(v), q.shift(), q.length) && resume(q[0][0], q[0][1]);
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function isAsyncIterable(object) {
      return null != object[Symbol.asyncIterator];
    }
    exports.isAsyncIterable = isAsyncIterable;
    function asyncIterableFromStream(stream) {
      return __asyncGenerator(this, arguments, function asyncIterableFromStream_1() {
        var reader, _a, done, value;
        return __generator(this, function(_b) {
          switch (_b.label) {
           case 0:
            reader = stream.getReader();
            _b.label = 1;

           case 1:
            _b.trys.push([ 1, , 9, 10 ]);
            _b.label = 2;

           case 2:
            false;
            return [ 4, __await(reader.read()) ];

           case 3:
            _a = _b.sent(), done = _a.done, value = _a.value;
            if (!done) return [ 3, 5 ];
            return [ 4, __await(void 0) ];

           case 4:
            return [ 2, _b.sent() ];

           case 5:
            return [ 4, __await(value) ];

           case 6:
            return [ 4, _b.sent() ];

           case 7:
            _b.sent();
            return [ 3, 2 ];

           case 8:
            return [ 3, 10 ];

           case 9:
            reader.releaseLock();
            return [ 7 ];

           case 10:
            return [ 2 ];
          }
        });
      });
    }
    exports.asyncIterableFromStream = asyncIterableFromStream;
    function ensureAsyncIterabe(streamLike) {
      return isAsyncIterable(streamLike) ? streamLike : asyncIterableFromStream(streamLike);
    }
    exports.ensureAsyncIterabe = ensureAsyncIterabe;
    cc._RF.pop();
  }, {} ],
  "strength-control": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2dc5D+2OVLIYg/FMUmQvBj", "strength-control");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var input_1 = require("./input/input");
    var player_1 = require("./player");
    var NetManager_1 = require("../libs/multiplayer/components/NetManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StrengthControl = function(_super) {
      __extends(StrengthControl, _super);
      function StrengthControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.color = cc.color(57, 164, 136);
        return _this;
      }
      StrengthControl.prototype.start = function() {
        this.strengthProgress = this.getComponent(cc.ProgressBar);
        this.strengthProgress.progress = 1;
        this.node.opacity = 150;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      StrengthControl.prototype.onTouchStart = function() {
        this.node.opacity = 255;
        input_1.default.instance.setFastSpeedMode(true);
      };
      StrengthControl.prototype.onTouchEnd = function() {
        this.node.opacity = 150;
        input_1.default.instance.setFastSpeedMode(false);
      };
      StrengthControl.prototype.update = function(dt) {
        !this.localPlayer && NetManager_1.NetManager.instance.getLocalPlayer() && (this.localPlayer = NetManager_1.NetManager.instance.getLocalPlayer().getComponent(player_1.default));
        if (this.localPlayer) {
          var p = this.localPlayer.strength / 100;
          this.strengthProgress.progress = p;
          this.strengthProgress.barSprite.node.color = cc.Color.RED.lerp(this.color, p);
        }
      };
      StrengthControl = __decorate([ ccclass ], StrengthControl);
      return StrengthControl;
    }(cc.Component);
    exports.default = StrengthControl;
    cc._RF.pop();
  }, {
    "../libs/multiplayer/components/NetManager": "NetManager",
    "./input/input": "input",
    "./player": "player"
  } ],
  timestamp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01438CzJmNIk7E8LbQQgRA1", "timestamp");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var int_1 = require("./utils/int");
    exports.EXT_TIMESTAMP = -1;
    var TIMESTAMP32_MAX_SEC = 4294967295;
    var TIMESTAMP64_MAX_SEC = 17179869183;
    function encodeTimeSpecToTimestamp(_a) {
      var sec = _a.sec, nsec = _a.nsec;
      if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        if (0 === nsec && sec <= TIMESTAMP32_MAX_SEC) {
          var rv = new Uint8Array(4);
          var view = new DataView(rv.buffer);
          view.setUint32(0, sec);
          return rv;
        }
        var secHigh = sec / 4294967296;
        var secLow = 4294967295 & sec;
        var rv = new Uint8Array(8);
        var view = new DataView(rv.buffer);
        view.setUint32(0, nsec << 2 | 3 & secHigh);
        view.setUint32(4, secLow);
        return rv;
      }
      var rv = new Uint8Array(12);
      var view = new DataView(rv.buffer);
      view.setUint32(0, nsec);
      int_1.setInt64(view, 4, sec);
      return rv;
    }
    exports.encodeTimeSpecToTimestamp = encodeTimeSpecToTimestamp;
    function encodeDateToTimeSpec(date) {
      var msec = date.getTime();
      var sec = Math.floor(msec / 1e3);
      var nsec = 1e6 * (msec - 1e3 * sec);
      var nsecInSec = Math.floor(nsec / 1e9);
      return {
        sec: sec + nsecInSec,
        nsec: nsec - 1e9 * nsecInSec
      };
    }
    exports.encodeDateToTimeSpec = encodeDateToTimeSpec;
    function encodeTimestampExtension(object) {
      if (object instanceof Date) {
        var timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
      }
      return null;
    }
    exports.encodeTimestampExtension = encodeTimestampExtension;
    function decodeTimestampToTimeSpec(data) {
      switch (data.byteLength) {
       case 4:
        var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
        var sec = view.getUint32(0);
        var nsec = 0;
        return {
          sec: sec,
          nsec: nsec
        };

       case 8:
        var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
        var nsec30AndSecHigh2 = view.getUint32(0);
        var secLow32 = view.getUint32(4);
        var sec = 4294967296 * (3 & nsec30AndSecHigh2) + secLow32;
        var nsec = nsec30AndSecHigh2 >>> 2;
        return {
          sec: sec,
          nsec: nsec
        };

       case 12:
        var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
        var sec = int_1.getInt64(view, 4);
        var nsec = view.getUint32(0);
        return {
          sec: sec,
          nsec: nsec
        };

       default:
        throw new Error("Unrecognized data size for timestamp: " + data.length);
      }
    }
    exports.decodeTimestampToTimeSpec = decodeTimestampToTimeSpec;
    function decodeTimestampExtension(data) {
      var timeSpec = decodeTimestampToTimeSpec(data);
      return new Date(1e3 * timeSpec.sec + timeSpec.nsec / 1e6);
    }
    exports.decodeTimestampExtension = decodeTimestampExtension;
    exports.timestampExtension = {
      type: exports.EXT_TIMESTAMP,
      encode: encodeTimestampExtension,
      decode: decodeTimestampExtension
    };
    cc._RF.pop();
  }, {
    "./utils/int": "int"
  } ],
  typedArrays: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbd577wd9RG3ZPr6dHF0szE", "typedArrays");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function ensureUint8Array(buffer) {
      return buffer instanceof Uint8Array ? buffer : ArrayBuffer.isView(buffer) ? new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) : Uint8Array.from(buffer);
    }
    exports.ensureUint8Array = ensureUint8Array;
    function createDataView(buffer) {
      if (buffer instanceof ArrayBuffer) return new DataView(buffer);
      var bufferView = ensureUint8Array(buffer);
      return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
    }
    exports.createDataView = createDataView;
    cc._RF.pop();
  }, {} ],
  utf8: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5dfb7mfVm5OnJ2gKpn/RVoh", "utf8");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function utf8Count(str) {
      var strLength = str.length;
      var byteLength = 0;
      var pos = 0;
      while (pos < strLength) {
        var value = str.charCodeAt(pos++);
        if (0 === (4294967168 & value)) {
          byteLength++;
          continue;
        }
        if (0 === (4294965248 & value)) byteLength += 2; else {
          if (value >= 55296 && value <= 56319 && pos < strLength) {
            var extra = str.charCodeAt(pos);
            if (56320 === (64512 & extra)) {
              ++pos;
              value = ((1023 & value) << 10) + (1023 & extra) + 65536;
            }
          }
          byteLength += 0 === (4294901760 & value) ? 3 : 4;
        }
      }
      return byteLength;
    }
    exports.utf8Count = utf8Count;
    function utf8EncodeJs(str, output, outputOffset) {
      var strLength = str.length;
      var offset = outputOffset;
      var pos = 0;
      while (pos < strLength) {
        var value = str.charCodeAt(pos++);
        if (0 === (4294967168 & value)) {
          output[offset++] = value;
          continue;
        }
        if (0 === (4294965248 & value)) output[offset++] = value >> 6 & 31 | 192; else {
          if (value >= 55296 && value <= 56319 && pos < strLength) {
            var extra = str.charCodeAt(pos);
            if (56320 === (64512 & extra)) {
              ++pos;
              value = ((1023 & value) << 10) + (1023 & extra) + 65536;
            }
          }
          if (0 === (4294901760 & value)) {
            output[offset++] = value >> 12 & 15 | 224;
            output[offset++] = value >> 6 & 63 | 128;
          } else {
            output[offset++] = value >> 18 & 7 | 240;
            output[offset++] = value >> 12 & 63 | 128;
            output[offset++] = value >> 6 & 63 | 128;
          }
        }
        output[offset++] = 63 & value | 128;
      }
    }
    exports.utf8EncodeJs = utf8EncodeJs;
    var CHUNK_SIZE = 65536;
    function utf8DecodeJs(bytes, inputOffset, byteLength) {
      var offset = inputOffset;
      var end = offset + byteLength;
      var units = [];
      var result = "";
      while (offset < end) {
        var byte1 = bytes[offset++];
        if (0 === (128 & byte1)) units.push(byte1); else if (192 === (224 & byte1)) {
          var byte2 = 63 & bytes[offset++];
          units.push((31 & byte1) << 6 | byte2);
        } else if (224 === (240 & byte1)) {
          var byte2 = 63 & bytes[offset++];
          var byte3 = 63 & bytes[offset++];
          units.push((31 & byte1) << 12 | byte2 << 6 | byte3);
        } else if (240 === (248 & byte1)) {
          var byte2 = 63 & bytes[offset++];
          var byte3 = 63 & bytes[offset++];
          var byte4 = 63 & bytes[offset++];
          var unit = (7 & byte1) << 18 | byte2 << 12 | byte3 << 6 | byte4;
          if (unit > 65535) {
            unit -= 65536;
            units.push(unit >>> 10 & 1023 | 55296);
            unit = 56320 | 1023 & unit;
          }
          units.push(unit);
        } else units.push(byte1);
        if (units.length - 4 >= CHUNK_SIZE) {
          result += String.fromCharCode.apply(String, units);
          units.length = 0;
        }
      }
      units.length > 0 && (result += String.fromCharCode.apply(String, units));
      return result;
    }
    exports.utf8DecodeJs = utf8DecodeJs;
    cc._RF.pop();
  }, {} ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cfb2oIO3hIpYyXE5URmBs6", "utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RandomUnique = function() {
      function RandomUnique(length, recycle) {
        void 0 === recycle && (recycle = false);
        this.unique = [];
        this.initLength = -1;
        this.recycle = false;
        this.initLength = length;
        this.recycle = recycle;
        for (var i = 0; i < length; i++) this.unique[i] = i;
      }
      RandomUnique.prototype.random = function() {
        if (0 == this.unique.length) {
          if (!this.recycle || -1 == this.initLength) return -1;
          for (var i = 0; i < this.initLength; i++) this.unique[i] = i;
        }
        var idx = Math.floor(Math.random() * (this.unique.length - 1));
        var ret = this.unique[idx];
        this.unique.splice(idx, 1);
        return ret;
      };
      return RandomUnique;
    }();
    exports.RandomUnique = RandomUnique;
    var Constant = function() {
      function Constant() {}
      Constant.MAX_SAFE_INTEGER = 9007199254740991;
      Constant.MIN_SAFE_INTEGER = -9007199254740991;
      return Constant;
    }();
    exports.Constant = Constant;
    var Utils = function() {
      function Utils() {}
      Utils.getCurrentSceneName = function() {
        var scene = "";
        cc.game._sceneInfos.forEach(function(element) {
          if (element.uuid == cc.director._scene._id) {
            scene = element.url;
            scene = scene.substring(scene.lastIndexOf("/") + 1).match(/[^\.]+/)[0];
          }
        });
        return scene;
      };
      Utils.lerp = function(from, to, ratio) {
        ratio = ratio < 0 ? 0 : ratio;
        ratio = ratio > 1 ? 1 : ratio;
        return from + (to - from) * ratio;
      };
      Utils.genUId = function() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
      };
      Utils.extend = function(obj, src) {
        if (null == src) return obj;
        null == obj && (obj = {});
        Object.keys(src).forEach(function(key) {
          obj[key] = src[key];
        });
        return obj;
      };
      Utils.randomRange = function(min, max) {
        return Math.random() * (max - min) + min;
      };
      Utils.zeropad = function(n, d) {
        var s = n < 0 ? "-" : "";
        n < 0 && (n = -n);
        var zeroes = d - n.toString().length;
        for (var i = 0; i < zeroes; i++) s += "0";
        return s + n.toString();
      };
      Utils.time2String = function(time) {
        time = Math.floor(time);
        var min = Math.floor(time / 60);
        var sec = time % 60;
        return this.zeropad(min, 2) + ":" + this.zeropad(sec, 2);
      };
      return Utils;
    }();
    exports.Utils = Utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "config", "event-manager", "global-var", "loader", "localization", "localstorage", "popup", "sound-manager", "bomb", "fire-spawner", "game-net", "game", "input-keyboard", "input-touch", "input", "map-scale", "join-team", "live-team-item", "live-team", "lobby", "new-team-item", "new-team", "main-menu", "move-around-control", "matchmaker-control", "path-visual", "player", "strength-control", "Decoder", "Encoder", "ExtData", "ExtensionCodec", "decode", "decodeAsync", "encode", "index", "timestamp", "int", "prettyByte", "stream", "typedArrays", "utf8", "ErrorCode", "MpController", "MpMacher", "NetComponent", "NetConnection", "NetManager", "NetMessageQueue", "NetModules", "NetPlayer", "NetUtils", "player-ref", "utils", "LabelLocalized", "RichTextLocalized", "i18n", "polyglot" ]);
//# sourceMappingURL=project.dev.js.map