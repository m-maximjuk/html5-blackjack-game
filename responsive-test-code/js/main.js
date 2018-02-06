var blackjack = new BlackjackGame;

//Run Deal Function, display values of cards, and hide right Dealer-Card when deal button pressed
$('#deal-button').on("click", function(){
    blackjack.deal();

    //Set buttons to Appropriate Position
    buttonsAfterDeal();

})

//Initiates Player Hit function when Hit Button Pressed. 
$('#hit-button').on("click", function(){
  blackjack.playerHit();  
})

//Initiates Compare Sums Function when Stand Button Pressed
$('#stand-button').on("click", function(){
  blackjack.compareSums();
  showHiddenDealerCard();
})

//Displays Sum of Player Cards and Value of First Dealer Card
function displaySums(){
document.getElementById('dealer-cards-score').innerHTML = "Dealer: " + blackjack.dealer.cards[0].value
document.getElementById('player-cards-score').innerHTML = "Player: " + blackjack.player.sum
}

//Shows Sums of Player and Dealer Cards and Dealer's Hidden Card after Dealer Flips 
function showHiddenDealerCard(){
  $('#dealer-card1').attr("style", 'background-image: url(\'images/' + blackjack.dealer.cards[1].img + '.png\')')
  $('#dealer-cards-score').text("Dealer: " + blackjack.dealer.sum)
  $('#player-cards-score').text("Player: " + blackjack.player.sum)
  }

function displayWinner(person, string){
  if(person === 'push'){
    $("#victory").text('Push!');
  }
  else if(string === "blackjack"){
    $("#victory").text(person.name + " has Blackjack!")
  }
  else if(string==="bust"){
    $("#victory").text(person.name + " busts!");
  }
  else{
  //Display winner
  $("#victory").text(person.name + " wins!");
}

//Block Hit and Stand Buttons, Unblock Deal Button
buttonsStartDeal();
}



//Make html for each each to be displayed. Person = Dealer Or Player
function displayCard(person, index){
  //Make Tag for Hidden Dealer Card with Image of Back of the Card
  if(person.id === 'dealer' && index === 1){
    var html = '<article id="' + person.id + '-card' + index + '" class="card col-2"'
    html+= ' style="background-image: url(\'images/backofcard.jpeg\')" >'
    html+= '</article>'

  }
  //Make Tag for All Other Cards. Use img property from card object to enter correct data in style tag.
  else{
  var html = '<article id="' + person.id + '-card' + index + '" class="card col-2"'
  html+= ' style="background-image: url(\'images/' + person.cards[index].img + '.png\')" >'
  html+= '</article>'
}
  //Append Tag to Correct Div
  if(person === blackjack.player){
  $('.container-player .row').append(html)
  }
  else if(person === blackjack.dealer ){
    $('.container-dealer .row').append(html)
  }
}
  
  //Clear Cards and Text from Display
function resetCards(){
  $('.container-dealer .row').html("");
  $('.container-player .row').html("")
  $('#victory').html("")
}

//Unblock Deal Button, Block Hit and Stand Buttons
function buttonsStartDeal(){
  $('#hit-button').addClass('blocked');
  $('#stand-button').addClass('blocked');
  $('#deal-button').removeClass('blocked');
}

//Block Deal Button, Unblock Hit and Stand buttons
function buttonsAfterDeal(){
  $('#hit-button').removeClass('blocked');
  $('#stand-button').removeClass('blocked');
  $('#deal-button').addClass('blocked');
}

function flipCard(){
  $('#card1').on('click', function() {
    $('.dealer-card2').toggleClass('back');
    $('.dealer-card2').toggleClass('front');
  })
}



