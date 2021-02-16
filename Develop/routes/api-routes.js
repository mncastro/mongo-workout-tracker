const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then((workoutData) => {
                res.json(workoutData);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {

        db.Workout.create({})
            .then((dbWorkout) => {
                res.json(dbWorkout);
            }).catch((err) => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", ({ params, body }, res) => {
    
        db.Workout.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } })
            .then((dbWorkout) => {
                res.json(dbWorkout);
            }).catch((err) => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then((workoutData) => {
                res.json(workoutData);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({})
            .then((workoutData) => res.json(workoutData))
            .catch((err) => (err));
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.aggregate([{
            $addFields: { totalDuration: { $sum: "$exercises.duration" } },
        },
        ]).then((workoutData) => {
            res.json(workoutData);
        }).catch((err) => {
            res.status(400).json(err);
        });
    });

    // app.post("/api/workouts/range", (req, res) => {
    //     db.Workout.create({})
    //         .then((workoutData) => res.json(workoutData))
    //         .catch((err) => (err));
    // });
};
   

