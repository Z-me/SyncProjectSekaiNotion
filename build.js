import { GasPlugin } from 'esbuild-gas-plugin';
import { build } from 'esbuild';

build({
	entryPoints: ['./src/main.ts'],
	bundle: true,
	charset: 'utf8',
	outfile: './dist/bundle.js',
	external: ['./node_modules/*'],
	plugins: [GasPlugin]
}).catch((err) => {
	process.stderr.write(err.stderr);
	process.exit(1);
});
