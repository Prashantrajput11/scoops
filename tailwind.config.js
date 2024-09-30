const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			...colors,
			while: colors.white,
			black: colors.black,
			zinc: colors.zinc,
			slate: colors.slate,
			gray: colors.gray,
			neutral: colors.neutral,
			background: "#FAF2E7",
			primary: {
				DEFAULT: "#3f1336",
				50: "#fdf6fc",
				100: "#faedfa",
				200: "#f4daf2",
				300: "#ebbce6",
				400: "#de94d5",
				500: "#916a89",
				600: "#af4a9f",
				700: "#903b81",
				800: "#763269",
				900: "#622d57",
				950: "#3f1336",
			},
		},
	},

	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				".btn-primary":
					"bg-primary py-3 rounded-lg justify-center items-center",
				".btn-text": "text-sm font-semibold text-white",
				".divider": "h-[1px] bg-gray-200 dark:bg-gray-900",
			});
		}),
	],
};
