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

        mixins: [mixinDialogs],

        template: 
            `
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
                                                <v-text-field v-model="namePlayerA" clearable label="Name player A (*)" required></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="namePlayerB" clearable label="Name player B (*)" required></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <v-select v-model="bestOf" label="Best of X games" :items="bestOf_items()" ></v-select>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-select v-model="toss" label="Toss" :items="toss_items()"></v-select>
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
                </div>
            `,

            methods: {
                bestOf_items()
                {
                    return enumBestOf.all();
                },

                check() {
                    // PlayerA:
                    let playerA_name = this.$store.getters.player_name( enumPlayer.A );
                    if ( !Logic.isValidPlayerName( playerA_name ) ) {
                        return "Invalid player name.";
                    }
                    // Player B:
                    let playerB_name = this.$store.getters.player_name( enumPlayer.B );
                    if ( !Logic.isValidPlayerName( playerB_name ) ) {
                        return "Invalid player name.";
                    }
                    // Player A & B:
                    if ( playerA_name === playerB_name ) {
                        return "Players must have different names.";
                    }
                    // BestOf:
                    if ( this.$store.getters.bestOf === undefined ) {
                        return "The 'Best of' setting must be selected.";
                    }
                    // Toss:
                    if ( this.$store.getters.toss === undefined ) {
                        return "The 'Toss' setting must be selected.";
                    }
                    return undefined;
                },

                handleClickCancel() {
                    this.hideDialog();
                },

                handleClickContinue() {
                    let checkMessage = this.check();
                    if ( checkMessage ) {
                        alert( checkMessage ); // todo: dont use an alert, but a new dialog?
                        return;
                    }
                    this.hideDialog();
                    //this.$store.commit( enumMutations.new_match, undefined );
                    this.$store.dispatch( enumActions.start_new_match );
                },

                handleClickStopMatch() {
                    this.$store.commit( enumMutations.match_state, enumMatchState.Idle );
                },

                /*
                hideDialog() {
                    this.show = false;
                },
                */

                showStart() {
                    return !Logic.isMatchRunning( this.$store.getters.match );
                },

                showStop() {
                    return !this.showStart();
                },

                toss_items() {
                    return enumToss.all();
                }
            },

            computed: {

                bestOf:
                    {
                        get() {
                            return this.$store.getters.bestOf;
                        },
                        set( value ) {
                            this.$store.commit( enumMutations.bestOf, value );
                        }
                    },

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
