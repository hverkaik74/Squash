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
                    <div id="history-parent">
                        <div v-for="(turn,index) in getHistory()">   
                            <vc-turn class="turn-history" :turn=turn></vc-turn>
                        </div>
                    </div>
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

    