import babel from "rollup-plugin-babel";

export default {
	entry: "public/js/main.js",
	dest: "build/js/main.min.js",
	format: "iife",
	sourceMap: "inline",
	plugins: [
		babel({
			exclude: "node_modules/**"
		})
	]
};
