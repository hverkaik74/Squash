//
// match.js
//

class Match
{
    constructor() 
    {
        this._state = enumMatchState.Idle;
        this._toss = enumToss.Automatic;
        this._bestOf = enumBestOf.Five;
        this._playerA = new Player( enumPlayer.A );
        this._playerB = new Player( enumPlayer.B );
        this._info = InfoTexts.empty;
        this._turn = new Turn();
        this._history = new History();
    }

    get() {
        return this._bestOf;
    }

    set( enumBestOf ) 
    {
        this._bestOf = enumBestOf;
    }

    get history() {
        return this._history;
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

    get state() {
        return this._state;
    }

    set state( enumState ) {
        this._state = enumState;
    }

    get toss() {
        return this._toss;
    }
 
    set toss( enumToss ) {
        this._toss = enumToss;
    }

    get turn() {
        return this._turn;
    }
}