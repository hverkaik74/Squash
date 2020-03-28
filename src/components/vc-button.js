//
// vc-button.js
//
// The vc-button component acts as a base component for vc-games, vc-points and vc-turn. We need a base
//   component to centralize the methods.
//

// dit werkt:
// :disabled="!isTurnCurrent()"


Vue.component(
    'vc-button', 
    {
        props: ['eplayer','turn', 'render', 'click'],

        template: `<v-btn class="vc-button v-btn--depressed"
        
        :class="{ 
            'turn-current': isTurnCurrent(),
            playerA: isPlayerA(), 
            playerB: isPlayerB()
            
        }"
        
        

        v-on:click=handleClick 

        >{{this.render()}}</v-btn>`,

        methods: {
            handleClick: function() {
                if ( this.click !== undefined && this.click !== null ) {
                    this.click();
                }
            },
            isTurnCurrent: function() {
                return this.turn === undefined;
            },
            isPlayerA: function() {
                return enumPlayer.isPlayerA( this.eplayer );
            },
            isPlayerB: function() {
                return enumPlayer.isPlayerB( this.eplayer );
            }
        }       
    }
);