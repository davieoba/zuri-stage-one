const router = require('express').Router()

router.get('/', (req, res) => {
  const track = req.query.track
  const slack_name = req.query.slack_name

  const current_day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][new Date().getDay()]

  console.log(new Date())

  res.status(200).json({
    slack_name,
    current_day,
    utc_time: new Date(),
    track,
  })
})
module.exports = router

/**
 * 
 * {
  "slack_name": "example_name",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/username/repo",
  "status_code": 200
}

 http://example.com/api?slack_name=example_name&track=backend
 */