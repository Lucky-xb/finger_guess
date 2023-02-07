module game {
    export class MainView extends eui.Component {

        protected imgMe: eui.Image;
        protected imgOther: eui.Image;
        protected imgSelect0: eui.Image;
        protected imgSelect1: eui.Image;
        protected imgSelect2: eui.Image;
        protected btnStart: eui.Button;
        protected lbGuess: eui.Label;
        protected lbLv: eui.Label;
        protected lbDesc: eui.Label;
        protected lbTime: eui.Label;

        private resArr = ["shitou_png", "jiandao_png", "bu_png"];
        /** 当前所选的选项 */
        private curGuess = GUESS.SHITOU;
        /** 是否正在竞猜 */
        private isGuessing = false;
        /** 当前等级 */
        private curLv = 0;

        private lvMap = {
            9: "筑基",
            99: "后天",
            999: "先天",
            9999: "渡劫",
            99999: "天仙"
        }

        constructor() {
            super();
            this.skinName = "MainSkin";
            this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUiCompleted, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onUiRemoved, this);
        }

        private onUiCompleted() {
            this.imgMe.source = this.resArr[this.curGuess];
            this.lbTime.text = "";
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.addMask();
            this.setLv();
        }

        private onUiRemoved() {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUiCompleted, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onUiRemoved, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }

        private addMask() {
            let sp = new egret.Sprite();
            sp.graphics.beginFill(0xffffff);
            sp.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
            sp.graphics.endFill();
            this.addChildAt(sp, 0);
        }

        private setLv() {
            let key = this.getKeyByLv();
            this.lbLv.text = `当前等级：${this.lvMap[key]}(${this.curLv}/${key})`;
        }

        private setTime() {
            this.lbTime.text = `通关时间：${Math.floor(egret.getTimer() / 1000)}s`;
        }

        private getKeyByLv() {
            if (this.curLv <= 9) return 9;
            else if (this.curLv <= 99) return 99;
            else if (this.curLv <= 999) return 999;
            else if (this.curLv <= 9999) return 9999;
            else if (this.curLv <= 99999) return 99999;
            else return 99999;
        }

        private guessResult(value: number) {
            this.lbGuess.visible = true;
            if (this.checkResult(value)) {
                this.lbGuess.text = "恭喜你！猜赢了！";
                this.lbGuess.textColor = 0x00ff00;
                this.curLv++;
                this.setLv();

                if (this.curLv > 9) {
                    let tips = new TipsPopup();
                    this.stage.addChild(tips);
                    this.setTime();
                }
            } else {
                this.lbGuess.text = "很抱歉！猜输了！";
                this.lbGuess.textColor = 0xff0000;
            } 
        }

        private checkResult(value: number) {
            if (value == GUESS.SHITOU && this.curGuess == GUESS.BU) return true;
            else if (value == GUESS.JIANDAO && this.curGuess == GUESS.SHITOU) return true;
            else if (value == GUESS.BU && this.curGuess == GUESS.JIANDAO) return true;
            return false;
        }

        private onClick(e: egret.TouchEvent) {
            if (this.isGuessing) return;
            let random: number;
            switch (e.target) {
                case this.btnStart:
                    this.lbTime.text = "";
                    this.lbGuess.visible = false;
                    this.isGuessing = true;
                    let cd = 10;
                    let timerId = egret.setInterval(() => {
                        if (cd <= 0) {
                            this.isGuessing = false;
                            egret.clearInterval(timerId);
                            this.guessResult(random);
                            return;
                        }
                        cd--;
                        random = Math.floor(Math.random() * 3);
                        this.imgOther.source = this.resArr[random];
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
        }
    }

    enum GUESS {
        /** 石头 */
        SHITOU = 0,
        /** 剪刀 */
        JIANDAO,
        /** 布 */
        BU
    }
}