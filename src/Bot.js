export default class Bot {

	/**
	 * @typedef {Object} Position Current position in labyrinth.
	 * @property {number} left
	 * @property {number} top
	 */

	/**
	 * @typedef {Object} Surround True if there is a wall.
	 * @property {boolean} left
	 * @property {boolean} right
	 * @property {boolean} back
	 * @property {boolean} front
	 */

	/**
	 * @typedef {Object} MoveConfig
	 * @property {Surround} surround
	 * @property {boolean} enemyInView
	 * @property {Position} position
	 * @property {Array} history
	 * @property {number} health
	 */

	/**
	 *
	 * @param {string} code
	 */
	constructor(code) {
		this.createBotCode(code);
	}


	/**
	 *
	 * @param {string} code
	 */
	createBotCode(code) {
		// TODO this should be substituted with custom interpreter with security.
		this.moveCallback = Function(code);
	}


	/**
	 *
	 * @param {Position} position
	 */
	init(position) {
		this.position = position;
	}

	/**
	 *
	 * @param {MoveConfig} config
	 * @return {Array}
	 */
	makeAMove(config) {
		return this.moveCallback(config);
	}

}
