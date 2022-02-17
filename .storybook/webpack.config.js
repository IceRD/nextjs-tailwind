const path = require("path")

module.exports = ({ config }) => {
  config.resolve.alias = {
    "UI": path.resolve(__dirname, "..", "UI")
  }

  return config
}
