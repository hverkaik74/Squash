//
// player.js
//

class Player
{
    constructor( eplayer ) 
    {
        this._eplayer = eplayer;
        this._name = "<name of player>";
    }

    get eplayer() {
      return this._eplayer;
    }

    get name() {
        return this._name;
      }
    
    set name( name ) {
        this._name = name; 
      }    
}