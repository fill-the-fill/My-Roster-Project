const express = require('express')
const request = require('request')
const app = express()
const port = 1000
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}


app.get('/teams/:teamName', (req, res) => {
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function (request, response) {
        let x = JSON.parse(response.body)
        let playersArray = x.league.standard
        let teamName = req.params.teamName
        let teamID = teamToIDs[teamName]
         const teamMatch =  playersArray.filter(p => p.teamId === teamID)
         const teamIsActive = teamMatch.filter(p => p.isActive)
         const team = teamIsActive.map(f => { return {"firstName": f.firstName, "lastName": f.lastName, "jersey": f.jersey, "pos": f.pos}})

        res.send(team)


    }
    )
}
)







//===========================================//
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
// const testRoutes = require('../utils/routes')


