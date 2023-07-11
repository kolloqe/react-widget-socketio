module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactWidgetSocketioEn',
      externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
      }
    }
  },
  babel: {
    react: 'automatic',
    cherryPick: [
      '@mui/material',
      'framer-motion'
    ],
    presets: [],
    plugins: []
  }
}
