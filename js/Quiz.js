class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("yellow");
   Contestant.getContestantInfo();
  
      if(allContestants !== undefined){
        textSize(15);
        text("Note: Contestants who answered correct are highlighted in green colour..",200,270);
       for(var plr in allContestants){
        var display_Answers=330;
         var correctAns = "2";
         if(correctAns === allContestants[plr].answer){
          fill("green")
          display_Answers+=20; }
       else{
        fill("red");

        display_Answers+=50;
       }
         
        
           

            textSize(30);
            text(allContestants[plr].name+":"+allContestants[plr].answer,400,display_Answers)
     
       }
      }
    }
  }
     
    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  


