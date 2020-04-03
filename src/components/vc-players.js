//
// vc-players.js
//


Vue.component(
    'vc-players', 
    {
        props: ['turn'],

        template:`
            <div class="vc-players" >
                <v-row>
                    <v-col>
                        <vc-player eplayer="A" :turn=undefined></vc-player>
                    </v-col>
                    <v-col>
                        <vc-player eplayer="B" :turn=undefined></vc-player>
                    </v-col>
                </v-row>
            </div>`,
     }
);



                
