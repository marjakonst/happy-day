module.exports = {
  apps: [
    {
      name: "contr",
      script: "./rfid-backend/fake-controller.py",
      watch: "./rfid-backend/",
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
      script: "./scripts/start-app-in-chrome.sh",
      autorestart: false,
    },
  ],
};
