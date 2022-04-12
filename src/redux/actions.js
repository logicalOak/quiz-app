/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const CHANGE_SCORE = 'CHANGE_SCORE';

export const changeCategory = (payload) => ({
	type: 'CHANGE_CATEGORY',
	payload,
});
export const changeDifficulty = (payload) => ({
	type: 'CHANGE_DIFFICULTY',
	payload,
});
export const changeType = (payload) => ({
	type: 'CHANGE_TYPE',
	payload,
});
export const changeAmount = (payload) => ({
	type: 'CHANGE_AMOUNT',
	payload,
});
export const changeScore = (payload) => ({
	type: 'CHANGE_SCORE',
	payload,
});
