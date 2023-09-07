const router = require('express').Router()

// http://example.com/api?slack_name=example_name&track=backend
// http://localhost:5000/api/v1/info?slack_name=David Bodunrin&track=backend
router.get('/', (req, res) => {
  const track = req.query.track
  const slack_name = req.query.slack_name

  const current_day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][new Date().getDay()]

  res.status(200).json({
    slack_name,
    current_day,
    utc_time: new Date(),
    track,
    github_file_url: 'https://github.com/davieoba/zuri-stage-one/blob/master/routes/info-route.js',
    github_repo_url: 'https://github.com/davieoba/zuri-stage-one',
    status_code: 200
  })
})

module.exports = router