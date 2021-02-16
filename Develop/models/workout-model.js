const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            match: [
                /[a-zA-Z]/,
                "You must use a valid name. Avoid numbers or special characters",
            ],
        },
        duration: {
            type: Number,
            required: true,
            validate: [({ lenght }) => lenght >= 0, "Duration must be more than 0 minutes"],
        },
        distance: {
            type: Number,
            required: true,
            validate: [({ lenght }) => lenght >= 1, "Distance must be equal or more than 1 mile"],
        },
        weight: {
            type: Number,
            required: true,
            validate: [({ lenght }) => lenght >= 1, "Weight must be equal or more than 1 lbs"],
        },
        reps: {
            type: Number,
            required: true,
            validate: [({ lenght }) => lenght >= 0, "You must do at least one rep"],
        },
        sets: {
            type: Number,
            required: true,
            validate: [({ lenght }) => lenght >= 0, "You must do at least one set"],
        },
      },
    ],
});

const Workout = mongoose.model("workout-model", fitnessSchema);

module.exports = Workout;