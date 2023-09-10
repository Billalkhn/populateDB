"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var casual_1 = __importDefault(require("casual"));
var user_1 = __importDefault(require("../model/user"));
var resolvers = {
    Mutation: {
        createUser: function (_, _a) {
            var count = _a.count;
            return __awaiter(void 0, void 0, void 0, function () {
                var primaryColors, users, i, firstName, lastName, favoriteColor, user, _i, users_1, user, numberOfConnections, i, randomRecords;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            count = (count % 1000000) + 1;
                            primaryColors = [
                                "Red",
                                "Blue",
                                "Green",
                                "Yellow",
                                "Orange",
                                "Purple",
                            ];
                            return [4 /*yield*/, user_1.default.deleteMany({})];
                        case 1:
                            _b.sent();
                            users = [];
                            for (i = 0; i < count; i++) {
                                firstName = casual_1.default.first_name;
                                lastName = casual_1.default.last_name;
                                favoriteColor = primaryColors[casual_1.default.integer(0, primaryColors.length - 1)];
                                user = new user_1.default({ firstName: firstName, lastName: lastName, favoriteColor: favoriteColor });
                                users.push(user);
                            }
                            _i = 0, users_1 = users;
                            _b.label = 2;
                        case 2:
                            if (!(_i < users_1.length)) return [3 /*break*/, 5];
                            user = users_1[_i];
                            numberOfConnections = Math.floor(Math.random() * 51);
                            for (i = 0; i < numberOfConnections; i++)
                                user.connections.push(users[Math.floor(Math.random() * users.length + 1)]);
                            return [4 /*yield*/, user.save()];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [4 /*yield*/, user_1.default.aggregate([{ $sample: { size: 50 } }])];
                        case 6:
                            randomRecords = _b.sent();
                            return [2 /*return*/, "Created ".concat(count, " users.")];
                    }
                });
            });
        },
    },
    Query: {
        users: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, user_1.default.find()];
            });
        }); },
    },
};
exports.default = resolvers;
