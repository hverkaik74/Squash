//
// enums.js
//

/**
 * 
 */
enumPlayer = Object.freeze ( {
    
    A: "A",
    B: "B",

    all: function() {
        return [this.A, this.B];
    },

    isPlayerA: function( eplayer ) {
        return eplayer === this.A;
    },

    isPlayerB: function( eplayer ) {
        return eplayer === this.B;
    },

    opponent: function( eplayer ) {
        return this.isPlayerA( eplayer ) ? this.B : this.A;
    },

} );

/**
 * 
 */
enumSide = Object.freeze( {

    L: "L",
    R: "R",

    all: function() {
        return [this.L, this.R];
    },

    opposite: function( eside ) {
        return eside == this.L ? this.R : this.L;
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

    Automatic: "Auto",
    Manual: "Manual",

    isAutomatic: function( enumToss ) 
    {
        if ( enumToss === this.Automatic ) {
            return true;
        }
        return false;
    }
} );