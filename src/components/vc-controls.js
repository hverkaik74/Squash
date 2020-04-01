//
// vc-controls.js
//

Vue.component(
    'vc-controls', 
    {
        data: function() {
            return {
                show: false
            }
        },

        template: `
            <div class="vc-controls" >
                <v-row>

                    <v-dialog v-model="show" persistent max-width="600px">
                        
                        <!-- This template is the non-dialog part, always shown on the screen. -->
                        <template v-slot:activator="{ on }">
                            <v-row>
                                <v-col v-if="showStart()" cols="12" align="center" justify="center" >
                                    <v-btn color="primary" dark v-on="on">START NEW MATCH</v-btn>
                                </v-col>
                                <v-col v-if="showStop()" cols="12" align="center" justify="center" >
                                    <v-btn color="primary" dark @click="handleClickStopMatch" >STOP MATCH</v-btn>
                                </v-col>
                            </v-row>
                        </template>

                        <!-- This is the 'default' slot, the part that will be shown as dialog. -->
                        <v-card>
                            <v-card-title>
                                <span class="headline">START MATCH</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="namePlayerA" label="Name player A (*)" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="namePlayerB" label="Name player B (*)" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-switch v-model="toss" label=" Automatic toss."></v-switch>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <small>(*) Indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text class="color-no" @click="handleClickCancel">Cancel</v-btn>
                                <v-btn text class="color-yes" @click="handleClickContinue">Continue</v-btn>
                            </v-card-actions>
                        </v-card>                    
                    </v-dialog>              
                </v-row>
            </div>`,

            methods: {
                handleClickCancel() {
                    this.hideDialog();
                },

                handleClickContinue() {
                    this.hideDialog();
                    this.$store.commit( enumMutations.new_match, undefined );
                },

                handleClickStopMatch() {
                    this.$store.commit( enumMutations.match_state, enumMatchState.Idle );
                },

                hideDialog() {
                    this.show = false;
                },

                showStart() {
                    return !Logic.isMatchRunning( this.$store.getters.match );
                },

                showStop() {
                    return !this.showStart();
                }
            },

            computed: {

                namePlayerA: {
                     get() {
                         return this.$store.getters.player( enumPlayer.A ).name;
                     },
                     set( value ) {
                         this.$store.commit( enumMutations.player_name, { name: value, eplayer: enumPlayer.A } );
                     }
                 },

                 namePlayerB: {
                    get() {
                        return this.$store.getters.player( enumPlayer.B ).name;
                    },
                    set( value ) {
                        this.$store.commit( enumMutations.player_name, { name: value, eplayer: enumPlayer.B } );
                    }
                },

                toss: {
                    get() {
                        return this.$store.getters.toss;

                    },
                    set( value ) {
                        this.$store.commit( enumMutations.toss, value );
                    }
                }
             }
    }
);
