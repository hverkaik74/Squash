//
// vc-player.js
//

Vue.component(
    'vc-player', 
    {
        props: ['eplayer'],
        
        template: 
            `
                <v-text-field class="vc-player centered-input" v-model="name" maxlength="16" outlined></v-text-field>
            `,

        computed: {

           name: {
                get() {
                    return this.$store.getters.player_name( this.eplayer );
                },
                set( value ) {
                    this.$store.commit( "player_name", { name: value, eplayer: this.eplayer } );
                }
            }
        }
    }
)