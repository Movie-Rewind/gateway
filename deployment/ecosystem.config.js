module.exports = {
  apps : [{
    name   : "gateway",
    script : "npm run start",
    instances: 1,
    env: {
      PORT: 619
    },
    increment_var : 'PORT',
  }]
}
