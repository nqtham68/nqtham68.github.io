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
  AIPlayer1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70231lejhFKNpZNvzFAXCVV", "AIPlayer1");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_1 = require("./global");
    var game_1 = require("./game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AIPlayerAttack = function(_super) {
      __extends(AIPlayerAttack, _super);
      function AIPlayerAttack() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.NULLPOS = cc.v2(-1, -1);
        _this.totalcompleteCase1 = 0;
        _this.returnposcase1 = _this.NULLPOS;
        _this.thelastResultList = [];
        _this.currentMaxlength = 0;
        _this.attackPointBest = global_1.default.instance.NULLPOS;
        _this.totalcompleteCase2 = 0;
        _this.totalcompleteCase3 = 0;
        _this.totalcompleteCase4 = 0;
        _this.returnposcase4 = _this.NULLPOS;
        return _this;
      }
      AIPlayerAttack_1 = AIPlayerAttack;
      Object.defineProperty(AIPlayerAttack, "instance", {
        get: function() {
          if (null == AIPlayerAttack_1._instance) {
            cc.error("Game instance is not init yet");
            return null;
          }
          return AIPlayerAttack_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      AIPlayerAttack.prototype.onLoad = function() {
        AIPlayerAttack_1._instance = this;
      };
      AIPlayerAttack.prototype.checkReturnVector = function(point1, point2) {
        if (point1 != this.NULLPOS) return point1;
        if (point2 != this.NULLPOS) return point2;
        return this.NULLPOS;
      };
      AIPlayerAttack.prototype.checkCompleteCase1 = function(startPoint) {
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = this.NULLPOS;
        var num1 = this.checkCompletCase1Left(startPoint);
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = this.NULLPOS;
        var num2 = this.checkCompletCase1Right(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttack.prototype.checkCompletCase1Left = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase1++;
          this.thelastResultList.length < 3 && this.thelastResultList.push(currPoint);
          this.checkCompletCase1Left(cc.v2(currPoint.x - 1, currPoint.y));
        } else {
          if (this.totalcompleteCase1 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase1 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase1;
              this.attackPointBest = currPoint;
            }
            this.returnposcase1 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase1;
      };
      AIPlayerAttack.prototype.checkCompletCase1Right = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase1++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase1Right(cc.v2(currPoint.x + 1, currPoint.y));
        } else {
          if (this.totalcompleteCase1 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase1 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase1;
              this.attackPointBest = currPoint;
            }
            this.returnposcase1 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase1;
      };
      AIPlayerAttack.prototype.checkCompleteCase2 = function(startPoint) {
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = this.NULLPOS;
        var num1 = this.checkCompletCase2Up(startPoint);
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = this.NULLPOS;
        var num2 = this.checkCompletCase2Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttack.prototype.checkCompletCase2Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase2++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase2Up(cc.v2(currPoint.x - 1, currPoint.y + 1));
        } else {
          if (this.totalcompleteCase2 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase2 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase2;
              this.attackPointBest = currPoint;
            }
            this.returnposcase2 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase2;
      };
      AIPlayerAttack.prototype.checkCompletCase2Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase2++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase2Down(cc.v2(currPoint.x + 1, currPoint.y - 1));
        } else {
          if (this.totalcompleteCase2 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase2 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase2;
              this.attackPointBest = currPoint;
            }
            this.returnposcase2 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase2;
      };
      AIPlayerAttack.prototype.checkCompleteCase3 = function(startPoint) {
        this.totalcompleteCase3 = 0;
        this.returnposcase3 = this.NULLPOS;
        var num1 = this.checkCompletCase3Up(startPoint);
        this.returnposcase3 = this.NULLPOS;
        this.totalcompleteCase3 = 0;
        var num2 = this.checkCompletCase3Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttack.prototype.checkCompletCase3Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase3++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase3Up(cc.v2(currPoint.x, currPoint.y + 1));
        } else {
          if (this.totalcompleteCase3 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase3 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase3;
              this.attackPointBest = currPoint;
            }
            this.returnposcase3 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase3;
      };
      AIPlayerAttack.prototype.checkCompletCase3Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase3++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase3Down(cc.v2(currPoint.x, currPoint.y - 1));
        } else {
          if (this.totalcompleteCase3 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase3 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase3;
              this.attackPointBest = currPoint;
            }
            this.returnposcase3 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase3;
      };
      AIPlayerAttack.prototype.checkCompleteCase4 = function(startPoint) {
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = this.NULLPOS;
        var num1 = this.checkCompletCase4Up(startPoint);
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = this.NULLPOS;
        var num2 = this.checkCompletCase4Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttack.prototype.checkCompletCase4Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase4++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase4Up(cc.v2(currPoint.x + 1, currPoint.y + 1));
        } else {
          if (this.totalcompleteCase4 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase4 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase4;
              this.attackPointBest = currPoint;
            }
            this.returnposcase4 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase4;
      };
      AIPlayerAttack.prototype.checkCompletCase4Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase4++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase4Down(cc.v2(currPoint.x - 1, currPoint.y - 1));
        } else {
          if (this.totalcompleteCase4 < 2) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase4 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase4;
              this.attackPointBest = currPoint;
            }
            this.returnposcase4 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase4;
      };
      AIPlayerAttack.prototype.freeMapCell = function(point) {
        if (0 != global_1.default.instance.gamemap[point.x][point.y] || !global_1.default.instance.checkValidArea(point)) return false;
        return true;
      };
      AIPlayerAttack.prototype.getAttackPoint = function() {
        var _this = this;
        var attacklist = [];
        this.currentMaxlength = 0;
        this.attackPointBest = global_1.default.instance.NULLPOS;
        global_1.default.instance.AITurnPosList.forEach(function(aipos) {
          var case1 = _this.checkCompleteCase1(aipos);
          var case2 = _this.checkCompleteCase2(aipos);
          var case3 = _this.checkCompleteCase3(aipos);
          var case4 = _this.checkCompleteCase4(aipos);
          case1 != _this.NULLPOS && attacklist.push(case1);
          case2 != _this.NULLPOS && attacklist.push(case2);
          case3 != _this.NULLPOS && attacklist.push(case3);
          case4 != _this.NULLPOS && attacklist.push(case4);
        });
        if (this.attackPointBest != global_1.default.instance.NULLPOS) return this.attackPointBest;
        return global_1.default.instance.NULLPOS;
      };
      AIPlayerAttack.prototype.start = function() {};
      AIPlayerAttack.prototype.update = function(dt) {};
      var AIPlayerAttack_1;
      AIPlayerAttack._instance = null;
      AIPlayerAttack = AIPlayerAttack_1 = __decorate([ ccclass ], AIPlayerAttack);
      return AIPlayerAttack;
    }(cc.Component);
    exports.default = AIPlayerAttack;
    cc._RF.pop();
  }, {
    "./game": "game",
    "./global": "global"
  } ],
  AIPlayer2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bdc1kGxR5HxbT2ZrRMhNLi", "AIPlayer2");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_1 = require("./global");
    var game_1 = require("./game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AIPlayerCheckSpace = function(_super) {
      __extends(AIPlayerCheckSpace, _super);
      function AIPlayerCheckSpace() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.NULLPOS = cc.v2(-1, -1);
        _this.totalcompleteCase1 = 0;
        _this.returnposcase1 = global_1.default.instance.NULLPOS;
        _this.thelastResultList = [];
        _this.totalcompleteCase2 = 0;
        _this.totalcompleteCase3 = 0;
        _this.totalcompleteCase4 = 0;
        _this.returnposcase4 = global_1.default.instance.NULLPOS;
        return _this;
      }
      AIPlayerCheckSpace_1 = AIPlayerCheckSpace;
      Object.defineProperty(AIPlayerCheckSpace, "instance", {
        get: function() {
          if (null == AIPlayerCheckSpace_1._instance) {
            cc.error("Game instance is not init yet");
            return null;
          }
          return AIPlayerCheckSpace_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      AIPlayerCheckSpace.prototype.onLoad = function() {
        AIPlayerCheckSpace_1._instance = this;
      };
      AIPlayerCheckSpace.prototype.checkReturnVector = function(point1, point2) {
        if (point1 != global_1.default.instance.NULLPOS) return point1;
        if (point2 != global_1.default.instance.NULLPOS) return point2;
        return global_1.default.instance.NULLPOS;
      };
      AIPlayerCheckSpace.prototype.checkCompleteCase1 = function(startPoint) {
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = global_1.default.instance.NULLPOS;
        var num1 = this.checkCompletCase1Left(startPoint);
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = global_1.default.instance.NULLPOS;
        var num2 = this.checkCompletCase1Right(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerCheckSpace.prototype.checkCompletCase1Left = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase1 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x - 1][currPoint.y] == game_1.PlayerID.PLAYER1) {
              this.returnposcase1 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase1++;
        this.thelastResultList.length < 3 && this.thelastResultList.push(currPoint);
        this.checkCompletCase1Left(cc.v2(currPoint.x - 1, currPoint.y));
        return this.returnposcase1;
      };
      AIPlayerCheckSpace.prototype.checkCompletCase1Right = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase1 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x + 1][currPoint.y] == game_1.PlayerID.PLAYER1) {
              this.returnposcase1 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase1++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase1Right(cc.v2(currPoint.x + 1, currPoint.y));
        return this.returnposcase1;
      };
      AIPlayerCheckSpace.prototype.checkCompleteCase2 = function(startPoint) {
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = global_1.default.instance.NULLPOS;
        var num1 = this.checkCompletCase2Up(startPoint);
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = global_1.default.instance.NULLPOS;
        var num2 = this.checkCompletCase2Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerCheckSpace.prototype.checkCompletCase2Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase2 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x - 1][currPoint.y + 1] == game_1.PlayerID.PLAYER1) {
              this.returnposcase2 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase2++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase2Up(cc.v2(currPoint.x - 1, currPoint.y + 1));
        return this.returnposcase2;
      };
      AIPlayerCheckSpace.prototype.checkCompletCase2Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase2 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x + 1][currPoint.y - 1] == game_1.PlayerID.PLAYER1) {
              this.returnposcase2 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase2++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase2Down(cc.v2(currPoint.x + 1, currPoint.y - 1));
        return this.returnposcase2;
      };
      AIPlayerCheckSpace.prototype.checkCompleteCase3 = function(startPoint) {
        this.totalcompleteCase3 = 0;
        this.returnposcase3 = global_1.default.instance.NULLPOS;
        var num1 = this.checkCompletCase3Up(startPoint);
        this.returnposcase3 = global_1.default.instance.NULLPOS;
        this.totalcompleteCase3 = 0;
        var num2 = this.checkCompletCase3Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerCheckSpace.prototype.checkCompletCase3Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase3 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x][currPoint.y + 1] == game_1.PlayerID.PLAYER1) {
              this.returnposcase3 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase3++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase3Up(cc.v2(currPoint.x, currPoint.y + 1));
        return this.returnposcase3;
      };
      AIPlayerCheckSpace.prototype.checkCompletCase3Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase3 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x][currPoint.y - 1] == game_1.PlayerID.PLAYER1) {
              this.returnposcase3 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase3++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase3Down(cc.v2(currPoint.x, currPoint.y - 1));
        return this.returnposcase3;
      };
      AIPlayerCheckSpace.prototype.checkCompleteCase4 = function(startPoint) {
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = global_1.default.instance.NULLPOS;
        var num1 = this.checkCompletCase4Up(startPoint);
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = global_1.default.instance.NULLPOS;
        var num2 = this.checkCompletCase4Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerCheckSpace.prototype.checkCompletCase4Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase4 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x + 1][currPoint.y + 1] == game_1.PlayerID.PLAYER1) {
              this.returnposcase4 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase4++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase4Up(cc.v2(currPoint.x + 1, currPoint.y + 1));
        return this.returnposcase4;
      };
      AIPlayerCheckSpace.prototype.checkCompletCase4Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase4 < 2) {
            this.thelastResultList = [];
            return global_1.default.instance.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (global_1.default.instance.gamemap[currPoint.x - 1][currPoint.y - 1] == game_1.PlayerID.PLAYER1) {
              this.returnposcase4 = currPoint;
              return currPoint;
            }
            return global_1.default.instance.NULLPOS;
          }
          return global_1.default.instance.NULLPOS;
        }
        this.totalcompleteCase4++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase4Down(cc.v2(currPoint.x - 1, currPoint.y - 1));
        return this.returnposcase4;
      };
      AIPlayerCheckSpace.prototype.freeMapCell = function(point) {
        if (0 != global_1.default.instance.gamemap[point.x][point.y] || !global_1.default.instance.checkValidArea(point)) return false;
        return true;
      };
      AIPlayerCheckSpace.prototype.getDefenderPoint = function() {
        var _this = this;
        var defenPoint = global_1.default.instance.NULLPOS;
        var defenderPointList = [];
        global_1.default.instance.HumanTurnPosList.forEach(function(indexPosition) {
          var case1 = _this.checkCompleteCase1(indexPosition);
          var case2 = _this.checkCompleteCase2(indexPosition);
          var case3 = _this.checkCompleteCase3(indexPosition);
          var case4 = _this.checkCompleteCase4(indexPosition);
          case1 != global_1.default.instance.NULLPOS ? defenPoint = case1 : case2 != global_1.default.instance.NULLPOS ? defenPoint = case2 : case3 != global_1.default.instance.NULLPOS ? defenPoint = case3 : case4 != global_1.default.instance.NULLPOS && (defenPoint = case4);
          defenPoint != global_1.default.instance.NULLPOS && defenderPointList.push(defenPoint);
        });
        if (defenderPointList.length > 0) return defenderPointList[0];
        return global_1.default.instance.NULLPOS;
      };
      AIPlayerCheckSpace.prototype.start = function() {};
      AIPlayerCheckSpace.prototype.update = function(dt) {};
      var AIPlayerCheckSpace_1;
      AIPlayerCheckSpace._instance = null;
      AIPlayerCheckSpace = AIPlayerCheckSpace_1 = __decorate([ ccclass ], AIPlayerCheckSpace);
      return AIPlayerCheckSpace;
    }(cc.Component);
    exports.default = AIPlayerCheckSpace;
    cc._RF.pop();
  }, {
    "./game": "game",
    "./global": "global"
  } ],
  AIPlayerAttackDeep2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d625qAw/pPkbT+QS5Pdol6", "AIPlayerAttackDeep2");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_1 = require("./global");
    var utils_1 = require("./utils");
    var game_1 = require("./game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AIPlayerAttackDeep2 = function(_super) {
      __extends(AIPlayerAttackDeep2, _super);
      function AIPlayerAttackDeep2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.NULLPOS = cc.v2(-1, -1);
        _this.totalcompleteCase1 = 0;
        _this.returnposcase1 = _this.NULLPOS;
        _this.thelastResultList = [];
        _this.currentMaxlength = 0;
        _this.attackPointBest = global_1.default.instance.NULLPOS;
        _this.totalcompleteCase2 = 0;
        _this.totalcompleteCase3 = 0;
        _this.totalcompleteCase4 = 0;
        _this.returnposcase4 = _this.NULLPOS;
        return _this;
      }
      AIPlayerAttackDeep2_1 = AIPlayerAttackDeep2;
      Object.defineProperty(AIPlayerAttackDeep2, "instance", {
        get: function() {
          if (null == AIPlayerAttackDeep2_1._instance) {
            cc.error("Game instance is not init yet");
            return null;
          }
          return AIPlayerAttackDeep2_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      AIPlayerAttackDeep2.prototype.onLoad = function() {
        AIPlayerAttackDeep2_1._instance = this;
      };
      AIPlayerAttackDeep2.prototype.checkReturnVector = function(point1, point2) {
        if (point1 != this.NULLPOS) return point1;
        if (point2 != this.NULLPOS) return point2;
        return this.NULLPOS;
      };
      AIPlayerAttackDeep2.prototype.checkCompleteCase1 = function(startPoint) {
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = this.NULLPOS;
        var num1 = this.checkCompletCase1Left(startPoint);
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = this.NULLPOS;
        var num2 = this.checkCompletCase1Right(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase1Left = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase1++;
          this.thelastResultList.length < 3 && this.thelastResultList.push(currPoint);
          this.checkCompletCase1Left(cc.v2(currPoint.x - 1, currPoint.y));
        } else {
          if (this.totalcompleteCase1 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase1 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase1;
              this.attackPointBest = currPoint;
            }
            this.returnposcase1 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase1;
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase1Right = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase1++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase1Right(cc.v2(currPoint.x + 1, currPoint.y));
        } else {
          if (this.totalcompleteCase1 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase1 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase1;
              this.attackPointBest = currPoint;
            }
            this.returnposcase1 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase1;
      };
      AIPlayerAttackDeep2.prototype.checkCompleteCase2 = function(startPoint) {
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = this.NULLPOS;
        var num1 = this.checkCompletCase2Up(startPoint);
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = this.NULLPOS;
        var num2 = this.checkCompletCase2Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase2Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase2++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase2Up(cc.v2(currPoint.x - 1, currPoint.y + 1));
        } else {
          if (this.totalcompleteCase2 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase2 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase2;
              this.attackPointBest = currPoint;
            }
            this.returnposcase2 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase2;
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase2Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase2++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase2Down(cc.v2(currPoint.x + 1, currPoint.y - 1));
        } else {
          if (this.totalcompleteCase2 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase2 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase2;
              this.attackPointBest = currPoint;
            }
            this.returnposcase2 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase2;
      };
      AIPlayerAttackDeep2.prototype.checkCompleteCase3 = function(startPoint) {
        this.totalcompleteCase3 = 0;
        this.returnposcase3 = this.NULLPOS;
        var num1 = this.checkCompletCase3Up(startPoint);
        this.returnposcase3 = this.NULLPOS;
        this.totalcompleteCase3 = 0;
        var num2 = this.checkCompletCase3Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase3Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase3++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase3Up(cc.v2(currPoint.x, currPoint.y + 1));
        } else {
          if (this.totalcompleteCase3 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase3 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase3;
              this.attackPointBest = currPoint;
            }
            this.returnposcase3 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase3;
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase3Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase3++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase3Down(cc.v2(currPoint.x, currPoint.y - 1));
        } else {
          if (this.totalcompleteCase3 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase3 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase3;
              this.attackPointBest = currPoint;
            }
            this.returnposcase3 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase3;
      };
      AIPlayerAttackDeep2.prototype.checkCompleteCase4 = function(startPoint) {
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = this.NULLPOS;
        var num1 = this.checkCompletCase4Up(startPoint);
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = this.NULLPOS;
        var num2 = this.checkCompletCase4Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase4Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase4++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase4Up(cc.v2(currPoint.x + 1, currPoint.y + 1));
        } else {
          if (this.totalcompleteCase4 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase4 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase4;
              this.attackPointBest = currPoint;
            }
            this.returnposcase4 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase4;
      };
      AIPlayerAttackDeep2.prototype.checkCompletCase4Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == game_1.PlayerID.PLAYER2) {
          this.totalcompleteCase4++;
          this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
          this.checkCompletCase4Down(cc.v2(currPoint.x - 1, currPoint.y - 1));
        } else {
          if (this.totalcompleteCase4 < 1) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            if (this.totalcompleteCase4 > this.currentMaxlength) {
              this.currentMaxlength = this.totalcompleteCase4;
              this.attackPointBest = currPoint;
            }
            this.returnposcase4 = currPoint;
            return currPoint;
          }
        }
        return this.returnposcase4;
      };
      AIPlayerAttackDeep2.prototype.freeMapCell = function(point) {
        if (0 != global_1.default.instance.gamemap[point.x][point.y] || !global_1.default.instance.checkValidArea(point)) return false;
        return true;
      };
      AIPlayerAttackDeep2.prototype.getAttackPointDeep2 = function() {
        var _this = this;
        var attacklist = [];
        this.currentMaxlength = 0;
        this.attackPointBest = global_1.default.instance.NULLPOS;
        global_1.default.instance.AITurnPosList.forEach(function(aipos) {
          var case1 = _this.checkCompleteCase1(aipos);
          var case2 = _this.checkCompleteCase2(aipos);
          var case3 = _this.checkCompleteCase3(aipos);
          var case4 = _this.checkCompleteCase4(aipos);
          case1 != _this.NULLPOS && attacklist.push(case1);
          case2 != _this.NULLPOS && attacklist.push(case2);
          case3 != _this.NULLPOS && attacklist.push(case3);
          case4 != _this.NULLPOS && attacklist.push(case4);
        });
        if (attacklist.length > 0) return attacklist[utils_1.Utils.getDirectionRandom(attacklist.length)];
        return global_1.default.instance.NULLPOS;
      };
      var AIPlayerAttackDeep2_1;
      AIPlayerAttackDeep2._instance = null;
      AIPlayerAttackDeep2 = AIPlayerAttackDeep2_1 = __decorate([ ccclass ], AIPlayerAttackDeep2);
      return AIPlayerAttackDeep2;
    }(cc.Component);
    exports.default = AIPlayerAttackDeep2;
    cc._RF.pop();
  }, {
    "./game": "game",
    "./global": "global",
    "./utils": "utils"
  } ],
  AIPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c24e0K7Yk5BRpOalVGO0wt2", "AIPlayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_1 = require("./global");
    var game_computer_1 = require("./game-computer");
    var game_1 = require("./game");
    var AIPlayer1_1 = require("./AIPlayer1");
    var AIPlayer2_1 = require("./AIPlayer2");
    var utils_1 = require("./utils");
    var AIPlayerAttackDeep2_1 = require("./AIPlayerAttackDeep2");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AIPlayer = function(_super) {
      __extends(AIPlayer, _super);
      function AIPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.NULLPOS = cc.v2(-1, -1);
        _this.totalcompleteCase1 = 0;
        _this.returnposcase1 = _this.NULLPOS;
        _this.thelastResultList = [];
        _this.totalcompleteCase2 = 0;
        _this.totalcompleteCase3 = 0;
        _this.totalcompleteCase4 = 0;
        _this.returnposcase4 = _this.NULLPOS;
        return _this;
      }
      AIPlayer_1 = AIPlayer;
      Object.defineProperty(AIPlayer, "instance", {
        get: function() {
          if (null == AIPlayer_1._instance) {
            cc.error("Game instance is not init yet");
            return null;
          }
          return AIPlayer_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      AIPlayer.prototype.onLoad = function() {
        AIPlayer_1._instance = this;
      };
      AIPlayer.prototype.checkReturnVector = function(point1, point2) {
        if (point1 != this.NULLPOS) return point1;
        if (point2 != this.NULLPOS) return point2;
        return this.NULLPOS;
      };
      AIPlayer.prototype.checkCompleteCase1 = function(startPoint) {
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = this.NULLPOS;
        var num1 = this.checkCompletCase1Left(startPoint);
        this.totalcompleteCase1 = 0;
        this.returnposcase1 = this.NULLPOS;
        var num2 = this.checkCompletCase1Right(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayer.prototype.checkCompletCase1Left = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase1 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase1 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase1);
            this.returnposcase1 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase1++;
        this.thelastResultList.length < 3 && this.thelastResultList.push(currPoint);
        this.checkCompletCase1Left(cc.v2(currPoint.x - 1, currPoint.y));
        return this.returnposcase1;
      };
      AIPlayer.prototype.checkCompletCase1Right = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase1 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase1 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase1);
            this.returnposcase1 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase1++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase1Right(cc.v2(currPoint.x + 1, currPoint.y));
        return this.returnposcase1;
      };
      AIPlayer.prototype.checkCompleteCase2 = function(startPoint) {
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = this.NULLPOS;
        var num1 = this.checkCompletCase2Up(startPoint);
        this.totalcompleteCase2 = 0;
        this.returnposcase2 = this.NULLPOS;
        var num2 = this.checkCompletCase2Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayer.prototype.checkCompletCase2Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase2 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase2 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase2);
            this.returnposcase2 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase2++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase2Up(cc.v2(currPoint.x - 1, currPoint.y + 1));
        return this.returnposcase2;
      };
      AIPlayer.prototype.checkCompletCase2Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase2 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase2 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase2);
            this.returnposcase2 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase2++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase2Down(cc.v2(currPoint.x + 1, currPoint.y - 1));
        return this.returnposcase2;
      };
      AIPlayer.prototype.checkCompleteCase3 = function(startPoint) {
        this.totalcompleteCase3 = 0;
        this.returnposcase3 = this.NULLPOS;
        var num1 = this.checkCompletCase3Up(startPoint);
        this.returnposcase3 = this.NULLPOS;
        this.totalcompleteCase3 = 0;
        var num2 = this.checkCompletCase3Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayer.prototype.checkCompletCase3Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          cc.log("Total case 3 up: " + this.totalcompleteCase3);
          if (this.totalcompleteCase3 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase3 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase3);
            this.returnposcase3 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase3++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase3Up(cc.v2(currPoint.x, currPoint.y + 1));
        return this.returnposcase3;
      };
      AIPlayer.prototype.checkCompletCase3Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase3 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase3 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase3);
            this.returnposcase3 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase3++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase3Down(cc.v2(currPoint.x, currPoint.y - 1));
        return this.returnposcase3;
      };
      AIPlayer.prototype.checkCompleteCase4 = function(startPoint) {
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = this.NULLPOS;
        var num1 = this.checkCompletCase4Up(startPoint);
        this.totalcompleteCase4 = 0;
        this.returnposcase4 = this.NULLPOS;
        var num2 = this.checkCompletCase4Down(startPoint);
        return this.checkReturnVector(num1, num2);
      };
      AIPlayer.prototype.checkCompletCase4Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase4 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase4 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase4);
            this.returnposcase4 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase4++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase4Up(cc.v2(currPoint.x + 1, currPoint.y + 1));
        return this.returnposcase4;
      };
      AIPlayer.prototype.checkCompletCase4Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] != game_1.PlayerID.PLAYER1) {
          if (this.totalcompleteCase4 < 3) {
            this.thelastResultList = [];
            return this.NULLPOS;
          }
          if (this.freeMapCell(currPoint)) {
            this.totalcompleteCase4 > global_1.default.instance.maxLengthDefend && (global_1.default.instance.maxLengthDefend = this.totalcompleteCase4);
            this.returnposcase4 = currPoint;
            return currPoint;
          }
          return this.NULLPOS;
        }
        this.totalcompleteCase4++;
        this.thelastResultList.length < 5 && this.thelastResultList.push(currPoint);
        this.checkCompletCase4Down(cc.v2(currPoint.x - 1, currPoint.y - 1));
        return this.returnposcase4;
      };
      AIPlayer.prototype.freeMapCell = function(point) {
        if (0 != global_1.default.instance.gamemap[point.x][point.y] || !global_1.default.instance.checkValidArea(point)) return false;
        return true;
      };
      AIPlayer.prototype.getGenericNextPoint = function() {
        var nextturn = [];
        var userPlay = game_computer_1.default.instance.getLastHumanTurnPoint();
        this.freeMapCell(cc.v2(userPlay.x + 1, userPlay.y)) && nextturn.push(cc.v2(userPlay.x + 1, userPlay.y));
        this.freeMapCell(cc.v2(userPlay.x - 1, userPlay.y)) && nextturn.push(cc.v2(userPlay.x - 1, userPlay.y));
        this.freeMapCell(cc.v2(userPlay.x, userPlay.y + 1)) && nextturn.push(cc.v2(userPlay.x, userPlay.y + 1));
        this.freeMapCell(cc.v2(userPlay.x, userPlay.y + 1)) && nextturn.push(cc.v2(userPlay.x, userPlay.y + 1));
        this.freeMapCell(cc.v2(userPlay.x - 1, userPlay.y + 1)) && nextturn.push(cc.v2(userPlay.x - 1, userPlay.y + 1));
        this.freeMapCell(cc.v2(userPlay.x + 1, userPlay.y + 1)) && nextturn.push(cc.v2(userPlay.x + 1, userPlay.y + 1));
        this.freeMapCell(cc.v2(userPlay.x + 1, userPlay.y - 1)) && nextturn.push(cc.v2(userPlay.x + 1, userPlay.y - 1));
        this.freeMapCell(cc.v2(userPlay.x - 1, userPlay.y - 1)) && nextturn.push(cc.v2(userPlay.x - 1, userPlay.y - 1));
        var stepID = utils_1.Utils.getDirectionRandom(nextturn.length);
        return nextturn[stepID];
      };
      AIPlayer.prototype.getDefenderPoint = function() {
        var _this = this;
        var defenPoint = this.NULLPOS;
        var defenderPointList = [];
        var userPlay = game_computer_1.default.instance.getLastHumanTurnPoint();
        this.currentHumanPos = game_computer_1.default.instance.getLastHumanTurnPoint();
        var case1 = this.checkCompleteCase1(userPlay);
        var case2 = this.checkCompleteCase2(userPlay);
        var case3 = this.checkCompleteCase3(userPlay);
        var case4 = this.checkCompleteCase4(userPlay);
        case1 != this.NULLPOS ? defenPoint = case1 : case2 != this.NULLPOS ? defenPoint = case2 : case3 != this.NULLPOS ? defenPoint = case3 : case4 != this.NULLPOS && (defenPoint = case4);
        if (defenPoint != this.NULLPOS) return defenPoint;
        var defenspace = AIPlayer2_1.default.instance.getDefenderPoint();
        if (defenspace != global_1.default.instance.NULLPOS) {
          global_1.default.instance.maxLengthDefend = 6;
          return defenspace;
        }
        var defendinlist_1 = this.NULLPOS;
        global_1.default.instance.HumanTurnPosList.forEach(function(indexPosition) {
          var case11 = _this.checkCompleteCase1(indexPosition);
          var case21 = _this.checkCompleteCase2(indexPosition);
          var case31 = _this.checkCompleteCase3(indexPosition);
          var case41 = _this.checkCompleteCase4(indexPosition);
          case11 != _this.NULLPOS ? defendinlist_1 = case11 : case21 != _this.NULLPOS ? defendinlist_1 = case21 : case31 != _this.NULLPOS ? defendinlist_1 = case31 : case41 != _this.NULLPOS && (defendinlist_1 = case41);
          defendinlist_1 != _this.NULLPOS && defenderPointList.push(defendinlist_1);
        });
        if (defenderPointList.length > 0) return defenderPointList[0];
        return this.NULLPOS;
      };
      AIPlayer.prototype.getNextAIPlay = function() {
        var nextPos;
        global_1.default.instance.maxLengthDefend = 0;
        var defenPos = this.getDefenderPoint();
        var genericPos = this.getGenericNextPoint();
        var attackPos = AIPlayer1_1.default.instance.getAttackPoint();
        var attackPosDeep2 = AIPlayerAttackDeep2_1.default.instance.getAttackPointDeep2();
        nextPos = -1 == defenPos.x && -1 == defenPos.y ? attackPos == global_1.default.instance.NULLPOS ? attackPosDeep2 == global_1.default.instance.NULLPOS ? genericPos : attackPosDeep2 : attackPos : global_1.default.instance.maxLengthDefend > AIPlayer1_1.default.instance.currentMaxlength ? defenPos : attackPos == global_1.default.instance.NULLPOS ? defenPos : attackPos;
        return nextPos;
      };
      AIPlayer.prototype.start = function() {};
      AIPlayer.prototype.update = function(dt) {};
      var AIPlayer_1;
      AIPlayer._instance = null;
      AIPlayer = AIPlayer_1 = __decorate([ ccclass ], AIPlayer);
      return AIPlayer;
    }(cc.Component);
    exports.default = AIPlayer;
    cc._RF.pop();
  }, {
    "./AIPlayer1": "AIPlayer1",
    "./AIPlayer2": "AIPlayer2",
    "./AIPlayerAttackDeep2": "AIPlayerAttackDeep2",
    "./game": "game",
    "./game-computer": "game-computer",
    "./global": "global",
    "./utils": "utils"
  } ],
  Multiplayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d558x9nWRFobkuX1QpxlY2", "Multiplayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer;
    (function(multiplayer) {
      var MP_KEY_LOBBY = "lobbies";
      var MP_KEY_OFFER = "offers";
      var MP_KEY_ANSWER = "answers";
      var MP_KEY_ICE = "ices";
      var RoomInfo = function() {
        function RoomInfo() {}
        return RoomInfo;
      }();
      multiplayer.RoomInfo = RoomInfo;
      var LobbyInfo = function() {
        function LobbyInfo() {}
        return LobbyInfo;
      }();
      var ErrorCode;
      (function(ErrorCode) {
        ErrorCode[ErrorCode["NONE"] = 0] = "NONE";
        ErrorCode[ErrorCode["ROOM_NOT_EXIST"] = 1] = "ROOM_NOT_EXIST";
        ErrorCode[ErrorCode["ROOM_FULL"] = 2] = "ROOM_FULL";
        ErrorCode[ErrorCode["NO_ROOM_ALIVE"] = 3] = "NO_ROOM_ALIVE";
        ErrorCode[ErrorCode["NOT_SUPPORTED"] = 4] = "NOT_SUPPORTED";
      })(ErrorCode = multiplayer.ErrorCode || (multiplayer.ErrorCode = {}));
      var MessageCode;
      (function(MessageCode) {
        MessageCode[MessageCode["INITIALIZED"] = 0] = "INITIALIZED";
        MessageCode[MessageCode["PLAYER_JOINED"] = 1] = "PLAYER_JOINED";
        MessageCode[MessageCode["PLAYER_LEFT"] = 2] = "PLAYER_LEFT";
        MessageCode[MessageCode["PLAYER_DISCONNECT"] = 3] = "PLAYER_DISCONNECT";
        MessageCode[MessageCode["DATA_RECIEVED"] = 4] = "DATA_RECIEVED";
        MessageCode[MessageCode["GAME_STARTED"] = 5] = "GAME_STARTED";
        MessageCode[MessageCode["MASTER_ROOM_CHANGE"] = 6] = "MASTER_ROOM_CHANGE";
        MessageCode[MessageCode["KICKED_OUT"] = 7] = "KICKED_OUT";
        MessageCode[MessageCode["ROOM_CREATED"] = 8] = "ROOM_CREATED";
        MessageCode[MessageCode["ROOM_JOINED"] = 9] = "ROOM_JOINED";
      })(MessageCode = multiplayer.MessageCode || (multiplayer.MessageCode = {}));
      var Error = function() {
        function Error() {}
        return Error;
      }();
      multiplayer.Error = Error;
      var Player = function() {
        function Player() {}
        return Player;
      }();
      multiplayer.Player = Player;
      var Connection = function() {
        function Connection() {}
        return Connection;
      }();
      var Manager = function() {
        function Manager(gameId) {
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
          this.gameId = "";
          this.myRoomId = "";
          this.myPlayer = {
            id: "",
            name: "None"
          };
          this.masterPlayer = {
            id: "",
            name: "None"
          };
          this.deathTime = 18e5;
          this.gameStarted = false;
          this.joinedRoom = false;
          this.connections = {};
          this.pendingIces = {};
          this.players = {};
          this.webrtc_support = true;
          this.iInitialized = false;
          this.onMessage = null;
          this.init(gameId);
        }
        Manager.prototype.init = function(gameId) {
          var _this = this;
          this.gameId = gameId;
          this.signalChannel = new SignalChannel();
          this.signalChannel.setSignalingListener(this.onSignaling.bind(this));
          this.signalChannel.init(gameId, function() {
            console.log("multiplayer manager initiallized");
            _this.iInitialized = true;
            _this.onMessage && _this.onMessage(MessageCode.INITIALIZED, null);
            _this.signalChannel.getTimeOffset(function(time) {
              _this.timeOffset = time;
              _this.signalChannel.setConnect(false);
            });
          });
          if (RTCPeerConnection) {
            var rtc = new RTCPeerConnection(null);
            rtc.createDataChannel || (this.webrtc_support = false);
            rtc.close();
          } else this.webrtc_support = false;
        };
        Manager.prototype.isInitialized = function() {
          return this.iInitialized;
        };
        Manager.prototype.startGame = function() {
          if (this.masterPlayer.id != this.myPlayer.id) {
            console.warn("Only host can start game");
            return;
          }
          var startObj = {
            type: "__sys",
            message: "startgame"
          };
          var msg = JSON.stringify(startObj);
          for (var client in this.connections) this.connections[client].channel.send(msg);
          this.gameStarted = true;
          this.signalChannel.removeLobby(this.myRoomId);
          this.signalChannel.setConnect(false);
        };
        Manager.prototype.setPlayerName = function(name) {
          this.myPlayer.name = name;
        };
        Manager.prototype.setPlayerId = function(id) {
          this.myPlayer.id = id;
        };
        Manager.prototype.getMyPlayer = function() {
          return this.myPlayer;
        };
        Manager.prototype.getMasterPlayer = function() {
          return this.masterPlayer;
        };
        Manager.prototype.isMaster = function(playerId) {
          return this.masterPlayer.id === playerId;
        };
        Manager.prototype.kickOut = function(playerId) {
          if (this.masterPlayer.id != this.myPlayer.id) {
            console.warn("Only host can kick player out");
            return;
          }
          this.signalChannel.kickPlayer(this.myRoomId, {
            id: playerId,
            name: ""
          });
        };
        Manager.prototype.getPlayers = function() {
          return this.players;
        };
        Manager.prototype.onSignaling = function(type, data) {
          var _this = this;
          if (type == SignalChannel.SIGNAL_TYPE_OFFER) {
            var connection_1 = new Connection();
            this.connections[data.from.id] = connection_1;
            connection_1.peer = new RTCPeerConnection(this.rtcConfig);
            connection_1.peer.setRemoteDescription(new RTCSessionDescription(JSON.parse(data.sdp)));
            connection_1.peer.createAnswer(function(sdp) {
              connection_1.peer.setLocalDescription(sdp);
              console.log("Answer create and send to remote " + data.from.name);
              _this.signalChannel.sendAnswer(_this.myRoomId, _this.myPlayer, data.from, sdp);
              if (_this.pendingIces[data.from.id]) {
                for (var i = 0; i < _this.pendingIces[data.from.id].length; i++) {
                  console.log("Add ice from: " + data.from.name);
                  _this.connections[data.from.id].peer.addIceCandidate(new RTCIceCandidate(JSON.parse(_this.pendingIces[data.from.id][i])));
                }
                _this.pendingIces[data.from.id] = null;
              }
            }, function(error) {
              console.warn("Create offer for " + data.from.name + " failed");
            });
            connection_1.peer.onicecandidate = function(e) {
              if (!connection_1.peer || !e || !e.candidate) return;
              _this.signalChannel.sendCandidate(_this.myRoomId, _this.myPlayer, data.from, e.candidate);
            };
            connection_1.peer.ondatachannel = function(e) {
              connection_1.channel = e.channel;
              connection_1.channel.onclose = function() {
                console.log("connection: " + data.from.name + " is close");
                _this.gameStarted && _this.onMessage && _this.onMessage(MessageCode.PLAYER_DISCONNECT, data.from);
              };
              connection_1.channel.onopen = function() {
                console.log("connection: " + data.from.name + " is open");
              };
              connection_1.channel.onerror = function(e) {
                console.log("connection: " + data.from.name + " is error: " + e);
              };
              connection_1.channel.onmessage = function(e) {
                console.log("connection: " + data.from.name + " has message: " + e.data);
                var message = null;
                try {
                  message = JSON.parse(e.data);
                } catch (e) {}
                if (message && message.type && "__sys" === message.type) {
                  if ("startgame" == message.message) {
                    _this.gameStarted = true;
                    _this.signalChannel.setConnect(false);
                    _this.onMessage && _this.onMessage(MessageCode.GAME_STARTED, null);
                  }
                } else {
                  var udata = {
                    player: {
                      id: data.from.id,
                      name: data.from.name
                    },
                    data: e.data
                  };
                  _this.onMessage && _this.onMessage(MessageCode.DATA_RECIEVED, udata);
                }
              };
              _this.onMessage && _this.onMessage(MessageCode.PLAYER_JOINED, data.from);
              _this.players[data.from.id] = data.from;
            };
          } else if (type == SignalChannel.SIGNAL_TYPE_ANSWER) null != this.connections[data.from.id] ? this.connections[data.from.id].peer.setRemoteDescription(new RTCSessionDescription(JSON.parse(data.sdp))) : console.warn("Recieve answer for not exist player"); else if (type == SignalChannel.SIGNAL_TYPE_ICE) if (null != this.connections[data.from.id]) this.connections[data.from.id].peer.addIceCandidate(new RTCIceCandidate(JSON.parse(data.sdp))); else {
            this.pendingIces[data.from.id] || (this.pendingIces[data.from.id] = []);
            this.pendingIces[data.from.id].push(data.sdp);
          } else if (type == SignalChannel.SIGNAL_TYPE_PLAYER_LEFT && !this.gameStarted && null != this.myRoomId && data) {
            var player = data;
            if (this.myPlayer.id === player.id) {
              this.onMessage && this.onMessage(MessageCode.KICKED_OUT, null);
              this.quit();
            } else {
              this.onMessage && this.onMessage(MessageCode.PLAYER_LEFT, player);
              this.masterPlayer.id === player.id && this.signalChannel.changeMaster(this.myRoomId, function(master) {
                console.log("Master change to: " + master);
                _this.onMessage && _this.onMessage(MessageCode.MASTER_ROOM_CHANGE, master);
                _this.masterPlayer = master;
              });
            }
            if (this.connections[player.id]) {
              this.connections[player.id].channel && this.connections[player.id].channel.close();
              this.connections[player.id].peer && this.connections[player.id].peer.close();
              delete this.connections[player.id];
            }
            delete this.players[player.id];
          }
        };
        Manager.prototype.createRoom = function(title, success, maxPlayer, type, data) {
          void 0 === maxPlayer && (maxPlayer = 2);
          void 0 === type && (type = 0);
          void 0 === data && (data = {});
          this.quit();
          if (!this.webrtc_support) {
            success && success({
              error: ErrorCode.NOT_SUPPORTED,
              message: "WebRTC API is not support"
            }, null);
            this.onMessage && this.onMessage(MessageCode.ROOM_CREATED, {
              error: {
                error: ErrorCode.NOT_SUPPORTED,
                message: "WebRTC API is not support"
              },
              room: null
            });
            return;
          }
          var roomId = this.signalChannel.createLobby(title, maxPlayer, this.myPlayer, type, data);
          this.myRoomId = roomId;
          this.masterPlayer = this.myPlayer;
          this.joinedRoom = true;
          this.players[this.myPlayer.id] = this.myPlayer;
          var roomInfo = {
            id: roomId,
            title: title,
            master: this.myPlayer,
            maxPlayer: maxPlayer,
            type: type,
            data: data,
            players: [ this.myPlayer ]
          };
          success && success(null, roomInfo);
          this.onMessage && this.onMessage(MessageCode.ROOM_CREATED, {
            room: roomInfo
          });
        };
        Manager.prototype.joinRoom = function(roomId, success) {
          var _this = this;
          this.quit();
          if (!this.webrtc_support) {
            success && success({
              error: ErrorCode.NOT_SUPPORTED,
              message: "WebRTC API is not support"
            }, null);
            this.onMessage && this.onMessage(MessageCode.ROOM_JOINED, {
              error: {
                error: ErrorCode.NOT_SUPPORTED,
                message: "WebRTC API is not support"
              },
              room: null
            });
            return;
          }
          this.joinedRoom = false;
          this.signalChannel.queryData(MP_KEY_LOBBY + "/" + roomId, function(lobby) {
            if (null != lobby && null != lobby.id) {
              var noPlayer = null != lobby.players ? Object.keys(lobby.players).length : -1;
              if (noPlayer > 0) if (noPlayer >= lobby.maxPlayer) {
                console.warn("Room is full");
                success && success({
                  error: ErrorCode.ROOM_FULL,
                  message: "Room is full"
                }, null);
              } else if (Date.now() + _this.timeOffset - lobby.created > _this.deathTime) {
                console.warn("Death room");
                success && success({
                  error: ErrorCode.ROOM_NOT_EXIST,
                  message: "Death room"
                }, null);
              } else {
                var lobbyId = _this.signalChannel.joinLobby(roomId, _this.myPlayer);
                _this.myRoomId = lobbyId;
                _this.masterPlayer = lobby.master;
                var playersInRoom = [];
                var _loop_1 = function(playerId) {
                  var info = lobby.players[playerId];
                  if (!info.player) {
                    _this.signalChannel.kickPlayer(_this.myRoomId, {
                      id: playerId,
                      name: ""
                    });
                    return "continue";
                  }
                  var connection = new Connection();
                  connection.peer = new RTCPeerConnection(_this.rtcConfig);
                  connection.channel = connection.peer.createDataChannel("mpchannel");
                  _this.connections[playerId] = connection;
                  connection.channel.onclose = function() {
                    console.log("connection: " + info.player.name + " is close");
                    _this.gameStarted && _this.onMessage && _this.onMessage(MessageCode.PLAYER_DISCONNECT, info.player.id);
                  };
                  connection.channel.onopen = function() {
                    console.log("connection: " + info.player.name + " is open");
                  };
                  connection.channel.onerror = function(e) {
                    console.log("connection: " + info.player.name + " is error: " + e);
                  };
                  connection.channel.onmessage = function(e) {
                    console.log("connection: " + info.player.name + " has message: " + e.data);
                    var message = null;
                    try {
                      message = JSON.parse(e.data);
                    } catch (e) {}
                    if (message && message.type && "__sys" === message.type) {
                      if ("startgame" == message.message) {
                        _this.gameStarted = true;
                        _this.onMessage && _this.onMessage(MessageCode.GAME_STARTED, null);
                      }
                    } else {
                      var udata = {
                        player: info.player,
                        data: e.data
                      };
                      _this.onMessage && _this.onMessage(MessageCode.DATA_RECIEVED, udata);
                    }
                  };
                  connection.peer.createOffer(function(sdp) {
                    connection.peer.setLocalDescription(sdp);
                    console.log("Offer create and send to remote " + info.player.name);
                    _this.signalChannel.sendOffer(_this.myRoomId, _this.myPlayer, info.player, sdp);
                  }, function(error) {
                    console.warn("Create offer for " + info.player + " failed");
                  });
                  connection.peer.onicecandidate = function(e) {
                    if (!connection.peer || !e || !e.candidate) return;
                    _this.signalChannel.sendCandidate(_this.myRoomId, _this.myPlayer, info.player, e.candidate);
                  };
                  playersInRoom.push(info.player);
                  _this.players[info.player.id] = info.player;
                };
                for (var playerId in lobby.players) _loop_1(playerId);
                playersInRoom.push(_this.myPlayer);
                _this.players[_this.myPlayer.id] = _this.myPlayer;
                var roomInfo_1 = {
                  id: lobbyId,
                  title: lobby.title,
                  master: lobby.master,
                  maxPlayer: lobby.maxPlayer,
                  type: lobby.type,
                  data: lobby.data,
                  players: playersInRoom
                };
                _this.joinRoomTimeoutId = setTimeout(function() {
                  console.log("Join room time out");
                  _this.quit();
                  success && success({
                    error: ErrorCode.ROOM_NOT_EXIST,
                    message: "Join room time out"
                  }, null);
                }, 6e4);
                _this.joinRoomUpdateIntervalId = setInterval(function() {
                  var succesConnectAll = true;
                  for (var con in _this.connections) _this.connections[con].channel && "open" == _this.connections[con].channel.readyState || (succesConnectAll = false);
                  if (succesConnectAll && !_this.joinedRoom) {
                    _this.joinedRoom = true;
                    clearTimeout(_this.joinRoomTimeoutId);
                    clearInterval(_this.joinRoomUpdateIntervalId);
                    success && success(null, roomInfo_1);
                    _this.onMessage && _this.onMessage(MessageCode.ROOM_JOINED, {
                      room: roomInfo_1
                    });
                  }
                }, 1e3 / 15);
              } else {
                console.warn("Room is empty");
                _this.signalChannel.cleanEmptyRoom();
                success && success({
                  error: ErrorCode.ROOM_NOT_EXIST,
                  message: "Room does not exist"
                }, null);
              }
            } else {
              console.warn("Room does not exist");
              success && success({
                error: ErrorCode.ROOM_NOT_EXIST,
                message: "Room does not exist"
              }, null);
            }
          });
        };
        Manager.prototype.quickJoin = function(success, type) {
          var _this = this;
          void 0 === type && (type = 0);
          this.quit();
          this.getRoomsType(type, function(lobbies) {
            if (lobbies.length > 0) {
              var random = new RandomUnique(lobbies.length);
              var idx = random.random();
              while (idx > -1) {
                if (lobbies[idx].playerInRoom < lobbies[idx].maxPlayer) {
                  _this.joinRoom(lobbies[Math.floor(Math.random() * lobbies.length)].id, success);
                  break;
                }
                idx = random.random();
              }
              idx < 0 && success && success({
                error: ErrorCode.NO_ROOM_ALIVE,
                message: "There have no room alive"
              }, null);
            } else success && success({
              error: ErrorCode.NO_ROOM_ALIVE,
              message: "There have no room alive"
            }, null);
          });
        };
        Manager.prototype.quit = function(success) {
          void 0 === success && (success = null);
          if (null != this.myRoomId && "" != this.myRoomId) {
            this.signalChannel.quitLobby(this.myRoomId, this.myPlayer, function() {
              success && success();
            });
            clearTimeout(this.joinRoomTimeoutId);
            clearInterval(this.joinRoomUpdateIntervalId);
            this.gameStarted = false;
            this.joinedRoom = false;
            this.myRoomId = "";
            for (var connection in this.connections) {
              this.connections[connection].channel && this.connections[connection].channel.close();
              this.connections[connection].peer && this.connections[connection].peer.close();
            }
            this.connections = {};
            this.pendingIces = {};
            this.players = {};
            this.signalChannel.setConnect(false);
          }
        };
        Manager.prototype.getRoomsType = function(type, success) {
          var _this = this;
          this.signalChannel.queryData(MP_KEY_LOBBY, function(rooms) {
            var availableRoom = [];
            for (var room in rooms) {
              var death = Date.now() + _this.timeOffset - rooms[room].created > _this.deathTime;
              var me = rooms[room].players[_this.myPlayer.id];
              rooms[room].type != type && null != type || null == rooms[room].players || death || me || availableRoom.push(rooms[room]);
            }
            success(availableRoom);
          });
        };
        Manager.prototype.getRooms = function(success) {
          this.getRoomsType(null, success);
        };
        Manager.prototype.sendMessage = function(data) {
          for (var connection in this.connections) this.connections[connection].channel.send(data);
        };
        Manager.prototype.sendMessageTo = function(playerId, data) {
          this.connections[playerId] && this.connections[playerId].channel.send(data);
        };
        return Manager;
      }();
      multiplayer.Manager = Manager;
      var SignalChannel = function() {
        function SignalChannel() {}
        SignalChannel.prototype.init = function(gameId, success) {
          var _this = this;
          this.gameId = gameId;
          var config = {
            apiKey: "AIzaSyBbEcsnkmPtPsaATElA94sWNVbxLjXUhdE",
            authDomain: "webrtcmultiplay.firebaseapp.com",
            databaseURL: "https://webrtcmultiplay.firebaseio.com",
            projectId: "webrtcmultiplay",
            storageBucket: "webrtcmultiplay.appspot.com",
            messagingSenderId: "508433943022"
          };
          this.firebaseApp = firebase.initializeApp(config, "multiplay");
          var db = this.firebaseApp.database();
          db.ref(gameId).once("value", function(snapshot) {
            if (snapshot.exists()) {
              _this.firebaseDb = db.ref(gameId);
              var lobbies = snapshot.child(MP_KEY_LOBBY);
              lobbies.forEach(function(lobby) {
                lobby.child("players").exists() || snapshot.child(MP_KEY_LOBBY + "/" + lobby.key).ref.remove();
                return false;
              });
            } else {
              db.ref(gameId).set({
                created: firebase.database.ServerValue.TIMESTAMP,
                rooms: [],
                lobbies: []
              });
              _this.firebaseDb = db.ref(gameId);
            }
            _this.lobbyRef = _this.firebaseDb.child(MP_KEY_LOBBY);
            success && success();
          });
        };
        SignalChannel.prototype.setSignalingListener = function(listener) {
          this.signalListener = listener;
        };
        SignalChannel.prototype.createLobby = function(title, maxPlayer, player, type, data) {
          var _this = this;
          this.setConnect(true);
          var lobby = this.lobbyRef.child(Utils.generateID());
          var playerId = "" == player.id ? this.lobbyRef.child(lobby.key + "/players").push().key : player.id;
          player.id = playerId;
          var lobbyInfo = {
            created: firebase.database.ServerValue.TIMESTAMP,
            id: lobby.key,
            title: title,
            playerInRoom: 1,
            maxPlayer: maxPlayer,
            master: player,
            type: type,
            data: data,
            players: {}
          };
          lobby.set(lobbyInfo);
          lobby.child("/players/" + playerId).set({
            player: player
          });
          this.lobbyRef.child(lobby.key + "/players/" + playerId + "/" + MP_KEY_OFFER).on("child_added", function(snapshot) {
            _this.signalListener(SignalChannel.SIGNAL_TYPE_OFFER, snapshot.toJSON());
            snapshot.ref.remove();
          });
          this.lobbyRef.child(lobby.key + "/players/" + playerId + "/" + MP_KEY_ICE).on("child_added", function(snapshot) {
            snapshot.ref.on("child_added", function(data) {
              _this.signalListener(SignalChannel.SIGNAL_TYPE_ICE, data.toJSON());
              data.ref.remove();
            });
          });
          this.lobbyRef.child(lobby.key + "/players").on("value", function(snapshot) {
            null != snapshot.val() && _this.lobbyRef.child(lobby.key + "/playerInRoom").set(snapshot.numChildren());
          });
          this.lobbyRef.child(lobby.key + "/players").on("child_removed", function(snapshot) {
            snapshot.val().player && _this.signalListener(SignalChannel.SIGNAL_TYPE_PLAYER_LEFT, snapshot.val().player);
          });
          this.lobbyRef.child(lobby.key + "/players/" + playerId).onDisconnect().remove();
          return lobby.key;
        };
        SignalChannel.prototype.joinLobby = function(room, player) {
          var _this = this;
          this.setConnect(true);
          var playerId = "" == player.id ? this.lobbyRef.child(room + "/players").push().key : player.id;
          player.id = playerId;
          this.lobbyRef.child(room + "/players/" + playerId).set({
            player: player
          });
          this.lobbyRef.child(room + "/players/" + playerId + "/" + MP_KEY_OFFER).on("child_added", function(snapshot) {
            _this.signalListener(SignalChannel.SIGNAL_TYPE_OFFER, snapshot.toJSON());
            snapshot.ref.remove();
          });
          this.lobbyRef.child(room + "/players/" + playerId + "/" + MP_KEY_ANSWER).on("child_added", function(snapshot) {
            _this.signalListener(SignalChannel.SIGNAL_TYPE_ANSWER, snapshot.toJSON());
            snapshot.ref.remove();
          });
          this.lobbyRef.child(room + "/players/" + playerId + "/" + MP_KEY_ICE).on("child_added", function(snapshot) {
            snapshot.ref.on("child_added", function(data) {
              _this.signalListener(SignalChannel.SIGNAL_TYPE_ICE, data.toJSON());
              data.ref.remove();
            });
          });
          this.lobbyRef.child(room + "/players").on("value", function(snapshot) {
            null != snapshot.val() && _this.lobbyRef.child(room + "/playerInRoom").set(snapshot.numChildren());
          });
          this.lobbyRef.child(room + "/players").on("child_removed", function(snapshot) {
            snapshot.val().player && _this.signalListener(SignalChannel.SIGNAL_TYPE_PLAYER_LEFT, snapshot.val().player);
          });
          this.lobbyRef.child(room + "/players/" + playerId).onDisconnect().remove();
          return room;
        };
        SignalChannel.prototype.quitLobby = function(room, player, success) {
          var _this = this;
          this.lobbyRef.child(room + "/players").off();
          this.lobbyRef.child(room + "/players/" + player.id).remove().then(function() {
            success();
            return _this.lobbyRef.child(room + "/players").once("value");
          }).then(function(snapshot) {
            snapshot.hasChildren() || _this.lobbyRef.child(room).remove();
          });
        };
        SignalChannel.prototype.removeLobby = function(room) {
          room && "" != room && this.lobbyRef.child(room).remove();
        };
        SignalChannel.prototype.kickPlayer = function(room, player) {
          this.lobbyRef.child(room + "/players/" + player.id).remove();
        };
        SignalChannel.prototype.sendOffer = function(room, fromPlayer, toPlayer, sdp) {
          var _this = this;
          this.lobbyRef.child(room + "/players").once("value", function(snapshot) {
            snapshot && snapshot.exists() && snapshot.child(fromPlayer.id).exists() && snapshot.child(toPlayer.id).exists() && _this.lobbyRef.child(room + "/players/" + toPlayer.id + "/" + MP_KEY_OFFER + "/" + fromPlayer.id).set({
              from: fromPlayer,
              sdp: JSON.stringify(sdp)
            });
          });
        };
        SignalChannel.prototype.sendAnswer = function(room, fromPlayer, toPlayer, sdp) {
          var _this = this;
          this.lobbyRef.child(room + "/players").once("value", function(snapshot) {
            snapshot && snapshot.exists() && snapshot.child(fromPlayer.id).exists() && snapshot.child(toPlayer.id).exists() && _this.lobbyRef.child(room + "/players/" + toPlayer.id + "/" + MP_KEY_ANSWER + "/" + fromPlayer.id).set({
              from: fromPlayer,
              sdp: JSON.stringify(sdp)
            });
          });
        };
        SignalChannel.prototype.sendCandidate = function(room, fromPlayer, toPlayer, candidate) {
          var _this = this;
          this.lobbyRef.child(room + "/players").once("value", function(snapshot) {
            snapshot && snapshot.exists() && snapshot.child(fromPlayer.id).exists() && snapshot.child(toPlayer.id).exists() && _this.lobbyRef.child(room + "/players/" + toPlayer.id + "/" + MP_KEY_ICE + "/" + fromPlayer.id).push({
              from: fromPlayer,
              sdp: JSON.stringify(candidate)
            });
          });
        };
        SignalChannel.prototype.queryData = function(path, success) {
          this.setConnect(true);
          this.firebaseDb.child(path).once("value", function(snapshot) {
            success(snapshot.toJSON());
          });
        };
        SignalChannel.prototype.getTimeOffset = function(success) {
          this.firebaseApp.database().ref(".info/serverTimeOffset").once("value", function(snap) {
            success(snap.val());
          });
        };
        SignalChannel.prototype.changeMaster = function(room, success) {
          var _this = this;
          this.lobbyRef.child(room + "/players").limitToFirst(1).once("value", function(snapshot) {
            var master = snapshot.val()[Object.keys(snapshot.val())[0]].player;
            _this.lobbyRef.child(room + "/master").set(master);
            success(master);
          });
        };
        SignalChannel.prototype.cleanEmptyRoom = function() {
          var _this = this;
          this.lobbyRef.once("value", function(snapshot) {
            snapshot.forEach(function(lobby) {
              lobby.child("players").exists() || _this.lobbyRef.child(lobby.key).remove();
              return false;
            });
          });
        };
        SignalChannel.prototype.setConnect = function(connect) {
          connect ? this.firebaseApp.database().goOnline() : this.firebaseApp.database().goOffline();
        };
        SignalChannel.SIGNAL_TYPE_OFFER = "offer";
        SignalChannel.SIGNAL_TYPE_ANSWER = "answer";
        SignalChannel.SIGNAL_TYPE_ICE = "ice";
        SignalChannel.SIGNAL_TYPE_PLAYER_LEFT = "player_left";
        return SignalChannel;
      }();
      var Utils = function() {
        function Utils() {}
        Utils.generateID = function() {
          var firstPart = 46656 * Math.random() | 0;
          var secondPart = 46656 * Math.random() | 0;
          var f = ("000" + firstPart.toString(36)).slice(-3);
          var s = ("000" + secondPart.toString(36)).slice(-3);
          return f + s;
        };
        return Utils;
      }();
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
          var idx = Math.floor(Math.random() * this.unique.length);
          var ret = this.unique[idx];
          this.unique.splice(idx, 1);
          return ret;
        };
        return RandomUnique;
      }();
    })(multiplayer = exports.multiplayer || (exports.multiplayer = {}));
    cc._RF.pop();
  }, {} ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12bf6qYo6BLUYyrRIYj7duo", "config");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config = function() {
      function Config() {}
      Config.PROJECT_ID = "CaroGameMultiplayer1";
      return Config;
    }();
    exports.default = Config;
    cc._RF.pop();
  }, {} ],
  "entername-controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "625ffm0rgVP1rMiUxj4G+qq", "entername-controller");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnterNameController = function(_super) {
      __extends(EnterNameController, _super);
      function EnterNameController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.namebox = null;
        _this.usernamelabel = null;
        return _this;
      }
      EnterNameController.prototype.onLoad = function() {};
      EnterNameController.prototype.start = function() {};
      EnterNameController.prototype.update = function(dt) {};
      __decorate([ property(cc.EditBox) ], EnterNameController.prototype, "namebox", void 0);
      __decorate([ property(cc.Label) ], EnterNameController.prototype, "usernamelabel", void 0);
      EnterNameController = __decorate([ ccclass ], EnterNameController);
      return EnterNameController;
    }(cc.Component);
    exports.default = EnterNameController;
    cc._RF.pop();
  }, {} ],
  "event-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9f20FcyvZCw74ZxelzW31b", "event-manager");
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
  "firebase-inst": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04261xQQqRDEKRHVZW5fwCW", "firebase-inst");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var config_1 = require("../config");
    var FirebaseInst = function() {
      function FirebaseInst() {}
      Object.defineProperty(FirebaseInst, "app", {
        get: function() {
          if (this._app) return this._app;
          cc.warn("Firebase instance is not init yet");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FirebaseInst, "db", {
        get: function() {
          if (this._db) return this._db;
          cc.warn("Firebase instance is not init yet");
        },
        enumerable: true,
        configurable: true
      });
      FirebaseInst.init = function() {
        if (null == this._app) {
          cc.log("Init firebase inst");
          this._app = firebase.initializeApp(this.config);
          this._db = this._app.database().ref(config_1.default.PROJECT_ID);
        }
      };
      FirebaseInst.config = {
        apiKey: "AIzaSyAbtm9DVqNFcMz0MDuVAND27Dshh2TfAcE",
        authDomain: "gameleaderboard-49a78.firebaseapp.com",
        databaseURL: "https://gameleaderboard-49a78.firebaseio.com",
        projectId: "gameleaderboard-49a78",
        storageBucket: "gameleaderboard-49a78.appspot.com",
        messagingSenderId: "311807796451"
      };
      return FirebaseInst;
    }();
    exports.default = FirebaseInst;
    cc._RF.pop();
  }, {
    "../config": "config"
  } ],
  "game-analytic": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "822fd5OyCBN+IP1FitS+JSm", "game-analytic");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_1 = require("./global");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameAnalytics = function(_super) {
      __extends(GameAnalytics, _super);
      function GameAnalytics() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lastresult = false;
        _this.totalcompleteCase1 = 0;
        _this.thelastResultList = [];
        _this.totalcompleteCase2 = 0;
        _this.totalcompleteCase3 = 0;
        _this.totalcompleteCase4 = 0;
        return _this;
      }
      GameAnalytics_1 = GameAnalytics;
      Object.defineProperty(GameAnalytics, "instance", {
        get: function() {
          if (null == GameAnalytics_1._instance) {
            cc.error("Game instance is not init yet");
            return null;
          }
          return GameAnalytics_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      GameAnalytics.prototype.checkCompleteCase1 = function(startPoint) {
        if (this.lastresult) return true;
        this.totalcompleteCase1 = 0;
        var num1 = this.checkCompletCase1Left(startPoint);
        if (num1 > 4) {
          this.lastresult = true;
          return true;
        }
        this.totalcompleteCase1 = 0;
        var num2 = this.checkCompletCase1Right(startPoint);
        cc.log(" ----- Case 1: " + num1 + " " + num2);
        if (num2 > 4) {
          this.lastresult = true;
          return true;
        }
        return false;
      };
      GameAnalytics.prototype.checkCompletCase1Left = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase1++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase1Left(cc.v2(currPoint.x - 1, currPoint.y));
          return this.totalcompleteCase1;
        }
        this.totalcompleteCase1 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.checkCompletCase1Right = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase1++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase1Right(cc.v2(currPoint.x + 1, currPoint.y));
          return this.totalcompleteCase1;
        }
        this.totalcompleteCase1 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.checkCompleteCase2 = function(startPoint) {
        if (this.lastresult) return true;
        this.totalcompleteCase2 = 0;
        var num1 = this.checkCompletCase2Up(startPoint);
        if (num1 > 4) {
          this.lastresult = true;
          return true;
        }
        this.totalcompleteCase2 = 0;
        var num2 = this.checkCompletCase2Down(startPoint);
        cc.log(" ----- Case 2: " + num1 + " " + num2);
        if (num2 > 4) {
          this.lastresult = true;
          return true;
        }
        return false;
      };
      GameAnalytics.prototype.checkCompletCase2Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase2++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase2Up(cc.v2(currPoint.x - 1, currPoint.y + 1));
          return this.totalcompleteCase2;
        }
        this.totalcompleteCase2 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.checkCompletCase2Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase2++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase2Down(cc.v2(currPoint.x + 1, currPoint.y - 1));
          return this.totalcompleteCase2;
        }
        this.totalcompleteCase2 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.checkCompleteCase3 = function(startPoint) {
        if (this.lastresult) return true;
        this.totalcompleteCase3 = 0;
        var num1 = this.checkCompletCase3Up(startPoint);
        if (num1 > 4) {
          this.lastresult = true;
          return true;
        }
        this.totalcompleteCase3 = 0;
        var num2 = this.checkCompletCase3Down(startPoint);
        cc.log(" ----- Case 3: " + num1 + " " + num2);
        if (num2 > 4) {
          this.lastresult = true;
          return true;
        }
        return false;
      };
      GameAnalytics.prototype.checkCompletCase3Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase3++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase3Up(cc.v2(currPoint.x, currPoint.y + 1));
          return this.totalcompleteCase3;
        }
        this.totalcompleteCase3 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.checkCompletCase3Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase3++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase3Down(cc.v2(currPoint.x, currPoint.y - 1));
          return this.totalcompleteCase3;
        }
        this.totalcompleteCase3 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.checkCompleteCase4 = function(startPoint) {
        if (this.lastresult) return true;
        this.totalcompleteCase4 = 0;
        var num1 = this.checkCompletCase4Up(startPoint);
        if (num1 > 4) {
          this.lastresult = true;
          return true;
        }
        this.totalcompleteCase4 = 0;
        var num2 = this.checkCompletCase4Down(startPoint);
        cc.log(" ----- Case 4: " + num1 + " " + num2);
        if (num2 > 4) {
          this.lastresult = true;
          return true;
        }
        return false;
      };
      GameAnalytics.prototype.checkCompletCase4Up = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase4++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase4Up(cc.v2(currPoint.x + 1, currPoint.y + 1));
          return this.totalcompleteCase4;
        }
        this.totalcompleteCase4 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.checkCompletCase4Down = function(currPoint) {
        if (global_1.default.instance.gamemap[currPoint.x][currPoint.y] == global_1.default.instance.currentPlayerID) {
          this.totalcompleteCase4++;
          this.thelastResultList.length < 10 && this.thelastResultList.push(currPoint);
          this.checkCompletCase4Down(cc.v2(currPoint.x - 1, currPoint.y - 1));
          return this.totalcompleteCase4;
        }
        this.totalcompleteCase4 < 5 && (this.thelastResultList = []);
        return 0;
      };
      GameAnalytics.prototype.onLoad = function() {
        GameAnalytics_1._instance = this;
      };
      GameAnalytics.prototype.checkfinishMyGame = function() {
        var _this = this;
        this.lastresult = false;
        global_1.default.instance.MyTurnPostList.forEach(function(mypos) {
          (_this.checkCompleteCase1(mypos) || _this.checkCompleteCase2(mypos) || _this.checkCompleteCase3(mypos) || _this.checkCompleteCase4(mypos)) && (_this.lastresult = true);
        });
        return this.lastresult;
      };
      GameAnalytics.prototype.start = function() {};
      GameAnalytics.prototype.update = function(dt) {};
      var GameAnalytics_1;
      GameAnalytics._instance = null;
      GameAnalytics = GameAnalytics_1 = __decorate([ ccclass ], GameAnalytics);
      return GameAnalytics;
    }(cc.Component);
    exports.default = GameAnalytics;
    cc._RF.pop();
  }, {
    "./global": "global"
  } ],
  "game-computer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "543e6BUhIlFvKUS/TGiWm8f", "game-computer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("./event-manager");
    var global_1 = require("./global");
    var game_analytic_1 = require("./game-analytic");
    var game_1 = require("./game");
    var AIPlayer_1 = require("./AIPlayer");
    var sound_manager_1 = require("./sound-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TickType;
    (function(TickType) {
      TickType[TickType["CROSS"] = 1] = "CROSS";
      TickType[TickType["NOUGHT"] = 2] = "NOUGHT";
    })(TickType = exports.TickType || (exports.TickType = {}));
    var GameComputer = function(_super) {
      __extends(GameComputer, _super);
      function GameComputer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_map = null;
        _this.tickdata = [];
        _this.gameover = null;
        _this.waitingoppNode = null;
        _this.timerNode = null;
        _this.timerPlayerX = null;
        _this.timerPlayerO = null;
        _this.currentIndicatorX = null;
        _this.currentIndicatorO = null;
        _this.ONameNode = null;
        _this.XNameNode = null;
        _this.onwaitingretryNode = null;
        _this.confirmrematchNode = null;
        _this.rejectconfirmInfoNode = null;
        _this.resultText = [];
        _this.chattext = null;
        _this.chattextcontain = null;
        _this.chatitemprefab = null;
        _this.MAP_SIZE_WIDTH = 35;
        _this.MAP_SIZE_HEIGHT = 30;
        _this.GAME_TURN_TIME = 15;
        _this.isMultiplayer = false;
        _this.localPlayer = null;
        _this.gameStart = false;
        _this.currentGameTime = _this.GAME_TURN_TIME;
        _this.isgameover = false;
        _this.AIstartPoint = cc.v2(10, 10);
        _this.IsHumanTurn = false;
        _this.isHumanWinGame = false;
        return _this;
      }
      GameComputer_1 = GameComputer;
      Object.defineProperty(GameComputer, "instance", {
        get: function() {
          if (null == GameComputer_1._instance) {
            cc.error("Game instance is not init yet");
            return null;
          }
          return GameComputer_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      GameComputer.prototype.initGamemap = function() {
        var indexrow = 0;
        var indexcol = 0;
        global_1.default.instance.AITurnPosList = [];
        global_1.default.instance.HumanTurnPosList = [];
        for (indexrow = 0; indexrow < this.MAP_SIZE_WIDTH; ++indexrow) {
          global_1.default.instance.gamemap[indexrow] = [];
          for (indexcol = 0; indexcol < this.MAP_SIZE_HEIGHT; ++indexcol) global_1.default.instance.gamemap[indexrow][indexcol] = 0;
        }
      };
      GameComputer.prototype.updateAllPlayerName = function() {
        if (global_1.default.instance.isHostRoom) {
          this.XNameNode.string = global_1.default.instance.currentHumanName;
          this.ONameNode.string = global_1.default.instance.currentComputerName;
        } else {
          this.XNameNode.string = global_1.default.instance.currentComputerName;
          this.ONameNode.string = global_1.default.instance.currentHumanName;
        }
      };
      GameComputer.prototype.setInvisibleEnableTime = function(xplayer) {
        if (global_1.default.instance.isYourTurn) {
          this.timerPlayerX.active = xplayer;
          this.timerPlayerO.active = !xplayer;
          this.currentIndicatorX.active = xplayer;
          this.currentIndicatorO.active = !xplayer;
        } else {
          this.timerPlayerX.active = !xplayer;
          this.timerPlayerO.active = xplayer;
          this.currentIndicatorX.active = !xplayer;
          this.currentIndicatorO.active = xplayer;
        }
      };
      GameComputer.prototype.initGameoverScreen = function(idplayerwin) {
        var _this = this;
        if (this.isgameover) return;
        this.isgameover = true;
        this.hideWaitingInputScreen();
        this.drawcompleteLine();
        this.scheduleOnce(function() {
          _this.displayGameOverScreen(idplayerwin);
        }, 2);
      };
      GameComputer.prototype.drawcompleteLine = function() {
        var _this = this;
        sound_manager_1.default.instance.playMusic("levelCompleted", false);
        game_analytic_1.default.instance.thelastResultList.forEach(function(resultpoint) {
          _this.drawWinChess(!_this.isHumanWinGame, resultpoint);
        });
      };
      GameComputer.prototype.displayGameOverScreen = function(idplayerwin) {
        this.gameover.active = true;
        var winstr;
        winstr = idplayerwin ? this.resultText[0] : this.resultText[1];
        this.gameover.getChildByName("maintext").getComponent(cc.Sprite).spriteFrame = winstr;
        this.hideWaitingInputScreen();
      };
      GameComputer.prototype.showWaitingInputScreen = function() {
        this.waitingoppNode.active = true;
      };
      GameComputer.prototype.hideWaitingInputScreen = function() {
        this.waitingoppNode.active = false;
      };
      GameComputer.prototype.checkAndShowGameTurnPlay = function() {
        this.setInvisibleEnableTime(global_1.default.instance.isHostRoom);
        this.IsHumanTurn ? this.hideWaitingInputScreen() : this.showWaitingInputScreen();
      };
      GameComputer.prototype.gameoverClosebtnClick = function() {
        cc.director.loadScene("lobby-controller");
      };
      GameComputer.prototype.updateGameMap = function(position) {
        global_1.default.instance.gamemap[position.x][position.y] = global_1.default.instance.currentPlayerID;
      };
      GameComputer.prototype.tilemapAvailable = function(position) {
        return 0 == global_1.default.instance.gamemap[position.x][position.y];
      };
      GameComputer.prototype.initAllGameData = function() {
        this.currentGameTime = this.GAME_TURN_TIME;
        this.isgameover = false;
      };
      GameComputer.prototype.onLoad = function() {
        cc.view.enableAutoFullScreen(true);
        GameComputer_1._instance = this;
        this.IsHumanTurn = false;
        this.isHumanWinGame = false;
        global_1.default.instance.isHostRoom = false;
        this.registerTouchEvent();
        this.initGamemap();
        this.checkAndShowGameTurnPlay();
        this.updateAllPlayerName();
        this.chattextLayout = this.chattextcontain.getComponentInChildren(cc.Layout);
      };
      GameComputer.prototype.start = function() {};
      GameComputer.prototype.drawWinChess = function(isOwin, pos) {
        var tmpNode;
        var convertPos = this.convertTileIDToPos(pos);
        tmpNode = isOwin ? cc.instantiate(this.tickdata[2]) : cc.instantiate(this.tickdata[3]);
        tmpNode.setPosition(convertPos);
        this.node.addChild(tmpNode);
      };
      GameComputer.prototype.drawPlayerChess = function(ishostgame, pos, needhl) {
        void 0 === needhl && (needhl = false);
        var tmpNode;
        var convertPos = this.convertTileIDToPos(pos);
        tmpNode = ishostgame ? cc.instantiate(this.tickdata[0]) : cc.instantiate(this.tickdata[1]);
        tmpNode.getComponent("tick").needDisplayHL = needhl;
        tmpNode.setPosition(convertPos);
        this.node.addChild(tmpNode);
      };
      GameComputer.prototype.checkValidArea = function(tileID) {
        var result = true;
        (tileID.x < 2 || tileID.x > 18 || tileID.y < 2 || tileID.y > 17) && (result = false);
        return result;
      };
      GameComputer.prototype.getLastHumanTurnPoint = function() {
        return this.lastHumanTurnPoint;
      };
      GameComputer.prototype.onTouchStart = function(event) {
        var posTouch = event.getLocation();
        var tileID = this.getTileTouch(posTouch);
        if (!this.checkValidArea(tileID)) return;
        if (!this.tilemapAvailable(tileID)) return;
        sound_manager_1.default.instance.playEffect("putChessDown", false, global_1.default.instance.soundVolume);
        this.lastHumanTurnPoint = tileID;
        this.updateGameMap(tileID);
        this.drawPlayerChess(global_1.default.instance.isHostRoom, tileID);
        global_1.default.instance.isYourTurn = !global_1.default.instance.isYourTurn;
        this.currentGameTime = this.GAME_TURN_TIME;
        this.checkAndShowGameTurnPlay();
        global_1.default.instance.HumanTurnPosList.push(tileID);
        if (this.checkPlayerCompleteGame(tileID)) {
          this.isHumanWinGame = true;
          this.initGameoverScreen(true);
          return;
        }
        this.changeHumanTurnAndComputer();
      };
      GameComputer.prototype.checkPlayerCompleteGame = function(startpos) {
        return game_analytic_1.default.instance.checkCompleteCase1(startpos) || game_analytic_1.default.instance.checkCompleteCase2(startpos) || game_analytic_1.default.instance.checkCompleteCase3(startpos) || game_analytic_1.default.instance.checkCompleteCase4(startpos);
      };
      GameComputer.prototype.drawAIPlayerChess = function(chesspos) {
        global_1.default.instance.currentPlayerID = game_1.PlayerID.PLAYER2;
        global_1.default.instance.AITurnPosList.push(chesspos);
        this.updateGameMap(chesspos);
        this.drawPlayerChess(true, chesspos, true);
      };
      GameComputer.prototype.onTouchMove = function(event) {};
      GameComputer.prototype.onTouchEnd = function(event) {};
      GameComputer.prototype.update = function(dt) {
        if (false == this.gameStart) {
          cc.log("all ready, start count down.");
          this.gameStart = true;
          this.drawAIPlayerChess(this.AIstartPoint);
          this.changeHumanTurnAndComputer();
        }
        if (this.isgameover) return;
        this.currentGameTime -= cc.director.getDeltaTime();
        if (this.currentGameTime > 0) {
          this.timerNode.getComponent(cc.Label).string = this.seconds2Time(this.currentGameTime).toString();
          this.timerPlayerX.getComponent(cc.Label).string = this.seconds2Time(this.currentGameTime).toString();
          this.timerPlayerO.getComponent(cc.Label).string = this.seconds2Time(this.currentGameTime).toString();
        } else {
          cc.log(" Global.instance.isYourTurn = " + global_1.default.instance.isYourTurn);
          this.IsHumanTurn ? this.initGameoverScreen(false) : this.initGameoverScreen(true);
        }
      };
      GameComputer.prototype.seconds2Time = function(time) {
        time = Math.floor(time);
        if (time < 60) return time > 9 ? "00:" + time.toString() : "00:0" + time;
        var minute = Math.floor(time / 60);
        var second = time - 60 * minute;
        return (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second);
      };
      GameComputer.prototype.getTileTouch = function(pos) {
        var tileVec2 = this.getTilePosition(pos);
        return tileVec2;
      };
      GameComputer.prototype.convertTileIDToPos = function(tile) {
        var tileSize = this.m_map.getTileSize();
        var x = Math.floor(tile.x * tileSize.width);
        var y = Math.floor(tile.y * tileSize.height);
        return cc.v2(x, y);
      };
      GameComputer.prototype.getTilePosition = function(posInPixel) {
        var tileSize = this.m_map.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor(posInPixel.y / tileSize.height);
        return cc.v2(x, y);
      };
      GameComputer.prototype.registerTouchEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      };
      GameComputer.prototype.onWaitingRetryOkButton = function() {
        this.onRematch();
      };
      GameComputer.prototype.onrejectRematchButtonCicked = function() {
        cc.director.loadScene("lobby-controller");
      };
      GameComputer.prototype.onretrybtnClicked = function() {
        this.gameover.active = false;
        this.onwaitingretryNode.active = true;
        this.scheduleOnce(function() {
          cc.director.loadScene("game - computer");
        }, 1.5);
      };
      GameComputer.prototype.onRematch = function() {
        cc.director.loadScene("game");
      };
      GameComputer.prototype.onSendbuttonClicked = function() {
        var textchat = this.chattext.string.toString();
        cc.log("000000000 : " + textchat);
        var tmpNode = cc.instantiate(this.chatitemprefab);
        tmpNode.getChildByName("maintext").getComponent(cc.RichText).string = "<color=#00ff00>" + global_1.default.instance.currentHumanName + "</c><color=#000000> : </c><color=#ffffff>" + textchat + "</color>";
        this.chattextLayout.node.addChild(tmpNode);
        this.chattext.string = "";
        this.chattextcontain.getComponent(cc.ScrollView).scrollToBottom();
      };
      GameComputer.prototype.onSpecialChatTextTouch = function(event, customEventData) {
        var tmpNode = cc.instantiate(this.chatitemprefab);
        tmpNode.getChildByName("maintext").getComponent(cc.RichText).string = "<color=#00ff00>" + global_1.default.instance.currentHumanName + "</c><color=#000000> : </c><color=#ffffff>" + customEventData + "</color>";
        this.chattextLayout.node.addChild(tmpNode);
        this.chattext.string = "";
        this.chattextcontain.getComponent(cc.ScrollView).scrollToBottom();
      };
      GameComputer.prototype.controlAIPlayerGame = function() {
        var posstep = AIPlayer_1.default.instance.getNextAIPlay();
        this.drawAIPlayerChess(posstep);
        if (this.checkPlayerCompleteGame(posstep)) {
          this.initGameoverScreen(false);
          return;
        }
        this.changeHumanTurnAndComputer();
      };
      GameComputer.prototype.changeHumanTurnAndComputer = function() {
        var _this = this;
        this.IsHumanTurn = !this.IsHumanTurn;
        if (this.IsHumanTurn) {
          global_1.default.instance.currentPlayerID = game_1.PlayerID.PLAYER1;
          this.hideWaitingInputScreen();
        } else {
          global_1.default.instance.currentPlayerID = game_1.PlayerID.PLAYER2;
          this.showWaitingInputScreen();
          this.scheduleOnce(function() {
            _this.controlAIPlayerGame();
          }, 1.5);
        }
      };
      GameComputer.prototype.playbuttonclicksound = function() {
        sound_manager_1.default.instance.playEffect("sellectButton", false, global_1.default.instance.soundVolume);
      };
      GameComputer.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      var GameComputer_1;
      GameComputer._instance = null;
      __decorate([ property({
        type: cc.TiledMap,
        tooltip: "Main map"
      }) ], GameComputer.prototype, "m_map", void 0);
      __decorate([ property({
        type: [ cc.Prefab ],
        tooltip: "Tick data array"
      }) ], GameComputer.prototype, "tickdata", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Game over screen"
      }) ], GameComputer.prototype, "gameover", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Waiting opponent in put screen"
      }) ], GameComputer.prototype, "waitingoppNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Display timer"
      }) ], GameComputer.prototype, "timerNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Timer for player X"
      }) ], GameComputer.prototype, "timerPlayerX", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Timer for player O"
      }) ], GameComputer.prototype, "timerPlayerO", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Current indicator for Player X"
      }) ], GameComputer.prototype, "currentIndicatorX", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Current indicator for Player O"
      }) ], GameComputer.prototype, "currentIndicatorO", void 0);
      __decorate([ property(cc.Label) ], GameComputer.prototype, "ONameNode", void 0);
      __decorate([ property(cc.Label) ], GameComputer.prototype, "XNameNode", void 0);
      __decorate([ property(cc.Node) ], GameComputer.prototype, "onwaitingretryNode", void 0);
      __decorate([ property(cc.Node) ], GameComputer.prototype, "confirmrematchNode", void 0);
      __decorate([ property(cc.Node) ], GameComputer.prototype, "rejectconfirmInfoNode", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], GameComputer.prototype, "resultText", void 0);
      __decorate([ property(cc.EditBox) ], GameComputer.prototype, "chattext", void 0);
      __decorate([ property(cc.Node) ], GameComputer.prototype, "chattextcontain", void 0);
      __decorate([ property(cc.Prefab) ], GameComputer.prototype, "chatitemprefab", void 0);
      GameComputer = GameComputer_1 = __decorate([ ccclass ], GameComputer);
      return GameComputer;
    }(cc.Component);
    exports.default = GameComputer;
    cc._RF.pop();
  }, {
    "./AIPlayer": "AIPlayer",
    "./event-manager": "event-manager",
    "./game": "game",
    "./game-analytic": "game-analytic",
    "./global": "global",
    "./sound-manager": "sound-manager"
  } ],
  "game-messages": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "423c5U8vzxEbq4rUHzxJpeX", "game-messages");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameMessage = function() {
      function GameMessage() {}
      GameMessage.SOUND_LOADED = "gm_sound_loaded";
      GameMessage.GLOBAL_LOADED = "gm_global_loaded";
      GameMessage.GAME_WAITING_LOADING_LOBBY = "game_waiting_load_lobby";
      return GameMessage;
    }();
    exports.default = GameMessage;
    cc._RF.pop();
  }, {} ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d970gFen1BRKzZouYQGGne", "game");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Multiplayer_1 = require("./libs/Multiplayer");
    var multiplayer_inst_1 = require("./multiplayer-inst");
    var event_manager_1 = require("./event-manager");
    var global_1 = require("./global");
    var transport_message_1 = require("./core/transport-message");
    var game_analytic_1 = require("./game-analytic");
    var sound_manager_1 = require("./sound-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TickType;
    (function(TickType) {
      TickType[TickType["CROSS"] = 1] = "CROSS";
      TickType[TickType["NOUGHT"] = 2] = "NOUGHT";
    })(TickType = exports.TickType || (exports.TickType = {}));
    var PlayerID;
    (function(PlayerID) {
      PlayerID[PlayerID["PLAYER1"] = 100] = "PLAYER1";
      PlayerID[PlayerID["PLAYER2"] = 200] = "PLAYER2";
    })(PlayerID = exports.PlayerID || (exports.PlayerID = {}));
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_map = null;
        _this.tickdata = [];
        _this.gameover = null;
        _this.waitingoppNode = null;
        _this.timerNode = null;
        _this.timerPlayerX = null;
        _this.timerPlayerO = null;
        _this.currentIndicatorX = null;
        _this.currentIndicatorO = null;
        _this.ONameNode = null;
        _this.XNameNode = null;
        _this.onwaitingretryNode = null;
        _this.confirmrematchNode = null;
        _this.rejectconfirmInfoNode = null;
        _this.resultText = [];
        _this.chattext = null;
        _this.chattextcontain = null;
        _this.chatitemprefab = null;
        _this.waitingconnectNode = null;
        _this.MAP_SIZE_WIDTH = 35;
        _this.MAP_SIZE_HEIGHT = 30;
        _this.isMultiplayer = false;
        _this.localPlayer = null;
        _this.gameStart = false;
        _this.currentGameTime = 15;
        _this.isgameover = false;
        return _this;
      }
      Game_1 = Game;
      Object.defineProperty(Game, "instance", {
        get: function() {
          if (null == Game_1._instance) {
            cc.error("Game instance is not init yet");
            return null;
          }
          return Game_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      Game.prototype.initGamemap = function() {
        var indexrow = 0;
        var indexcol = 0;
        global_1.default.instance.MyTurnPostList = [];
        for (indexrow = 0; indexrow < this.MAP_SIZE_WIDTH; ++indexrow) {
          global_1.default.instance.gamemap[indexrow] = [];
          for (indexcol = 0; indexcol < this.MAP_SIZE_HEIGHT; ++indexcol) global_1.default.instance.gamemap[indexrow][indexcol] = 0;
        }
      };
      Game.prototype.updateAllPlayerName = function() {
        if (global_1.default.instance.isHostRoom) {
          this.XNameNode.string = global_1.default.instance.currentPlayerName;
          this.ONameNode.string = global_1.default.instance.opponentPlayerName;
        } else {
          this.XNameNode.string = global_1.default.instance.opponentPlayerName;
          this.ONameNode.string = global_1.default.instance.currentPlayerName;
        }
      };
      Game.prototype.setInvisibleEnableTime = function(xplayer) {
        if (global_1.default.instance.isYourTurn) {
          this.timerPlayerX.active = xplayer;
          this.timerPlayerO.active = !xplayer;
          this.currentIndicatorX.active = xplayer;
          this.currentIndicatorO.active = !xplayer;
        } else {
          this.timerPlayerX.active = !xplayer;
          this.timerPlayerO.active = xplayer;
          this.currentIndicatorX.active = !xplayer;
          this.currentIndicatorO.active = xplayer;
        }
      };
      Game.prototype.initGameoverScreen = function(idplayerwin) {
        var _this = this;
        if (this.isgameover) return;
        this.isgameover = true;
        this.hideWaitingInputScreen();
        this.drawcompleteLine();
        this.scheduleOnce(function() {
          _this.displayGameOverScreen(idplayerwin);
        }, 2);
      };
      Game.prototype.drawcompleteLine = function() {
        var _this = this;
        sound_manager_1.default.instance.playMusic("levelCompleted", false);
        game_analytic_1.default.instance.thelastResultList.forEach(function(resultpoint) {
          _this.drawWinChess(global_1.default.instance.isHostRoom, resultpoint);
        });
      };
      Game.prototype.displayGameOverScreen = function(idplayerwin) {
        this.gameover.active = true;
        var winstr;
        winstr = idplayerwin ? this.resultText[0] : this.resultText[1];
        this.gameover.getChildByName("maintext").getComponent(cc.Sprite).spriteFrame = winstr;
        this.hideWaitingInputScreen();
      };
      Game.prototype.showWaitingInputScreen = function() {
        this.waitingoppNode.active = true;
      };
      Game.prototype.hideWaitingInputScreen = function() {
        this.waitingoppNode.active = false;
      };
      Game.prototype.checkAndShowGameTurnPlay = function() {
        this.setInvisibleEnableTime(global_1.default.instance.isHostRoom);
        global_1.default.instance.isYourTurn ? this.hideWaitingInputScreen() : this.showWaitingInputScreen();
      };
      Game.prototype.gameoverClosebtnClick = function() {
        multiplayer_inst_1.default.instance.sendMessage("gameover-leave");
        cc.director.loadScene("lobby-controller");
        multiplayer_inst_1.default.instance.quit();
      };
      Game.prototype.updateGameMap = function(position) {
        global_1.default.instance.gamemap[position.x][position.y] = global_1.default.instance.currentPlayerID;
      };
      Game.prototype.tilemapAvailable = function(position) {
        cc.log("Global.instance.gamemap[position.x][position.y] = " + global_1.default.instance.gamemap[position.x][position.y]);
        return 0 == global_1.default.instance.gamemap[position.x][position.y];
      };
      Game.prototype.initAllGameData = function() {
        this.currentGameTime = 15;
        this.isgameover = false;
      };
      Game.prototype.onLoad = function() {
        cc.view.enableAutoFullScreen(true);
        Game_1._instance = this;
        global_1.default.instance.isopponentleftroom = false;
        this.registerTouchEvent();
        this.initGamemap();
        if (null == multiplayer_inst_1.default.instance.localPlayer) {
          cc.log("Init lai Local Player ............... ");
          multiplayer_inst_1.default.instance.initNewLocalPlayer();
        }
        cc.log("Init new Local Player");
        this.localPlayer = multiplayer_inst_1.default.instance.localPlayer;
        multiplayer_inst_1.default.instance.manager.onMessage = this.onMpMessage.bind(this);
        multiplayer_inst_1.default.instance.sendMessage("gameplay-loaded", multiplayer_inst_1.default.instance.localPlayer.id);
        multiplayer_inst_1.default.instance.sendMessage("gameplay-player-name", global_1.default.instance.currentPlayerName);
        this.checkAndShowGameTurnPlay();
        this.updateAllPlayerName();
        this.chattextLayout = this.chattextcontain.getComponentInChildren(cc.Layout);
      };
      Game.prototype.start = function() {};
      Game.prototype.drawWinChess = function(isOwin, pos) {
        var tmpNode;
        var convertPos = this.convertTileIDToPos(pos);
        tmpNode = isOwin ? cc.instantiate(this.tickdata[2]) : cc.instantiate(this.tickdata[3]);
        tmpNode.setPosition(convertPos);
        this.node.addChild(tmpNode);
      };
      Game.prototype.drawPlayerChess = function(ishostgame, pos, fromopp) {
        void 0 === fromopp && (fromopp = false);
        var tmpNode;
        var convertPos = this.convertTileIDToPos(pos);
        tmpNode = ishostgame ? cc.instantiate(this.tickdata[0]) : cc.instantiate(this.tickdata[1]);
        tmpNode.setPosition(convertPos);
        tmpNode.getComponent("tick").needDisplayHL = fromopp;
        this.node.addChild(tmpNode);
      };
      Game.prototype.checkValidArea = function(tileID) {
        var result = true;
        (tileID.x < 2 || tileID.x > 18 || tileID.y < 2 || tileID.y > 17) && (result = false);
        return result;
      };
      Game.prototype.onTouchStart = function(event) {
        if (this.isgameover) return;
        sound_manager_1.default.instance.playEffect("putChessDown", false, global_1.default.instance.soundVolume);
        var posTouch = event.getLocation();
        var tileID = this.getTileTouch(posTouch);
        cc.log("Touch at ID: " + tileID);
        if (!this.checkValidArea(tileID)) return;
        if (!this.tilemapAvailable(tileID)) return;
        this.updateGameMap(tileID);
        global_1.default.instance.MyTurnPostList.push(tileID);
        this.drawPlayerChess(global_1.default.instance.isHostRoom, tileID);
        multiplayer_inst_1.default.instance.sendMessage("game-playing", {
          posx: tileID.x,
          posy: tileID.y,
          playerid: global_1.default.instance.isHostRoom
        });
        global_1.default.instance.isYourTurn = !global_1.default.instance.isYourTurn;
        this.currentGameTime = 15;
        this.checkAndShowGameTurnPlay();
        if (game_analytic_1.default.instance.checkfinishMyGame()) {
          multiplayer_inst_1.default.instance.sendMessage("game-end", {
            winner: false,
            winboard: game_analytic_1.default.instance.thelastResultList
          });
          this.initGameoverScreen(true);
          cc.log("All win point: " + game_analytic_1.default.instance.thelastResultList);
        }
      };
      Game.prototype.onTouchMove = function(event) {};
      Game.prototype.onTouchEnd = function(event) {};
      Game.prototype.update = function(dt) {
        if (false == this.gameStart && multiplayer_inst_1.default.instance.allPlayerReady()) {
          cc.log("all ready, start count down.");
          this.gameStart = true;
          var nameP = cc.sys.localStorage.getItem("usernamecaromli");
          multiplayer_inst_1.default.instance.sendMessage("Start", nameP);
          this.waitingconnectNode.active = false;
        }
        if (this.isgameover) return;
        this.currentGameTime -= cc.director.getDeltaTime();
        if (this.currentGameTime >= 0) {
          this.timerNode.getComponent(cc.Label).string = this.seconds2Time(this.currentGameTime).toString();
          this.timerPlayerX.getComponent(cc.Label).string = this.seconds2Time(this.currentGameTime).toString();
          this.timerPlayerO.getComponent(cc.Label).string = this.seconds2Time(this.currentGameTime).toString();
        } else {
          global_1.default.instance.isYourTurn ? this.initGameoverScreen(false) : this.initGameoverScreen(true);
          multiplayer_inst_1.default.instance.sendMessage("game-end", {
            winner: true,
            winboard: game_analytic_1.default.instance.thelastResultList
          });
        }
      };
      Game.prototype.seconds2Time = function(time) {
        time = Math.floor(time);
        if (time < 60) return time > 9 ? "00:" + time.toString() : "00:0" + time;
        var minute = Math.floor(time / 60);
        var second = time - 60 * minute;
        return (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second);
      };
      Game.prototype.getTileTouch = function(pos) {
        var tileVec2 = this.getTilePosition(pos);
        return tileVec2;
      };
      Game.prototype.convertTileIDToPos = function(tile) {
        var tileSize = this.m_map.getTileSize();
        var x = Math.floor(tile.x * tileSize.width);
        var y = Math.floor(tile.y * tileSize.height);
        return cc.v2(x, y);
      };
      Game.prototype.getTilePosition = function(posInPixel) {
        var tileSize = this.m_map.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor(posInPixel.y / tileSize.height);
        return cc.v2(x, y);
      };
      Game.prototype.registerTouchEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      };
      Game.prototype.onMpMessage = function(message, detail) {
        cc.log("nhan duoc message: " + message.toString());
        switch (message) {
         case Multiplayer_1.multiplayer.MessageCode.PLAYER_LEFT:
         case Multiplayer_1.multiplayer.MessageCode.PLAYER_DISCONNECT:
        }
        if (message == Multiplayer_1.multiplayer.MessageCode.DATA_RECIEVED) {
          cc.log("data receive gameMulti: " + detail.data);
          var data = detail;
          var message_1 = JSON.parse(data.data);
          if ("Start" === message_1.type) this.gameStart = true; else if ("gameplay-player-name" == message_1.type) {
            cc.log("Received message: " + message_1.type);
            var opName = message_1.data;
            global_1.default.instance.opponentPlayerName = opName.toString();
            this.updateAllPlayerName();
          } else if ("gameplay-loaded" == message_1.type) {
            var opID = message_1.data;
            cc.log("nhan duoc player id la: " + opID);
            multiplayer_inst_1.default.instance.getPlayer(opID).loaded = true;
          } else if ("start-game-now" === message_1.type) ; else if ("game-playing" == message_1.type) {
            var mapx = message_1.data.posx;
            var mapy = message_1.data.posy;
            var ishost = message_1.data.playerid;
            cc.log("Nhan duoc gi ko ne: " + mapx + " - " + mapy + " - " + ishost);
            global_1.default.instance.isYourTurn = !global_1.default.instance.isYourTurn;
            this.currentGameTime = 15;
            global_1.default.instance.gamemap[mapx][mapy] = PlayerID.PLAYER2;
            this.checkAndShowGameTurnPlay();
            this.drawPlayerChess(ishost, cc.v2(mapx, mapy), true);
          } else if ("game-play-name" === message_1.type) ; else if ("game-end" == message_1.type) {
            var iswin = message_1.data.winner;
            game_analytic_1.default.instance.thelastResultList = message_1.data.winboard;
            cc.log("RECEIVER WINNER VARIABLE IS: " + iswin + game_analytic_1.default.instance.thelastResultList);
            this.initGameoverScreen(iswin);
          } else if ("game-retry-confirm" == message_1.type) this.onRematch(); else if ("game-retry" == message_1.type) {
            cc.log("get retry message.");
            this.hideWaitingInputScreen();
            this.gameover.active = false;
            this.onwaitingretryNode.active = false;
            this.confirmrematchNode.active = true;
          } else if ("game-retry-reject" == message_1.type) {
            this.gameover.active = false;
            this.onwaitingretryNode.active = false;
            this.confirmrematchNode.active = false;
            this.rejectconfirmInfoNode.active = true;
          } else if ("game-message-chat" == message_1.type) {
            var textreceive = message_1.data;
            var tmpNode = cc.instantiate(this.chatitemprefab);
            tmpNode.getChildByName("maintext").getComponent(cc.RichText).string = "<color=#ff0000>" + global_1.default.instance.opponentPlayerName + "</c><color=#000000> : </c><color=#ffffff>" + textreceive + "</color>";
            this.chattextLayout.node.addChild(tmpNode);
            this.chattextLayout.node.parent.getComponent(cc.ScrollView).scrollToBottom();
          } else if ("gameover-leave" == message_1.type) {
            cc.log("Opponent leave this room, can't rematch");
            global_1.default.instance.isopponentleftroom = true;
            this.gameover.active = false;
            this.onwaitingretryNode.active = false;
            this.confirmrematchNode.active = false;
            this.rejectconfirmInfoNode.active = true;
          }
        }
      };
      Game.prototype.onWaitingRetryOkButton = function() {
        multiplayer_inst_1.default.instance.sendMessage("game-retry-confirm");
        this.onRematch();
      };
      Game.prototype.onrejectRematchButtonCicked = function() {
        multiplayer_inst_1.default.instance.sendMessage("game-retry-reject");
        cc.director.loadScene("lobby-controller");
        multiplayer_inst_1.default.instance.quit();
      };
      Game.prototype.onretrybtnClicked = function() {
        multiplayer_inst_1.default.instance.sendMessage("game-retry");
        this.gameover.active = false;
        this.onwaitingretryNode.active = true;
      };
      Game.prototype.onRematch = function() {
        transport_message_1.default.instance.send("gameplay", "multiplayer", "true");
        cc.director.loadScene("game");
        multiplayer_inst_1.default.instance.manager.startGame();
      };
      Game.prototype.onSendbuttonClicked = function() {
        var textchat = this.chattext.string.toString();
        var tmpNode = cc.instantiate(this.chatitemprefab);
        tmpNode.getChildByName("maintext").getComponent(cc.RichText).string = "<color=#00ff00>" + global_1.default.instance.currentHumanName + "</c><color=#000000> : </c><color=#ffffff>" + textchat + "</color>";
        this.chattextLayout.node.addChild(tmpNode);
        multiplayer_inst_1.default.instance.sendMessage("game-message-chat", textchat);
        this.chattext.string = "";
        this.chattextcontain.getComponent(cc.ScrollView).scrollToBottom();
      };
      Game.prototype.onSpecialChatTextTouch = function(event, customEventData) {
        var tmpNode = cc.instantiate(this.chatitemprefab);
        tmpNode.getChildByName("maintext").getComponent(cc.RichText).string = "<color=#00ff00>" + global_1.default.instance.currentHumanName + "</c><color=#000000> : </c><color=#ffffff>" + customEventData + "</color>";
        this.chattextLayout.node.addChild(tmpNode);
        multiplayer_inst_1.default.instance.sendMessage("game-message-chat", customEventData);
        this.chattext.string = "";
        this.chattextcontain.getComponent(cc.ScrollView).scrollToBottom();
      };
      Game.prototype.playbuttonclicksound = function() {
        sound_manager_1.default.instance.playEffect("sellectButton", false, global_1.default.instance.soundVolume);
      };
      Game.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
        multiplayer_inst_1.default.instance.manager.onMessage = null;
      };
      var Game_1;
      Game._instance = null;
      __decorate([ property({
        type: cc.TiledMap,
        tooltip: "Main map"
      }) ], Game.prototype, "m_map", void 0);
      __decorate([ property({
        type: [ cc.Prefab ],
        tooltip: "Tick data array"
      }) ], Game.prototype, "tickdata", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Game over screen"
      }) ], Game.prototype, "gameover", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Waiting opponent in put screen"
      }) ], Game.prototype, "waitingoppNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Display timer"
      }) ], Game.prototype, "timerNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Timer for player X"
      }) ], Game.prototype, "timerPlayerX", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Timer for player O"
      }) ], Game.prototype, "timerPlayerO", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Current indicator for Player X"
      }) ], Game.prototype, "currentIndicatorX", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "Current indicator for Player O"
      }) ], Game.prototype, "currentIndicatorO", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "ONameNode", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "XNameNode", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "onwaitingretryNode", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "confirmrematchNode", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "rejectconfirmInfoNode", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Game.prototype, "resultText", void 0);
      __decorate([ property(cc.EditBox) ], Game.prototype, "chattext", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "chattextcontain", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "chatitemprefab", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "waitingconnectNode", void 0);
      Game = Game_1 = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./core/transport-message": "transport-message",
    "./event-manager": "event-manager",
    "./game-analytic": "game-analytic",
    "./global": "global",
    "./libs/Multiplayer": "Multiplayer",
    "./multiplayer-inst": "multiplayer-inst",
    "./sound-manager": "sound-manager"
  } ],
  global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0facaTpAb1ASKpJUhUJgEVx", "global");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var game_1 = require("./game");
    var Global = function(_super) {
      __extends(Global, _super);
      function Global() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLoaded = false;
        _this.coliderNode = null;
        _this.currentLevel = 0;
        _this.playerLevel = 0;
        _this.isQuickMatch = false;
        _this.soundOn = true;
        _this.isHostRoom = false;
        _this.isYourTurn = false;
        _this.isopponentleftroom = false;
        _this.numOfTurnPlayed = 0;
        _this.availableRoomID = [];
        _this.usingAIPlayer = false;
        _this.isAIturn = false;
        _this.maxLengthDefend = 0;
        _this.currentPlayerName = "";
        _this.opponentPlayerName = "";
        _this.currentComputerName = "";
        _this.currentHumanName = "";
        _this.currentPlayerID = game_1.PlayerID.PLAYER1;
        _this.NULLPOS = cc.v2(-1, -1);
        _this.soundVolume = 20;
        _this.gamemap = [];
        _this.AITurnPosList = [];
        _this.HumanTurnPosList = [];
        _this.MyTurnPostList = [];
        _this.roomnamelistforAI = [ [ "Andyoo", "Stefan", "JimmyBon", "Nilas", "Cerok1", "Cwlin", "Connar", "duffyduck" ], [ "Packer5", "Nilas", "JimmyBon", "Stefan", "Tigo", "maybeme8", "joijo", "namsolo" ], [ "califorlove", "WhiteRat", "shadowX", "Nilas", "joijo", "Cwlin", "checker07", "Breinnon" ] ];
        _this.playernameListforFake = [ [ "Andyoo", "WhiteRat", "shadowX", "Nilas", "Cerok1", "Cwlin", "Connar", "duffyduck", "nhocon17", "longeng", "Tigo", "joijo", "yoyoyo21", "maybeme8", "Vodichthu", "panjik", "Breinnon", "flakus", "a123456", "Asteann", "Stefan", "fsnoral", "Cires", "ffm3010", "namsolo", "Yililoth", "checker07", "aaaa33", "Mariiboku", "Qilat" ], [ "Packer5", "hanacha09", "tbt2000", "jimiliu31", "Chuoi2017", "Cwlin", "Connar", "bsn5209", "Loser13", "jojojo20", "tbm1123", "Kikine", "havinafun", "maybeme8", "Vodichthu", "panjik", "Breinnon", "Flakus", "Gbbcherry", "Asteann", "Orangeman", "chick2000", "Cires", "ffm3010", "namsolo", "Yililoth", "Euro22", "Funnyboy", "Mariiboku", "mercurylove" ], [ "califorlove", "Arnakov77", "Cownit1", "Nicolas", "Kenachan", "Onepunch", "Connar", "stingboy", "nhocon17", "longeng", "Justforfun", "Lovegame", "yoyoyo21", "maybeme8", "Piupiupiu", "panjik", "Breinnon", "flakus", "York2102", "Asteann", "quandiablo", "fsnoral", "Tinanguyen", "giatudivang", "namsolo", "Yililoth", "checker07", "Packer2", "richierichie", "Venusclub" ] ];
        return _this;
      }
      Global_1 = Global;
      Object.defineProperty(Global, "instance", {
        get: function() {
          null == Global_1._instance && (Global_1._instance = new Global_1());
          return Global_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      Global.prototype.checkValidArea = function(tileID) {
        var result = true;
        (tileID.x < 2 || tileID.x > 18 || tileID.y < 2 || tileID.y > 17) && (result = false);
        return result;
      };
      Global.prototype.onLoad = function() {};
      var Global_1;
      Global._instance = null;
      Global = Global_1 = __decorate([ ccclass ], Global);
      return Global;
    }(cc.Component);
    exports.default = Global;
    cc._RF.pop();
  }, {
    "./game": "game"
  } ],
  "lb-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98d05lvHwlBHYJN5dTALcTo", "lb-item");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LBItem = function(_super) {
      __extends(LBItem, _super);
      function LBItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rank = null;
        _this.nickname = null;
        _this.score = null;
        return _this;
      }
      LBItem.prototype.setData = function(rank, name, score) {
        this.rank.string = rank;
        this.nickname.string = name;
        this.score.string = "" + score;
      };
      __decorate([ property(cc.Label) ], LBItem.prototype, "rank", void 0);
      __decorate([ property(cc.Label) ], LBItem.prototype, "nickname", void 0);
      __decorate([ property(cc.Label) ], LBItem.prototype, "score", void 0);
      LBItem = __decorate([ ccclass ], LBItem);
      return LBItem;
    }(cc.Component);
    exports.default = LBItem;
    cc._RF.pop();
  }, {} ],
  "leaderboard-db": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b69e17zQchATqZxB0g43Sw7", "leaderboard-db");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var firebase_inst_1 = require("./firebase-inst");
    var LeaderboardDb = function() {
      function LeaderboardDb() {
        null == firebase_inst_1.default.app && firebase_inst_1.default.init();
      }
      Object.defineProperty(LeaderboardDb, "instance", {
        get: function() {
          null == this._intance && (this._intance = new LeaderboardDb());
          return this._intance;
        },
        enumerable: true,
        configurable: true
      });
      LeaderboardDb.prototype.updateName = function(id, name, success) {
        firebase_inst_1.default.db.child(id).once("value", function(snapshot) {
          if (snapshot && snapshot.exists()) {
            snapshot.ref.child("name").set(name);
            success && success(null);
          } else success && success({
            error: LeaderboardDb.ErrorCode.ID_NOT_EXIST,
            message: "Id is not exist in db"
          });
        });
      };
      LeaderboardDb.prototype.updateScore = function(id, name, score, greater) {
        void 0 === greater && (greater = true);
        firebase_inst_1.default.db.child(id).once("value", function(snapshot) {
          if (snapshot && snapshot.exists()) {
            if (greater) {
              if (snapshot.val()["score"] <= score) {
                snapshot.ref.child("score").set(score);
                snapshot.ref.child("name").set(name);
              }
            } else if (snapshot.val()["score"] >= score) {
              snapshot.ref.child("score").set(score);
              snapshot.ref.child("name").set(name);
            }
          } else {
            snapshot.ref.child("score").set(score);
            snapshot.ref.child("name").set(name);
          }
        });
      };
      LeaderboardDb.prototype.addScore = function(id, name, score, greater) {
        void 0 === greater && (greater = true);
        firebase_inst_1.default.db.child(id).once("value", function(snapshot) {
          if (snapshot && snapshot.exists()) if (greater) {
            var newscore = snapshot.val()["score"] + score;
            snapshot.ref.child("score").set(newscore);
            snapshot.ref.child("name").set(name);
          } else {
            var newscore = snapshot.val()["score"] - score;
            snapshot.ref.child("score").set(newscore);
            snapshot.ref.child("name").set(name);
          } else {
            snapshot.ref.child("score").set(score);
            snapshot.ref.child("name").set(name);
          }
        });
      };
      LeaderboardDb.prototype.getTopScore = function(limit, success, greater) {
        void 0 === greater && (greater = true);
        greater ? firebase_inst_1.default.db.orderByChild("score").limitToLast(limit).once("value", function(snapshot) {
          var records = [];
          snapshot.forEach(function(child) {
            records.unshift({
              name: child.val().name,
              score: child.val().score
            });
            return false;
          });
          success(records);
        }) : firebase_inst_1.default.db.orderByChild("score").limitToFirst(limit).once("value", function(snapshot) {
          var records = [];
          snapshot.forEach(function(child) {
            records.push({
              name: child.val().name,
              score: child.val().score
            });
            return false;
          });
          success(records);
        });
      };
      LeaderboardDb._intance = null;
      return LeaderboardDb;
    }();
    exports.LeaderboardDb = LeaderboardDb;
    (function(LeaderboardDb) {
      var ErrorCode;
      (function(ErrorCode) {
        ErrorCode[ErrorCode["ID_NOT_EXIST"] = 0] = "ID_NOT_EXIST";
      })(ErrorCode = LeaderboardDb.ErrorCode || (LeaderboardDb.ErrorCode = {}));
    })(LeaderboardDb = exports.LeaderboardDb || (exports.LeaderboardDb = {}));
    exports.LeaderboardDb = LeaderboardDb;
    cc._RF.pop();
  }, {
    "./firebase-inst": "firebase-inst"
  } ],
  loader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "006dciL7TZEgISjnDqBxBlV", "loader");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var transport_message_1 = require("./transport-message");
    var player_ref_1 = require("../server-code/player-ref");
    var firebase_inst_1 = require("../libs/firebase-inst");
    var multiplayer_inst_1 = require("../multiplayer-inst");
    var event_manager_1 = require("../event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loader = function(_super) {
      __extends(Loader, _super);
      function Loader() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextScene = "lobby-controller";
        _this.targetLoad = "";
        _this._loadInstances = {
          PlayerRef: false,
          Multiplayer: false
        };
        _this._loadGame = false;
        return _this;
      }
      Loader_1 = Loader;
      Loader.prototype.onLoad = function() {
        cc.log("loader Load.");
        if (false == Loader_1.loaded) if ("loader" != this.getCurrentSceneName()) {
          var nextScene = "" != this.targetLoad ? this.targetLoad : this.getCurrentSceneName();
          transport_message_1.default.instance.send("loader", "nextScene", nextScene);
          cc.log("Loading loader screen now");
          cc.director.loadScene("loader");
        } else {
          Loader_1.loaded = true;
          var next = transport_message_1.default.instance.get("loader", "nextScene");
          this.nextScene = null != next ? next : this.nextScene;
        }
      };
      Loader.prototype.start = function() {
        cc.log("Current screen is : " + this.getCurrentSceneName());
        "loader" == this.getCurrentSceneName() && this.initLoader();
      };
      Loader.prototype.initLoader = function() {
        var _this = this;
        cc.log("Init loader.");
        firebase_inst_1.default.init();
        player_ref_1.default.current;
        multiplayer_inst_1.default.instance;
        event_manager_1.default.instance.registerOnce("PlayerRef-init", function() {
          _this._loadInstances["PlayerRef"] = true;
        });
        event_manager_1.default.instance.registerOnce("Multiplayer-init", function() {
          _this._loadInstances["Multiplayer"] = true;
        });
      };
      Loader.prototype.update = function(dt) {
        var allLoaded = true;
        for (var inst in this._loadInstances) if (false == this._loadInstances[inst]) {
          allLoaded = false;
          break;
        }
        if (allLoaded && !this._loadGame) {
          this._loadGame = true;
          cc.log("next scene di man.");
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
        cc.log("Return Scene: " + scene);
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
    "../event-manager": "event-manager",
    "../libs/firebase-inst": "firebase-inst",
    "../multiplayer-inst": "multiplayer-inst",
    "../server-code/player-ref": "player-ref",
    "./transport-message": "transport-message"
  } ],
  "lobby-computer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de5caN/vYJJSo8JhlgDQe+7", "lobby-computer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var lobby_player_item_1 = require("./lobby-player-item");
    var global_1 = require("./global");
    var sound_manager_1 = require("./sound-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LobbyComputer = function(_super) {
      __extends(LobbyComputer, _super);
      function LobbyComputer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerLeft = null;
        _this.playerRight = null;
        return _this;
      }
      LobbyComputer.prototype.onLoad = function() {
        cc.view.enableAutoFullScreen(true);
        cc.log("Computer name is: " + global_1.default.instance.currentComputerName);
        this.playerLeft.setData("0", global_1.default.instance.currentComputerName, true);
        this.playerRight.setData("1", global_1.default.instance.currentHumanName, false);
        this.scheduleOnce(function() {
          cc.director.loadScene("game - computer");
        }, 1.5);
      };
      LobbyComputer.prototype.start = function() {};
      LobbyComputer.prototype.playbuttonclicksound = function() {
        sound_manager_1.default.instance.playEffect("sellectButton", false, global_1.default.instance.soundVolume);
      };
      LobbyComputer.prototype.update = function(dt) {};
      LobbyComputer.prototype.onButtonQuitRoom = function() {
        cc.director.loadScene("lobby-controller");
      };
      __decorate([ property(lobby_player_item_1.default) ], LobbyComputer.prototype, "playerLeft", void 0);
      __decorate([ property(lobby_player_item_1.default) ], LobbyComputer.prototype, "playerRight", void 0);
      LobbyComputer = __decorate([ ccclass ], LobbyComputer);
      return LobbyComputer;
    }(cc.Component);
    exports.default = LobbyComputer;
    cc._RF.pop();
  }, {
    "./global": "global",
    "./lobby-player-item": "lobby-player-item",
    "./sound-manager": "sound-manager"
  } ],
  "lobby-controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34959kyMwVCG5ryKMi6FKzg", "lobby-controller");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var multiplayer_inst_1 = require("../multiplayer-inst");
    var transport_message_1 = require("../core/transport-message");
    var player_ref_1 = require("../server-code/player-ref");
    var sound_manager_1 = require("../sound-manager");
    var global_1 = require("../global");
    var event_manager_1 = require("../event-manager");
    var game_messages_1 = require("../game-messages");
    var LobbyController = function(_super) {
      __extends(LobbyController, _super);
      function LobbyController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roomlist = null;
        _this.inputnameNode = null;
        _this.labelUserName = null;
        _this.namebox = null;
        _this.waitingloadinglobbyNode = null;
        _this.newgamebtn = null;
        _this.findmatchtbn = null;
        return _this;
      }
      LobbyController.prototype.onLoad = function() {
        cc.view.enableAutoFullScreen(true);
        this.waitingloadinglobbyNode.active = false;
        event_manager_1.default.instance.register(game_messages_1.default.GAME_WAITING_LOADING_LOBBY, this.showLoadingLobbyWaiting, this);
        this.playthemeSound();
        this.playthemesoundSchedule();
      };
      LobbyController.prototype.start = function() {
        this.newgamebtn.enabled = true;
        this.findmatchtbn.enabled = true;
      };
      LobbyController.prototype.playthemesoundSchedule = function() {
        var _this = this;
        this.schedule(function() {
          _this.playthemeSound();
        }, 32);
      };
      LobbyController.prototype.playthemeSound = function() {
        sound_manager_1.default.instance.playMusic("theme_song", false);
      };
      LobbyController.prototype.playbuttonclicksound = function() {
        sound_manager_1.default.instance.playEffect("sellectButton", false, global_1.default.instance.soundVolume);
      };
      LobbyController.prototype.onEnable = function() {
        global_1.default.instance.currentPlayerName = cc.sys.localStorage.getItem("usernamecaromli");
        cc.log("Current player name: " + global_1.default.instance.currentPlayerName);
        null == global_1.default.instance.currentPlayerName ? this.inputnameNode.active = true : this.labelUserName.string = global_1.default.instance.currentPlayerName;
        global_1.default.instance.currentHumanName = global_1.default.instance.currentPlayerName;
      };
      LobbyController.prototype.onEditNameButtonClicked = function() {
        this.inputnameNode.active = true;
      };
      LobbyController.prototype.showRoomListButtonClick = function() {
        this.roomlist.active = false;
        this.roomlist.active = true;
      };
      LobbyController.prototype.onCreateRoom = function() {
        this.unscheduleAllCallbacks();
        sound_manager_1.default.instance.stopAll();
        if (!multiplayer_inst_1.default.instance.manager.isInitialized()) {
          alert("Server is not initialized, please wait 3 second and try again.");
          return;
        }
        multiplayer_inst_1.default.instance.manager.createRoom("", function(error, room) {
          if (null == error) {
            cc.log("Create room success");
            transport_message_1.default.instance.send("lobby", "room", JSON.stringify(room));
            cc.director.loadScene("lobby");
          }
        }, 2, 1);
      };
      LobbyController.prototype.autojoinButtonClick = function() {
        global_1.default.instance.availableRoomID = [];
        multiplayer_inst_1.default.instance.manager.getRooms(function(lobbies) {
          cc.log("Get all lobbies again ................. :" + lobbies.length);
          if (0 == lobbies.length) return;
          lobbies.forEach(function(lobby) {
            cc.log("Add room Id : " + lobby.id);
            global_1.default.instance.availableRoomID.push(lobby.id);
          });
          cc.log("Number of available rooms to join: " + global_1.default.instance.availableRoomID.length);
          var randomnum = Math.floor(Math.random() * global_1.default.instance.availableRoomID.length) + 0;
          cc.log("We have random room id: " + randomnum);
          global_1.default.instance.isHostRoom = false;
          global_1.default.instance.isYourTurn = false;
          cc.log("We join room id: " + global_1.default.instance.availableRoomID[randomnum]);
          multiplayer_inst_1.default.instance.manager.joinRoom(global_1.default.instance.availableRoomID[randomnum], function(error, roomInfo) {
            if (null == error) {
              transport_message_1.default.instance.send("lobby", "room", JSON.stringify(roomInfo));
              cc.director.loadScene("lobby");
            } else cc.log("Joined fail error");
          });
        });
      };
      LobbyController.prototype.okbtninputnameclicked = function() {
        var username = this.namebox.string;
        if (0 == username.length) return;
        cc.sys.localStorage.setItem("usernamecaromli", username);
        player_ref_1.default.current.setName(username);
        multiplayer_inst_1.default.instance.manager.setPlayerName(username);
        global_1.default.instance.currentPlayerName = username;
        global_1.default.instance.currentHumanName = username;
        this.labelUserName.string = username;
        this.inputnameNode.active = false;
        cc.director.loadScene("lobby-controller");
      };
      LobbyController.prototype.showLoadingLobbyWaiting = function() {
        this.waitingloadinglobbyNode.active = true;
        this.findmatchtbn.enabled = false;
        this.newgamebtn.enabled = false;
      };
      LobbyController.prototype.onDestroy = function() {
        cc.log("Exit from lobby controller.");
        event_manager_1.default.instance.unregisterTarget(this);
        this.unscheduleAllCallbacks();
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "All available room"
      }) ], LobbyController.prototype, "roomlist", void 0);
      __decorate([ property(cc.Node) ], LobbyController.prototype, "inputnameNode", void 0);
      __decorate([ property(cc.Label) ], LobbyController.prototype, "labelUserName", void 0);
      __decorate([ property(cc.EditBox) ], LobbyController.prototype, "namebox", void 0);
      __decorate([ property(cc.Node) ], LobbyController.prototype, "waitingloadinglobbyNode", void 0);
      __decorate([ property(cc.Button) ], LobbyController.prototype, "newgamebtn", void 0);
      __decorate([ property(cc.Button) ], LobbyController.prototype, "findmatchtbn", void 0);
      LobbyController = __decorate([ ccclass ], LobbyController);
      return LobbyController;
    }(cc.Component);
    exports.default = LobbyController;
    cc._RF.pop();
  }, {
    "../core/transport-message": "transport-message",
    "../event-manager": "event-manager",
    "../game-messages": "game-messages",
    "../global": "global",
    "../multiplayer-inst": "multiplayer-inst",
    "../server-code/player-ref": "player-ref",
    "../sound-manager": "sound-manager"
  } ],
  "lobby-player-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "482e6lkJORJubYvWWWWkdFi", "lobby-player-item");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("./multiplayer-inst");
    var sound_manager_1 = require("./sound-manager");
    var global_1 = require("./global");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LobbyPlayerItem = function(_super) {
      __extends(LobbyPlayerItem, _super);
      function LobbyPlayerItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerName = null;
        _this.kickButton = null;
        _this.master = false;
        _this.anim = null;
        return _this;
      }
      LobbyPlayerItem.prototype.onLoad = function() {
        this.kickButton.node.active = false;
      };
      LobbyPlayerItem.prototype.setData = function(playerId, name, master) {
        if (null == playerId || "" == playerId) {
          cc.log("player left");
          this.playerName.string = "wating...";
          this.kickButton.node.active = false;
        } else {
          this.playerId = playerId;
          this.playerName.string = name;
          this.setMaster(master);
          this.playerId == multiplayer_inst_1.default.instance.manager.getMyPlayer().id && (this.kickButton.node.active = false);
        }
      };
      LobbyPlayerItem.prototype.setMaster = function(master) {
        if (master) {
          this.kickButton.node.active = false;
          this.master = master;
        } else {
          this.kickButton.node.active = true;
          this.master = master;
        }
      };
      LobbyPlayerItem.prototype.playbuttonclicksound = function() {
        sound_manager_1.default.instance.stopAll();
        sound_manager_1.default.instance.playEffect("sellectButton", false, global_1.default.instance.soundVolume);
      };
      LobbyPlayerItem.prototype.onButtonKickOut = function() {
        multiplayer_inst_1.default.instance.manager.kickOut(this.playerId);
      };
      __decorate([ property(cc.Label) ], LobbyPlayerItem.prototype, "playerName", void 0);
      __decorate([ property(cc.Button) ], LobbyPlayerItem.prototype, "kickButton", void 0);
      LobbyPlayerItem = __decorate([ ccclass ], LobbyPlayerItem);
      return LobbyPlayerItem;
    }(cc.Component);
    exports.default = LobbyPlayerItem;
    cc._RF.pop();
  }, {
    "./global": "global",
    "./multiplayer-inst": "multiplayer-inst",
    "./sound-manager": "sound-manager"
  } ],
  lobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c7adwnXidI77tIKY45dxpl", "lobby");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var transport_message_1 = require("./core/transport-message");
    var Multiplayer_1 = require("./libs/Multiplayer");
    var lobby_player_item_1 = require("./lobby-player-item");
    var multiplayer_inst_1 = require("./multiplayer-inst");
    var event_manager_1 = require("./event-manager");
    var global_1 = require("./global");
    var sound_manager_1 = require("./sound-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Lobby = function(_super) {
      __extends(Lobby, _super);
      function Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameMode = null;
        _this.playerLeft = null;
        _this.playerRight = null;
        _this.startButton = null;
        _this.players = [];
        return _this;
      }
      Lobby.prototype.onLoad = function() {
        cc.view.enableAutoFullScreen(true);
        this.players[0] = {
          id: "",
          slot: this.playerLeft
        };
        this.players[1] = {
          id: "",
          slot: this.playerRight
        };
        event_manager_1.default.instance.register("multiplayer-message", this.onMpMessage, this);
      };
      Lobby.prototype.start = function() {
        var room = transport_message_1.default.instance.get("lobby", "room");
        var roomInfo = JSON.parse(room);
        cc.log("room info: " + room);
        null == multiplayer_inst_1.default.instance.manager.onMessage && (multiplayer_inst_1.default.instance.manager.onMessage = this.onMpMessage.bind(this));
        if (roomInfo) {
          if (roomInfo.players.length > 2) {
            cc.error("Invalid number player in room: " + roomInfo.players.length);
            return;
          }
          for (var i = 0; i < roomInfo.players.length; i++) {
            var player = roomInfo.players[i];
            this.players[i].id = player.id;
            this.players[i].slot.setData(player.id, player.name, multiplayer_inst_1.default.instance.manager.isMaster(player.id));
          }
          multiplayer_inst_1.default.instance.manager.isMaster(multiplayer_inst_1.default.instance.manager.getMyPlayer().id) ? this.startButton.node.active = true : this.startButton.node.active = false;
          this.startButton.node.active = false;
        }
      };
      Lobby.prototype.onMpMessage = function(message, detail) {
        cc.log("Multiplayer message: " + message);
        switch (message) {
         case Multiplayer_1.multiplayer.MessageCode.PLAYER_LEFT:
          var player = detail;
          for (var i = 0; i < 2; i++) if (this.players[i].id == player.id) {
            this.players[i].id = "";
            this.players[i].slot.setData(null, "", false);
          }
          multiplayer_inst_1.default.instance.manager.isMaster(multiplayer_inst_1.default.instance.manager.getMyPlayer().id) && (this.startButton.node.active = false);
          break;

         case Multiplayer_1.multiplayer.MessageCode.PLAYER_JOINED:
          cc.log("co nguoi join roi ne.");
          var player = detail;
          if (null == multiplayer_inst_1.default.instance.localPlayer) {
            cc.log("Init lai Local Player ............... ");
            multiplayer_inst_1.default.instance.initNewLocalPlayer();
          }
          for (var i = 0; i < 2; i++) {
            if ("" == this.players[i].id) {
              this.players[i].id = player.id;
              this.players[i].slot.setData(player.id, player.name, multiplayer_inst_1.default.instance.manager.isMaster(player.id));
              multiplayer_inst_1.default.instance.manager.isMaster(multiplayer_inst_1.default.instance.manager.getMyPlayer().id) && (this.startButton.node.active = true);
              break;
            }
            1 == i && cc.warn("Player join but there have not slot");
          }
          break;

         case Multiplayer_1.multiplayer.MessageCode.KICKED_OUT:
          multiplayer_inst_1.default.instance.manager.quit();
          transport_message_1.default.instance.send("lobby-controller", "page", "1");
          cc.director.loadScene("lobby-controller");
          break;

         case Multiplayer_1.multiplayer.MessageCode.GAME_STARTED:
          cc.log("Game start");
          transport_message_1.default.instance.send("gameplay", "multiplayer", "true");
          cc.director.loadScene("game");
          break;

         case Multiplayer_1.multiplayer.MessageCode.MASTER_ROOM_CHANGE:
          var player = detail;
          if (multiplayer_inst_1.default.instance.manager.getMyPlayer().id == player.id) {
            for (var i = 0; i < 2; i++) "" != this.players[i].id && this.players[i].id != player.id ? this.players[i].slot.setMaster(false) : this.players[i].id == player.id && this.players[i].slot.setMaster(true);
            this.startButton.node.active = true;
          }
          break;

         case Multiplayer_1.multiplayer.MessageCode.DATA_RECIEVED:
          var data = detail;
        }
        if (message == Multiplayer_1.multiplayer.MessageCode.DATA_RECIEVED) {
          cc.log("data receive gameMulti: " + detail.data);
          var data = detail;
          var message_1 = JSON.parse(data.data);
          if ("Start" === message_1.type) ; else if ("gameplay-player-name" == message_1.type) {
            cc.log("Received message: " + message_1.type);
            var opName = message_1.data;
            global_1.default.instance.opponentPlayerName = opName.toString();
          } else if ("gameplay-loaded" == message_1.type) {
            var opID = message_1.data;
            cc.log("nhan duoc player id la: " + opID);
            multiplayer_inst_1.default.instance.getPlayer(opID).loaded = true;
          } else if ("start-game-now" === message_1.type) ; else if ("game-play-name" === message_1.type) ; else if ("Startfromlobby" == message_1.type) {
            cc.log("Receive data start game from lobby.");
            var opName = message_1.data;
            global_1.default.instance.opponentPlayerName = opName.toString();
          }
        }
      };
      Lobby.prototype.onButtonQuitRoom = function() {
        multiplayer_inst_1.default.instance.manager.quit();
        cc.director.loadScene("lobby-controller");
      };
      Lobby.prototype.onButtonStartGame = function() {
        global_1.default.instance.isHostRoom = true;
        global_1.default.instance.isYourTurn = true;
        multiplayer_inst_1.default.instance.manager.startGame();
        transport_message_1.default.instance.send("gameplay", "multiplayer", "true");
        cc.director.loadScene("game");
      };
      Lobby.prototype.playbuttonclicksound = function() {
        sound_manager_1.default.instance.playEffect("sellectButton", false, global_1.default.instance.soundVolume);
      };
      Lobby.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
        multiplayer_inst_1.default.instance.manager.onMessage = null;
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "display"
      }) ], Lobby.prototype, "gameMode", void 0);
      __decorate([ property(lobby_player_item_1.default) ], Lobby.prototype, "playerLeft", void 0);
      __decorate([ property(lobby_player_item_1.default) ], Lobby.prototype, "playerRight", void 0);
      __decorate([ property(cc.Button) ], Lobby.prototype, "startButton", void 0);
      Lobby = __decorate([ ccclass ], Lobby);
      return Lobby;
    }(cc.Component);
    exports.default = Lobby;
    cc._RF.pop();
  }, {
    "./core/transport-message": "transport-message",
    "./event-manager": "event-manager",
    "./global": "global",
    "./libs/Multiplayer": "Multiplayer",
    "./lobby-player-item": "lobby-player-item",
    "./multiplayer-inst": "multiplayer-inst",
    "./sound-manager": "sound-manager"
  } ],
  mainmenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63c9bPcvOlE+biciHcqpA9g", "mainmenu");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainMenu = function(_super) {
      __extends(MainMenu, _super);
      function MainMenu() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MainMenu.prototype.on1vs1ButtonClick = function() {
        cc.director.loadScene("game");
      };
      MainMenu.prototype.onLoad = function() {};
      MainMenu.prototype.start = function() {};
      MainMenu = __decorate([ ccclass ], MainMenu);
      return MainMenu;
    }(cc.Component);
    exports.default = MainMenu;
    cc._RF.pop();
  }, {} ],
  "manager-loader": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2201na+f1OO6TAHcSM9dys", "manager-loader");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var sound_manager_1 = require("./sound-manager");
    var ManagerLoader = function(_super) {
      __extends(ManagerLoader, _super);
      function ManagerLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ManagerLoader.prototype.onLoad = function() {
        cc.log("manager loader - onload");
        null == cc.find("Global") ? cc.loader.loadRes("Global", function(error, prefab_global) {
          cc.log("loadRes global");
          var global = cc.instantiate(prefab_global);
          global.name = "Global";
          cc.director.getScene().addChild(global);
          sound_manager_1.default.instance.init();
        }) : cc.log("Global already load!");
      };
      ManagerLoader.prototype.initManager = function() {};
      ManagerLoader = __decorate([ ccclass ], ManagerLoader);
      return ManagerLoader;
    }(cc.Component);
    exports.default = ManagerLoader;
    cc._RF.pop();
  }, {
    "./sound-manager": "sound-manager"
  } ],
  mastergamecontrol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d3a3wLlq1G+KqjPg3EtV8X", "mastergamecontrol");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var game_1 = require("./game");
    var MasterGameControl = function(_super) {
      __extends(MasterGameControl, _super);
      function MasterGameControl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MasterGameControl.prototype.onLoad = function() {};
      MasterGameControl.prototype.start = function() {};
      MasterGameControl.prototype.registerControllKey = function() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      };
      MasterGameControl.prototype.unregisterControllKey = function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      };
      MasterGameControl.prototype.onKeyDown = function(event) {
        cc.log("Co goi vao day ko troi: " + event.keyCode);
        switch (event.keyCode) {
         case cc.macro.KEY.enter:
          game_1.default.instance.onSendbuttonClicked();
        }
      };
      MasterGameControl.prototype.onDestroy = function() {
        this.unregisterControllKey();
      };
      MasterGameControl.prototype.update = function(dt) {};
      MasterGameControl = __decorate([ ccclass ], MasterGameControl);
      return MasterGameControl;
    }(cc.Component);
    exports.default = MasterGameControl;
    cc._RF.pop();
  }, {
    "./game": "game"
  } ],
  "multiplayer-inst": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "677a2DPxepJ26KTEEWcL2+f", "multiplayer-inst");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Multiplayer_1 = require("./libs/Multiplayer");
    var config_1 = require("./config");
    var player_ref_1 = require("./server-code/player-ref");
    var player_multi_1 = require("./server-code/player-multi");
    var event_manager_1 = require("./event-manager");
    var player_multi_2 = require("./server-code/player-multi");
    var Multiplayer = function() {
      function Multiplayer() {
        this._impl = null;
        this.players = {};
      }
      Object.defineProperty(Multiplayer, "instance", {
        get: function() {
          if (null == this._instance) {
            this._instance = new Multiplayer();
            this._instance.init();
          }
          return this._instance;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Multiplayer.prototype, "manager", {
        get: function() {
          return this._impl;
        },
        enumerable: true,
        configurable: true
      });
      Multiplayer.prototype.init = function() {
        this._impl = new Multiplayer_1.multiplayer.Manager(config_1.default.PROJECT_ID);
        this._impl.onMessage = this.onMpMessage.bind(this);
        cc.log(" ------------ Register lai cai khac ne. ---------------- ");
      };
      Multiplayer.prototype.onMpMessage = function(message, detail) {
        switch (message) {
         case Multiplayer_1.multiplayer.MessageCode.ROOM_CREATED:
         case Multiplayer_1.multiplayer.MessageCode.ROOM_JOINED:
          if (null == detail.error) {
            var room = detail.room;
            for (var i = 0; i < room.players.length; i++) {
              var player = room.players[i];
              var type = player.id === this._impl.getMyPlayer().id ? player_multi_1.PlayerType.LOCAL : player_multi_1.PlayerType.REMOTE;
              cc.log("player id create room : " + player.id);
              this.players[player.id] = new player_multi_2.default(player.id, player.name, type, true);
            }
          }
          break;

         case Multiplayer_1.multiplayer.MessageCode.PLAYER_JOINED:
          var player = detail;
          cc.log("player id player join : " + player.id);
          this.players[player.id] = new player_multi_2.default(player.id, player.name, player_multi_1.PlayerType.REMOTE, true);
          break;

         case Multiplayer_1.multiplayer.MessageCode.PLAYER_LEFT:
          var player = detail;
          this.players[player.id] ? delete this.players[player.id] : cc.warn("Player not exist: " + player.id);
          break;

         case Multiplayer_1.multiplayer.MessageCode.INITIALIZED:
          cc.log("Set My player ................. ");
          event_manager_1.default.instance.dispatch("Multiplayer-init");
          this._impl.setPlayerName(player_ref_1.default.current.name);
          this._impl.setPlayerId(player_ref_1.default.current.id);
        }
        cc.log(" GO GO GO GO GO GO");
        event_manager_1.default.instance.dispatch("multiplayer-message", message, detail);
      };
      Multiplayer.prototype.initNewLocalPlayer = function() {
        cc.log("PlayerRef.current.name = " + player_ref_1.default.current.name + "    " + player_ref_1.default.current.id);
        this._impl.setPlayerName(player_ref_1.default.current.name);
        this._impl.setPlayerId(player_ref_1.default.current.id);
      };
      Object.defineProperty(Multiplayer.prototype, "localPlayer", {
        get: function() {
          return this.players[this._impl.getMyPlayer().id];
        },
        enumerable: true,
        configurable: true
      });
      Multiplayer.prototype.getPlayer = function(id) {
        if (this.players[id]) return this.players[id];
        cc.warn("Player is not exist");
        return null;
      };
      Multiplayer.prototype.allPlayerReady = function() {
        var ready = true;
        for (var playerId in this.players) if (false == this.players[playerId].ready) {
          ready = false;
          break;
        }
        return ready;
      };
      Multiplayer.prototype.amIMaster = function() {
        return this._impl.isMaster(this._impl.getMyPlayer().id);
      };
      Multiplayer.prototype.quit = function() {
        this._impl.quit();
      };
      Multiplayer.prototype.reset = function() {
        this._impl.quit();
        this.players = {};
        event_manager_1.default.instance.remove("multiplayer-message");
      };
      Multiplayer.prototype.rematch = function() {
        for (var playerId in this.players) {
          var player = this.players[playerId];
          this.players[playerId] = new player_multi_2.default(player.id, player.name, player.type, player.multiplay);
        }
        event_manager_1.default.instance.remove("multiplayer-message");
      };
      Multiplayer.prototype.sendMessageNew = function(type, data) {
        void 0 === data && (data = null);
        this._impl.sendMessage(JSON.stringify({
          type: type,
          data: data
        }));
      };
      Multiplayer.prototype.sendMessage = function(type, data) {
        void 0 === data && (data = null);
        this._impl.sendMessage(JSON.stringify({
          type: type,
          data: data
        }));
      };
      Multiplayer._instance = null;
      return Multiplayer;
    }();
    exports.default = Multiplayer;
    cc._RF.pop();
  }, {
    "./config": "config",
    "./event-manager": "event-manager",
    "./libs/Multiplayer": "Multiplayer",
    "./server-code/player-multi": "player-multi",
    "./server-code/player-ref": "player-ref"
  } ],
  "player-element": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "697e55Hf/JMI6GKJDSzRgor", "player-element");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerElement = function(_super) {
      __extends(PlayerElement, _super);
      function PlayerElement() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.namelabel = null;
        return _this;
      }
      PlayerElement.prototype.onLoad = function() {};
      PlayerElement.prototype.start = function() {};
      PlayerElement.prototype.setData = function(pname) {
        this.namelabel.string = pname;
      };
      PlayerElement.prototype.update = function(dt) {};
      __decorate([ property({
        type: cc.Label,
        tooltip: "name of player"
      }) ], PlayerElement.prototype, "namelabel", void 0);
      PlayerElement = __decorate([ ccclass ], PlayerElement);
      return PlayerElement;
    }(cc.Component);
    exports.default = PlayerElement;
    cc._RF.pop();
  }, {} ],
  "player-multi": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7d7atUMqRJE4sv6tnq+HEu", "player-multi");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ccclass = cc._decorator.ccclass;
    var multiplayer_inst_1 = require("../multiplayer-inst");
    var event_manager_1 = require("../event-manager");
    var PlayerType;
    (function(PlayerType) {
      PlayerType[PlayerType["LOCAL"] = 0] = "LOCAL";
      PlayerType[PlayerType["REMOTE"] = 1] = "REMOTE";
      PlayerType[PlayerType["BOSS"] = 2] = "BOSS";
    })(PlayerType = exports.PlayerType || (exports.PlayerType = {}));
    var PlayerMessage;
    (function(PlayerMessage) {
      PlayerMessage[PlayerMessage["READY"] = 0] = "READY";
      PlayerMessage[PlayerMessage["START"] = 1] = "START";
      PlayerMessage[PlayerMessage["START_FIGHT_TIME"] = 2] = "START_FIGHT_TIME";
      PlayerMessage[PlayerMessage["SHOOT_ONE"] = 3] = "SHOOT_ONE";
      PlayerMessage[PlayerMessage["SHOOT_THREE"] = 4] = "SHOOT_THREE";
      PlayerMessage[PlayerMessage["REMATCH"] = 5] = "REMATCH";
    })(PlayerMessage = exports.PlayerMessage || (exports.PlayerMessage = {}));
    var PlayerResult;
    (function(PlayerResult) {
      PlayerResult[PlayerResult["RAW"] = 0] = "RAW";
      PlayerResult[PlayerResult["WIN"] = 1] = "WIN";
      PlayerResult[PlayerResult["LOSE"] = 2] = "LOSE";
    })(PlayerResult = exports.PlayerResult || (exports.PlayerResult = {}));
    var Player = function() {
      function Player(id, name, type, multiplay) {
        this.ready = false;
        this.type = null;
        this.id = "";
        this.name = "";
        this.multiplay = false;
        this.id = id;
        this.name = name;
        this.type = type;
        this.multiplay = multiplay;
      }
      Object.defineProperty(Player.prototype, "loaded", {
        set: function(value) {
          if (value) {
            this.ready = true;
            cc.log("co goi set ok ne.");
          }
        },
        enumerable: true,
        configurable: true
      });
      Player.prototype.onLoad = function() {};
      Player.prototype.start = function() {};
      Player.prototype.update = function() {};
      Player.prototype.sendMessage = function(message, data) {
        cc.log(" co send message nghen ...............");
        multiplayer_inst_1.default.instance.sendMessageNew(message, data);
        event_manager_1.default.instance.dispatch("multiplayer-message", message, data);
      };
      Player = __decorate([ ccclass ], Player);
      return Player;
    }();
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../event-manager": "event-manager",
    "../multiplayer-inst": "multiplayer-inst"
  } ],
  "player-ref": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83a1c8x1UVOwrA+v8WVEUNY", "player-ref");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var firebase_inst_1 = require("../libs/firebase-inst");
    var event_manager_1 = require("../event-manager");
    var PlayerRef = function() {
      function PlayerRef() {
        this._id = "";
        this._name = "NickName";
      }
      Object.defineProperty(PlayerRef, "current", {
        get: function() {
          if (null == this._current) {
            this._current = new PlayerRef();
            this._current.init();
            this._current.authFirebase();
          }
          return this._current;
        },
        enumerable: true,
        configurable: true
      });
      PlayerRef.prototype.authFirebase = function() {
        null == firebase_inst_1.default.app && firebase_inst_1.default.init();
        firebase_inst_1.default.app.auth().onAuthStateChanged(function(user) {
          if (user) {
            PlayerRef.current.setId(user.uid);
            cc.log("Login anon success: " + user.uid);
            event_manager_1.default.instance.dispatch("PlayerRef-init", "success");
          }
        });
        firebase_inst_1.default.app.auth().signInAnonymously().catch(function(error) {
          cc.warn("Authentication anon error: " + error.message);
        });
      };
      PlayerRef.prototype.init = function() {
        null != cc.sys.localStorage.getItem("usernamecaromli") && (this._name = cc.sys.localStorage.getItem("usernamecaromli"));
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
        enumerable: true,
        configurable: true
      });
      PlayerRef.prototype.setName = function(name) {
        this._name = name;
      };
      PlayerRef._current = null;
      return PlayerRef;
    }();
    exports.default = PlayerRef;
    cc._RF.pop();
  }, {
    "../event-manager": "event-manager",
    "../libs/firebase-inst": "firebase-inst"
  } ],
  playerlist: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "afa79WLAUZIVaz0XuYmNUON", "playerlist");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_1 = require("./global");
    var utils_1 = require("./utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerList = function(_super) {
      __extends(PlayerList, _super);
      function PlayerList() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerdataelem = null;
        return _this;
      }
      PlayerList.prototype.onLoad = function() {
        this.content = this.node.getComponentInChildren(cc.Layout);
        this.content.node.removeAllChildren();
        this.displayAllPlayer();
      };
      PlayerList.prototype.start = function() {};
      PlayerList.prototype.displayAllPlayer = function() {
        var _this = this;
        var fakelistleng = global_1.default.instance.playernameListforFake.length;
        cc.log("fake list length: " + fakelistleng);
        var randomplayerlist = utils_1.Utils.getDirectionRandom(global_1.default.instance.playernameListforFake.length);
        this.content.node.removeAllChildren();
        global_1.default.instance.playernameListforFake[randomplayerlist].forEach(function(pname) {
          var node = cc.instantiate(_this.playerdataelem);
          node.getComponent("player-element").setData(pname);
          _this.content.node.addChild(node);
        });
        this.content.node.parent.getComponent(cc.ScrollView).scrollToBottom();
      };
      PlayerList.prototype.update = function(dt) {};
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "Data for player element"
      }) ], PlayerList.prototype, "playerdataelem", void 0);
      PlayerList = __decorate([ ccclass ], PlayerList);
      return PlayerList;
    }(cc.Component);
    exports.default = PlayerList;
    cc._RF.pop();
  }, {
    "./global": "global",
    "./utils": "utils"
  } ],
  popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff293tq5MhDY7rjWOUIlb+M", "popup");
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
        this.node.setLocalZOrder(1e3);
      };
      Popup.prototype.showInfoPopup = function(content, closeCallback) {
        var node = cc.instantiate(this.dialogPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = cc.find("Canvas");
        blockInput.left = 0;
        blockInput.right = 0;
        node.getChildByName("content").getComponent(cc.Label).string = content;
        node.getChildByName("positivebutton").active = false;
        node.getChildByName("negativebutton").active = false;
        var button = node.getChildByName("okbutton").getComponent(cc.Button);
        button.node.on("click", function() {
          node.removeFromParent();
          closeCallback && closeCallback();
        });
        cc.find("Canvas").addChild(node);
      };
      Popup.prototype.showConfirmPopup = function(content, positiveButLabel, negativeButLabel, positiveCallback, negativeCallback) {
        var node = cc.instantiate(this.dialogPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = cc.find("Canvas");
        blockInput.left = 0;
        blockInput.right = 0;
        node.getChildByName("content").getComponent(cc.Label).string = content;
        node.getChildByName("okbutton").active = false;
        node.getChildByName("positivebutton").getChildByName("Label").getComponent(cc.Label).string = positiveButLabel;
        node.getChildByName("negativebutton").getChildByName("Label").getComponent(cc.Label).string = negativeButLabel;
        var button1 = node.getChildByName("positivebutton").getComponent(cc.Button);
        button1.node.on("click", function() {
          node.removeFromParent();
          positiveCallback && positiveCallback();
        });
        var button2 = node.getChildByName("negativebutton").getComponent(cc.Button);
        button2.node.on("click", function() {
          node.removeFromParent();
          negativeCallback && negativeCallback();
        });
        cc.find("Canvas").addChild(node);
      };
      Popup.prototype.showWaitingPopup = function(content) {
        var node = cc.instantiate(this.waitingPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = cc.find("Canvas");
        blockInput.left = 0;
        blockInput.right = 0;
        node.getChildByName("content").getComponentInChildren(cc.Label).string = content;
        this.waitingPopupNode = node;
        cc.find("Canvas").addChild(node);
      };
      Popup.prototype.hideWaitingPopup = function() {
        this.waitingPopupNode.removeFromParent();
      };
      Popup.prototype.showNotify = function(content, duration) {
        void 0 === duration && (duration = 3);
        var node = cc.instantiate(this.waitingPopup);
        node.getChildByName("blockinput").removeFromParent();
        node.getChildByName("content").getComponentInChildren(cc.Label).string = content;
        cc.find("Canvas").addChild(node);
        this.scheduleOnce(function() {
          node.removeFromParent();
        }, duration);
      };
      var Popup_1;
      Popup._instance = null;
      __decorate([ property(cc.Prefab) ], Popup.prototype, "dialogPopup", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "waitingPopup", void 0);
      Popup = Popup_1 = __decorate([ ccclass ], Popup);
      return Popup;
    }(cc.Component);
    exports.default = Popup;
    cc._RF.pop();
  }, {} ],
  "room-find": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cd68P5MflF8pHU32wsJ1TB", "room-find");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("../multiplayer-inst");
    var global_1 = require("../global");
    var utils_1 = require("../utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoomFind = function(_super) {
      __extends(RoomFind, _super);
      function RoomFind() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roomitem = null;
        _this.statusText = null;
        return _this;
      }
      RoomFind.prototype.onLoad = function() {
        this.content = this.node.getComponentInChildren(cc.Layout);
        this.content.node.removeAllChildren();
      };
      RoomFind.prototype.getLobbies = function() {
        var _this = this;
        multiplayer_inst_1.default.instance.manager.getRooms(function(lobbies) {
          _this.content.node.removeAllChildren();
          _this.statusText.node.active = false;
          lobbies.forEach(function(lobby) {
            var node = cc.instantiate(_this.roomitem);
            var name = lobby.master.name;
            var player = lobby.playerInRoom + "/" + lobby.maxPlayer;
            node.getComponent("roomelement").setData(lobby.id, name, lobby.type, player);
            _this.content.node.addChild(node);
          });
          _this.createComputerroom();
          _this.content.node.parent.getComponent(cc.ScrollView).scrollToTop();
        });
      };
      RoomFind.prototype.createComputerroom = function() {
        var _this = this;
        global_1.default.instance.roomnamelistforAI[this.randomroomlist].forEach(function(roomname) {
          var node = cc.instantiate(_this.roomitem);
          node.getComponent("roomelement").setData(0, roomname, 0, 0, true);
          _this.content.node.addChild(node);
        });
      };
      RoomFind.prototype.start = function() {};
      RoomFind.prototype.onEnable = function() {
        var _this = this;
        var lenofairoom = global_1.default.instance.roomnamelistforAI.length;
        this.randomroomlist = utils_1.Utils.getDirectionRandom(lenofairoom);
        this.getLobbies();
        this.schedule(function() {
          _this.getLobbies();
        }, 1);
      };
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "data for 1 room"
      }) ], RoomFind.prototype, "roomitem", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "text no room"
      }) ], RoomFind.prototype, "statusText", void 0);
      RoomFind = __decorate([ ccclass ], RoomFind);
      return RoomFind;
    }(cc.Component);
    exports.default = RoomFind;
    cc._RF.pop();
  }, {
    "../global": "global",
    "../multiplayer-inst": "multiplayer-inst",
    "../utils": "utils"
  } ],
  roomelement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0767b4/UGFNmYZrh760Pq1G", "roomelement");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("../multiplayer-inst");
    var transport_message_1 = require("../core/transport-message");
    var global_1 = require("../global");
    var sound_manager_1 = require("../sound-manager");
    var event_manager_1 = require("../event-manager");
    var game_messages_1 = require("../game-messages");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoomElement = function(_super) {
      __extends(RoomElement, _super);
      function RoomElement() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roomorder = null;
        _this.roomtime = null;
        _this.player1Name = null;
        _this.player2Name = null;
        _this.id = "";
        _this.isComputerRoom = false;
        _this.roomComputerName = "";
        return _this;
      }
      RoomElement.prototype.onLoad = function() {};
      RoomElement.prototype.start = function() {};
      RoomElement.prototype.playbuttonclicksound = function() {
        sound_manager_1.default.instance.stopAll();
        sound_manager_1.default.instance.playEffect("sellectButton", false, global_1.default.instance.soundVolume);
      };
      RoomElement.prototype.joinbuttonClicked = function() {
        event_manager_1.default.instance.dispatch(game_messages_1.default.GAME_WAITING_LOADING_LOBBY);
        if (this.isComputerRoom) {
          global_1.default.instance.usingAIPlayer = true;
          global_1.default.instance.currentComputerName = this.roomComputerName;
          cc.director.loadScene("lobby-computer");
          return;
        }
        cc.log("Join room: " + this.id);
        global_1.default.instance.isHostRoom = false;
        global_1.default.instance.isYourTurn = false;
        multiplayer_inst_1.default.instance.manager.joinRoom(this.id, function(error, roomInfo) {
          if (null == error) {
            transport_message_1.default.instance.send("lobby", "room", JSON.stringify(roomInfo));
            cc.director.loadScene("lobby");
          } else cc.log("Joined fail error");
        });
      };
      RoomElement.prototype.setData = function(id, time_room, name1, name2, iscomputer) {
        void 0 === iscomputer && (iscomputer = false);
        this.id = id;
        this.roomorder.string = id;
        this.roomtime.string = time_room;
        this.player1Name.string = name1;
        this.player2Name.string = name2;
        this.isComputerRoom = iscomputer;
        iscomputer && (this.roomComputerName = time_room);
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "order number of room"
      }) ], RoomElement.prototype, "roomorder", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "time of room"
      }) ], RoomElement.prototype, "roomtime", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "Name of player 1"
      }) ], RoomElement.prototype, "player1Name", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "Name of Player 2"
      }) ], RoomElement.prototype, "player2Name", void 0);
      RoomElement = __decorate([ ccclass ], RoomElement);
      return RoomElement;
    }(cc.Component);
    exports.default = RoomElement;
    cc._RF.pop();
  }, {
    "../core/transport-message": "transport-message",
    "../event-manager": "event-manager",
    "../game-messages": "game-messages",
    "../global": "global",
    "../multiplayer-inst": "multiplayer-inst",
    "../sound-manager": "sound-manager"
  } ],
  "sound-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b74dajPdNIJYDu8Pvte63B", "sound-manager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var event_manager_1 = require("./event-manager");
    var game_messages_1 = require("./game-messages");
    var SoundManager = function() {
      function SoundManager() {
        this.sounds = {};
        this.playingSounds = {};
        this.initialized = false;
        this.isMute = false;
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
      SoundManager.prototype.init = function() {
        var _this = this;
        cc.loader.loadResDir("sound", function(error, assets, urls) {
          if (urls.length > 0) {
            assets.forEach(function(sound, index) {
              if (-1 != urls[index].indexOf("sound/background") || -1 != urls[index].indexOf("sound/effect")) {
                var key = urls[index].substring(urls[index].lastIndexOf("/") + 1, urls[index].length).toLowerCase();
                _this.sounds[key] = sound;
              }
            });
            _this.initialized = true;
            event_manager_1.default.instance.dispatch(game_messages_1.default.SOUND_LOADED);
          }
        });
      };
      SoundManager.prototype.playMusic = function(clipName, loop, volume) {
        void 0 === loop && (loop = false);
        void 0 === volume && (volume = 1);
        if (this.isMute) return;
        clipName = clipName.toLowerCase();
        if (this.sounds[clipName]) {
          cc.log("play music: " + clipName);
          var id = cc.audioEngine.play(this.sounds[clipName], loop, volume);
          this.playingSounds[clipName] = id;
        } else cc.error("playMusic - clipName: " + clipName + " not found");
      };
      SoundManager.prototype.playEffect = function(clipName, loop, volume) {
        void 0 === loop && (loop = false);
        void 0 === volume && (volume = 1);
        cc.log("SManager play effect with name: " + clipName);
        if (this.isMute) return;
        clipName = clipName.toLowerCase();
        if (this.sounds[clipName]) {
          cc.log("play effect: " + clipName);
          var id = cc.audioEngine.play(this.sounds[clipName], loop, volume);
          this.playingSounds[clipName] = id;
        } else cc.error("playEffect - clipName: " + clipName + " not found");
      };
      SoundManager.prototype.playRandom = function(clipsName, loop, volume) {
        void 0 === loop && (loop = false);
        void 0 === volume && (volume = 1);
        if (this.isMute) return;
        var idx = Math.floor(Math.random() * clipsName.length);
        var clipName = clipsName[idx].toLowerCase();
        if (this.sounds[clipName]) {
          cc.log("play random: " + clipName);
          var id = cc.audioEngine.play(this.sounds[clipName], loop, volume);
          this.playingSounds[clipName] = id;
        } else cc.error("playRandom - clipName: " + clipsName[idx] + " not found");
      };
      SoundManager.prototype.pause = function(clipName) {
        if (this.isMute) return;
        clipName = clipName.toLowerCase();
        void 0 != this.playingSounds[clipName] ? cc.audioEngine.pause(this.playingSounds[clipName]) : cc.warn("Pause sound: " + clipName + " is not in playing list");
      };
      SoundManager.prototype.resume = function(clipName) {
        if (this.isMute) return;
        clipName = clipName.toLowerCase();
        void 0 != this.playingSounds[clipName] ? cc.audioEngine.resume(this.playingSounds[clipName]) : cc.warn("Resume sound: " + clipName + " is not in playing list");
      };
      SoundManager.prototype.stop = function(clipName) {
        if (this.isMute) return;
        cc.log("stop sound: " + clipName);
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName]) {
          cc.audioEngine.stop(this.playingSounds[clipName]);
          delete this.playingSounds[clipName];
        } else cc.warn("Stop sound: " + clipName + " is not in playing list");
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
        if (this.isMute) return;
        cc.audioEngine.resumeAll();
      };
      SoundManager.prototype.stopAll = function() {
        if (this.isMute) return;
        cc.log("stop all sound");
        cc.audioEngine.stopAll();
      };
      var SoundManager_1;
      SoundManager._instance = null;
      SoundManager = SoundManager_1 = __decorate([ ccclass ], SoundManager);
      return SoundManager;
    }();
    exports.default = SoundManager;
    cc._RF.pop();
  }, {
    "./event-manager": "event-manager",
    "./game-messages": "game-messages"
  } ],
  tick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94d23onuiZKZ4VsR3wwaPJS", "tick");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var game_1 = require("./game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Tick = function(_super) {
      __extends(Tick, _super);
      function Tick() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ticktype = game_1.TickType.CROSS;
        _this.hlframe = null;
        _this.needDisplayHL = false;
        return _this;
      }
      Tick.prototype.onLoad = function() {};
      Tick.prototype.start = function() {
        this.needDisplayHL || (this.hlframe.enabled = false);
      };
      Tick.prototype.onEnable = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.needDisplayHL = false;
          _this.hlframe.enabled = false;
        }, 1.5);
      };
      Tick.prototype.update = function(dt) {};
      __decorate([ property({
        type: cc.Enum(game_1.TickType),
        tooltip: "Type of player's tick"
      }) ], Tick.prototype, "ticktype", void 0);
      __decorate([ property({
        type: cc.Sprite,
        tooltip: "High light frame"
      }) ], Tick.prototype, "hlframe", void 0);
      Tick = __decorate([ ccclass ], Tick);
      return Tick;
    }(cc.Component);
    exports.default = Tick;
    cc._RF.pop();
  }, {
    "./game": "game"
  } ],
  "transport-message": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbad9VHbZJJnYrpak8iS4Da", "transport-message");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TransportMessage = function() {
      function TransportMessage() {
        this._messages = {};
      }
      Object.defineProperty(TransportMessage, "instance", {
        get: function() {
          null == this._instance && (this._instance = new TransportMessage());
          return this._instance;
        },
        enumerable: true,
        configurable: true
      });
      TransportMessage.prototype.send = function(to, message, content) {
        void 0 === content && (content = "");
        this._messages[to] || (this._messages[to] = {});
        this._messages[to][message] = content;
      };
      TransportMessage.prototype.get = function(name, message, deleteAfterRead) {
        void 0 === deleteAfterRead && (deleteAfterRead = true);
        if (this._messages[name] && null != this._messages[name][message]) return this._messages[name][message];
        return null;
      };
      TransportMessage._instance = null;
      return TransportMessage;
    }();
    exports.default = TransportMessage;
    cc._RF.pop();
  }, {} ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cdffDVgQ5K95egXmLIXhBY", "utils");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Utils = function() {
      function Utils() {}
      Utils.getDirectionRandom = function(maxnum) {
        var numRate = Math.floor(Math.random() * maxnum) + 0;
        return numRate;
      };
      return Utils;
    }();
    exports.Utils = Utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AIPlayer", "AIPlayer1", "AIPlayer2", "AIPlayerAttackDeep2", "config", "loader", "popup", "transport-message", "entername-controller", "event-manager", "game-analytic", "game-computer", "game-messages", "game", "global", "lb-item", "Multiplayer", "firebase-inst", "leaderboard-db", "lobby-computer", "lobby-player-item", "lobby", "mainmenu", "manager-loader", "mastergamecontrol", "lobby-controller", "room-find", "roomelement", "multiplayer-inst", "player-element", "playerlist", "player-multi", "player-ref", "sound-manager", "tick", "utils" ]);