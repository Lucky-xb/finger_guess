module game {
    export class TipsPopup extends eui.Component {

        constructor() {
            super();
            this.skinName = "TipsSkin";
            this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUiCompleted, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onUiRemoved, this);
        }

        private onUiCompleted() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.addMask();
        }

        private onUiRemoved() {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUiCompleted, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onUiRemoved, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }

        private addMask() {
            let sp = new egret.Sprite();
            sp.graphics.beginFill(0x000000, 0.5);
            sp.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
            sp.graphics.endFill();
            this.addChildAt(sp, 0);
        }

        private onClick() {
            this.stage.removeChild(this);
        }

    }
}