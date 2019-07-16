'use strict';

const _ISFRAMEUP = 'isFrameUp';

class BRISingleton {
    constructor() {
        if (!BRISingleton.instance) {
            this._data = [];
            BRISingleton.instance = this;
        }
        return BRISingleton.instance;
    }

    add(item) {
        this._data.push(item);
    }

    get(id) {
        return this._data.find(d => d.id === id);
    }

    set isFrameUP(bVal=false) {
        let obj = {
            'id': _ISFRAMEUP,
            'val': bVal
        }
        this.add(obj)
    }

    get isFrameUP() {
        let res = this.get(_ISFRAMEUP);
        if (typeof res !== undefined)
            return res.val;
        return undefined;
    }
}

const singleton = new BRISingleton();
Object.freeze(singleton);
export default singleton;