//
// store.js 
//

Vue.use(Vuex);

/**
 * All the names of possible mutations on the store instance.
 */
enumMutations = Object.freeze ( {
    new_match: "new_match",
	playerA_name: "playerA_name",
	playerB_name: "playerB_name",
	playerA_points: "playerA_points",
	playerB_points: "playerB_points",
	points: "points",
	games: "games",
	historyAdd: "historyAdd",
	serve_player: "serve_player",
	serve_side: "serve_side",
	serve_maySwitch: "serve_maySwitch",
	info: "info",
	undo: "undo",
} );

enumActions = Object.freeze( {
	undo: "undo",
} );

const store = new Vuex.Store({
	
	/**
	 * We use strict mode so that changet directly to the state of the store will product an error.
	 */
	strict: true,

	/**
	 * The 'state' holds the datamodel. The store is the only place where the datamodel is referenced.  
	 */
	state: {
		model: new Model()
	},

	/**
	 * The 'getters' are a group of functions that expose values of the datamodel inside 'state'.
	 */
	getters: {

		dialogs_undo( state, getters ) {
			return state.model.dialogs.confirmUndo;
		},

		info( state, getters ) {
			return state.model.match.info;
		},

		player: ( state, getters ) => ( eplayer ) => {
			if ( enumPlayer.isPlayerA( eplayer ) ) {
				return state.model.match.playerA;
			}
			return state.model.match.playerB;
		},

		player_name:( state, getters ) => ( eplayer ) => {
			return getters.player( eplayer ).name;
		},

		serve( state, getters ) {
			return state.model.match.turn.serve;
		},

		serve_maySwitch( state, getters ) {
			return state.model.match.turn.serve.maySwitch;
		},

		serve_player( state, getters ) {
			return getters.serve.player; 
		},

		serve_side( state, getters ) {
			return state.model.match.turn.serve.side;
		},

		score: ( state, getters ) => ( eplayer, turn ) => {
			turn = turn || state.model.match.turn;
			if ( enumPlayer.isPlayerA( eplayer ) ) {
				return turn.scoreA;
			}
			return turn.scoreB;
		},

		games: ( state, getters ) => ( eplayer, turn ) => {
			
			turn = turn || state.model.match.turn;
			return getters.score( eplayer, turn ).games;
		},
	
		points: ( state, getters ) => ( eplayer, turn ) => {
			turn = turn || state.model.match.turn;
			return getters.score( eplayer, turn ).points;
		},
	
		history( state, getters ) {
			return state.model.match.history.items;
		},

		turn: ( state, getters ) => {
			return state.model.match.turn;
		},

		previousTurn: ( state, getters ) => {
			return state.model.match.history.items[0];
		},

		// is niet echt een getter, geeft geen waarde uit datamodel terug.
		isCurrentTurn: ( state, getters ) => ( turn ) => {
			if ( state.model.match.turn === turn ) {
				return true;
			}
			return false;
		},

		isStartOfGame( state, getters ) {
			// ask engine :-)
			return state.model.match.turn.scoreA.points === 0 && state.model.match.turn.scoreB.points === 0;
		}
	},

	/**
	 * The 'mutations' are a group of functions that sets values of the datamodel inside 'state'.
	 */
	mutations: {
		
		info( state, value ) {
			state.model.match.info = value;
		},

		new_match( state ) {
			state.model.match.turn.scoreA.games = 0;
			state.model.match.turn.scoreA.points = 0;
			state.model.match.turn.scoreB.games = 0;
			state.model.match.turn.scoreB.points = 0;
			state.model.match.turn.serve.player = Par11.toss();
			state.model.match.history = [];
		},

		player_name( state, value ) {
            if ( enumPlayer.isPlayerA( value.eplayer ) ) {
        		state.model.match.playerA.name = value.name;
            } else {
            	state.model.match.playerB.name = value.name;
            }
		},

		playerA_name( state, name ) {
			state.model.match.playerA.name = name;
		},

		playerB_name( state, name ) {
			state.model.match.playerB.name = name;
		},

		playerA_points( state, points )
		{
			state.model.match.turn.scoreA.points = points;
		},

		playerB_points( state, points ) {
			state.model.match.turn.scoreB.points = points;
		},

        serve_maySwitch( state, maySwitch ) {
			state.model.match.turn.serve.maySwitch = maySwitch;
		},

		serve_player( state, eplayer ) {
			state.model.match.turn.serve.player = eplayer;
		},

		serve_side( state, eside ) {
			state.model.match.turn.serve.side = eside;
		},

		games( state, value ) {
			if ( enumPlayer.isPlayerA( value.eplayer ) ) {
				state.model.match.turn.scoreA.games = value.games;
			} else {
            	state.model.match.turn.scoreB.games = value.games;
			}
		},

		points( state, value ) {
			if ( enumPlayer.isPlayerA( value.eplayer ) ) {
				state.model.match.turn.scoreA.points = value.points;
			} else {
            	state.model.match.turn.scoreB.points = value.points;
			}
		},

		historyAdd( state, turn )
		{
			let historyTurn = state.model.match.turn.copy();
			state.model.match.history.add( historyTurn );
		},

		undo( state, value ) {
			state.model.match.history.items[0].copyTo(state.model.match.turn);
			state.model.match.history.items.splice(0,1);         
		}
	},

	actions: {

		undo (context) {
			
            if ( context.getters.isStartOfGame ) {
				context.commit( enumMutations.undo, undefined );
           	}
                
			context.commit( enumMutations.undo, undefined );
		}
	}
})


// Voorbeeld:

/*
var LifecycleVergelijking = function() {

	// Private API:

	var downloadAction = "";
	
	function a(dataPropertyId) {

	}

    // Public API:
	return {
		
		a: function(obj) {

			_a();
			
		}
	}
}
*/

