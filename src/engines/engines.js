//
// engines.js
//

class Engines
{
	constructor() 
	{
		this._current = undefined;		
	}

	get current() 
	{
		return this._current;
	}

	set current( engine )
	{
		this._current = engine;
	}
}

/**
 * Global instance of Engines.
 */
var engines = new Engines();
