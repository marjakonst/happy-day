module.exports = {
  apps: [
    {
      name: "contr",
      script: "./rfid/rfid-controller.py",
      watch: "./rfid/",
    },
    {
      name: "server",
      script: "./bin/www",
      env: {
        NODE_ENV: "development",
        DEBUG: "happy-day:*",
      },
      watch: ["./web-server/", "./bin/www"],
    },
    {
      name: "brows",
      script: "./bin/start-app-in-chrome.sh",
      autorestart: false,
    },
  ],
};
