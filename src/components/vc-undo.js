//
// vc-undo.js
//

/*
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
                <div>
                    <vc-dialog :show=this.$store.getters.dialogs_undo></vc-dialog>
                </div>
            </div>`,

*/

// this.$store.state.model.dialogs.confirmUndo

Vue.component(
    'vc-undo', 
    {
        data: function() {
            return {
                show: false,
            }
        },

        template: `
            <div class="vc-undo" >
                <v-dialog v-model="show" persistent width="unset">
                    <template v-slot:activator="{on}">
                        <v-row>
                            <v-col>
                                <v-btn block v-on="on" :disabled="!canUndo()">UNDO LAST TURN</v-btn>
                            </v-col>
                        </v-row>
                    </template>
                    <v-card>
                        <v-card-title class="headline">Undo</v-card-title>
                        <v-card-text>Are you sure you want to undo the last turn?</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text class="btn-color-yes" @click="handleClickYes">Yes</v-btn>
                            <v-btn text class="btn-color-no" @click="handleClickNo">No</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>`,
        
        methods: {
            canUndo() {
                return Logic.canUndo( this.$store.state.model.match );
            },

            handleClickNo()
            {
                this.hideDialog();
            },

            handleClickYes()
            {
                this.hideDialog();
                this.$store.dispatch( enumActions.undo );
            },

            hideDialog() {
                this.show = false;
            }
        }
    }
);
