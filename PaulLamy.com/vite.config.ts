import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {	
	rollupOptions: {
		input: './index.html',
	},
	outDir: 'dist' // Ensures build output goes to 'dist'
  }
})
