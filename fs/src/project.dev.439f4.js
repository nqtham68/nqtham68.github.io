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
  Multiplayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a77aJhHHBO0oebSgbTBcNK", "Multiplayer");
    "use strict";
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
            _this.onMessage && _this.onMessage(MessageCode.INITIALIZED, null);
            _this.signalChannel.getTimeOffset(function(time) {
              _this.timeOffset = time;
              _this.signalChannel.setConnect(false);
            });
          });
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
                connection_1.channel.send("tesst data 2");
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
                    connection.channel.send("tesst data");
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
            var val = snapshot.val();
            if (val) {
              var master = snapshot.val()[Object.keys(snapshot.val())[0]].player;
              _this.lobbyRef.child(room + "/master").set(master);
              success(master);
            }
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
  "animation-in-out": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7777byGX1OnpX1HPI2yThK", "animation-in-out");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AnimInOut = function(_super) {
      __extends(AnimInOut, _super);
      function AnimInOut() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.anim = null;
        return _this;
      }
      AnimInOut.prototype.onLoad = function() {
        this.anim = this.node.getComponent(cc.Animation);
      };
      AnimInOut.prototype.onEnable = function() {
        this.anim.play(this.anim.defaultClip.name);
      };
      AnimInOut = __decorate([ ccclass ], AnimInOut);
      return AnimInOut;
    }(cc.Component);
    exports.default = AnimInOut;
    cc._RF.pop();
  }, {} ],
  "boss-input": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78625QBGwZGy4SxEtl/+Ft5", "boss-input");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../core/event-manager");
    var game_1 = require("./game");
    var BossInput = function() {
      function BossInput() {
        this.gameEnd = false;
        this.shoot3Count = 0;
        this.player = null;
        this.gameMode = null;
      }
      BossInput.prototype.init = function(player, mode) {
        this.gameMode = mode;
        this.player = player;
        event_manager_1.default.instance.registerOnce("start-fight", this.onFight, this);
        return this;
      };
      BossInput.prototype.onFight = function() {
        var _this = this;
        this.player.startFightTime = Date.now();
        if (this.gameMode == game_1.GameMode.ONE_SHOOT) {
          var shootTime = 10 + 590 * cc.random0To1();
          cc.log("boss shoot time: " + shootTime);
          setTimeout(function() {
            _this.player.shoot1();
          }, shootTime);
        } else if (this.gameMode == game_1.GameMode.THREE_SHOOT) {
          var time = 100 + 600 * cc.random0To1();
          setTimeout(this.shoot3Mode.bind(this), time);
        }
      };
      BossInput.prototype.shoot3Mode = function() {
        var type = Math.round(cc.random0To1());
        this.shoot3Count++;
        if (this.shoot3Count < 6) {
          this.player.shoot3(0 == type);
          var time = 100 + 600 * cc.random0To1();
          setTimeout(this.shoot3Mode.bind(this), time);
        }
      };
      return BossInput;
    }();
    exports.default = BossInput;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "./game": "game"
  } ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6efbbGajtDX47bDRlGSj62", "config");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config = function() {
      function Config() {}
      Config.PROJECT_ID = "FastestShoot";
      return Config;
    }();
    exports.default = Config;
    cc._RF.pop();
  }, {} ],
  "count-down": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9be3eOwTN9ETLSxqzihqyF+", "count-down");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CountDown = function(_super) {
      __extends(CountDown, _super);
      function CountDown() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.anim = null;
        return _this;
      }
      CountDown.prototype.onLoad = function() {
        var _this = this;
        this.anim = this.node.getComponent(cc.Animation);
        this.node.active = false;
        event_manager_1.default.instance.registerOnce("start-countdown", function() {
          cc.log("start count down");
          _this.node.active = true;
          _this.anim.play(_this.anim.defaultClip.name);
        }, this);
      };
      CountDown.prototype.onFight = function() {
        event_manager_1.default.instance.dispatch("start-fight");
      };
      CountDown.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      CountDown = __decorate([ ccclass ], CountDown);
      return CountDown;
    }(cc.Component);
    exports.default = CountDown;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager"
  } ],
  "event-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6793aH0I3NJm6wSOX4/SOAz", "event-manager");
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
    cc._RF.push(module, "cdc76aytsdLKaoZNoZVQ7Qj", "firebase-inst");
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
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b1f6U+wpBNTJQW3qxrpGGS", "game");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("./multiplayer-inst");
    var Multiplayer_1 = require("../libs/Multiplayer");
    var event_manager_1 = require("../core/event-manager");
    var transport_message_1 = require("../core/transport-message");
    var tapzone_1 = require("./tapzone");
    var loader_1 = require("../core/loader");
    var boss_input_1 = require("./boss-input");
    var player_behavior_1 = require("./player-behavior");
    var local_input_1 = require("./local-input");
    var player_1 = require("./player");
    var remote_input_1 = require("./remote-input");
    var popup_1 = require("../core/popup");
    var leaderboard_db_1 = require("../libs/leaderboard-db");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executionOrder = _a.executionOrder;
    var GameState;
    (function(GameState) {
      GameState[GameState["LOADING"] = 0] = "LOADING";
      GameState[GameState["COUNT_DOWN"] = 1] = "COUNT_DOWN";
      GameState[GameState["FIGHTING"] = 2] = "FIGHTING";
      GameState[GameState["END"] = 3] = "END";
    })(GameState = exports.GameState || (exports.GameState = {}));
    var GameMode;
    (function(GameMode) {
      GameMode[GameMode["ONE_SHOOT"] = 1] = "ONE_SHOOT";
      GameMode[GameMode["THREE_SHOOT"] = 3] = "THREE_SHOOT";
    })(GameMode = exports.GameMode || (exports.GameMode = {}));
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.resultText = null;
        _this.mainButton = null;
        _this.rematchButton = null;
        _this.tapzone = null;
        _this.leftPlayer = null;
        _this.rightPlayer = null;
        _this.state = GameState.LOADING;
        _this.shootMode = GameMode.ONE_SHOOT;
        _this.isMultiplayer = false;
        _this.zones = null;
        _this.localPlayer = null;
        _this.remotePlayer = null;
        _this.rematch = false;
        return _this;
      }
      Object.defineProperty(Game.prototype, "gameState", {
        get: function() {
          return this.state;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Game.prototype, "gameMode", {
        get: function() {
          return this.shootMode;
        },
        enumerable: true,
        configurable: true
      });
      Game.prototype.onLoad = function() {
        var _this = this;
        if (!loader_1.default.loaded) return;
        null != transport_message_1.default.instance.get("gameplay", "multiplayer") && (this.isMultiplayer = true);
        var mode = transport_message_1.default.instance.get("gameplay", "mode");
        null != mode && (this.shootMode = parseInt(mode));
        event_manager_1.default.instance.registerOnce("start-fight", function() {
          _this.state = GameState.FIGHTING;
          _this.shootMode == GameMode.THREE_SHOOT && (_this.zones = tapzone_1.TapZoneGen.generateZone(6));
          _this.shootMode == GameMode.THREE_SHOOT && _this.zones.forEach(function(zone, idx) {
            var node = cc.instantiate(_this.tapzone);
            node.getComponent(tapzone_1.default).setType(idx % 2);
            node.setPosition(zone.x, zone.y);
            _this.node.addChild(node);
          });
        }, this);
        if (this.isMultiplayer) {
          event_manager_1.default.instance.register("multiplayer-message", this.onMpMessage, this);
          this.localPlayer = multiplayer_inst_1.default.instance.localPlayer;
          this.localPlayer.setBehavior(this.leftPlayer);
          new local_input_1.LocalInput().init(this.localPlayer, this.gameMode);
          for (var id in multiplayer_inst_1.default.instance.players) {
            var player = multiplayer_inst_1.default.instance.players[id];
            if (player.id != this.localPlayer.id) {
              this.remotePlayer = player;
              this.remotePlayer.setBehavior(this.rightPlayer);
              new remote_input_1.default().init();
            }
          }
        } else {
          this.remotePlayer = new player_1.default("boss", "Boss", player_1.PlayerType.BOSS, false);
          this.remotePlayer.setBehavior(this.rightPlayer);
          this.remotePlayer.loaded = true;
          new boss_input_1.default().init(this.remotePlayer, this.gameMode);
          this.localPlayer = new player_1.default("local", cc.sys.localStorage.getItem("user-name"), player_1.PlayerType.LOCAL, false);
          this.localPlayer.setBehavior(this.leftPlayer);
          new local_input_1.LocalInput().init(this.localPlayer, this.gameMode);
        }
      };
      Game.prototype.start = function() {
        if (!loader_1.default.loaded) return;
        this.localPlayer.loaded = true;
        if (false == this.isMultiplayer) {
          this.state = GameState.COUNT_DOWN;
          event_manager_1.default.instance.dispatch("start-countdown");
        }
      };
      Game.prototype.update = function(dt) {
        dragonBones.WorldClock.clock.advanceTime(dt);
        if (this.isMultiplayer && this.state == GameState.LOADING && multiplayer_inst_1.default.instance.amIMaster() && multiplayer_inst_1.default.instance.allPlayerReady()) {
          multiplayer_inst_1.default.instance.sendMessage(player_1.PlayerMessage.START);
          this.state = GameState.COUNT_DOWN;
          event_manager_1.default.instance.dispatch("start-countdown");
        }
        if (this.state == GameState.FIGHTING) if (this.gameMode == GameMode.ONE_SHOOT) if (0 != this.localPlayer.shootTime && 0 != this.remotePlayer.shootTime) {
          var result = this.localPlayer.shootTime == this.remotePlayer.shootTime ? 0 : this.localPlayer.shootTime < this.remotePlayer.shootTime ? 1 : 2;
          this.showResult(result);
        } else 0 != this.localPlayer.shootTime && Date.now() - this.localPlayer.startFightTime > this.localPlayer.shootTime + 500 ? this.showResult(1) : 0 != this.remotePlayer.shootTime && Date.now() - this.localPlayer.startFightTime > this.remotePlayer.shootTime && this.showResult(2); else this.gameMode == GameMode.THREE_SHOOT && (3 == this.localPlayer.shootZone.safe && 3 == this.remotePlayer.shootZone.safe ? this.localPlayer.shootTime < this.remotePlayer.shootTime ? this.showResult(1) : this.localPlayer.shootTime > this.remotePlayer.shootTime ? this.showResult(2) : this.showResult(0) : 3 == this.localPlayer.shootZone.unsafe && 3 == this.remotePlayer.shootZone.unsafe ? this.localPlayer.shootTime < this.remotePlayer.shootTime ? this.showResult(2) : this.localPlayer.shootTime > this.remotePlayer.shootTime ? this.showResult(1) : this.showResult(0) : 3 == this.localPlayer.shootZone.safe ? this.showResult(1) : 3 == this.remotePlayer.shootZone.safe ? this.showResult(2) : 3 == this.localPlayer.shootZone.unsafe ? this.showResult(2) : 3 == this.remotePlayer.shootZone.unsafe && this.showResult(1));
      };
      Game.prototype.onMpMessage = function(message, detail) {
        var _this = this;
        var data = detail;
        if (message == Multiplayer_1.multiplayer.MessageCode.DATA_RECIEVED) {
          cc.log("data receive: " + detail.data);
          var message_1 = JSON.parse(data.data);
          if (message_1.type == player_1.PlayerMessage.START) {
            this.state = GameState.COUNT_DOWN;
            event_manager_1.default.instance.dispatch("start-countdown");
          } else if (message_1.type == player_1.PlayerMessage.REMATCH) if (null == message_1.data) popup_1.default.instance.showConfirmPopup(data.player.name + " want to Re-match?", "OK", "Cancel", function() {
            multiplayer_inst_1.default.instance.sendMessage(player_1.PlayerMessage.REMATCH, "OK");
            _this.rematch = true;
            transport_message_1.default.instance.send("gameplay", "multiplayer", "true");
            transport_message_1.default.instance.send("gameplay", "mode", "" + _this.gameMode);
            cc.director.loadScene("game");
          }, function() {
            multiplayer_inst_1.default.instance.sendMessage(player_1.PlayerMessage.REMATCH, "CA");
          }); else if ("OK" == message_1.data) {
            this.rematch = true;
            transport_message_1.default.instance.send("gameplay", "multiplayer", "true");
            transport_message_1.default.instance.send("gameplay", "mode", "" + this.gameMode);
            cc.director.loadScene("game");
          } else if ("CA" == message_1.data) {
            popup_1.default.instance.showInfoPopup(data.player.name + " do not want Re-match");
            this.rematchButton.node.active = false;
          }
        } else message == Multiplayer_1.multiplayer.MessageCode.PLAYER_DISCONNECT && (this.state != GameState.END ? popup_1.default.instance.showNotify(data.player.name + " disconnect") : this.rematchButton.node.active = false);
      };
      Game.prototype.showResult = function(result) {
        this.resultText.node.active = true;
        this.mainButton.node.active = true;
        this.rematchButton.node.active = true;
        if (0 == result) {
          cc.log("raw");
          this.resultText.string = "Raw";
          this.localPlayer.setResult(player_1.PlayerResult.RAW);
          this.remotePlayer.setResult(player_1.PlayerResult.RAW);
        } else if (1 == result) {
          cc.log("win");
          this.resultText.string = "You Win";
          this.localPlayer.setResult(player_1.PlayerResult.WIN);
          this.remotePlayer.setResult(player_1.PlayerResult.LOSE);
          this.isMultiplayer && leaderboard_db_1.LeaderboardDb.instance.addScore(this.localPlayer.id, this.localPlayer.name, 2);
        } else if (2 == result) {
          cc.log("lose");
          this.resultText.string = "You Lose";
          this.localPlayer.setResult(player_1.PlayerResult.LOSE);
          this.remotePlayer.setResult(player_1.PlayerResult.WIN);
        }
        this.state = GameState.END;
        event_manager_1.default.instance.dispatch("zone-destroy");
      };
      Game.prototype.onDestroy = function() {
        this.rematch ? multiplayer_inst_1.default.instance.rematch() : multiplayer_inst_1.default.instance.reset();
        event_manager_1.default.instance.remove("multiplayer-message");
        event_manager_1.default.instance.unregisterTarget(this);
      };
      Game.prototype.onMainmenuButton = function() {
        cc.director.loadScene("main-menu");
      };
      Game.prototype.onRematchButton = function() {
        if (this.isMultiplayer) multiplayer_inst_1.default.instance.sendMessage(player_1.PlayerMessage.REMATCH, null); else {
          this.rematch = true;
          transport_message_1.default.instance.send("gameplay", "mode", "" + this.gameMode);
          cc.director.loadScene("game");
        }
      };
      __decorate([ property(cc.Label) ], Game.prototype, "resultText", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "mainButton", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "rematchButton", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "tapzone", void 0);
      __decorate([ property(player_behavior_1.default) ], Game.prototype, "leftPlayer", void 0);
      __decorate([ property(player_behavior_1.default) ], Game.prototype, "rightPlayer", void 0);
      Game = __decorate([ ccclass, executionOrder(-1) ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../core/loader": "loader",
    "../core/popup": "popup",
    "../core/transport-message": "transport-message",
    "../libs/Multiplayer": "Multiplayer",
    "../libs/leaderboard-db": "leaderboard-db",
    "./boss-input": "boss-input",
    "./local-input": "local-input",
    "./multiplayer-inst": "multiplayer-inst",
    "./player": "player",
    "./player-behavior": "player-behavior",
    "./remote-input": "remote-input",
    "./tapzone": "tapzone"
  } ],
  "lb-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ec0fZobTdFebM83sEocCHH", "lb-item");
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
    cc._RF.push(module, "052b0H/ZzBLhqpQwE2h1Eqi", "leaderboard-db");
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
  leaderboard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "239b0UXVPZDmq+fy6TqD/5P", "leaderboard");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var leaderboard_db_1 = require("../libs/leaderboard-db");
    var lb_item_1 = require("./lb-item");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Leaderboard = function(_super) {
      __extends(Leaderboard, _super);
      function Leaderboard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.db = null;
        _this.leaderboardItem = null;
        return _this;
      }
      Leaderboard.prototype.onLoad = function() {
        this.db = leaderboard_db_1.LeaderboardDb.instance;
        this.anim = this.node.getComponent(cc.Animation);
        this.content = this.node.getComponentInChildren(cc.Layout);
      };
      Leaderboard.prototype.getLbDate = function() {
        var _this = this;
        this.content.node.removeAllChildren();
        this.db.getTopScore(10, function(records) {
          records.forEach(function(item, index) {
            var node = cc.instantiate(_this.leaderboardItem);
            node.getComponent(lb_item_1.default).setData(index + 1 + ".", item.name, item.score);
            _this.content.node.addChild(node);
          });
          _this.content.node.parent.getComponent(cc.ScrollView).scrollToTop();
        });
      };
      Leaderboard.prototype.onButtonClose = function() {
        var _this = this;
        var state = this.anim.play(this.anim.defaultClip.name);
        state.wrapMode = cc.WrapMode.Reverse;
        this.anim.once("finished", function(event) {
          _this.node.active = false;
        });
      };
      Leaderboard.prototype.onEnable = function() {
        var state = this.anim.play(this.anim.defaultClip.name);
        state.wrapMode = cc.WrapMode.Normal;
        this.getLbDate();
      };
      __decorate([ property(cc.Prefab) ], Leaderboard.prototype, "leaderboardItem", void 0);
      Leaderboard = __decorate([ ccclass ], Leaderboard);
      return Leaderboard;
    }(cc.Component);
    exports.default = Leaderboard;
    cc._RF.pop();
  }, {
    "../libs/leaderboard-db": "leaderboard-db",
    "./lb-item": "lb-item"
  } ],
  loader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6f23VlUYJJobWp0yQ2rNvo", "loader");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var transport_message_1 = require("./transport-message");
    var player_ref_1 = require("../player-ref");
    var firebase_inst_1 = require("../libs/firebase-inst");
    var multiplayer_inst_1 = require("../game/multiplayer-inst");
    var event_manager_1 = require("./event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loader = function(_super) {
      __extends(Loader, _super);
      function Loader() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextScene = "main-menu";
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
        if (false == Loader_1.loaded) if ("loader" != this.getCurrentSceneName()) {
          var nextScene = "" != this.targetLoad ? this.targetLoad : this.getCurrentSceneName();
          transport_message_1.default.instance.send("loader", "nextScene", nextScene);
          cc.director.loadScene("loader");
        } else {
          Loader_1.loaded = true;
          var next = transport_message_1.default.instance.get("loader", "nextScene");
          this.nextScene = null != next ? next : this.nextScene;
        }
      };
      Loader.prototype.start = function() {
        "loader" == this.getCurrentSceneName() && this.initLoader();
      };
      Loader.prototype.initLoader = function() {
        var _this = this;
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
      Loader.loaded = false;
      __decorate([ property ], Loader.prototype, "targetLoad", void 0);
      Loader = Loader_1 = __decorate([ ccclass ], Loader);
      return Loader;
      var Loader_1;
    }(cc.Component);
    exports.default = Loader;
    cc._RF.pop();
  }, {
    "../game/multiplayer-inst": "multiplayer-inst",
    "../libs/firebase-inst": "firebase-inst",
    "../player-ref": "player-ref",
    "./event-manager": "event-manager",
    "./transport-message": "transport-message"
  } ],
  "lobby-player-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f1079S3K1Pn5YQIXKSk6as", "lobby-player-item");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("../game/multiplayer-inst");
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
        this.anim = this.node.getComponentInChildren(cc.Animation);
        this.kickButton.node.active = false;
      };
      LobbyPlayerItem.prototype.setData = function(playerId, name, master) {
        if (null == playerId || "" == playerId) {
          cc.log("player left");
          var state = this.anim.play(this.anim.defaultClip.name);
          state.wrapMode = cc.WrapMode.Reverse;
          this.playerName.string = "wating...";
          this.kickButton.node.active = false;
        } else {
          this.playerId = playerId;
          this.playerName.string = name;
          this.setMaster(master);
          var state = this.anim.play(this.anim.defaultClip.name);
          state.wrapMode = cc.WrapMode.Default;
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
    "../game/multiplayer-inst": "multiplayer-inst"
  } ],
  lobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78e034AvURBA5StEBh6PAs6", "lobby");
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
    var transport_message_1 = require("../core/transport-message");
    var Multiplayer_1 = require("../libs/Multiplayer");
    var lobby_player_item_1 = require("./lobby-player-item");
    var multiplayer_inst_1 = require("../game/multiplayer-inst");
    var event_manager_1 = require("../core/event-manager");
    var player_1 = require("../game/player");
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
        _this.mode = 0;
        return _this;
      }
      Lobby.prototype.onLoad = function() {
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
        if (roomInfo) {
          this.mode = roomInfo.type;
          1 == roomInfo.type ? this.gameMode.string = "1 Shoot" : this.gameMode.string = "3 Shoot";
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
        }
      };
      Lobby.prototype.onMpMessage = function(message, detail) {
        switch (message) {
         case Multiplayer_1.multiplayer.MessageCode.PLAYER_LEFT:
          var player = detail;
          for (var i = 0; i < 2; i++) if (this.players[i].id == player.id) {
            this.players[i].id = "";
            this.players[i].slot.setData(null, "", false);
          }
          break;

         case Multiplayer_1.multiplayer.MessageCode.PLAYER_JOINED:
          var player = detail;
          for (var i = 0; i < 2; i++) {
            if ("" == this.players[i].id) {
              this.players[i].id = player.id;
              this.players[i].slot.setData(player.id, player.name, multiplayer_inst_1.default.instance.manager.isMaster(player.id));
              break;
            }
            1 == i && cc.warn("Player join but there have not slot");
          }
          break;

         case Multiplayer_1.multiplayer.MessageCode.KICKED_OUT:
          multiplayer_inst_1.default.instance.manager.quit();
          cc.director.loadScene("main-menu");
          cc.log("buttonkick");
          break;

         case Multiplayer_1.multiplayer.MessageCode.GAME_STARTED:
          cc.log("Game start");
          transport_message_1.default.instance.send("gameplay", "mode", "" + this.mode);
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
          var message_1 = JSON.parse(data.data);
          message_1.type === player_1.PlayerMessage.READY && (multiplayer_inst_1.default.instance.getPlayer(data.player.id).loaded = true);
        }
      };
      Lobby.prototype.onButtonQuitRoom = function() {
        multiplayer_inst_1.default.instance.manager.quit();
        transport_message_1.default.instance.send("main-menu", "page", "1");
        cc.director.loadScene("main-menu");
        cc.log("button quit");
      };
      Lobby.prototype.onButtonStartGame = function() {
        transport_message_1.default.instance.send("gameplay", "mode", "" + this.mode);
        if (1 == Object.keys(multiplayer_inst_1.default.instance.players).length) {
          multiplayer_inst_1.default.instance.reset();
          cc.director.loadScene("game");
          cc.log("button start game 1");
        } else {
          transport_message_1.default.instance.send("gameplay", "multiplayer", "true");
          cc.director.loadScene("game");
          cc.log("button start game 2");
          multiplayer_inst_1.default.instance.manager.startGame();
        }
      };
      Lobby.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      __decorate([ property(cc.Label) ], Lobby.prototype, "gameMode", void 0);
      __decorate([ property(lobby_player_item_1.default) ], Lobby.prototype, "playerLeft", void 0);
      __decorate([ property(lobby_player_item_1.default) ], Lobby.prototype, "playerRight", void 0);
      __decorate([ property(cc.Button) ], Lobby.prototype, "startButton", void 0);
      Lobby = __decorate([ ccclass ], Lobby);
      return Lobby;
    }(cc.Component);
    exports.default = Lobby;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../core/transport-message": "transport-message",
    "../game/multiplayer-inst": "multiplayer-inst",
    "../game/player": "player",
    "../libs/Multiplayer": "Multiplayer",
    "./lobby-player-item": "lobby-player-item"
  } ],
  "local-input": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27749qYLg9EJpFxSrupccJ0", "local-input");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var game_1 = require("./game");
    var event_manager_1 = require("../core/event-manager");
    var LocalInput = function() {
      function LocalInput() {
        this.player = null;
        this.rootNode = null;
        this.gameMode = null;
      }
      LocalInput.prototype.init = function(player, mode) {
        this.player = player;
        this.gameMode = mode;
        this.rootNode = cc.find("Canvas");
        event_manager_1.default.instance.registerOnce("start-countdown", this.onCountDown, this);
        event_manager_1.default.instance.registerOnce("start-fight", this.onFight, this);
        return this;
      };
      LocalInput.prototype.onCountDown = function() {
        this.gameMode == game_1.GameMode.ONE_SHOOT ? this.rootNode.once(cc.Node.EventType.TOUCH_START, this.onOneShoot, this) : this.gameMode == game_1.GameMode.THREE_SHOOT && event_manager_1.default.instance.register("zone-touch", this.onThreeShoot, this);
      };
      LocalInput.prototype.onOneShoot = function(event) {
        this.player.shoot1();
      };
      LocalInput.prototype.onThreeShoot = function(type) {
        this.player.shoot3(0 == type);
      };
      LocalInput.prototype.onFight = function() {
        cc.log("local start fight");
        this.player.startFightTime = Date.now();
      };
      return LocalInput;
    }();
    exports.LocalInput = LocalInput;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "./game": "game"
  } ],
  "main-menu": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdfcf0UCQ1HHqxptbWk0my2", "main-menu");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("../game/multiplayer-inst");
    var transport_message_1 = require("../core/transport-message");
    var player_ref_1 = require("../player-ref");
    var popup_1 = require("../core/popup");
    var game_1 = require("../game/game");
    var Multiplayer_1 = require("../libs/Multiplayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainMenu = function(_super) {
      __extends(MainMenu, _super);
      function MainMenu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.leaderboard = null;
        _this.findRoom = null;
        _this.inputName = null;
        _this.gameMode = null;
        _this.playerName = null;
        _this.help = null;
        return _this;
      }
      MainMenu.prototype.onLoad = function() {
        if (null == cc.sys.localStorage.getItem("user-name")) {
          this.inputName.active = true;
          this.playerName.string = "No name";
        } else this.playerName.string = cc.sys.localStorage.getItem("user-name");
        var mode = cc.sys.localStorage.getItem("game-mode") ? parseInt(cc.sys.localStorage.getItem("game-mode")) : 1;
        mode ? this.gameMode.check() : this.gameMode.uncheck();
      };
      MainMenu.prototype.start = function() {
        this.onGameModeChanged(null);
      };
      MainMenu.prototype.onButtonMostWanted = function() {
        cc.log("Button Most wanted");
        this.leaderboard.active = true;
      };
      MainMenu.prototype.onButtonHelp = function(event, data) {
        this.help.active = "open" == data;
      };
      MainMenu.prototype.onButtonFindRoom = function() {
        cc.log("Button Find room");
        this.findRoom.active = true;
      };
      MainMenu.prototype.onButtonQuickPlay = function() {
        cc.log("Button Quick Join");
        popup_1.default.instance.showWaitingPopup("Finding online game...");
        var mode = this.gameMode.isChecked ? game_1.GameMode.ONE_SHOOT : game_1.GameMode.THREE_SHOOT;
        multiplayer_inst_1.default.instance.manager.quickJoin(function(error, room) {
          popup_1.default.instance.hideWaitingPopup();
          if (null == error) {
            cc.log("Quick join success");
            transport_message_1.default.instance.send("lobby", "room", JSON.stringify(room));
            cc.director.loadScene("lobby");
          } else {
            var msg = "";
            msg = error.error == Multiplayer_1.multiplayer.ErrorCode.NOT_SUPPORTED ? "Your browser/device do not support WebRTC API so you can not play with others.\nDo you want to play with Boss (AI)" : "There have no online room.\nDo you want to play with Boss (AI)";
            popup_1.default.instance.showConfirmPopup(msg, "Yes", "No", function() {
              transport_message_1.default.instance.send("gameplay", "mode", "" + mode);
              cc.director.loadScene("game");
            });
          }
        }, mode);
      };
      MainMenu.prototype.onButtonCreateRoom = function() {
        cc.log("Button Create room");
        var mode = this.gameMode.isChecked ? 1 : 3;
        multiplayer_inst_1.default.instance.manager.createRoom("", function(error, room) {
          if (null == error) {
            cc.log("Create room success");
            transport_message_1.default.instance.send("lobby", "room", JSON.stringify(room));
            cc.director.loadScene("lobby");
          } else popup_1.default.instance.showNotify(error.message);
        }, 2, mode);
      };
      MainMenu.prototype.onButtonInputName = function() {
        var name = this.inputName.getComponentInChildren(cc.EditBox).string;
        cc.sys.localStorage.setItem("user-name", name);
        player_ref_1.default.current.setName(name);
        multiplayer_inst_1.default.instance.manager.setPlayerName(name);
        this.inputName.active = false;
        this.playerName.string = name;
      };
      MainMenu.prototype.onButtonEditName = function() {
        this.inputName.getComponentInChildren(cc.EditBox).string = cc.sys.localStorage.getItem("user-name");
        this.inputName.active = true;
      };
      MainMenu.prototype.onGameModeChanged = function(event) {
        if (this.gameMode.isChecked) {
          this.gameMode.node.getChildByName("1shoot").color = cc.color(255, 255, 255, 255);
          this.gameMode.node.getChildByName("3shoot").color = cc.color(105, 105, 105, 255);
        } else {
          this.gameMode.node.getChildByName("3shoot").color = cc.color(255, 255, 255, 255);
          this.gameMode.node.getChildByName("1shoot").color = cc.color(105, 105, 105, 255);
        }
        cc.sys.localStorage.setItem("game-mode", this.gameMode.isChecked ? 1 : 0);
      };
      __decorate([ property(cc.Node) ], MainMenu.prototype, "leaderboard", void 0);
      __decorate([ property(cc.Node) ], MainMenu.prototype, "findRoom", void 0);
      __decorate([ property(cc.Node) ], MainMenu.prototype, "inputName", void 0);
      __decorate([ property(cc.Toggle) ], MainMenu.prototype, "gameMode", void 0);
      __decorate([ property(cc.Label) ], MainMenu.prototype, "playerName", void 0);
      __decorate([ property(cc.Node) ], MainMenu.prototype, "help", void 0);
      MainMenu = __decorate([ ccclass ], MainMenu);
      return MainMenu;
    }(cc.Component);
    exports.default = MainMenu;
    cc._RF.pop();
  }, {
    "../core/popup": "popup",
    "../core/transport-message": "transport-message",
    "../game/game": "game",
    "../game/multiplayer-inst": "multiplayer-inst",
    "../libs/Multiplayer": "Multiplayer",
    "../player-ref": "player-ref"
  } ],
  "multiplayer-inst": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b383d7hTlZCmbFp62HUeMTB", "multiplayer-inst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Multiplayer_1 = require("../libs/Multiplayer");
    var config_1 = require("../config");
    var player_ref_1 = require("../player-ref");
    var player_1 = require("./player");
    var event_manager_1 = require("../core/event-manager");
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
      };
      Multiplayer.prototype.onMpMessage = function(message, detail) {
        switch (message) {
         case Multiplayer_1.multiplayer.MessageCode.ROOM_CREATED:
         case Multiplayer_1.multiplayer.MessageCode.ROOM_JOINED:
          if (null == detail.error) {
            var room = detail.room;
            for (var i = 0; i < room.players.length; i++) {
              var player = room.players[i];
              var type = player.id === this._impl.getMyPlayer().id ? player_1.PlayerType.LOCAL : player_1.PlayerType.REMOTE;
              this.players[player.id] = new player_1.default(player.id, player.name, type, true);
            }
          }
          break;

         case Multiplayer_1.multiplayer.MessageCode.PLAYER_JOINED:
          var player = detail;
          this.players[player.id] = new player_1.default(player.id, player.name, player_1.PlayerType.REMOTE, true);
          break;

         case Multiplayer_1.multiplayer.MessageCode.PLAYER_LEFT:
          var player = detail;
          this.players[player.id] ? delete this.players[player.id] : cc.warn("Player not exist: " + player.id);
          break;

         case Multiplayer_1.multiplayer.MessageCode.INITIALIZED:
          event_manager_1.default.instance.dispatch("Multiplayer-init");
          this._impl.setPlayerName(player_ref_1.default.current.name);
          this._impl.setPlayerId(player_ref_1.default.current.id);
        }
        event_manager_1.default.instance.dispatch("multiplayer-message", message, detail);
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
      Multiplayer.prototype.reset = function() {
        cc.log(" res ttttttttttt");
        this._impl.quit();
        this.players = {};
        event_manager_1.default.instance.remove("multiplayer-message");
      };
      Multiplayer.prototype.rematch = function() {
        for (var playerId in this.players) {
          var player = this.players[playerId];
          this.players[playerId] = new player_1.default(player.id, player.name, player.type, player.multiplay);
        }
        event_manager_1.default.instance.remove("multiplayer-message");
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
    "../config": "config",
    "../core/event-manager": "event-manager",
    "../libs/Multiplayer": "Multiplayer",
    "../player-ref": "player-ref",
    "./player": "player"
  } ],
  "player-behavior": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "563a9EFk9hA7JYbAqPBjM/F", "player-behavior");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerBehavior = function(_super) {
      __extends(PlayerBehavior, _super);
      function PlayerBehavior() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerName = null;
        _this.playerStatus = null;
        _this.amatureDisplay = null;
        _this.amature = null;
        _this.loaded = false;
        _this.pendingAnim = "";
        return _this;
      }
      PlayerBehavior.prototype.onLoad = function() {
        this.amatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
        this.amature = this.amatureDisplay.armature();
        this.amatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationEvent, this);
        this.amatureDisplay.addEventListener(dragonBones.EventObject.START, this.onAnimationEvent, this);
        this.playerStatus.string = "";
        this.setLoaded(this.loaded);
      };
      PlayerBehavior.prototype.setPlayerName = function(name) {
        this.playerName.string = name;
      };
      PlayerBehavior.prototype.setPlayerStatus = function(status) {
        var _this = this;
        this.playerStatus.string = status;
        this.scheduleOnce(function() {
          _this.playerStatus.string = "";
        }, 2);
      };
      PlayerBehavior.prototype.setLoaded = function(loaded) {
        this.loaded = loaded;
        this.amatureDisplay && (this.amatureDisplay.enabled = loaded);
      };
      PlayerBehavior.prototype.aimAndFire = function() {
        this.amature.animation.play("aim", 1);
      };
      PlayerBehavior.prototype.aimAndMiss = function() {
        this.amature.animation.play("aim", 1);
      };
      PlayerBehavior.prototype.fire = function() {
        this.amature.animation.play("fire", 1);
      };
      PlayerBehavior.prototype.death = function(suicide) {
        suicide ? this.amature.animation.play("suicide", 1) : this.amature.animation.play("death", 1);
      };
      PlayerBehavior.prototype.win = function() {
        this.amature.animation.isCompleted ? this.amature.animation.play("victory", 1) : this.pendingAnim = "victory";
      };
      PlayerBehavior.prototype.onAnimationEvent = function(event) {
        var eventObj = event.detail;
        if (event.type === dragonBones.EventObject.COMPLETE) {
          if ("aim" === eventObj.animationState.name) this.amature.animation.play("fire", 1); else if ("fire" === eventObj.animationState.name && "" != this.pendingAnim) {
            this.amature.animation.play(this.pendingAnim, 1);
            this.pendingAnim = "";
          }
        } else event.type === dragonBones.EventObject.START && "fire" === eventObj.animationState.name;
      };
      PlayerBehavior.prototype.update = function(dt) {};
      __decorate([ property(cc.Label) ], PlayerBehavior.prototype, "playerName", void 0);
      __decorate([ property(cc.Label) ], PlayerBehavior.prototype, "playerStatus", void 0);
      PlayerBehavior = __decorate([ ccclass ], PlayerBehavior);
      return PlayerBehavior;
    }(cc.Component);
    exports.default = PlayerBehavior;
    cc._RF.pop();
  }, {} ],
  "player-ref": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "682d9kb909Cbr1Y2lUh8W/u", "player-ref");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var firebase_inst_1 = require("./libs/firebase-inst");
    var event_manager_1 = require("./core/event-manager");
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
        null != cc.sys.localStorage.getItem("user-name") && (this._name = cc.sys.localStorage.getItem("user-name"));
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
    "./core/event-manager": "event-manager",
    "./libs/firebase-inst": "firebase-inst"
  } ],
  player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3a50iqAUlCi668se2aXgAV", "player");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var utils_1 = require("../utils");
    var multiplayer_inst_1 = require("./multiplayer-inst");
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
        this.type = null;
        this.id = "";
        this.name = "";
        this._startFightTime = 0;
        this.shootTime = 0;
        this.ready = false;
        this.multiplay = false;
        this.firstShoot = true;
        this.result = null;
        this.shootZone = {
          safe: 0,
          unsafe: 0
        };
        this.behavior = null;
        this.id = id;
        this.name = name;
        this.type = type;
        this.multiplay = multiplay;
      }
      Object.defineProperty(Player.prototype, "startFightTime", {
        get: function() {
          return this._startFightTime;
        },
        set: function(value) {
          this.sendMessage(PlayerMessage.START_FIGHT_TIME, value);
          this._startFightTime = value;
        },
        enumerable: true,
        configurable: true
      });
      Player.prototype.setBehavior = function(behavior) {
        this.behavior = behavior;
        this.behavior.setPlayerName(this.name);
        this.behavior.setLoaded(this.ready);
      };
      Object.defineProperty(Player.prototype, "loaded", {
        set: function(value) {
          this.behavior && this.behavior.setLoaded(value);
          if (value) {
            this.ready = true;
            this.sendMessage(PlayerMessage.READY, null);
          }
        },
        enumerable: true,
        configurable: true
      });
      Player.prototype.setResult = function(result) {
        this.result = result;
        switch (result) {
         case PlayerResult.RAW:
         case PlayerResult.WIN:
          this.behavior.win();
          break;

         case PlayerResult.LOSE:
          if (3 == this.shootZone.unsafe) {
            this.behavior.death(true);
            this.behavior.setPlayerStatus("Suicide");
          } else this.behavior.death(false);
        }
      };
      Player.prototype.shoot1 = function(time) {
        void 0 === time && (time = null);
        if (this.result) return;
        if (0 != this.startFightTime) {
          this.shootTime = time || Date.now() - this.startFightTime;
          if (this.shootTime == utils_1.Constant.MAX_SAFE_INTEGER) {
            this.behavior.aimAndMiss();
            this.behavior.setPlayerStatus("Miss");
          } else this.firstShoot && this.behavior.aimAndFire();
        } else {
          this.shootTime = utils_1.Constant.MAX_SAFE_INTEGER;
          this.behavior.aimAndMiss();
          this.behavior.setPlayerStatus("Miss");
          cc.log("miss fight");
        }
        cc.log(this.name + " shoot 1: " + this.shootTime);
        this.sendMessage(PlayerMessage.SHOOT_ONE, this.shootTime);
        this.firstShoot = false;
      };
      Player.prototype.shoot3 = function(safe, time) {
        void 0 === time && (time = null);
        if (this.result) return;
        this.shootTime = time || Date.now() - this.startFightTime;
        safe ? this.shootZone.safe++ : this.shootZone.unsafe++;
        this.firstShoot ? this.behavior.aimAndFire() : this.behavior.fire();
        this.sendMessage(PlayerMessage.SHOOT_THREE, {
          safe: safe,
          time: this.shootTime
        });
        this.firstShoot = false;
      };
      Player.prototype.sendMessage = function(message, data) {
        this.type == PlayerType.LOCAL && this.multiplay && multiplayer_inst_1.default.instance.sendMessage(message, data);
      };
      return Player;
    }();
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../utils": "utils",
    "./multiplayer-inst": "multiplayer-inst"
  } ],
  popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bee021/s1xLdK4hWrNX3HTi", "popup");
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
      Popup._instance = null;
      __decorate([ property(cc.Prefab) ], Popup.prototype, "dialogPopup", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "waitingPopup", void 0);
      Popup = Popup_1 = __decorate([ ccclass ], Popup);
      return Popup;
      var Popup_1;
    }(cc.Component);
    exports.default = Popup;
    cc._RF.pop();
  }, {} ],
  "remote-input": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a555alw6blLGLxbfT2YqFTg", "remote-input");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../core/event-manager");
    var Multiplayer_1 = require("../libs/Multiplayer");
    var player_1 = require("./player");
    var multiplayer_inst_1 = require("./multiplayer-inst");
    var RemoteInput = function() {
      function RemoteInput() {}
      RemoteInput.prototype.init = function() {
        event_manager_1.default.instance.register("multiplayer-message", this.onMessage, this);
      };
      RemoteInput.prototype.onMessage = function(message, detail) {
        if (message == Multiplayer_1.multiplayer.MessageCode.DATA_RECIEVED) {
          var data = detail;
          var message_1 = JSON.parse(data.data);
          cc.log("remote " + data.player.name + " has message: " + data.data);
          switch (message_1.type) {
           case player_1.PlayerMessage.START_FIGHT_TIME:
            multiplayer_inst_1.default.instance.getPlayer(data.player.id).startFightTime = message_1.data;
            break;

           case player_1.PlayerMessage.READY:
            multiplayer_inst_1.default.instance.getPlayer(data.player.id).loaded = true;
            break;

           case player_1.PlayerMessage.SHOOT_ONE:
            multiplayer_inst_1.default.instance.getPlayer(data.player.id).shoot1(message_1.data);
            break;

           case player_1.PlayerMessage.SHOOT_THREE:
            multiplayer_inst_1.default.instance.getPlayer(data.player.id).shoot3(message_1.data.safe, message_1.data.time);
          }
        }
      };
      return RemoteInput;
    }();
    exports.default = RemoteInput;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../libs/Multiplayer": "Multiplayer",
    "./multiplayer-inst": "multiplayer-inst",
    "./player": "player"
  } ],
  "room-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b8bcX3T3hHirk3YykH2yGc", "room-item");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("../game/multiplayer-inst");
    var transport_message_1 = require("../core/transport-message");
    var popup_1 = require("../core/popup");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoomItem = function(_super) {
      __extends(RoomItem, _super);
      function RoomItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nickname = null;
        _this.type = null;
        _this.player = null;
        _this.id = "";
        return _this;
      }
      RoomItem.prototype.setData = function(id, name, type, player) {
        this.id = id;
        this.nickname.string = name;
        this.player.string = player;
        this.type.string = 1 == type ? "1Shoot" : "3Shoot";
      };
      RoomItem.prototype.onButtonJoin = function() {
        cc.log("Join room: " + this.id);
        popup_1.default.instance.showWaitingPopup("Connecting...");
        multiplayer_inst_1.default.instance.manager.joinRoom(this.id, function(error, roomInfo) {
          popup_1.default.instance.hideWaitingPopup();
          if (null == error) {
            transport_message_1.default.instance.send("lobby", "room", JSON.stringify(roomInfo));
            cc.director.loadScene("lobby");
          } else popup_1.default.instance.showNotify(error.message);
        });
      };
      __decorate([ property(cc.Label) ], RoomItem.prototype, "nickname", void 0);
      __decorate([ property(cc.Label) ], RoomItem.prototype, "type", void 0);
      __decorate([ property(cc.Label) ], RoomItem.prototype, "player", void 0);
      RoomItem = __decorate([ ccclass ], RoomItem);
      return RoomItem;
    }(cc.Component);
    exports.default = RoomItem;
    cc._RF.pop();
  }, {
    "../core/popup": "popup",
    "../core/transport-message": "transport-message",
    "../game/multiplayer-inst": "multiplayer-inst"
  } ],
  "rooms-find": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af67c2BDYtCm4tfEctee6ji", "rooms-find");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var multiplayer_inst_1 = require("../game/multiplayer-inst");
    var room_item_1 = require("./room-item");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoomFind = function(_super) {
      __extends(RoomFind, _super);
      function RoomFind() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roomItem = null;
        _this.statusText = null;
        return _this;
      }
      RoomFind.prototype.onLoad = function() {
        this.anim = this.node.getComponent(cc.Animation);
        this.content = this.node.getComponentInChildren(cc.Layout);
      };
      RoomFind.prototype.getLobbies = function() {
        var _this = this;
        this.content.node.removeAllChildren();
        this.statusText.node.active = false;
        multiplayer_inst_1.default.instance.manager.getRooms(function(lobbies) {
          0 == lobbies.length && (_this.statusText.node.active = true);
          lobbies.forEach(function(lobby) {
            var node = cc.instantiate(_this.roomItem);
            var name = lobby.master.name;
            var player = lobby.playerInRoom + "/" + lobby.maxPlayer;
            node.getComponent(room_item_1.default).setData(lobby.id, name, lobby.type, player);
            _this.content.node.addChild(node);
          });
          _this.content.node.parent.getComponent(cc.ScrollView).scrollToTop();
        });
      };
      RoomFind.prototype.onButtonClose = function() {
        var _this = this;
        var state = this.anim.play(this.anim.defaultClip.name);
        state.wrapMode = cc.WrapMode.Reverse;
        this.anim.once("finished", function(event) {
          _this.node.active = false;
        });
      };
      RoomFind.prototype.onEnable = function() {
        var state = this.anim.play(this.anim.defaultClip.name);
        state.wrapMode = cc.WrapMode.Normal;
        this.getLobbies();
      };
      __decorate([ property(cc.Prefab) ], RoomFind.prototype, "roomItem", void 0);
      __decorate([ property(cc.Label) ], RoomFind.prototype, "statusText", void 0);
      RoomFind = __decorate([ ccclass ], RoomFind);
      return RoomFind;
    }(cc.Component);
    exports.default = RoomFind;
    cc._RF.pop();
  }, {
    "../game/multiplayer-inst": "multiplayer-inst",
    "./room-item": "room-item"
  } ],
  tapzone: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3df2VlbbNBaolhb/YTn59W", "tapzone");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapZone = function(_super) {
      __extends(TapZone, _super);
      function TapZone() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.type = -1;
        return _this;
      }
      TapZone_1 = TapZone;
      TapZone.prototype.onLoad = function() {
        this.node.on("click", this.onClick, this);
        event_manager_1.default.instance.register("zone-destroy", this.destroyZone, this);
      };
      TapZone.prototype.setType = function(type) {
        this.type = type;
        0 == type ? this.node.color = TapZone_1.safeColor : 1 == type && (this.node.color = TapZone_1.dangColor);
      };
      TapZone.prototype.onClick = function() {
        this.getComponent(cc.Button).enabled = false;
        event_manager_1.default.instance.dispatch("zone-touch", this.type);
        this.node.removeFromParent();
      };
      TapZone.prototype.destroyZone = function() {
        this.node.removeFromParent();
      };
      TapZone.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      TapZone.safeColor = cc.color(125, 202, 27, 255);
      TapZone.dangColor = cc.color(218, 106, 44, 255);
      TapZone = TapZone_1 = __decorate([ ccclass ], TapZone);
      return TapZone;
      var TapZone_1;
    }(cc.Component);
    exports.default = TapZone;
    var TapZoneGen = function() {
      function TapZoneGen() {}
      TapZoneGen.generateZone = function(quantity) {
        var results = [];
        var ret = [];
        var screen = cc.director.getVisibleSize();
        var validRect = cc.rect(.75 * this.width, .75 * this.height, screen.width - this.width / 2, screen.height - this.height / 2);
        for (var i = 0; i < quantity; i++) {
          var x = Math.floor(cc.random0To1() * screen.width);
          var y = Math.floor(cc.random0To1() * screen.height);
          while (true) {
            if (validRect.contains(cc.v2(x, y))) {
              var validall = true;
              for (var j = 0; j < results.length; j++) {
                var point = results[j];
                if (Math.abs(x - point.x) < .75 * this.width || Math.abs(y - point.y) < .75 * this.height) {
                  validall = false;
                  break;
                }
              }
              if (validall) {
                ret.push({
                  x: x - screen.width / 2,
                  y: y - screen.height / 2
                });
                results.push({
                  x: x,
                  y: y
                });
                break;
              }
            }
            x = Math.floor(cc.random0To1() * screen.width);
            y = Math.floor(cc.random0To1() * screen.height);
          }
        }
        return ret;
      };
      TapZoneGen.width = 80;
      TapZoneGen.height = 80;
      TapZoneGen.tapzone = [];
      return TapZoneGen;
    }();
    exports.TapZoneGen = TapZoneGen;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager"
  } ],
  "transport-message": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8a69h3FD5LjqkRXtnwnMR+", "transport-message");
    "use strict";
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
        var content = null;
        if (this._messages[name] && null != this._messages[name][message]) {
          content = this._messages[name][message];
          deleteAfterRead && delete this._messages[name][message];
        }
        return content;
      };
      TransportMessage._instance = null;
      return TransportMessage;
    }();
    exports.default = TransportMessage;
    cc._RF.pop();
  }, {} ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2478RnGaxHz76Y1Z/BRWz8", "utils");
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
        var idx = Math.floor(cc.random0To1() * (this.unique.length - 1));
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
    cc._RF.pop();
  }, {} ]
}, {}, [ "config", "event-manager", "loader", "popup", "transport-message", "boss-input", "count-down", "game", "local-input", "multiplayer-inst", "player-behavior", "player", "remote-input", "tapzone", "Multiplayer", "firebase-inst", "leaderboard-db", "animation-in-out", "lb-item", "leaderboard", "lobby-player-item", "lobby", "main-menu", "room-item", "rooms-find", "player-ref", "utils" ]);