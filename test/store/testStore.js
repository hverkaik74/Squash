//
// testStore.js
//

QUnit.module( "testStore" );

QUnit.test( "created", function( assert ) {
    assert.ok( store !== undefined && store !== null, "Store is created." );
});

QUnit.test( "new_match", function( assert ) {
    store.commit('new_match');
    assert.ok( store.getters.playerA_games === 0, "playerA_games" );
    assert.ok( store.getters.playerA_points === 0, "playerA_points" );
    assert.ok( store.getters.playerB_games === 0, "playerB_games" );
    assert.ok( store.getters.playerB_points === 0, "playerB_points" );
} );

QUnit.test( "playerA_name", function( assert ) {
    const nameA = "A. Player";
    store.commit( "playerA_name", nameA );
    assert.ok( store.getters.playerA_name === nameA, "playerA_name" );
}  );

QUnit.test( "playerB_name", function( assert ) {
    const nameB = "B. Player";
    store.commit( "playerB_name", nameB );
    assert.ok( store.getters.playerB_name === nameB, "playerB_name" );
}  );

