//
// vc-dialog.js
//

// https://stackoverflow.com/questions/48035310/open-a-vuetify-dialog-from-a-component-template-in-vuejs

Vue.component(
    'vc-dialog', 
    {
        props: ['show'],

        template: `
            <v-dialog v-model="this.$store.state.model.dialogs.confirmUndo" persistent max-width="290">

            <template v-slot:activator="on">
            <v-btn color="primary" dark v-on="{on}">Open Dialog</v-btn>
            </template>
            
            <v-card>
                    <v-card-title class="headline">Use Google's location service?</v-card-title>
                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="clickYes()">Yes</v-btn>
                        <v-btn color="green darken-1" text @click="clickNo()">No</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>`,

            methods: {
                clickYes: function() {
                    alert("YES");

                },

                clickNo: function() {
                    alert("NO");
                }

            }
     }
);
