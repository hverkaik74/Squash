//
// par11.js
//

class Par11 {

	/**
	 * 
	 * @param {any} store - The vuex store.
	 */
	constructor( store )
	{
		this._store = store;
	}

	/**
	 * Tells if player has won the game.
	 * @param {int} points - Points of scoring player.
	 * @param {int} pointsOpponent - Points of opponent.
	 */
	static isEndOfGame( points, pointsOpponent )
	{
		if ( points < 11 ) {
			return false;
		}
		if ( points - pointsOpponent <= 1 ) {
			return false;		
		}
		return true;
	}

	/**
	 * Tells if player has won the match.
	 * @param {int} games - Games of scoring player. 
	 */
	static isEndOfMatch( games ) 
	{
		if ( games < 3 ) {
			return false;
		}
		return true;
	} 

	static isGameballPlayer( turn, eplayer )
	{
		let score = store.getters.score( eplayer, turn );
		if ( score.points < 10 ) {
			return false;
		}

		let opponent = enumPlayer.opponent( eplayer );
		let scoreOpponent = store.getters.score( opponent, turn );
		if ( score.points - scoreOpponent.points < 1 ) {
			return false;
		}

		return true;
	}

	static isGameball( turn ) {
		return Par11.isGameballPlayer( turn, enumPlayer.A ) || Par11.isGameballPlayer( turn, enumPlayer.B );
	}

	static isMatchballPlayer( store, turn, eplayer )
	{
		if ( !Par11.isGameballPlayer( turn, eplayer ) ) {
			return false;
		} 
		
		let score = store.getters.score( eplayer, turn );
		if ( score.games < 2 ) {
			return false;
		}

		return true;		
	}

	static isMatchball( store, turn ) {
		return Par11.isMatchballPlayer( store, turn, enumPlayer.A ) || Par11.isMatchballPlayer( store, turn, enumPlayer.B );
	}

	static isStartOfGame( turn )
	{
		if ( turn.scoreA.points !== 0 || turn.scoreB.points !== 0 ) {
			return false;
		}
		return true;
	}

	static isHandOut( turn, previousTurn )  
	{
		if ( turn.serve.player === previousTurn.serve.player ) {
			return false;
		}
		return true;
	}

	static side( turn, previousTurn )
	{
		// At the start of each game the player may choose a side to serve from.
		if ( Par11.isStartOfGame( turn ) ) {
			return enumSide.R;
		}

		// If there was a so-called 'Hand out' then the player may choose a side to serve from.
		if ( Par11.isHandOut( turn, previousTurn ) ) {
			return enumSide.R;
		}

		// The player must serve from the opposite side.
		return enumSide.opposite( previousTurn.serve.side );
	}

	static toss()
	{
		let random01 = ( Math.random() > 0.5 ) ? 1 : 0;
		if ( random01 === 0 ) {
			return enumPlayer.A;
		}
		return enumPlayer.B;
	}

	handleScore( eplayer ) 
	{
		// We make a copy of the current turn to add this to the history of the match.
		this._store.commit( enumMutations.historyAdd, undefined );

		// Handle point.
		let points = this._store.getters.points( eplayer );
		points = points + 1;
		this._store.commit( enumMutations.points, { eplayer, points } );

		// info.
		let infoTexts = new InfoTexts();

		// If the player did not win the game then we only need to handle new serve.
		let opponent = enumPlayer.opponent( eplayer );
		let pointsOpponent = this._store.getters.points( opponent );
		if ( !Par11.isEndOfGame( points, pointsOpponent ) ) {
			this._store.commit( enumMutations.serve_player, eplayer );
			let side = Par11.side( this._store.getters.turn, this._store.getters.previousTurn );
			this._store.commit( enumMutations.serve_side, side );
			let isHandOut = Par11.isHandOut( this._store.getters.turn, this._store.getters.previousTurn );
			this._store.commit( enumMutations.serve_maySwitch, isHandOut );
			if ( isHandOut ) {
				infoTexts.add( "Handout" );
			}
			if ( Par11.isMatchball( this._store ) ) {
				infoTexts.add( "Matchball" );
			} else if ( Par11.isGameball() ) {
				infoTexts.add( "Gameball" );
			}
			this._store.commit( enumMutations.info, infoTexts.text );
			return;			
		}

		// The player has won the game. We need to add the final score of the game.
		this._store.commit( enumMutations.historyAdd, undefined );

		// The player has won the game. Handle game.
		let games = this._store.getters.games( eplayer );
		games = games + 1;
		this._store.commit( enumMutations.games, { eplayer, games } );
        infoTexts.add( "Game won" );
		// Reset the points.
		this._store.commit( enumMutations.points, { eplayer, points: 0 } );
		this._store.commit( enumMutations.points, { eplayer: opponent, points: 0 } );

		// The player can turn side at the beginning of the new game.
		this._store.commit( enumMutations.serve_maySwitch, true );
		
		// Check to see if the player also won the match.
		if ( Par11.isEndOfMatch( games ) ) {
			infoTexts.add( "Match won" );
		} else {
			infoTexts.add( "New game" );
		}

		this._store.commit( enumMutations.info, infoTexts.text );
	}

	/**
	 * 
	 * @param {enumPlayer} eplayer 
	 */
	handleServe( eplayer ) {
		let servingPlayer = this._store.getters.serve_player;
		if ( servingPlayer !== eplayer ) {
			return;
		}
		let maySwitch = this._store.getters.serve_maySwitch;
		if ( !maySwitch ) {
			return;
		}
		let side = this._store.getters.serve_side;
		let opposite = enumSide.opposite( side );
		this._store.commit( enumMutations.serve_side, opposite );
	}
}

/**
 * Global instance of engine for PAR-11 counting.
 */
var par11 = new Par11( store );
