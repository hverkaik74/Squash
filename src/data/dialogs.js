//
// dialogs.js
//

class Dialogs
{
    constructor() {
        this._confirmUndo = true;
    }

    get confirmUndo()
    {
        return this._confirmUndo;
    }

    set confirmUndo( confirm )
    {
        this._confirmUndo = confirm;
    }
}