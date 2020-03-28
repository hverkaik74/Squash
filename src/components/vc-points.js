//
// vc-points.js
//

Vue.component(
    'vc-points', 
    {
        props: ['eplayer','turn'],
        
        template: `<vc-button class="vc-points"  :eplayer=this.eplayer :turn=this.turn :render=render :click=handleClick></vc-button>`,

        methods: {
            handleClick: function( event )
            {
                // Suppress clicks in history items.
                if ( this.turn !== undefined ) {
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