//
// mixinAll.js
//

var mixinDialogs = {
    methods:
    {
        hideDialog() {
            this.show = false;
        }
    }
}

var mixinMatch = {
    methods: 
    {
        isMatchRunning: function() {
            return Logic.isMatchRunning( this.$store.state.model.match );
        }
    }
}

var mixinPlayers = {
    methods:
    {
        isPlayerA: function() {
            return enumPlayer.isPlayerA( this.eplayer );
        },
        isPlayerB: function() {
            return enumPlayer.isPlayerB( this.eplayer );
        }

    }
}

var mixinTurn = {
    methods:
    {
        isServing: function( eplayer ) {
            let turn = this.turn || this.$store.getters.turn;
            if ( turn.serve.player === eplayer ) {
                return true;
            }
            return false;
        },

        isTurnCurrent: function() {
            if ( this.turn === undefined ) {
                return true;
            }
            return false;
        }
    }
}