//
// turn.js
//

class Turn 
{
    constructor() 
    {
        this._scoreA = new Score();
        this._scoreB = new Score();
        this._serve = new Serve();        
    } 
    
    copy()
    {
        let newTurn = new Turn();
        newTurn.scoreA = this.scoreA.copy();
        newTurn.scoreB = this.scoreB.copy();
        newTurn.serve = this.serve.copy();
        return newTurn;
    }

    copyTo( turn )
    {
        this.scoreA.copyTo( turn.scoreA );
        this.scoreB.copyTo( turn.scoreB );
        this.serve.copyTo( turn.serve );
    }

    get scoreA() {
        return this._scoreA;
    }

    get scoreB() {
        return this._scoreB;
    }

    get serve() {
        return this._serve;
    }

    set scoreA( score )
    {
        this._scoreA = score;
    }

    set scoreB( score ) {
        this._scoreB = score;
    }

    set serve( serve ) {
        this._serve = serve;
    }
}