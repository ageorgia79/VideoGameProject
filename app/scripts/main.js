function Earthwormjim () {
  this.hp = 15;

  this.primaryAttack = function(target) {
    target.hp = target.hp - 2;
  };

  this.specialAttack = function(target) {
    target.hp = target.hp - 3;
  }
};


function Enemy (level) {
  this.hp = level * 10;

  this.primaryAttack = function(target) {
    target.hp = target.hp - (10 + level/4);
  }

  this.specialAttack = function(target) {
    target.hp = target.hp - 10;
    this.hp = this.hp + 10;
  }
};

var enemyLevel = 1;

$('.choose-earthwormjim').click(function() {
  player = new Earthwormjim();
  enemy = new Enemy(enemyLevel)

  $('.characters').remove();

  $('.battle-menu').addClass('active'); 

  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
});

function renderPlayerInfo (player) {
  if (player.hp < 1) {
    showWellDone()
  } else {
    $('.player-info').html("Player has " + player.hp + "hp")
  }
};

function renderEnemyInfo (enemy) {
  if (enemy.hp < 1) {
    $('.enemy-info').html("<span class='red'>Enemy Is Dead</span>")
  } else {
    $('.enemy-info').html("Enemy has " enemy.hp + "hp")
  }
};

$('.primary').click(function(){
  player.primaryAttack(enemy);
  $('.status').html('You Attack!');
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);

  triggerEnemyAttack(player)
});

$('.special').click(function(){
  player.specialAttack(enemy);
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);

  triggerEnemyAttack(player)
});

function showWellDone() {
  $('.well-done').addClass('active')

};

function triggerEnemyAttack () {
  setTimeout(function(){
    if (Math.floor(Math.random() * 10) > 6){
      enemy.specialAttack(player);
      $('.status').html('Enemy special attack!')
    } else {
      enemy.primaryAttack(player);
      $('.status').html('Enemy Attack!')
    }

    renderPlayerInfo(player);
    renderEnemyInfo(enemy);
  }, 2000)
};