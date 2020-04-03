//
// vc-player.js
//
//                 <v-text-field class="vc-player centered-input" :disabled="true"  v-model="name" maxlength="16"></v-text-field>

/*
        // Here we define a mixin, an object that contains methods that will be
        //   available to all the components in the app.
        var mixinAll = {
            methods: 
            {
                isMatchRunning: function() {
                    return Logic.isMatchRunning( this.$store.state.model.match );
                }
             }
        }
*/

Vue.component(
    'vc-player', 
    {
        props: ['eplayer'],
        
        mixins: [mixinMatch,mixinPlayers],

        template: 
            `
                <v-alert class="vc-player vc-player-alert" 
                
                :disabled="!isMatchRunning()"

                :class="{ 
                    playerA: isPlayerA(), 
                    playerB: isPlayerB()
                    
                }"

                >{{render()}}</v-alert>
            `,

        methods: {
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