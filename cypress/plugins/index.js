const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  if (!fs.existsSync(pathToConfigFile)) {
    // console.error(pathToConfigFile+ ' is not exists');
    return {}
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu')

      return launchOptions
    }
  })
  const file = config.env.configFile
  on('task', {
    readFile_IfExist(filename) {
      if (fs.existsSync(filename)) {
        return JSON.parse(fs.readFileSync(filename, 'utf8'))
      }

      return null
    },
  })

  return getConfigurationByFile(file)
}
