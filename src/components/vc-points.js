//
// vc-points.js
//

Vue.component(
    'vc-points', 
    {
        props: ['eplayer','turn'],

        mixins: [mixinTurn],
        
        template: 
            `
                <vc-button class="vc-points" :eplayer=this.eplayer :turn=this.turn :render=render :click=handleClick>
                </vc-button>
            `,

        methods: {
            handleClick: function( event )
            {
               if ( !this.isTurnCurrent() ) {
                    return;
                }
                engines.current.handleScore( this.eplayer );
            },

            render: function() {
                return this.$store.getters.points(this.eplayer,this.turn);                
            }
        }
    }
)