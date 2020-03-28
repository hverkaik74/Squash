//
// model.js
//

class Model
{
    constructor() 
    {
        this._match = new Match();
    }

    get match() {
        return this._match;
    }
}