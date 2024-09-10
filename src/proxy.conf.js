const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    "target": "`http://127.0.0.1:8082`",
    logLevel: "debug",
    secure: false
  }
]
module.exports = PROXY_CONFIG;