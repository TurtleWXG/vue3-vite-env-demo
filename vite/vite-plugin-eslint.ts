import eslint from 'vite-plugin-eslint'

const createEslint = () => {
  return eslint({
    cache: false,
    include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
  })
}

export default createEslint
