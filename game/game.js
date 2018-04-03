class Game {
  constructor () {
    this.zone = 1;
    this.character = this.initCharacter();
  }

  initCharacter () {
    return {
      strength: 100,
      speed: 100,
      stamina: 100,
    };
  }
}

module.exports = Game;