import Labyrinth from "../Labyrinth";
import Bot from "../Bot";

export default  class  DeathMatch {
	constructor(labyrinthConfig, botConfigs) {
		this.labyrinth = new Labyrinth(labyrinthConfig);

		this.createBots(botConfigs);
	}

	createBots(botConfigs) {
		const bots = [];

		botConfigs.forEach((conf) => {
			bots.push(new Bot(conf));
		});

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
