class Player{
    constructor()
    {

    }


    getCount()
    {
        var playerCountRef= database.ref('playerCount');
        gameStateRef.on("value",function(data){
           gameState = data.val();
    }

}
