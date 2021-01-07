export default class Labyrinth {
	/**
	 * @typedef {Object} LabyrinthConfig
	 * @property {Array<Array<number>>} rows
	 */

	/**
	 * @typedef {Object} position
	 * @property {number} top
	 * @property {number} left
	 */

	/**
	 *
	 * @param {LabyrinthConfig} labyrinthConfig
	 */
	constructor(labyrinthConfig) {
		this.config = labyrinthConfig;

		this.height = this.config.rows.length;
		this.width = this.config.rows[0].length;

		this.init();
	}

	init(){
		this.startPositions = this.calculateStartPositions();
	}

	/**
	 *
	 * @return {Array<position>}
	 */
	calculateStartPositions(amount) {
		// mapping empty spaces
		const result = [];

		while(result.length < amount){
			// todo get random position and match to all in results
		}

		return result;

	}

	getStartPositions() {
		return this.startPositions;
	}
}
