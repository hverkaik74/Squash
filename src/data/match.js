//
// match.js
//

class Match
{
    constructor() 
    {
        this._playerA = new Player( enumPlayer.A );
        this._playerB = new Player( enumPlayer.B );
        this._info = InfoTexts.empty;
        this._turn = new Turn();
        this._history = new History();
    }

    get info() {
        return this._info;
    }

    set info( value ) {
        this._info = value;
    } 

    get playerA() {
        return this._playerA;
    }

    get playerB() {
        return this._playerB;
    }

    get turn() {
        return this._turn;
    }

    get history() {
        return this._history;
    }
}