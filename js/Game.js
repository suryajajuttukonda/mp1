class Game {
  constructor(){
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  
  sps=[];
  sp1 = createSprite(100,200);
  sp1.addImage(player.image);
  sp1.scale=0.2;
  sp2 = createSprite(400,200);
  sp2.addImage(player.image);
  sp2.scale=0.2;
  sps = [sp1,sp2];
  }

  play(){ 
    form.hideStart();
    Player.getPlayerInfo();
  console.log(allPlayers)
    
    if(allPlayers !== undefined){
      
    
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var p=0;
      var q=0;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        console.log(q);
        //position the cars a little away from each other in x direction
        q = displayHeight - allPlayers[plr].positionY;
        p = displayWidth - allPlayers[plr].positionY;
          sps[index-1].x = p;
          sps[index-1].y = q;
       // console.log(index, player.index)
          sps[index-1].rotation=allPlayers[plr].angle;
       
        if (index === player.index){
        
          camera.position.x = sps[index-1].x;
          camera.position.y = sps[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(player.index !== null){

      if(keyDown(UP_ARROW)){
         player.positionY +=35;
          player.update();
        }
        if(keyDown(LEFT_ARROW) || keyDown("a")){
          player.positionX +=30;
          player.update();
        }
        if(keyDown(DOWN_ARROW) || keyDown("s")){
          player.positionY -=30;
          player.update();
        }
        if(keyDown(RIGHT_ARROW) || keyDown("d")){
          player.positionX -=30;
          player.update();
        }

        if(keyDown("w")){
          player.angle -=30;
          player.update();
        }
        if( keyDown("a")){
          player.angle -=30;
          player.update();
        }
        if(keyDown("s")){
          player.angle +=30;
          player.update();
        }
        if( keyDown("d")){
          player.angle +=35;
          player.update();
        }
       
      }
      drawSprites();
    }
  }