import babel from "rollup-plugin-babel";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import commonjs from "rollup-plugin-commonjs";

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
        commonjs({
            // non-CommonJS modules will be ignored, but you can also
            // specifically include/exclude files
            include: "node_modules/**", // Default: undefined
            exclude: ["node_modules/foo/**", "node_modules/bar/**"], // Default: undefined
            // these values can also be regular expressions
            // include: /node_modules/

            // search for files other than .js files (must already
            // be transpiled by a previous plugin!)
            extensions: [".js", ".coffee"], // Default: [ '.js' ]

            // if true then uses of `global` won't be dealt with by this plugin
            ignoreGlobal: false, // Default: false

            // if false then skip sourceMap generation for CommonJS modules
            sourceMap: false, // Default: true

            // explicitly specify unresolvable named exports
            // (see below for more details)
            namedExports: {
                // left-hand side can be an absolute path, a path
                // relative to the current directory, or the name
                // of a module in node_modules
                phaser: ["Phaser"]
            },
            // sometimes you have to leave require statements
            // unconverted. Pass an array containing the IDs
            // or a `id => boolean` function. Only use this
            // option if you know what you're doing!
            ignore: ["conditional-runtime-dependency"]
        }),
        babel({
            exclude: "node_modules/**"
        }),
        process.env.NODE_ENV === "production" && uglify.uglify()
    ]
};
