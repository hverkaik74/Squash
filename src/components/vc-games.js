//
// vc-games.js
//

Vue.component(
    'vc-games', 
    {
        props: ['eplayer','turn'],

        template: `<vc-button class="vc-button" :eplayer=this.eplayer :turn=this.turn :render=render></vc-button>`,

        methods: {
            render: function() {
                return this.$store.getters.games(this.eplayer, this.turn);
            }
        }
    }
);
