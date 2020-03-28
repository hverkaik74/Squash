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