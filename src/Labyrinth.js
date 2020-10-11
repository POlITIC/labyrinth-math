export default class Labyrinth {
	constructor(labyrinthConfig) {
		this.config = labyrinthConfig;

		this.init();
	}

	init(){
		this.startPositions = this.calculateStartPositions();
	}

	calculateStartPositions(){

	}

	getStartPositions() {
		return this.startPositions;
	}
}
