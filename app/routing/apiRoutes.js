const friends = require("../data/friends")

function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        const newUserData = req.body
        console.log(newUserData)

        for (let i = 0; i < friends.length; i++) {
            //    const element = array[index];fri
            for (let j = 0; j < friends[i].scores.length; j++) {
                return res.json(friends[i]);

            }

        }

        friends.push(newUserData)

        //return the total least difference
        res.json(friends)

    })
}
module.exports = apiRoutes