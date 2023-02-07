var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //注入自定义的素材解析器
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.enterGame();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    Main.prototype.enterGame = function () {
        var main = new game.MainView();
        this.addChild(main);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var game;
(function (game) {
    var MainView = (function (_super) {
        __extends(MainView, _super);
        function MainView() {
            var _this = _super.call(this) || this;
            _this.resArr = ["shitou_png", "jiandao_png", "bu_png"];
            /** 当前所选的选项 */
            _this.curGuess = GUESS.SHITOU;
            /** 是否正在竞猜 */
            _this.isGuessing = false;
            /** 当前等级 */
            _this.curLv = 0;
            _this.lvMap = {
                9: "筑基",
                99: "后天",
                999: "先天",
                9999: "渡劫",
                99999: "天仙"
            };
            _this.skinName = "MainSkin";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onUiCompleted, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onUiRemoved, _this);
            return _this;
        }
        MainView.prototype.onUiCompleted = function () {
            this.imgMe.source = this.resArr[this.curGuess];
            this.lbTime.text = "";
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.addMask();
            this.setLv();
        };
        MainView.prototype.onUiRemoved = function () {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUiCompleted, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onUiRemoved, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        };
        MainView.prototype.addMask = function () {
            var sp = new egret.Sprite();
            sp.graphics.beginFill(0xffffff);
            sp.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
            sp.graphics.endFill();
            this.addChildAt(sp, 0);
        };
        MainView.prototype.setLv = function () {
            var key = this.getKeyByLv();
            this.lbLv.text = "\u5F53\u524D\u7B49\u7EA7\uFF1A" + this.lvMap[key] + "(" + this.curLv + "/" + key + ")";
        };
        MainView.prototype.setTime = function () {
            this.lbTime.text = "\u901A\u5173\u65F6\u95F4\uFF1A" + Math.floor(egret.getTimer() / 1000) + "s";
        };
        MainView.prototype.getKeyByLv = function () {
            if (this.curLv <= 9)
                return 9;
            else if (this.curLv <= 99)
                return 99;
            else if (this.curLv <= 999)
                return 999;
            else if (this.curLv <= 9999)
                return 9999;
            else if (this.curLv <= 99999)
                return 99999;
        };
        MainView.prototype.guessResult = function (value) {
            this.lbGuess.visible = true;
            if (this.checkResult(value)) {
                this.lbGuess.text = "恭喜你！猜赢了！";
                this.lbGuess.textColor = 0x00ff00;
                this.curLv++;
                this.setLv();
                if (this.curLv > 9) {
                    var tips = new game.TipsPopup();
                    this.stage.addChild(tips);
                    this.setTime();
                }
            }
            else {
                this.lbGuess.text = "很抱歉！猜输了！";
                this.lbGuess.textColor = 0xff0000;
            }
        };
        MainView.prototype.checkResult = function (value) {
            if (value == GUESS.SHITOU && this.curGuess == GUESS.BU)
                return true;
            else if (value == GUESS.JIANDAO && this.curGuess == GUESS.SHITOU)
                return true;
            else if (value == GUESS.BU && this.curGuess == GUESS.JIANDAO)
                return true;
            return false;
        };
        MainView.prototype.onClick = function (e) {
            var _this = this;
            if (this.isGuessing)
                return;
            var random;
            switch (e.target) {
                case this.btnStart:
                    this.lbTime.text = "";
                    this.lbGuess.visible = false;
                    this.isGuessing = true;
                    var cd_1 = 10;
                    var timerId_1 = egret.setInterval(function () {
                        if (cd_1 <= 0) {
                            _this.isGuessing = false;
                            egret.clearInterval(timerId_1);
                            _this.guessResult(random);
                            return;
                        }
                        cd_1--;
                        random = Math.floor(Math.random() * 3);
                        _this.imgOther.source = _this.resArr[random];
                    }, this, 100);
                    break;
                case this.imgSelect0:
                    this.imgMe.source = this.resArr[0];
                    this.curGuess = GUESS.SHITOU;
                    break;
                case this.imgSelect1:
                    this.imgMe.source = this.resArr[1];
                    this.curGuess = GUESS.JIANDAO;
                    break;
                case this.imgSelect2:
                    this.imgMe.source = this.resArr[2];
                    this.curGuess = GUESS.BU;
                    break;
            }
        };
        return MainView;
    }(eui.Component));
    game.MainView = MainView;
    __reflect(MainView.prototype, "game.MainView");
    var GUESS;
    (function (GUESS) {
        /** 石头 */
        GUESS[GUESS["SHITOU"] = 0] = "SHITOU";
        /** 剪刀 */
        GUESS[GUESS["JIANDAO"] = 1] = "JIANDAO";
        /** 布 */
        GUESS[GUESS["BU"] = 2] = "BU";
    })(GUESS || (GUESS = {}));
})(game || (game = {}));
var game;
(function (game) {
    var TipsPopup = (function (_super) {
        __extends(TipsPopup, _super);
        function TipsPopup() {
            var _this = _super.call(this) || this;
            _this.skinName = "TipsSkin";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onUiCompleted, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onUiRemoved, _this);
            return _this;
        }
        TipsPopup.prototype.onUiCompleted = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.addMask();
        };
        TipsPopup.prototype.onUiRemoved = function () {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUiCompleted, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onUiRemoved, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        };
        TipsPopup.prototype.addMask = function () {
            var sp = new egret.Sprite();
            sp.graphics.beginFill(0x000000, 0.5);
            sp.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
            sp.graphics.endFill();
            this.addChildAt(sp, 0);
        };
        TipsPopup.prototype.onClick = function () {
            this.stage.removeChild(this);
        };
        return TipsPopup;
    }(eui.Component));
    game.TipsPopup = TipsPopup;
    __reflect(TipsPopup.prototype, "game.TipsPopup");
})(game || (game = {}));

;window.Main = Main;