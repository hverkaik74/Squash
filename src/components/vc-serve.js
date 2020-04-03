//
// vc-serve.js
//

Vue.component(
    'vc-serve', 
    {
        props: ['eplayer','turn'],

        mixins: [mixinTurn],

        template: 
            `
                <vc-button class="vc-serve" :eplayer=this.eplayer :turn=this.turn :render=render :click=handleClick>
                </vc-button>
            `,

        methods: {
            handleClick: function() {
                if ( !this.isTurnCurrent() ) {
                    return;
                }
                engines.current.handleServe( this.eplayer );
            },
            render: function() {
                return this.serve;
            }
        },

        computed: {

            serve: function() {
                let turn = this.turn || this.$store.getters.turn;
			    if ( turn.serve.player !== this.eplayer ) {
				    return "";
                }
                let side = turn.serve.side;
			    if ( turn.serve.maySwitch ) {
				    side = side + "?";
                }
                return side;
		    }
        }
    }
)