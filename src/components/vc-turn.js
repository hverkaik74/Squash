//
// vc-turn.js
//

Vue.component(
    'vc-turn', 
    {
        props: ['turn'],

        // todo ... mogelijk om hier 2 cols van 3 cols te maken?

         template: `
            <div class="vc-turn">
                <vc-turn-labels v-if="isTurnCurrent()" ></vc-turn-labels>
                <v-row>
                    <!-- playerA -->
                    <v-col cols="2" align="center" justify="center" >
                        <vc-games eplayer="A" :turn=this.turn></vc-games>
                    </v-col>
                    <v-col cols="2" align="center" justify="center">
                        <vc-points eplayer="A" :turn=this.turn></vc-points>
                    </v-col>
                    <v-col cols="2" align="center" justify="center">
                        <vc-serve v-if="isServing('A')" eplayer="A" :turn=this.turn></vc-serve>
                    </v-col>
                    <!-- playerB -->
                    <v-col cols="2" align="center" justify="center">
                        <vc-serve v-if="isServing('B')" eplayer="B" :turn=this.turn></vc-serve>
                    </v-col>
                    <v-col cols="2" align="center" justify="center">
                        <vc-points eplayer="B" :turn=this.turn></vc-points>
                    </v-col>
                    <v-col cols="2" align="center" justify="center">
                        <vc-games eplayer="B" :turn=this.turn></vc-games>
                    </v-col>
                </v-row>
                <hr v-if="this.turn !== undefined" >
            </div>`,

            methods: {
                isServing: function( eplayer )
                {
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

                },
                isTurnWinner: function() {
                    // todo ... 
                }
            }
     }
)