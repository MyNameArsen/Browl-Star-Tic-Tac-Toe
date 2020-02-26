var ui = {};

ui.currentView = '';

ui.switchViewTo = function(turn) {
    function _switch(_turn) {
        ui.currentView = '#' + _turn;
    }
    _switch(turn);
};

ui.placeToken = function(indx, token) {
    var board = $('.tile-button');
    var targetTile = $(board[indx]);

    if(!targetTile.hasClass('occupied')) {
        if(token === 'X') {
            targetTile.html('<img src="img/Barli.png" width="50px">');
        } else {
            targetTile.html('<img src="img/Colt.png" width="50px">');
        }
        
        targetTile.addClass('occupied');
    }
};