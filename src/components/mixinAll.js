//
// mixinAll.js
//

var mixinAll = {
    methods: 
        {
            isMatchRunning: function() {
                return Logic.isMatchRunning( this.$store.state.model.match );
            }
        }
}