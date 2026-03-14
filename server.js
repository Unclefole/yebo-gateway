"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/vary@1.1.2/node_modules/vary/index.js
var require_vary = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/vary@1.1.2/node_modules/vary/index.js"(exports2, module2) {
    "use strict";
    module2.exports = vary;
    module2.exports.append = append;
    var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function append(header, field) {
      if (typeof header !== "string") {
        throw new TypeError("header argument is required");
      }
      if (!field) {
        throw new TypeError("field argument is required");
      }
      var fields = !Array.isArray(field) ? parse(String(field)) : field;
      for (var j = 0; j < fields.length; j++) {
        if (!FIELD_NAME_REGEXP.test(fields[j])) {
          throw new TypeError("field argument contains an invalid header name");
        }
      }
      if (header === "*") {
        return header;
      }
      var val = header;
      var vals = parse(header.toLowerCase());
      if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) {
        return "*";
      }
      for (var i = 0; i < fields.length; i++) {
        var fld = fields[i].toLowerCase();
        if (vals.indexOf(fld) === -1) {
          vals.push(fld);
          val = val ? val + ", " + fields[i] : fields[i];
        }
      }
      return val;
    }
    function parse(header) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = header.length; i < len; i++) {
        switch (header.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            list.push(header.substring(start, end));
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      list.push(header.substring(start, end));
      return list;
    }
    function vary(res, field) {
      if (!res || !res.getHeader || !res.setHeader) {
        throw new TypeError("res argument is required");
      }
      var val = res.getHeader("Vary") || "";
      var header = Array.isArray(val) ? val.join(", ") : String(val);
      if (val = append(header, field)) {
        res.setHeader("Vary", val);
      }
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/cors@2.8.6/node_modules/cors/lib/index.js
var require_lib = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/cors@2.8.6/node_modules/cors/lib/index.js"(exports2, module2) {
    (function() {
      "use strict";
      var assign = require_object_assign();
      var vary = require_vary();
      var defaults = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
      };
      function isString(s) {
        return typeof s === "string" || s instanceof String;
      }
      function isOriginAllowed(origin, allowedOrigin) {
        if (Array.isArray(allowedOrigin)) {
          for (var i = 0; i < allowedOrigin.length; ++i) {
            if (isOriginAllowed(origin, allowedOrigin[i])) {
              return true;
            }
          }
          return false;
        } else if (isString(allowedOrigin)) {
          return origin === allowedOrigin;
        } else if (allowedOrigin instanceof RegExp) {
          return allowedOrigin.test(origin);
        } else {
          return !!allowedOrigin;
        }
      }
      function configureOrigin(options, req) {
        var requestOrigin = req.headers.origin, headers = [], isAllowed;
        if (!options.origin || options.origin === "*") {
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: "*"
          }]);
        } else if (isString(options.origin)) {
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: options.origin
          }]);
          headers.push([{
            key: "Vary",
            value: "Origin"
          }]);
        } else {
          isAllowed = isOriginAllowed(requestOrigin, options.origin);
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: isAllowed ? requestOrigin : false
          }]);
          headers.push([{
            key: "Vary",
            value: "Origin"
          }]);
        }
        return headers;
      }
      function configureMethods(options) {
        var methods = options.methods;
        if (methods.join) {
          methods = options.methods.join(",");
        }
        return {
          key: "Access-Control-Allow-Methods",
          value: methods
        };
      }
      function configureCredentials(options) {
        if (options.credentials === true) {
          return {
            key: "Access-Control-Allow-Credentials",
            value: "true"
          };
        }
        return null;
      }
      function configureAllowedHeaders(options, req) {
        var allowedHeaders = options.allowedHeaders || options.headers;
        var headers = [];
        if (!allowedHeaders) {
          allowedHeaders = req.headers["access-control-request-headers"];
          headers.push([{
            key: "Vary",
            value: "Access-Control-Request-Headers"
          }]);
        } else if (allowedHeaders.join) {
          allowedHeaders = allowedHeaders.join(",");
        }
        if (allowedHeaders && allowedHeaders.length) {
          headers.push([{
            key: "Access-Control-Allow-Headers",
            value: allowedHeaders
          }]);
        }
        return headers;
      }
      function configureExposedHeaders(options) {
        var headers = options.exposedHeaders;
        if (!headers) {
          return null;
        } else if (headers.join) {
          headers = headers.join(",");
        }
        if (headers && headers.length) {
          return {
            key: "Access-Control-Expose-Headers",
            value: headers
          };
        }
        return null;
      }
      function configureMaxAge(options) {
        var maxAge = (typeof options.maxAge === "number" || options.maxAge) && options.maxAge.toString();
        if (maxAge && maxAge.length) {
          return {
            key: "Access-Control-Max-Age",
            value: maxAge
          };
        }
        return null;
      }
      function applyHeaders(headers, res) {
        for (var i = 0, n = headers.length; i < n; i++) {
          var header = headers[i];
          if (header) {
            if (Array.isArray(header)) {
              applyHeaders(header, res);
            } else if (header.key === "Vary" && header.value) {
              vary(res, header.value);
            } else if (header.value) {
              res.setHeader(header.key, header.value);
            }
          }
        }
      }
      function cors2(options, req, res, next) {
        var headers = [], method = req.method && req.method.toUpperCase && req.method.toUpperCase();
        if (method === "OPTIONS") {
          headers.push(configureOrigin(options, req));
          headers.push(configureCredentials(options));
          headers.push(configureMethods(options));
          headers.push(configureAllowedHeaders(options, req));
          headers.push(configureMaxAge(options));
          headers.push(configureExposedHeaders(options));
          applyHeaders(headers, res);
          if (options.preflightContinue) {
            next();
          } else {
            res.statusCode = options.optionsSuccessStatus;
            res.setHeader("Content-Length", "0");
            res.end();
          }
        } else {
          headers.push(configureOrigin(options, req));
          headers.push(configureCredentials(options));
          headers.push(configureExposedHeaders(options));
          applyHeaders(headers, res);
          next();
        }
      }
      function middlewareWrapper(o) {
        var optionsCallback = null;
        if (typeof o === "function") {
          optionsCallback = o;
        } else {
          optionsCallback = function(req, cb) {
            cb(null, o);
          };
        }
        return function corsMiddleware(req, res, next) {
          optionsCallback(req, function(err, options) {
            if (err) {
              next(err);
            } else {
              var corsOptions = assign({}, defaults, options);
              var originCallback = null;
              if (corsOptions.origin && typeof corsOptions.origin === "function") {
                originCallback = corsOptions.origin;
              } else if (corsOptions.origin) {
                originCallback = function(origin, cb) {
                  cb(null, corsOptions.origin);
                };
              }
              if (originCallback) {
                originCallback(req.headers.origin, function(err2, origin) {
                  if (err2 || !origin) {
                    next(err2);
                  } else {
                    corsOptions.origin = origin;
                    cors2(corsOptions, req, res, next);
                  }
                });
              } else {
                next();
              }
            }
          });
        };
      }
      module2.exports = middlewareWrapper;
    })();
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/common.js
var require_common = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isInSubnet = isInSubnet;
    exports2.isCorrect = isCorrect;
    exports2.numberToPaddedHex = numberToPaddedHex;
    exports2.stringToPaddedHex = stringToPaddedHex;
    exports2.testBit = testBit;
    function isInSubnet(address) {
      if (this.subnetMask < address.subnetMask) {
        return false;
      }
      if (this.mask(address.subnetMask) === address.mask()) {
        return true;
      }
      return false;
    }
    function isCorrect(defaultBits) {
      return function() {
        if (this.addressMinusSuffix !== this.correctForm()) {
          return false;
        }
        if (this.subnetMask === defaultBits && !this.parsedSubnet) {
          return true;
        }
        return this.parsedSubnet === String(this.subnetMask);
      };
    }
    function numberToPaddedHex(number) {
      return number.toString(16).padStart(2, "0");
    }
    function stringToPaddedHex(numberString) {
      return numberToPaddedHex(parseInt(numberString, 10));
    }
    function testBit(binaryValue, position) {
      const { length } = binaryValue;
      if (position > length) {
        return false;
      }
      const positionInString = length - position;
      return binaryValue.substring(positionInString, positionInString + 1) === "1";
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v4/constants.js
var require_constants = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v4/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RE_SUBNET_STRING = exports2.RE_ADDRESS = exports2.GROUPS = exports2.BITS = void 0;
    exports2.BITS = 32;
    exports2.GROUPS = 4;
    exports2.RE_ADDRESS = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
    exports2.RE_SUBNET_STRING = /\/\d{1,2}$/;
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/address-error.js
var require_address_error = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/address-error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AddressError = void 0;
    var AddressError = class extends Error {
      constructor(message, parseMessage) {
        super(message);
        this.name = "AddressError";
        this.parseMessage = parseMessage;
      }
    };
    exports2.AddressError = AddressError;
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/ipv4.js
var require_ipv4 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/ipv4.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Address4 = void 0;
    var common = __importStar(require_common());
    var constants = __importStar(require_constants());
    var address_error_1 = require_address_error();
    var Address4 = class _Address4 {
      constructor(address) {
        this.groups = constants.GROUPS;
        this.parsedAddress = [];
        this.parsedSubnet = "";
        this.subnet = "/32";
        this.subnetMask = 32;
        this.v4 = true;
        this.isCorrect = common.isCorrect(constants.BITS);
        this.isInSubnet = common.isInSubnet;
        this.address = address;
        const subnet = constants.RE_SUBNET_STRING.exec(address);
        if (subnet) {
          this.parsedSubnet = subnet[0].replace("/", "");
          this.subnetMask = parseInt(this.parsedSubnet, 10);
          this.subnet = `/${this.subnetMask}`;
          if (this.subnetMask < 0 || this.subnetMask > constants.BITS) {
            throw new address_error_1.AddressError("Invalid subnet mask.");
          }
          address = address.replace(constants.RE_SUBNET_STRING, "");
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(address);
      }
      static isValid(address) {
        try {
          new _Address4(address);
          return true;
        } catch (e) {
          return false;
        }
      }
      /*
       * Parses a v4 address
       */
      parse(address) {
        const groups = address.split(".");
        if (!address.match(constants.RE_ADDRESS)) {
          throw new address_error_1.AddressError("Invalid IPv4 address.");
        }
        return groups;
      }
      /**
       * Returns the correct form of an address
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      correctForm() {
        return this.parsedAddress.map((part) => parseInt(part, 10)).join(".");
      }
      /**
       * Converts a hex string to an IPv4 address object
       * @memberof Address4
       * @static
       * @param {string} hex - a hex string to convert
       * @returns {Address4}
       */
      static fromHex(hex) {
        const padded = hex.replace(/:/g, "").padStart(8, "0");
        const groups = [];
        let i;
        for (i = 0; i < 8; i += 2) {
          const h = padded.slice(i, i + 2);
          groups.push(parseInt(h, 16));
        }
        return new _Address4(groups.join("."));
      }
      /**
       * Converts an integer into a IPv4 address object
       * @memberof Address4
       * @static
       * @param {integer} integer - a number to convert
       * @returns {Address4}
       */
      static fromInteger(integer) {
        return _Address4.fromHex(integer.toString(16));
      }
      /**
       * Return an address from in-addr.arpa form
       * @memberof Address4
       * @static
       * @param {string} arpaFormAddress - an 'in-addr.arpa' form ipv4 address
       * @returns {Adress4}
       * @example
       * var address = Address4.fromArpa(42.2.0.192.in-addr.arpa.)
       * address.correctForm(); // '192.0.2.42'
       */
      static fromArpa(arpaFormAddress) {
        const leader = arpaFormAddress.replace(/(\.in-addr\.arpa)?\.$/, "");
        const address = leader.split(".").reverse().join(".");
        return new _Address4(address);
      }
      /**
       * Converts an IPv4 address object to a hex string
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      toHex() {
        return this.parsedAddress.map((part) => common.stringToPaddedHex(part)).join(":");
      }
      /**
       * Converts an IPv4 address object to an array of bytes
       * @memberof Address4
       * @instance
       * @returns {Array}
       */
      toArray() {
        return this.parsedAddress.map((part) => parseInt(part, 10));
      }
      /**
       * Converts an IPv4 address object to an IPv6 address group
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      toGroup6() {
        const output = [];
        let i;
        for (i = 0; i < constants.GROUPS; i += 2) {
          output.push(`${common.stringToPaddedHex(this.parsedAddress[i])}${common.stringToPaddedHex(this.parsedAddress[i + 1])}`);
        }
        return output.join(":");
      }
      /**
       * Returns the address as a `bigint`
       * @memberof Address4
       * @instance
       * @returns {bigint}
       */
      bigInt() {
        return BigInt(`0x${this.parsedAddress.map((n) => common.stringToPaddedHex(n)).join("")}`);
      }
      /**
       * Helper function getting start address.
       * @memberof Address4
       * @instance
       * @returns {bigint}
       */
      _startAddress() {
        return BigInt(`0b${this.mask() + "0".repeat(constants.BITS - this.subnetMask)}`);
      }
      /**
       * The first address in the range given by this address' subnet.
       * Often referred to as the Network Address.
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      startAddress() {
        return _Address4.fromBigInt(this._startAddress());
      }
      /**
       * The first host address in the range given by this address's subnet ie
       * the first address after the Network Address
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      startAddressExclusive() {
        const adjust = BigInt("1");
        return _Address4.fromBigInt(this._startAddress() + adjust);
      }
      /**
       * Helper function getting end address.
       * @memberof Address4
       * @instance
       * @returns {bigint}
       */
      _endAddress() {
        return BigInt(`0b${this.mask() + "1".repeat(constants.BITS - this.subnetMask)}`);
      }
      /**
       * The last address in the range given by this address' subnet
       * Often referred to as the Broadcast
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      endAddress() {
        return _Address4.fromBigInt(this._endAddress());
      }
      /**
       * The last host address in the range given by this address's subnet ie
       * the last address prior to the Broadcast Address
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      endAddressExclusive() {
        const adjust = BigInt("1");
        return _Address4.fromBigInt(this._endAddress() - adjust);
      }
      /**
       * Converts a BigInt to a v4 address object
       * @memberof Address4
       * @static
       * @param {bigint} bigInt - a BigInt to convert
       * @returns {Address4}
       */
      static fromBigInt(bigInt) {
        return _Address4.fromHex(bigInt.toString(16));
      }
      /**
       * Convert a byte array to an Address4 object
       * @memberof Address4
       * @static
       * @param {Array<number>} bytes - an array of 4 bytes (0-255)
       * @returns {Address4}
       */
      static fromByteArray(bytes) {
        if (bytes.length !== 4) {
          throw new address_error_1.AddressError("IPv4 addresses require exactly 4 bytes");
        }
        for (let i = 0; i < bytes.length; i++) {
          if (!Number.isInteger(bytes[i]) || bytes[i] < 0 || bytes[i] > 255) {
            throw new address_error_1.AddressError("All bytes must be integers between 0 and 255");
          }
        }
        return this.fromUnsignedByteArray(bytes);
      }
      /**
       * Convert an unsigned byte array to an Address4 object
       * @memberof Address4
       * @static
       * @param {Array<number>} bytes - an array of 4 unsigned bytes (0-255)
       * @returns {Address4}
       */
      static fromUnsignedByteArray(bytes) {
        if (bytes.length !== 4) {
          throw new address_error_1.AddressError("IPv4 addresses require exactly 4 bytes");
        }
        const address = bytes.join(".");
        return new _Address4(address);
      }
      /**
       * Returns the first n bits of the address, defaulting to the
       * subnet mask
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      mask(mask) {
        if (mask === void 0) {
          mask = this.subnetMask;
        }
        return this.getBitsBase2(0, mask);
      }
      /**
       * Returns the bits in the given range as a base-2 string
       * @memberof Address4
       * @instance
       * @returns {string}
       */
      getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
      }
      /**
       * Return the reversed ip6.arpa form of the address
       * @memberof Address4
       * @param {Object} options
       * @param {boolean} options.omitSuffix - omit the "in-addr.arpa" suffix
       * @instance
       * @returns {String}
       */
      reverseForm(options) {
        if (!options) {
          options = {};
        }
        const reversed = this.correctForm().split(".").reverse().join(".");
        if (options.omitSuffix) {
          return reversed;
        }
        return `${reversed}.in-addr.arpa.`;
      }
      /**
       * Returns true if the given address is a multicast address
       * @memberof Address4
       * @instance
       * @returns {boolean}
       */
      isMulticast() {
        return this.isInSubnet(new _Address4("224.0.0.0/4"));
      }
      /**
       * Returns a zero-padded base-2 string representation of the address
       * @memberof Address4
       * @instance
       * @returns {string}
       */
      binaryZeroPad() {
        return this.bigInt().toString(2).padStart(constants.BITS, "0");
      }
      /**
       * Groups an IPv4 address for inclusion at the end of an IPv6 address
       * @returns {String}
       */
      groupForV6() {
        const segments = this.parsedAddress;
        return this.address.replace(constants.RE_ADDRESS, `<span class="hover-group group-v4 group-6">${segments.slice(0, 2).join(".")}</span>.<span class="hover-group group-v4 group-7">${segments.slice(2, 4).join(".")}</span>`);
      }
    };
    exports2.Address4 = Address4;
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v6/constants.js
var require_constants2 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v6/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RE_URL_WITH_PORT = exports2.RE_URL = exports2.RE_ZONE_STRING = exports2.RE_SUBNET_STRING = exports2.RE_BAD_ADDRESS = exports2.RE_BAD_CHARACTERS = exports2.TYPES = exports2.SCOPES = exports2.GROUPS = exports2.BITS = void 0;
    exports2.BITS = 128;
    exports2.GROUPS = 8;
    exports2.SCOPES = {
      0: "Reserved",
      1: "Interface local",
      2: "Link local",
      4: "Admin local",
      5: "Site local",
      8: "Organization local",
      14: "Global",
      15: "Reserved"
    };
    exports2.TYPES = {
      "ff01::1/128": "Multicast (All nodes on this interface)",
      "ff01::2/128": "Multicast (All routers on this interface)",
      "ff02::1/128": "Multicast (All nodes on this link)",
      "ff02::2/128": "Multicast (All routers on this link)",
      "ff05::2/128": "Multicast (All routers in this site)",
      "ff02::5/128": "Multicast (OSPFv3 AllSPF routers)",
      "ff02::6/128": "Multicast (OSPFv3 AllDR routers)",
      "ff02::9/128": "Multicast (RIP routers)",
      "ff02::a/128": "Multicast (EIGRP routers)",
      "ff02::d/128": "Multicast (PIM routers)",
      "ff02::16/128": "Multicast (MLDv2 reports)",
      "ff01::fb/128": "Multicast (mDNSv6)",
      "ff02::fb/128": "Multicast (mDNSv6)",
      "ff05::fb/128": "Multicast (mDNSv6)",
      "ff02::1:2/128": "Multicast (All DHCP servers and relay agents on this link)",
      "ff05::1:2/128": "Multicast (All DHCP servers and relay agents in this site)",
      "ff02::1:3/128": "Multicast (All DHCP servers on this link)",
      "ff05::1:3/128": "Multicast (All DHCP servers in this site)",
      "::/128": "Unspecified",
      "::1/128": "Loopback",
      "ff00::/8": "Multicast",
      "fe80::/10": "Link-local unicast"
    };
    exports2.RE_BAD_CHARACTERS = /([^0-9a-f:/%])/gi;
    exports2.RE_BAD_ADDRESS = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/gi;
    exports2.RE_SUBNET_STRING = /\/\d{1,3}(?=%|$)/;
    exports2.RE_ZONE_STRING = /%.*$/;
    exports2.RE_URL = /^\[{0,1}([0-9a-f:]+)\]{0,1}/;
    exports2.RE_URL_WITH_PORT = /\[([0-9a-f:]+)\]:([0-9]{1,5})/;
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v6/helpers.js
var require_helpers = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v6/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.spanAllZeroes = spanAllZeroes;
    exports2.spanAll = spanAll;
    exports2.spanLeadingZeroes = spanLeadingZeroes;
    exports2.simpleGroup = simpleGroup;
    function spanAllZeroes(s) {
      return s.replace(/(0+)/g, '<span class="zero">$1</span>');
    }
    function spanAll(s, offset = 0) {
      const letters = s.split("");
      return letters.map((n, i) => `<span class="digit value-${n} position-${i + offset}">${spanAllZeroes(n)}</span>`).join("");
    }
    function spanLeadingZeroesSimple(group) {
      return group.replace(/^(0+)/, '<span class="zero">$1</span>');
    }
    function spanLeadingZeroes(address) {
      const groups = address.split(":");
      return groups.map((g) => spanLeadingZeroesSimple(g)).join(":");
    }
    function simpleGroup(addressString, offset = 0) {
      const groups = addressString.split(":");
      return groups.map((g, i) => {
        if (/group-v4/.test(g)) {
          return g;
        }
        return `<span class="hover-group group-${i + offset}">${spanLeadingZeroesSimple(g)}</span>`;
      });
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v6/regular-expressions.js
var require_regular_expressions = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/v6/regular-expressions.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ADDRESS_BOUNDARY = void 0;
    exports2.groupPossibilities = groupPossibilities;
    exports2.padGroup = padGroup;
    exports2.simpleRegularExpression = simpleRegularExpression;
    exports2.possibleElisions = possibleElisions;
    var v6 = __importStar(require_constants2());
    function groupPossibilities(possibilities) {
      return `(${possibilities.join("|")})`;
    }
    function padGroup(group) {
      if (group.length < 4) {
        return `0{0,${4 - group.length}}${group}`;
      }
      return group;
    }
    exports2.ADDRESS_BOUNDARY = "[^A-Fa-f0-9:]";
    function simpleRegularExpression(groups) {
      const zeroIndexes = [];
      groups.forEach((group, i) => {
        const groupInteger = parseInt(group, 16);
        if (groupInteger === 0) {
          zeroIndexes.push(i);
        }
      });
      const possibilities = zeroIndexes.map((zeroIndex) => groups.map((group, i) => {
        if (i === zeroIndex) {
          const elision = i === 0 || i === v6.GROUPS - 1 ? ":" : "";
          return groupPossibilities([padGroup(group), elision]);
        }
        return padGroup(group);
      }).join(":"));
      possibilities.push(groups.map(padGroup).join(":"));
      return groupPossibilities(possibilities);
    }
    function possibleElisions(elidedGroups, moreLeft, moreRight) {
      const left = moreLeft ? "" : ":";
      const right = moreRight ? "" : ":";
      const possibilities = [];
      if (!moreLeft && !moreRight) {
        possibilities.push("::");
      }
      if (moreLeft && moreRight) {
        possibilities.push("");
      }
      if (moreRight && !moreLeft || !moreRight && moreLeft) {
        possibilities.push(":");
      }
      possibilities.push(`${left}(:0{1,4}){1,${elidedGroups - 1}}`);
      possibilities.push(`(0{1,4}:){1,${elidedGroups - 1}}${right}`);
      possibilities.push(`(0{1,4}:){${elidedGroups - 1}}0{1,4}`);
      for (let groups = 1; groups < elidedGroups - 1; groups++) {
        for (let position = 1; position < elidedGroups - groups; position++) {
          possibilities.push(`(0{1,4}:){${position}}:(0{1,4}:){${elidedGroups - position - groups - 1}}0{1,4}`);
        }
      }
      return groupPossibilities(possibilities);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/ipv6.js
var require_ipv6 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/ipv6.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Address6 = void 0;
    var common = __importStar(require_common());
    var constants4 = __importStar(require_constants());
    var constants6 = __importStar(require_constants2());
    var helpers = __importStar(require_helpers());
    var ipv4_1 = require_ipv4();
    var regular_expressions_1 = require_regular_expressions();
    var address_error_1 = require_address_error();
    var common_1 = require_common();
    function assert(condition) {
      if (!condition) {
        throw new Error("Assertion failed.");
      }
    }
    function addCommas(number) {
      const r = /(\d+)(\d{3})/;
      while (r.test(number)) {
        number = number.replace(r, "$1,$2");
      }
      return number;
    }
    function spanLeadingZeroes4(n) {
      n = n.replace(/^(0{1,})([1-9]+)$/, '<span class="parse-error">$1</span>$2');
      n = n.replace(/^(0{1,})(0)$/, '<span class="parse-error">$1</span>$2');
      return n;
    }
    function compact(address, slice) {
      const s1 = [];
      const s2 = [];
      let i;
      for (i = 0; i < address.length; i++) {
        if (i < slice[0]) {
          s1.push(address[i]);
        } else if (i > slice[1]) {
          s2.push(address[i]);
        }
      }
      return s1.concat(["compact"]).concat(s2);
    }
    function paddedHex(octet) {
      return parseInt(octet, 16).toString(16).padStart(4, "0");
    }
    function unsignByte(b) {
      return b & 255;
    }
    var Address62 = class _Address6 {
      constructor(address, optionalGroups) {
        this.addressMinusSuffix = "";
        this.parsedSubnet = "";
        this.subnet = "/128";
        this.subnetMask = 128;
        this.v4 = false;
        this.zone = "";
        this.isInSubnet = common.isInSubnet;
        this.isCorrect = common.isCorrect(constants6.BITS);
        if (optionalGroups === void 0) {
          this.groups = constants6.GROUPS;
        } else {
          this.groups = optionalGroups;
        }
        this.address = address;
        const subnet = constants6.RE_SUBNET_STRING.exec(address);
        if (subnet) {
          this.parsedSubnet = subnet[0].replace("/", "");
          this.subnetMask = parseInt(this.parsedSubnet, 10);
          this.subnet = `/${this.subnetMask}`;
          if (Number.isNaN(this.subnetMask) || this.subnetMask < 0 || this.subnetMask > constants6.BITS) {
            throw new address_error_1.AddressError("Invalid subnet mask.");
          }
          address = address.replace(constants6.RE_SUBNET_STRING, "");
        } else if (/\//.test(address)) {
          throw new address_error_1.AddressError("Invalid subnet mask.");
        }
        const zone = constants6.RE_ZONE_STRING.exec(address);
        if (zone) {
          this.zone = zone[0];
          address = address.replace(constants6.RE_ZONE_STRING, "");
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(this.addressMinusSuffix);
      }
      static isValid(address) {
        try {
          new _Address6(address);
          return true;
        } catch (e) {
          return false;
        }
      }
      /**
       * Convert a BigInt to a v6 address object
       * @memberof Address6
       * @static
       * @param {bigint} bigInt - a BigInt to convert
       * @returns {Address6}
       * @example
       * var bigInt = BigInt('1000000000000');
       * var address = Address6.fromBigInt(bigInt);
       * address.correctForm(); // '::e8:d4a5:1000'
       */
      static fromBigInt(bigInt) {
        const hex = bigInt.toString(16).padStart(32, "0");
        const groups = [];
        let i;
        for (i = 0; i < constants6.GROUPS; i++) {
          groups.push(hex.slice(i * 4, (i + 1) * 4));
        }
        return new _Address6(groups.join(":"));
      }
      /**
       * Convert a URL (with optional port number) to an address object
       * @memberof Address6
       * @static
       * @param {string} url - a URL with optional port number
       * @example
       * var addressAndPort = Address6.fromURL('http://[ffff::]:8080/foo/');
       * addressAndPort.address.correctForm(); // 'ffff::'
       * addressAndPort.port; // 8080
       */
      static fromURL(url) {
        let host;
        let port = null;
        let result;
        if (url.indexOf("[") !== -1 && url.indexOf("]:") !== -1) {
          result = constants6.RE_URL_WITH_PORT.exec(url);
          if (result === null) {
            return {
              error: "failed to parse address with port",
              address: null,
              port: null
            };
          }
          host = result[1];
          port = result[2];
        } else if (url.indexOf("/") !== -1) {
          url = url.replace(/^[a-z0-9]+:\/\//, "");
          result = constants6.RE_URL.exec(url);
          if (result === null) {
            return {
              error: "failed to parse address from URL",
              address: null,
              port: null
            };
          }
          host = result[1];
        } else {
          host = url;
        }
        if (port) {
          port = parseInt(port, 10);
          if (port < 0 || port > 65536) {
            port = null;
          }
        } else {
          port = null;
        }
        return {
          address: new _Address6(host),
          port
        };
      }
      /**
       * Create an IPv6-mapped address given an IPv4 address
       * @memberof Address6
       * @static
       * @param {string} address - An IPv4 address string
       * @returns {Address6}
       * @example
       * var address = Address6.fromAddress4('192.168.0.1');
       * address.correctForm(); // '::ffff:c0a8:1'
       * address.to4in6(); // '::ffff:192.168.0.1'
       */
      static fromAddress4(address) {
        const address4 = new ipv4_1.Address4(address);
        const mask6 = constants6.BITS - (constants4.BITS - address4.subnetMask);
        return new _Address6(`::ffff:${address4.correctForm()}/${mask6}`);
      }
      /**
       * Return an address from ip6.arpa form
       * @memberof Address6
       * @static
       * @param {string} arpaFormAddress - an 'ip6.arpa' form address
       * @returns {Adress6}
       * @example
       * var address = Address6.fromArpa(e.f.f.f.3.c.2.6.f.f.f.e.6.6.8.e.1.0.6.7.9.4.e.c.0.0.0.0.1.0.0.2.ip6.arpa.)
       * address.correctForm(); // '2001:0:ce49:7601:e866:efff:62c3:fffe'
       */
      static fromArpa(arpaFormAddress) {
        let address = arpaFormAddress.replace(/(\.ip6\.arpa)?\.$/, "");
        const semicolonAmount = 7;
        if (address.length !== 63) {
          throw new address_error_1.AddressError("Invalid 'ip6.arpa' form.");
        }
        const parts = address.split(".").reverse();
        for (let i = semicolonAmount; i > 0; i--) {
          const insertIndex = i * 4;
          parts.splice(insertIndex, 0, ":");
        }
        address = parts.join("");
        return new _Address6(address);
      }
      /**
       * Return the Microsoft UNC transcription of the address
       * @memberof Address6
       * @instance
       * @returns {String} the Microsoft UNC transcription of the address
       */
      microsoftTranscription() {
        return `${this.correctForm().replace(/:/g, "-")}.ipv6-literal.net`;
      }
      /**
       * Return the first n bits of the address, defaulting to the subnet mask
       * @memberof Address6
       * @instance
       * @param {number} [mask=subnet] - the number of bits to mask
       * @returns {String} the first n bits of the address as a string
       */
      mask(mask = this.subnetMask) {
        return this.getBitsBase2(0, mask);
      }
      /**
       * Return the number of possible subnets of a given size in the address
       * @memberof Address6
       * @instance
       * @param {number} [subnetSize=128] - the subnet size
       * @returns {String}
       */
      // TODO: probably useful to have a numeric version of this too
      possibleSubnets(subnetSize = 128) {
        const availableBits = constants6.BITS - this.subnetMask;
        const subnetBits = Math.abs(subnetSize - constants6.BITS);
        const subnetPowers = availableBits - subnetBits;
        if (subnetPowers < 0) {
          return "0";
        }
        return addCommas((BigInt("2") ** BigInt(subnetPowers)).toString(10));
      }
      /**
       * Helper function getting start address.
       * @memberof Address6
       * @instance
       * @returns {bigint}
       */
      _startAddress() {
        return BigInt(`0b${this.mask() + "0".repeat(constants6.BITS - this.subnetMask)}`);
      }
      /**
       * The first address in the range given by this address' subnet
       * Often referred to as the Network Address.
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      startAddress() {
        return _Address6.fromBigInt(this._startAddress());
      }
      /**
       * The first host address in the range given by this address's subnet ie
       * the first address after the Network Address
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      startAddressExclusive() {
        const adjust = BigInt("1");
        return _Address6.fromBigInt(this._startAddress() + adjust);
      }
      /**
       * Helper function getting end address.
       * @memberof Address6
       * @instance
       * @returns {bigint}
       */
      _endAddress() {
        return BigInt(`0b${this.mask() + "1".repeat(constants6.BITS - this.subnetMask)}`);
      }
      /**
       * The last address in the range given by this address' subnet
       * Often referred to as the Broadcast
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      endAddress() {
        return _Address6.fromBigInt(this._endAddress());
      }
      /**
       * The last host address in the range given by this address's subnet ie
       * the last address prior to the Broadcast Address
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      endAddressExclusive() {
        const adjust = BigInt("1");
        return _Address6.fromBigInt(this._endAddress() - adjust);
      }
      /**
       * Return the scope of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getScope() {
        let scope = constants6.SCOPES[parseInt(this.getBits(12, 16).toString(10), 10)];
        if (this.getType() === "Global unicast" && scope !== "Link local") {
          scope = "Global";
        }
        return scope || "Unknown";
      }
      /**
       * Return the type of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getType() {
        for (const subnet of Object.keys(constants6.TYPES)) {
          if (this.isInSubnet(new _Address6(subnet))) {
            return constants6.TYPES[subnet];
          }
        }
        return "Global unicast";
      }
      /**
       * Return the bits in the given range as a BigInt
       * @memberof Address6
       * @instance
       * @returns {bigint}
       */
      getBits(start, end) {
        return BigInt(`0b${this.getBitsBase2(start, end)}`);
      }
      /**
       * Return the bits in the given range as a base-2 string
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
      }
      /**
       * Return the bits in the given range as a base-16 string
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getBitsBase16(start, end) {
        const length = end - start;
        if (length % 4 !== 0) {
          throw new Error("Length of bits to retrieve must be divisible by four");
        }
        return this.getBits(start, end).toString(16).padStart(length / 4, "0");
      }
      /**
       * Return the bits that are set past the subnet mask length
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getBitsPastSubnet() {
        return this.getBitsBase2(this.subnetMask, constants6.BITS);
      }
      /**
       * Return the reversed ip6.arpa form of the address
       * @memberof Address6
       * @param {Object} options
       * @param {boolean} options.omitSuffix - omit the "ip6.arpa" suffix
       * @instance
       * @returns {String}
       */
      reverseForm(options) {
        if (!options) {
          options = {};
        }
        const characters = Math.floor(this.subnetMask / 4);
        const reversed = this.canonicalForm().replace(/:/g, "").split("").slice(0, characters).reverse().join(".");
        if (characters > 0) {
          if (options.omitSuffix) {
            return reversed;
          }
          return `${reversed}.ip6.arpa.`;
        }
        if (options.omitSuffix) {
          return "";
        }
        return "ip6.arpa.";
      }
      /**
       * Return the correct form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      correctForm() {
        let i;
        let groups = [];
        let zeroCounter = 0;
        const zeroes = [];
        for (i = 0; i < this.parsedAddress.length; i++) {
          const value = parseInt(this.parsedAddress[i], 16);
          if (value === 0) {
            zeroCounter++;
          }
          if (value !== 0 && zeroCounter > 0) {
            if (zeroCounter > 1) {
              zeroes.push([i - zeroCounter, i - 1]);
            }
            zeroCounter = 0;
          }
        }
        if (zeroCounter > 1) {
          zeroes.push([this.parsedAddress.length - zeroCounter, this.parsedAddress.length - 1]);
        }
        const zeroLengths = zeroes.map((n) => n[1] - n[0] + 1);
        if (zeroes.length > 0) {
          const index = zeroLengths.indexOf(Math.max(...zeroLengths));
          groups = compact(this.parsedAddress, zeroes[index]);
        } else {
          groups = this.parsedAddress;
        }
        for (i = 0; i < groups.length; i++) {
          if (groups[i] !== "compact") {
            groups[i] = parseInt(groups[i], 16).toString(16);
          }
        }
        let correct = groups.join(":");
        correct = correct.replace(/^compact$/, "::");
        correct = correct.replace(/(^compact)|(compact$)/, ":");
        correct = correct.replace(/compact/, "");
        return correct;
      }
      /**
       * Return a zero-padded base-2 string representation of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       * @example
       * var address = new Address6('2001:4860:4001:803::1011');
       * address.binaryZeroPad();
       * // '0010000000000001010010000110000001000000000000010000100000000011
       * //  0000000000000000000000000000000000000000000000000001000000010001'
       */
      binaryZeroPad() {
        return this.bigInt().toString(2).padStart(constants6.BITS, "0");
      }
      // TODO: Improve the semantics of this helper function
      parse4in6(address) {
        const groups = address.split(":");
        const lastGroup = groups.slice(-1)[0];
        const address4 = lastGroup.match(constants4.RE_ADDRESS);
        if (address4) {
          this.parsedAddress4 = address4[0];
          this.address4 = new ipv4_1.Address4(this.parsedAddress4);
          for (let i = 0; i < this.address4.groups; i++) {
            if (/^0[0-9]+/.test(this.address4.parsedAddress[i])) {
              throw new address_error_1.AddressError("IPv4 addresses can't have leading zeroes.", address.replace(constants4.RE_ADDRESS, this.address4.parsedAddress.map(spanLeadingZeroes4).join(".")));
            }
          }
          this.v4 = true;
          groups[groups.length - 1] = this.address4.toGroup6();
          address = groups.join(":");
        }
        return address;
      }
      // TODO: Make private?
      parse(address) {
        address = this.parse4in6(address);
        const badCharacters = address.match(constants6.RE_BAD_CHARACTERS);
        if (badCharacters) {
          throw new address_error_1.AddressError(`Bad character${badCharacters.length > 1 ? "s" : ""} detected in address: ${badCharacters.join("")}`, address.replace(constants6.RE_BAD_CHARACTERS, '<span class="parse-error">$1</span>'));
        }
        const badAddress = address.match(constants6.RE_BAD_ADDRESS);
        if (badAddress) {
          throw new address_error_1.AddressError(`Address failed regex: ${badAddress.join("")}`, address.replace(constants6.RE_BAD_ADDRESS, '<span class="parse-error">$1</span>'));
        }
        let groups = [];
        const halves = address.split("::");
        if (halves.length === 2) {
          let first = halves[0].split(":");
          let last = halves[1].split(":");
          if (first.length === 1 && first[0] === "") {
            first = [];
          }
          if (last.length === 1 && last[0] === "") {
            last = [];
          }
          const remaining = this.groups - (first.length + last.length);
          if (!remaining) {
            throw new address_error_1.AddressError("Error parsing groups");
          }
          this.elidedGroups = remaining;
          this.elisionBegin = first.length;
          this.elisionEnd = first.length + this.elidedGroups;
          groups = groups.concat(first);
          for (let i = 0; i < remaining; i++) {
            groups.push("0");
          }
          groups = groups.concat(last);
        } else if (halves.length === 1) {
          groups = address.split(":");
          this.elidedGroups = 0;
        } else {
          throw new address_error_1.AddressError("Too many :: groups found");
        }
        groups = groups.map((group) => parseInt(group, 16).toString(16));
        if (groups.length !== this.groups) {
          throw new address_error_1.AddressError("Incorrect number of groups found");
        }
        return groups;
      }
      /**
       * Return the canonical form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      canonicalForm() {
        return this.parsedAddress.map(paddedHex).join(":");
      }
      /**
       * Return the decimal form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      decimal() {
        return this.parsedAddress.map((n) => parseInt(n, 16).toString(10).padStart(5, "0")).join(":");
      }
      /**
       * Return the address as a BigInt
       * @memberof Address6
       * @instance
       * @returns {bigint}
       */
      bigInt() {
        return BigInt(`0x${this.parsedAddress.map(paddedHex).join("")}`);
      }
      /**
       * Return the last two groups of this address as an IPv4 address string
       * @memberof Address6
       * @instance
       * @returns {Address4}
       * @example
       * var address = new Address6('2001:4860:4001::1825:bf11');
       * address.to4().correctForm(); // '24.37.191.17'
       */
      to4() {
        const binary = this.binaryZeroPad().split("");
        return ipv4_1.Address4.fromHex(BigInt(`0b${binary.slice(96, 128).join("")}`).toString(16));
      }
      /**
       * Return the v4-in-v6 form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      to4in6() {
        const address4 = this.to4();
        const address6 = new _Address6(this.parsedAddress.slice(0, 6).join(":"), 6);
        const correct = address6.correctForm();
        let infix = "";
        if (!/:$/.test(correct)) {
          infix = ":";
        }
        return correct + infix + address4.address;
      }
      /**
       * Return an object containing the Teredo properties of the address
       * @memberof Address6
       * @instance
       * @returns {Object}
       */
      inspectTeredo() {
        const prefix = this.getBitsBase16(0, 32);
        const bitsForUdpPort = this.getBits(80, 96);
        const udpPort = (bitsForUdpPort ^ BigInt("0xffff")).toString();
        const server4 = ipv4_1.Address4.fromHex(this.getBitsBase16(32, 64));
        const bitsForClient4 = this.getBits(96, 128);
        const client4 = ipv4_1.Address4.fromHex((bitsForClient4 ^ BigInt("0xffffffff")).toString(16));
        const flagsBase2 = this.getBitsBase2(64, 80);
        const coneNat = (0, common_1.testBit)(flagsBase2, 15);
        const reserved = (0, common_1.testBit)(flagsBase2, 14);
        const groupIndividual = (0, common_1.testBit)(flagsBase2, 8);
        const universalLocal = (0, common_1.testBit)(flagsBase2, 9);
        const nonce = BigInt(`0b${flagsBase2.slice(2, 6) + flagsBase2.slice(8, 16)}`).toString(10);
        return {
          prefix: `${prefix.slice(0, 4)}:${prefix.slice(4, 8)}`,
          server4: server4.address,
          client4: client4.address,
          flags: flagsBase2,
          coneNat,
          microsoft: {
            reserved,
            universalLocal,
            groupIndividual,
            nonce
          },
          udpPort
        };
      }
      /**
       * Return an object containing the 6to4 properties of the address
       * @memberof Address6
       * @instance
       * @returns {Object}
       */
      inspect6to4() {
        const prefix = this.getBitsBase16(0, 16);
        const gateway = ipv4_1.Address4.fromHex(this.getBitsBase16(16, 48));
        return {
          prefix: prefix.slice(0, 4),
          gateway: gateway.address
        };
      }
      /**
       * Return a v6 6to4 address from a v6 v4inv6 address
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      to6to4() {
        if (!this.is4()) {
          return null;
        }
        const addr6to4 = [
          "2002",
          this.getBitsBase16(96, 112),
          this.getBitsBase16(112, 128),
          "",
          "/16"
        ].join(":");
        return new _Address6(addr6to4);
      }
      /**
       * Return a byte array
       * @memberof Address6
       * @instance
       * @returns {Array}
       */
      toByteArray() {
        const valueWithoutPadding = this.bigInt().toString(16);
        const leadingPad = "0".repeat(valueWithoutPadding.length % 2);
        const value = `${leadingPad}${valueWithoutPadding}`;
        const bytes = [];
        for (let i = 0, length = value.length; i < length; i += 2) {
          bytes.push(parseInt(value.substring(i, i + 2), 16));
        }
        return bytes;
      }
      /**
       * Return an unsigned byte array
       * @memberof Address6
       * @instance
       * @returns {Array}
       */
      toUnsignedByteArray() {
        return this.toByteArray().map(unsignByte);
      }
      /**
       * Convert a byte array to an Address6 object
       * @memberof Address6
       * @static
       * @returns {Address6}
       */
      static fromByteArray(bytes) {
        return this.fromUnsignedByteArray(bytes.map(unsignByte));
      }
      /**
       * Convert an unsigned byte array to an Address6 object
       * @memberof Address6
       * @static
       * @returns {Address6}
       */
      static fromUnsignedByteArray(bytes) {
        const BYTE_MAX = BigInt("256");
        let result = BigInt("0");
        let multiplier = BigInt("1");
        for (let i = bytes.length - 1; i >= 0; i--) {
          result += multiplier * BigInt(bytes[i].toString(10));
          multiplier *= BYTE_MAX;
        }
        return _Address6.fromBigInt(result);
      }
      /**
       * Returns true if the address is in the canonical form, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isCanonical() {
        return this.addressMinusSuffix === this.canonicalForm();
      }
      /**
       * Returns true if the address is a link local address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isLinkLocal() {
        if (this.getBitsBase2(0, 64) === "1111111010000000000000000000000000000000000000000000000000000000") {
          return true;
        }
        return false;
      }
      /**
       * Returns true if the address is a multicast address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isMulticast() {
        return this.getType() === "Multicast";
      }
      /**
       * Returns true if the address is a v4-in-v6 address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      is4() {
        return this.v4;
      }
      /**
       * Returns true if the address is a Teredo address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isTeredo() {
        return this.isInSubnet(new _Address6("2001::/32"));
      }
      /**
       * Returns true if the address is a 6to4 address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      is6to4() {
        return this.isInSubnet(new _Address6("2002::/16"));
      }
      /**
       * Returns true if the address is a loopback address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isLoopback() {
        return this.getType() === "Loopback";
      }
      // #endregion
      // #region HTML
      /**
       * @returns {String} the address in link form with a default port of 80
       */
      href(optionalPort) {
        if (optionalPort === void 0) {
          optionalPort = "";
        } else {
          optionalPort = `:${optionalPort}`;
        }
        return `http://[${this.correctForm()}]${optionalPort}/`;
      }
      /**
       * @returns {String} a link suitable for conveying the address via a URL hash
       */
      link(options) {
        if (!options) {
          options = {};
        }
        if (options.className === void 0) {
          options.className = "";
        }
        if (options.prefix === void 0) {
          options.prefix = "/#address=";
        }
        if (options.v4 === void 0) {
          options.v4 = false;
        }
        let formFunction = this.correctForm;
        if (options.v4) {
          formFunction = this.to4in6;
        }
        const form = formFunction.call(this);
        if (options.className) {
          return `<a href="${options.prefix}${form}" class="${options.className}">${form}</a>`;
        }
        return `<a href="${options.prefix}${form}">${form}</a>`;
      }
      /**
       * Groups an address
       * @returns {String}
       */
      group() {
        if (this.elidedGroups === 0) {
          return helpers.simpleGroup(this.address).join(":");
        }
        assert(typeof this.elidedGroups === "number");
        assert(typeof this.elisionBegin === "number");
        const output = [];
        const [left, right] = this.address.split("::");
        if (left.length) {
          output.push(...helpers.simpleGroup(left));
        } else {
          output.push("");
        }
        const classes = ["hover-group"];
        for (let i = this.elisionBegin; i < this.elisionBegin + this.elidedGroups; i++) {
          classes.push(`group-${i}`);
        }
        output.push(`<span class="${classes.join(" ")}"></span>`);
        if (right.length) {
          output.push(...helpers.simpleGroup(right, this.elisionEnd));
        } else {
          output.push("");
        }
        if (this.is4()) {
          assert(this.address4 instanceof ipv4_1.Address4);
          output.pop();
          output.push(this.address4.groupForV6());
        }
        return output.join(":");
      }
      // #endregion
      // #region Regular expressions
      /**
       * Generate a regular expression string that can be used to find or validate
       * all variations of this address
       * @memberof Address6
       * @instance
       * @param {boolean} substringSearch
       * @returns {string}
       */
      regularExpressionString(substringSearch = false) {
        let output = [];
        const address6 = new _Address6(this.correctForm());
        if (address6.elidedGroups === 0) {
          output.push((0, regular_expressions_1.simpleRegularExpression)(address6.parsedAddress));
        } else if (address6.elidedGroups === constants6.GROUPS) {
          output.push((0, regular_expressions_1.possibleElisions)(constants6.GROUPS));
        } else {
          const halves = address6.address.split("::");
          if (halves[0].length) {
            output.push((0, regular_expressions_1.simpleRegularExpression)(halves[0].split(":")));
          }
          assert(typeof address6.elidedGroups === "number");
          output.push((0, regular_expressions_1.possibleElisions)(address6.elidedGroups, halves[0].length !== 0, halves[1].length !== 0));
          if (halves[1].length) {
            output.push((0, regular_expressions_1.simpleRegularExpression)(halves[1].split(":")));
          }
          output = [output.join(":")];
        }
        if (!substringSearch) {
          output = [
            "(?=^|",
            regular_expressions_1.ADDRESS_BOUNDARY,
            "|[^\\w\\:])(",
            ...output,
            ")(?=[^\\w\\:]|",
            regular_expressions_1.ADDRESS_BOUNDARY,
            "|$)"
          ];
        }
        return output.join("");
      }
      /**
       * Generate a regular expression that can be used to find or validate all
       * variations of this address.
       * @memberof Address6
       * @instance
       * @param {boolean} substringSearch
       * @returns {RegExp}
       */
      regularExpression(substringSearch = false) {
        return new RegExp(this.regularExpressionString(substringSearch), "i");
      }
    };
    exports2.Address6 = Address62;
  }
});

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/ip-address.js
var require_ip_address = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/ip-address@10.1.0/node_modules/ip-address/dist/ip-address.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v6 = exports2.AddressError = exports2.Address6 = exports2.Address4 = void 0;
    var ipv4_1 = require_ipv4();
    Object.defineProperty(exports2, "Address4", { enumerable: true, get: function() {
      return ipv4_1.Address4;
    } });
    var ipv6_1 = require_ipv6();
    Object.defineProperty(exports2, "Address6", { enumerable: true, get: function() {
      return ipv6_1.Address6;
    } });
    var address_error_1 = require_address_error();
    Object.defineProperty(exports2, "AddressError", { enumerable: true, get: function() {
      return address_error_1.AddressError;
    } });
    var helpers = __importStar(require_helpers());
    exports2.v6 = { helpers };
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/enclave.js
var require_enclave = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/enclave.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateEnclaveKeyPair = generateEnclaveKeyPair;
    exports2.enclaveSign = enclaveSign;
    exports2.generateAttestation = generateAttestation2;
    exports2.deleteEnclaveKey = deleteEnclaveKey;
    exports2.enclaveKeyExists = enclaveKeyExists;
    exports2.sha256 = sha256;
    exports2.generateNonce = generateNonce;
    var node_crypto_1 = require("node:crypto");
    var enclaveKeyStore = /* @__PURE__ */ new Map();
    function generateEnclaveKeyPair(algorithm = "ES256") {
      const namedCurve = algorithm === "ES256" ? "P-256" : "P-384";
      const { privateKey, publicKey } = (0, node_crypto_1.generateKeyPairSync)("ec", {
        namedCurve,
        publicKeyEncoding: { type: "spki", format: "pem" },
        privateKeyEncoding: { type: "pkcs8", format: "pem" }
      });
      const handle = `enclave-key-${(0, node_crypto_1.randomBytes)(16).toString("hex")}`;
      const createdAt = (/* @__PURE__ */ new Date()).toISOString();
      enclaveKeyStore.set(handle, {
        publicKey,
        privateKey,
        algorithm,
        createdAt
      });
      return {
        public_key: publicKey,
        private_key_handle: handle,
        algorithm,
        created_at: createdAt
      };
    }
    function enclaveSign(handle, payload) {
      const stored = enclaveKeyStore.get(handle);
      if (!stored) {
        throw new Error(`Enclave key not found: ${handle}`);
      }
      const hashAlg = stored.algorithm === "ES384" ? "sha384" : "sha256";
      const signer = (0, node_crypto_1.createSign)(hashAlg);
      signer.update(payload, "utf8");
      const signature = signer.sign(stored.privateKey, "base64url");
      return {
        signature,
        algorithm: stored.algorithm,
        signed_at: (/* @__PURE__ */ new Date()).toISOString(),
        key_id: handle
      };
    }
    function generateAttestation2(publicKey, deviceId, nonce) {
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const signable = JSON.stringify({ publicKey, deviceId, nonce, timestamp });
      const signature = (0, node_crypto_1.createHash)("sha256").update(signable).digest("base64url");
      return {
        format: "yebo-enclave-v1",
        public_key: publicKey,
        device_id: deviceId,
        timestamp,
        nonce,
        signature
      };
    }
    function deleteEnclaveKey(handle) {
      enclaveKeyStore.delete(handle);
    }
    function enclaveKeyExists(handle) {
      return enclaveKeyStore.has(handle);
    }
    function sha256(input) {
      return (0, node_crypto_1.createHash)("sha256").update(input, "utf8").digest("hex");
    }
    function generateNonce(bytes = 32) {
      return (0, node_crypto_1.randomBytes)(bytes).toString("base64url");
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/identity.js
var require_identity = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/identity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createIdentity = createIdentity2;
    exports2.getIdentity = getIdentity;
    exports2.revokeIdentity = revokeIdentity;
    exports2.markPasskeyRegistered = markPasskeyRegistered;
    exports2._getKeyHandle = _getKeyHandle2;
    exports2.listIdentities = listIdentities;
    var node_crypto_1 = require("node:crypto");
    var enclave_js_1 = require_enclave();
    var identityStore = /* @__PURE__ */ new Map();
    function createIdentity2(request) {
      const identity_id = (0, node_crypto_1.randomUUID)();
      const did = `did:yebo:${identity_id}`;
      const biometric_type = request.biometric_type ?? "face_id";
      const attestation_type = request.attestation_type ?? "secure_enclave";
      const keyPair = (0, enclave_js_1.generateEnclaveKeyPair)("ES256");
      const deviceId = (0, enclave_js_1.sha256)(identity_id + keyPair.public_key);
      const nonce = (0, enclave_js_1.generateNonce)(16);
      const attestation = (0, enclave_js_1.generateAttestation)(keyPair.public_key, deviceId, nonce);
      const identity = {
        identity_id,
        display_name: request.display_name,
        device_public_key: keyPair.public_key,
        attestation_proof: Buffer.from(JSON.stringify(attestation)).toString("base64url"),
        attestation_type,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        revocation_status: "active",
        biometric_type,
        passkey_registered: false,
        did
      };
      identityStore.set(identity_id, { ...identity, key_handle: keyPair.private_key_handle });
      return identity;
    }
    function getIdentity(identity_id) {
      const stored = identityStore.get(identity_id);
      if (!stored)
        return void 0;
      const { key_handle: _kh, ...identity } = stored;
      return identity;
    }
    function revokeIdentity(identity_id) {
      const stored = identityStore.get(identity_id);
      if (!stored)
        throw new Error(`Identity not found: ${identity_id}`);
      (0, enclave_js_1.deleteEnclaveKey)(stored.key_handle);
      const revoked = {
        ...stored,
        revocation_status: "revoked"
      };
      identityStore.set(identity_id, { ...revoked, key_handle: stored.key_handle });
      return revoked;
    }
    function markPasskeyRegistered(identity_id) {
      const stored = identityStore.get(identity_id);
      if (!stored)
        throw new Error(`Identity not found: ${identity_id}`);
      identityStore.set(identity_id, { ...stored, passkey_registered: true });
    }
    function _getKeyHandle2(identity_id) {
      const stored = identityStore.get(identity_id);
      if (!stored)
        throw new Error(`Identity not found: ${identity_id}`);
      if (stored.revocation_status !== "active") {
        throw new Error(`Identity is ${stored.revocation_status}: ${identity_id}`);
      }
      return stored.key_handle;
    }
    function listIdentities() {
      return Array.from(identityStore.values()).filter((s) => s.revocation_status === "active").map(({ key_handle: _kh, ...identity }) => identity);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/biometric.js
var require_biometric = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/biometric.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyBiometric = verifyBiometric2;
    exports2.consumeBiometricProof = consumeBiometricProof;
    exports2.validatePresenceProof = validatePresenceProof;
    var enclave_js_1 = require_enclave();
    var identity_js_1 = require_identity();
    var consumedProofs = /* @__PURE__ */ new Set();
    async function verifyBiometric2(request) {
      const identity = (0, identity_js_1.getIdentity)(request.identity_id);
      if (!identity) {
        return {
          verified: false,
          biometric_type: "none",
          verified_at: (/* @__PURE__ */ new Date()).toISOString(),
          presence_proof: "",
          error: `Identity not found: ${request.identity_id}`
        };
      }
      if (identity.revocation_status !== "active") {
        return {
          verified: false,
          biometric_type: identity.biometric_type,
          verified_at: (/* @__PURE__ */ new Date()).toISOString(),
          presence_proof: "",
          error: `Identity is ${identity.revocation_status}`
        };
      }
      const verifiedAt = (/* @__PURE__ */ new Date()).toISOString();
      const nonce = (0, enclave_js_1.generateNonce)(24);
      const proofInput = `bio:${identity.identity_id}:${verifiedAt}:${nonce}`;
      const presence_proof = (0, enclave_js_1.sha256)(proofInput) + "." + nonce;
      return {
        verified: true,
        biometric_type: identity.biometric_type,
        verified_at: verifiedAt,
        presence_proof
      };
    }
    function consumeBiometricProof(presence_proof) {
      if (consumedProofs.has(presence_proof))
        return false;
      consumedProofs.add(presence_proof);
      return true;
    }
    function validatePresenceProof(presence_proof) {
      if (!presence_proof || presence_proof.length < 10)
        return false;
      const parts = presence_proof.split(".");
      return parts.length === 2 && parts[0].length === 64;
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/index.js
var require_dist = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/identity-kit/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateAttestation = exports2.sha256 = exports2.generateNonce = exports2.enclaveSign = exports2.validatePresenceProof = exports2.consumeBiometricProof = exports2.verifyBiometric = exports2._getKeyHandle = exports2.listIdentities = exports2.markPasskeyRegistered = exports2.revokeIdentity = exports2.getIdentity = exports2.createIdentity = void 0;
    var identity_js_1 = require_identity();
    Object.defineProperty(exports2, "createIdentity", { enumerable: true, get: function() {
      return identity_js_1.createIdentity;
    } });
    Object.defineProperty(exports2, "getIdentity", { enumerable: true, get: function() {
      return identity_js_1.getIdentity;
    } });
    Object.defineProperty(exports2, "revokeIdentity", { enumerable: true, get: function() {
      return identity_js_1.revokeIdentity;
    } });
    Object.defineProperty(exports2, "markPasskeyRegistered", { enumerable: true, get: function() {
      return identity_js_1.markPasskeyRegistered;
    } });
    Object.defineProperty(exports2, "listIdentities", { enumerable: true, get: function() {
      return identity_js_1.listIdentities;
    } });
    Object.defineProperty(exports2, "_getKeyHandle", { enumerable: true, get: function() {
      return identity_js_1._getKeyHandle;
    } });
    var biometric_js_1 = require_biometric();
    Object.defineProperty(exports2, "verifyBiometric", { enumerable: true, get: function() {
      return biometric_js_1.verifyBiometric;
    } });
    Object.defineProperty(exports2, "consumeBiometricProof", { enumerable: true, get: function() {
      return biometric_js_1.consumeBiometricProof;
    } });
    Object.defineProperty(exports2, "validatePresenceProof", { enumerable: true, get: function() {
      return biometric_js_1.validatePresenceProof;
    } });
    var enclave_js_1 = require_enclave();
    Object.defineProperty(exports2, "enclaveSign", { enumerable: true, get: function() {
      return enclave_js_1.enclaveSign;
    } });
    Object.defineProperty(exports2, "generateNonce", { enumerable: true, get: function() {
      return enclave_js_1.generateNonce;
    } });
    Object.defineProperty(exports2, "sha256", { enumerable: true, get: function() {
      return enclave_js_1.sha256;
    } });
    Object.defineProperty(exports2, "generateAttestation", { enumerable: true, get: function() {
      return enclave_js_1.generateAttestation;
    } });
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/storage-core/dist/index.js
var require_dist2 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/storage-core/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NonceRegistry = exports2.KVStore = exports2.AppendLog = exports2.JsonRepository = exports2.STORAGE_ROOT = exports2.DATA_ROOT = void 0;
    exports2.generateId = generateId;
    var node_fs_1 = require("node:fs");
    var node_path_1 = require("node:path");
    var node_crypto_1 = require("node:crypto");
    exports2.DATA_ROOT = process.env["YEBO_DATA_DIR"] ?? (0, node_path_1.join)(process.cwd(), ".yebo-data");
    exports2.STORAGE_ROOT = exports2.DATA_ROOT;
    function ensureDir(path) {
      if (!(0, node_fs_1.existsSync)(path))
        (0, node_fs_1.mkdirSync)(path, { recursive: true });
    }
    var JsonRepository = class {
      filePath;
      tmpPath;
      store;
      constructor(namespace) {
        const dir = (0, node_path_1.join)(exports2.DATA_ROOT, "repos");
        ensureDir(dir);
        this.filePath = (0, node_path_1.join)(dir, `${namespace}.json`);
        this.tmpPath = (0, node_path_1.join)(dir, `${namespace}.json.tmp`);
        this.store = this.loadFromDisk();
      }
      loadFromDisk() {
        try {
          if (!(0, node_fs_1.existsSync)(this.filePath))
            return /* @__PURE__ */ new Map();
          const raw = (0, node_fs_1.readFileSync)(this.filePath, "utf-8");
          const records = JSON.parse(raw);
          if (!Array.isArray(records))
            return /* @__PURE__ */ new Map();
          return new Map(records.map((r) => [r.id, r]));
        } catch (err) {
          console.error(`[storage-core] Failed to load ${this.filePath}:`, err);
          return /* @__PURE__ */ new Map();
        }
      }
      flush() {
        const records = Array.from(this.store.values());
        const json = JSON.stringify(records, null, 2);
        (0, node_fs_1.writeFileSync)(this.tmpPath, json, "utf-8");
        (0, node_fs_1.renameSync)(this.tmpPath, this.filePath);
      }
      findById(id) {
        return this.store.get(id);
      }
      findAll() {
        return Array.from(this.store.values());
      }
      findWhere(predicate) {
        return Array.from(this.store.values()).filter(predicate);
      }
      save(item) {
        this.store.set(item.id, Object.freeze(item));
        this.flush();
        return item;
      }
      delete(id) {
        const existed = this.store.has(id);
        if (existed) {
          this.store.delete(id);
          this.flush();
        }
        return existed;
      }
      count() {
        return this.store.size;
      }
      clear() {
        this.store.clear();
        this.flush();
      }
    };
    exports2.JsonRepository = JsonRepository;
    var AppendLog = class {
      filePath;
      constructor(namespace) {
        const dir = (0, node_path_1.join)(exports2.DATA_ROOT, "logs");
        ensureDir(dir);
        this.filePath = (0, node_path_1.join)(dir, `${namespace}.jsonl`);
      }
      append(record5) {
        const line = JSON.stringify(record5) + "\n";
        (0, node_fs_1.writeFileSync)(this.filePath, line, { flag: "a", encoding: "utf-8" });
      }
      readAll() {
        try {
          if (!(0, node_fs_1.existsSync)(this.filePath))
            return [];
          return (0, node_fs_1.readFileSync)(this.filePath, "utf-8").split("\n").filter(Boolean).map((line) => JSON.parse(line));
        } catch {
          return [];
        }
      }
      readTail(n) {
        const all = this.readAll();
        return all.slice(-n);
      }
      count() {
        return this.readAll().length;
      }
    };
    exports2.AppendLog = AppendLog;
    var KVStore = class {
      filePath;
      tmpPath;
      data;
      constructor(namespace) {
        const dir = (0, node_path_1.join)(exports2.DATA_ROOT, "kv");
        ensureDir(dir);
        this.filePath = (0, node_path_1.join)(dir, `${namespace}.json`);
        this.tmpPath = (0, node_path_1.join)(dir, `${namespace}.json.tmp`);
        this.data = this.loadFromDisk();
      }
      loadFromDisk() {
        try {
          if (!(0, node_fs_1.existsSync)(this.filePath))
            return {};
          const raw = (0, node_fs_1.readFileSync)(this.filePath, "utf-8");
          return JSON.parse(raw);
        } catch {
          return {};
        }
      }
      flush() {
        (0, node_fs_1.writeFileSync)(this.tmpPath, JSON.stringify(this.data, null, 2), "utf-8");
        (0, node_fs_1.renameSync)(this.tmpPath, this.filePath);
      }
      get(key) {
        return this.data[key];
      }
      set(key, value) {
        this.data[key] = value;
        this.flush();
      }
      has(key) {
        return key in this.data;
      }
      delete(key) {
        delete this.data[key];
        this.flush();
      }
      keys() {
        return Object.keys(this.data);
      }
      size() {
        return Object.keys(this.data).length;
      }
    };
    exports2.KVStore = KVStore;
    var NonceRegistry = class {
      store;
      constructor(namespace = "nonces") {
        this.store = new KVStore(namespace);
      }
      record(nonce) {
        this.store.set(nonce, (/* @__PURE__ */ new Date()).toISOString());
      }
      hasBeenUsed(nonce) {
        return this.store.has(nonce);
      }
      consumeOnce(nonce) {
        if (this.hasBeenUsed(nonce))
          return false;
        this.record(nonce);
        return true;
      }
    };
    exports2.NonceRegistry = NonceRegistry;
    function generateId(prefix = "") {
      return prefix ? `${prefix}_${(0, node_crypto_1.randomUUID)()}` : (0, node_crypto_1.randomUUID)();
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/mandate-core/dist/index.js
var require_dist3 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/mandate-core/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PROTOCOL_VERSION = void 0;
    exports2.createMandate = createMandate2;
    exports2.computeMandateHash = computeMandateHash;
    exports2.getMandate = getMandate2;
    exports2.listMandatesForIdentity = listMandatesForIdentity;
    exports2.updateMandateStatus = updateMandateStatus;
    exports2.validateMandate = validateMandate;
    exports2.consumeNonce = consumeNonce;
    exports2.isNonceUsed = isNonceUsed;
    var node_crypto_1 = require("node:crypto");
    var identity_kit_1 = require_dist();
    var storage_core_1 = require_dist2();
    exports2.PROTOCOL_VERSION = "1.0.0";
    var MANDATE_TTL_SECONDS = 300;
    var mandateRepo = new storage_core_1.JsonRepository("mandates");
    var nonceRegistry = new storage_core_1.NonceRegistry("mandate-nonces");
    function createMandate2(request, policy_hash) {
      if (!policy_hash || policy_hash.length < 16) {
        throw new Error("policy_hash is required \u2014 INV-04 violation");
      }
      const mandate_id = (0, node_crypto_1.randomUUID)();
      const nonce = (0, identity_kit_1.generateNonce)(32);
      const now = /* @__PURE__ */ new Date();
      const expiresAt = new Date(now.getTime() + (request.expires_in_seconds ?? MANDATE_TTL_SECONDS) * 1e3);
      const metadata_hash = computeMetadataHash(request.metadata ?? {});
      const mandate = Object.freeze({
        mandate_id,
        subject_identity: request.subject_identity,
        counterparty_identity: request.counterparty_identity,
        capability: request.capability,
        policy_hash,
        metadata_hash,
        nonce,
        issued_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
        protocol_version: exports2.PROTOCOL_VERSION,
        status: "pending",
        ...request.amount !== void 0 ? { amount: request.amount } : {},
        ...request.currency !== void 0 ? { currency: request.currency } : {},
        ...request.action_parameters !== void 0 ? { action_parameters: Object.freeze({ ...request.action_parameters }) } : {},
        ...request.metadata !== void 0 ? { metadata: Object.freeze({ ...request.metadata }) } : {}
      });
      mandateRepo.save({ ...mandate, id: mandate_id });
      return mandate;
    }
    function computeMandateHash(mandate) {
      const input = {
        mandate_id: mandate.mandate_id,
        subject_identity: mandate.subject_identity,
        counterparty_identity: mandate.counterparty_identity,
        capability: mandate.capability,
        policy_hash: mandate.policy_hash,
        nonce: mandate.nonce,
        issued_at: mandate.issued_at,
        expires_at: mandate.expires_at,
        ...mandate.amount !== void 0 ? { amount: mandate.amount } : {},
        ...mandate.currency !== void 0 ? { currency: mandate.currency } : {}
      };
      return (0, node_crypto_1.createHash)("sha256").update(JSON.stringify(input, Object.keys(input).sort())).digest("hex");
    }
    function computeMetadataHash(metadata) {
      return (0, node_crypto_1.createHash)("sha256").update(JSON.stringify(metadata)).digest("hex");
    }
    function getMandate2(mandate_id) {
      const stored = mandateRepo.findById(mandate_id);
      if (!stored)
        return void 0;
      const { id: _id, ...mandate } = stored;
      return mandate;
    }
    function listMandatesForIdentity(identity_id) {
      return mandateRepo.findWhere((m) => m.subject_identity === identity_id).map(({ id: _id, ...mandate }) => mandate);
    }
    function updateMandateStatus(mandate_id, new_status) {
      const stored = mandateRepo.findById(mandate_id);
      if (!stored)
        throw new Error(`Mandate not found: ${mandate_id}`);
      const validTransitions = {
        pending: ["authorized", "expired", "revoked", "rejected"],
        authorized: ["executed", "expired", "revoked", "failed"],
        executed: [],
        expired: [],
        revoked: [],
        failed: [],
        rejected: []
      };
      const allowed = validTransitions[stored.status] ?? [];
      if (!allowed.includes(new_status)) {
        throw new Error(`Invalid status transition: ${stored.status} \u2192 ${new_status}`);
      }
      const updated = Object.freeze({ ...stored, status: new_status });
      mandateRepo.save(updated);
      const { id: _id, ...mandate } = updated;
      return mandate;
    }
    function validateMandate(mandate, expected_policy_hash, allowed_capabilities) {
      const errors = [];
      const now = /* @__PURE__ */ new Date();
      if (new Date(mandate.expires_at) < now) {
        errors.push({ code: "EXPIRED", message: `Mandate expired at ${mandate.expires_at}` });
      }
      if (mandate.policy_hash !== expected_policy_hash) {
        errors.push({
          code: "POLICY_HASH_MISMATCH",
          message: `Policy hash mismatch. Expected: ${expected_policy_hash}, got: ${mandate.policy_hash}`,
          field: "policy_hash"
        });
      }
      if (!allowed_capabilities.includes(mandate.capability)) {
        errors.push({
          code: "CAPABILITY_NOT_ALLOWED",
          message: `Capability ${mandate.capability} is not in allowed list`,
          field: "capability"
        });
      }
      if (nonceRegistry.hasBeenUsed(mandate.nonce)) {
        errors.push({ code: "NONCE_REUSED", message: `Nonce has already been used: ${mandate.nonce}` });
      }
      const required = [
        "mandate_id",
        "subject_identity",
        "counterparty_identity",
        "capability",
        "policy_hash",
        "nonce",
        "issued_at",
        "expires_at"
      ];
      for (const field of required) {
        if (!mandate[field]) {
          errors.push({ code: "MISSING_REQUIRED_FIELD", message: `Missing field: ${field}`, field });
        }
      }
      return {
        valid: errors.length === 0,
        mandate_id: mandate.mandate_id,
        errors,
        checked_at: now.toISOString()
      };
    }
    function consumeNonce(nonce) {
      nonceRegistry.record(nonce);
    }
    function isNonceUsed(nonce) {
      return nonceRegistry.hasBeenUsed(nonce);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authority-proof/dist/index.js
var require_dist4 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authority-proof/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generatePAI = generatePAI2;
    exports2.verifyPAI = verifyPAI3;
    exports2.getPAI = getPAI4;
    exports2.decodePAIToken = decodePAIToken3;
    var node_crypto_1 = require("node:crypto");
    var identity_kit_1 = require_dist();
    var mandate_core_1 = require_dist3();
    var paiStore = /* @__PURE__ */ new Map();
    async function generatePAI2(request) {
      const { mandate } = request;
      if (!(0, identity_kit_1.validatePresenceProof)(request.biometric_presence_proof)) {
        throw new Error("Invalid biometric presence proof format");
      }
      if (!(0, identity_kit_1.consumeBiometricProof)(request.biometric_presence_proof)) {
        throw new Error("Biometric presence proof has already been consumed");
      }
      if ((0, mandate_core_1.isNonceUsed)(mandate.nonce)) {
        throw new Error(`Mandate nonce has already been consumed: ${mandate.nonce}`);
      }
      (0, mandate_core_1.consumeNonce)(mandate.nonce);
      const mandate_hash = (0, mandate_core_1.computeMandateHash)(mandate);
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const expires_at = new Date(new Date(mandate.expires_at).getTime() + 5 * 60 * 1e3).toISOString();
      const signable = [mandate_hash, mandate.policy_hash, timestamp].join(":");
      const signing = (0, identity_kit_1.enclaveSign)(request.key_handle, signable);
      const pai_id = (0, identity_kit_1.generateNonce)(16);
      const header = Buffer.from(JSON.stringify({ alg: "ES256", typ: "PAI" })).toString("base64url");
      const claims = Buffer.from(JSON.stringify({
        pai: pai_id,
        mid: mandate.mandate_id,
        mh: mandate_hash,
        ph: mandate.policy_hash,
        sub: request.identity_id,
        iat: Math.floor(Date.now() / 1e3),
        exp: Math.floor(new Date(expires_at).getTime() / 1e3)
      })).toString("base64url");
      const pai_token = `${header}.${claims}.${signing.signature}`;
      const pai = Object.freeze({
        pai_id,
        mandate_hash,
        mandate_id: mandate.mandate_id,
        identity_public_key: request.identity_public_key,
        identity_id: request.identity_id,
        policy_hash: mandate.policy_hash,
        timestamp,
        expires_at,
        device_attestation: request.device_attestation,
        enclave_signature: signing.signature,
        biometric_presence_proof: hashProof(request.biometric_presence_proof),
        pai_token,
        protocol_version: "1.0.0"
      });
      paiStore.set(pai_id, pai);
      paiStore.set(mandate.mandate_id, pai);
      return pai;
    }
    function verifyPAI3(pai, expected_mandate_hash, expected_policy_hash) {
      const errors = [];
      const now = /* @__PURE__ */ new Date();
      if (new Date(pai.expires_at) < now) {
        errors.push(`PAI expired at ${pai.expires_at}`);
      }
      if (pai.mandate_hash !== expected_mandate_hash) {
        errors.push(`Mandate hash mismatch: expected ${expected_mandate_hash}, got ${pai.mandate_hash}`);
      }
      if (pai.policy_hash !== expected_policy_hash) {
        errors.push(`Policy hash mismatch: expected ${expected_policy_hash}, got ${pai.policy_hash}`);
      }
      try {
        const signable = [pai.mandate_hash, pai.policy_hash, pai.timestamp].join(":");
        const verifier = (0, node_crypto_1.createVerify)("sha256");
        verifier.update(signable, "utf8");
        const valid = verifier.verify(pai.identity_public_key, pai.enclave_signature, "base64url");
        if (!valid) {
          errors.push("Enclave signature verification failed");
        }
      } catch {
        errors.push("Signature verification error \u2014 key or signature malformed");
      }
      return {
        valid: errors.length === 0,
        pai_id: pai.pai_id,
        mandate_id: pai.mandate_id,
        errors,
        verified_at: now.toISOString()
      };
    }
    function getPAI4(id) {
      return paiStore.get(id);
    }
    function decodePAIToken3(token) {
      try {
        const parts = token.split(".");
        if (parts.length !== 3)
          return null;
        const claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
        return { mandate_id: claims.mid, policy_hash: claims.ph, subject: claims.sub, expires: claims.exp };
      } catch {
        return null;
      }
    }
    function hashProof(proof) {
      return (0, node_crypto_1.createHash)("sha256").update(proof).digest("hex");
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/audit-core/dist/index.js
var require_dist5 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/audit-core/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.record = record5;
    exports2.query = query;
    exports2.getMandateChain = getMandateChain;
    exports2.getLatestRecord = getLatestRecord;
    exports2.verifyChainIntegrity = verifyChainIntegrity2;
    exports2.getLedgerSize = getLedgerSize;
    var node_crypto_1 = require("node:crypto");
    var node_fs_1 = require("node:fs");
    var node_path_1 = require("node:path");
    var DATA_DIR = process.env["YEBO_AUDIT_DIR"] ?? (0, node_path_1.join)(process.cwd(), ".yebo-data", "audit");
    var LEDGER_FILE = (0, node_path_1.join)(DATA_DIR, "ledger.jsonl");
    function ensureDataDir() {
      if (!(0, node_fs_1.existsSync)(DATA_DIR)) {
        (0, node_fs_1.mkdirSync)(DATA_DIR, { recursive: true });
      }
    }
    function persistRecord(r) {
      try {
        ensureDataDir();
        (0, node_fs_1.appendFileSync)(LEDGER_FILE, JSON.stringify(r) + "\n", "utf-8");
      } catch {
      }
    }
    function loadPersistedLedger() {
      try {
        if (!(0, node_fs_1.existsSync)(LEDGER_FILE))
          return [];
        const content = (0, node_fs_1.readFileSync)(LEDGER_FILE, "utf-8");
        return content.split("\n").filter(Boolean).map((line) => JSON.parse(line));
      } catch {
        return [];
      }
    }
    var ledger = loadPersistedLedger();
    var GENESIS_HASH = "GENESIS-" + "0".repeat(56);
    function hashRecord(record6) {
      const canonical = {
        event_id: record6.event_id,
        action: record6.action,
        actor_id: record6.actor_id,
        mandate_id: record6.mandate_id,
        decision: record6.decision,
        timestamp: record6.timestamp,
        previous_hash: record6.previous_hash
      };
      return (0, node_crypto_1.createHash)("sha256").update(JSON.stringify(canonical)).digest("hex");
    }
    function record5(input) {
      const previous = ledger[ledger.length - 1];
      const previous_hash = previous ? previous.event_hash : GENESIS_HASH;
      const partial = {
        event_id: (0, node_crypto_1.randomUUID)(),
        action: input.action,
        actor_id: input.actor_id,
        decision: input.decision,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        previous_hash,
        ...input.mandate_id !== void 0 ? { mandate_id: input.mandate_id } : {},
        ...input.enterprise_id !== void 0 ? { enterprise_id: input.enterprise_id } : {},
        ...input.detail !== void 0 ? { detail: input.detail } : {}
      };
      const event_hash = hashRecord(partial);
      const auditRecord = Object.freeze({ ...partial, event_hash });
      ledger.push(auditRecord);
      persistRecord(auditRecord);
      return auditRecord;
    }
    function query(q) {
      let results = ledger.slice();
      if (q.mandate_id)
        results = results.filter((r) => r.mandate_id === q.mandate_id);
      if (q.actor_id)
        results = results.filter((r) => r.actor_id === q.actor_id);
      if (q.enterprise_id)
        results = results.filter((r) => r.enterprise_id === q.enterprise_id);
      if (q.action)
        results = results.filter((r) => r.action === q.action);
      if (q.decision)
        results = results.filter((r) => r.decision === q.decision);
      if (q.from)
        results = results.filter((r) => r.timestamp >= q.from);
      if (q.to)
        results = results.filter((r) => r.timestamp <= q.to);
      const offset = q.offset ?? 0;
      const limit = q.limit ?? 100;
      return results.slice(offset, offset + limit);
    }
    function getMandateChain(mandate_id) {
      return ledger.filter((r) => r.mandate_id === mandate_id);
    }
    function getLatestRecord() {
      return ledger[ledger.length - 1];
    }
    function verifyChainIntegrity2() {
      for (let i = 1; i < ledger.length; i++) {
        const record6 = ledger[i];
        const prev = ledger[i - 1];
        if (record6.previous_hash !== prev.event_hash) {
          return {
            broken_at: record6.event_id,
            detail: `Record ${record6.event_id} previous_hash doesn't match ${prev.event_id} event_hash`
          };
        }
        const recomputed = hashRecord({
          event_id: record6.event_id,
          action: record6.action,
          actor_id: record6.actor_id,
          decision: record6.decision,
          timestamp: record6.timestamp,
          previous_hash: record6.previous_hash,
          ...record6.mandate_id !== void 0 ? { mandate_id: record6.mandate_id } : {},
          ...record6.enterprise_id !== void 0 ? { enterprise_id: record6.enterprise_id } : {},
          ...record6.detail !== void 0 ? { detail: record6.detail } : {}
        });
        if (recomputed !== record6.event_hash) {
          return {
            broken_at: record6.event_id,
            detail: `Record ${record6.event_id} event_hash has been tampered with`
          };
        }
      }
      return null;
    }
    function getLedgerSize() {
      return ledger.length;
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/ToolPolicyMapper.js
var require_ToolPolicyMapper = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/ToolPolicyMapper.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.registerToolPolicy = registerToolPolicy;
    exports2.unregisterToolPolicy = unregisterToolPolicy;
    exports2.getActionClass = getActionClass;
    var SAFE_READ_KEYWORDS = [
      "search",
      "fetch",
      "get",
      "read",
      "list",
      "status",
      "retrieve",
      "metadata",
      "query",
      "lookup",
      "find",
      "check",
      "describe",
      "view",
      "inspect",
      "summarize",
      "explain",
      "calculate"
    ];
    var LOW_RISK_WRITE_KEYWORDS = [
      "draft",
      "queue",
      "prepare",
      "save",
      "update",
      "cache",
      "note",
      "annotate",
      "tag",
      "label",
      "set_preference",
      "store"
    ];
    var HIGH_IMPACT_KEYWORDS = [
      "pay",
      "payment",
      "purchase",
      "buy",
      "order",
      "checkout",
      "transfer",
      "send_money",
      "wire",
      "book",
      "reserve",
      "schedule",
      "sign",
      "countersign",
      "execute_contract",
      "submit",
      "approve",
      "authorize",
      "healthcare",
      "prescribe",
      "diagnose",
      "create_record",
      "modify_payment",
      "change_destination",
      "register",
      "enroll",
      "delegate",
      "grant_access",
      "install"
    ];
    var HIGH_IMPACT_CAPABILITIES = [
      "payment",
      "approval",
      "healthcare",
      "travel",
      "procurement",
      "contract_sign",
      "identity_verification",
      "agent_delegation",
      "plugin_install"
    ];
    var customPolicies = /* @__PURE__ */ new Map();
    function registerToolPolicy(toolName, actionClass) {
      customPolicies.set(toolName.toLowerCase(), actionClass);
    }
    function unregisterToolPolicy(toolName) {
      customPolicies.delete(toolName.toLowerCase());
    }
    function getActionClass(toolName, capability) {
      const tool = toolName.toLowerCase();
      const custom = customPolicies.get(tool);
      if (custom !== void 0)
        return custom;
      if (capability) {
        const cap = capability.toLowerCase();
        if (HIGH_IMPACT_CAPABILITIES.includes(cap))
          return "high_impact_execute";
        if (cap === "data_access")
          return "safe_read";
      }
      if (SAFE_READ_KEYWORDS.some((k) => tool.includes(k)))
        return "safe_read";
      if (HIGH_IMPACT_KEYWORDS.some((k) => tool.includes(k)))
        return "high_impact_execute";
      if (LOW_RISK_WRITE_KEYWORDS.some((k) => tool.includes(k)))
        return "low_risk_write";
      return "high_impact_execute";
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/CapabilityClassifier.js
var require_CapabilityClassifier = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/CapabilityClassifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.classifyAction = classifyAction;
    var ToolPolicyMapper_js_1 = require_ToolPolicyMapper();
    function classifyAction(toolName, capability, amount) {
      const base = (0, ToolPolicyMapper_js_1.getActionClass)(toolName, capability);
      if (base === "low_risk_write" && amount !== void 0 && amount > 0) {
        return {
          actionClass: "high_impact_execute",
          capability,
          reason: `Tool '${toolName}' classified as low_risk_write but amount=${amount} present \u2014 escalated to high_impact_execute`
        };
      }
      const reasons = {
        safe_read: `Tool '${toolName}' matched safe_read keyword pattern${capability ? ` / capability='${capability}'` : ""}`,
        low_risk_write: `Tool '${toolName}' matched low_risk_write keyword pattern`,
        high_impact_execute: `Tool '${toolName}' requires Yebo preflight authorization${capability ? ` (capability='${capability}')` : ""}`
      };
      return {
        actionClass: base,
        capability,
        reason: reasons[base]
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/PolicyAuthorization.js
var require_PolicyAuthorization = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/PolicyAuthorization.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.computePolicyAuthHash = computePolicyAuthHash;
    exports2.issuePolicy = issuePolicy2;
    exports2.getPolicyAuthorization = getPolicyAuthorization2;
    exports2.listPolicyAuthorizations = listPolicyAuthorizations;
    var node_crypto_1 = require("node:crypto");
    var storage_core_1 = require_dist2();
    function computePolicyAuthHash(params) {
      const canonical = JSON.stringify({
        subject_identity: params.subject_identity,
        agent_identity: params.agent_identity,
        allowed_capabilities: [...params.allowed_capabilities].sort(),
        allowed_merchants: [...params.allowed_merchants].sort(),
        allowed_asset_types: [...params.allowed_asset_types].sort(),
        per_transaction_limit: params.per_transaction_limit,
        cumulative_budget_limit: params.cumulative_budget_limit,
        session_duration_seconds: params.session_duration_seconds,
        created_at: params.created_at,
        expires_at: params.expires_at
      });
      return (0, node_crypto_1.createHash)("sha256").update(canonical).digest("hex");
    }
    var _policyRepo = null;
    function getPolicyRepo() {
      if (!_policyRepo)
        _policyRepo = new storage_core_1.JsonRepository("policy-authorizations");
      return _policyRepo;
    }
    function issuePolicy2(params) {
      const id = (0, node_crypto_1.randomUUID)();
      const createdAt = (/* @__PURE__ */ new Date()).toISOString();
      const expiresAt = new Date(
        Date.now() + params.session_duration_minutes * 60 * 1e3 * 24
        // policy valid for 24× session duration
      ).toISOString();
      const sessionDurationSeconds = params.session_duration_minutes * 60;
      const base = {
        subject_identity: params.subject_identity,
        agent_identity: params.agent_identity,
        allowed_capabilities: params.allowed_capabilities,
        allowed_merchants: params.allowed_merchants ?? [],
        allowed_asset_types: params.allowed_asset_types ?? [],
        per_transaction_limit: params.per_transaction_limit,
        cumulative_budget_limit: params.cumulative_budget_limit,
        session_duration_seconds: sessionDurationSeconds,
        created_at: createdAt,
        expires_at: expiresAt
      };
      const policy_hash = computePolicyAuthHash({ ...base, biometric_proof_id: params.biometric_proof_id });
      const issuing_signature = (0, node_crypto_1.createHash)("sha256").update(`${policy_hash}:${id}`).digest("hex");
      const policyAuth = {
        id,
        ...base,
        policy_hash,
        issuing_signature,
        biometric_proof_id: params.biometric_proof_id
      };
      getPolicyRepo().save(policyAuth);
      return policyAuth;
    }
    function getPolicyAuthorization2(id) {
      return getPolicyRepo().findById(id) ?? void 0;
    }
    function listPolicyAuthorizations(subject_identity) {
      return getPolicyRepo().findWhere((p) => p.subject_identity === subject_identity);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionStore.js
var require_SessionStore = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionStore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSessionRepo = getSessionRepo;
    exports2.saveSession = saveSession;
    exports2.findSession = findSession2;
    exports2.findSessionsForIdentity = findSessionsForIdentity;
    exports2.findActiveSessionsForAgent = findActiveSessionsForAgent;
    var storage_core_1 = require_dist2();
    var _repo = null;
    function getSessionRepo() {
      if (!_repo)
        _repo = new storage_core_1.JsonRepository("authorization-sessions");
      return _repo;
    }
    function saveSession(session) {
      return getSessionRepo().save(session);
    }
    function findSession2(id) {
      return getSessionRepo().findById(id) ?? void 0;
    }
    function findSessionsForIdentity(subject_identity) {
      return getSessionRepo().findWhere((s) => s.subject_identity === subject_identity);
    }
    function findActiveSessionsForAgent(agent_identity) {
      return getSessionRepo().findWhere((s) => s.agent_identity === agent_identity && s.status === "active");
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionIssuer.js
var require_SessionIssuer = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionIssuer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.issueSession = issueSession2;
    var node_crypto_1 = require("node:crypto");
    var SessionStore_js_1 = require_SessionStore();
    function issueSession2(params) {
      const { policy_authorization, agent_identity, integrity_tier } = params;
      if (new Date(policy_authorization.expires_at) < /* @__PURE__ */ new Date()) {
        throw new Error(`PolicyAuthorization ${policy_authorization.id} has expired`);
      }
      if (policy_authorization.agent_identity !== agent_identity) {
        throw new Error(`Agent ${agent_identity} is not authorized by policy ${policy_authorization.id} (authorized agent: ${policy_authorization.agent_identity})`);
      }
      const issuedAt = (/* @__PURE__ */ new Date()).toISOString();
      const expiresAt = new Date(Date.now() + policy_authorization.session_duration_seconds * 1e3).toISOString();
      const session = {
        id: (0, node_crypto_1.randomUUID)(),
        subject_identity: policy_authorization.subject_identity,
        agent_identity,
        merchant_scope: policy_authorization.allowed_merchants,
        capability_scope: policy_authorization.allowed_capabilities,
        asset_scope: policy_authorization.allowed_asset_types,
        max_transaction_amount: policy_authorization.per_transaction_limit,
        cumulative_budget_limit: policy_authorization.cumulative_budget_limit,
        cumulative_spent: 0,
        session_duration_seconds: policy_authorization.session_duration_seconds,
        issued_at: issuedAt,
        expires_at: expiresAt,
        policy_authorization_id: policy_authorization.id,
        policy_hash: policy_authorization.policy_hash,
        integrity_tier,
        status: "active"
      };
      return (0, SessionStore_js_1.saveSession)(session);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionExpiry.js
var require_SessionExpiry = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionExpiry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.markExpiredIfNeeded = markExpiredIfNeeded;
    exports2.revokeSession = revokeSession2;
    exports2.secondsRemaining = secondsRemaining2;
    var SessionStore_js_1 = require_SessionStore();
    function markExpiredIfNeeded(session) {
      if (session.status !== "active")
        return session;
      const now = /* @__PURE__ */ new Date();
      const expiry = new Date(session.expires_at);
      if (expiry < now) {
        const expired = { ...session, status: "expired" };
        (0, SessionStore_js_1.saveSession)(expired);
        return expired;
      }
      return session;
    }
    function revokeSession2(session, _reason) {
      if (session.status !== "active")
        return session;
      const revoked = { ...session, status: "revoked" };
      (0, SessionStore_js_1.saveSession)(revoked);
      return revoked;
    }
    function secondsRemaining2(session) {
      return Math.max(0, Math.floor((new Date(session.expires_at).getTime() - Date.now()) / 1e3));
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionVerifier.js
var require_SessionVerifier = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionVerifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifySession = verifySession2;
    exports2.isSessionValid = isSessionValid;
    var SessionStore_js_1 = require_SessionStore();
    var SessionExpiry_js_1 = require_SessionExpiry();
    function verifySession2(sessionId) {
      const session = (0, SessionStore_js_1.findSession)(sessionId);
      if (!session) {
        return { valid: false, reason: "not_found" };
      }
      const current = (0, SessionExpiry_js_1.markExpiredIfNeeded)(session);
      if (current.status === "expired") {
        return { valid: false, session: current, reason: "expired", budget_remaining: 0, seconds_remaining: 0 };
      }
      if (current.status === "exhausted") {
        return {
          valid: false,
          session: current,
          reason: "exhausted",
          budget_remaining: 0,
          seconds_remaining: Math.max(0, Math.floor((new Date(current.expires_at).getTime() - Date.now()) / 1e3))
        };
      }
      if (current.status === "revoked") {
        return { valid: false, session: current, reason: "revoked", budget_remaining: 0, seconds_remaining: 0 };
      }
      const budgetRemaining = current.cumulative_budget_limit - current.cumulative_spent;
      const secondsRemaining2 = Math.max(0, Math.floor((new Date(current.expires_at).getTime() - Date.now()) / 1e3));
      return {
        valid: true,
        session: current,
        reason: "valid",
        budget_remaining: budgetRemaining,
        seconds_remaining: secondsRemaining2
      };
    }
    function isSessionValid(sessionId) {
      return verifySession2(sessionId).valid;
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionBudgetTracker.js
var require_SessionBudgetTracker = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/SessionBudgetTracker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.debitSession = debitSession2;
    exports2.getBudgetRemaining = getBudgetRemaining2;
    var SessionStore_js_1 = require_SessionStore();
    var SessionExpiry_js_1 = require_SessionExpiry();
    function debitSession2(sessionId, amount) {
      const session = (0, SessionStore_js_1.findSession)(sessionId);
      if (!session) {
        return {
          success: false,
          new_cumulative_spent: 0,
          budget_remaining: 0,
          session_status: "revoked",
          reason: "session_invalid"
        };
      }
      const current = (0, SessionExpiry_js_1.markExpiredIfNeeded)(session);
      if (current.status !== "active") {
        return {
          success: false,
          new_cumulative_spent: current.cumulative_spent,
          budget_remaining: Math.max(0, current.cumulative_budget_limit - current.cumulative_spent),
          session_status: current.status,
          reason: "session_invalid"
        };
      }
      if (amount > current.max_transaction_amount) {
        return {
          success: false,
          new_cumulative_spent: current.cumulative_spent,
          budget_remaining: current.cumulative_budget_limit - current.cumulative_spent,
          session_status: "active",
          reason: "amount_exceeds_per_transaction_limit"
        };
      }
      const newSpent = current.cumulative_spent + amount;
      const budgetRemaining = current.cumulative_budget_limit - newSpent;
      if (newSpent > current.cumulative_budget_limit) {
        return {
          success: false,
          new_cumulative_spent: current.cumulative_spent,
          budget_remaining: current.cumulative_budget_limit - current.cumulative_spent,
          session_status: "active",
          reason: "budget_exhausted"
        };
      }
      const updated = {
        ...current,
        cumulative_spent: newSpent,
        status: budgetRemaining <= 0 ? "exhausted" : "active"
      };
      (0, SessionStore_js_1.saveSession)(updated);
      return {
        success: true,
        new_cumulative_spent: newSpent,
        budget_remaining: Math.max(0, budgetRemaining),
        session_status: updated.status
      };
    }
    function getBudgetRemaining2(sessionId) {
      const session = (0, SessionStore_js_1.findSession)(sessionId);
      if (!session)
        return 0;
      return Math.max(0, session.cumulative_budget_limit - session.cumulative_spent);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/index.js
var require_dist6 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-sessions/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.findActiveSessionsForAgent = exports2.findSessionsForIdentity = exports2.findSession = exports2.secondsRemaining = exports2.revokeSession = exports2.markExpiredIfNeeded = exports2.getBudgetRemaining = exports2.debitSession = exports2.isSessionValid = exports2.verifySession = exports2.issueSession = exports2.computePolicyAuthHash = exports2.listPolicyAuthorizations = exports2.getPolicyAuthorization = exports2.issuePolicy = void 0;
    var PolicyAuthorization_js_1 = require_PolicyAuthorization();
    Object.defineProperty(exports2, "issuePolicy", { enumerable: true, get: function() {
      return PolicyAuthorization_js_1.issuePolicy;
    } });
    Object.defineProperty(exports2, "getPolicyAuthorization", { enumerable: true, get: function() {
      return PolicyAuthorization_js_1.getPolicyAuthorization;
    } });
    Object.defineProperty(exports2, "listPolicyAuthorizations", { enumerable: true, get: function() {
      return PolicyAuthorization_js_1.listPolicyAuthorizations;
    } });
    Object.defineProperty(exports2, "computePolicyAuthHash", { enumerable: true, get: function() {
      return PolicyAuthorization_js_1.computePolicyAuthHash;
    } });
    var SessionIssuer_js_1 = require_SessionIssuer();
    Object.defineProperty(exports2, "issueSession", { enumerable: true, get: function() {
      return SessionIssuer_js_1.issueSession;
    } });
    var SessionVerifier_js_1 = require_SessionVerifier();
    Object.defineProperty(exports2, "verifySession", { enumerable: true, get: function() {
      return SessionVerifier_js_1.verifySession;
    } });
    Object.defineProperty(exports2, "isSessionValid", { enumerable: true, get: function() {
      return SessionVerifier_js_1.isSessionValid;
    } });
    var SessionBudgetTracker_js_1 = require_SessionBudgetTracker();
    Object.defineProperty(exports2, "debitSession", { enumerable: true, get: function() {
      return SessionBudgetTracker_js_1.debitSession;
    } });
    Object.defineProperty(exports2, "getBudgetRemaining", { enumerable: true, get: function() {
      return SessionBudgetTracker_js_1.getBudgetRemaining;
    } });
    var SessionExpiry_js_1 = require_SessionExpiry();
    Object.defineProperty(exports2, "markExpiredIfNeeded", { enumerable: true, get: function() {
      return SessionExpiry_js_1.markExpiredIfNeeded;
    } });
    Object.defineProperty(exports2, "revokeSession", { enumerable: true, get: function() {
      return SessionExpiry_js_1.revokeSession;
    } });
    Object.defineProperty(exports2, "secondsRemaining", { enumerable: true, get: function() {
      return SessionExpiry_js_1.secondsRemaining;
    } });
    var SessionStore_js_1 = require_SessionStore();
    Object.defineProperty(exports2, "findSession", { enumerable: true, get: function() {
      return SessionStore_js_1.findSession;
    } });
    Object.defineProperty(exports2, "findSessionsForIdentity", { enumerable: true, get: function() {
      return SessionStore_js_1.findSessionsForIdentity;
    } });
    Object.defineProperty(exports2, "findActiveSessionsForAgent", { enumerable: true, get: function() {
      return SessionStore_js_1.findActiveSessionsForAgent;
    } });
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/EmergencyStop.js
var require_EmergencyStop = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/EmergencyStop.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isSessionExpired = isSessionExpired;
    exports2.isSessionRevoked = isSessionRevoked;
    exports2.isBudgetExhausted = isBudgetExhausted;
    exports2.isCapabilityBlocked = isCapabilityBlocked;
    exports2.isMerchantBlocked = isMerchantBlocked;
    exports2.isAmountOverHardLimit = isAmountOverHardLimit;
    exports2.checkEmergencyConditions = checkEmergencyConditions;
    function isSessionExpired(session) {
      if (session.status === "expired" || new Date(session.expires_at) < /* @__PURE__ */ new Date()) {
        return { triggered: true, trigger: "session_expired", detail: `Session expired at ${session.expires_at}` };
      }
      return { triggered: false };
    }
    function isSessionRevoked(session) {
      if (session.status === "revoked") {
        return { triggered: true, trigger: "session_revoked", detail: "Session has been revoked by the authorizing identity" };
      }
      return { triggered: false };
    }
    function isBudgetExhausted(session) {
      if (session.status === "exhausted") {
        return { triggered: true, trigger: "budget_exhausted", detail: `Budget limit of $${session.cumulative_budget_limit} reached` };
      }
      if (session.cumulative_spent >= session.cumulative_budget_limit) {
        return { triggered: true, trigger: "budget_exhausted", detail: `Spent $${session.cumulative_spent} of $${session.cumulative_budget_limit}` };
      }
      return { triggered: false };
    }
    function isCapabilityBlocked(session, capability) {
      if (session.capability_scope.length > 0 && !session.capability_scope.includes(capability)) {
        return {
          triggered: true,
          trigger: "capability_blocked",
          detail: `Capability '${capability}' not in session scope [${session.capability_scope.join(", ")}]`
        };
      }
      return { triggered: false };
    }
    function isMerchantBlocked(session, merchant) {
      if (!merchant)
        return { triggered: false };
      if (session.merchant_scope.length === 0)
        return { triggered: false };
      const normalized = merchant.toLowerCase().trim();
      const allowed = session.merchant_scope.map((m) => m.toLowerCase().trim());
      if (!allowed.includes(normalized)) {
        return {
          triggered: true,
          trigger: "merchant_blocked",
          detail: `Merchant '${merchant}' not in session scope [${session.merchant_scope.join(", ")}]`
        };
      }
      return { triggered: false };
    }
    function isAmountOverHardLimit(session, amount) {
      if (amount === void 0 || amount <= 0)
        return { triggered: false };
      if (amount > session.cumulative_budget_limit) {
        return {
          triggered: true,
          trigger: "scope_escalation",
          detail: `Amount $${amount} exceeds total budget limit $${session.cumulative_budget_limit}`
        };
      }
      return { triggered: false };
    }
    function checkEmergencyConditions(session, capability, merchant, amount) {
      const checks = [
        () => isSessionRevoked(session),
        () => isSessionExpired(session),
        () => isBudgetExhausted(session),
        () => isCapabilityBlocked(session, capability),
        () => isMerchantBlocked(session, merchant),
        () => isAmountOverHardLimit(session, amount)
      ];
      for (const check of checks) {
        const result = check();
        if (result.triggered)
          return result;
      }
      return { triggered: false };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/ThresholdPolicy.js
var require_ThresholdPolicy = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/ThresholdPolicy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isAmountAboveThreshold = isAmountAboveThreshold;
    exports2.isMerchantUnusual = isMerchantUnusual;
    exports2.isIntegrityRisk = isIntegrityRisk;
    exports2.checkThresholdConditions = checkThresholdConditions;
    var INTEGRITY_RISK_THRESHOLD = 30;
    function isAmountAboveThreshold(session, amount) {
      if (amount === void 0 || amount <= 0)
        return { triggered: false };
      if (amount > session.max_transaction_amount) {
        return {
          triggered: true,
          trigger: "amount_exceeded",
          detail: `Amount $${amount} exceeds per-transaction limit $${session.max_transaction_amount}`
        };
      }
      return { triggered: false };
    }
    function isMerchantUnusual(_session, _merchant) {
      return { triggered: false };
    }
    function isIntegrityRisk(integrityScore) {
      if (integrityScore === void 0)
        return { triggered: false };
      if (integrityScore < INTEGRITY_RISK_THRESHOLD) {
        return {
          triggered: true,
          trigger: "integrity_risk",
          detail: `Integrity score ${integrityScore} below risk threshold ${INTEGRITY_RISK_THRESHOLD}`
        };
      }
      return { triggered: false };
    }
    function checkThresholdConditions(session, amount, merchant, integrityScore) {
      const checks = [
        () => isAmountAboveThreshold(session, amount),
        () => isMerchantUnusual(session, merchant),
        () => isIntegrityRisk(integrityScore)
      ];
      for (const check of checks) {
        const result = check();
        if (result.triggered)
          return result;
      }
      return { triggered: false };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/ModeEvaluator.js
var require_ModeEvaluator = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/ModeEvaluator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.evaluateMode = evaluateMode2;
    var EmergencyStop_js_1 = require_EmergencyStop();
    var ThresholdPolicy_js_1 = require_ThresholdPolicy();
    function evaluateMode2(session, input) {
      if (!session) {
        return {
          mode: "instant",
          reason: "direct_authorization_no_session"
        };
      }
      const emergency = (0, EmergencyStop_js_1.checkEmergencyConditions)(session, input.capability, input.merchant, input.amount);
      if (emergency.triggered && emergency.trigger) {
        return {
          mode: "emergency_stop",
          reason: emergency.detail ?? "Emergency condition triggered",
          session_id: session.id,
          emergency_trigger: emergency.trigger
        };
      }
      const threshold = (0, ThresholdPolicy_js_1.checkThresholdConditions)(session, input.amount, input.merchant, input.integrity_score);
      if (threshold.triggered && threshold.trigger) {
        return {
          mode: "threshold",
          reason: threshold.detail ?? "Threshold condition triggered",
          session_id: session.id,
          threshold_trigger: threshold.trigger
        };
      }
      return {
        mode: "instant",
        reason: "within_session_bounds",
        session_id: session.id
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/index.js
var require_dist7 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-modes/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isIntegrityRisk = exports2.isMerchantUnusual = exports2.isAmountAboveThreshold = exports2.checkThresholdConditions = exports2.isAmountOverHardLimit = exports2.isMerchantBlocked = exports2.isCapabilityBlocked = exports2.isBudgetExhausted = exports2.isSessionRevoked = exports2.isSessionExpired = exports2.checkEmergencyConditions = exports2.evaluateMode = void 0;
    var ModeEvaluator_js_1 = require_ModeEvaluator();
    Object.defineProperty(exports2, "evaluateMode", { enumerable: true, get: function() {
      return ModeEvaluator_js_1.evaluateMode;
    } });
    var EmergencyStop_js_1 = require_EmergencyStop();
    Object.defineProperty(exports2, "checkEmergencyConditions", { enumerable: true, get: function() {
      return EmergencyStop_js_1.checkEmergencyConditions;
    } });
    Object.defineProperty(exports2, "isSessionExpired", { enumerable: true, get: function() {
      return EmergencyStop_js_1.isSessionExpired;
    } });
    Object.defineProperty(exports2, "isSessionRevoked", { enumerable: true, get: function() {
      return EmergencyStop_js_1.isSessionRevoked;
    } });
    Object.defineProperty(exports2, "isBudgetExhausted", { enumerable: true, get: function() {
      return EmergencyStop_js_1.isBudgetExhausted;
    } });
    Object.defineProperty(exports2, "isCapabilityBlocked", { enumerable: true, get: function() {
      return EmergencyStop_js_1.isCapabilityBlocked;
    } });
    Object.defineProperty(exports2, "isMerchantBlocked", { enumerable: true, get: function() {
      return EmergencyStop_js_1.isMerchantBlocked;
    } });
    Object.defineProperty(exports2, "isAmountOverHardLimit", { enumerable: true, get: function() {
      return EmergencyStop_js_1.isAmountOverHardLimit;
    } });
    var ThresholdPolicy_js_1 = require_ThresholdPolicy();
    Object.defineProperty(exports2, "checkThresholdConditions", { enumerable: true, get: function() {
      return ThresholdPolicy_js_1.checkThresholdConditions;
    } });
    Object.defineProperty(exports2, "isAmountAboveThreshold", { enumerable: true, get: function() {
      return ThresholdPolicy_js_1.isAmountAboveThreshold;
    } });
    Object.defineProperty(exports2, "isMerchantUnusual", { enumerable: true, get: function() {
      return ThresholdPolicy_js_1.isMerchantUnusual;
    } });
    Object.defineProperty(exports2, "isIntegrityRisk", { enumerable: true, get: function() {
      return ThresholdPolicy_js_1.isIntegrityRisk;
    } });
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/economics-core/dist/index.js
var require_dist8 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/economics-core/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FEE_SCHEDULE = exports2.BASE_FEE_USD = void 0;
    exports2.getTierForScore = getTierForScore;
    exports2.getFeeForTier = getFeeForTier;
    exports2.calculateFee = calculateFee2;
    exports2.recordRevenue = recordRevenue;
    exports2.createEnterpriseContract = createEnterpriseContract;
    exports2.getRevenueReport = getRevenueReport;
    var node_crypto_1 = require("node:crypto");
    exports2.BASE_FEE_USD = 0.04;
    exports2.FEE_SCHEDULE = [
      { tier: "standard", fee_per_mandate: 0.04, minimum_score: 0, description: "Standard rate" },
      { tier: "silver", fee_per_mandate: 0.035, minimum_score: 500, description: "12.5% discount" },
      { tier: "gold", fee_per_mandate: 0.028, minimum_score: 700, description: "30% discount" },
      { tier: "platinum", fee_per_mandate: 0.02, minimum_score: 850, description: "50% discount" }
    ];
    var contractStore = /* @__PURE__ */ new Map();
    var revenueStore = [];
    function getTierForScore(integrity_score) {
      if (integrity_score >= 850)
        return "platinum";
      if (integrity_score >= 700)
        return "gold";
      if (integrity_score >= 500)
        return "silver";
      return "standard";
    }
    function getFeeForTier(tier) {
      return exports2.FEE_SCHEDULE.find((f) => f.tier === tier).fee_per_mandate;
    }
    function calculateFee2(params) {
      const tier = getTierForScore(params.integrity_score ?? 0);
      let final_fee = getFeeForTier(tier);
      let contract_id;
      if (params.enterprise_id) {
        const contracts = Array.from(contractStore.values()).filter((c) => c.enterprise_id === params.enterprise_id && c.active);
        const contract = contracts.find((c) => !c.valid_until || new Date(c.valid_until) > /* @__PURE__ */ new Date());
        if (contract) {
          contract_id = contract.contract_id;
          if (contract.fee_per_mandate !== void 0) {
            final_fee = Math.min(final_fee, contract.fee_per_mandate);
          }
        }
      }
      const discount_applied = Number((exports2.BASE_FEE_USD - final_fee).toFixed(4));
      return {
        mandate_id: params.mandate_id,
        base_fee: exports2.BASE_FEE_USD,
        tier,
        discount_applied,
        final_fee: Number(final_fee.toFixed(4)),
        calculated_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...contract_id !== void 0 ? { enterprise_contract_id: contract_id } : {}
      };
    }
    function recordRevenue(calculation, enterprise_id) {
      const entry = {
        entry_id: (0, node_crypto_1.randomUUID)(),
        mandate_id: calculation.mandate_id,
        fee_collected: calculation.final_fee,
        tier: calculation.tier,
        collected_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...enterprise_id !== void 0 ? { enterprise_id } : {}
      };
      revenueStore.push(entry);
      return entry;
    }
    function createEnterpriseContract(contract) {
      const c = { ...contract, contract_id: (0, node_crypto_1.randomUUID)(), active: true };
      contractStore.set(c.contract_id, c);
      return c;
    }
    function getRevenueReport(from, to) {
      let entries = [...revenueStore];
      if (from)
        entries = entries.filter((e) => e.collected_at >= from);
      if (to)
        entries = entries.filter((e) => e.collected_at <= to);
      const total = entries.reduce((s, e) => s + e.fee_collected, 0);
      const by_tier = { standard: 0, silver: 0, gold: 0, platinum: 0 };
      for (const e of entries)
        by_tier[e.tier] += e.fee_collected;
      return { total: Number(total.toFixed(4)), count: entries.length, by_tier };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/integrity-score/dist/index.js
var require_dist9 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/integrity-score/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FRICTION_RULES = void 0;
    exports2.recordSignal = recordSignal2;
    exports2.ingestFromAudit = ingestFromAudit;
    exports2.computeScore = computeScore2;
    exports2.getDiscountTier = getDiscountTier;
    exports2.getSignals = getSignals;
    exports2.getApplicableFrictionRules = getApplicableFrictionRules;
    exports2.calculateIntegrityScore = calculateIntegrityScore2;
    var node_crypto_1 = require("node:crypto");
    var audit_core_1 = require_dist5();
    var economics_core_1 = require_dist8();
    var SIGNAL_WEIGHTS = {
      mandate_authorized: 15,
      policy_compliant: 15,
      signature_valid: 12,
      no_replay_detected: 12,
      settlement_matched: 10,
      plugin_compliant: 8,
      agent_compliant: 8,
      enterprise_verified: 10,
      dispute_resolved_in_favor: 5,
      sentinel_violation: -50,
      dispute_lost: -30,
      abnormal_volume: -20
    };
    var storage_core_1 = require_dist2();
    var signalLog = new storage_core_1.AppendLog("integrity-signals");
    var scoreKV = new storage_core_1.KVStore("integrity-scores");
    var signalStore = /* @__PURE__ */ new Map();
    var scoreCache = /* @__PURE__ */ new Map();
    for (const signal of signalLog.readAll()) {
      const existing = signalStore.get(signal.identity_id) ?? [];
      existing.push(signal);
      signalStore.set(signal.identity_id, existing);
    }
    function recordSignal2(params) {
      const weight = SIGNAL_WEIGHTS[params.signal_type];
      const signal = {
        signal_id: (0, node_crypto_1.randomUUID)(),
        identity_id: params.identity_id,
        signal_type: params.signal_type,
        value: params.value ?? (weight > 0 ? 1 : -1),
        weight,
        recorded_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...params.mandate_id !== void 0 ? { mandate_id: params.mandate_id } : {}
      };
      const existing = signalStore.get(params.identity_id) ?? [];
      existing.push(signal);
      signalStore.set(params.identity_id, existing);
      signalLog.append(signal);
      scoreCache.delete(params.identity_id);
      scoreKV.delete(params.identity_id);
      return signal;
    }
    function ingestFromAudit(identity_id) {
      const records = (0, audit_core_1.query)({ actor_id: identity_id, limit: 100 });
      for (const r of records) {
        const signalType = auditActionToSignal(r.action, r.decision);
        if (signalType) {
          recordSignal2({
            identity_id,
            signal_type: signalType,
            ...r.mandate_id !== void 0 ? { mandate_id: r.mandate_id } : {}
          });
        }
      }
    }
    function auditActionToSignal(action, decision) {
      if (action === "biometric_authorized" && decision === "allowed")
        return "mandate_authorized";
      if (action === "policy_evaluated" && decision === "allowed")
        return "policy_compliant";
      if (action === "pai_generated" && decision === "allowed")
        return "signature_valid";
      if (action === "sentinel_verified" && decision === "allowed")
        return "no_replay_detected";
      if (action === "settlement_confirmed" && decision === "allowed")
        return "settlement_matched";
      if (action === "sentinel_block")
        return "sentinel_violation";
      if (action === "agent_approved")
        return "agent_compliant";
      if (action === "plugin_installed")
        return "plugin_compliant";
      return null;
    }
    function computeScore2(identity_id) {
      const cached = scoreCache.get(identity_id);
      if (cached && Date.now() - new Date(cached.computed_at).getTime() < 3e4) {
        return cached;
      }
      const signals = signalStore.get(identity_id) ?? [];
      if (signals.length === 0) {
        const empty = {
          identity_id,
          score: 0,
          tier: "standard",
          signal_count: 0,
          computed_at: (/* @__PURE__ */ new Date()).toISOString(),
          friction_reduction_enabled: false
        };
        scoreCache.set(identity_id, empty);
        scoreKV.set(identity_id, empty);
        return empty;
      }
      const raw = signals.reduce((sum, s) => sum + s.weight * s.value, 0);
      const score = Math.max(0, Math.min(1e3, Math.round(raw)));
      const tier = (0, economics_core_1.getTierForScore)(score);
      const friction_reduction_enabled = score >= 500;
      const result = {
        identity_id,
        score,
        tier,
        signal_count: signals.length,
        computed_at: (/* @__PURE__ */ new Date()).toISOString(),
        friction_reduction_enabled
      };
      scoreCache.set(identity_id, result);
      scoreKV.set(identity_id, result);
      return result;
    }
    function getDiscountTier(identity_id) {
      return computeScore2(identity_id).tier;
    }
    function getSignals(identity_id) {
      return signalStore.get(identity_id) ?? [];
    }
    exports2.FRICTION_RULES = [
      { rule_id: "fr-01", description: "Reduce challenge frequency for repeat known counterparties", min_score: 500, applies_to: "challenge_frequency" },
      { rule_id: "fr-02", description: "Skip soft prompts for sub-$100 recurring mandates", min_score: 700, applies_to: "soft_prompt_threshold" },
      { rule_id: "fr-03", description: "Enable batch authorization for approved agent proposals", min_score: 850, applies_to: "batch_authorization" }
    ];
    function getApplicableFrictionRules(score) {
      return exports2.FRICTION_RULES.filter((r) => score >= r.min_score);
    }
    function calculateIntegrityScore2(params) {
      if (params.ingest_from_audit) {
        ingestFromAudit(params.identity_id);
      }
      const full = computeScore2(params.identity_id);
      const normalized = Math.round(full.score / 1e3 * 100);
      return {
        identity_id: params.identity_id,
        score: normalized,
        raw_score: full.score,
        tier: full.tier,
        signal_count: full.signal_count,
        friction_reduction_enabled: full.friction_reduction_enabled,
        applicable_friction_rules: getApplicableFrictionRules(full.score),
        computed_at: full.computed_at
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/KernelClient.js
var require_KernelClient = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/KernelClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.preflight = preflight;
    var node_crypto_1 = require("node:crypto");
    var authorization_sessions_1 = require_dist6();
    var authorization_modes_1 = require_dist7();
    var integrity_score_1 = require_dist9();
    var audit_core_1 = require_dist5();
    var CapabilityClassifier_js_1 = require_CapabilityClassifier();
    function preflight(request) {
      const now = (/* @__PURE__ */ new Date()).toISOString();
      const classification = (0, CapabilityClassifier_js_1.classifyAction)(request.toolName ?? request.capability, request.capability, request.amount);
      const { actionClass } = classification;
      if (actionClass === "safe_read") {
        (0, audit_core_1.record)({
          action: "preflight_allow",
          actor_id: request.agentId,
          decision: "allowed",
          detail: {
            action_class: "safe_read",
            capability: request.capability,
            tool_name: request.toolName,
            reason: "safe_read_bypass"
          }
        });
        return {
          decision: "allow",
          reason: "safe_read: no authorization required",
          actionClass: "safe_read",
          mode: "instant",
          sessionStatus: "none",
          decided_at: now
        };
      }
      const session = request.sessionId ? (0, authorization_sessions_1.findSession)(request.sessionId) : void 0;
      const sessionStatus = session?.status ?? "none";
      const integrity = (0, integrity_score_1.calculateIntegrityScore)({ identity_id: request.agentId, ingest_from_audit: false });
      const modeDecision = (0, authorization_modes_1.evaluateMode)(session, {
        capability: request.capability,
        ...request.merchant !== void 0 ? { merchant: request.merchant } : {},
        ...request.amount !== void 0 ? { amount: request.amount } : {},
        integrity_score: integrity.score
      });
      if (!session) {
        const challengeId = `challenge:${(0, node_crypto_1.randomUUID)()}`;
        const decision2 = {
          decision: "challenge",
          reason: "No authorization session \u2014 per-transaction biometric authorization required",
          actionClass,
          mode: "threshold",
          sessionStatus: "none",
          integrityScore: integrity.score,
          integrityTier: integrity.tier,
          challengeId,
          thresholdTrigger: "amount_exceeded",
          decided_at: now
        };
        emitAuditRecord(request, decision2, "preflight_challenge");
        return decision2;
      }
      let decision;
      if (modeDecision.mode === "instant") {
        decision = {
          decision: "allow",
          reason: modeDecision.reason,
          actionClass,
          mode: "instant",
          sessionStatus,
          integrityScore: integrity.score,
          integrityTier: integrity.tier,
          decided_at: now
        };
        emitAuditRecord(request, decision, "preflight_allow");
      } else if (modeDecision.mode === "threshold" && modeDecision.threshold_trigger) {
        decision = {
          decision: "challenge",
          reason: modeDecision.reason,
          actionClass,
          mode: "threshold",
          sessionStatus,
          integrityScore: integrity.score,
          integrityTier: integrity.tier,
          challengeId: `challenge:${request.sessionId ?? (0, node_crypto_1.randomUUID)()}:${(0, node_crypto_1.randomUUID)().slice(0, 8)}`,
          thresholdTrigger: modeDecision.threshold_trigger,
          decided_at: now
        };
        emitAuditRecord(request, decision, "preflight_challenge");
      } else {
        decision = {
          decision: "block",
          reason: modeDecision.reason,
          actionClass,
          mode: modeDecision.mode,
          sessionStatus,
          integrityScore: integrity.score,
          integrityTier: integrity.tier,
          ...modeDecision.emergency_trigger ? { emergencyTrigger: modeDecision.emergency_trigger } : {},
          decided_at: now
        };
        emitAuditRecord(request, decision, "preflight_block");
      }
      return decision;
    }
    function emitAuditRecord(request, decision, action) {
      const auditDecision = decision.decision === "allow" ? "allowed" : decision.decision === "challenge" ? "pending" : "blocked";
      (0, audit_core_1.record)({
        action,
        actor_id: request.agentId,
        decision: auditDecision,
        detail: {
          capability: request.capability,
          tool_name: request.toolName,
          action_class: decision.actionClass,
          mode: decision.mode,
          session_id: request.sessionId,
          session_status: decision.sessionStatus,
          integrity_score: decision.integrityScore,
          reason: decision.reason,
          emergency_trigger: decision.emergencyTrigger,
          threshold_trigger: decision.thresholdTrigger,
          challenge_id: decision.challengeId,
          ...request.metadata ? { metadata: request.metadata } : {}
        }
      });
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/ExecutionBoundary.js
var require_ExecutionBoundary = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/ExecutionBoundary.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExecutionBlockedError = exports2.ChallengeRequiredError = void 0;
    exports2.wrapTool = wrapTool;
    var KernelClient_js_1 = require_KernelClient();
    var ChallengeRequiredError = class extends Error {
      decision;
      constructor(decision) {
        super(`Yebo capability kernel: step-up authorization required \u2014 ${decision.reason}`);
        this.name = "ChallengeRequiredError";
        this.decision = decision;
      }
    };
    exports2.ChallengeRequiredError = ChallengeRequiredError;
    var ExecutionBlockedError = class extends Error {
      decision;
      constructor(decision) {
        super(`Yebo capability kernel: execution blocked \u2014 ${decision.reason}`);
        this.name = "ExecutionBlockedError";
        this.decision = decision;
      }
    };
    exports2.ExecutionBlockedError = ExecutionBlockedError;
    function wrapTool(executor, options) {
      return async function guardedExecutor(input) {
        const merchant = options.merchantResolver?.(input);
        const amount = options.amountResolver?.(input);
        const sessionId = options.sessionResolver?.();
        const request = {
          agentId: options.agentId,
          capability: options.capability,
          toolName: executor.name || options.capability,
          ...amount !== void 0 ? { amount } : {},
          ...merchant !== void 0 ? { merchant } : {},
          ...sessionId !== void 0 ? { sessionId } : {}
        };
        const decision = (0, KernelClient_js_1.preflight)(request);
        switch (decision.decision) {
          case "allow":
            return executor(input);
          case "challenge":
            throw new ChallengeRequiredError(decision);
          case "block":
            throw new ExecutionBlockedError(decision);
        }
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/index.js
var require_dist10 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/capability-kernel/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExecutionBlockedError = exports2.ChallengeRequiredError = exports2.wrapTool = exports2.preflight = exports2.classifyAction = exports2.unregisterToolPolicy = exports2.registerToolPolicy = exports2.getActionClass = void 0;
    var ToolPolicyMapper_js_1 = require_ToolPolicyMapper();
    Object.defineProperty(exports2, "getActionClass", { enumerable: true, get: function() {
      return ToolPolicyMapper_js_1.getActionClass;
    } });
    Object.defineProperty(exports2, "registerToolPolicy", { enumerable: true, get: function() {
      return ToolPolicyMapper_js_1.registerToolPolicy;
    } });
    Object.defineProperty(exports2, "unregisterToolPolicy", { enumerable: true, get: function() {
      return ToolPolicyMapper_js_1.unregisterToolPolicy;
    } });
    var CapabilityClassifier_js_1 = require_CapabilityClassifier();
    Object.defineProperty(exports2, "classifyAction", { enumerable: true, get: function() {
      return CapabilityClassifier_js_1.classifyAction;
    } });
    var KernelClient_js_1 = require_KernelClient();
    Object.defineProperty(exports2, "preflight", { enumerable: true, get: function() {
      return KernelClient_js_1.preflight;
    } });
    var ExecutionBoundary_js_1 = require_ExecutionBoundary();
    Object.defineProperty(exports2, "wrapTool", { enumerable: true, get: function() {
      return ExecutionBoundary_js_1.wrapTool;
    } });
    Object.defineProperty(exports2, "ChallengeRequiredError", { enumerable: true, get: function() {
      return ExecutionBoundary_js_1.ChallengeRequiredError;
    } });
    Object.defineProperty(exports2, "ExecutionBlockedError", { enumerable: true, get: function() {
      return ExecutionBoundary_js_1.ExecutionBlockedError;
    } });
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/agent-runtime/dist/index.js
var require_dist11 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/agent-runtime/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.preflightAction = preflightAction;
    exports2.registerAgent = registerAgent;
    exports2.getAgent = getAgent;
    exports2.revokeAgent = revokeAgent;
    exports2.interpretIntent = interpretIntent;
    exports2.proposeMandate = proposeMandate;
    exports2.approveProposal = approveProposal;
    exports2.rejectProposal = rejectProposal;
    exports2.getProposal = getProposal;
    exports2.listProposalsForIdentity = listProposalsForIdentity;
    var node_crypto_1 = require("node:crypto");
    var audit_core_1 = require_dist5();
    var capability_kernel_1 = require_dist10();
    var agentRegistry = /* @__PURE__ */ new Map();
    var proposalStore = /* @__PURE__ */ new Map();
    var PROPOSAL_TTL_MINUTES = 10;
    function preflightAction(agentId, capability, params) {
      const agent = agentRegistry.get(agentId);
      if (!agent || !agent.active) {
        return {
          decision: "block",
          reason: `Agent not registered or inactive: ${agentId}`,
          actionClass: "high_impact_execute",
          mode: "emergency_stop",
          sessionStatus: "none",
          emergencyTrigger: "scope_escalation",
          decided_at: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      return (0, capability_kernel_1.preflight)({
        agentId,
        capability,
        ...params?.amount !== void 0 ? { amount: params.amount } : {},
        ...params?.merchant !== void 0 ? { merchant: params.merchant } : {},
        ...params?.sessionId !== void 0 ? { sessionId: params.sessionId } : {}
      });
    }
    function registerAgent(registration) {
      const agent = {
        ...registration,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        active: true
      };
      agentRegistry.set(agent.agent_id, Object.freeze(agent));
      (0, audit_core_1.record)({
        action: "agent_proposed",
        actor_id: agent.agent_id,
        decision: "info",
        detail: { type: "registration", name: agent.agent_name }
      });
      return agent;
    }
    function getAgent(agent_id) {
      return agentRegistry.get(agent_id);
    }
    function revokeAgent(agent_id) {
      const agent = agentRegistry.get(agent_id);
      if (agent) {
        agentRegistry.set(agent_id, { ...agent, active: false });
        (0, audit_core_1.record)({ action: "agent_rejected", actor_id: "system", decision: "blocked", detail: { agent_id } });
      }
    }
    var CAPABILITY_PATTERNS = [
      { pattern: /pay|transfer|send|wire|charge/i, capability: "payment" },
      { pattern: /approve|sign off|authorize|confirm/i, capability: "approval" },
      { pattern: /prescri|medic|health|clinic|doctor/i, capability: "healthcare" },
      { pattern: /travel|flight|hotel|book/i, capability: "travel" },
      { pattern: /procure|purchase|order|buy|vendor/i, capability: "procurement" },
      { pattern: /data|access|read|fetch|retrieve/i, capability: "data_access" },
      { pattern: /contract|agreement|sign|execute/i, capability: "contract_sign" },
      { pattern: /verify|identify|kyc|onboard/i, capability: "identity_verification" },
      { pattern: /delegate|agent|assign/i, capability: "agent_delegation" },
      { pattern: /install|plugin|extension/i, capability: "plugin_install" }
    ];
    function interpretIntent(intent_text, _agent_id) {
      let detected_capability = "approval";
      let confidence = 0.5;
      for (const { pattern, capability } of CAPABILITY_PATTERNS) {
        if (pattern.test(intent_text)) {
          detected_capability = capability;
          confidence = 0.8;
          break;
        }
      }
      const amountMatch = intent_text.match(/\$?([\d,]+\.?\d*)/);
      const detected_amount = amountMatch?.[1]?.replace(/,/g, "");
      const counterpartyMatch = intent_text.match(/(?:to|for|from)\s+([A-Z][a-zA-Z\s]{2,30})/);
      const detected_counterparty = counterpartyMatch?.[1]?.trim();
      return {
        intent_id: (0, node_crypto_1.randomUUID)(),
        original_text: intent_text,
        detected_capability,
        confidence,
        interpreted_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...detected_counterparty !== void 0 ? { detected_counterparty } : {},
        ...detected_amount !== void 0 ? { detected_amount } : {},
        ...detected_amount !== void 0 ? { detected_currency: "USD" } : {}
      };
    }
    function proposeMandate(agent_id, intent_text, subject_identity, _policy_hash, overrides) {
      const agent = agentRegistry.get(agent_id);
      if (!agent || !agent.active)
        throw new Error(`Agent not registered or inactive: ${agent_id}`);
      const interpretation = interpretIntent(intent_text, agent_id);
      if (!agent.allowed_capabilities.includes(interpretation.detected_capability)) {
        throw new Error(`Agent ${agent_id} is not authorized to propose ${interpretation.detected_capability}`);
      }
      const resolvedAmount = overrides?.amount ?? interpretation.detected_amount;
      const resolvedCurrency = overrides?.currency ?? interpretation.detected_currency;
      const proposed_mandate = {
        subject_identity,
        counterparty_identity: overrides?.counterparty_identity ?? interpretation.detected_counterparty ?? agent_id,
        capability: overrides?.capability ?? interpretation.detected_capability,
        metadata: { agent_id, agent_did: agent.agent_did, intent_text, ...overrides?.metadata },
        ...resolvedAmount !== void 0 ? { amount: resolvedAmount } : {},
        ...resolvedCurrency !== void 0 ? { currency: resolvedCurrency } : {},
        ...overrides?.action_parameters !== void 0 ? { action_parameters: overrides.action_parameters } : {},
        ...overrides?.expires_in_seconds !== void 0 ? { expires_in_seconds: overrides.expires_in_seconds } : {}
      };
      const risk_level = parseFloat(proposed_mandate.amount ?? "0") > 1e4 ? "high" : parseFloat(proposed_mandate.amount ?? "0") > 1e3 ? "medium" : "low";
      const proposal = {
        proposal_id: (0, node_crypto_1.randomUUID)(),
        agent_id,
        agent_did: agent.agent_did,
        intent_text,
        proposed_mandate,
        rationale: `Agent ${agent.agent_name} interpreted intent with ${Math.round(interpretation.confidence * 100)}% confidence`,
        confidence: interpretation.confidence,
        risk_level,
        status: "pending",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + PROPOSAL_TTL_MINUTES * 6e4).toISOString()
      };
      proposalStore.set(proposal.proposal_id, Object.freeze(proposal));
      (0, audit_core_1.record)({
        action: "agent_proposed",
        actor_id: agent_id,
        decision: "pending",
        detail: { proposal_id: proposal.proposal_id, capability: proposed_mandate.capability }
      });
      return proposal;
    }
    function approveProposal(proposal_id, reviewer_id) {
      const p = proposalStore.get(proposal_id);
      if (!p)
        throw new Error(`Proposal not found: ${proposal_id}`);
      if (p.status !== "pending")
        throw new Error(`Proposal is ${p.status}`);
      const approved = Object.freeze({ ...p, status: "approved", reviewed_at: (/* @__PURE__ */ new Date()).toISOString(), reviewed_by: reviewer_id });
      proposalStore.set(proposal_id, approved);
      (0, audit_core_1.record)({ action: "agent_approved", actor_id: reviewer_id, decision: "allowed", detail: { proposal_id } });
      return approved;
    }
    function rejectProposal(proposal_id, reviewer_id, reason) {
      const p = proposalStore.get(proposal_id);
      if (!p)
        throw new Error(`Proposal not found: ${proposal_id}`);
      const rejected = Object.freeze({ ...p, status: "rejected", reviewed_at: (/* @__PURE__ */ new Date()).toISOString(), reviewed_by: reviewer_id, rejection_reason: reason });
      proposalStore.set(proposal_id, rejected);
      (0, audit_core_1.record)({ action: "agent_rejected", actor_id: reviewer_id, decision: "blocked", detail: { proposal_id, reason } });
      return rejected;
    }
    function getProposal(proposal_id) {
      return proposalStore.get(proposal_id);
    }
    function listProposalsForIdentity(subject_identity) {
      return Array.from(proposalStore.values()).filter((p) => p.proposed_mandate.subject_identity === subject_identity);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/mcp-bridge/dist/index.js
var require_dist12 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/mcp-bridge/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.registerAgent = registerAgent;
    exports2.registerAgentIdentity = registerAgentIdentity;
    exports2.validateCapability = validateCapability2;
    exports2.executeAgent = executeAgent2;
    exports2.interceptRequest = interceptRequest;
    exports2.deliverAuthCallback = deliverAuthCallback;
    exports2.consumeToken = consumeToken;
    exports2.getAgent = getAgent;
    exports2.listAgents = listAgents2;
    exports2.getPendingRequests = getPendingRequests;
    exports2.getExecutionRecord = getExecutionRecord;
    exports2.listExecutionRecords = listExecutionRecords;
    exports2.listRecentExecutions = listRecentExecutions2;
    var node_crypto_1 = require("node:crypto");
    var agent_runtime_1 = require_dist11();
    var audit_core_1 = require_dist5();
    var capability_kernel_1 = require_dist10();
    var identity_kit_1 = require_dist();
    var storage_core_1 = require_dist2();
    var agentRepo = new storage_core_1.JsonRepository("agents");
    var tokenRepo = new storage_core_1.JsonRepository("mcp-tokens");
    var execLog = new storage_core_1.AppendLog("mcp-executions");
    var agentIdentities = new Map(agentRepo.findAll().map((a) => [a.agent_id, a]));
    var issuedTokens = new Map(tokenRepo.findAll().map((t) => [t.token_id, t]));
    var pendingRequests = /* @__PURE__ */ new Map();
    var callbacks = /* @__PURE__ */ new Map();
    var REQUEST_TTL_MINUTES = 10;
    var EXECUTION_TIMEOUT_MS = 3e4;
    function registerAgent(params) {
      return registerAgentIdentity(params);
    }
    function registerAgentIdentity(params) {
      const agent_id = `agent_${(0, node_crypto_1.randomUUID)()}`;
      const identity = {
        agent_id,
        agent_did: params.agent_did,
        agent_name: params.agent_name,
        allowed_capabilities: params.allowed_capabilities,
        registered_at: (/* @__PURE__ */ new Date()).toISOString(),
        active: true,
        ...params.enterprise_id !== void 0 ? { enterprise_id: params.enterprise_id } : {}
      };
      agentIdentities.set(agent_id, Object.freeze(identity));
      agentRepo.save({ ...identity, id: agent_id });
      (0, agent_runtime_1.registerAgent)({
        agent_id,
        agent_did: params.agent_did,
        agent_name: params.agent_name,
        allowed_capabilities: params.allowed_capabilities,
        ...params.enterprise_id !== void 0 ? { enterprise_id: params.enterprise_id } : {}
      });
      (0, audit_core_1.record)({
        action: "agent_proposed",
        actor_id: agent_id,
        decision: "info",
        detail: { type: "mcp_registration", did: params.agent_did }
      });
      return identity;
    }
    function validateCapability2(agent_id, capability) {
      const agent = agentIdentities.get(agent_id);
      if (!agent) {
        return {
          valid: false,
          agent_id,
          capability,
          reason: `Agent not registered: ${agent_id}`,
          checked_at: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      if (!agent.active) {
        return {
          valid: false,
          agent_id,
          capability,
          reason: "Agent is inactive",
          checked_at: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      const permitted = agent.allowed_capabilities.includes(capability);
      return {
        valid: permitted,
        agent_id,
        capability,
        checked_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...!permitted ? { reason: `Capability '${capability}' not in agent's declared scope` } : {}
      };
    }
    async function executeAgent2(params) {
      const token = consumeToken(params.token_id);
      if (!token) {
        const record_ = {
          execution_id: (0, node_crypto_1.randomUUID)(),
          agent_id: "unknown",
          mandate_id: "unknown",
          pai_token: params.token_id,
          capability: params.capability,
          status: "blocked",
          started_at: (/* @__PURE__ */ new Date()).toISOString(),
          error: "Token invalid, expired, or already consumed"
        };
        execLog.append(record_);
        return record_;
      }
      if (!token.capability_scope.includes(params.capability)) {
        const blocked = {
          execution_id: (0, node_crypto_1.randomUUID)(),
          agent_id: token.agent_id,
          mandate_id: token.mandate_id,
          pai_token: token.pai_token,
          capability: params.capability,
          status: "blocked",
          started_at: (/* @__PURE__ */ new Date()).toISOString(),
          error: `Capability '${params.capability}' not in token scope: [${token.capability_scope.join(", ")}]`
        };
        execLog.append(blocked);
        (0, audit_core_1.record)({
          action: "sentinel_block",
          actor_id: token.agent_id,
          mandate_id: token.mandate_id,
          decision: "blocked",
          detail: { reason: blocked.error, capability: params.capability }
        });
        return blocked;
      }
      const execution_id = (0, node_crypto_1.randomUUID)();
      const started_at = (/* @__PURE__ */ new Date()).toISOString();
      const payload = params.payload ?? {};
      (0, audit_core_1.record)({
        action: "agent_approved",
        actor_id: token.agent_id,
        mandate_id: token.mandate_id,
        decision: "allowed",
        detail: { execution_id, capability: params.capability }
      });
      let status = "executing";
      let result;
      let error;
      const t0 = Date.now();
      try {
        const execFn = params.executor ?? defaultExecutor;
        const guardedFn = (0, capability_kernel_1.wrapTool)((ctx) => execFn(ctx), {
          capability: params.capability,
          agentId: token.agent_id
          // No session resolver here — the token represents already-authorized execution
          // The kernel classifies based on capability to catch any remaining block conditions.
        });
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Execution timeout after 30s")), EXECUTION_TIMEOUT_MS));
        result = await Promise.race([
          guardedFn({ mandate_id: token.mandate_id, pai_token: token.pai_token, payload }),
          timeoutPromise
        ]);
        status = "completed";
      } catch (err) {
        if (err instanceof capability_kernel_1.ExecutionBlockedError) {
          status = "blocked";
          error = `Capability kernel blocked execution: ${err.decision.reason}`;
          (0, audit_core_1.record)({
            action: "sentinel_block",
            actor_id: token.agent_id,
            mandate_id: token.mandate_id,
            decision: "blocked",
            detail: { reason: error, capability: params.capability, kernel_decision: err.decision }
          });
        } else if (err instanceof capability_kernel_1.ChallengeRequiredError) {
          status = "blocked";
          error = `Step-up authorization required: ${err.decision.reason}`;
        } else {
          status = "failed";
          error = err instanceof Error ? err.message : String(err);
        }
      }
      const completed_at = (/* @__PURE__ */ new Date()).toISOString();
      const duration_ms = Date.now() - t0;
      const execRecord = {
        execution_id,
        agent_id: token.agent_id,
        mandate_id: token.mandate_id,
        pai_token: token.pai_token,
        capability: params.capability,
        status,
        started_at,
        completed_at,
        duration_ms,
        ...result !== void 0 ? { result } : {},
        ...error !== void 0 ? { error } : {}
      };
      execLog.append(execRecord);
      (0, audit_core_1.record)({
        action: status === "completed" ? "settlement_confirmed" : "sentinel_block",
        actor_id: token.agent_id,
        mandate_id: token.mandate_id,
        decision: status === "completed" ? "allowed" : "blocked",
        detail: { execution_id, duration_ms, error }
      });
      return execRecord;
    }
    function defaultExecutor(ctx) {
      return Promise.resolve({
        mandate_id: ctx.mandate_id,
        executed: true,
        payload_received: Object.keys(ctx.payload).length,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    function interceptRequest(request) {
      const agent = agentIdentities.get(request.agent_id);
      if (!agent || !agent.active) {
        return {
          intercepted: true,
          request_id: "rejected",
          reason: `Unknown or inactive agent: ${request.agent_id}`,
          requires_human_approval: true
        };
      }
      if (!request.agent_signature || request.agent_signature.length < 10) {
        return {
          intercepted: true,
          request_id: "rejected",
          reason: "Request must be signed by agent key \u2014 INV-09",
          requires_human_approval: true
        };
      }
      if (!agent.allowed_capabilities.includes(request.requested_capability)) {
        return {
          intercepted: true,
          request_id: "rejected",
          reason: `Agent not authorized for capability: ${request.requested_capability}`,
          requires_human_approval: true
        };
      }
      const amount = request.requested_amount ? parseFloat(request.requested_amount) : void 0;
      const classification = (0, capability_kernel_1.classifyAction)(request.requested_capability, request.requested_capability, amount);
      const { actionClass } = classification;
      if (actionClass === "safe_read") {
        const request_id = (0, node_crypto_1.randomUUID)();
        (0, audit_core_1.record)({
          action: "agent_approved",
          actor_id: request.agent_id,
          decision: "allowed",
          detail: { action_class: "safe_read", capability: request.requested_capability, bypass_reason: "safe_read" }
        });
        return {
          intercepted: true,
          request_id,
          action_class: "safe_read",
          preflight_decision: "allow",
          requires_human_approval: true
        };
      }
      const preflightDecision = (0, capability_kernel_1.preflight)({
        agentId: request.agent_id,
        toolName: request.requested_capability,
        capability: request.requested_capability,
        intent: request.intent_text,
        ...amount !== void 0 ? { amount } : {},
        ...request.requested_counterparty !== void 0 ? { merchant: request.requested_counterparty } : {},
        ...request.requested_currency !== void 0 ? { asset: request.requested_currency } : {},
        ...request.authorization_session_id !== void 0 ? { sessionId: request.authorization_session_id } : {},
        ...request.context !== void 0 ? { metadata: request.context } : {}
      });
      if (preflightDecision.decision === "block") {
        (0, audit_core_1.record)({
          action: "sentinel_block",
          actor_id: request.agent_id,
          decision: "blocked",
          detail: {
            reason: preflightDecision.reason,
            capability: request.requested_capability,
            action_class: actionClass,
            emergency_trigger: preflightDecision.emergencyTrigger
          }
        });
        return {
          intercepted: true,
          request_id: "blocked",
          reason: `Preflight blocked: ${preflightDecision.reason}`,
          action_class: actionClass,
          preflight_decision: "block",
          requires_human_approval: true
        };
      }
      if (preflightDecision.decision === "challenge") {
        return {
          intercepted: true,
          request_id: preflightDecision.challengeId ?? (0, node_crypto_1.randomUUID)(),
          reason: `Step-up authorization required: ${preflightDecision.reason}`,
          action_class: actionClass,
          preflight_decision: "challenge",
          ...preflightDecision.challengeId !== void 0 ? { challenge_id: preflightDecision.challengeId } : {},
          requires_human_approval: true
        };
      }
      const full_request = {
        ...request,
        request_id: (0, node_crypto_1.randomUUID)(),
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + REQUEST_TTL_MINUTES * 6e4).toISOString()
      };
      pendingRequests.set(full_request.request_id, full_request);
      const policy_hash_placeholder = "pending-human-review";
      let proposal;
      try {
        proposal = (0, agent_runtime_1.proposeMandate)(request.agent_id, request.intent_text, request.subject_identity, policy_hash_placeholder, {
          counterparty_identity: request.requested_counterparty ?? request.agent_id,
          capability: request.requested_capability,
          metadata: {
            mcp_request_id: full_request.request_id,
            preflight_decision: "allow",
            preflight_mode: preflightDecision.mode,
            ...request.context
          },
          ...request.requested_amount !== void 0 ? { amount: request.requested_amount } : {},
          ...request.requested_currency !== void 0 ? { currency: request.requested_currency } : {}
        });
      } catch (err) {
        return {
          intercepted: true,
          request_id: full_request.request_id,
          reason: err instanceof Error ? err.message : "Proposal creation failed",
          action_class: actionClass,
          preflight_decision: "allow",
          requires_human_approval: true
        };
      }
      return {
        intercepted: true,
        request_id: full_request.request_id,
        proposal,
        action_class: actionClass,
        preflight_decision: "allow",
        requires_human_approval: true
      };
    }
    function deliverAuthCallback(params) {
      const request = pendingRequests.get(params.request_id);
      if (!request)
        throw new Error(`Request not found: ${params.request_id}`);
      let token;
      if (params.approved && params.mandate_id && params.pai_token) {
        token = {
          token_id: `mcp_token_${(0, identity_kit_1.generateNonce)(8)}`,
          agent_id: request.agent_id,
          mandate_id: params.mandate_id,
          pai_token: params.pai_token,
          capability_scope: params.capability_scope ?? [request.requested_capability],
          valid_until: new Date(Date.now() + 5 * 6e4).toISOString(),
          single_use: true,
          issued_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        issuedTokens.set(token.token_id, token);
        tokenRepo.save({ ...token, id: token.token_id });
      }
      const callback = {
        callback_id: (0, node_crypto_1.randomUUID)(),
        request_id: params.request_id,
        approved: params.approved,
        delivered_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...params.pai_token !== void 0 ? { pai_token: params.pai_token } : {},
        ...token !== void 0 ? { token } : {},
        ...params.rejection_reason !== void 0 ? { rejection_reason: params.rejection_reason } : {}
      };
      callbacks.set(params.request_id, callback);
      pendingRequests.delete(params.request_id);
      return callback;
    }
    function consumeToken(token_id) {
      const token = issuedTokens.get(token_id);
      if (!token)
        return null;
      if (new Date(token.valid_until) < /* @__PURE__ */ new Date()) {
        issuedTokens.delete(token_id);
        tokenRepo.delete(token_id);
        return null;
      }
      issuedTokens.delete(token_id);
      tokenRepo.delete(token_id);
      return token;
    }
    function getAgent(agent_id) {
      return agentIdentities.get(agent_id);
    }
    function listAgents2() {
      return Array.from(agentIdentities.values());
    }
    function getPendingRequests(subject_identity) {
      return Array.from(pendingRequests.values()).filter((r) => r.subject_identity === subject_identity);
    }
    function getExecutionRecord(execution_id) {
      return execLog.readAll().find((r) => r.execution_id === execution_id);
    }
    function listExecutionRecords(agent_id) {
      const all = execLog.readAll();
      return agent_id ? all.filter((r) => r.agent_id === agent_id) : all;
    }
    function listRecentExecutions2(n = 50) {
      return execLog.readTail(n);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/yebo-passkey/dist/index.js
var require_dist13 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/yebo-passkey/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RP_ORIGIN = exports2.RP_NAME = exports2.RP_ID = void 0;
    exports2.registerPartner = registerPartner2;
    exports2.getPartner = getPartner;
    exports2.getRegistrationOptions = getRegistrationOptions2;
    exports2.verifyRegistration = verifyRegistration2;
    exports2.getAuthenticationOptions = getAuthenticationOptions2;
    exports2.verifyAuthentication = verifyAuthentication2;
    exports2.validateSession = validateSession2;
    exports2.revokeSession = revokeSession2;
    exports2.createTestSession = createTestSession;
    exports2.issueYeboCredential = issueYeboCredential2;
    exports2.verifyYeboCredential = verifyYeboCredential;
    exports2.listCredentials = listCredentials;
    exports2.revokeCredential = revokeCredential;
    exports2.getIssuerDID = getIssuerDID;
    exports2.registerPasskey = registerPasskey;
    exports2.verifyPasskey = verifyPasskey;
    var node_crypto_1 = require("node:crypto");
    var server_1 = require("@simplewebauthn/server");
    var storage_core_1 = require_dist2();
    var _isProd = process.env["NODE_ENV"] === "production";
    exports2.RP_ID = process.env["YEBO_RP_ID"] ?? (_isProd ? "yebo.dev" : "localhost");
    exports2.RP_NAME = process.env["YEBO_RP_NAME"] ?? "Yebo";
    exports2.RP_ORIGIN = process.env["YEBO_RP_ORIGIN"] ?? (_isProd ? "https://yebo.dev" : "http://localhost:8787");
    function loadOrGenerateIssuerKey() {
      if (process.env["YEBO_ISSUER_PRIVATE_KEY"] && process.env["YEBO_ISSUER_PUBLIC_KEY"]) {
        return {
          privateKeyPem: process.env["YEBO_ISSUER_PRIVATE_KEY"],
          publicKeyPem: process.env["YEBO_ISSUER_PUBLIC_KEY"]
        };
      }
      const { privateKey, publicKey } = (0, node_crypto_1.generateKeyPairSync)("ec", {
        namedCurve: "P-256",
        publicKeyEncoding: { type: "spki", format: "pem" },
        privateKeyEncoding: { type: "pkcs8", format: "pem" }
      });
      return { privateKeyPem: privateKey, publicKeyPem: publicKey };
    }
    var { privateKeyPem: ISSUER_PRIVATE_KEY, publicKeyPem: ISSUER_PUBLIC_KEY } = loadOrGenerateIssuerKey();
    var ISSUER_DID = `did:yebo:issuer:${(0, node_crypto_1.createHash)("sha256").update(ISSUER_PUBLIC_KEY).digest("hex").slice(0, 16)}`;
    var credentialRepo = new storage_core_1.JsonRepository("passkey-credentials");
    var challengeRepo = new storage_core_1.JsonRepository("passkey-challenges");
    var partnerRepo = new storage_core_1.JsonRepository("passkey-partners");
    var sessionRepo = new storage_core_1.JsonRepository("passkey-sessions");
    var credentialLog = new storage_core_1.AppendLog("yebo-credentials");
    var activeChallenges = new Map(challengeRepo.findAll().filter((c) => !c.consumed && new Date(c.expires_at) > /* @__PURE__ */ new Date()).map((c) => [c.challenge_id, c]));
    function registerPartner2(params) {
      const partner = {
        id: params.partner_id,
        partner_id: params.partner_id,
        partner_name: params.partner_name,
        partner_origin: params.partner_origin,
        allowed_scopes: params.allowed_scopes ?? ["openid", "profile", "yebo:verify"],
        registered_at: (/* @__PURE__ */ new Date()).toISOString(),
        active: true
      };
      partnerRepo.save(partner);
      return partner;
    }
    function getPartner(partner_id) {
      return partnerRepo.findById(partner_id);
    }
    async function getRegistrationOptions2(params) {
      const existingCredentials = credentialRepo.findWhere((c) => c.identity_id === params.identity_id && !c.revoked);
      const options = await (0, server_1.generateRegistrationOptions)({
        rpName: exports2.RP_NAME,
        rpID: exports2.RP_ID,
        userID: Buffer.from(params.identity_id, "utf-8"),
        userName: params.username,
        attestationType: "none",
        excludeCredentials: existingCredentials.map((c) => ({
          id: c.credential_id,
          transports: c.transports
        })),
        authenticatorSelection: {
          residentKey: "required",
          userVerification: "required",
          authenticatorAttachment: "platform"
        },
        timeout: 12e4
      });
      const challenge = {
        id: options.challenge,
        challenge_id: options.challenge,
        identity_id: params.identity_id,
        type: "registration",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + 12e4).toISOString(),
        consumed: false
      };
      challengeRepo.save(challenge);
      activeChallenges.set(options.challenge, challenge);
      return options;
    }
    async function verifyRegistration2(params) {
      const pendingChallenges = challengeRepo.findWhere((c) => c.identity_id === params.identity_id && c.type === "registration" && !c.consumed && new Date(c.expires_at) > /* @__PURE__ */ new Date());
      if (pendingChallenges.length === 0) {
        return { verified: false, error: "No active registration challenge found" };
      }
      const storedChallenge = pendingChallenges.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
      let verification;
      try {
        verification = await (0, server_1.verifyRegistrationResponse)({
          response: params.response,
          expectedChallenge: storedChallenge.challenge_id,
          expectedOrigin: exports2.RP_ORIGIN,
          expectedRPID: exports2.RP_ID,
          requireUserVerification: true
        });
      } catch (err) {
        return { verified: false, error: err instanceof Error ? err.message : "Verification failed" };
      }
      if (!verification.verified || !verification.registrationInfo) {
        return { verified: false, error: "Registration not verified" };
      }
      const consumedChallenge = { ...storedChallenge, consumed: true };
      challengeRepo.save(consumedChallenge);
      activeChallenges.delete(storedChallenge.challenge_id);
      const { credential, aaguid, credentialDeviceType, credentialBackedUp } = verification.registrationInfo;
      const stored = {
        id: credential.id,
        credential_id: credential.id,
        identity_id: params.identity_id,
        public_key: Buffer.from(credential.publicKey).toString("base64url"),
        counter: credential.counter,
        aaguid: aaguid ?? "unknown",
        transports: params.response.response.transports ?? [],
        backed_up: credentialBackedUp,
        device_type: credentialDeviceType,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        last_used: (/* @__PURE__ */ new Date()).toISOString(),
        revoked: false
      };
      credentialRepo.save(stored);
      return { verified: true, credential: stored };
    }
    async function getAuthenticationOptions2(params) {
      const userCredentials = credentialRepo.findWhere((c) => c.identity_id === params.identity_id && !c.revoked);
      if (userCredentials.length === 0) {
        throw new Error(`No registered passkeys for identity: ${params.identity_id}`);
      }
      const options = await (0, server_1.generateAuthenticationOptions)({
        rpID: exports2.RP_ID,
        allowCredentials: userCredentials.map((c) => ({
          id: c.credential_id,
          transports: c.transports
        })),
        userVerification: "required",
        timeout: 12e4
      });
      const challengeRecord = {
        id: options.challenge,
        challenge_id: options.challenge,
        identity_id: params.identity_id,
        type: "authentication",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + 12e4).toISOString(),
        consumed: false
      };
      challengeRepo.save(challengeRecord);
      activeChallenges.set(options.challenge, challengeRecord);
      return options;
    }
    async function verifyAuthentication2(params) {
      const userCredential = credentialRepo.findById(params.response.id);
      if (!userCredential || userCredential.revoked) {
        return { verified: false, error: "Credential not found or revoked" };
      }
      if (userCredential.identity_id !== params.identity_id) {
        return { verified: false, error: "Credential does not belong to this identity" };
      }
      const pendingChallenges = challengeRepo.findWhere((c) => c.identity_id === params.identity_id && c.type === "authentication" && !c.consumed && new Date(c.expires_at) > /* @__PURE__ */ new Date());
      if (pendingChallenges.length === 0) {
        return { verified: false, error: "No active authentication challenge found" };
      }
      const storedChallenge = pendingChallenges.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
      let verification;
      try {
        verification = await (0, server_1.verifyAuthenticationResponse)({
          response: params.response,
          expectedChallenge: storedChallenge.challenge_id,
          expectedOrigin: exports2.RP_ORIGIN,
          expectedRPID: exports2.RP_ID,
          requireUserVerification: true,
          credential: {
            id: userCredential.credential_id,
            publicKey: Buffer.from(userCredential.public_key, "base64url"),
            counter: userCredential.counter,
            transports: userCredential.transports
          }
        });
      } catch (err) {
        return { verified: false, error: err instanceof Error ? err.message : "Authentication failed" };
      }
      if (!verification.verified) {
        return { verified: false, error: "Authentication response not verified" };
      }
      const { authenticationInfo } = verification;
      if (userCredential.counter > 0 && authenticationInfo.newCounter <= userCredential.counter) {
        return {
          verified: false,
          error: `Sign count violation: stored=${userCredential.counter} received=${authenticationInfo.newCounter}`
        };
      }
      const consumed = { ...storedChallenge, consumed: true };
      challengeRepo.save(consumed);
      activeChallenges.delete(storedChallenge.challenge_id);
      const updated = {
        ...userCredential,
        counter: authenticationInfo.newCounter,
        last_used: (/* @__PURE__ */ new Date()).toISOString()
      };
      credentialRepo.save(updated);
      const session = issueSession2({
        identity_id: params.identity_id,
        credential_id: userCredential.credential_id,
        scope: params.scope ?? ["yebo:verify"]
      });
      const yeboCredential = issueYeboCredential2({
        identity_id: params.identity_id,
        credential_id: userCredential.credential_id,
        scope: params.scope ?? ["yebo:verify"],
        backed_up: userCredential.backed_up
      });
      return { verified: true, session, credential: yeboCredential };
    }
    function issueSession2(params) {
      const session_id = (0, node_crypto_1.randomUUID)();
      const session = {
        id: session_id,
        session_id,
        identity_id: params.identity_id,
        credential_id: params.credential_id,
        scope: params.scope,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + 36e5).toISOString(),
        // 1 hour
        active: true
      };
      sessionRepo.save(session);
      return session;
    }
    function validateSession2(session_id) {
      const session = sessionRepo.findById(session_id);
      if (!session || !session.active)
        return null;
      if (new Date(session.expires_at) < /* @__PURE__ */ new Date()) {
        sessionRepo.save({ ...session, active: false });
        return null;
      }
      return session;
    }
    function revokeSession2(session_id) {
      const session = sessionRepo.findById(session_id);
      if (session)
        sessionRepo.save({ ...session, active: false });
    }
    function createTestSession(params) {
      const session_id = (0, node_crypto_1.randomUUID)();
      const session = {
        id: session_id,
        session_id,
        identity_id: params.identity_id,
        credential_id: params.credential_id ?? `test-cred-${(0, node_crypto_1.randomUUID)()}`,
        scope: params.scope ?? ["yebo:verify", "yebo:execute"],
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + (params.ttl_ms ?? 36e5)).toISOString(),
        active: true
      };
      sessionRepo.save(session);
      return session;
    }
    function issueYeboCredential2(params) {
      const credential_id = `yebo_vc_${(0, node_crypto_1.randomUUID)()}`;
      const now = /* @__PURE__ */ new Date();
      const expires = new Date(now.getTime() + 8 * 36e5);
      const subject = {
        identity_id: params.identity_id,
        credential_id: params.credential_id,
        verified_at: now.toISOString(),
        scope: params.scope,
        passkey_backed_up: params.backed_up
      };
      const payload = JSON.stringify({
        credential_id,
        issuer: ISSUER_DID,
        subject,
        issued_at: now.toISOString(),
        expires_at: expires.toISOString()
      });
      const signer = (0, node_crypto_1.createSign)("SHA256");
      signer.update(payload);
      const jws = signer.sign(ISSUER_PRIVATE_KEY, "base64url");
      const yeboCredential = {
        credential_id,
        type: "YeboVerifiableCredential",
        issuer: ISSUER_DID,
        subject,
        issued_at: now.toISOString(),
        expires_at: expires.toISOString(),
        proof: {
          type: "EcdsaSecp256r1Signature2019",
          created: now.toISOString(),
          verification_method: `${ISSUER_DID}#key-1`,
          jws
        }
      };
      credentialLog.append(yeboCredential);
      return yeboCredential;
    }
    function verifyYeboCredential(credential) {
      if (new Date(credential.expires_at) < /* @__PURE__ */ new Date()) {
        return { valid: false, reason: "Credential expired" };
      }
      if (credential.issuer !== ISSUER_DID) {
        return { valid: false, reason: "Unknown issuer" };
      }
      try {
        const payload = JSON.stringify({
          credential_id: credential.credential_id,
          issuer: credential.issuer,
          subject: credential.subject,
          issued_at: credential.issued_at,
          expires_at: credential.expires_at
        });
        const verifier = (0, node_crypto_1.createVerify)("SHA256");
        verifier.update(payload);
        const valid = verifier.verify(ISSUER_PUBLIC_KEY, credential.proof.jws, "base64url");
        return valid ? { valid: true } : { valid: false, reason: "Signature invalid" };
      } catch {
        return { valid: false, reason: "Verification error" };
      }
    }
    function listCredentials(identity_id) {
      return credentialRepo.findWhere((c) => c.identity_id === identity_id && !c.revoked);
    }
    function revokeCredential(credential_id) {
      const cred = credentialRepo.findById(credential_id);
      if (cred)
        credentialRepo.save({ ...cred, revoked: true });
    }
    function getIssuerDID() {
      return ISSUER_DID;
    }
    function registerPasskey(params) {
      const challenge = (0, node_crypto_1.randomUUID)();
      const challenge_id = challenge;
      const challengeRecord = {
        id: challenge_id,
        challenge_id,
        identity_id: params.identity_id,
        type: "registration",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + 12e4).toISOString(),
        consumed: false
      };
      challengeRepo.save(challengeRecord);
      activeChallenges.set(challenge_id, challengeRecord);
      return {
        credential_id: `pending_${challenge_id}`,
        challenge,
        identity_id: params.identity_id
      };
    }
    function verifyPasskey(params) {
      const challenge = Array.from(activeChallenges.values()).find((c) => c.identity_id === params.identity_id && !c.consumed);
      if (!challenge) {
        return { verified: false };
      }
      const consumed = { ...challenge, consumed: true };
      challengeRepo.save(consumed);
      activeChallenges.delete(challenge.challenge_id);
      const session = issueSession2({
        identity_id: params.identity_id,
        credential_id: params.credential_id,
        scope: ["yebo:verify"]
      });
      return { verified: true, session_id: session.session_id };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/plugin-sdk/dist/index.js
var require_dist14 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/plugin-sdk/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createManifest = createManifest;
    exports2.submitForReview = submitForReview;
    exports2.verifyPlugin = verifyPlugin;
    exports2.activatePlugin = activatePlugin;
    exports2.revokePlugin = revokePlugin;
    exports2.installPlugin = installPlugin;
    exports2.createSandboxSession = createSandboxSession;
    exports2.checkPermission = checkPermission;
    exports2.getPlugin = getPlugin;
    exports2.listActivePlugins = listActivePlugins;
    var node_crypto_1 = require("node:crypto");
    var audit_core_1 = require_dist5();
    var pluginStore = /* @__PURE__ */ new Map();
    var registrationStore = /* @__PURE__ */ new Map();
    var sandboxSessions = /* @__PURE__ */ new Map();
    function createManifest(params) {
      const bundle_hash = (0, node_crypto_1.createHash)("sha256").update(`${params.name}:${params.version}:${params.author}:${params.bundle_source ?? ""}`).digest("hex");
      const manifest = {
        plugin_id: `plugin_${(0, node_crypto_1.randomUUID)()}`,
        ...params,
        bundle_hash,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "draft"
      };
      pluginStore.set(manifest.plugin_id, Object.freeze(manifest));
      return manifest;
    }
    function submitForReview(plugin_id) {
      const m = pluginStore.get(plugin_id);
      if (!m)
        throw new Error(`Plugin not found: ${plugin_id}`);
      const updated = { ...m, status: "submitted" };
      pluginStore.set(plugin_id, Object.freeze(updated));
      return updated;
    }
    function verifyPlugin(plugin_id) {
      const m = pluginStore.get(plugin_id);
      if (!m)
        throw new Error(`Plugin not found: ${plugin_id}`);
      const updated = { ...m, status: "verified" };
      pluginStore.set(plugin_id, Object.freeze(updated));
      (0, audit_core_1.record)({ action: "plugin_installed", actor_id: "marketplace", decision: "allowed", detail: { plugin_id, name: m.name } });
      return updated;
    }
    function activatePlugin(plugin_id) {
      const m = pluginStore.get(plugin_id);
      if (!m)
        throw new Error(`Plugin not found: ${plugin_id}`);
      if (m.status !== "verified")
        throw new Error(`Plugin must be verified before activation`);
      const updated = { ...m, status: "active" };
      pluginStore.set(plugin_id, Object.freeze(updated));
      return updated;
    }
    function revokePlugin(plugin_id, reason) {
      const m = pluginStore.get(plugin_id);
      if (!m)
        throw new Error(`Plugin not found: ${plugin_id}`);
      const updated = { ...m, status: "revoked" };
      pluginStore.set(plugin_id, Object.freeze(updated));
      (0, audit_core_1.record)({ action: "plugin_blocked", actor_id: "system", decision: "blocked", detail: { plugin_id, reason } });
      return updated;
    }
    function installPlugin(plugin_id, installed_by, enterprise_id) {
      const m = pluginStore.get(plugin_id);
      if (!m || m.status !== "active")
        throw new Error(`Plugin ${plugin_id} is not active`);
      const reg = {
        registration_id: (0, node_crypto_1.randomUUID)(),
        manifest: m,
        installed_by,
        installed_at: (/* @__PURE__ */ new Date()).toISOString(),
        active: true,
        ...enterprise_id !== void 0 ? { enterprise_id } : {}
      };
      registrationStore.set(reg.registration_id, reg);
      return reg;
    }
    function createSandboxSession(plugin_id, identity_id) {
      const m = pluginStore.get(plugin_id);
      if (!m || m.status !== "active")
        throw new Error(`Plugin not active: ${plugin_id}`);
      const ctx = {
        plugin_id,
        identity_id,
        allowed_capabilities: [...m.declared_capabilities],
        allowed_permissions: [...m.sandbox_permissions],
        session_id: (0, node_crypto_1.randomUUID)(),
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        expires_at: new Date(Date.now() + 30 * 6e4).toISOString()
      };
      sandboxSessions.set(ctx.session_id, ctx);
      return ctx;
    }
    function checkPermission(session_id, permission) {
      const ctx = sandboxSessions.get(session_id);
      if (!ctx)
        return false;
      if (new Date(ctx.expires_at) < /* @__PURE__ */ new Date())
        return false;
      return ctx.allowed_permissions.includes(permission);
    }
    function getPlugin(plugin_id) {
      return pluginStore.get(plugin_id);
    }
    function listActivePlugins() {
      return Array.from(pluginStore.values()).filter((p) => p.status === "active");
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/plugin-marketplace/dist/index.js
var require_dist15 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/plugin-marketplace/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.activatePlugin = exports2.verifyPlugin = exports2.createManifest = void 0;
    exports2.listPlugin = listPlugin;
    exports2.discoverPlugins = discoverPlugins2;
    exports2.getListing = getListing;
    exports2.installPlugin = installPlugin;
    exports2.installFromMarketplace = installFromMarketplace;
    exports2.enablePlugin = enablePlugin;
    exports2.executePlugin = executePlugin2;
    exports2.getPluginExecutionHistory = getPluginExecutionHistory;
    exports2.isPluginEnabled = isPluginEnabled2;
    exports2.listEnabledPlugins = listEnabledPlugins;
    exports2.listAllPlugins = listAllPlugins2;
    exports2.submitPlugin = submitPlugin;
    exports2.approveSubmission = approveSubmission;
    exports2.getCapabilityRegistry = getCapabilityRegistry2;
    exports2.getBillingEvents = getBillingEvents;
    var node_crypto_1 = require("node:crypto");
    var plugin_sdk_1 = require_dist14();
    var audit_core_1 = require_dist5();
    var listings = /* @__PURE__ */ new Map();
    var capabilityRegistry = [];
    var submissions = /* @__PURE__ */ new Map();
    var billingEvents = [];
    var installCounts = /* @__PURE__ */ new Map();
    var enabledPlugins = /* @__PURE__ */ new Map();
    var executionHistory = [];
    function listPlugin(params) {
      const manifest = (0, plugin_sdk_1.getPlugin)(params.plugin_id);
      if (!manifest || manifest.status !== "active") {
        throw new Error(`Plugin ${params.plugin_id} must be active before listing`);
      }
      const listing = {
        listing_id: (0, node_crypto_1.randomUUID)(),
        plugin_id: params.plugin_id,
        manifest,
        category: params.category,
        tags: params.tags ?? [],
        install_count: 0,
        revenue_share_percent: params.revenue_share_percent ?? 30,
        listed_at: (/* @__PURE__ */ new Date()).toISOString(),
        featured: params.featured ?? false
      };
      listings.set(listing.listing_id, listing);
      for (const cap of manifest.declared_capabilities) {
        capabilityRegistry.push({
          plugin_id: params.plugin_id,
          capability: cap,
          description: `${manifest.name} provides ${cap}`,
          requires_enterprise: false,
          registered_at: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      return listing;
    }
    function discoverPlugins2(params) {
      let results = Array.from(listings.values());
      if (params?.category)
        results = results.filter((l) => l.category === params.category);
      if (params?.capability) {
        results = results.filter((l) => l.manifest.declared_capabilities.includes(params.capability));
      }
      if (params?.query) {
        const q = params.query.toLowerCase();
        results = results.filter((l) => l.manifest.name.toLowerCase().includes(q) || l.tags.some((t) => t.includes(q)));
      }
      if (params?.featured_only)
        results = results.filter((l) => l.featured);
      return results.sort((a, b) => b.install_count - a.install_count);
    }
    function getListing(listing_id) {
      return listings.get(listing_id);
    }
    function installPlugin(params) {
      const manifest = (0, plugin_sdk_1.getPlugin)(params.plugin_id);
      if (!manifest)
        throw new Error(`Plugin not found: ${params.plugin_id}`);
      if (manifest.status !== "active") {
        throw new Error(`Plugin '${manifest.name}' is not active (status: ${manifest.status})`);
      }
      const registration = (0, plugin_sdk_1.installPlugin)(params.plugin_id, params.identity_id, params.enterprise_id);
      (0, audit_core_1.record)({
        action: "plugin_installed",
        actor_id: params.identity_id,
        mandate_id: params.mandate_id,
        decision: "allowed",
        detail: { plugin_id: params.plugin_id, name: manifest.name }
      });
      const key = `${params.plugin_id}:${params.identity_id}`;
      enabledPlugins.set(key, {
        registration_id: registration.registration_id,
        plugin_id: params.plugin_id,
        identity_id: params.identity_id,
        enabled_at: (/* @__PURE__ */ new Date()).toISOString(),
        active: true
      });
      return registration;
    }
    function installFromMarketplace(listing_id, installed_by, enterprise_id) {
      const listing = listings.get(listing_id);
      if (!listing)
        throw new Error(`Listing not found: ${listing_id}`);
      const registration = (0, plugin_sdk_1.installPlugin)(listing.plugin_id, installed_by, enterprise_id);
      const count = (installCounts.get(listing_id) ?? 0) + 1;
      installCounts.set(listing_id, count);
      listings.set(listing_id, { ...listing, install_count: count });
      billingEvents.push({
        event_id: (0, node_crypto_1.randomUUID)(),
        plugin_id: listing.plugin_id,
        listing_id,
        event_type: "install",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...enterprise_id !== void 0 ? { enterprise_id } : {}
      });
      return registration;
    }
    function enablePlugin(params) {
      const manifest = (0, plugin_sdk_1.getPlugin)(params.plugin_id);
      if (!manifest || manifest.status !== "active") {
        throw new Error(`Plugin ${params.plugin_id} must be active to enable`);
      }
      const key = `${params.plugin_id}:${params.identity_id}`;
      const existing = enabledPlugins.get(key);
      const enabled = {
        registration_id: existing?.registration_id ?? (0, node_crypto_1.randomUUID)(),
        plugin_id: params.plugin_id,
        identity_id: params.identity_id,
        enabled_at: (/* @__PURE__ */ new Date()).toISOString(),
        active: true
      };
      enabledPlugins.set(key, enabled);
      return enabled;
    }
    async function executePlugin2(params) {
      const manifest = (0, plugin_sdk_1.getPlugin)(params.plugin_id);
      if (!manifest) {
        return _failedExecution(params, "sandbox-init", `Plugin not found: ${params.plugin_id}`);
      }
      if (!manifest.declared_capabilities.includes(params.capability)) {
        return _failedExecution(params, "sandbox-init", `Capability '${params.capability}' not declared in plugin manifest`);
      }
      const key = `${params.plugin_id}:${params.identity_id}`;
      const enabled = enabledPlugins.get(key);
      if (!enabled?.active) {
        return _failedExecution(params, "sandbox-init", "Plugin not enabled for this identity");
      }
      const sandboxCtx = (0, plugin_sdk_1.createSandboxSession)(params.plugin_id, params.identity_id);
      const canPropose = (0, plugin_sdk_1.checkPermission)(sandboxCtx.session_id, "propose_mandate");
      if (!canPropose) {
        return _failedExecution(params, sandboxCtx.session_id, "Plugin lacks propose_mandate sandbox permission");
      }
      const t0 = Date.now();
      let status = "failed";
      let result;
      let error;
      try {
        const execFn = params.executor ?? defaultPluginExecutor;
        result = await execFn({ ...sandboxCtx, payload: params.payload ?? {} });
        status = "completed";
      } catch (err) {
        error = err instanceof Error ? err.message : String(err);
        status = "failed";
      }
      const execResult = {
        execution_id: (0, node_crypto_1.randomUUID)(),
        plugin_id: params.plugin_id,
        identity_id: params.identity_id,
        capability: params.capability,
        mandate_id: params.mandate_id,
        status,
        sandbox_session_id: sandboxCtx.session_id,
        executed_at: (/* @__PURE__ */ new Date()).toISOString(),
        duration_ms: Date.now() - t0,
        ...result !== void 0 ? { result } : {},
        ...error !== void 0 ? { error } : {}
      };
      executionHistory.push(execResult);
      (0, audit_core_1.record)({
        action: status === "completed" ? "plugin_installed" : "sentinel_block",
        actor_id: params.identity_id,
        mandate_id: params.mandate_id,
        decision: status === "completed" ? "allowed" : "blocked",
        detail: {
          plugin_id: params.plugin_id,
          execution_id: execResult.execution_id,
          error
        }
      });
      return execResult;
    }
    function _failedExecution(params, session_id, error) {
      const result = {
        execution_id: (0, node_crypto_1.randomUUID)(),
        plugin_id: params.plugin_id,
        identity_id: params.identity_id,
        capability: params.capability,
        mandate_id: params.mandate_id,
        status: "blocked",
        error,
        sandbox_session_id: session_id,
        executed_at: (/* @__PURE__ */ new Date()).toISOString(),
        duration_ms: 0
      };
      executionHistory.push(result);
      return result;
    }
    function defaultPluginExecutor(ctx) {
      return Promise.resolve({
        plugin_id: ctx.plugin_id,
        proposed: true,
        capabilities: ctx.allowed_capabilities,
        payload_keys: Object.keys(ctx.payload),
        proposed_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    function getPluginExecutionHistory(plugin_id) {
      return plugin_id ? executionHistory.filter((e) => e.plugin_id === plugin_id) : [...executionHistory];
    }
    function isPluginEnabled2(plugin_id, identity_id) {
      return enabledPlugins.get(`${plugin_id}:${identity_id}`)?.active === true;
    }
    function listEnabledPlugins(identity_id) {
      return Array.from(enabledPlugins.values()).filter((e) => e.identity_id === identity_id && e.active);
    }
    function listAllPlugins2() {
      return (0, plugin_sdk_1.listActivePlugins)();
    }
    function submitPlugin(params) {
      const manifest = (0, plugin_sdk_1.createManifest)(params.plugin_manifest);
      (0, plugin_sdk_1.submitForReview)(manifest.plugin_id);
      const submission = {
        submission_id: (0, node_crypto_1.randomUUID)(),
        developer_id: params.developer_id,
        plugin_id: manifest.plugin_id,
        submitted_at: (/* @__PURE__ */ new Date()).toISOString(),
        review_status: "pending"
      };
      submissions.set(submission.submission_id, submission);
      return submission;
    }
    function approveSubmission(submission_id, reviewer_notes) {
      const s = submissions.get(submission_id);
      if (!s)
        throw new Error(`Submission not found: ${submission_id}`);
      (0, plugin_sdk_1.verifyPlugin)(s.plugin_id);
      (0, plugin_sdk_1.activatePlugin)(s.plugin_id);
      const approved = {
        ...s,
        review_status: "approved",
        reviewed_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...reviewer_notes !== void 0 ? { reviewer_notes } : {}
      };
      submissions.set(submission_id, approved);
      return approved;
    }
    function getCapabilityRegistry2() {
      return [...capabilityRegistry];
    }
    function getBillingEvents(plugin_id) {
      return plugin_id ? billingEvents.filter((e) => e.plugin_id === plugin_id) : [...billingEvents];
    }
    var plugin_sdk_2 = require_dist14();
    Object.defineProperty(exports2, "createManifest", { enumerable: true, get: function() {
      return plugin_sdk_2.createManifest;
    } });
    Object.defineProperty(exports2, "verifyPlugin", { enumerable: true, get: function() {
      return plugin_sdk_2.verifyPlugin;
    } });
    Object.defineProperty(exports2, "activatePlugin", { enumerable: true, get: function() {
      return plugin_sdk_2.activatePlugin;
    } });
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/sentinel/dist/index.js
var require_dist16 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/sentinel/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sentinelVerify = sentinelVerify2;
    exports2.trackMandateVolume = trackMandateVolume;
    exports2.checkDriftViolations = checkDriftViolations;
    var authority_proof_1 = require_dist4();
    var mandate_core_1 = require_dist3();
    var audit_core_1 = require_dist5();
    var mandateVolumeByIdentity = /* @__PURE__ */ new Map();
    var VOLUME_WINDOW_MS = 6e4;
    var VOLUME_THRESHOLD = 20;
    function sentinelVerify2(request) {
      const checks = [];
      const now = /* @__PURE__ */ new Date();
      const mandateExpired = new Date(request.mandate.expires_at) < now;
      checks.push({
        name: "mandate_expiry",
        passed: !mandateExpired,
        detail: mandateExpired ? `Mandate expired at ${request.mandate.expires_at}` : "Valid"
      });
      const paiExpired = new Date(request.pai.expires_at) < now;
      checks.push({
        name: "pai_expiry",
        passed: !paiExpired,
        detail: paiExpired ? `PAI expired at ${request.pai.expires_at}` : "Valid"
      });
      const policyHashMatch = request.mandate.policy_hash === request.pai.policy_hash;
      checks.push({
        name: "policy_hash_consistency",
        passed: policyHashMatch,
        detail: policyHashMatch ? "Policy hashes match" : `Mismatch: mandate has ${request.mandate.policy_hash}, PAI has ${request.pai.policy_hash}`
      });
      const policyHashValid = request.mandate.policy_hash === request.expected_policy_hash;
      checks.push({
        name: "policy_hash_valid",
        passed: policyHashValid,
        detail: policyHashValid ? "Policy hash verified" : "Policy hash does not match active enterprise policy"
      });
      const allowedCaps = request.allowed_capabilities;
      const capAllowed = !allowedCaps || allowedCaps.includes(request.mandate.capability);
      checks.push({
        name: "capability_scope",
        passed: capAllowed,
        detail: capAllowed ? `Capability ${request.mandate.capability} is in scope` : `Capability ${request.mandate.capability} is not allowed`
      });
      const nonceReused = (0, mandate_core_1.isNonceUsed)(request.mandate.nonce);
      checks.push({
        name: "nonce_uniqueness",
        passed: !nonceReused,
        detail: nonceReused ? `Nonce ${request.mandate.nonce} has already been used \u2014 replay attack blocked` : "Nonce is unique"
      });
      const mandateHash = (0, mandate_core_1.computeMandateHash)(request.mandate);
      const paiResult = (0, authority_proof_1.verifyPAI)(request.pai, mandateHash, request.expected_policy_hash);
      checks.push({
        name: "pai_integrity",
        passed: paiResult.valid,
        detail: paiResult.valid ? "PAI signature verified" : paiResult.errors.join("; ")
      });
      const mandateIdMatch = request.mandate.mandate_id === request.pai.mandate_id;
      checks.push({
        name: "mandate_id_match",
        passed: mandateIdMatch,
        detail: mandateIdMatch ? "Mandate IDs match" : `Mandate ID mismatch: ${request.mandate.mandate_id} vs ${request.pai.mandate_id}`
      });
      if (request.session) {
        const session = request.session;
        const sessionNow = /* @__PURE__ */ new Date();
        const sessionActive = session.status === "active" && new Date(session.expires_at) > sessionNow;
        checks.push({
          name: "session_validity",
          passed: sessionActive,
          detail: sessionActive ? `Session ${session.id} is active (expires ${session.expires_at})` : `Session ${session.id} is ${session.status} (expired: ${new Date(session.expires_at) <= sessionNow})`
        });
        const requestedAmount = request.requested_amount ?? 0;
        const projectedSpend = session.cumulative_spent + requestedAmount;
        const budgetOk = projectedSpend <= session.cumulative_budget_limit;
        checks.push({
          name: "cumulative_budget",
          passed: budgetOk,
          detail: budgetOk ? `Budget OK: $${projectedSpend} of $${session.cumulative_budget_limit}` : `Budget exceeded: $${projectedSpend} would exceed $${session.cumulative_budget_limit} limit (current: $${session.cumulative_spent})`
        });
        const capInScope = session.capability_scope.length === 0 || session.capability_scope.includes(request.mandate.capability);
        checks.push({
          name: "session_capability",
          passed: capInScope,
          detail: capInScope ? `Capability ${request.mandate.capability} is within session scope` : `Capability ${request.mandate.capability} not in session scope [${session.capability_scope.join(", ")}]`
        });
        const counterparty = request.mandate.counterparty_identity?.toLowerCase().trim() ?? "";
        const merchantAllowed = session.merchant_scope.length === 0 || session.merchant_scope.some((m) => m.toLowerCase().trim() === counterparty);
        checks.push({
          name: "session_merchant",
          passed: merchantAllowed,
          detail: merchantAllowed ? `Merchant '${counterparty}' is within session scope` : `Merchant '${counterparty}' not in session merchant scope [${session.merchant_scope.join(", ")}]`
        });
      }
      const passed = checks.every((c) => c.passed);
      const blocked_reason = passed ? void 0 : checks.filter((c) => !c.passed).map((c) => c.detail ?? c.name).join(" | ");
      (0, audit_core_1.record)({
        action: passed ? "sentinel_verified" : "sentinel_block",
        actor_id: "sentinel",
        mandate_id: request.mandate.mandate_id,
        decision: passed ? "allowed" : "blocked",
        detail: { checks: checks.filter((c) => !c.passed).map((c) => c.name), reason: blocked_reason }
      });
      return {
        passed,
        mandate_id: request.mandate.mandate_id,
        pai_id: request.pai.pai_id,
        checks,
        verified_at: now.toISOString(),
        ...blocked_reason !== void 0 ? { blocked_reason } : {}
      };
    }
    function trackMandateVolume(identity_id, mandate_id) {
      const now = Date.now();
      const existing = mandateVolumeByIdentity.get(identity_id);
      if (!existing || now - new Date(existing.window_start).getTime() > VOLUME_WINDOW_MS) {
        mandateVolumeByIdentity.set(identity_id, { count: 1, window_start: (/* @__PURE__ */ new Date()).toISOString() });
        return null;
      }
      existing.count++;
      if (existing.count > VOLUME_THRESHOLD) {
        const report = {
          identity_id,
          anomaly_type: "abnormal_volume",
          detail: `${existing.count} mandates in 60s (threshold: ${VOLUME_THRESHOLD})`,
          detected_at: (/* @__PURE__ */ new Date()).toISOString(),
          mandate_ids: [mandate_id]
        };
        (0, audit_core_1.record)({
          action: "sentinel_block",
          actor_id: "sentinel",
          mandate_id,
          decision: "blocked",
          detail: { anomaly: "abnormal_volume", count: existing.count }
        });
        return report;
      }
      return null;
    }
    function checkDriftViolations(code_analysis) {
      const violations = [];
      if (code_analysis["bypasses_sentinel"] === true) {
        violations.push({
          invariant: "INV-SENTINEL",
          description: "Code path bypasses Sentinel verification",
          severity: "critical"
        });
      }
      if (code_analysis["direct_execution_without_pai"] === true) {
        violations.push({
          invariant: "INV-02",
          description: "Execution attempted without PAI",
          severity: "critical"
        });
      }
      if (code_analysis["key_export_detected"] === true) {
        violations.push({
          invariant: "INV-03",
          description: "Private key export detected",
          severity: "critical"
        });
      }
      return violations;
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/policy-core/dist/index.js
var require_dist17 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/policy-core/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_POLICY = void 0;
    exports2.computePolicyHash = computePolicyHash;
    exports2.createPolicy = createPolicy;
    exports2.getPolicy = getPolicy;
    exports2.getActivePolicy = getActivePolicy2;
    exports2.evaluatePolicy = evaluatePolicy;
    exports2.listPolicies = listPolicies;
    var node_crypto_1 = require("node:crypto");
    var policyStore = /* @__PURE__ */ new Map();
    exports2.DEFAULT_POLICY = Object.freeze({
      policy_id: "default",
      enterprise_id: "yebo",
      name: "Default Open Policy",
      version: 1,
      allowed_capabilities: [
        "payment",
        "approval",
        "healthcare",
        "travel",
        "procurement",
        "data_access",
        "contract_sign",
        "identity_verification",
        "agent_delegation",
        "plugin_install"
      ],
      allowed_counterparties: [],
      allowed_plugins: [],
      allowed_agents: [],
      transaction_limits: { payment: 1e4, procurement: 5e4 },
      geographic_allowlist: [],
      geographic_blocklist: [],
      approval_chain: [],
      require_biometric: true,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString(),
      active: true
    });
    policyStore.set("default", exports2.DEFAULT_POLICY);
    function computePolicyHash(policy) {
      const canonical = {
        policy_id: policy.policy_id,
        enterprise_id: policy.enterprise_id,
        version: policy.version,
        allowed_capabilities: [...policy.allowed_capabilities].sort(),
        allowed_counterparties: [...policy.allowed_counterparties].sort(),
        transaction_limits: policy.transaction_limits,
        geographic_allowlist: [...policy.geographic_allowlist].sort(),
        geographic_blocklist: [...policy.geographic_blocklist].sort()
      };
      return (0, node_crypto_1.createHash)("sha256").update(JSON.stringify(canonical)).digest("hex");
    }
    function createPolicy(policy) {
      const frozen = Object.freeze({ ...policy });
      policyStore.set(policy.policy_id, frozen);
      return frozen;
    }
    function getPolicy(policy_id) {
      return policyStore.get(policy_id);
    }
    function getActivePolicy2(enterprise_id) {
      const policies = Array.from(policyStore.values()).filter((p) => p.enterprise_id === enterprise_id && p.active).sort((a, b) => b.version - a.version);
      return policies[0] ?? exports2.DEFAULT_POLICY;
    }
    function evaluatePolicy(mandate, policy) {
      const violations = [];
      const now = /* @__PURE__ */ new Date();
      if (!policy.allowed_capabilities.includes(mandate.capability)) {
        violations.push({
          rule: "capability_allowlist",
          detail: `Capability ${mandate.capability} is not allowed by policy`
        });
      }
      if (policy.allowed_counterparties.length > 0 && !policy.allowed_counterparties.includes(mandate.counterparty_identity)) {
        violations.push({
          rule: "counterparty_allowlist",
          detail: `Counterparty ${mandate.counterparty_identity} is not in allowlist`
        });
      }
      if (mandate.amount) {
        const amount = parseFloat(mandate.amount);
        const limit = policy.transaction_limits[mandate.capability];
        if (limit !== void 0 && amount > limit) {
          violations.push({
            rule: "transaction_limit",
            detail: `Amount ${amount} exceeds limit ${limit} for ${mandate.capability}`
          });
        }
      }
      if (policy.time_restrictions) {
        const hour = now.getUTCHours();
        const day = now.getUTCDay();
        const { from, to } = policy.time_restrictions.allowed_hours_utc;
        const hourAllowed = from <= to ? hour >= from && hour <= to : hour >= from || hour <= to;
        const dayAllowed = policy.time_restrictions.allowed_days.includes(day);
        if (!hourAllowed || !dayAllowed) {
          violations.push({
            rule: "time_restriction",
            detail: `Action not allowed at current time (UTC hour ${hour}, day ${day})`
          });
        }
      }
      const policy_hash = computePolicyHash(policy);
      return {
        allowed: violations.length === 0,
        policy_id: policy.policy_id,
        policy_hash,
        violations,
        evaluated_at: now.toISOString()
      };
    }
    function listPolicies(enterprise_id) {
      const all = Array.from(policyStore.values());
      return enterprise_id ? all.filter((p) => p.enterprise_id === enterprise_id) : all;
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/rate-limit-core/dist/index.js
var require_dist18 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/rate-limit-core/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_POLICY = void 0;
    exports2.checkIdentityLimit = checkIdentityLimit;
    exports2.checkEnterpriseLimit = checkEnterpriseLimit;
    exports2.checkAgentLimit = checkAgentLimit;
    exports2.checkPluginLimit = checkPluginLimit;
    exports2.checkGlobalLimit = checkGlobalLimit;
    exports2.checkAll = checkAll2;
    exports2.updatePolicy = updatePolicy;
    exports2.getPolicy = getPolicy;
    exports2.resetKey = resetKey;
    var DEFAULT_POLICY = {
      per_identity_per_minute: 20,
      per_enterprise_per_minute: 500,
      per_agent_per_minute: 50,
      per_plugin_per_minute: 30,
      global_per_minute: 1e4
    };
    exports2.DEFAULT_POLICY = DEFAULT_POLICY;
    var windows = /* @__PURE__ */ new Map();
    var customPolicy = { ...DEFAULT_POLICY };
    function slidingWindowCheck(key, max, window_ms) {
      const now = Date.now();
      const state = windows.get(key) ?? { timestamps: [], window_ms, max };
      const windowStart = now - window_ms;
      state.timestamps = state.timestamps.filter((t) => t > windowStart);
      const count = state.timestamps.length;
      if (count >= max) {
        windows.set(key, state);
        return {
          allowed: false,
          key,
          count,
          limit: max,
          remaining: 0,
          reset_at: new Date(state.timestamps[0] + window_ms).toISOString()
        };
      }
      state.timestamps.push(now);
      windows.set(key, state);
      return {
        allowed: true,
        key,
        count: count + 1,
        limit: max,
        remaining: max - count - 1,
        reset_at: new Date(now + window_ms).toISOString()
      };
    }
    function checkIdentityLimit(identity_id) {
      return slidingWindowCheck(`identity:${identity_id}`, customPolicy.per_identity_per_minute, 6e4);
    }
    function checkEnterpriseLimit(enterprise_id) {
      return slidingWindowCheck(`enterprise:${enterprise_id}`, customPolicy.per_enterprise_per_minute, 6e4);
    }
    function checkAgentLimit(agent_id) {
      return slidingWindowCheck(`agent:${agent_id}`, customPolicy.per_agent_per_minute, 6e4);
    }
    function checkPluginLimit(plugin_id) {
      return slidingWindowCheck(`plugin:${plugin_id}`, customPolicy.per_plugin_per_minute, 6e4);
    }
    function checkGlobalLimit() {
      return slidingWindowCheck("global", customPolicy.global_per_minute, 6e4);
    }
    function checkAll2(params) {
      const results = [];
      if (params.identity_id)
        results.push(checkIdentityLimit(params.identity_id));
      if (params.enterprise_id)
        results.push(checkEnterpriseLimit(params.enterprise_id));
      if (params.agent_id)
        results.push(checkAgentLimit(params.agent_id));
      if (params.plugin_id)
        results.push(checkPluginLimit(params.plugin_id));
      results.push(checkGlobalLimit());
      const violations = results.filter((r) => !r.allowed);
      return { allowed: violations.length === 0, violations };
    }
    function updatePolicy(policy) {
      customPolicy = { ...customPolicy, ...policy };
    }
    function getPolicy() {
      return { ...customPolicy };
    }
    function resetKey(key) {
      windows.delete(key);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/EventBus.js
var require_EventBus = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/EventBus.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InMemoryEventBus = void 0;
    var node_events_1 = require("node:events");
    var InMemoryEventBus2 = class {
      emitter;
      _publishedCount = 0;
      _errorCount = 0;
      constructor() {
        this.emitter = new node_events_1.EventEmitter();
        this.emitter.setMaxListeners(50);
      }
      publish(event) {
        this._publishedCount += 1;
        try {
          this.emitter.emit(event.type, event);
        } catch (err) {
          this._errorCount += 1;
          console.error(`[event-bus] Handler error for event ${event.type}:`, err);
        }
      }
      subscribe(type, handler) {
        this.emitter.on(type, handler);
      }
      unsubscribe(type, handler) {
        this.emitter.off(type, handler);
      }
      removeAllSubscriptions(type) {
        if (type) {
          this.emitter.removeAllListeners(type);
        } else {
          this.emitter.removeAllListeners();
        }
      }
      listenerCount(type) {
        return this.emitter.listenerCount(type);
      }
      /** Diagnostic stats — exposed via /metrics */
      stats() {
        const eventTypes = [
          "AuthorizationApproved",
          "ExecutionRequested",
          "ExecutionCompleted",
          "ExecutionFailed",
          "AuditRecordCreated",
          "IntegrityScoreUpdated",
          "ReceiptGenerated",
          "SessionCreated",
          "SessionBudgetUpdated",
          "SessionExpired",
          "ThresholdEscalation"
        ];
        const listeners = {};
        for (const t of eventTypes) {
          const count = this.emitter.listenerCount(t);
          if (count > 0)
            listeners[t] = count;
        }
        return { published: this._publishedCount, errors: this._errorCount, listeners };
      }
    };
    exports2.InMemoryEventBus = InMemoryEventBus2;
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/Publisher.js
var require_Publisher = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/Publisher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.publish = publish;
    exports2.publishAll = publishAll;
    exports2.bindPublisher = bindPublisher;
    function publish(bus2, event) {
      bus2.publish(event);
    }
    function publishAll(bus2, events) {
      for (const event of events) {
        bus2.publish(event);
      }
    }
    function bindPublisher(bus2, _type) {
      return (event) => bus2.publish(event);
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/Subscriber.js
var require_Subscriber = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/Subscriber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.subscribe = subscribe;
    exports2.subscribeMany = subscribeMany;
    function subscribe(bus2, type, handler) {
      bus2.subscribe(type, handler);
      return () => bus2.unsubscribe(type, handler);
    }
    function subscribeMany(bus2, handlers) {
      const unsubscribers = [];
      for (const [type, handler] of Object.entries(handlers)) {
        if (handler) {
          unsubscribers.push(subscribe(bus2, type, handler));
        }
      }
      return () => {
        for (const unsub of unsubscribers)
          unsub();
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/index.js
var require_dist19 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/event-bus/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.subscribeMany = exports2.subscribe = exports2.bindPublisher = exports2.publishAll = exports2.publish = exports2.InMemoryEventBus = void 0;
    exports2.createEventBus = createEventBus;
    var EventBus_js_1 = require_EventBus();
    var EventBus_js_2 = require_EventBus();
    Object.defineProperty(exports2, "InMemoryEventBus", { enumerable: true, get: function() {
      return EventBus_js_2.InMemoryEventBus;
    } });
    var Publisher_js_1 = require_Publisher();
    Object.defineProperty(exports2, "publish", { enumerable: true, get: function() {
      return Publisher_js_1.publish;
    } });
    Object.defineProperty(exports2, "publishAll", { enumerable: true, get: function() {
      return Publisher_js_1.publishAll;
    } });
    Object.defineProperty(exports2, "bindPublisher", { enumerable: true, get: function() {
      return Publisher_js_1.bindPublisher;
    } });
    var Subscriber_js_1 = require_Subscriber();
    Object.defineProperty(exports2, "subscribe", { enumerable: true, get: function() {
      return Subscriber_js_1.subscribe;
    } });
    Object.defineProperty(exports2, "subscribeMany", { enumerable: true, get: function() {
      return Subscriber_js_1.subscribeMany;
    } });
    function createEventBus() {
      return new EventBus_js_1.InMemoryEventBus();
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/execution-adapters/dist/index.js
var require_dist20 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/execution-adapters/dist/index.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AVAILABLE_ADAPTERS = void 0;
    exports2.execute = execute;
    var node_crypto_1 = require("node:crypto");
    var authority_proof_1 = require_dist4();
    var mandate_core_1 = require_dist3();
    var audit_core_1 = require_dist5();
    var stripe_1 = __importDefault(require("stripe"));
    function requireValidPAI(mandate, pai, expected_policy_hash) {
      const mandateHash = (0, mandate_core_1.computeMandateHash)(mandate);
      const result = (0, authority_proof_1.verifyPAI)(pai, mandateHash, expected_policy_hash);
      if (!result.valid) {
        throw new Error(`PAI verification failed: ${result.errors.join("; ")}`);
      }
    }
    var StripeAdapter = class {
      name = "stripe";
      client;
      constructor() {
        const key = process.env["STRIPE_SECRET_KEY"];
        this.client = key ? new stripe_1.default(key, { apiVersion: "2026-02-25.clover" }) : null;
      }
      async execute(mandate, idempotencyKey) {
        if (!this.client) {
          return {
            external_reference: `pi_mock_${idempotencyKey.slice(0, 16)}`,
            currency: mandate.currency ?? "USD",
            ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
          };
        }
        const amountCents = mandate.amount ? Math.round(parseFloat(mandate.amount) * 100) : 0;
        const paymentIntent = await this.client.paymentIntents.create({
          amount: amountCents,
          currency: (mandate.currency ?? "USD").toLowerCase(),
          metadata: {
            mandate_id: mandate.mandate_id,
            subject_identity: mandate.subject_identity,
            capability: mandate.capability
          },
          confirm: false
        }, { idempotencyKey });
        return {
          external_reference: paymentIntent.id,
          currency: paymentIntent.currency.toUpperCase(),
          ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
        };
      }
    };
    var stripeAdapter = new StripeAdapter();
    async function executeStripe(mandate, idempotencyKey) {
      return stripeAdapter.execute(mandate, idempotencyKey);
    }
    async function executeWebhook(mandate, idempotencyKey) {
      const url = process.env["YEBO_WEBHOOK_URL"];
      if (!url) {
        return {
          external_reference: `webhook_mock_${idempotencyKey.slice(0, 16)}`,
          currency: mandate.currency ?? "USD",
          ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
        };
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
          "X-Yebo-Mandate-Id": mandate.mandate_id
        },
        body: JSON.stringify({
          mandate_id: mandate.mandate_id,
          capability: mandate.capability,
          subject_identity: mandate.subject_identity,
          counterparty_identity: mandate.counterparty_identity,
          amount: mandate.amount,
          currency: mandate.currency
        })
      });
      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status} ${response.statusText}`);
      }
      return {
        external_reference: `webhook_${idempotencyKey.slice(0, 16)}`,
        currency: mandate.currency ?? "USD",
        ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
      };
    }
    async function executeACH(mandate, idempotencyKey) {
      return {
        external_reference: `ach_${idempotencyKey.slice(0, 16)}`,
        currency: "USD",
        ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
      };
    }
    async function executeApplePay(mandate, idempotencyKey) {
      return {
        external_reference: `applepay_${idempotencyKey.slice(0, 16)}`,
        currency: mandate.currency ?? "USD",
        ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
      };
    }
    async function executeUSDC(mandate, idempotencyKey) {
      return {
        external_reference: `usdc_${idempotencyKey.slice(0, 32)}`,
        currency: "USDC",
        ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
      };
    }
    async function executeBankRails(mandate, idempotencyKey) {
      return {
        external_reference: `wire_${idempotencyKey.slice(0, 16)}`,
        currency: mandate.currency ?? "USD",
        ...mandate.amount !== void 0 ? { amount_processed: mandate.amount } : {}
      };
    }
    async function execute(request) {
      requireValidPAI(request.mandate, request.pai, request.expected_policy_hash);
      const idempotencyKey = (0, node_crypto_1.randomUUID)().replace(/-/g, "");
      const receipt_id = `receipt_${idempotencyKey.slice(0, 16)}`;
      const executed_at = (/* @__PURE__ */ new Date()).toISOString();
      let adapterResult = {};
      try {
        switch (request.adapter) {
          case "stripe":
            adapterResult = await executeStripe(request.mandate, idempotencyKey);
            break;
          case "ach":
            adapterResult = await executeACH(request.mandate, idempotencyKey);
            break;
          case "apple_pay":
            adapterResult = await executeApplePay(request.mandate, idempotencyKey);
            break;
          case "usdc":
            adapterResult = await executeUSDC(request.mandate, idempotencyKey);
            break;
          case "bank_rails":
            adapterResult = await executeBankRails(request.mandate, idempotencyKey);
            break;
          case "webhook":
            adapterResult = await executeWebhook(request.mandate, idempotencyKey);
            break;
          case "mock":
            adapterResult = {
              external_reference: `mock_${receipt_id}`,
              ...request.mandate.amount !== void 0 ? { amount_processed: request.mandate.amount } : {}
            };
            break;
        }
        (0, audit_core_1.record)({
          action: "execution_dispatched",
          actor_id: request.adapter,
          mandate_id: request.mandate.mandate_id,
          decision: "allowed",
          detail: { adapter: request.adapter, reference: adapterResult.external_reference }
        });
        return {
          success: true,
          receipt_id,
          mandate_id: request.mandate.mandate_id,
          adapter: request.adapter,
          executed_at,
          ...adapterResult
        };
      } catch (err) {
        const error = err instanceof Error ? err.message : "Unknown error";
        (0, audit_core_1.record)({
          action: "execution_dispatched",
          actor_id: request.adapter,
          mandate_id: request.mandate.mandate_id,
          decision: "blocked",
          detail: { adapter: request.adapter, error }
        });
        return { success: false, receipt_id, mandate_id: request.mandate.mandate_id, adapter: request.adapter, executed_at, error };
      }
    }
    exports2.AVAILABLE_ADAPTERS = [
      { name: "stripe", display_name: "Stripe", supported_capabilities: ["payment", "procurement"], supported_currencies: ["USD", "EUR", "GBP"], active: true },
      { name: "ach", display_name: "ACH Bank Transfer", supported_capabilities: ["payment"], supported_currencies: ["USD"], active: true },
      { name: "apple_pay", display_name: "Apple Pay", supported_capabilities: ["payment"], supported_currencies: ["USD", "EUR"], active: true },
      { name: "usdc", display_name: "USDC Stablecoin", supported_capabilities: ["payment"], supported_currencies: ["USDC"], active: true },
      { name: "bank_rails", display_name: "Bank Wire", supported_capabilities: ["payment", "procurement"], supported_currencies: ["USD", "EUR", "GBP"], active: true },
      { name: "webhook", display_name: "Webhook Action", supported_capabilities: ["approval", "data_access", "contract_sign", "travel", "healthcare"], supported_currencies: ["USD"], active: true },
      { name: "mock", display_name: "Mock (Testing)", supported_capabilities: ["payment", "approval", "healthcare", "travel", "procurement", "data_access", "contract_sign"], supported_currencies: ["USD"], active: true }
    ];
  }
});

// ../../../../Desktop/yebo-monorepo-extract/workers/execution-worker/dist/index.js
var require_dist21 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/workers/execution-worker/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.initExecutionWorker = initExecutionWorker2;
    exports2.executionWorkerStats = executionWorkerStats2;
    var event_bus_1 = require_dist19();
    var execution_adapters_1 = require_dist20();
    var _workerLatencyMs = 0;
    var _jobsTotal = 0;
    var _successTotal = 0;
    var _failureTotal = 0;
    function initExecutionWorker2(bus2) {
      return (0, event_bus_1.subscribe)(bus2, "ExecutionRequested", async (event) => {
        const start = Date.now();
        _jobsTotal += 1;
        try {
          const result = await (0, execution_adapters_1.execute)({
            mandate: event.mandate,
            pai: event.pai,
            expected_policy_hash: event.policy_hash,
            adapter: event.adapter
          });
          _successTotal += 1;
          _workerLatencyMs = Date.now() - start;
          const completed = {
            type: "ExecutionCompleted",
            mandate_id: event.mandate_id,
            receipt_id: result.receipt_id,
            ...result.external_reference !== void 0 ? { external_reference: result.external_reference } : {},
            adapter: event.adapter,
            ...result.amount_processed !== void 0 ? { amount_processed: result.amount_processed } : {},
            ...result.currency !== void 0 ? { currency: result.currency } : {},
            executed_at: result.executed_at,
            identity_id: event.identity_id
          };
          bus2.publish(completed);
        } catch (err) {
          _failureTotal += 1;
          _workerLatencyMs = Date.now() - start;
          const failed = {
            type: "ExecutionFailed",
            mandate_id: event.mandate_id,
            error: err instanceof Error ? err.message : String(err),
            adapter: event.adapter,
            identity_id: event.identity_id,
            failed_at: (/* @__PURE__ */ new Date()).toISOString()
          };
          bus2.publish(failed);
        }
      });
    }
    function executionWorkerStats2() {
      return {
        jobs_total: _jobsTotal,
        success_total: _successTotal,
        failure_total: _failureTotal,
        last_latency_ms: _workerLatencyMs
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/workers/audit-writer/dist/index.js
var require_dist22 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/workers/audit-writer/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.initAuditWriter = initAuditWriter2;
    var event_bus_1 = require_dist19();
    var audit_core_1 = require_dist5();
    function initAuditWriter2(bus2) {
      return (0, event_bus_1.subscribeMany)(bus2, {
        AuthorizationApproved: (event) => {
          try {
            const auditRecord = (0, audit_core_1.record)({
              action: "sentinel_verified",
              actor_id: event.identity_id,
              mandate_id: event.mandate_id,
              decision: "allowed",
              detail: {
                pai_token: event.pai_token,
                policy_hash: event.policy_hash,
                timestamp: event.timestamp
              }
            });
            bus2.publish({
              type: "AuditRecordCreated",
              event_id: auditRecord.event_id,
              action: auditRecord.action,
              mandate_id: event.mandate_id
            });
          } catch (err) {
            console.error("[audit-writer] Failed to record AuthorizationApproved:", err);
          }
        },
        ExecutionCompleted: (event) => {
          try {
            const auditRecord = (0, audit_core_1.record)({
              action: "execution_dispatched",
              actor_id: event.adapter,
              mandate_id: event.mandate_id,
              decision: "allowed",
              detail: {
                receipt_id: event.receipt_id,
                ...event.external_reference !== void 0 ? { external_reference: event.external_reference } : {},
                executed_at: event.executed_at
              }
            });
            bus2.publish({
              type: "AuditRecordCreated",
              event_id: auditRecord.event_id,
              action: auditRecord.action,
              mandate_id: event.mandate_id
            });
          } catch (err) {
            console.error("[audit-writer] Failed to record ExecutionCompleted:", err);
          }
        },
        ExecutionFailed: (event) => {
          try {
            const auditRecord = (0, audit_core_1.record)({
              action: "sentinel_block",
              actor_id: event.identity_id,
              mandate_id: event.mandate_id,
              decision: "blocked",
              detail: {
                error: event.error,
                adapter: event.adapter,
                failed_at: event.failed_at
              }
            });
            bus2.publish({
              type: "AuditRecordCreated",
              event_id: auditRecord.event_id,
              action: auditRecord.action,
              mandate_id: event.mandate_id
            });
          } catch (err) {
            console.error("[audit-writer] Failed to record ExecutionFailed:", err);
          }
        }
      });
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/workers/integrity-worker/dist/index.js
var require_dist23 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/workers/integrity-worker/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.initIntegrityWorker = initIntegrityWorker2;
    var event_bus_1 = require_dist19();
    var integrity_score_1 = require_dist9();
    function initIntegrityWorker2(bus2) {
      return (0, event_bus_1.subscribeMany)(bus2, {
        AuthorizationApproved: (event) => {
          try {
            (0, integrity_score_1.recordSignal)({
              identity_id: event.identity_id,
              signal_type: "mandate_authorized",
              mandate_id: event.mandate_id
            });
            const score = (0, integrity_score_1.calculateIntegrityScore)({ identity_id: event.identity_id, ingest_from_audit: false });
            bus2.publish({
              type: "IntegrityScoreUpdated",
              identity_id: event.identity_id,
              score: score.score,
              tier: score.tier
            });
          } catch (err) {
            console.error("[integrity-worker] Failed to record AuthorizationApproved signal:", err);
          }
        },
        ExecutionCompleted: (event) => {
          try {
            (0, integrity_score_1.recordSignal)({
              identity_id: event.identity_id,
              signal_type: "policy_compliant",
              mandate_id: event.mandate_id
            });
          } catch (err) {
            console.error("[integrity-worker] Failed to record ExecutionCompleted signal:", err);
          }
        },
        ExecutionFailed: (event) => {
          try {
            (0, integrity_score_1.recordSignal)({
              identity_id: event.identity_id,
              signal_type: "sentinel_violation",
              mandate_id: event.mandate_id
            });
            const score = (0, integrity_score_1.calculateIntegrityScore)({ identity_id: event.identity_id, ingest_from_audit: false });
            bus2.publish({
              type: "IntegrityScoreUpdated",
              identity_id: event.identity_id,
              score: score.score,
              tier: score.tier
            });
          } catch (err) {
            console.error("[integrity-worker] Failed to record ExecutionFailed signal:", err);
          }
        }
      });
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptKeyStore.js
var require_ReceiptKeyStore = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptKeyStore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getActiveSigningKey = getActiveSigningKey;
    exports2.getKeyById = getKeyById2;
    exports2.getAllPublicKeyInfos = getAllPublicKeyInfos2;
    exports2.persistKeyRecord = persistKeyRecord;
    exports2.markKeyRotated = markKeyRotated;
    exports2.toPublicKeyInfo = toPublicKeyInfo2;
    var node_crypto_1 = require("node:crypto");
    var storage_core_1 = require_dist2();
    var SIGNER_ID = "yebo-gateway-v1";
    var ACTIVE_KEY_ID_FIELD = "__active_key_id__";
    var _store = null;
    function getStore() {
      if (!_store) {
        _store = new storage_core_1.KVStore("receipt-signing-keys");
      }
      return _store;
    }
    function generateNewKeyRecord() {
      const { privateKey: privatePem, publicKey: publicPem } = (0, node_crypto_1.generateKeyPairSync)("ec", {
        namedCurve: "P-256",
        publicKeyEncoding: { type: "spki", format: "pem" },
        privateKeyEncoding: { type: "pkcs8", format: "pem" }
      });
      return {
        key_id: `skey-${(0, node_crypto_1.randomUUID)()}`,
        signer_id: SIGNER_ID,
        public_key_pem: publicPem,
        private_key_pem: privatePem,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      };
    }
    function getActiveSigningKey() {
      const store = getStore();
      const activeKeyId = store.get(ACTIVE_KEY_ID_FIELD);
      if (activeKeyId) {
        const record5 = store.get(activeKeyId);
        if (record5 && record5.status === "active") {
          return record5;
        }
      }
      const newKey = generateNewKeyRecord();
      store.set(newKey.key_id, newKey);
      store.set(ACTIVE_KEY_ID_FIELD, newKey.key_id);
      return newKey;
    }
    function getKeyById2(keyId) {
      return getStore().get(keyId) ?? void 0;
    }
    function getAllPublicKeyInfos2() {
      const store = getStore();
      const activeKeyId = store.get(ACTIVE_KEY_ID_FIELD);
      const result = [];
      for (const k of store.keys()) {
        if (k === ACTIVE_KEY_ID_FIELD)
          continue;
        const record5 = store.get(k);
        if (!record5)
          continue;
        result.push({
          key_id: record5.key_id,
          signer_id: record5.signer_id,
          public_key_pem: record5.public_key_pem,
          created_at: record5.created_at,
          status: record5.key_id === activeKeyId ? "active" : record5.status ?? "rotated",
          ...record5.rotated_at !== void 0 ? { rotated_at: record5.rotated_at } : {}
        });
      }
      return result.sort((a, b) => {
        if (a.status === "active")
          return -1;
        if (b.status === "active")
          return 1;
        return b.created_at.localeCompare(a.created_at);
      });
    }
    function persistKeyRecord(record5, makeActive) {
      const store = getStore();
      store.set(record5.key_id, record5);
      if (makeActive) {
        store.set(ACTIVE_KEY_ID_FIELD, record5.key_id);
      }
    }
    function markKeyRotated(keyId, rotated_at) {
      const store = getStore();
      const record5 = store.get(keyId);
      if (!record5)
        return;
      store.set(keyId, { ...record5, status: "rotated", rotated_at });
    }
    function toPublicKeyInfo2(record5) {
      return {
        key_id: record5.key_id,
        signer_id: record5.signer_id,
        public_key_pem: record5.public_key_pem,
        created_at: record5.created_at,
        status: record5.status,
        ...record5.rotated_at !== void 0 ? { rotated_at: record5.rotated_at } : {}
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptSerializer.js
var require_ReceiptSerializer = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptSerializer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extractSignedFields = extractSignedFields;
    exports2.canonicalize = canonicalize;
    exports2.hashReceipt = hashReceipt;
    var node_crypto_1 = require("node:crypto");
    function extractSignedFields(data) {
      const base = {
        receipt_id: data.receipt_id,
        mandate_id: data.mandate_id,
        pai_token: data.pai_token,
        authorized_by: data.authorized_by,
        agent_id: data.agent_id,
        capability: data.capability,
        policy_hash: data.policy_hash,
        execution_status: data.execution_status,
        timestamp: data.timestamp,
        protocol_version: data.protocol_version
      };
      const keyId = data.key_id;
      const authStatus = data.authorization_status;
      return {
        ...base,
        ...keyId !== void 0 ? { key_id: keyId } : {},
        ...authStatus !== void 0 ? { authorization_status: authStatus } : {}
      };
    }
    function canonicalize(fields) {
      return JSON.stringify(fields, Object.keys(fields).sort());
    }
    function hashReceipt(fields) {
      return (0, node_crypto_1.createHash)("sha256").update(canonicalize(fields), "utf8").digest("hex");
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptSigner.js
var require_ReceiptSigner = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptSigner.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.signReceipt = signReceipt;
    exports2.getSignerPublicKey = getSignerPublicKey;
    var node_crypto_1 = require("node:crypto");
    var node_crypto_2 = require("node:crypto");
    var ReceiptKeyStore_js_1 = require_ReceiptKeyStore();
    var ReceiptSerializer_js_1 = require_ReceiptSerializer();
    var PROTOCOL_VERSION = "1.0.0";
    function signReceipt(params) {
      const receipt_id = `car-${(0, node_crypto_2.randomUUID)()}`;
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const signingKey = (0, ReceiptKeyStore_js_1.getActiveSigningKey)();
      const authorization_status = params.authorization_status ?? "authorized";
      const settlement_status = params.settlement_status ?? "unknown";
      const signedFields = (0, ReceiptSerializer_js_1.extractSignedFields)({
        receipt_id,
        mandate_id: params.mandate_id,
        pai_token: params.pai_token,
        authorized_by: params.authorized_by,
        agent_id: params.agent_id,
        capability: params.capability,
        policy_hash: params.policy_hash,
        execution_status: params.execution_status,
        timestamp,
        protocol_version: PROTOCOL_VERSION,
        key_id: signingKey.key_id,
        authorization_status,
        // Informational fields below (not in SignedFields but needed for union type satisfaction)
        intent: params.intent,
        merchant: params.merchant,
        asset: params.asset,
        amount: params.amount,
        session_id: params.session_id,
        external_reference: params.external_reference,
        integrity_score: params.integrity_score,
        integrity_tier: params.integrity_tier,
        signer_public_key: signingKey.public_key_pem,
        signer_id: signingKey.signer_id,
        settlement_status
      });
      const receiptHash = (0, ReceiptSerializer_js_1.hashReceipt)(signedFields);
      const signer = (0, node_crypto_1.createSign)("sha256");
      signer.update(receiptHash, "utf8");
      const signature = signer.sign(signingKey.private_key_pem, "base64url");
      return Object.freeze({
        receipt_id,
        mandate_id: params.mandate_id,
        pai_token: params.pai_token,
        authorized_by: params.authorized_by,
        agent_id: params.agent_id,
        capability: params.capability,
        intent: params.intent,
        merchant: params.merchant,
        asset: params.asset,
        amount: params.amount,
        policy_hash: params.policy_hash,
        session_id: params.session_id,
        execution_status: params.execution_status,
        external_reference: params.external_reference,
        integrity_score: params.integrity_score,
        integrity_tier: params.integrity_tier,
        timestamp,
        protocol_version: PROTOCOL_VERSION,
        signer_public_key: signingKey.public_key_pem,
        key_id: signingKey.key_id,
        signer_id: signingKey.signer_id,
        authorization_status,
        settlement_status,
        signature
      });
    }
    function getSignerPublicKey() {
      return (0, ReceiptKeyStore_js_1.getActiveSigningKey)().public_key_pem;
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptVerifier.js
var require_ReceiptVerifier = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptVerifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyReceipt = verifyReceipt2;
    var node_crypto_1 = require("node:crypto");
    var ReceiptSerializer_js_1 = require_ReceiptSerializer();
    var MAX_RECEIPT_AGE_MS = 24 * 60 * 60 * 1e3;
    var REQUIRED_FIELDS = [
      "receipt_id",
      "mandate_id",
      "pai_token",
      "authorized_by",
      "agent_id",
      "capability",
      "policy_hash",
      "execution_status",
      "timestamp",
      "protocol_version",
      "signer_public_key",
      "signature"
    ];
    function verifyReceipt2(receipt, opts = {}) {
      const errors = [];
      const now = /* @__PURE__ */ new Date();
      for (const field of REQUIRED_FIELDS) {
        const value = receipt[field];
        if (value === void 0 || value === null || value === "") {
          errors.push(`Missing required field: ${field}`);
        }
      }
      if (errors.length > 0) {
        return buildResult(receipt.receipt_id ?? "UNKNOWN", errors, false, false, null, null, now);
      }
      let timestampValid = false;
      try {
        const issuedAt = new Date(receipt.timestamp);
        const ageMs = now.getTime() - issuedAt.getTime();
        if (isNaN(issuedAt.getTime())) {
          errors.push("Receipt timestamp is not a valid ISO 8601 date");
        } else if (ageMs > MAX_RECEIPT_AGE_MS) {
          errors.push(`Receipt is older than 24 hours (issued at ${receipt.timestamp})`);
        } else if (ageMs < -6e4) {
          errors.push(`Receipt timestamp is in the future: ${receipt.timestamp}`);
        } else {
          timestampValid = true;
        }
      } catch {
        errors.push("Failed to parse receipt timestamp");
      }
      let signatureValid = false;
      try {
        const signedFields = (0, ReceiptSerializer_js_1.extractSignedFields)(receipt);
        const receiptHash = (0, ReceiptSerializer_js_1.hashReceipt)(signedFields);
        const verifier = (0, node_crypto_1.createVerify)("sha256");
        verifier.update(receiptHash, "utf8");
        signatureValid = verifier.verify(receipt.signer_public_key, receipt.signature, "base64url");
        if (!signatureValid) {
          errors.push("Receipt signature verification failed \u2014 receipt may have been tampered with");
        }
      } catch (err) {
        errors.push(`Signature verification error: ${err instanceof Error ? err.message : String(err)}`);
        signatureValid = false;
      }
      if (opts.verifyKeyRegistry === true && receipt.key_id) {
        checkKeyRegistry(receipt, errors);
      }
      let mandateHashValid = null;
      if (opts.verifyMandateHash === true) {
        mandateHashValid = checkMandateHash(receipt, errors);
      }
      return buildResult(
        receipt.receipt_id,
        errors,
        signatureValid,
        timestampValid,
        mandateHashValid,
        null,
        // policy_hash_valid — not yet implemented (requires policy store lookup)
        now
      );
    }
    function checkKeyRegistry(receipt, errors) {
      try {
        const { getKeyById: getKeyById2 } = require_ReceiptKeyStore();
        const keyRecord = getKeyById2(receipt.key_id);
        if (!keyRecord) {
          errors.push(`Key registry cross-check failed: key_id '${receipt.key_id}' not found in store`);
          return;
        }
        if (keyRecord.public_key_pem !== receipt.signer_public_key) {
          errors.push(`Key substitution attack detected: embedded signer_public_key does not match registered public key for key_id '${receipt.key_id}'`);
        }
      } catch (err) {
        errors.push(`Key registry check failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    function checkMandateHash(receipt, errors) {
      try {
        const mandateCore = require_dist3();
        const mandate = mandateCore.getMandate(receipt.mandate_id);
        if (!mandate) {
          errors.push(`Mandate not found in store: ${receipt.mandate_id}`);
          return false;
        }
        const derivedHash = mandateCore.computeMandateHash(mandate);
        const claimsPart = receipt.pai_token.split(".")[1];
        if (!claimsPart) {
          errors.push("Could not extract claims from pai_token \u2014 malformed token");
          return false;
        }
        const claims = JSON.parse(Buffer.from(claimsPart, "base64url").toString("utf8"));
        if (!claims.mandate_hash) {
          errors.push("PAI token claims missing mandate_hash");
          return false;
        }
        if (claims.mandate_hash !== derivedHash) {
          errors.push(`Mandate hash mismatch: PAI claims ${claims.mandate_hash.slice(0, 12)}\u2026 but computed ${derivedHash.slice(0, 12)}\u2026`);
          return false;
        }
        return true;
      } catch (err) {
        errors.push(`Mandate hash check failed: ${err instanceof Error ? err.message : String(err)}`);
        return false;
      }
    }
    function buildResult(receiptId, errors, signatureValid, timestampValid, mandateHashValid, policyHashValid, now) {
      return {
        valid: errors.length === 0,
        receipt_id: receiptId,
        errors,
        verified_at: now.toISOString(),
        checks: {
          signature_valid: signatureValid,
          timestamp_valid: timestampValid,
          mandate_hash_valid: mandateHashValid,
          policy_hash_valid: policyHashValid
        }
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptStore.js
var require_ReceiptStore = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptStore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.storeReceipt = storeReceipt;
    exports2.getStoredReceipt = getStoredReceipt2;
    exports2.listStoredReceipts = listStoredReceipts;
    var storage_core_1 = require_dist2();
    var _repo = null;
    function getRepo() {
      if (!_repo) {
        _repo = new storage_core_1.JsonRepository("authorization-receipts");
      }
      return _repo;
    }
    function storeReceipt(receipt) {
      getRepo().save(receipt);
    }
    function getStoredReceipt2(mandateId) {
      return getRepo().findById(mandateId) ?? void 0;
    }
    function listStoredReceipts() {
      return getRepo().findAll();
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptKeyRotation.js
var require_ReceiptKeyRotation = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ReceiptKeyRotation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.rotateSigningKey = rotateSigningKey2;
    var node_crypto_1 = require("node:crypto");
    var audit_core_1 = require_dist5();
    var ReceiptKeyStore_js_1 = require_ReceiptKeyStore();
    function rotateSigningKey2() {
      const rotated_at = (/* @__PURE__ */ new Date()).toISOString();
      const currentKey = (0, ReceiptKeyStore_js_1.getActiveSigningKey)();
      const retired_key_id = currentKey.key_id;
      (0, ReceiptKeyStore_js_1.markKeyRotated)(retired_key_id, rotated_at);
      const { privateKey: privatePem, publicKey: publicPem } = (0, node_crypto_1.generateKeyPairSync)("ec", {
        namedCurve: "P-256",
        publicKeyEncoding: { type: "spki", format: "pem" },
        privateKeyEncoding: { type: "pkcs8", format: "pem" }
      });
      const newKeyRecord = {
        key_id: `skey-${(0, node_crypto_1.randomUUID)()}`,
        signer_id: "yebo-gateway-v1",
        public_key_pem: publicPem,
        private_key_pem: privatePem,
        created_at: rotated_at,
        status: "active"
      };
      (0, ReceiptKeyStore_js_1.persistKeyRecord)(newKeyRecord, true);
      (0, audit_core_1.record)({
        action: "key_rotated",
        actor_id: "yebo-gateway",
        decision: "info",
        detail: {
          retired_key_id,
          new_key_id: newKeyRecord.key_id,
          signer_id: newKeyRecord.signer_id,
          rotated_at
        }
      });
      return {
        new_key_id: newKeyRecord.key_id,
        retired_key_id,
        new_key_info: (0, ReceiptKeyStore_js_1.toPublicKeyInfo)(newKeyRecord)
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/DisputeLinker.js
var require_DisputeLinker = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/DisputeLinker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createDisputeLink = createDisputeLink2;
    exports2.getDisputeLink = getDisputeLink2;
    exports2.updateDisputeStatus = updateDisputeStatus;
    var storage_core_1 = require_dist2();
    var audit_core_1 = require_dist5();
    var ReceiptStore_js_1 = require_ReceiptStore();
    var _repo = null;
    function getRepo() {
      if (!_repo) {
        _repo = new storage_core_1.JsonRepository("authorization-disputes");
      }
      return _repo;
    }
    function createDisputeLink2(mandate_id, params) {
      const storedReceipt = (0, ReceiptStore_js_1.getStoredReceipt)(mandate_id);
      if (!storedReceipt) {
        throw new Error(`Cannot create dispute link: no stored receipt found for mandate_id '${mandate_id}'`);
      }
      const dispute_opened_at = (/* @__PURE__ */ new Date()).toISOString();
      const disputeRecord = {
        id: mandate_id,
        mandate_id,
        receipt_id: storedReceipt.receipt_id,
        dispute_id: params.dispute_id,
        dispute_reason: params.dispute_reason,
        dispute_opened_at,
        dispute_status: "open",
        ...params.reversal_reference !== void 0 ? { reversal_reference: params.reversal_reference } : {}
      };
      getRepo().save(disputeRecord);
      (0, ReceiptStore_js_1.storeReceipt)({
        ...storedReceipt,
        settlement_status: "disputed",
        related_dispute_id: params.dispute_id
      });
      (0, audit_core_1.record)({
        action: "dispute_link_created",
        actor_id: storedReceipt.authorized_by,
        mandate_id,
        decision: "info",
        detail: {
          dispute_id: params.dispute_id,
          dispute_reason: params.dispute_reason,
          receipt_id: storedReceipt.receipt_id,
          ...params.reversal_reference !== void 0 ? { reversal_reference: params.reversal_reference } : {}
        }
      });
      return disputeRecord;
    }
    function getDisputeLink2(mandate_id) {
      return getRepo().findById(mandate_id) ?? void 0;
    }
    function updateDisputeStatus(mandate_id, params) {
      const existing = getRepo().findById(mandate_id);
      if (!existing)
        return void 0;
      const updated = {
        ...existing,
        dispute_status: params.dispute_status,
        ...params.reversal_reference !== void 0 ? { reversal_reference: params.reversal_reference } : {}
      };
      getRepo().save(updated);
      if (params.dispute_status === "resolved" && params.reversal_reference) {
        const storedReceipt = (0, ReceiptStore_js_1.getStoredReceipt)(mandate_id);
        if (storedReceipt) {
          (0, ReceiptStore_js_1.storeReceipt)({ ...storedReceipt, settlement_status: "reversed" });
        }
      }
      return updated;
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ExportFormatter.js
var require_ExportFormatter = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/ExportFormatter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exportAsJSON = exportAsJSON2;
    exports2.exportAsNDJSON = exportAsNDJSON2;
    exports2.exportAsCSV = exportAsCSV2;
    var ReceiptStore_js_1 = require_ReceiptStore();
    var CSV_FIELDS = [
      "id",
      "receipt_id",
      "mandate_id",
      "authorized_by",
      "agent_id",
      "capability",
      "intent",
      "merchant",
      "asset",
      "amount",
      "integrity_score",
      "integrity_tier",
      "execution_status",
      "authorization_status",
      "settlement_status",
      "policy_hash",
      "session_id",
      "external_reference",
      "timestamp",
      "protocol_version",
      "key_id",
      "signer_id"
    ];
    function applyFilter(receipts, filter) {
      if (!filter)
        return receipts;
      return receipts.filter((r) => {
        if (filter.date_from && r.timestamp < filter.date_from)
          return false;
        if (filter.date_to && r.timestamp > filter.date_to)
          return false;
        if (filter.merchant && r.merchant !== filter.merchant)
          return false;
        if (filter.agent_id && r.agent_id !== filter.agent_id)
          return false;
        if (filter.policy_hash && r.policy_hash !== filter.policy_hash)
          return false;
        if (filter.integrity_tier && r.integrity_tier !== filter.integrity_tier)
          return false;
        return true;
      });
    }
    function escapeCsvField(value) {
      if (value === void 0 || value === null)
        return "";
      const str = String(value);
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    }
    function exportAsJSON2(filter) {
      const receipts = applyFilter((0, ReceiptStore_js_1.listStoredReceipts)(), filter);
      return JSON.stringify(receipts, null, 2);
    }
    function exportAsNDJSON2(filter) {
      const receipts = applyFilter((0, ReceiptStore_js_1.listStoredReceipts)(), filter);
      return receipts.map((r) => JSON.stringify(r)).join("\n");
    }
    function exportAsCSV2(filter) {
      const receipts = applyFilter((0, ReceiptStore_js_1.listStoredReceipts)(), filter);
      const header = CSV_FIELDS.join(",");
      const rows = receipts.map((r) => CSV_FIELDS.map((field) => escapeCsvField(r[field])).join(","));
      return [header, ...rows].join("\n");
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/PartnerReceiptView.js
var require_PartnerReceiptView = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/PartnerReceiptView.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toPartnerView = toPartnerView2;
    function toPartnerView2(receipt) {
      return {
        receipt_id: receipt.receipt_id,
        mandate_id: receipt.mandate_id,
        pai_token: receipt.pai_token,
        authorized_by: receipt.authorized_by,
        capability: receipt.capability,
        merchant: receipt.merchant,
        amount: receipt.amount,
        asset: receipt.asset,
        policy_hash: receipt.policy_hash,
        external_reference: receipt.external_reference,
        timestamp: receipt.timestamp,
        signature: receipt.signature,
        key_id: receipt.key_id,
        authorization_status: receipt.authorization_status,
        settlement_status: receipt.settlement_status
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/BundleBuilder.js
var require_BundleBuilder = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/BundleBuilder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.buildBundle = buildBundle2;
    var node_crypto_1 = require("node:crypto");
    var ReceiptStore_js_1 = require_ReceiptStore();
    var ReceiptKeyStore_js_1 = require_ReceiptKeyStore();
    var ReceiptSerializer_js_1 = require_ReceiptSerializer();
    var DisputeLinker_js_1 = require_DisputeLinker();
    var PartnerReceiptView_js_1 = require_PartnerReceiptView();
    function buildBundle2(mandateId, opts = {}) {
      const { includePartnerView = false, includeMandate = false, includeDispute = true } = opts;
      const receipt = (0, ReceiptStore_js_1.getStoredReceipt)(mandateId);
      if (!receipt) {
        throw new Error(`BundleBuilder: no stored receipt found for mandate_id '${mandateId}'`);
      }
      const keyRecord = (0, ReceiptKeyStore_js_1.getKeyById)(receipt.key_id);
      if (!keyRecord) {
        throw new Error(`BundleBuilder: signing key '${receipt.key_id}' not found in key registry for receipt '${receipt.receipt_id}'`);
      }
      const publicKey = (0, ReceiptKeyStore_js_1.toPublicKeyInfo)(keyRecord);
      const receiptHash = (0, ReceiptSerializer_js_1.hashReceipt)((0, ReceiptSerializer_js_1.extractSignedFields)(receipt));
      const verification = {
        bundle_created_at: (/* @__PURE__ */ new Date()).toISOString(),
        receipt_hash: receiptHash,
        key_status: publicKey.status,
        verification_algorithm: "ECDSA-P256-SHA256",
        protocol_version: receipt.protocol_version
      };
      let mandate_summary;
      if (includeMandate) {
        mandate_summary = fetchMandateSummary(mandateId);
      }
      let dispute;
      if (includeDispute) {
        const disputeRecord = (0, DisputeLinker_js_1.getDisputeLink)(mandateId);
        if (disputeRecord) {
          dispute = disputeRecord;
        }
      }
      const partner_view = includePartnerView ? (0, PartnerReceiptView_js_1.toPartnerView)(receipt) : void 0;
      return {
        bundle_id: `bundle-${(0, node_crypto_1.randomUUID)()}`,
        bundle_version: "1.0.0",
        receipt,
        public_key: publicKey,
        verification,
        ...mandate_summary !== void 0 ? { mandate_summary } : {},
        ...partner_view !== void 0 ? { partner_view } : {},
        ...dispute !== void 0 ? { dispute } : {}
      };
    }
    function fetchMandateSummary(mandateId) {
      try {
        const mandateCore = require_dist3();
        const mandate = mandateCore.getMandate(mandateId);
        if (!mandate)
          return void 0;
        return {
          mandate_id: mandate.mandate_id,
          capability: mandate.capability,
          counterparty_identity: mandate.counterparty_identity,
          amount: mandate.amount,
          currency: mandate.currency,
          policy_hash: mandate.policy_hash,
          issued_at: mandate.issued_at,
          expires_at: mandate.expires_at
        };
      } catch {
        return void 0;
      }
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/BundleVerifier.js
var require_BundleVerifier = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/BundleVerifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyBundle = verifyBundle2;
    var ReceiptSerializer_js_1 = require_ReceiptSerializer();
    var ReceiptVerifier_js_1 = require_ReceiptVerifier();
    var REQUIRED_BUNDLE_FIELDS = [
      "bundle_id",
      "bundle_version",
      "receipt",
      "public_key",
      "verification"
    ];
    var REQUIRED_VERIFICATION_FIELDS = [
      "bundle_created_at",
      "receipt_hash",
      "key_status",
      "verification_algorithm",
      "protocol_version"
    ];
    function verifyBundle2(bundle) {
      const errors = [];
      const now = /* @__PURE__ */ new Date();
      let bundleStructureValid = false;
      let receiptValid = false;
      let hashMatches = false;
      let keyMatches = false;
      let structureOk = true;
      for (const field of REQUIRED_BUNDLE_FIELDS) {
        if (bundle[field] === void 0 || bundle[field] === null) {
          errors.push(`Missing required bundle field: ${field}`);
          structureOk = false;
        }
      }
      if (structureOk && bundle.verification) {
        for (const field of REQUIRED_VERIFICATION_FIELDS) {
          const val = bundle.verification[field];
          if (val === void 0 || val === null || val === "") {
            errors.push(`Missing required verification metadata field: ${field}`);
            structureOk = false;
          }
        }
      }
      if (structureOk) {
        bundleStructureValid = true;
      } else {
        return buildResult(bundle.bundle_id ?? "UNKNOWN", bundle.receipt?.receipt_id ?? "UNKNOWN", errors, receiptValid, hashMatches, keyMatches, bundleStructureValid, now);
      }
      const receiptResult = (0, ReceiptVerifier_js_1.verifyReceipt)(bundle.receipt, { verifyKeyRegistry: true });
      receiptValid = receiptResult.valid;
      if (!receiptResult.valid) {
        for (const err of receiptResult.errors) {
          errors.push(`Receipt: ${err}`);
        }
      }
      try {
        const recomputedHash = (0, ReceiptSerializer_js_1.hashReceipt)((0, ReceiptSerializer_js_1.extractSignedFields)(bundle.receipt));
        if (recomputedHash === bundle.verification.receipt_hash) {
          hashMatches = true;
        } else {
          errors.push(`Receipt hash mismatch: bundle states ${bundle.verification.receipt_hash.slice(0, 16)}\u2026 but computed ${recomputedHash.slice(0, 16)}\u2026`);
        }
      } catch (err) {
        errors.push(`Hash recomputation failed: ${err instanceof Error ? err.message : String(err)}`);
      }
      if (bundle.public_key.public_key_pem !== bundle.receipt.signer_public_key) {
        errors.push(`Key mismatch: bundle.public_key.public_key_pem does not match receipt.signer_public_key`);
      } else if (bundle.public_key.key_id !== bundle.receipt.key_id) {
        errors.push(`Key ID mismatch: bundle.public_key.key_id '${bundle.public_key.key_id}' does not match receipt.key_id '${bundle.receipt.key_id}'`);
      } else {
        keyMatches = true;
      }
      return buildResult(bundle.bundle_id, bundle.receipt.receipt_id, errors, receiptValid, hashMatches, keyMatches, bundleStructureValid, now);
    }
    function buildResult(bundleId, receiptId, errors, receiptValid, hashMatches, keyMatches, bundleStructureValid, now) {
      return {
        valid: errors.length === 0,
        bundle_id: bundleId,
        receipt_id: receiptId,
        errors,
        verified_at: now.toISOString(),
        checks: {
          receipt_valid: receiptValid,
          hash_matches: hashMatches,
          key_matches: keyMatches,
          bundle_structure_valid: bundleStructureValid
        }
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/AuditorReceiptView.js
var require_AuditorReceiptView = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/AuditorReceiptView.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toAuditorView = toAuditorView2;
    function toAuditorView2(receipt) {
      return {
        receipt_id: receipt.receipt_id,
        mandate_id: receipt.mandate_id,
        capability: receipt.capability,
        merchant: receipt.merchant,
        asset: receipt.asset,
        amount: receipt.amount,
        policy_hash: receipt.policy_hash,
        authorization_status: receipt.authorization_status,
        execution_status: receipt.execution_status,
        settlement_status: receipt.settlement_status,
        timestamp: receipt.timestamp,
        signature: receipt.signature,
        key_id: receipt.key_id
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/index.js
var require_dist24 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/authorization-receipt/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toAuditorView = exports2.verifyBundle = exports2.buildBundle = exports2.extractSignedFields = exports2.hashReceipt = exports2.canonicalize = exports2.toPartnerView = exports2.exportAsCSV = exports2.exportAsNDJSON = exports2.exportAsJSON = exports2.updateDisputeStatus = exports2.getDisputeLink = exports2.createDisputeLink = exports2.rotateSigningKey = exports2.getActiveSigningKey = exports2.toPublicKeyInfo = exports2.getKeyById = exports2.getAllPublicKeyInfos = exports2.listStoredReceipts = exports2.getStoredReceipt = exports2.storeReceipt = exports2.verifyReceipt = exports2.getSignerPublicKey = exports2.signReceipt = void 0;
    var ReceiptSigner_js_1 = require_ReceiptSigner();
    Object.defineProperty(exports2, "signReceipt", { enumerable: true, get: function() {
      return ReceiptSigner_js_1.signReceipt;
    } });
    Object.defineProperty(exports2, "getSignerPublicKey", { enumerable: true, get: function() {
      return ReceiptSigner_js_1.getSignerPublicKey;
    } });
    var ReceiptVerifier_js_1 = require_ReceiptVerifier();
    Object.defineProperty(exports2, "verifyReceipt", { enumerable: true, get: function() {
      return ReceiptVerifier_js_1.verifyReceipt;
    } });
    var ReceiptStore_js_1 = require_ReceiptStore();
    Object.defineProperty(exports2, "storeReceipt", { enumerable: true, get: function() {
      return ReceiptStore_js_1.storeReceipt;
    } });
    Object.defineProperty(exports2, "getStoredReceipt", { enumerable: true, get: function() {
      return ReceiptStore_js_1.getStoredReceipt;
    } });
    Object.defineProperty(exports2, "listStoredReceipts", { enumerable: true, get: function() {
      return ReceiptStore_js_1.listStoredReceipts;
    } });
    var ReceiptKeyStore_js_1 = require_ReceiptKeyStore();
    Object.defineProperty(exports2, "getAllPublicKeyInfos", { enumerable: true, get: function() {
      return ReceiptKeyStore_js_1.getAllPublicKeyInfos;
    } });
    Object.defineProperty(exports2, "getKeyById", { enumerable: true, get: function() {
      return ReceiptKeyStore_js_1.getKeyById;
    } });
    Object.defineProperty(exports2, "toPublicKeyInfo", { enumerable: true, get: function() {
      return ReceiptKeyStore_js_1.toPublicKeyInfo;
    } });
    var ReceiptKeyStore_js_2 = require_ReceiptKeyStore();
    Object.defineProperty(exports2, "getActiveSigningKey", { enumerable: true, get: function() {
      return ReceiptKeyStore_js_2.getActiveSigningKey;
    } });
    var ReceiptKeyRotation_js_1 = require_ReceiptKeyRotation();
    Object.defineProperty(exports2, "rotateSigningKey", { enumerable: true, get: function() {
      return ReceiptKeyRotation_js_1.rotateSigningKey;
    } });
    var DisputeLinker_js_1 = require_DisputeLinker();
    Object.defineProperty(exports2, "createDisputeLink", { enumerable: true, get: function() {
      return DisputeLinker_js_1.createDisputeLink;
    } });
    Object.defineProperty(exports2, "getDisputeLink", { enumerable: true, get: function() {
      return DisputeLinker_js_1.getDisputeLink;
    } });
    Object.defineProperty(exports2, "updateDisputeStatus", { enumerable: true, get: function() {
      return DisputeLinker_js_1.updateDisputeStatus;
    } });
    var ExportFormatter_js_1 = require_ExportFormatter();
    Object.defineProperty(exports2, "exportAsJSON", { enumerable: true, get: function() {
      return ExportFormatter_js_1.exportAsJSON;
    } });
    Object.defineProperty(exports2, "exportAsNDJSON", { enumerable: true, get: function() {
      return ExportFormatter_js_1.exportAsNDJSON;
    } });
    Object.defineProperty(exports2, "exportAsCSV", { enumerable: true, get: function() {
      return ExportFormatter_js_1.exportAsCSV;
    } });
    var PartnerReceiptView_js_1 = require_PartnerReceiptView();
    Object.defineProperty(exports2, "toPartnerView", { enumerable: true, get: function() {
      return PartnerReceiptView_js_1.toPartnerView;
    } });
    var ReceiptSerializer_js_1 = require_ReceiptSerializer();
    Object.defineProperty(exports2, "canonicalize", { enumerable: true, get: function() {
      return ReceiptSerializer_js_1.canonicalize;
    } });
    Object.defineProperty(exports2, "hashReceipt", { enumerable: true, get: function() {
      return ReceiptSerializer_js_1.hashReceipt;
    } });
    Object.defineProperty(exports2, "extractSignedFields", { enumerable: true, get: function() {
      return ReceiptSerializer_js_1.extractSignedFields;
    } });
    var BundleBuilder_js_1 = require_BundleBuilder();
    Object.defineProperty(exports2, "buildBundle", { enumerable: true, get: function() {
      return BundleBuilder_js_1.buildBundle;
    } });
    var BundleVerifier_js_1 = require_BundleVerifier();
    Object.defineProperty(exports2, "verifyBundle", { enumerable: true, get: function() {
      return BundleVerifier_js_1.verifyBundle;
    } });
    var AuditorReceiptView_js_1 = require_AuditorReceiptView();
    Object.defineProperty(exports2, "toAuditorView", { enumerable: true, get: function() {
      return AuditorReceiptView_js_1.toAuditorView;
    } });
  }
});

// ../../../../Desktop/yebo-monorepo-extract/workers/receipt-builder/dist/index.js
var require_dist25 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/workers/receipt-builder/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getStoredReceipt = void 0;
    exports2.initReceiptBuilder = initReceiptBuilder2;
    exports2.getBuiltReceipt = getBuiltReceipt2;
    var event_bus_1 = require_dist19();
    var storage_core_1 = require_dist2();
    var authorization_receipt_1 = require_dist24();
    var mandate_core_1 = require_dist3();
    var integrity_score_1 = require_dist9();
    var audit_core_1 = require_dist5();
    var authDataCache = /* @__PURE__ */ new Map();
    var _receiptRepo = null;
    function getReceiptRepo() {
      if (!_receiptRepo) {
        _receiptRepo = new storage_core_1.JsonRepository("receipts");
      }
      return _receiptRepo;
    }
    function initReceiptBuilder2(bus2) {
      return (0, event_bus_1.subscribeMany)(bus2, {
        AuthorizationApproved: (event) => {
          authDataCache.set(event.mandate_id, {
            paiToken: event.pai_token,
            authTimestamp: event.timestamp,
            identityId: event.identity_id,
            sessionId: event.session_id,
            authorizationMode: event.authorization_mode,
            policyHash: event.policy_hash
          });
        },
        ExecutionCompleted: (event) => {
          try {
            const cached = authDataCache.get(event.mandate_id);
            const paiToken = cached?.paiToken ?? "PAI-UNKNOWN";
            const authTimestamp = cached?.authTimestamp ?? event.executed_at;
            const identityId = cached?.identityId ?? event.identity_id;
            const sessionId = cached?.sessionId;
            const authorizationMode = cached?.authorizationMode;
            const policyHash = cached?.policyHash ?? "";
            const receipt = {
              id: event.mandate_id,
              mandate_id: event.mandate_id,
              receipt_id: event.receipt_id,
              pai_token: paiToken,
              adapter: event.adapter,
              execution_status: "executed",
              ...event.external_reference !== void 0 ? { external_reference: event.external_reference } : {},
              ...event.amount_processed !== void 0 ? { amount_processed: event.amount_processed } : {},
              ...event.currency !== void 0 ? { currency: event.currency } : {},
              identity_id: identityId,
              authorization_timestamp: authTimestamp,
              execution_timestamp: event.executed_at,
              ...sessionId !== void 0 ? { session_id: sessionId } : {},
              ...authorizationMode !== void 0 ? { authorization_mode: authorizationMode } : {}
            };
            getReceiptRepo().save(receipt);
            generateCARForExecution({
              mandateId: event.mandate_id,
              paiToken,
              identityId,
              sessionId,
              policyHash,
              executionStatus: "executed",
              externalReference: event.external_reference,
              amountProcessed: event.amount_processed,
              currency: event.currency
            });
            authDataCache.delete(event.mandate_id);
            bus2.publish({
              type: "ReceiptGenerated",
              mandate_id: event.mandate_id,
              receipt_id: event.receipt_id,
              identity_id: identityId,
              ...event.external_reference !== void 0 ? { external_reference: event.external_reference } : {}
            });
          } catch (err) {
            console.error("[receipt-builder] Failed to build receipt for", event.mandate_id, err);
          }
        },
        ExecutionFailed: (event) => {
          try {
            const cached = authDataCache.get(event.mandate_id);
            const paiToken = cached?.paiToken ?? "PAI-UNKNOWN";
            const authTimestamp = cached?.authTimestamp ?? event.failed_at;
            const identityId = cached?.identityId ?? event.identity_id;
            const sessionId = cached?.sessionId;
            const authorizationMode = cached?.authorizationMode;
            const receipt = {
              id: event.mandate_id,
              mandate_id: event.mandate_id,
              receipt_id: `failed-${event.mandate_id}`,
              pai_token: paiToken,
              adapter: event.adapter,
              execution_status: "failed",
              error: event.error,
              identity_id: identityId,
              authorization_timestamp: authTimestamp,
              execution_timestamp: event.failed_at,
              ...sessionId !== void 0 ? { session_id: sessionId } : {},
              ...authorizationMode !== void 0 ? { authorization_mode: authorizationMode } : {}
            };
            getReceiptRepo().save(receipt);
            authDataCache.delete(event.mandate_id);
          } catch (err) {
            console.error("[receipt-builder] Failed to persist failed receipt for", event.mandate_id, err);
          }
        }
      });
    }
    function getBuiltReceipt2(mandateId) {
      return getReceiptRepo().findById(mandateId) ?? void 0;
    }
    var authorization_receipt_2 = require_dist24();
    Object.defineProperty(exports2, "getStoredReceipt", { enumerable: true, get: function() {
      return authorization_receipt_2.getStoredReceipt;
    } });
    function generateCARForExecution(params) {
      try {
        const mandate = (0, mandate_core_1.getMandate)(params.mandateId);
        const integrityData = (0, integrity_score_1.calculateIntegrityScore)({
          identity_id: params.identityId,
          ingest_from_audit: false
        });
        const rawAmount = params.amountProcessed !== void 0 ? parseFloat(params.amountProcessed) : mandate?.amount !== void 0 ? parseFloat(mandate.amount) : 0;
        const amount = isNaN(rawAmount) ? 0 : rawAmount;
        const car = (0, authorization_receipt_1.signReceipt)({
          mandate_id: params.mandateId,
          pai_token: params.paiToken,
          authorized_by: params.identityId,
          agent_id: mandate?.metadata?.agent_id ?? params.identityId,
          capability: mandate?.capability ?? "unknown",
          intent: mandate?.metadata?.description ?? "",
          merchant: mandate?.counterparty_identity ?? "",
          asset: params.currency ?? mandate?.currency ?? "USD",
          amount,
          policy_hash: params.policyHash !== "" ? params.policyHash : mandate?.policy_hash ?? "",
          session_id: params.sessionId,
          execution_status: params.executionStatus,
          external_reference: params.externalReference,
          integrity_score: integrityData.score,
          integrity_tier: integrityData.tier,
          authorization_status: "authorized",
          settlement_status: "unknown"
        });
        (0, authorization_receipt_1.storeReceipt)({ ...car, id: params.mandateId });
        (0, audit_core_1.record)({
          action: "authorization_receipt_issued",
          actor_id: params.identityId,
          ...params.mandateId !== "" ? { mandate_id: params.mandateId } : {},
          decision: "info",
          detail: {
            receipt_id: car.receipt_id,
            policy_hash: car.policy_hash,
            ...params.sessionId !== void 0 ? { session_id: params.sessionId } : {},
            signature_prefix: car.signature.slice(0, 12)
          }
        });
        return car;
      } catch (err) {
        console.error("[receipt-builder] CAR generation failed for", params.mandateId, err);
        return void 0;
      }
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/workers/notification-service/dist/index.js
var require_dist26 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/workers/notification-service/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.initNotificationService = initNotificationService2;
    exports2.notificationServiceStats = notificationServiceStats;
    var event_bus_1 = require_dist19();
    var _notificationsTotal = 0;
    var _webhookSuccessTotal = 0;
    var _webhookFailTotal = 0;
    function initNotificationService2(bus2, logger) {
      return (0, event_bus_1.subscribe)(bus2, "ReceiptGenerated", async (event) => {
        _notificationsTotal += 1;
        logger?.info({ mandate_id: event.mandate_id, receipt_id: event.receipt_id }, "[notification-service] receipt ready");
      });
    }
    function notificationServiceStats() {
      return {
        notifications_total: _notificationsTotal,
        webhook_success_total: _webhookSuccessTotal,
        webhook_fail_total: _webhookFailTotal
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/ChallengeStore.js
var require_ChallengeStore = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/ChallengeStore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.saveChallengeContext = saveChallengeContext2;
    exports2.getChallengeContext = getChallengeContext2;
    exports2.markChallengeApproved = markChallengeApproved2;
    exports2.markChallengeExpired = markChallengeExpired2;
    var storage_core_1 = require_dist2();
    var _store = null;
    function getStore() {
      if (!_store) {
        _store = new storage_core_1.KVStore("challenge-contexts");
      }
      return _store;
    }
    function saveChallengeContext2(context) {
      getStore().set(context.challenge_id, context);
    }
    function getChallengeContext2(challengeId) {
      return getStore().get(challengeId) ?? void 0;
    }
    function markChallengeApproved2(challengeId) {
      const existing = getStore().get(challengeId);
      if (!existing)
        return;
      getStore().set(challengeId, { ...existing, status: "approved" });
    }
    function markChallengeExpired2(challengeId) {
      const existing = getStore().get(challengeId);
      if (!existing)
        return;
      getStore().set(challengeId, { ...existing, status: "expired" });
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/ContinuationSigner.js
var require_ContinuationSigner = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/ContinuationSigner.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.signContinuationToken = signContinuationToken2;
    var node_crypto_1 = require("node:crypto");
    var authorization_receipt_1 = require_dist24();
    var TOKEN_TTL_MS = 15 * 60 * 1e3;
    function buildSignedFields(token_id, context, issued_at, expires_at, key_id) {
      return {
        token_id,
        challenge_id: context.challenge_id,
        mandate_id: context.mandate_id,
        authorized_by: context.authorized_by,
        agent_id: context.agent_id,
        capability: context.capability,
        merchant: context.merchant,
        asset: context.asset,
        amount: context.amount,
        policy_hash: context.policy_hash,
        ...context.session_id !== void 0 ? { session_id: context.session_id } : {},
        issued_at,
        expires_at,
        key_id
      };
    }
    function canonicalize(fields) {
      const sortedKeys = Object.keys(fields).sort();
      const sorted = {};
      for (const k of sortedKeys) {
        sorted[k] = fields[k];
      }
      return JSON.stringify(sorted);
    }
    function hashFields(fields) {
      return (0, node_crypto_1.createHash)("sha256").update(canonicalize(fields), "utf8").digest("hex");
    }
    function signContinuationToken2(context) {
      const token_id = `ct-${(0, node_crypto_1.randomUUID)()}`;
      const now = /* @__PURE__ */ new Date();
      const issued_at = now.toISOString();
      const expires_at = new Date(now.getTime() + TOKEN_TTL_MS).toISOString();
      const signingKey = (0, authorization_receipt_1.getActiveSigningKey)();
      const signedFields = buildSignedFields(token_id, context, issued_at, expires_at, signingKey.key_id);
      const hash = hashFields(signedFields);
      const signer = (0, node_crypto_1.createSign)("sha256");
      signer.update(hash, "utf8");
      const signature = signer.sign(signingKey.private_key_pem, "base64url");
      return Object.freeze({
        token_id,
        challenge_id: context.challenge_id,
        mandate_id: context.mandate_id,
        authorized_by: context.authorized_by,
        agent_id: context.agent_id,
        capability: context.capability,
        merchant: context.merchant,
        asset: context.asset,
        amount: context.amount,
        policy_hash: context.policy_hash,
        session_id: context.session_id,
        issued_at,
        expires_at,
        key_id: signingKey.key_id,
        signature
      });
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/ContinuationVerifier.js
var require_ContinuationVerifier = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/ContinuationVerifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyContinuationToken = verifyContinuationToken2;
    var node_crypto_1 = require("node:crypto");
    var authorization_receipt_1 = require_dist24();
    var REQUIRED_FIELDS = [
      "token_id",
      "challenge_id",
      "mandate_id",
      "authorized_by",
      "agent_id",
      "capability",
      "merchant",
      "asset",
      "amount",
      "policy_hash",
      "issued_at",
      "expires_at",
      "key_id",
      "signature"
    ];
    function canonicalizeToken(token) {
      const fields = {
        token_id: token.token_id,
        challenge_id: token.challenge_id,
        mandate_id: token.mandate_id,
        authorized_by: token.authorized_by,
        agent_id: token.agent_id,
        capability: token.capability,
        merchant: token.merchant,
        asset: token.asset,
        amount: token.amount,
        policy_hash: token.policy_hash,
        ...token.session_id !== void 0 ? { session_id: token.session_id } : {},
        issued_at: token.issued_at,
        expires_at: token.expires_at,
        key_id: token.key_id
      };
      const sortedKeys = Object.keys(fields).sort();
      const sorted = {};
      for (const k of sortedKeys) {
        sorted[k] = fields[k];
      }
      return JSON.stringify(sorted);
    }
    function hashToken(token) {
      return (0, node_crypto_1.createHash)("sha256").update(canonicalizeToken(token), "utf8").digest("hex");
    }
    function verifyContinuationToken2(token) {
      const errors = [];
      const now = /* @__PURE__ */ new Date();
      let structureValid = false;
      let notExpired = false;
      let signatureValid = false;
      let structureOk = true;
      for (const field of REQUIRED_FIELDS) {
        const val = token[field];
        if (val === void 0 || val === null || val === "") {
          errors.push(`Missing required field: ${field}`);
          structureOk = false;
        }
      }
      if (typeof token.amount !== "number") {
        errors.push("Field amount must be a number");
        structureOk = false;
      }
      if (structureOk) {
        structureValid = true;
      } else {
        return buildResult(token.token_id ?? "UNKNOWN", errors, structureValid, notExpired, signatureValid, now);
      }
      try {
        const expiresAt = new Date(token.expires_at);
        if (now > expiresAt) {
          errors.push(`Token expired at ${token.expires_at}`);
        } else {
          notExpired = true;
        }
      } catch {
        errors.push(`Invalid expires_at timestamp: ${token.expires_at}`);
      }
      try {
        const keyRecord = (0, authorization_receipt_1.getKeyById)(token.key_id);
        if (!keyRecord) {
          errors.push(`Unknown key_id: ${token.key_id} \u2014 key not found in registry`);
        } else {
          const hash = hashToken(token);
          const b64 = token.signature.replace(/-/g, "+").replace(/_/g, "/");
          const sigBuffer = Buffer.from(b64, "base64");
          const verify = (0, node_crypto_1.createVerify)("sha256");
          verify.update(hash, "utf8");
          const ok = verify.verify(keyRecord.public_key_pem, sigBuffer);
          if (ok) {
            signatureValid = true;
          } else {
            errors.push("Signature verification failed \u2014 token may have been tampered with");
          }
        }
      } catch (err) {
        errors.push(`Signature check error: ${err instanceof Error ? err.message : String(err)}`);
      }
      return buildResult(token.token_id, errors, structureValid, notExpired, signatureValid, now);
    }
    function buildResult(tokenId, errors, structureValid, notExpired, signatureValid, now) {
      return {
        valid: errors.length === 0,
        token_id: tokenId,
        errors,
        verified_at: now.toISOString(),
        checks: {
          structure_valid: structureValid,
          signature_valid: signatureValid,
          not_expired: notExpired
        }
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/index.js
var require_dist27 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/continuation-token/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyContinuationToken = exports2.signContinuationToken = exports2.markChallengeExpired = exports2.markChallengeApproved = exports2.getChallengeContext = exports2.saveChallengeContext = void 0;
    var ChallengeStore_js_1 = require_ChallengeStore();
    Object.defineProperty(exports2, "saveChallengeContext", { enumerable: true, get: function() {
      return ChallengeStore_js_1.saveChallengeContext;
    } });
    Object.defineProperty(exports2, "getChallengeContext", { enumerable: true, get: function() {
      return ChallengeStore_js_1.getChallengeContext;
    } });
    Object.defineProperty(exports2, "markChallengeApproved", { enumerable: true, get: function() {
      return ChallengeStore_js_1.markChallengeApproved;
    } });
    Object.defineProperty(exports2, "markChallengeExpired", { enumerable: true, get: function() {
      return ChallengeStore_js_1.markChallengeExpired;
    } });
    var ContinuationSigner_js_1 = require_ContinuationSigner();
    Object.defineProperty(exports2, "signContinuationToken", { enumerable: true, get: function() {
      return ContinuationSigner_js_1.signContinuationToken;
    } });
    var ContinuationVerifier_js_1 = require_ContinuationVerifier();
    Object.defineProperty(exports2, "verifyContinuationToken", { enumerable: true, get: function() {
      return ContinuationVerifier_js_1.verifyContinuationToken;
    } });
  }
});

// ../../../../Desktop/yebo-monorepo-extract/packages/verification-plane/dist/index.js
var require_dist28 = __commonJS({
  "../../../../Desktop/yebo-monorepo-extract/packages/verification-plane/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyPreflight = verifyPreflight2;
    exports2.verifySessionToken = verifySessionToken2;
    exports2.verifyNonce = verifyNonce;
    exports2.verifyPolicyHash = verifyPolicyHash;
    exports2.verifyIntegrityEligibility = verifyIntegrityEligibility;
    exports2.runVerificationSuite = runVerificationSuite;
    var capability_kernel_1 = require_dist10();
    var authorization_sessions_1 = require_dist6();
    var mandate_core_1 = require_dist3();
    var policy_core_1 = require_dist17();
    var integrity_score_1 = require_dist9();
    function verifyPreflight2(request) {
      return (0, capability_kernel_1.preflight)(request);
    }
    function verifySessionToken2(sessionId) {
      return (0, authorization_sessions_1.verifySession)(sessionId);
    }
    function verifyNonce(nonce) {
      return !(0, mandate_core_1.isNonceUsed)(nonce);
    }
    function verifyPolicyHash(claimedHash, policy) {
      const expectedHash = (0, policy_core_1.computePolicyHash)(policy);
      return claimedHash === expectedHash;
    }
    function verifyIntegrityEligibility(identityId, threshold) {
      const score = (0, integrity_score_1.calculateIntegrityScore)({ identity_id: identityId, ingest_from_audit: false });
      return score.score >= threshold;
    }
    function runVerificationSuite(params) {
      let sessionValid = false;
      let sessionResult = null;
      if (params.sessionId !== void 0) {
        sessionResult = verifySessionToken2(params.sessionId);
        sessionValid = sessionResult.valid;
      }
      const preflightDecision = verifyPreflight2({
        agentId: params.agentId,
        capability: params.capability,
        ...params.sessionId !== void 0 ? { sessionId: params.sessionId } : {},
        ...params.amount !== void 0 ? { amount: params.amount } : {},
        ...params.merchant !== void 0 ? { merchant: params.merchant } : {}
      });
      const nonceValid = params.nonce !== void 0 ? verifyNonce(params.nonce) : null;
      const policyHashValid = params.claimedPolicyHash !== void 0 && params.activePolicy !== void 0 ? verifyPolicyHash(params.claimedPolicyHash, params.activePolicy) : null;
      return {
        sessionValid,
        sessionResult,
        preflightDecision,
        nonceValid,
        policyHashValid
      };
    }
  }
});

// ../../../../Desktop/yebo-monorepo-extract/apps/yebo-gateway/src/server.ts
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_node_crypto3 = require("node:crypto");
var import_express2 = __toESM(require("express"));
var import_cors = __toESM(require_lib());

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/helmet@8.1.0/node_modules/helmet/index.mjs
var dangerouslyDisableDefaultSrc = /* @__PURE__ */ Symbol("dangerouslyDisableDefaultSrc");
var SHOULD_BE_QUOTED = /* @__PURE__ */ new Set(["none", "self", "strict-dynamic", "report-sample", "inline-speculation-rules", "unsafe-inline", "unsafe-eval", "unsafe-hashes", "wasm-unsafe-eval"]);
var getDefaultDirectives = () => ({
  "default-src": ["'self'"],
  "base-uri": ["'self'"],
  "font-src": ["'self'", "https:", "data:"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'self'"],
  "img-src": ["'self'", "data:"],
  "object-src": ["'none'"],
  "script-src": ["'self'"],
  "script-src-attr": ["'none'"],
  "style-src": ["'self'", "https:", "'unsafe-inline'"],
  "upgrade-insecure-requests": []
});
var dashify = (str) => str.replace(/[A-Z]/g, (capitalLetter) => "-" + capitalLetter.toLowerCase());
var assertDirectiveValueIsValid = (directiveName, directiveValue) => {
  if (/;|,/.test(directiveValue)) {
    throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`);
  }
};
var assertDirectiveValueEntryIsValid = (directiveName, directiveValueEntry) => {
  if (SHOULD_BE_QUOTED.has(directiveValueEntry) || directiveValueEntry.startsWith("nonce-") || directiveValueEntry.startsWith("sha256-") || directiveValueEntry.startsWith("sha384-") || directiveValueEntry.startsWith("sha512-")) {
    throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}. ${JSON.stringify(directiveValueEntry)} should be quoted`);
  }
};
function normalizeDirectives(options) {
  const defaultDirectives = getDefaultDirectives();
  const { useDefaults = true, directives: rawDirectives = defaultDirectives } = options;
  const result = /* @__PURE__ */ new Map();
  const directiveNamesSeen = /* @__PURE__ */ new Set();
  const directivesExplicitlyDisabled = /* @__PURE__ */ new Set();
  for (const rawDirectiveName in rawDirectives) {
    if (!Object.hasOwn(rawDirectives, rawDirectiveName)) {
      continue;
    }
    if (rawDirectiveName.length === 0 || /[^a-zA-Z0-9-]/.test(rawDirectiveName)) {
      throw new Error(`Content-Security-Policy received an invalid directive name ${JSON.stringify(rawDirectiveName)}`);
    }
    const directiveName = dashify(rawDirectiveName);
    if (directiveNamesSeen.has(directiveName)) {
      throw new Error(`Content-Security-Policy received a duplicate directive ${JSON.stringify(directiveName)}`);
    }
    directiveNamesSeen.add(directiveName);
    const rawDirectiveValue = rawDirectives[rawDirectiveName];
    let directiveValue;
    if (rawDirectiveValue === null) {
      if (directiveName === "default-src") {
        throw new Error("Content-Security-Policy needs a default-src but it was set to `null`. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.");
      }
      directivesExplicitlyDisabled.add(directiveName);
      continue;
    } else if (typeof rawDirectiveValue === "string") {
      directiveValue = [rawDirectiveValue];
    } else if (!rawDirectiveValue) {
      throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`);
    } else if (rawDirectiveValue === dangerouslyDisableDefaultSrc) {
      if (directiveName === "default-src") {
        directivesExplicitlyDisabled.add("default-src");
        continue;
      } else {
        throw new Error(`Content-Security-Policy: tried to disable ${JSON.stringify(directiveName)} as if it were default-src; simply omit the key`);
      }
    } else {
      directiveValue = rawDirectiveValue;
    }
    for (const element of directiveValue) {
      if (typeof element !== "string") continue;
      assertDirectiveValueIsValid(directiveName, element);
      assertDirectiveValueEntryIsValid(directiveName, element);
    }
    result.set(directiveName, directiveValue);
  }
  if (useDefaults) {
    Object.entries(defaultDirectives).forEach(([defaultDirectiveName, defaultDirectiveValue]) => {
      if (!result.has(defaultDirectiveName) && !directivesExplicitlyDisabled.has(defaultDirectiveName)) {
        result.set(defaultDirectiveName, defaultDirectiveValue);
      }
    });
  }
  if (!result.size) {
    throw new Error("Content-Security-Policy has no directives. Either set some or disable the header");
  }
  if (!result.has("default-src") && !directivesExplicitlyDisabled.has("default-src")) {
    throw new Error("Content-Security-Policy needs a default-src but none was provided. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.");
  }
  return result;
}
function getHeaderValue(req, res, normalizedDirectives) {
  const result = [];
  for (const [directiveName, rawDirectiveValue] of normalizedDirectives) {
    let directiveValue = "";
    for (const element of rawDirectiveValue) {
      if (typeof element === "function") {
        const newElement = element(req, res);
        assertDirectiveValueEntryIsValid(directiveName, newElement);
        directiveValue += " " + newElement;
      } else {
        directiveValue += " " + element;
      }
    }
    if (directiveValue) {
      assertDirectiveValueIsValid(directiveName, directiveValue);
      result.push(`${directiveName}${directiveValue}`);
    } else {
      result.push(directiveName);
    }
  }
  return result.join(";");
}
var contentSecurityPolicy = function contentSecurityPolicy2(options = {}) {
  const headerName = options.reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy";
  const normalizedDirectives = normalizeDirectives(options);
  return function contentSecurityPolicyMiddleware(req, res, next) {
    const result = getHeaderValue(req, res, normalizedDirectives);
    if (result instanceof Error) {
      next(result);
    } else {
      res.setHeader(headerName, result);
      next();
    }
  };
};
contentSecurityPolicy.getDefaultDirectives = getDefaultDirectives;
contentSecurityPolicy.dangerouslyDisableDefaultSrc = dangerouslyDisableDefaultSrc;
var ALLOWED_POLICIES$2 = /* @__PURE__ */ new Set(["require-corp", "credentialless", "unsafe-none"]);
function getHeaderValueFromOptions$6({ policy = "require-corp" }) {
  if (ALLOWED_POLICIES$2.has(policy)) {
    return policy;
  } else {
    throw new Error(`Cross-Origin-Embedder-Policy does not support the ${JSON.stringify(policy)} policy`);
  }
}
function crossOriginEmbedderPolicy(options = {}) {
  const headerValue = getHeaderValueFromOptions$6(options);
  return function crossOriginEmbedderPolicyMiddleware(_req, res, next) {
    res.setHeader("Cross-Origin-Embedder-Policy", headerValue);
    next();
  };
}
var ALLOWED_POLICIES$1 = /* @__PURE__ */ new Set(["same-origin", "same-origin-allow-popups", "unsafe-none"]);
function getHeaderValueFromOptions$5({ policy = "same-origin" }) {
  if (ALLOWED_POLICIES$1.has(policy)) {
    return policy;
  } else {
    throw new Error(`Cross-Origin-Opener-Policy does not support the ${JSON.stringify(policy)} policy`);
  }
}
function crossOriginOpenerPolicy(options = {}) {
  const headerValue = getHeaderValueFromOptions$5(options);
  return function crossOriginOpenerPolicyMiddleware(_req, res, next) {
    res.setHeader("Cross-Origin-Opener-Policy", headerValue);
    next();
  };
}
var ALLOWED_POLICIES = /* @__PURE__ */ new Set(["same-origin", "same-site", "cross-origin"]);
function getHeaderValueFromOptions$4({ policy = "same-origin" }) {
  if (ALLOWED_POLICIES.has(policy)) {
    return policy;
  } else {
    throw new Error(`Cross-Origin-Resource-Policy does not support the ${JSON.stringify(policy)} policy`);
  }
}
function crossOriginResourcePolicy(options = {}) {
  const headerValue = getHeaderValueFromOptions$4(options);
  return function crossOriginResourcePolicyMiddleware(_req, res, next) {
    res.setHeader("Cross-Origin-Resource-Policy", headerValue);
    next();
  };
}
function originAgentCluster() {
  return function originAgentClusterMiddleware(_req, res, next) {
    res.setHeader("Origin-Agent-Cluster", "?1");
    next();
  };
}
var ALLOWED_TOKENS = /* @__PURE__ */ new Set(["no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url", ""]);
function getHeaderValueFromOptions$3({ policy = ["no-referrer"] }) {
  const tokens = typeof policy === "string" ? [policy] : policy;
  if (tokens.length === 0) {
    throw new Error("Referrer-Policy received no policy tokens");
  }
  const tokensSeen = /* @__PURE__ */ new Set();
  tokens.forEach((token) => {
    if (!ALLOWED_TOKENS.has(token)) {
      throw new Error(`Referrer-Policy received an unexpected policy token ${JSON.stringify(token)}`);
    } else if (tokensSeen.has(token)) {
      throw new Error(`Referrer-Policy received a duplicate policy token ${JSON.stringify(token)}`);
    }
    tokensSeen.add(token);
  });
  return tokens.join(",");
}
function referrerPolicy(options = {}) {
  const headerValue = getHeaderValueFromOptions$3(options);
  return function referrerPolicyMiddleware(_req, res, next) {
    res.setHeader("Referrer-Policy", headerValue);
    next();
  };
}
var DEFAULT_MAX_AGE = 365 * 24 * 60 * 60;
function parseMaxAge(value = DEFAULT_MAX_AGE) {
  if (value >= 0 && Number.isFinite(value)) {
    return Math.floor(value);
  } else {
    throw new Error(`Strict-Transport-Security: ${JSON.stringify(value)} is not a valid value for maxAge. Please choose a positive integer.`);
  }
}
function getHeaderValueFromOptions$2(options) {
  if ("maxage" in options) {
    throw new Error("Strict-Transport-Security received an unsupported property, `maxage`. Did you mean to pass `maxAge`?");
  }
  if ("includeSubdomains" in options) {
    throw new Error('Strict-Transport-Security middleware should use `includeSubDomains` instead of `includeSubdomains`. (The correct one has an uppercase "D".)');
  }
  const directives = [`max-age=${parseMaxAge(options.maxAge)}`];
  if (options.includeSubDomains === void 0 || options.includeSubDomains) {
    directives.push("includeSubDomains");
  }
  if (options.preload) {
    directives.push("preload");
  }
  return directives.join("; ");
}
function strictTransportSecurity(options = {}) {
  const headerValue = getHeaderValueFromOptions$2(options);
  return function strictTransportSecurityMiddleware(_req, res, next) {
    res.setHeader("Strict-Transport-Security", headerValue);
    next();
  };
}
function xContentTypeOptions() {
  return function xContentTypeOptionsMiddleware(_req, res, next) {
    res.setHeader("X-Content-Type-Options", "nosniff");
    next();
  };
}
function xDnsPrefetchControl(options = {}) {
  const headerValue = options.allow ? "on" : "off";
  return function xDnsPrefetchControlMiddleware(_req, res, next) {
    res.setHeader("X-DNS-Prefetch-Control", headerValue);
    next();
  };
}
function xDownloadOptions() {
  return function xDownloadOptionsMiddleware(_req, res, next) {
    res.setHeader("X-Download-Options", "noopen");
    next();
  };
}
function getHeaderValueFromOptions$1({ action = "sameorigin" }) {
  const normalizedAction = typeof action === "string" ? action.toUpperCase() : action;
  switch (normalizedAction) {
    case "SAME-ORIGIN":
      return "SAMEORIGIN";
    case "DENY":
    case "SAMEORIGIN":
      return normalizedAction;
    default:
      throw new Error(`X-Frame-Options received an invalid action ${JSON.stringify(action)}`);
  }
}
function xFrameOptions(options = {}) {
  const headerValue = getHeaderValueFromOptions$1(options);
  return function xFrameOptionsMiddleware(_req, res, next) {
    res.setHeader("X-Frame-Options", headerValue);
    next();
  };
}
var ALLOWED_PERMITTED_POLICIES = /* @__PURE__ */ new Set(["none", "master-only", "by-content-type", "all"]);
function getHeaderValueFromOptions({ permittedPolicies = "none" }) {
  if (ALLOWED_PERMITTED_POLICIES.has(permittedPolicies)) {
    return permittedPolicies;
  } else {
    throw new Error(`X-Permitted-Cross-Domain-Policies does not support ${JSON.stringify(permittedPolicies)}`);
  }
}
function xPermittedCrossDomainPolicies(options = {}) {
  const headerValue = getHeaderValueFromOptions(options);
  return function xPermittedCrossDomainPoliciesMiddleware(_req, res, next) {
    res.setHeader("X-Permitted-Cross-Domain-Policies", headerValue);
    next();
  };
}
function xPoweredBy() {
  return function xPoweredByMiddleware(_req, res, next) {
    res.removeHeader("X-Powered-By");
    next();
  };
}
function xXssProtection() {
  return function xXssProtectionMiddleware(_req, res, next) {
    res.setHeader("X-XSS-Protection", "0");
    next();
  };
}
function getMiddlewareFunctionsFromOptions(options) {
  const result = [];
  switch (options.contentSecurityPolicy) {
    case void 0:
    case true:
      result.push(contentSecurityPolicy());
      break;
    case false:
      break;
    default:
      result.push(contentSecurityPolicy(options.contentSecurityPolicy));
      break;
  }
  switch (options.crossOriginEmbedderPolicy) {
    case void 0:
    case false:
      break;
    case true:
      result.push(crossOriginEmbedderPolicy());
      break;
    default:
      result.push(crossOriginEmbedderPolicy(options.crossOriginEmbedderPolicy));
      break;
  }
  switch (options.crossOriginOpenerPolicy) {
    case void 0:
    case true:
      result.push(crossOriginOpenerPolicy());
      break;
    case false:
      break;
    default:
      result.push(crossOriginOpenerPolicy(options.crossOriginOpenerPolicy));
      break;
  }
  switch (options.crossOriginResourcePolicy) {
    case void 0:
    case true:
      result.push(crossOriginResourcePolicy());
      break;
    case false:
      break;
    default:
      result.push(crossOriginResourcePolicy(options.crossOriginResourcePolicy));
      break;
  }
  switch (options.originAgentCluster) {
    case void 0:
    case true:
      result.push(originAgentCluster());
      break;
    case false:
      break;
    default:
      console.warn("Origin-Agent-Cluster does not take options. Remove the property to silence this warning.");
      result.push(originAgentCluster());
      break;
  }
  switch (options.referrerPolicy) {
    case void 0:
    case true:
      result.push(referrerPolicy());
      break;
    case false:
      break;
    default:
      result.push(referrerPolicy(options.referrerPolicy));
      break;
  }
  if ("strictTransportSecurity" in options && "hsts" in options) {
    throw new Error("Strict-Transport-Security option was specified twice. Remove `hsts` to silence this warning.");
  }
  const strictTransportSecurityOption = options.strictTransportSecurity ?? options.hsts;
  switch (strictTransportSecurityOption) {
    case void 0:
    case true:
      result.push(strictTransportSecurity());
      break;
    case false:
      break;
    default:
      result.push(strictTransportSecurity(strictTransportSecurityOption));
      break;
  }
  if ("xContentTypeOptions" in options && "noSniff" in options) {
    throw new Error("X-Content-Type-Options option was specified twice. Remove `noSniff` to silence this warning.");
  }
  const xContentTypeOptionsOption = options.xContentTypeOptions ?? options.noSniff;
  switch (xContentTypeOptionsOption) {
    case void 0:
    case true:
      result.push(xContentTypeOptions());
      break;
    case false:
      break;
    default:
      console.warn("X-Content-Type-Options does not take options. Remove the property to silence this warning.");
      result.push(xContentTypeOptions());
      break;
  }
  if ("xDnsPrefetchControl" in options && "dnsPrefetchControl" in options) {
    throw new Error("X-DNS-Prefetch-Control option was specified twice. Remove `dnsPrefetchControl` to silence this warning.");
  }
  const xDnsPrefetchControlOption = options.xDnsPrefetchControl ?? options.dnsPrefetchControl;
  switch (xDnsPrefetchControlOption) {
    case void 0:
    case true:
      result.push(xDnsPrefetchControl());
      break;
    case false:
      break;
    default:
      result.push(xDnsPrefetchControl(xDnsPrefetchControlOption));
      break;
  }
  if ("xDownloadOptions" in options && "ieNoOpen" in options) {
    throw new Error("X-Download-Options option was specified twice. Remove `ieNoOpen` to silence this warning.");
  }
  const xDownloadOptionsOption = options.xDownloadOptions ?? options.ieNoOpen;
  switch (xDownloadOptionsOption) {
    case void 0:
    case true:
      result.push(xDownloadOptions());
      break;
    case false:
      break;
    default:
      console.warn("X-Download-Options does not take options. Remove the property to silence this warning.");
      result.push(xDownloadOptions());
      break;
  }
  if ("xFrameOptions" in options && "frameguard" in options) {
    throw new Error("X-Frame-Options option was specified twice. Remove `frameguard` to silence this warning.");
  }
  const xFrameOptionsOption = options.xFrameOptions ?? options.frameguard;
  switch (xFrameOptionsOption) {
    case void 0:
    case true:
      result.push(xFrameOptions());
      break;
    case false:
      break;
    default:
      result.push(xFrameOptions(xFrameOptionsOption));
      break;
  }
  if ("xPermittedCrossDomainPolicies" in options && "permittedCrossDomainPolicies" in options) {
    throw new Error("X-Permitted-Cross-Domain-Policies option was specified twice. Remove `permittedCrossDomainPolicies` to silence this warning.");
  }
  const xPermittedCrossDomainPoliciesOption = options.xPermittedCrossDomainPolicies ?? options.permittedCrossDomainPolicies;
  switch (xPermittedCrossDomainPoliciesOption) {
    case void 0:
    case true:
      result.push(xPermittedCrossDomainPolicies());
      break;
    case false:
      break;
    default:
      result.push(xPermittedCrossDomainPolicies(xPermittedCrossDomainPoliciesOption));
      break;
  }
  if ("xPoweredBy" in options && "hidePoweredBy" in options) {
    throw new Error("X-Powered-By option was specified twice. Remove `hidePoweredBy` to silence this warning.");
  }
  const xPoweredByOption = options.xPoweredBy ?? options.hidePoweredBy;
  switch (xPoweredByOption) {
    case void 0:
    case true:
      result.push(xPoweredBy());
      break;
    case false:
      break;
    default:
      console.warn("X-Powered-By does not take options. Remove the property to silence this warning.");
      result.push(xPoweredBy());
      break;
  }
  if ("xXssProtection" in options && "xssFilter" in options) {
    throw new Error("X-XSS-Protection option was specified twice. Remove `xssFilter` to silence this warning.");
  }
  const xXssProtectionOption = options.xXssProtection ?? options.xssFilter;
  switch (xXssProtectionOption) {
    case void 0:
    case true:
      result.push(xXssProtection());
      break;
    case false:
      break;
    default:
      console.warn("X-XSS-Protection does not take options. Remove the property to silence this warning.");
      result.push(xXssProtection());
      break;
  }
  return result;
}
var helmet = Object.assign(
  function helmet2(options = {}) {
    if (options.constructor?.name === "IncomingMessage") {
      throw new Error("It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.");
    }
    const middlewareFunctions = getMiddlewareFunctionsFromOptions(options);
    return function helmetMiddleware(req, res, next) {
      let middlewareIndex = 0;
      (function internalNext(err) {
        if (err) {
          next(err);
          return;
        }
        const middlewareFunction = middlewareFunctions[middlewareIndex];
        if (middlewareFunction) {
          middlewareIndex++;
          middlewareFunction(req, res, internalNext);
        } else {
          next();
        }
      })();
    };
  },
  {
    contentSecurityPolicy,
    crossOriginEmbedderPolicy,
    crossOriginOpenerPolicy,
    crossOriginResourcePolicy,
    originAgentCluster,
    referrerPolicy,
    strictTransportSecurity,
    xContentTypeOptions,
    xDnsPrefetchControl,
    xDownloadOptions,
    xFrameOptions,
    xPermittedCrossDomainPolicies,
    xPoweredBy,
    xXssProtection,
    // Legacy aliases
    dnsPrefetchControl: xDnsPrefetchControl,
    xssFilter: xXssProtection,
    permittedCrossDomainPolicies: xPermittedCrossDomainPolicies,
    ieNoOpen: xDownloadOptions,
    noSniff: xContentTypeOptions,
    frameguard: xFrameOptions,
    hidePoweredBy: xPoweredBy,
    hsts: strictTransportSecurity
  }
);

// ../../../../Desktop/yebo-monorepo-extract/node_modules/.pnpm/express-rate-limit@8.3.1_express@4.22.1/node_modules/express-rate-limit/dist/index.mjs
var import_node_net = require("node:net");
var import_ip_address = __toESM(require_ip_address(), 1);
var import_node_net2 = require("node:net");
var import_node_buffer = require("node:buffer");
var import_node_crypto = require("node:crypto");
var import_node_net3 = require("node:net");
function ipKeyGenerator(ip, ipv6Subnet = 56) {
  if ((0, import_node_net.isIPv6)(ip)) {
    const address = new import_ip_address.Address6(ip);
    if (address.is4()) return address.to4().correctForm();
    if (ipv6Subnet) {
      const subnet = new import_ip_address.Address6(`${ip}/${ipv6Subnet}`);
      return `${subnet.startAddress().correctForm()}/${ipv6Subnet}`;
    }
  }
  return ip;
}
var MemoryStore = class {
  constructor(validations2) {
    this.validations = validations2;
    this.previous = /* @__PURE__ */ new Map();
    this.current = /* @__PURE__ */ new Map();
    this.localKeys = true;
  }
  /**
   * Method that initializes the store.
   *
   * @param options {Options} - The options used to setup the middleware.
   */
  init(options) {
    this.windowMs = options.windowMs;
    this.validations?.windowMs(this.windowMs);
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.clearExpired();
    }, this.windowMs);
    this.interval.unref?.();
  }
  /**
   * Method to fetch a client's hit count and reset time.
   *
   * @param key {string} - The identifier for a client.
   *
   * @returns {ClientRateLimitInfo | undefined} - The number of hits and reset time for that client.
   *
   * @public
   */
  async get(key) {
    return this.current.get(key) ?? this.previous.get(key);
  }
  /**
   * Method to increment a client's hit counter.
   *
   * @param key {string} - The identifier for a client.
   *
   * @returns {ClientRateLimitInfo} - The number of hits and reset time for that client.
   *
   * @public
   */
  async increment(key) {
    const client = this.getClient(key);
    const now = Date.now();
    if (client.resetTime.getTime() <= now) {
      this.resetClient(client, now);
    }
    client.totalHits++;
    return client;
  }
  /**
   * Method to decrement a client's hit counter.
   *
   * @param key {string} - The identifier for a client.
   *
   * @public
   */
  async decrement(key) {
    const client = this.getClient(key);
    if (client.totalHits > 0) client.totalHits--;
  }
  /**
   * Method to reset a client's hit counter.
   *
   * @param key {string} - The identifier for a client.
   *
   * @public
   */
  async resetKey(key) {
    this.current.delete(key);
    this.previous.delete(key);
  }
  /**
   * Method to reset everyone's hit counter.
   *
   * @public
   */
  async resetAll() {
    this.current.clear();
    this.previous.clear();
  }
  /**
   * Method to stop the timer (if currently running) and prevent any memory
   * leaks.
   *
   * @public
   */
  shutdown() {
    clearInterval(this.interval);
    void this.resetAll();
  }
  /**
   * Recycles a client by setting its hit count to zero, and reset time to
   * `windowMs` milliseconds from now.
   *
   * NOT to be confused with `#resetKey()`, which removes a client from both the
   * `current` and `previous` maps.
   *
   * @param client {Client} - The client to recycle.
   * @param now {number} - The current time, to which the `windowMs` is added to get the `resetTime` for the client.
   *
   * @return {Client} - The modified client that was passed in, to allow for chaining.
   */
  resetClient(client, now = Date.now()) {
    client.totalHits = 0;
    client.resetTime.setTime(now + this.windowMs);
    return client;
  }
  /**
   * Retrieves or creates a client, given a key. Also ensures that the client being
   * returned is in the `current` map.
   *
   * @param key {string} - The key under which the client is (or is to be) stored.
   *
   * @returns {Client} - The requested client.
   */
  getClient(key) {
    if (this.current.has(key)) return this.current.get(key);
    let client;
    if (this.previous.has(key)) {
      client = this.previous.get(key);
      this.previous.delete(key);
    } else {
      client = { totalHits: 0, resetTime: /* @__PURE__ */ new Date() };
      this.resetClient(client);
    }
    this.current.set(key, client);
    return client;
  }
  /**
   * Move current clients to previous, create a new map for current.
   *
   * This function is called every `windowMs`.
   */
  clearExpired() {
    this.previous = this.current;
    this.current = /* @__PURE__ */ new Map();
  }
};
var SUPPORTED_DRAFT_VERSIONS = [
  "draft-6",
  "draft-7",
  "draft-8"
];
var getResetSeconds = (windowMs, resetTime) => {
  let resetSeconds;
  if (resetTime) {
    const deltaSeconds = Math.ceil((resetTime.getTime() - Date.now()) / 1e3);
    resetSeconds = Math.max(0, deltaSeconds);
  } else {
    resetSeconds = Math.ceil(windowMs / 1e3);
  }
  return resetSeconds;
};
var getPartitionKey = (key) => {
  const hash = (0, import_node_crypto.createHash)("sha256");
  hash.update(key);
  const partitionKey = hash.digest("hex").slice(0, 12);
  return import_node_buffer.Buffer.from(partitionKey).toString("base64");
};
var setLegacyHeaders = (response, info) => {
  if (response.headersSent) return;
  response.setHeader("X-RateLimit-Limit", info.limit.toString());
  response.setHeader("X-RateLimit-Remaining", info.remaining.toString());
  if (info.resetTime instanceof Date) {
    response.setHeader("Date", (/* @__PURE__ */ new Date()).toUTCString());
    response.setHeader(
      "X-RateLimit-Reset",
      Math.ceil(info.resetTime.getTime() / 1e3).toString()
    );
  }
};
var setDraft6Headers = (response, info, windowMs) => {
  if (response.headersSent) return;
  const windowSeconds = Math.ceil(windowMs / 1e3);
  const resetSeconds = getResetSeconds(windowMs, info.resetTime);
  response.setHeader("RateLimit-Policy", `${info.limit};w=${windowSeconds}`);
  response.setHeader("RateLimit-Limit", info.limit.toString());
  response.setHeader("RateLimit-Remaining", info.remaining.toString());
  if (typeof resetSeconds === "number")
    response.setHeader("RateLimit-Reset", resetSeconds.toString());
};
var setDraft7Headers = (response, info, windowMs) => {
  if (response.headersSent) return;
  const windowSeconds = Math.ceil(windowMs / 1e3);
  const resetSeconds = getResetSeconds(windowMs, info.resetTime);
  response.setHeader("RateLimit-Policy", `${info.limit};w=${windowSeconds}`);
  response.setHeader(
    "RateLimit",
    `limit=${info.limit}, remaining=${info.remaining}, reset=${resetSeconds}`
  );
};
var setDraft8Headers = (response, info, windowMs, name, key) => {
  if (response.headersSent) return;
  const windowSeconds = Math.ceil(windowMs / 1e3);
  const resetSeconds = getResetSeconds(windowMs, info.resetTime);
  const partitionKey = getPartitionKey(key);
  const header = `r=${info.remaining}; t=${resetSeconds}`;
  const policy = `q=${info.limit}; w=${windowSeconds}; pk=:${partitionKey}:`;
  response.append("RateLimit", `"${name}"; ${header}`);
  response.append("RateLimit-Policy", `"${name}"; ${policy}`);
};
var setRetryAfterHeader = (response, info, windowMs) => {
  if (response.headersSent) return;
  const resetSeconds = getResetSeconds(windowMs, info.resetTime);
  response.setHeader("Retry-After", resetSeconds.toString());
};
var omitUndefinedProperties = (passedOptions) => {
  const omittedOptions = {};
  for (const k of Object.keys(passedOptions)) {
    const key = k;
    if (passedOptions[key] !== void 0) {
      omittedOptions[key] = passedOptions[key];
    }
  }
  return omittedOptions;
};
var ValidationError = class extends Error {
  /**
   * The code must be a string, in snake case and all capital, that starts with
   * the substring `ERR_ERL_`.
   *
   * The message must be a string, starting with an uppercase character,
   * describing the issue in detail.
   */
  constructor(code, message) {
    const url = `https://express-rate-limit.github.io/${code}/`;
    super(`${message} See ${url} for more information.`);
    this.name = this.constructor.name;
    this.code = code;
    this.help = url;
  }
};
var ChangeWarning = class extends ValidationError {
};
var usedStores = /* @__PURE__ */ new Set();
var singleCountKeys = /* @__PURE__ */ new WeakMap();
var validations = {
  enabled: {
    default: true
  },
  // Should be EnabledValidations type, but that's a circular reference
  disable() {
    for (const k of Object.keys(this.enabled)) this.enabled[k] = false;
  },
  /**
   * Checks whether the IP address is valid, and that it does not have a port
   * number in it.
   *
   * See https://github.com/express-rate-limit/express-rate-limit/wiki/Error-Codes#err_erl_invalid_ip_address.
   *
   * @param ip {string | undefined} - The IP address provided by Express as request.ip.
   *
   * @returns {void}
   */
  ip(ip) {
    if (ip === void 0) {
      throw new ValidationError(
        "ERR_ERL_UNDEFINED_IP_ADDRESS",
        `An undefined 'request.ip' was detected. This might indicate a misconfiguration or the connection being destroyed prematurely.`
      );
    }
    if (!(0, import_node_net3.isIP)(ip)) {
      throw new ValidationError(
        "ERR_ERL_INVALID_IP_ADDRESS",
        `An invalid 'request.ip' (${ip}) was detected. Consider passing a custom 'keyGenerator' function to the rate limiter.`
      );
    }
  },
  /**
   * Makes sure the trust proxy setting is not set to `true`.
   *
   * See https://github.com/express-rate-limit/express-rate-limit/wiki/Error-Codes#err_erl_permissive_trust_proxy.
   *
   * @param request {Request} - The Express request object.
   *
   * @returns {void}
   */
  trustProxy(request) {
    if (request.app.get("trust proxy") === true) {
      throw new ValidationError(
        "ERR_ERL_PERMISSIVE_TRUST_PROXY",
        `The Express 'trust proxy' setting is true, which allows anyone to trivially bypass IP-based rate limiting.`
      );
    }
  },
  /**
   * Makes sure the trust proxy setting is set in case the `X-Forwarded-For`
   * header is present.
   *
   * See https://github.com/express-rate-limit/express-rate-limit/wiki/Error-Codes#err_erl_unset_trust_proxy.
   *
   * @param request {Request} - The Express request object.
   *
   * @returns {void}
   */
  xForwardedForHeader(request) {
    if (request.headers["x-forwarded-for"] && request.app.get("trust proxy") === false) {
      throw new ValidationError(
        "ERR_ERL_UNEXPECTED_X_FORWARDED_FOR",
        `The 'X-Forwarded-For' header is set but the Express 'trust proxy' setting is false (default). This could indicate a misconfiguration which would prevent express-rate-limit from accurately identifying users.`
      );
    }
  },
  /**
   * Alert the user if the Forwarded header is set (standardized version of X-Forwarded-For - not supported by express as of version 5.1.0)
   *
   * @param request {Request} - The Express request object.
   *
   * @returns {void}
   */
  forwardedHeader(request) {
    if (request.headers.forwarded && request.ip === request.socket?.remoteAddress) {
      throw new ValidationError(
        "ERR_ERL_FORWARDED_HEADER",
        `The 'Forwarded' header (standardized X-Forwarded-For) is set but currently being ignored. Add a custom keyGenerator to use a value from this header.`
      );
    }
  },
  /**
   * Ensures totalHits value from store is a positive integer.
   *
   * @param hits {any} - The `totalHits` returned by the store.
   */
  positiveHits(hits) {
    if (typeof hits !== "number" || hits < 1 || hits !== Math.round(hits)) {
      throw new ValidationError(
        "ERR_ERL_INVALID_HITS",
        `The totalHits value returned from the store must be a positive integer, got ${hits}`
      );
    }
  },
  /**
   * Ensures a single store instance is not used with multiple express-rate-limit instances
   */
  unsharedStore(store) {
    if (usedStores.has(store)) {
      const maybeUniquePrefix = store?.localKeys ? "" : " (with a unique prefix)";
      throw new ValidationError(
        "ERR_ERL_STORE_REUSE",
        `A Store instance must not be shared across multiple rate limiters. Create a new instance of ${store.constructor.name}${maybeUniquePrefix} for each limiter instead.`
      );
    }
    usedStores.add(store);
  },
  /**
   * Ensures a given key is incremented only once per request.
   *
   * @param request {Request} - The Express request object.
   * @param store {Store} - The store class.
   * @param key {string} - The key used to store the client's hit count.
   *
   * @returns {void}
   */
  singleCount(request, store, key) {
    let storeKeys = singleCountKeys.get(request);
    if (!storeKeys) {
      storeKeys = /* @__PURE__ */ new Map();
      singleCountKeys.set(request, storeKeys);
    }
    const storeKey = store.localKeys ? store : store.constructor.name;
    let keys = storeKeys.get(storeKey);
    if (!keys) {
      keys = [];
      storeKeys.set(storeKey, keys);
    }
    const prefixedKey = `${store.prefix ?? ""}${key}`;
    if (keys.includes(prefixedKey)) {
      throw new ValidationError(
        "ERR_ERL_DOUBLE_COUNT",
        `The hit count for ${key} was incremented more than once for a single request.`
      );
    }
    keys.push(prefixedKey);
  },
  /**
   * Warns the user that the behaviour for `max: 0` / `limit: 0` is
   * changing in the next major release.
   *
   * @param limit {number} - The maximum number of hits per client.
   *
   * @returns {void}
   */
  limit(limit) {
    if (limit === 0) {
      throw new ChangeWarning(
        "WRN_ERL_MAX_ZERO",
        "Setting limit or max to 0 disables rate limiting in express-rate-limit v6 and older, but will cause all requests to be blocked in v7"
      );
    }
  },
  /**
   * Warns the user that the `draft_polli_ratelimit_headers` option is deprecated
   * and will be removed in the next major release.
   *
   * @param draft_polli_ratelimit_headers {any | undefined} - The now-deprecated setting that was used to enable standard headers.
   *
   * @returns {void}
   */
  draftPolliHeaders(draft_polli_ratelimit_headers) {
    if (draft_polli_ratelimit_headers) {
      throw new ChangeWarning(
        "WRN_ERL_DEPRECATED_DRAFT_POLLI_HEADERS",
        `The draft_polli_ratelimit_headers configuration option is deprecated and has been removed in express-rate-limit v7, please set standardHeaders: 'draft-6' instead.`
      );
    }
  },
  /**
   * Warns the user that the `onLimitReached` option is deprecated and
   * will be removed in the next major release.
   *
   * @param onLimitReached {any | undefined} - The maximum number of hits per client.
   *
   * @returns {void}
   */
  onLimitReached(onLimitReached) {
    if (onLimitReached) {
      throw new ChangeWarning(
        "WRN_ERL_DEPRECATED_ON_LIMIT_REACHED",
        "The onLimitReached configuration option is deprecated and has been removed in express-rate-limit v7."
      );
    }
  },
  /**
   * Warns the user when an invalid/unsupported version of the draft spec is passed.
   *
   * @param version {any | undefined} - The version passed by the user.
   *
   * @returns {void}
   */
  headersDraftVersion(version) {
    if (typeof version !== "string" || // @ts-expect-error This is fine. If version is not in the array, it will just return false.
    !SUPPORTED_DRAFT_VERSIONS.includes(version)) {
      const versionString = SUPPORTED_DRAFT_VERSIONS.join(", ");
      throw new ValidationError(
        "ERR_ERL_HEADERS_UNSUPPORTED_DRAFT_VERSION",
        `standardHeaders: only the following versions of the IETF draft specification are supported: ${versionString}.`
      );
    }
  },
  /**
   * Warns the user when the selected headers option requires a reset time but
   * the store does not provide one.
   *
   * @param resetTime {Date | undefined} - The timestamp when the client's hit count will be reset.
   *
   * @returns {void}
   */
  headersResetTime(resetTime) {
    if (!resetTime) {
      throw new ValidationError(
        "ERR_ERL_HEADERS_NO_RESET",
        `standardHeaders:  'draft-7' requires a 'resetTime', but the store did not provide one. The 'windowMs' value will be used instead, which may cause clients to wait longer than necessary.`
      );
    }
  },
  knownOptions(passedOptions) {
    if (!passedOptions) return;
    const optionsMap = {
      windowMs: true,
      limit: true,
      message: true,
      statusCode: true,
      legacyHeaders: true,
      standardHeaders: true,
      identifier: true,
      requestPropertyName: true,
      skipFailedRequests: true,
      skipSuccessfulRequests: true,
      keyGenerator: true,
      ipv6Subnet: true,
      handler: true,
      skip: true,
      requestWasSuccessful: true,
      store: true,
      validate: true,
      headers: true,
      max: true,
      passOnStoreError: true
    };
    const validOptions = Object.keys(optionsMap).concat(
      "draft_polli_ratelimit_headers",
      // not a valid option anymore, but we have a more specific check for this one, so don't warn for it here
      // from express-slow-down - https://github.com/express-rate-limit/express-slow-down/blob/main/source/types.ts#L65
      "delayAfter",
      "delayMs",
      "maxDelayMs"
    );
    for (const key of Object.keys(passedOptions)) {
      if (!validOptions.includes(key)) {
        throw new ValidationError(
          "ERR_ERL_UNKNOWN_OPTION",
          `Unexpected configuration option: ${key}`
          // todo: suggest a valid option with a short levenstein distance?
        );
      }
    }
  },
  /**
   * Checks the options.validate setting to ensure that only recognized
   * validations are enabled or disabled.
   *
   * If any unrecognized values are found, an error is logged that
   * includes the list of supported validations.
   */
  validationsConfig() {
    const supportedValidations = Object.keys(this).filter(
      (k) => !["enabled", "disable"].includes(k)
    );
    supportedValidations.push("default");
    for (const key of Object.keys(this.enabled)) {
      if (!supportedValidations.includes(key)) {
        throw new ValidationError(
          "ERR_ERL_UNKNOWN_VALIDATION",
          `options.validate.${key} is not recognized. Supported validate options are: ${supportedValidations.join(
            ", "
          )}.`
        );
      }
    }
  },
  /**
   * Checks to see if the instance was created inside of a request handler,
   * which would prevent it from working correctly, with the default memory
   * store (or any other store with localKeys.)
   */
  creationStack(store) {
    const { stack } = new Error(
      "express-rate-limit validation check (set options.validate.creationStack=false to disable)"
    );
    if (stack?.includes("Layer.handle [as handle_request]") || // express v4
    stack?.includes("Layer.handleRequest")) {
      if (!store.localKeys) {
        throw new ValidationError(
          "ERR_ERL_CREATED_IN_REQUEST_HANDLER",
          "express-rate-limit instance should *usually* be created at app initialization, not when responding to a request."
        );
      }
      throw new ValidationError(
        "ERR_ERL_CREATED_IN_REQUEST_HANDLER",
        "express-rate-limit instance should be created at app initialization, not when responding to a request."
      );
    }
  },
  ipv6Subnet(ipv6Subnet) {
    if (ipv6Subnet === false) {
      return;
    }
    if (!Number.isInteger(ipv6Subnet) || ipv6Subnet < 32 || ipv6Subnet > 64) {
      throw new ValidationError(
        "ERR_ERL_IPV6_SUBNET",
        `Unexpected ipv6Subnet value: ${ipv6Subnet}. Expected an integer between 32 and 64 (usually 48-64).`
      );
    }
  },
  ipv6SubnetOrKeyGenerator(options) {
    if (options.ipv6Subnet !== void 0 && options.keyGenerator) {
      throw new ValidationError(
        "ERR_ERL_IPV6SUBNET_OR_KEYGENERATOR",
        `Incompatible options: the 'ipv6Subnet' option is ignored when a custom 'keyGenerator' function is also set.`
      );
    }
  },
  keyGeneratorIpFallback(keyGenerator) {
    if (!keyGenerator) {
      return;
    }
    const src = keyGenerator.toString();
    if ((src.includes("req.ip") || src.includes("request.ip")) && !src.includes("ipKeyGenerator")) {
      throw new ValidationError(
        "ERR_ERL_KEY_GEN_IPV6",
        "Custom keyGenerator appears to use request IP without calling the ipKeyGenerator helper function for IPv6 addresses. This could allow IPv6 users to bypass limits."
      );
    }
  },
  /**
   * Checks to see if the window duration is greater than 2^32 - 1. This is only
   * called by the default MemoryStore, since it uses Node's setInterval method.
   *
   * See https://nodejs.org/api/timers.html#setintervalcallback-delay-args.
   */
  windowMs(windowMs) {
    const SET_TIMEOUT_MAX = 2 ** 31 - 1;
    if (typeof windowMs !== "number" || Number.isNaN(windowMs) || windowMs < 1 || windowMs > SET_TIMEOUT_MAX) {
      throw new ValidationError(
        "ERR_ERL_WINDOW_MS",
        `Invalid windowMs value: ${windowMs}${typeof windowMs !== "number" ? ` (${typeof windowMs})` : ""}, must be a number between 1 and ${SET_TIMEOUT_MAX} when using the default MemoryStore`
      );
    }
  }
};
var getValidations = (_enabled) => {
  let enabled;
  if (typeof _enabled === "boolean") {
    enabled = {
      default: _enabled
    };
  } else {
    enabled = {
      default: true,
      ..._enabled
    };
  }
  const wrappedValidations = { enabled };
  for (const [name, validation] of Object.entries(validations)) {
    if (typeof validation === "function")
      wrappedValidations[name] = (...args) => {
        if (!(enabled[name] ?? enabled.default)) {
          return;
        }
        try {
          ;
          validation.apply(
            wrappedValidations,
            args
          );
        } catch (error) {
          if (error instanceof ChangeWarning) console.warn(error);
          else console.error(error);
        }
      };
  }
  return wrappedValidations;
};
var isLegacyStore = (store) => (
  // Check that `incr` exists but `increment` does not - store authors might want
  // to keep both around for backwards compatibility.
  typeof store.incr === "function" && typeof store.increment !== "function"
);
var promisifyStore = (passedStore) => {
  if (!isLegacyStore(passedStore)) {
    return passedStore;
  }
  const legacyStore = passedStore;
  class PromisifiedStore {
    async increment(key) {
      return new Promise((resolve, reject) => {
        legacyStore.incr(
          key,
          (error, totalHits, resetTime) => {
            if (error) reject(error);
            resolve({ totalHits, resetTime });
          }
        );
      });
    }
    async decrement(key) {
      return legacyStore.decrement(key);
    }
    async resetKey(key) {
      return legacyStore.resetKey(key);
    }
    /* istanbul ignore next */
    async resetAll() {
      if (typeof legacyStore.resetAll === "function")
        return legacyStore.resetAll();
    }
  }
  return new PromisifiedStore();
};
var getOptionsFromConfig = (config) => {
  const { validations: validations2, ...directlyPassableEntries } = config;
  return {
    ...directlyPassableEntries,
    validate: validations2.enabled
  };
};
var parseOptions = (passedOptions) => {
  const notUndefinedOptions = omitUndefinedProperties(passedOptions);
  const validations2 = getValidations(notUndefinedOptions?.validate ?? true);
  validations2.validationsConfig();
  validations2.knownOptions(passedOptions);
  validations2.draftPolliHeaders(
    // @ts-expect-error see the note above.
    notUndefinedOptions.draft_polli_ratelimit_headers
  );
  validations2.onLimitReached(notUndefinedOptions.onLimitReached);
  if (notUndefinedOptions.ipv6Subnet !== void 0 && typeof notUndefinedOptions.ipv6Subnet !== "function") {
    validations2.ipv6Subnet(notUndefinedOptions.ipv6Subnet);
  }
  validations2.keyGeneratorIpFallback(notUndefinedOptions.keyGenerator);
  validations2.ipv6SubnetOrKeyGenerator(notUndefinedOptions);
  let standardHeaders = notUndefinedOptions.standardHeaders ?? false;
  if (standardHeaders === true) standardHeaders = "draft-6";
  const config = {
    windowMs: 60 * 1e3,
    limit: passedOptions.max ?? 5,
    // `max` is deprecated, but support it anyways.
    message: "Too many requests, please try again later.",
    statusCode: 429,
    legacyHeaders: passedOptions.headers ?? true,
    identifier(request, _response) {
      let duration = "";
      const property = config.requestPropertyName;
      const { limit } = request[property];
      const seconds = config.windowMs / 1e3;
      const minutes = config.windowMs / (1e3 * 60);
      const hours = config.windowMs / (1e3 * 60 * 60);
      const days = config.windowMs / (1e3 * 60 * 60 * 24);
      if (seconds < 60) duration = `${seconds}sec`;
      else if (minutes < 60) duration = `${minutes}min`;
      else if (hours < 24) duration = `${hours}hr${hours > 1 ? "s" : ""}`;
      else duration = `${days}day${days > 1 ? "s" : ""}`;
      return `${limit}-in-${duration}`;
    },
    requestPropertyName: "rateLimit",
    skipFailedRequests: false,
    skipSuccessfulRequests: false,
    requestWasSuccessful: (_request, response) => response.statusCode < 400,
    skip: (_request, _response) => false,
    async keyGenerator(request, response) {
      validations2.ip(request.ip);
      validations2.trustProxy(request);
      validations2.xForwardedForHeader(request);
      validations2.forwardedHeader(request);
      const ip = request.ip;
      let subnet = 56;
      if ((0, import_node_net2.isIPv6)(ip)) {
        subnet = typeof config.ipv6Subnet === "function" ? await config.ipv6Subnet(request, response) : config.ipv6Subnet;
        if (typeof config.ipv6Subnet === "function")
          validations2.ipv6Subnet(subnet);
      }
      return ipKeyGenerator(ip, subnet);
    },
    ipv6Subnet: 56,
    async handler(request, response, _next, _optionsUsed) {
      response.status(config.statusCode);
      const message = typeof config.message === "function" ? await config.message(
        request,
        response
      ) : config.message;
      if (!response.writableEnded) response.send(message);
    },
    passOnStoreError: false,
    // Allow the default options to be overridden by the passed options.
    ...notUndefinedOptions,
    // `standardHeaders` is resolved into a draft version above, use that.
    standardHeaders,
    // Note that this field is declared after the user's options are spread in,
    // so that this field doesn't get overridden with an un-promisified store!
    store: promisifyStore(
      notUndefinedOptions.store ?? new MemoryStore(validations2)
    ),
    // Print an error to the console if a few known misconfigurations are detected.
    validations: validations2
  };
  if (typeof config.store.increment !== "function" || typeof config.store.decrement !== "function" || typeof config.store.resetKey !== "function" || config.store.resetAll !== void 0 && typeof config.store.resetAll !== "function" || config.store.init !== void 0 && typeof config.store.init !== "function") {
    throw new TypeError(
      "An invalid store was passed. Please ensure that the store is a class that implements the `Store` interface."
    );
  }
  return config;
};
var handleAsyncErrors = (fn) => async (request, response, next) => {
  try {
    await Promise.resolve(fn(request, response, next)).catch(next);
  } catch (error) {
    next(error);
  }
};
var rateLimit = (passedOptions) => {
  const config = parseOptions(passedOptions ?? {});
  const options = getOptionsFromConfig(config);
  config.validations.creationStack(config.store);
  config.validations.unsharedStore(config.store);
  if (typeof config.store.init === "function") config.store.init(options);
  const middleware = handleAsyncErrors(
    async (request, response, next) => {
      const skip = await config.skip(request, response);
      if (skip) {
        next();
        return;
      }
      const augmentedRequest = request;
      const key = await config.keyGenerator(request, response);
      let totalHits = 0;
      let resetTime;
      try {
        const incrementResult = await config.store.increment(key);
        totalHits = incrementResult.totalHits;
        resetTime = incrementResult.resetTime;
      } catch (error) {
        if (config.passOnStoreError) {
          console.error(
            "express-rate-limit: error from store, allowing request without rate-limiting.",
            error
          );
          next();
          return;
        }
        throw error;
      }
      config.validations.positiveHits(totalHits);
      config.validations.singleCount(request, config.store, key);
      const retrieveLimit = typeof config.limit === "function" ? config.limit(request, response) : config.limit;
      const limit = await retrieveLimit;
      config.validations.limit(limit);
      const info = {
        limit,
        used: totalHits,
        remaining: Math.max(limit - totalHits, 0),
        resetTime,
        key
      };
      Object.defineProperty(info, "current", {
        configurable: false,
        enumerable: false,
        value: totalHits
      });
      augmentedRequest[config.requestPropertyName] = info;
      if (config.legacyHeaders && !response.headersSent) {
        setLegacyHeaders(response, info);
      }
      if (config.standardHeaders && !response.headersSent) {
        switch (config.standardHeaders) {
          case "draft-6": {
            setDraft6Headers(response, info, config.windowMs);
            break;
          }
          case "draft-7": {
            config.validations.headersResetTime(info.resetTime);
            setDraft7Headers(response, info, config.windowMs);
            break;
          }
          case "draft-8": {
            const retrieveName = typeof config.identifier === "function" ? config.identifier(request, response) : config.identifier;
            const name = await retrieveName;
            config.validations.headersResetTime(info.resetTime);
            setDraft8Headers(response, info, config.windowMs, name, key);
            break;
          }
          default: {
            config.validations.headersDraftVersion(config.standardHeaders);
            break;
          }
        }
      }
      if (config.skipFailedRequests || config.skipSuccessfulRequests) {
        let decremented = false;
        const decrementKey = async () => {
          if (!decremented) {
            await config.store.decrement(key);
            decremented = true;
          }
        };
        if (config.skipFailedRequests) {
          response.on("finish", async () => {
            if (!await config.requestWasSuccessful(request, response))
              await decrementKey();
          });
          response.on("close", async () => {
            if (!response.writableEnded) await decrementKey();
          });
          response.on("error", async () => {
            await decrementKey();
          });
        }
        if (config.skipSuccessfulRequests) {
          response.on("finish", async () => {
            if (await config.requestWasSuccessful(request, response))
              await decrementKey();
          });
        }
      }
      config.validations.disable();
      if (totalHits > limit) {
        if (config.legacyHeaders || config.standardHeaders) {
          setRetryAfterHeader(response, info, config.windowMs);
        }
        config.handler(request, response, next, options);
        return;
      }
      next();
    }
  );
  const getThrowFn = () => {
    throw new Error("The current store does not support the get/getKey method");
  };
  middleware.resetKey = config.store.resetKey.bind(config.store);
  middleware.getKey = typeof config.store.get === "function" ? config.store.get.bind(config.store) : getThrowFn;
  return middleware;
};
var rate_limit_default = rateLimit;

// ../../../../Desktop/yebo-monorepo-extract/apps/yebo-gateway/src/server.ts
var import_pino = __toESM(require("pino"));
var import_zod = require("zod");
var import_authority_proof3 = __toESM(require_dist4());
var import_audit_core4 = __toESM(require_dist5());
var import_mcp_bridge = __toESM(require_dist12());
var import_mandate_core2 = __toESM(require_dist3());
var import_identity_kit = __toESM(require_dist());
var import_yebo_passkey = __toESM(require_dist13());
var import_plugin_marketplace = __toESM(require_dist15());
var import_integrity_score = __toESM(require_dist9());
var import_economics_core = __toESM(require_dist8());

// ../../../../Desktop/yebo-monorepo-extract/apps/yebo-gateway/src/middleware/paiVerifier.ts
var import_authority_proof = __toESM(require_dist4());
var import_audit_core = __toESM(require_dist5());
function paiVerifierMiddleware(req, res, next) {
  const authHeader = req.headers["x-yebo-pai"] ?? req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json({
      error: "UNAUTHORIZED",
      message: "Missing PAI token. Include X-Yebo-PAI header.",
      invariant: "INV-02"
    });
    return;
  }
  const token = String(authHeader).replace(/^Bearer\s+/i, "");
  const claims = (0, import_authority_proof.decodePAIToken)(token);
  if (!claims) {
    res.status(401).json({ error: "INVALID_PAI", message: "PAI token could not be decoded" });
    return;
  }
  if (Date.now() / 1e3 > claims.expires) {
    res.status(401).json({ error: "PAI_EXPIRED", message: "PAI token has expired" });
    return;
  }
  const pai = (0, import_authority_proof.getPAI)(claims.mandate_id);
  if (pai) {
    const result = (0, import_authority_proof.verifyPAI)(pai, pai.mandate_hash, claims.policy_hash);
    if (!result.valid) {
      (0, import_audit_core.record)({
        action: "sentinel_block",
        actor_id: claims.subject,
        mandate_id: claims.mandate_id,
        decision: "blocked",
        detail: { reason: "PAI signature invalid", errors: result.errors }
      });
      res.status(403).json({ error: "PAI_INVALID", message: "PAI signature verification failed", errors: result.errors });
      return;
    }
  }
  req.yebo_pai = {
    mandate_id: claims.mandate_id,
    policy_hash: claims.policy_hash,
    subject: claims.subject,
    pai_token: token
  };
  next();
}

// ../../../../Desktop/yebo-monorepo-extract/apps/yebo-gateway/src/middleware/sentinelCheck.ts
var import_sentinel = __toESM(require_dist16());
var import_mandate_core = __toESM(require_dist3());
var import_authority_proof2 = __toESM(require_dist4());
var import_policy_core = __toESM(require_dist17());
function sentinelCheckMiddleware(req, res, next) {
  const paiCtx = req.yebo_pai;
  if (!paiCtx) {
    res.status(401).json({ error: "NO_PAI_CONTEXT", message: "PAI context missing \u2014 run paiVerifier first" });
    return;
  }
  const mandate = (0, import_mandate_core.getMandate)(paiCtx.mandate_id);
  const pai = (0, import_authority_proof2.getPAI)(paiCtx.mandate_id);
  if (!mandate || !pai) {
    res.status(403).json({ error: "MANDATE_NOT_FOUND", message: `Mandate or PAI not found: ${paiCtx.mandate_id}` });
    return;
  }
  const enterpriseId = mandate.metadata?.enterprise_id;
  const policy = (0, import_policy_core.getActivePolicy)(enterpriseId ?? "yebo");
  const result = (0, import_sentinel.sentinelVerify)({
    mandate,
    pai,
    expected_policy_hash: paiCtx.policy_hash,
    allowed_capabilities: policy.allowed_capabilities
  });
  if (!result.passed) {
    res.status(403).json({
      error: "SENTINEL_BLOCKED",
      message: result.blocked_reason,
      checks: result.checks.filter((c) => !c.passed)
    });
    return;
  }
  next();
}

// ../../../../Desktop/yebo-monorepo-extract/apps/yebo-gateway/src/middleware/interceptor.ts
var import_audit_core2 = __toESM(require_dist5());
var import_rate_limit_core = __toESM(require_dist18());
function interceptorMiddleware(req, res, next) {
  const paiCtx = req.yebo_pai;
  (0, import_audit_core2.record)({
    action: "execution_dispatched",
    actor_id: paiCtx?.subject ?? "anonymous",
    decision: paiCtx ? "pending" : "blocked",
    detail: {
      method: req.method,
      path: req.path,
      ...req.ip !== void 0 ? { ip: req.ip } : {},
      ...req.headers["user-agent"] !== void 0 ? { user_agent: req.headers["user-agent"] } : {}
    },
    ...paiCtx?.mandate_id !== void 0 ? { mandate_id: paiCtx.mandate_id } : {}
  });
  if (!paiCtx) {
    res.status(401).json({ error: "AUTHORIZATION_REQUIRED", message: "All API calls require Yebo PAI authorization" });
    return;
  }
  const rateResult = (0, import_rate_limit_core.checkAll)({ identity_id: paiCtx.subject });
  if (!rateResult.allowed) {
    res.status(429).json({
      error: "RATE_LIMITED",
      message: "Too many requests",
      violations: rateResult.violations.map((v) => ({ key: v.key, remaining: v.remaining }))
    });
    return;
  }
  next();
}

// ../../../../Desktop/yebo-monorepo-extract/apps/yebo-gateway/src/routes/webhook.ts
var import_express = require("express");
var import_node_crypto2 = require("node:crypto");
var import_audit_core3 = __toESM(require_dist5());
var webhookRouter = (0, import_express.Router)();
webhookRouter.post("/mandate-event", (req, res) => {
  const signature = req.headers["x-yebo-signature"];
  const secret = process.env["WEBHOOK_SECRET"] ?? "dev-secret";
  const expectedSig = (0, import_node_crypto2.createHash)("sha256").update(secret + JSON.stringify(req.body)).digest("hex");
  if (signature && signature !== expectedSig) {
    res.status(401).json({ error: "INVALID_SIGNATURE" });
    return;
  }
  const { mandate_id, event, actor_id } = req.body;
  if (!mandate_id || !event) {
    res.status(400).json({ error: "MISSING_FIELDS", required: ["mandate_id", "event"] });
    return;
  }
  (0, import_audit_core3.record)({
    action: "execution_dispatched",
    actor_id: actor_id ?? "webhook",
    mandate_id,
    decision: "info",
    detail: { event, source: "webhook" }
  });
  res.json({ received: true, mandate_id, event });
});
webhookRouter.post("/settlement-event", (req, res) => {
  const { settlement_id, status, reference } = req.body;
  if (!settlement_id) {
    res.status(400).json({ error: "MISSING_FIELDS" });
    return;
  }
  (0, import_audit_core3.record)({
    action: "settlement_confirmed",
    actor_id: "webhook",
    decision: status === "confirmed" ? "allowed" : "pending",
    detail: { settlement_id, status, reference, source: "webhook" }
  });
  res.json({ received: true, settlement_id });
});

// ../../../../Desktop/yebo-monorepo-extract/apps/yebo-gateway/src/server.ts
var import_event_bus = __toESM(require_dist19());
var import_execution_worker = __toESM(require_dist21());
var import_audit_writer = __toESM(require_dist22());
var import_integrity_worker = __toESM(require_dist23());
var import_receipt_builder = __toESM(require_dist25());
var import_authorization_receipt = __toESM(require_dist24());
var import_notification_service = __toESM(require_dist26());
var import_continuation_token = __toESM(require_dist27());
var import_authorization_sessions = __toESM(require_dist6());
var import_authorization_modes = __toESM(require_dist7());
var import_verification_plane = __toESM(require_dist28());
var bus = new import_event_bus.InMemoryEventBus();
var ENV = import_zod.z.object({
  PORT: import_zod.z.coerce.number().default(8787),
  NODE_ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  POLICY_BACKEND_URL: import_zod.z.string().url().optional(),
  POLICY_BACKEND_TIMEOUT_MS: import_zod.z.coerce.number().default(3e3),
  RATE_LIMIT_WINDOW_MS: import_zod.z.coerce.number().default(6e4),
  RATE_LIMIT_MAX_VERIFY: import_zod.z.coerce.number().default(20),
  RATE_LIMIT_MAX_EXECUTE: import_zod.z.coerce.number().default(10),
  RATE_LIMIT_MAX_GLOBAL: import_zod.z.coerce.number().default(100),
  YEBO_RP_ID: import_zod.z.string().default(process.env["NODE_ENV"] === "production" ? "yebo.dev" : "localhost"),
  YEBO_RP_ORIGIN: import_zod.z.string().default(process.env["NODE_ENV"] === "production" ? "https://yebo.dev" : "http://localhost:8787"),
  DEBUG_ADMIN_TOKEN: import_zod.z.string().optional()
}).passthrough();
var env = ENV.parse(process.env);
var log = (0, import_pino.default)({
  name: "yebo-gateway",
  level: env.NODE_ENV === "production" ? "info" : "debug",
  ...env.NODE_ENV !== "production" ? { transport: { target: "pino-pretty", options: { colorize: true } } } : {}
});
var metrics = {
  // Request counters
  requests_total: 0,
  requests_by_path: /* @__PURE__ */ new Map(),
  // Execution counters
  executions_total: 0,
  intent_executions_total: 0,
  // /intent/execute calls
  executions_success: 0,
  executions_failed: 0,
  // Authorization counters
  sentinel_blocks_total: 0,
  // total sentinel_block events
  policy_denies_total: 0,
  // policy backend denials
  // Passkey counters
  passkey_registrations: 0,
  passkey_auth_success_total: 0,
  // successful passkey authentications
  passkey_auth_fail_total: 0,
  // failed passkey auth attempts
  // Adapter counters
  stripe_executions_total: 0,
  // Stripe adapter invocations
  // Event-driven pipeline counters (Phase 9)
  authorization_events_total: 0,
  // AuthorizationApproved events emitted
  execution_jobs_total: 0,
  // ExecutionRequested events emitted
  // Session + mode counters (programmable intent authorization)
  sessions_created_total: 0,
  session_executions_instant_total: 0,
  session_executions_threshold_total: 0,
  session_emergency_stops_total: 0,
  policy_authorizations_created_total: 0,
  // Capability kernel preflight counters
  preflight_total: 0,
  preflight_blocks_total: 0,
  preflight_challenges_total: 0,
  // Legacy (kept for backward compat)
  auth_failures: 0,
  server_start: (/* @__PURE__ */ new Date()).toISOString()
};
async function fetchPolicyDecision(params) {
  const baseUrl = env.POLICY_BACKEND_URL;
  if (!baseUrl) {
    return { allowed: true, reason: "no_policy_backend_configured" };
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), env.POLICY_BACKEND_TIMEOUT_MS);
  try {
    const response = await fetch(`${baseUrl}/policy/evaluate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!response.ok) {
      log.warn({ params, status: response.status }, "policy-backend returned non-OK status; denying");
      return { allowed: false, reason: `policy_backend_error:${response.status}` };
    }
    const body = await response.json();
    return {
      allowed: body.allowed ?? false,
      reason: body.reason ?? "policy_evaluated",
      ...body.policy_id ? { policy_id: body.policy_id } : {}
    };
  } catch (err) {
    clearTimeout(timer);
    if (err.name === "AbortError") {
      log.warn({ params }, "policy-backend timed out; applying graceful deny");
      return { allowed: false, reason: "policy_backend_timeout" };
    }
    log.warn({ err }, "policy-backend unreachable; applying graceful deny");
    return { allowed: false, reason: "policy_backend_unreachable" };
  }
}
var VerifySchema = import_zod.z.object({
  pai_token: import_zod.z.string().optional(),
  session_id: import_zod.z.string().uuid().optional(),
  identity_id: import_zod.z.string().min(1).max(256).optional()
}).refine((d) => d.pai_token || d.session_id || d.identity_id, {
  message: "Provide one of: pai_token, session_id, identity_id"
});
var ExecuteSchema = import_zod.z.object({
  token_id: import_zod.z.string().optional(),
  plugin_id: import_zod.z.string().max(128).optional(),
  capability: import_zod.z.string().min(1).max(64),
  payload: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional(),
  type: import_zod.z.enum(["agent", "plugin"]).default("agent")
});
var RegistrationOptionsSchema = import_zod.z.object({
  identity_id: import_zod.z.string().min(1).max(256),
  username: import_zod.z.string().min(1).max(256)
});
var RegistrationVerifySchema = import_zod.z.object({
  identity_id: import_zod.z.string().min(1).max(256),
  response: import_zod.z.object({
    id: import_zod.z.string(),
    rawId: import_zod.z.string(),
    type: import_zod.z.literal("public-key"),
    response: import_zod.z.object({
      clientDataJSON: import_zod.z.string(),
      attestationObject: import_zod.z.string(),
      transports: import_zod.z.array(import_zod.z.string()).optional()
    }),
    clientExtensionResults: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional()
  })
});
var AuthOptionsSchema = import_zod.z.object({
  identity_id: import_zod.z.string().min(1).max(256)
});
var AuthVerifySchema = import_zod.z.object({
  identity_id: import_zod.z.string().min(1).max(256),
  scope: import_zod.z.array(import_zod.z.string()).optional(),
  response: import_zod.z.object({
    id: import_zod.z.string(),
    rawId: import_zod.z.string(),
    type: import_zod.z.literal("public-key"),
    response: import_zod.z.object({
      clientDataJSON: import_zod.z.string(),
      authenticatorData: import_zod.z.string(),
      signature: import_zod.z.string(),
      userHandle: import_zod.z.string().optional()
    }),
    clientExtensionResults: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional()
  })
});
var RegisterPartnerSchema = import_zod.z.object({
  partner_id: import_zod.z.string().min(1).max(128),
  partner_name: import_zod.z.string().min(1).max(256),
  partner_origin: import_zod.z.string().url(),
  allowed_scopes: import_zod.z.array(import_zod.z.string()).optional()
});
var IntentExecuteSchema = import_zod.z.object({
  intent: import_zod.z.string().min(1).max(2048),
  amount: import_zod.z.number().positive().optional(),
  merchant: import_zod.z.string().max(256).optional(),
  asset: import_zod.z.string().max(32).optional(),
  session_token: import_zod.z.string().min(1).max(1024),
  /** Optional — if provided, the intent runs via the session-based execution path */
  authorization_session_id: import_zod.z.string().optional()
});
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        error: "VALIDATION_ERROR",
        message: "Request body validation failed",
        details: result.error.issues
      });
      return;
    }
    req.body = result.data;
    next();
  };
}
function requireDebugAuth(req, res, next) {
  if (env.NODE_ENV === "test") {
    next();
    return;
  }
  const adminToken = env.DEBUG_ADMIN_TOKEN;
  if (!adminToken) {
    res.status(403).json({ error: "DEBUG_ACCESS_DISABLED", message: "Set DEBUG_ADMIN_TOKEN to enable debug routes" });
    return;
  }
  const header = req.header("x-yebo-admin-token") ?? req.header("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : header;
  if (token !== adminToken) {
    res.status(401).json({ error: "UNAUTHORIZED", message: "Debug route requires X-Yebo-Admin-Token" });
    return;
  }
  next();
}
var app = (0, import_express2.default)();
app.use(helmet());
app.use((0, import_cors.default)({ origin: env.NODE_ENV === "production" ? false : "*" }));
app.use(import_express2.default.json({ limit: "256kb" }));
app.use((err, _req, res, next) => {
  if (err.type === "entity.parse.failed" || err.status === 400 && "body" in err) {
    res.status(400).json({ error: "INVALID_JSON", message: "Request body is not valid JSON" });
    return;
  }
  if (err.type === "entity.too.large") {
    res.status(413).json({ error: "BODY_TOO_LARGE", message: "Request body exceeds 256kb limit" });
    return;
  }
  next(err);
});
app.use((req, _res, next) => {
  req.id = (0, import_node_crypto3.randomUUID)();
  req._start = Date.now();
  metrics.requests_total += 1;
  const count = metrics.requests_by_path.get(req.path) ?? 0;
  metrics.requests_by_path.set(req.path, count + 1);
  next();
});
app.use((req, res, next) => {
  res.on("finish", () => {
    log.info({
      request_id: req.id,
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration_ms: Date.now() - req._start,
      ip: req.ip
    }, "request completed");
  });
  next();
});
var globalLimiter = rate_limit_default({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_GLOBAL,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "RATE_LIMITED", message: "Too many requests" }
});
var verifyLimiter = rate_limit_default({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_VERIFY,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const body = req.body;
    return `${ipKeyGenerator(req.ip ?? "unknown")}:${body.identity_id ?? "anonymous"}`;
  },
  message: { error: "RATE_LIMITED_VERIFY", message: "Too many verify attempts from this IP/identity" }
});
var executeLimiter = rate_limit_default({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_EXECUTE,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const auth = req.headers["authorization"];
    return `${ipKeyGenerator(req.ip ?? "unknown")}:${auth ? auth.slice(-8) : "anon"}`;
  },
  message: { error: "RATE_LIMITED_EXECUTE", message: "Too many execute attempts" }
});
app.use(globalLimiter);
app.get("/health", (_req, res) => {
  const chainStatus = (0, import_audit_core4.verifyChainIntegrity)();
  res.json({
    status: "ok",
    service: "yebo-gateway",
    version: "3.0.0",
    port: env.PORT,
    environment: env.NODE_ENV,
    audit_chain_intact: chainStatus === null,
    agents_registered: (0, import_mcp_bridge.listAgents)().length,
    plugins_available: (0, import_plugin_marketplace.listAllPlugins)().length,
    policy_backend: env.POLICY_BACKEND_URL ?? "not_configured",
    passkey_rp_id: env.YEBO_RP_ID,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.post("/verify", verifyLimiter, validate(VerifySchema), async (req, res) => {
  const { pai_token, session_id, identity_id } = req.body;
  const requestId = req.id;
  if (pai_token) {
    const claims = (0, import_authority_proof3.decodePAIToken)(pai_token);
    if (!claims) {
      metrics.auth_failures += 1;
      res.status(401).json({ error: "INVALID_PAI", message: "PAI token could not be decoded" });
      return;
    }
    if (Date.now() / 1e3 > claims.expires) {
      metrics.auth_failures += 1;
      res.status(401).json({ error: "PAI_EXPIRED", message: "PAI token has expired" });
      return;
    }
    const pai = (0, import_authority_proof3.getPAI)(claims.mandate_id);
    if (pai) {
      const verifyResult = (0, import_authority_proof3.verifyPAI)(pai, pai.mandate_hash, claims.policy_hash);
      if (!verifyResult.valid) {
        metrics.auth_failures += 1;
        res.status(403).json({ error: "PAI_INVALID", message: "PAI signature failed", errors: verifyResult.errors });
        return;
      }
    }
    const integrity = (0, import_integrity_score.calculateIntegrityScore)({ identity_id: claims.subject, ingest_from_audit: true });
    const fee = (0, import_economics_core.calculateFee)({ mandate_id: claims.mandate_id, integrity_score: integrity.raw_score });
    (0, import_audit_core4.record)({
      action: "pai_generated",
      actor_id: claims.subject,
      mandate_id: claims.mandate_id,
      decision: "allowed",
      detail: { via: "gateway_verify", request_id: requestId, integrity_score: integrity.score }
    });
    log.info({ request_id: requestId, subject: claims.subject, mandate_id: claims.mandate_id, integrity_score: integrity.score }, "PAI verified");
    res.json({ verified: true, type: "pai", mandate_id: claims.mandate_id, subject: claims.subject, expires_at: new Date(claims.expires * 1e3).toISOString(), integrity, fee_estimate: fee });
    return;
  }
  if (session_id) {
    const session = (0, import_yebo_passkey.validateSession)(session_id);
    if (!session) {
      metrics.auth_failures += 1;
      res.status(401).json({ error: "SESSION_INVALID", message: "Session not found, expired, or inactive" });
      return;
    }
    const integrity = (0, import_integrity_score.calculateIntegrityScore)({ identity_id: session.identity_id, ingest_from_audit: true });
    let credential = null;
    try {
      credential = (0, import_yebo_passkey.issueYeboCredential)({
        identity_id: session.identity_id,
        credential_id: session.credential_id,
        scope: session.scope,
        backed_up: false
      });
    } catch {
    }
    log.info({ request_id: requestId, identity_id: session.identity_id, integrity_score: integrity.score }, "session verified");
    res.json({ verified: true, type: "passkey_session", identity_id: session.identity_id, scope: session.scope, expires_at: session.expires_at, integrity, credential });
    return;
  }
  if (identity_id) {
    const integrity = (0, import_integrity_score.calculateIntegrityScore)({ identity_id, ingest_from_audit: true });
    res.json({ verified: false, identity_id, integrity });
    return;
  }
  res.status(400).json({ error: "MISSING_PARAMS", message: "Provide one of: pai_token, session_id, identity_id" });
});
app.post("/execute", executeLimiter, paiVerifierMiddleware, sentinelCheckMiddleware, validate(ExecuteSchema), async (req, res) => {
  const paiCtx = req.yebo_pai;
  const { token_id, plugin_id, capability, payload, type } = req.body;
  const requestId = req.id;
  const policy = await fetchPolicyDecision({
    identity_id: paiCtx.subject,
    capability,
    ...paiCtx.mandate_id ? { mandate_id: paiCtx.mandate_id } : {}
  });
  if (!policy.allowed) {
    metrics.policy_denies_total += 1;
    metrics.sentinel_blocks_total += 1;
    (0, import_audit_core4.record)({
      action: "sentinel_block",
      actor_id: paiCtx.subject,
      decision: "blocked",
      detail: { reason: policy.reason, capability, request_id: requestId }
    });
    log.warn({ request_id: requestId, identity_id: paiCtx.subject, capability, policy_reason: policy.reason }, "policy denied execution");
    res.status(403).json({ error: "POLICY_DENIED", message: `Execution denied by policy: ${policy.reason}`, policy_id: policy.policy_id });
    return;
  }
  const integrity = (0, import_integrity_score.calculateIntegrityScore)({ identity_id: paiCtx.subject, ingest_from_audit: true });
  metrics.executions_total += 1;
  if (type === "agent" && token_id) {
    const capValidation = (0, import_mcp_bridge.validateCapability)(token_id, capability);
    const executionResult = await (0, import_mcp_bridge.executeAgent)({
      token_id,
      capability,
      ...payload !== void 0 ? { payload } : {}
    });
    const success = executionResult.status === "completed";
    if (success) metrics.executions_success += 1;
    else metrics.executions_failed += 1;
    (0, import_integrity_score.recordSignal)({ identity_id: paiCtx.subject, signal_type: success ? "mandate_authorized" : "sentinel_violation", ...paiCtx.mandate_id ? { mandate_id: paiCtx.mandate_id } : {} });
    log.info({ request_id: requestId, identity_id: paiCtx.subject, execution_id: executionResult.execution_id, status: executionResult.status, duration_ms: executionResult.duration_ms, policy_reason: policy.reason, integrity_score: integrity.score }, "agent execution completed");
    res.json({ pipeline: "agent_execution", request_id: requestId, mandate_id: paiCtx.mandate_id, subject: paiCtx.subject, integrity_score: integrity.score, integrity_tier: integrity.tier, capability_valid: capValidation.valid, policy: { allowed: policy.allowed, reason: policy.reason }, execution: executionResult });
    return;
  }
  if (type === "plugin" && plugin_id) {
    if (!(0, import_plugin_marketplace.isPluginEnabled)(plugin_id, paiCtx.subject)) {
      res.status(403).json({ error: "PLUGIN_NOT_ENABLED", message: `Plugin ${plugin_id} is not enabled for ${paiCtx.subject}` });
      return;
    }
    const pluginResult = await (0, import_plugin_marketplace.executePlugin)({ plugin_id, identity_id: paiCtx.subject, mandate_id: paiCtx.mandate_id, capability, ...payload !== void 0 ? { payload } : {} });
    const success = pluginResult.status === "completed";
    if (success) metrics.executions_success += 1;
    else metrics.executions_failed += 1;
    (0, import_integrity_score.recordSignal)({ identity_id: paiCtx.subject, signal_type: success ? "plugin_compliant" : "sentinel_violation", ...paiCtx.mandate_id ? { mandate_id: paiCtx.mandate_id } : {} });
    log.info({ request_id: requestId, identity_id: paiCtx.subject, plugin_id, status: pluginResult.status, integrity_score: integrity.score }, "plugin execution completed");
    res.json({ pipeline: "plugin_execution", request_id: requestId, mandate_id: paiCtx.mandate_id, subject: paiCtx.subject, integrity_score: integrity.score, integrity_tier: integrity.tier, policy: { allowed: policy.allowed, reason: policy.reason }, execution: pluginResult });
    return;
  }
  (0, import_audit_core4.record)({ action: "sentinel_verified", actor_id: paiCtx.subject, decision: "allowed", detail: { type, capability, request_id: requestId } });
  (0, import_integrity_score.recordSignal)({ identity_id: paiCtx.subject, signal_type: "mandate_authorized", ...paiCtx.mandate_id ? { mandate_id: paiCtx.mandate_id } : {} });
  metrics.executions_success += 1;
  res.json({ pipeline: "authorized", request_id: requestId, mandate_id: paiCtx.mandate_id, subject: paiCtx.subject, integrity_score: integrity.score, integrity_tier: integrity.tier, capability, authorized: true, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
app.post("/intent/execute", executeLimiter, validate(IntentExecuteSchema), async (req, res) => {
  const { intent, amount, merchant, asset, session_token, authorization_session_id } = req.body;
  const requestId = req.id;
  const passkeySession = (0, import_yebo_passkey.validateSession)(session_token);
  if (!passkeySession) {
    metrics.auth_failures += 1;
    res.status(401).json({ error: "SESSION_INVALID", message: "Session not found, expired, or inactive" });
    return;
  }
  const identityId = passkeySession.identity_id;
  let authSession;
  let authorizationMode = "instant";
  if (authorization_session_id) {
    const sessionVerification = (0, import_verification_plane.verifySessionToken)(authorization_session_id);
    if (!sessionVerification.valid || !sessionVerification.session) {
      res.status(401).json({
        error: "AUTHORIZATION_SESSION_INVALID",
        message: `Authorization session is ${sessionVerification.reason ?? "invalid"}`,
        session_id: authorization_session_id,
        reason: sessionVerification.reason
      });
      return;
    }
    authSession = sessionVerification.session;
    if (authSession.subject_identity !== identityId) {
      res.status(403).json({ error: "SESSION_OWNER_MISMATCH", message: "Authorization session belongs to a different identity" });
      return;
    }
    const capabilityMapForMode = {
      pay: "payment",
      payment: "payment",
      send: "payment",
      approve: "approval",
      sign: "contract_sign",
      book: "travel",
      fly: "travel",
      flight: "travel",
      health: "healthcare",
      medical: "healthcare",
      buy: "procurement",
      purchase: "procurement"
    };
    const intentLowerForMode = intent.toLowerCase();
    const capabilityForMode = Object.entries(capabilityMapForMode).find(([k]) => intentLowerForMode.includes(k))?.[1] ?? "payment";
    const integrityForMode = (0, import_integrity_score.calculateIntegrityScore)({ identity_id: identityId, ingest_from_audit: false });
    const modeDecision = (0, import_authorization_modes.evaluateMode)(authSession, {
      capability: capabilityForMode,
      ...merchant !== void 0 ? { merchant } : {},
      ...amount !== void 0 ? { amount } : {},
      integrity_score: integrityForMode.score
    });
    authorizationMode = modeDecision.mode;
    if (modeDecision.mode === "emergency_stop") {
      metrics.session_emergency_stops_total += 1;
      metrics.sentinel_blocks_total += 1;
      (0, import_audit_core4.record)({
        action: "sentinel_block",
        actor_id: identityId,
        decision: "blocked",
        detail: {
          reason: "emergency_stop",
          trigger: modeDecision.emergency_trigger,
          session_id: authorization_session_id,
          request_id: requestId
        }
      });
      bus.publish({
        type: "ThresholdEscalation",
        session_id: authorization_session_id,
        mandate_id: requestId,
        trigger: modeDecision.emergency_trigger ?? "emergency_stop",
        identity_id: identityId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      log.warn({ request_id: requestId, session_id: authorization_session_id, trigger: modeDecision.emergency_trigger }, "emergency_stop triggered");
      res.status(403).json({
        error: "EMERGENCY_STOP",
        message: modeDecision.reason,
        mode: "emergency_stop",
        emergency_trigger: modeDecision.emergency_trigger,
        session_id: authorization_session_id
      });
      return;
    }
    if (modeDecision.mode === "threshold") {
      metrics.session_executions_threshold_total += 1;
      bus.publish({
        type: "ThresholdEscalation",
        session_id: authorization_session_id,
        mandate_id: requestId,
        trigger: modeDecision.threshold_trigger ?? "threshold",
        identity_id: identityId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      log.info({ request_id: requestId, session_id: authorization_session_id, trigger: modeDecision.threshold_trigger }, "threshold step-up required");
      res.status(202).json({
        mode: "threshold",
        step_up_required: true,
        threshold_trigger: modeDecision.threshold_trigger,
        session_id: authorization_session_id,
        message: modeDecision.reason
      });
      return;
    }
    metrics.session_executions_instant_total += 1;
  }
  const orchIdentity = (0, import_identity_kit.createIdentity)({ display_name: `orch:${identityId}` });
  const keyHandle = (0, import_identity_kit._getKeyHandle)(orchIdentity.identity_id);
  const attestationObj = (0, import_identity_kit.generateAttestation)(orchIdentity.device_public_key, orchIdentity.identity_id, (0, import_node_crypto3.randomUUID)());
  const deviceAttestation = Buffer.from(JSON.stringify(attestationObj)).toString("base64url");
  const bioResult = await (0, import_identity_kit.verifyBiometric)({ identity_id: orchIdentity.identity_id, reason: `intent:${intent.slice(0, 64)}` });
  if (!bioResult.verified || !bioResult.presence_proof) {
    res.status(500).json({ error: "BIOMETRIC_PROOF_FAILED", message: "Could not generate presence proof" });
    return;
  }
  const capabilityMap = {
    pay: "payment",
    payment: "payment",
    send: "payment",
    approve: "approval",
    sign: "contract_sign",
    book: "travel",
    fly: "travel",
    flight: "travel",
    health: "healthcare",
    medical: "healthcare",
    buy: "procurement",
    purchase: "procurement"
  };
  const intentLower = intent.toLowerCase();
  const capability = Object.entries(capabilityMap).find(([k]) => intentLower.includes(k))?.[1] ?? "payment";
  const policyHash = `pol:${(0, import_node_crypto3.randomUUID)().replace(/-/g, "")}`;
  let mandate;
  try {
    mandate = (0, import_mandate_core2.createMandate)(
      {
        subject_identity: identityId,
        counterparty_identity: merchant ?? "unknown",
        capability,
        ...amount !== void 0 ? { amount: String(amount) } : {},
        ...asset !== void 0 ? { currency: asset } : {},
        metadata: { intent, source: "ios_intent_execute", request_id: requestId }
      },
      policyHash
    );
  } catch (err) {
    res.status(400).json({ error: "MANDATE_CREATION_FAILED", message: err instanceof Error ? err.message : "Failed" });
    return;
  }
  let pai;
  try {
    pai = await (0, import_authority_proof3.generatePAI)({
      mandate,
      identity_id: identityId,
      identity_public_key: orchIdentity.device_public_key,
      device_attestation: deviceAttestation,
      biometric_presence_proof: bioResult.presence_proof,
      key_handle: keyHandle
    });
  } catch (err) {
    res.status(500).json({ error: "PAI_GENERATION_FAILED", message: err instanceof Error ? err.message : "Failed" });
    return;
  }
  const policy = await fetchPolicyDecision({ identity_id: identityId, capability, mandate_id: mandate.mandate_id });
  if (!policy.allowed) {
    metrics.policy_denies_total += 1;
    metrics.sentinel_blocks_total += 1;
    (0, import_audit_core4.record)({ action: "sentinel_block", actor_id: identityId, mandate_id: mandate.mandate_id, decision: "blocked", detail: { reason: policy.reason, request_id: requestId } });
    (0, import_integrity_score.recordSignal)({ identity_id: identityId, signal_type: "sentinel_violation", mandate_id: mandate.mandate_id });
    log.warn({ request_id: requestId, identity_id: identityId, capability, policy_reason: policy.reason }, "intent/execute policy denied");
    res.status(403).json({ error: "POLICY_DENIED", message: `Execution denied by policy: ${policy.reason}`, policy_id: policy.policy_id });
    return;
  }
  const integrity = (0, import_integrity_score.calculateIntegrityScore)({ identity_id: identityId, ingest_from_audit: false });
  metrics.intent_executions_total += 1;
  metrics.executions_total += 1;
  let debitResult;
  if (authSession && amount !== void 0) {
    debitResult = (0, import_authorization_sessions.debitSession)(authSession.id, amount);
    if (!debitResult.success) {
      metrics.session_emergency_stops_total += 1;
      bus.publish({
        type: "SessionExpired",
        session_id: authSession.id,
        reason: "exhausted",
        identity_id: identityId
      });
      res.status(402).json({
        error: "SESSION_BUDGET_EXHAUSTED",
        message: `Session budget exhausted: ${debitResult.reason}`,
        session_id: authSession.id,
        budget_remaining: debitResult.budget_remaining
      });
      return;
    }
    bus.publish({
      type: "SessionBudgetUpdated",
      session_id: authSession.id,
      mandate_id: mandate.mandate_id,
      cumulative_spent: debitResult.new_cumulative_spent,
      budget_remaining: debitResult.budget_remaining,
      identity_id: identityId
    });
    if (debitResult.session_status === "exhausted") {
      bus.publish({ type: "SessionExpired", session_id: authSession.id, reason: "exhausted", identity_id: identityId });
    }
  }
  const authorizationTimestamp = (/* @__PURE__ */ new Date()).toISOString();
  bus.publish({
    type: "AuthorizationApproved",
    mandate_id: mandate.mandate_id,
    pai_token: pai.pai_token,
    identity_id: identityId,
    policy_hash: policyHash,
    timestamp: authorizationTimestamp,
    mandate,
    pai,
    ...authSession ? { session_id: authSession.id, authorization_mode: authorizationMode } : {}
  });
  bus.publish({
    type: "ExecutionRequested",
    mandate_id: mandate.mandate_id,
    mandate,
    pai,
    policy_hash: policyHash,
    adapter: "stripe",
    identity_id: identityId,
    requested_at: authorizationTimestamp,
    ...authSession ? { session_id: authSession.id, authorization_mode: authorizationMode } : {}
  });
  metrics.authorization_events_total += 1;
  metrics.execution_jobs_total += 1;
  log.info({
    request_id: requestId,
    identity_id: identityId,
    mandate_id: mandate.mandate_id,
    duration_ms: Date.now() - req._start,
    outcome: "authorized_pending_execution",
    authorization_mode: authorizationMode,
    session_id: authSession?.id,
    policy_decision: policy.reason,
    integrity_score: integrity.score
  }, "intent/execute authorization complete \u2014 execution enqueued");
  res.json({
    pipeline: "intent_execute",
    request_id: requestId,
    mandate_id: mandate.mandate_id,
    subject: identityId,
    pai_token: pai.pai_token,
    integrity_score: integrity.score,
    integrity_tier: integrity.tier,
    authorization_status: "AUTHORIZED_PENDING_EXECUTION",
    authorization_mode: authorizationMode,
    timestamp: authorizationTimestamp,
    policy: { allowed: policy.allowed, reason: policy.reason, ...policy.policy_id ? { policy_id: policy.policy_id } : {} },
    ...authSession ? {
      session_id: authSession.id,
      session_budget_remaining: debitResult?.budget_remaining ?? authSession.cumulative_budget_limit - authSession.cumulative_spent
    } : {}
  });
});
app.post("/passkey/register/options", verifyLimiter, validate(RegistrationOptionsSchema), async (req, res) => {
  const { identity_id, username } = req.body;
  try {
    const options = await (0, import_yebo_passkey.getRegistrationOptions)({ identity_id, username });
    res.json(options);
  } catch (err) {
    res.status(400).json({ error: "REGISTRATION_OPTIONS_FAILED", message: err instanceof Error ? err.message : "Failed" });
  }
});
app.post("/passkey/register/verify", verifyLimiter, validate(RegistrationVerifySchema), async (req, res) => {
  const body = req.body;
  const identityId = body.identity_id;
  const responsePayload = body.response;
  try {
    const result = await (0, import_yebo_passkey.verifyRegistration)({ identity_id: identityId, response: responsePayload });
    if (!result.verified) {
      res.status(400).json({ error: "REGISTRATION_FAILED", message: result.error ?? "Registration not verified" });
      return;
    }
    metrics.passkey_registrations += 1;
    log.info({ identity_id: identityId, credential_id: result.credential?.credential_id }, "passkey registered");
    res.json({ registered: true, credential_id: result.credential?.credential_id });
  } catch (err) {
    res.status(400).json({ error: "REGISTRATION_ERROR", message: err instanceof Error ? err.message : "Error" });
  }
});
app.post("/passkey/auth/options", verifyLimiter, validate(AuthOptionsSchema), async (req, res) => {
  const { identity_id } = req.body;
  try {
    const options = await (0, import_yebo_passkey.getAuthenticationOptions)({ identity_id });
    res.json(options);
  } catch (err) {
    res.status(400).json({ error: "AUTH_OPTIONS_FAILED", message: err instanceof Error ? err.message : "Failed" });
  }
});
app.post("/passkey/auth/verify", verifyLimiter, validate(AuthVerifySchema), async (req, res) => {
  const body = req.body;
  const identityId = body.identity_id;
  const responsePayload = body.response;
  try {
    const result = await (0, import_yebo_passkey.verifyAuthentication)({
      identity_id: identityId,
      response: responsePayload,
      ...body.scope ? { scope: body.scope } : {}
    });
    if (!result.verified) {
      metrics.auth_failures += 1;
      metrics.passkey_auth_fail_total += 1;
      (0, import_integrity_score.recordSignal)({ identity_id: identityId, signal_type: "sentinel_violation" });
      res.status(401).json({ error: "AUTH_FAILED", message: result.error ?? "Authentication not verified" });
      return;
    }
    metrics.passkey_auth_success_total += 1;
    (0, import_integrity_score.recordSignal)({ identity_id: identityId, signal_type: "mandate_authorized" });
    (0, import_audit_core4.record)({
      action: "biometric_authorized",
      actor_id: identityId,
      decision: "allowed",
      detail: { session_id: result.session?.session_id }
    });
    log.info({ identity_id: identityId, session_id: result.session?.session_id }, "passkey authenticated");
    res.json({ authenticated: true, session_id: result.session?.session_id, credential: result.credential });
  } catch (err) {
    metrics.passkey_auth_fail_total += 1;
    res.status(400).json({ error: "AUTH_ERROR", message: err instanceof Error ? err.message : "Error" });
  }
});
app.post("/passkey/partner/register", validate(RegisterPartnerSchema), (req, res) => {
  const { partner_id, partner_name, partner_origin, allowed_scopes } = req.body;
  const partner = (0, import_yebo_passkey.registerPartner)({ partner_id, partner_name, partner_origin, ...allowed_scopes ? { allowed_scopes } : {} });
  res.json({ registered: true, partner_id: partner.partner_id });
});
app.get("/plugins", (req, res) => {
  const { category, capability, q, featured } = req.query;
  const results = (0, import_plugin_marketplace.discoverPlugins)({
    ...category ? { category } : {},
    ...capability ? { capability } : {},
    ...q ? { query: q } : {},
    ...featured === "true" ? { featured_only: true } : {}
  });
  const capRegistry = (0, import_plugin_marketplace.getCapabilityRegistry)();
  res.json({
    plugins: results.map((l) => ({
      listing_id: l.listing_id,
      plugin_id: l.plugin_id,
      name: l.manifest.name,
      version: l.manifest.version,
      description: l.manifest.description,
      author: l.manifest.author,
      category: l.category,
      tags: l.tags,
      declared_capabilities: l.manifest.declared_capabilities,
      install_count: l.install_count,
      rating: l.rating,
      featured: l.featured,
      status: l.manifest.status
    })),
    capability_registry: capRegistry.length,
    total: results.length,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.get("/integrity/:identity_id", (req, res) => {
  const { identity_id } = req.params;
  const { ingest } = req.query;
  const score = (0, import_integrity_score.calculateIntegrityScore)({ identity_id, ingest_from_audit: ingest === "true" });
  const rawScore = (0, import_integrity_score.computeScore)(identity_id);
  res.json({ identity_id, score: score.score, raw_score: score.raw_score, tier: score.tier, signal_count: score.signal_count, friction_reduction_enabled: score.friction_reduction_enabled, applicable_friction_rules: score.applicable_friction_rules, fee_schedule: { tier: rawScore.tier, note: "See @yebo/economics-core for per-mandate fee" }, computed_at: score.computed_at });
});
var preflightSchema = import_zod.z.object({
  session_token: import_zod.z.string().min(1),
  agent_id: import_zod.z.string().min(1),
  capability: import_zod.z.string().min(1),
  amount: import_zod.z.number().optional(),
  merchant: import_zod.z.string().optional(),
  asset: import_zod.z.string().optional(),
  intent: import_zod.z.string().optional(),
  authorization_session_id: import_zod.z.string().optional(),
  metadata: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional()
});
app.post("/preflight", async (req, res) => {
  metrics.preflight_total += 1;
  const parsed = preflightSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.issues });
  }
  const { session_token, agent_id, capability, amount, merchant, asset, intent, authorization_session_id, metadata } = parsed.data;
  const sessionCheck = (0, import_verification_plane.verifySessionToken)(session_token);
  if (!sessionCheck.valid) {
    return res.status(401).json({ error: "SESSION_INVALID", message: "Valid passkey session required for preflight" });
  }
  const decision = (0, import_verification_plane.verifyPreflight)({
    agentId: agent_id,
    capability,
    ...amount !== void 0 ? { amount } : {},
    ...merchant !== void 0 ? { merchant } : {},
    ...authorization_session_id !== void 0 ? { sessionId: authorization_session_id } : {},
    ...metadata !== void 0 ? { metadata } : {}
  });
  if (decision.decision === "block") {
    metrics.preflight_blocks_total += 1;
  } else if (decision.decision === "challenge") {
    metrics.preflight_challenges_total += 1;
    if (decision.challengeId) {
      const now = /* @__PURE__ */ new Date();
      const CHALLENGE_TTL_MS = 15 * 60 * 1e3;
      const authorizedBy = sessionCheck.session?.subject_identity ?? agent_id;
      const derivedIntent = intent ?? `${capability}: ${merchant ?? "unspecified"} ${amount ?? 0}`;
      const derivedPolicyHash = `pol:${(0, import_node_crypto3.randomUUID)().replace(/-/g, "")}`;
      (0, import_continuation_token.saveChallengeContext)({
        challenge_id: decision.challengeId,
        mandate_id: `AP2-${(0, import_node_crypto3.randomUUID)()}`,
        authorized_by: authorizedBy,
        agent_id,
        capability,
        merchant: merchant ?? "unspecified",
        asset: asset ?? "USD",
        amount: amount ?? 0,
        policy_hash: derivedPolicyHash,
        session_id: authorization_session_id,
        intent: derivedIntent,
        status: "pending",
        created_at: now.toISOString(),
        expires_at: new Date(now.getTime() + CHALLENGE_TTL_MS).toISOString()
      });
      (0, import_audit_core4.record)({
        action: "challenge_created",
        actor_id: authorizedBy,
        decision: "pending",
        detail: {
          challenge_id: decision.challengeId,
          agent_id,
          capability,
          reason: decision.reason
        }
      });
    }
  }
  log.info({
    agent_id,
    capability,
    decision: decision.decision,
    mode: decision.mode,
    action_class: decision.actionClass,
    ...decision.challengeId ? { challenge_id: decision.challengeId } : {}
  }, "preflight evaluated");
  return res.status(200).json(decision);
});
var challengeApproveSchema = import_zod.z.object({
  session_token: import_zod.z.string().min(1)
});
app.post("/challenge/:challenge_id/approve", async (req, res) => {
  const { challenge_id } = req.params;
  const parsed = challengeApproveSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.issues });
  }
  const { session_token } = parsed.data;
  const sessionCheck = (0, import_verification_plane.verifySessionToken)(session_token);
  if (!sessionCheck.valid) {
    return res.status(401).json({ error: "SESSION_INVALID", message: "Valid passkey session required" });
  }
  const context = (0, import_continuation_token.getChallengeContext)(challenge_id);
  if (!context) {
    return res.status(404).json({ error: "CHALLENGE_NOT_FOUND", message: `No challenge found with id: ${challenge_id}` });
  }
  if (context.status === "approved") {
    return res.status(409).json({ error: "CHALLENGE_ALREADY_APPROVED", message: "This challenge has already been approved", challenge_id });
  }
  if (/* @__PURE__ */ new Date() > new Date(context.expires_at)) {
    (0, import_continuation_token.markChallengeExpired)(challenge_id);
    const identityId = sessionCheck.session?.subject_identity ?? "unknown";
    (0, import_audit_core4.record)({
      action: "challenge_expired",
      actor_id: identityId,
      decision: "blocked",
      detail: { challenge_id, agent_id: context.agent_id, mandate_id: context.mandate_id }
    });
    return res.status(410).json({ error: "CHALLENGE_EXPIRED", message: `Challenge expired at ${context.expires_at}`, challenge_id });
  }
  const token = (0, import_continuation_token.signContinuationToken)(context);
  (0, import_continuation_token.markChallengeApproved)(challenge_id);
  const approvedBy = sessionCheck.session?.subject_identity ?? context.authorized_by;
  (0, import_audit_core4.record)({
    action: "challenge_approved",
    actor_id: approvedBy,
    mandate_id: context.mandate_id,
    decision: "allowed",
    detail: {
      challenge_id,
      agent_id: context.agent_id,
      token_id: token.token_id,
      expires_at: token.expires_at
    }
  });
  log.info({ challenge_id, agent_id: context.agent_id, token_id: token.token_id }, "challenge approved \u2014 continuation token issued");
  return res.status(200).json(token);
});
var intentContinueSchema = import_zod.z.object({
  continuation_token: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown())
});
app.post("/intent/continue", async (req, res) => {
  const parsed = intentContinueSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.issues });
  }
  const rawToken = parsed.data.continuation_token;
  const verification = (0, import_continuation_token.verifyContinuationToken)(rawToken);
  if (!verification.valid) {
    return res.status(400).json({
      error: "CONTINUATION_TOKEN_INVALID",
      message: "Continuation token failed verification",
      checks: verification.checks,
      errors: verification.errors
    });
  }
  const token = rawToken;
  const requestId = req.id;
  const orchIdentity = (0, import_identity_kit.createIdentity)({ display_name: `orch:cont:${token.agent_id}` });
  const keyHandle = (0, import_identity_kit._getKeyHandle)(orchIdentity.identity_id);
  const attestationObj = (0, import_identity_kit.generateAttestation)(orchIdentity.device_public_key, orchIdentity.identity_id, (0, import_node_crypto3.randomUUID)());
  const deviceAttestation = Buffer.from(JSON.stringify(attestationObj)).toString("base64url");
  const bioResult = await (0, import_identity_kit.verifyBiometric)({ identity_id: orchIdentity.identity_id, reason: `continuation:${token.capability}` });
  if (!bioResult.verified || !bioResult.presence_proof) {
    return res.status(500).json({ error: "BIOMETRIC_PROOF_FAILED", message: "Could not generate presence proof for continuation" });
  }
  let mandate;
  try {
    mandate = (0, import_mandate_core2.createMandate)(
      {
        subject_identity: token.authorized_by,
        counterparty_identity: token.merchant,
        capability: token.capability,
        ...token.amount > 0 ? { amount: String(token.amount) } : {},
        ...token.asset ? { currency: token.asset } : {},
        metadata: {
          intent: `continuation:${token.capability}:${token.merchant}`,
          source: "intent_continue",
          challenge_id: token.challenge_id,
          token_id: token.token_id,
          request_id: requestId
        }
      },
      token.policy_hash
    );
  } catch (err) {
    return res.status(400).json({ error: "MANDATE_CREATION_FAILED", message: err instanceof Error ? err.message : "Failed" });
  }
  let pai;
  try {
    pai = await (0, import_authority_proof3.generatePAI)({
      mandate,
      identity_id: token.authorized_by,
      identity_public_key: orchIdentity.device_public_key,
      device_attestation: deviceAttestation,
      biometric_presence_proof: bioResult.presence_proof,
      key_handle: keyHandle
    });
  } catch (err) {
    return res.status(500).json({ error: "PAI_GENERATION_FAILED", message: err instanceof Error ? err.message : "Failed" });
  }
  const policy = await fetchPolicyDecision({ identity_id: token.authorized_by, capability: token.capability, mandate_id: mandate.mandate_id });
  if (!policy.allowed) {
    metrics.policy_denies_total += 1;
    (0, import_audit_core4.record)({ action: "sentinel_block", actor_id: token.authorized_by, mandate_id: mandate.mandate_id, decision: "blocked", detail: { reason: policy.reason, request_id: requestId } });
    return res.status(403).json({ error: "POLICY_DENIED", message: `Execution denied by policy: ${policy.reason}`, policy_id: policy.policy_id });
  }
  const integrity = (0, import_integrity_score.calculateIntegrityScore)({ identity_id: token.authorized_by, ingest_from_audit: false });
  metrics.intent_executions_total += 1;
  metrics.executions_total += 1;
  const authorizationTimestamp = (/* @__PURE__ */ new Date()).toISOString();
  bus.publish({
    type: "AuthorizationApproved",
    mandate_id: mandate.mandate_id,
    pai_token: pai.pai_token,
    identity_id: token.authorized_by,
    policy_hash: token.policy_hash,
    timestamp: authorizationTimestamp,
    mandate,
    pai
  });
  bus.publish({
    type: "ExecutionRequested",
    mandate_id: mandate.mandate_id,
    mandate,
    pai,
    policy_hash: token.policy_hash,
    adapter: "stripe",
    identity_id: token.authorized_by,
    requested_at: authorizationTimestamp
  });
  metrics.authorization_events_total += 1;
  metrics.execution_jobs_total += 1;
  (0, import_audit_core4.record)({
    action: "continuation_executed",
    actor_id: token.authorized_by,
    mandate_id: mandate.mandate_id,
    decision: "allowed",
    detail: {
      challenge_id: token.challenge_id,
      agent_id: token.agent_id,
      token_id: token.token_id,
      capability: token.capability,
      request_id: requestId
    }
  });
  log.info({
    request_id: requestId,
    challenge_id: token.challenge_id,
    token_id: token.token_id,
    agent_id: token.agent_id,
    mandate_id: mandate.mandate_id,
    outcome: "continuation_authorized"
  }, "intent/continue authorization complete \u2014 execution enqueued");
  return res.json({
    pipeline: "intent_continue",
    request_id: requestId,
    mandate_id: mandate.mandate_id,
    challenge_id: token.challenge_id,
    token_id: token.token_id,
    subject: token.authorized_by,
    agent_id: token.agent_id,
    pai_token: pai.pai_token,
    integrity_score: integrity.score,
    integrity_tier: integrity.tier,
    authorization_status: "AUTHORIZED_PENDING_EXECUTION",
    timestamp: authorizationTimestamp,
    policy: { allowed: policy.allowed, reason: policy.reason, ...policy.policy_id ? { policy_id: policy.policy_id } : {} }
  });
});
app.get("/metrics", (_req, res) => {
  const pathCounts = {};
  for (const [path, count] of metrics.requests_by_path) {
    pathCounts[path] = count;
  }
  const uptimeMs = Date.now() - new Date(metrics.server_start).getTime();
  res.json({
    // ── Required metric names (Phases 17) ──────────────────────────────────
    gateway_uptime_seconds: Math.floor(uptimeMs / 1e3),
    intent_executions_total: metrics.intent_executions_total,
    sentinel_blocks_total: metrics.sentinel_blocks_total,
    policy_denies_total: metrics.policy_denies_total,
    passkey_auth_success_total: metrics.passkey_auth_success_total,
    passkey_auth_fail_total: metrics.passkey_auth_fail_total,
    stripe_executions_total: metrics.stripe_executions_total,
    // ── Event-driven pipeline metrics (Phase 9) ────────────────────────────
    authorization_events_total: metrics.authorization_events_total,
    execution_jobs_total: metrics.execution_jobs_total,
    execution_success_total: (0, import_execution_worker.executionWorkerStats)().success_total,
    execution_failure_total: (0, import_execution_worker.executionWorkerStats)().failure_total,
    event_queue_depth: bus.stats().published,
    worker_latency_ms: (0, import_execution_worker.executionWorkerStats)().last_latency_ms,
    // ── Session + programmable intent authorization metrics ─────────────────
    sessions_created_total: metrics.sessions_created_total,
    session_executions_instant_total: metrics.session_executions_instant_total,
    session_executions_threshold_total: metrics.session_executions_threshold_total,
    session_emergency_stops_total: metrics.session_emergency_stops_total,
    policy_authorizations_created_total: metrics.policy_authorizations_created_total,
    // ── Capability kernel preflight metrics ────────────────────────────────
    preflight_total: metrics.preflight_total,
    preflight_blocks_total: metrics.preflight_blocks_total,
    preflight_challenges_total: metrics.preflight_challenges_total,
    // ── Extended metrics ───────────────────────────────────────────────────
    requests_total: metrics.requests_total,
    executions_total: metrics.executions_total,
    executions_success: metrics.executions_success,
    executions_failed: metrics.executions_failed,
    passkey_registrations: metrics.passkey_registrations,
    requests_by_path: pathCounts,
    // ── Derived ────────────────────────────────────────────────────────────
    uptime_ms: uptimeMs,
    server_start: metrics.server_start,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.get("/debug/executions/recent", requireDebugAuth, (_req, res) => {
  const executions = (0, import_mcp_bridge.listRecentExecutions)(50);
  res.json({
    executions,
    count: executions.length,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.use("/webhooks", webhookRouter);
app.use("/api", paiVerifierMiddleware, sentinelCheckMiddleware, interceptorMiddleware, (req, res) => {
  const paiCtx = req.yebo_pai;
  res.json({ forwarded: true, mandate_id: paiCtx?.mandate_id, path: req.path, method: req.method, message: "Authorized \u2014 would proxy to upstream in production" });
});
app.get("/receipts/:mandate_id", (req, res) => {
  const mandateId = req.params["mandate_id"];
  const receipt = (0, import_receipt_builder.getBuiltReceipt)(mandateId);
  if (!receipt) {
    res.status(202).json({
      status: "PENDING",
      mandate_id: mandateId,
      message: "Execution in progress \u2014 retry in 1s"
    });
    return;
  }
  res.json({
    pipeline: "intent_execute",
    mandate_id: receipt.mandate_id,
    receipt_id: receipt.receipt_id,
    pai_token: receipt.pai_token,
    adapter: receipt.adapter,
    execution_status: receipt.execution_status,
    ...receipt.external_reference !== void 0 ? { external_reference: receipt.external_reference } : {},
    ...receipt.amount_processed !== void 0 ? { amount_processed: receipt.amount_processed } : {},
    ...receipt.currency !== void 0 ? { currency: receipt.currency } : {},
    identity_id: receipt.identity_id,
    authorization_timestamp: receipt.authorization_timestamp,
    execution_timestamp: receipt.execution_timestamp,
    ...receipt.error !== void 0 ? { error: receipt.error } : {}
  });
});
app.get("/authorization-receipt/:mandate_id", (req, res) => {
  const mandateId = req.params["mandate_id"];
  if (!mandateId) {
    res.status(400).json({ error: "MISSING_MANDATE_ID" });
    return;
  }
  const car = (0, import_authorization_receipt.getStoredReceipt)(mandateId);
  if (!car) {
    const executionReceipt = (0, import_receipt_builder.getBuiltReceipt)(mandateId);
    if (!executionReceipt) {
      res.status(202).json({
        status: "PENDING",
        mandate_id: mandateId,
        message: "Execution in progress \u2014 CAR will be available once execution completes"
      });
      return;
    }
    res.status(404).json({
      error: "RECEIPT_NOT_FOUND",
      message: "Authorization receipt not found for this mandate",
      mandate_id: mandateId
    });
    return;
  }
  res.status(200).json(car);
});
app.post("/authorization-receipt/verify", (req, res) => {
  const receipt = req.body;
  if (!receipt || typeof receipt !== "object") {
    res.status(400).json({ error: "INVALID_BODY", message: "Request body must be an AuthorizationReceipt JSON object" });
    return;
  }
  const result = (0, import_authorization_receipt.verifyReceipt)(receipt, { verifyMandateHash: true });
  res.status(200).json(result);
});
app.get("/authorization-receipt/keys", (_req, res) => {
  const keys = (0, import_authorization_receipt.getAllPublicKeyInfos)();
  res.status(200).json({ keys });
});
app.get("/authorization-receipt/public-key/:key_id", (req, res) => {
  const keyId = req.params["key_id"];
  if (!keyId) {
    res.status(400).json({ error: "MISSING_KEY_ID" });
    return;
  }
  const record5 = (0, import_authorization_receipt.getKeyById)(keyId);
  if (!record5) {
    res.status(404).json({ error: "KEY_NOT_FOUND", key_id: keyId });
    return;
  }
  res.status(200).json((0, import_authorization_receipt.toPublicKeyInfo)(record5));
});
app.post("/authorization-receipt/keys/rotate", (req, res) => {
  const { session_token } = req.body;
  if (!session_token) {
    res.status(401).json({ error: "SESSION_REQUIRED", message: "Passkey session required to rotate signing keys" });
    return;
  }
  const passkeySession = (0, import_yebo_passkey.validateSession)(session_token);
  if (!passkeySession) {
    res.status(401).json({ error: "SESSION_INVALID" });
    return;
  }
  const result = (0, import_authorization_receipt.rotateSigningKey)();
  res.status(200).json(result);
});
var DisputeSchema = import_zod.z.object({
  dispute_id: import_zod.z.string().min(1),
  dispute_reason: import_zod.z.string().min(1),
  reversal_reference: import_zod.z.string().optional()
});
app.post("/authorization-receipt/:mandate_id/dispute", validate(DisputeSchema), (req, res) => {
  const mandateId = req.params["mandate_id"];
  if (!mandateId) {
    res.status(400).json({ error: "MISSING_MANDATE_ID" });
    return;
  }
  const body = req.body;
  const params = {
    dispute_id: body.dispute_id,
    dispute_reason: body.dispute_reason,
    ...body.reversal_reference !== void 0 ? { reversal_reference: body.reversal_reference } : {}
  };
  try {
    const disputeRecord = (0, import_authorization_receipt.createDisputeLink)(mandateId, params);
    res.status(201).json(disputeRecord);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("no stored receipt found")) {
      res.status(404).json({ error: "RECEIPT_NOT_FOUND", message });
    } else {
      res.status(500).json({ error: "DISPUTE_CREATION_FAILED", message });
    }
  }
});
app.get("/authorization-receipt/:mandate_id/dispute", (req, res) => {
  const mandateId = req.params["mandate_id"];
  if (!mandateId) {
    res.status(400).json({ error: "MISSING_MANDATE_ID" });
    return;
  }
  const disputeRecord = (0, import_authorization_receipt.getDisputeLink)(mandateId);
  if (!disputeRecord) {
    res.status(404).json({ error: "DISPUTE_NOT_FOUND", mandate_id: mandateId });
    return;
  }
  res.status(200).json(disputeRecord);
});
app.get("/authorization-receipt/export", (req, res) => {
  const { session_token, format, date_from, date_to, merchant, agent_id, policy_hash, integrity_tier } = req.query;
  if (!session_token) {
    res.status(401).json({ error: "SESSION_REQUIRED", message: "Passkey session required to export receipts" });
    return;
  }
  const passkeySession = (0, import_yebo_passkey.validateSession)(session_token);
  if (!passkeySession) {
    res.status(401).json({ error: "SESSION_INVALID" });
    return;
  }
  const filter = {
    ...date_from !== void 0 ? { date_from } : {},
    ...date_to !== void 0 ? { date_to } : {},
    ...merchant !== void 0 ? { merchant } : {},
    ...agent_id !== void 0 ? { agent_id } : {},
    ...policy_hash !== void 0 ? { policy_hash } : {},
    ...integrity_tier !== void 0 ? { integrity_tier } : {}
  };
  const fmt = format ?? "json";
  if (fmt === "ndjson") {
    res.setHeader("Content-Type", "application/x-ndjson");
    res.status(200).send((0, import_authorization_receipt.exportAsNDJSON)(filter));
  } else if (fmt === "csv") {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="authorization-receipts.csv"');
    res.status(200).send((0, import_authorization_receipt.exportAsCSV)(filter));
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send((0, import_authorization_receipt.exportAsJSON)(filter));
  }
});
app.get("/authorization-receipt/:mandate_id/partner", (req, res) => {
  const mandateId = req.params["mandate_id"];
  if (!mandateId) {
    res.status(400).json({ error: "MISSING_MANDATE_ID" });
    return;
  }
  const car = (0, import_authorization_receipt.getStoredReceipt)(mandateId);
  if (!car) {
    res.status(404).json({ error: "RECEIPT_NOT_FOUND", mandate_id: mandateId });
    return;
  }
  const partnerView = (0, import_authorization_receipt.toPartnerView)(car);
  res.status(200).json(partnerView);
});
app.get("/authorization-receipt/:mandate_id/bundle", (req, res) => {
  const mandateId = req.params["mandate_id"];
  if (!mandateId) {
    res.status(400).json({ error: "MISSING_MANDATE_ID" });
    return;
  }
  try {
    const bundle = (0, import_authorization_receipt.buildBundle)(mandateId, { includePartnerView: true, includeMandate: true });
    res.status(200).json(bundle);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes("no stored receipt found")) {
      res.status(404).json({ error: "RECEIPT_NOT_FOUND", mandate_id: mandateId });
    } else {
      res.status(500).json({ error: "BUNDLE_BUILD_FAILED", details: msg });
    }
  }
});
app.post("/authorization-receipt/verify-bundle", (req, res) => {
  const bundle = req.body;
  if (!bundle || typeof bundle !== "object") {
    res.status(400).json({ error: "INVALID_BUNDLE", message: "Request body must be a VerificationBundle JSON object" });
    return;
  }
  const result = (0, import_authorization_receipt.verifyBundle)(bundle);
  const status = result.valid ? 200 : 400;
  res.status(status).json(result);
});
app.get("/authorization-receipt/:mandate_id/auditor", (req, res) => {
  const mandateId = req.params["mandate_id"];
  if (!mandateId) {
    res.status(400).json({ error: "MISSING_MANDATE_ID" });
    return;
  }
  const car = (0, import_authorization_receipt.getStoredReceipt)(mandateId);
  if (!car) {
    res.status(404).json({ error: "RECEIPT_NOT_FOUND", mandate_id: mandateId });
    return;
  }
  const auditorView = (0, import_authorization_receipt.toAuditorView)(car);
  res.status(200).json(auditorView);
});
app.get("/authorization-receipt/:mandate_id/auditor", (req, res) => {
  const mandateId = req.params["mandate_id"];
  if (!mandateId) {
    res.status(400).json({ error: "MISSING_MANDATE_ID" });
    return;
  }
  const car = (0, import_authorization_receipt.getStoredReceipt)(mandateId);
  if (!car) {
    res.status(404).json({ error: "RECEIPT_NOT_FOUND", mandate_id: mandateId });
    return;
  }
  const auditorView = (0, import_authorization_receipt.toAuditorView)(car);
  res.status(200).json(auditorView);
});
var WebhookConfigSchema = import_zod.z.object({
  session_token: import_zod.z.string().min(1),
  enterprise_id: import_zod.z.string().min(1),
  webhook_url: import_zod.z.string().url(),
  signing_secret: import_zod.z.string().min(16),
  retry_count: import_zod.z.number().int().min(1).max(10).default(3),
  enabled_events: import_zod.z.array(import_zod.z.literal("ReceiptGenerated")).default(["ReceiptGenerated"])
});
app.post("/webhook-configs", validate(WebhookConfigSchema), (req, res) => {
  const body = req.body;
  const passkeySession = (0, import_yebo_passkey.validateSession)(body.session_token);
  if (!passkeySession) {
    res.status(401).json({ error: "SESSION_INVALID" });
    return;
  }
  try {
    const { saveWebhookConfig } = require("@yebo/receipt-webhook-dispatcher");
    const config = {
      config_id: `wh-${(0, import_node_crypto3.randomUUID)()}`,
      enterprise_id: body.enterprise_id,
      webhook_url: body.webhook_url,
      signing_secret: body.signing_secret,
      retry_count: body.retry_count ?? 3,
      enabled_events: body.enabled_events ?? ["ReceiptGenerated"],
      active: true
    };
    saveWebhookConfig(config);
    res.status(201).json({ config_id: config.config_id, enterprise_id: config.enterprise_id, webhook_url: config.webhook_url });
  } catch (err) {
    res.status(500).json({ error: "WEBHOOK_CONFIG_FAILED", message: err instanceof Error ? err.message : String(err) });
  }
});
app.get("/webhook-configs/:config_id", (req, res) => {
  const configId = req.params["config_id"];
  try {
    const { getWebhookConfig } = require("@yebo/receipt-webhook-dispatcher");
    const config = getWebhookConfig(configId ?? "");
    if (!config) {
      res.status(404).json({ error: "WEBHOOK_CONFIG_NOT_FOUND", config_id: configId });
      return;
    }
    const { config_id, enterprise_id, webhook_url, active } = config;
    res.status(200).json({ config_id, enterprise_id, webhook_url, active });
  } catch (err) {
    res.status(500).json({ error: "WEBHOOK_CONFIG_FETCH_FAILED", message: err instanceof Error ? err.message : String(err) });
  }
});
app.delete("/webhook-configs/:config_id", (req, res) => {
  const configId = req.params["config_id"];
  try {
    const { deleteWebhookConfig } = require("@yebo/receipt-webhook-dispatcher");
    const deleted = deleteWebhookConfig(configId ?? "");
    if (!deleted) {
      res.status(404).json({ error: "WEBHOOK_CONFIG_NOT_FOUND", config_id: configId });
      return;
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "WEBHOOK_CONFIG_DELETE_FAILED", message: err instanceof Error ? err.message : String(err) });
  }
});
var PolicyAuthorizeSchema = import_zod.z.object({
  session_token: import_zod.z.string().min(1),
  agent_identity: import_zod.z.string().min(1),
  allowed_capabilities: import_zod.z.array(import_zod.z.string()).min(1),
  allowed_merchants: import_zod.z.array(import_zod.z.string()).optional(),
  allowed_asset_types: import_zod.z.array(import_zod.z.string()).optional(),
  per_transaction_limit: import_zod.z.number().positive(),
  cumulative_budget_limit: import_zod.z.number().positive(),
  session_duration_minutes: import_zod.z.number().int().positive().max(1440)
  // max 24h
});
app.post("/policy/authorize", executeLimiter, validate(PolicyAuthorizeSchema), async (req, res) => {
  const body = req.body;
  const passkeySession = (0, import_yebo_passkey.validateSession)(body.session_token);
  if (!passkeySession) {
    res.status(401).json({ error: "SESSION_INVALID", message: "Valid passkey session required to create policy authorization" });
    return;
  }
  try {
    const policyAuth = (0, import_authorization_sessions.issuePolicy)({
      subject_identity: passkeySession.identity_id,
      agent_identity: body.agent_identity,
      allowed_capabilities: body.allowed_capabilities,
      ...body.allowed_merchants !== void 0 ? { allowed_merchants: body.allowed_merchants } : {},
      ...body.allowed_asset_types !== void 0 ? { allowed_asset_types: body.allowed_asset_types } : {},
      per_transaction_limit: body.per_transaction_limit,
      cumulative_budget_limit: body.cumulative_budget_limit,
      session_duration_minutes: body.session_duration_minutes,
      biometric_proof_id: body.session_token
      // session token links to biometric event
    });
    metrics.policy_authorizations_created_total += 1;
    (0, import_audit_core4.record)({
      action: "sentinel_verified",
      actor_id: passkeySession.identity_id,
      decision: "allowed",
      detail: {
        event: "policy_authorization_created",
        policy_authorization_id: policyAuth.id,
        agent_identity: body.agent_identity,
        capabilities: body.allowed_capabilities,
        budget: body.cumulative_budget_limit
      }
    });
    log.info({ identity_id: passkeySession.identity_id, policy_authorization_id: policyAuth.id }, "policy authorization created");
    res.json({
      policy_authorization_id: policyAuth.id,
      subject_identity: policyAuth.subject_identity,
      agent_identity: policyAuth.agent_identity,
      allowed_capabilities: policyAuth.allowed_capabilities,
      allowed_merchants: policyAuth.allowed_merchants,
      per_transaction_limit: policyAuth.per_transaction_limit,
      cumulative_budget_limit: policyAuth.cumulative_budget_limit,
      session_duration_seconds: policyAuth.session_duration_seconds,
      policy_hash: policyAuth.policy_hash,
      expires_at: policyAuth.expires_at,
      created_at: policyAuth.created_at
    });
  } catch (err) {
    log.error({ err }, "policy authorization creation failed");
    res.status(400).json({ error: "POLICY_AUTHORIZE_FAILED", message: err instanceof Error ? err.message : "Failed" });
  }
});
var SessionCreateSchema = import_zod.z.object({
  policy_authorization_id: import_zod.z.string().min(1),
  session_token: import_zod.z.string().min(1),
  agent_identity: import_zod.z.string().min(1)
});
app.post("/sessions/create", executeLimiter, validate(SessionCreateSchema), async (req, res) => {
  const body = req.body;
  const passkeySession = (0, import_yebo_passkey.validateSession)(body.session_token);
  if (!passkeySession) {
    res.status(401).json({ error: "SESSION_INVALID", message: "Valid passkey session required" });
    return;
  }
  const policyAuth = (0, import_authorization_sessions.getPolicyAuthorization)(body.policy_authorization_id);
  if (!policyAuth) {
    res.status(404).json({ error: "POLICY_NOT_FOUND", message: `Policy authorization ${body.policy_authorization_id} not found` });
    return;
  }
  if (policyAuth.subject_identity !== passkeySession.identity_id) {
    res.status(403).json({ error: "POLICY_OWNER_MISMATCH", message: "Policy authorization belongs to a different identity" });
    return;
  }
  try {
    const integrity = (0, import_integrity_score.calculateIntegrityScore)({ identity_id: passkeySession.identity_id, ingest_from_audit: false });
    const session = (0, import_authorization_sessions.issueSession)({
      policy_authorization: policyAuth,
      agent_identity: body.agent_identity,
      integrity_tier: integrity.tier
    });
    metrics.sessions_created_total += 1;
    bus.publish({
      type: "SessionCreated",
      session_id: session.id,
      subject_identity: session.subject_identity,
      agent_identity: session.agent_identity,
      budget_limit: session.cumulative_budget_limit,
      expires_at: session.expires_at,
      policy_authorization_id: session.policy_authorization_id
    });
    log.info({ session_id: session.id, agent_identity: body.agent_identity }, "authorization session created");
    res.json({
      session_id: session.id,
      subject_identity: session.subject_identity,
      agent_identity: session.agent_identity,
      merchant_scope: session.merchant_scope,
      capability_scope: session.capability_scope,
      max_transaction_amount: session.max_transaction_amount,
      cumulative_budget_limit: session.cumulative_budget_limit,
      cumulative_spent: session.cumulative_spent,
      budget_remaining: session.cumulative_budget_limit,
      issued_at: session.issued_at,
      expires_at: session.expires_at,
      status: session.status
    });
  } catch (err) {
    log.error({ err }, "session creation failed");
    res.status(400).json({ error: "SESSION_CREATE_FAILED", message: err instanceof Error ? err.message : "Failed" });
  }
});
app.post("/sessions/verify", validate(import_zod.z.object({ session_id: import_zod.z.string().min(1) })), (req, res) => {
  const { session_id } = req.body;
  const result = (0, import_authorization_sessions.verifySession)(session_id);
  res.status(result.valid ? 200 : 200).json({
    valid: result.valid,
    status: result.session?.status ?? "not_found",
    reason: result.reason,
    cumulative_spent: result.session?.cumulative_spent ?? 0,
    budget_remaining: result.budget_remaining ?? 0,
    seconds_remaining: result.seconds_remaining ?? 0,
    expires_at: result.session?.expires_at
  });
});
app.get("/sessions/:session_id", (req, res) => {
  const session = (0, import_authorization_sessions.findSession)(req.params["session_id"] ?? "");
  if (!session) {
    res.status(404).json({ error: "SESSION_NOT_FOUND", message: "Session not found" });
    return;
  }
  const sRemaining = (0, import_authorization_sessions.secondsRemaining)(session);
  const bRemaining = (0, import_authorization_sessions.getBudgetRemaining)(session.id);
  res.json({
    session_id: session.id,
    subject_identity: session.subject_identity,
    agent_identity: session.agent_identity,
    merchant_scope: session.merchant_scope,
    capability_scope: session.capability_scope,
    max_transaction_amount: session.max_transaction_amount,
    cumulative_budget_limit: session.cumulative_budget_limit,
    cumulative_spent: session.cumulative_spent,
    budget_remaining: bRemaining,
    seconds_remaining: sRemaining,
    issued_at: session.issued_at,
    expires_at: session.expires_at,
    status: session.status,
    integrity_tier: session.integrity_tier,
    policy_authorization_id: session.policy_authorization_id,
    policy_hash: session.policy_hash
  });
});
app.delete("/sessions/:session_id", validate(import_zod.z.object({ session_token: import_zod.z.string().min(1) })), (req, res) => {
  const passkeySession = (0, import_yebo_passkey.validateSession)(req.body.session_token ?? "");
  if (!passkeySession) {
    res.status(401).json({ error: "SESSION_INVALID", message: "Valid passkey session required to revoke" });
    return;
  }
  const session = (0, import_authorization_sessions.findSession)(req.params["session_id"] ?? "");
  if (!session) {
    res.status(404).json({ error: "SESSION_NOT_FOUND", message: "Session not found" });
    return;
  }
  if (session.subject_identity !== passkeySession.identity_id) {
    res.status(403).json({ error: "NOT_SESSION_OWNER", message: "Only the authorizing identity may revoke this session" });
    return;
  }
  const revoked = (0, import_authorization_sessions.revokeSession)(session, "user_initiated");
  bus.publish({ type: "SessionExpired", session_id: revoked.id, reason: "revoked", identity_id: revoked.subject_identity });
  res.json({ revoked: true, session_id: revoked.id });
});
app.get("/mandate/:mandate_id/audit", paiVerifierMiddleware, (req, res) => {
  const events = (0, import_audit_core4.query)({ mandate_id: req.params["mandate_id"], limit: 50 });
  res.json({ mandate_id: req.params["mandate_id"], events });
});
app.get("/audit/chain/verify", (_req, res) => {
  const result = (0, import_audit_core4.verifyChainIntegrity)();
  res.json({ intact: result === null, broken_at: result?.broken_at, detail: result?.detail });
});
app.get("/audit/events", paiVerifierMiddleware, (req, res) => {
  const { actor_id, mandate_id, limit = "20", offset = "0" } = req.query;
  const events = (0, import_audit_core4.query)({ actor_id, mandate_id, limit: parseInt(limit, 10), offset: parseInt(offset, 10) });
  res.json({ events, count: events.length });
});
app.get("/agents", (_req, res) => {
  const agents = (0, import_mcp_bridge.listAgents)();
  res.json({ agents, count: agents.length });
});
app.use((err, req, res, _next) => {
  log.error({ err: err.message, path: req.path, request_id: req.id }, "unhandled error");
  res.status(500).json({ error: "INTERNAL_ERROR", message: err.message });
});
function printStartupSummary() {
  const lines = [
    ``,
    `\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557`,
    `\u2551          YEBO GATEWAY  v3.0.0  \u2014  ONLINE                 \u2551`,
    `\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563`,
    `\u2551  http://localhost:${env.PORT}                              \u2551`,
    `\u2551                                                          \u2551`,
    `\u2551  PASSKEY                                                 \u2551`,
    `\u2551  POST  /passkey/register/options                         \u2551`,
    `\u2551  POST  /passkey/register/verify                          \u2551`,
    `\u2551  POST  /passkey/auth/options                             \u2551`,
    `\u2551  POST  /passkey/auth/verify                              \u2551`,
    `\u2551                                                          \u2551`,
    `\u2551  AUTHORIZATION                                           \u2551`,
    `\u2551  POST  /verify              Passkey & PAI verify         \u2551`,
    `\u2551  POST  /execute             Full auth pipeline           \u2551`,
    `\u2551  POST  /intent/execute      iOS one-shot intent \u2192 auth   \u2551`,
    `\u2551  GET   /receipts/:id        Poll execution receipt        \u2551`,
    `\u2551                                                          \u2551`,
    `\u2551  DISCOVERY                                               \u2551`,
    `\u2551  GET   /plugins             Plugin marketplace           \u2551`,
    `\u2551  GET   /integrity/:id       Integrity score              \u2551`,
    `\u2551  GET   /agents              Registered agents            \u2551`,
    `\u2551                                                          \u2551`,
    `\u2551  OBSERVABILITY                                           \u2551`,
    `\u2551  GET   /health              System health                \u2551`,
    `\u2551  GET   /metrics             Runtime metrics              \u2551`,
    `\u2551  GET   /debug/executions/recent  Recent executions       \u2551`,
    `\u2551  GET   /audit/chain/verify  Ledger integrity             \u2551`,
    `\u2551                                                          \u2551`,
    `\u2551  ENV                                                     \u2551`,
    `\u2551  Policy backend: ${(env.POLICY_BACKEND_URL ?? "not configured").padEnd(40)}\u2551`,
    `\u2551  RP ID: ${env.YEBO_RP_ID.padEnd(49)}\u2551`,
    `\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D`,
    ``
  ];
  log.info(lines.join("\n"));
}
(0, import_execution_worker.initExecutionWorker)(bus);
(0, import_audit_writer.initAuditWriter)(bus);
(0, import_integrity_worker.initIntegrityWorker)(bus);
(0, import_receipt_builder.initReceiptBuilder)(bus);
(0, import_notification_service.initNotificationService)(bus, log);
log.info({
  workers: ["execution-worker", "audit-writer", "integrity-worker", "receipt-builder", "notification-service"]
}, "event-driven workers initialized");
if (env.NODE_ENV !== "test") {
  app.listen(env.PORT, () => {
    printStartupSummary();
  });
}
var server_default = app;
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

vary/index.js:
  (*!
   * vary
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
