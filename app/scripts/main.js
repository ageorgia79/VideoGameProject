function EarthwormJim () {
  this.hp = 15;

  this.firstAttack = function(badguy) {
    badguy.hp = badguy.hp - 2;
  }

  this.secondAttack = function(badguy) {
    badguy.hp = badguy.hp - 3;
  }
}


function AngryFish (level) {
  this.hp = level * 10;

  this.firstAttack = function(badguy) {
    badguy.hp = badguy.hp - (10 + level/4);
  }

  this.secondAttack = function(badguy) {
    badguy.hp = badguy.hp - 10;
    this.hp = this.hp + 10;
  }
}

var angryfishLevel = 1;

$('.ejbutton').click(function() {
  player =  new EarthwormJim();
  enemy = new AngryFish(angryfishLevel)

  $('.characters').remove();

  $('.fighttime').addClass('active');

  renderJimInfo(player);
  renderBadInfo1(enemy);
})