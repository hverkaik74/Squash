//
// player.js
//

class Player
{
    constructor( ePlayer ) 
    {
        this._ePlayer = ePlayer;
        this._name = ePlayer.toString();
    }

    get eplayer() {
      return this._ePlayer;
    }

    get name() {
        return this._name;
      }
    
    set name( name ) {
        this._name = name; 
      }    
}