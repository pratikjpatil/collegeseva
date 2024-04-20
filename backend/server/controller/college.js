import { asyncError } from "../middleWares/error.js";
import colleges from "../models/college.js";

export const getAllRelated = asyncError(async (req, res, next) => {
  const { name, email, percentile } = req.body;

  // Convert percentile to a number
  const percentileValue = parseInt(percentile);

  // Define the lower and upper bounds for percentiles
  const lowerBound = percentileValue - 2;
  const upperBound = percentileValue + 1;

  // Find colleges where the percentile falls within the range
  const data = await colleges.find({
    "dept.percentile": { $lt: upperBound, $gt: lowerBound },
  });

  res.status(200).json({
    data,
  });
});

export const createCollege = asyncError(async (req, res, next) => {
  // const { name, email, percentile } = req.body;

  const data = await colleges.create();

  res.status(200).json({
    data,
  });
});
