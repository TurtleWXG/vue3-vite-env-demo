import checker from 'vite-plugin-checker'

const createChecker = () => {
  return checker({
    typescript: true,
    vueTsc: true,
    eslint: {
      lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"'
    }
  })
}

export default createChecker
