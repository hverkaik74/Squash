//
// infoTexts.js
//

class InfoTexts 
{
    static empty = "--- X ---";

    constructor() {
        this._texts = [];
    }

    add( text )
    {
        this._texts.push( text );
    }

    get text()
    {
        if ( this._texts.length === 0 )
        {
            return InfoTexts.empty;
        }

        return "---  " + this._texts.join( " | " ) + "  ---";
    }
}