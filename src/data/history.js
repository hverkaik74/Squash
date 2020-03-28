//
// history.js
//

class History
{
    constructor()
    {   
        this._items = [];     
    }

    add( turn ) {
        this._items.splice( 0, 0, turn );
    }

    get items() {
        return this._items;
    }
}