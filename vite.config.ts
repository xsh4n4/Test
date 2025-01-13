import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
	base: "/",
	plugins: [react()],
	preview: {
		port: 3000,
		strictPort: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/Assets"),
			"@features": path.resolve(__dirname, "./src/Features"),
			"@services": path.resolve(__dirname, "./src/Services"),
			"@views": path.resolve(__dirname, "./src/Views"),
			"@utils": path.resolve(__dirname, "./src/Utils"),
			"@variables": path.resolve(__dirname, "./src/App/Styles/_variables.scss"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@variables" as vars;`,
			},
		},
	},
	server: {
		port: 3000,
		strictPort: true,
		host: true,
		origin: "true",
	},
});
