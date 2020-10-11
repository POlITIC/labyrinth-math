export default  class  DeathMatch {
	constructor(labyrinth, bots) {
		this.labyrinth = labyrinth;

		this.bots = bots;
	}

	init() {
		const startPositions = this.labyrinth.getStartPositions();
		this.bots.forEach((bot, index) => {
			const startPos = startPositions[index];

			if(startPos) {
				bot.init(startPos);
			}
		});

		// TODO this should not be alowed. And definitely should not be here.
		this.bots = this.bots.filter(bot => bot.position);
	}

	getMoveResult() {
		//TODO get move configs for all bots
		const moveConfigs = [
			{
				surround: {
					left: false,
					right: false,
					front: false,
					back: false
				},
				enemyInView: false,
				position: {
					left: 1,
					top: 1
				},
				history: []
			},
			{
				surround: {
					left: false,
					right: false,
					front: false,
					back: false
				},
				enemyInView: false,
				position: {
					left: 1,
					top: 1
				},
				history: []
			},
		];


		const botsMoves = this.bots.map((bot, index) => {
			return bot.makeAMove(moveConfigs[0]);//moveConfigs[index]
		});
	}

	calculateBotConfig () {

	}
}
