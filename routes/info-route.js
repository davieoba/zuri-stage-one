const router = require('express').Router()

// http://example.com/api?slack_name=example_name&track=backend
// http://localhost:5000/api/v1/info?slack_name=David Bodunrin&track=backend
router.get('/', (req, res) => {
  const track = req.query.track
  const slack_name = req.query.slack_name

  const current_day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay() - 1]

  const currentDate = new Date()

  // Get the components of the date and time
  const year = currentDate.getUTCFullYear()
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0') // Month is zero-based, so add 1
  const day = String(currentDate.getUTCDate()).padStart(2, '0')
  const hours = String(currentDate.getUTCHours()).padStart(2, '0')
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0')
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0')

  // Create the formatted date string
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;


  res.status(200).json({
    slack_name,
    current_day,
    utc_time: formattedDate,
    track,
    github_file_url: 'https://github.com/davieoba/zuri-stage-one/blob/master/routes/info-route.js',
    github_repo_url: 'https://github.com/davieoba/zuri-stage-one',
    status_code: 200
  })
})

module.exports = router