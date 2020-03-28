//
// serve.js
//

class Serve
{
    constructor() {
        this._eplayer = enumPlayer.A;
        this._eside = enumSide.L;
        this._maySwitch = true;        
    }

    copy() {
        let newServe = new Serve();
        newServe.player = this.player;
        newServe.side = this.side;
        newServe.maySwitch = this.maySwitch;
        return newServe;
    }

    copyTo( serve ) 
    {
        serve.player = this.player;
        serve.side = this.side;
        serve.maySwitch = this.maySwitch;
    }

    get player() {
        return this._eplayer;
    }

    get side() {
        return this._eside;
    }

    get maySwitch() {
        return this._maySwitch;
    }

    set player( eplayer ) {
        this._eplayer = eplayer;
    }

    set side( eside ) {
        this._eside = eside;
    }

    set maySwitch( maySwitch ) {
        this._maySwitch = maySwitch;
    }
}