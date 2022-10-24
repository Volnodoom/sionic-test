class GeneralUtils {
	static getRandomPositiveInteger = function (valueA: number, valueB: number) {
		const lower = Math.ceil (Math.min (Math.abs (valueA), Math.abs (valueB)));
		const upper = Math.floor (Math.max (Math.abs (valueA), Math.abs (valueB)));
		const result = Math.random () * (upper - lower + 1) + lower;
		return Math.floor (result);
	};
}

export default GeneralUtils;
