//
// enums.js
//

enumPlayer = Object.freeze ( {
    
    A: "A",
    B: "B",

    all: function() {
        return [this.A, this.B];
    },

    isPlayerA: function( ePlayer ) {
        return ePlayer === this.A;
    },

    isPlayerB: function( ePlayer ) {
        return ePlayer === this.B;
    },

    opponent: function( ePlayer ) {
        return this.isPlayerA( ePlayer ) ? this.B : this.A;
    },

	toss: function( eToss )
	{
        switch ( eToss ) {
            case enumToss.Auto:
                let random01 = ( Math.random() > 0.5 ) ? 1 : 0;
                if ( random01 === 0 ) {
                    return enumPlayer.A;
                }
                return enumPlayer.B;
            case enumToss.A:
                return enumPlayer.A;
            case enumToss.B:
                return enumPlayer.B;
            default:
                Exceptions.throw( eToss );
        }
	}

} );

enumSide = Object.freeze( {

    L: "L",
    R: "R",

    all: function() {
        return [this.L, this.R];
    },

    opposite: function( eSide ) {
        return eSide == this.L ? this.R : this.L;
    }
} );

enumMatchState = Object.freeze( {

    Idle: "Idle",
    Running: "Running",

    isIdle: function( eMatchState ) {
        if ( eMatchState === this.Idle ) {
            return true;
        }
        return false;
    },

    isRunning: function( eMatchState )
    {
        if ( eMatchState === this.Running ) {
            return true;
        }
        return false;
    }

} );

enumToss = Object.freeze( {

    Auto: "Auto",
    A: enumPlayer.A,
    B: enumPlayer.B,

    all: function() {
        return [this.Auto, this.A, this.B];
    },

    isAuto: function( eToss ) 
    {
        if ( eToss === this.Auto ) {
            return true;
        }
        return false;
    }
} );

enumBestOf = Object.freeze( {

    One: "One",
    Three: "Three",
    Five: "Five",

    all: function() {
        return [this.One, this.Three, this.Five];
    },

    gamesToWin: function( eBestOf ) {
        switch ( eBestOf ) {
            case enumBestOf.One:
                return 1;
            case enumBestOf.Three:
                return 2;
            case enumBestOf.Five:
                return 3;
            default:
                return 0;
        }
    }
} ); 