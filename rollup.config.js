import babel from "rollup-plugin-babel";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";

export default {
	entry: "public/js/main.js",
	dest: "build/js/main.min.js",
	format: "iife",
	sourceMap: "inline",
	plugins: [
		resolve({
			jsnext: true,
			main: true,
			browser: true
		}),
		babel({
			exclude: "node_modules/**"
		})
	]
};
