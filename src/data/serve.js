//
// serve.js
//

class Serve
{
    constructor() {
        this._ePlayer = enumPlayer.A;
        this._eSide = enumSide.L;
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
        return this._ePlayer;
    }

    get side() {
        return this._eSide;
    }

    get maySwitch() {
        return this._maySwitch;
    }

    set player( ePlayer ) {
        this._ePlayer = ePlayer;
    }

    set side( eSide ) {
        this._eSide = eSide;
    }

    set maySwitch( maySwitch ) {
        this._maySwitch = maySwitch;
    }
}