const Job = require('../models/job.model')
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = {
  findAll: (req, res) => {
    Job.find().populate('user')
      .then((dbRes) => res.status(200).json(dbRes))
      .catch((dbErr) => res.status(400).json(dbErr));
  },
  findOne: (req, res) => {
    Job.findById(req.params.id).populate('user')
      .then((dbRes) => res.status(200).json(dbRes))
      .catch((dbErr) => res.status(400).json(dbErr));
  },
  createJob: (req, res) => {
    const { id: userId } = jwt.verify(req.cookies.userToken, SECRET);
    Job.create({ ...req.body, user: userId })
      .then((dbRes) => res.status(201).json(dbRes))
      .catch((dbErr) => res.status(400).json(dbErr));
  },
  update: (req, res) => {
    Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((dbRes) => res.status(200).json(dbRes))
      .catch((dbErr) => res.status(400).json(dbErr));
  },
  delete: (req, res) => {
    Job.findByIdAndDelete(req.params.id)
      .then((dbRes) => res.status(200).json(dbRes))
      .catch((dbErr) => res.status(400).json(dbErr));
  },
};
