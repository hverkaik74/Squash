//
// vc-player.js
//
//                 <v-text-field class="vc-player centered-input" :disabled="true"  v-model="name" maxlength="16"></v-text-field>


Vue.component(
    'vc-player', 
    {
        props: ['eplayer'],
        
        template: 
            `
                <v-alert class="vc-player vc-player-alert" 
                
                :class="{ 
                    playerA: isPlayerA(), 
                    playerB: isPlayerB()
                    
                }"

                >{{render()}}</v-alert>
            `,

        methods: {

            isPlayerA: function() {
                return enumPlayer.isPlayerA( this.eplayer );
            },
            isPlayerB: function() {
                return enumPlayer.isPlayerB( this.eplayer );
            },


            render() {
                return this.$store.getters.player_name( this.eplayer );
            }
        },

        computed: {

           name: {
                get() {
                    return this.$store.getters.player_name( this.eplayer );
                },
                set( value ) {
                    this.$store.commit( enumMutations.player_name, { name: value, eplayer: this.eplayer } );
                }
            }
        }
    }
)