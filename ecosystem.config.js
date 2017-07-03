module.exports = {
  apps: [{
    name: 'rahul-aws-tutorial',
    script: './app.js',
    watch       : true,
    env: {
      "NODE_ENV": "development",
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-59-217-71.us-east-2.compute.amazonaws.com',
      key: '/home/rahul/Downloads/rahul-aws-keypair.pem',
      ref: 'origin/master',
      repo: 'https://github.com/dhamecharahul/AWS-Tutorial-Repo',
      path: '/home/ubuntu/AWS-Tutorial-Repo',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
