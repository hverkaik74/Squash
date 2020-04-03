//
// logic,js
//

class Logic 
{
    static canUndo( match ) {
        if ( !Logic.isMatchRunning( match ) ) {
            return false;
        }
        if ( Logic.isMatchStart( match ) ) {
            return false;
        }
        return true;
    }

    static isMatchRunning( match ) {
        if ( !enumMatchState.isRunning( match.state ) ) {
            return false;
        }
        return true;
    }  

    static isMatchStart( match ) {
        if ( match.history.items.length === 0 ) {
            return true;
        }
        return false;
    }

    static isValidPlayerName( playerName ) {
        if ( playerName === undefined ) {
            return false;
        }
        if ( playerName === null ) {
            return false;
        }
        if ( playerName === "" ) {
            return false;
        }
        return true;
    }
}