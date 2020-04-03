//
// vc-info.js
//

Vue.component(
    'vc-info', 
    {
        template: 
            `
                <div class="vc-info" >
                    <v-row>
                        <v-col cols="12" align="center">
                            <label align="center">{{this.$store.getters.info}}</label>
                        </v-col>
                    </v-row>
                </div>
            `
    }
);
