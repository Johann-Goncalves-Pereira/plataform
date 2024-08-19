module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-preset-env': {
			precalculate: false,
			// stage: 3,
			features: {
				// "nesting-rules": true,
				'logical-properties-and-values': false,
				'light-dark-function': false,
			},
		},
		tailwindcss: {},
	},
}
