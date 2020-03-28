//
// score.js
//

class Score {

    constructor()
    {        
        this._games = 0;
        this._points = 0;        
    }

    copy() {
        let newScore = new Score();
        newScore.games = this.games;
        newScore.points = this.points;
        return newScore;
    }

    copyTo( score )
    {
        score.games = this.games;
        score.points = this.points;
    }

    get games() {
        return this._games;
    }

    get points() {
        return this._points;
    }

    set games( games ) {
        this._games = games;
    }

    set points( points ) {
        this._points = points;
    }
}