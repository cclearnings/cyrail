const getPayloadData = (name = `random`) => {};
  // "reporter": "cypress-testrail-reporter",
  // "reporterOptions": {
  //   "host": "https://sticsoftautomation.testrail.io/",
  //   "username": "chandra.chandragiri@sticsoftsolutions.com",
  //   "password": "F5pOIJdQJwaX1gHEZJbP",
  //   "projectId": 1,
  //   "suiteId": 1
  // },


  const run_id = () => 
  {
    fetch('testrail-cache.txt')
  .then(response => response.text())
  .then(text => console.log(text))
  }