import path from 'path'

//asigna la ruta del index dentro del directorio src
export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
      }
    }
  }
}