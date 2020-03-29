//
// model.js
//

class Model
{
    constructor() 
    {
        this._match = new Match();
        this._dialogs = new Dialogs();
    }

    get dialogs() {
        return this._dialogs;
    }
    
    get match() {
        return this._match;
    }
}