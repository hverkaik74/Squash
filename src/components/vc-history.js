//
// vc-history.js
//

Vue.component( 
    'vc-history',
    {
        template:
            `
                <div class="vc-history" >
                    <vc-undo></vc-undo>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>History turns</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div id="history-parent">
                                    <div v-for="(turn,index) in getHistory()">   
                                        <vc-turn class="turn-history" :turn=turn></vc-turn>
                                    </div>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                 </div>
            `,
            methods:
            {
                getHistory()
                {
                    return this.$store.getters.history;    
                }
            }
    }
);

    