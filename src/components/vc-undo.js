//
// vc-undo.js
//

Vue.component(
    'vc-undo', 
    {
        template: `
            <div class="vc-undo" >
                <v-row>
                    <v-col>
                        <v-btn block 
                        v-on:click="undo"
                        :disabled="!canUndo()"
                        >UNDO</v-btn>
                    </v-col>
                </v-row>
            </div>`,
        
        methods: {
            canUndo: function() {
                let turnPrevious = this.$store.getters.previousTurn;
                if ( turnPrevious === undefined ) {
                    return false;
                }
                return true;
            },

            undo: function() {
                this.$store.dispatch( enumActions.undo );
            }
        }
    }
);
