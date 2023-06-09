const bountyModel = require('../models/bounty.model');

module.exports.getBounties = async (req, res) => {
  const { userID, ...restParams } = req.query;
  try {
    let data;
    if (userID) {
      data = await bountyModel.getUserBounties(userID);
    } else {
      data = await bountyModel.getAllBounties(restParams);
    }
    res.status(200).json(data);
  } catch (err) {
    console.error('Query failed: get bounties', err.message);
    res.sendStatus(400);
  }
};

module.exports.createBounty = async (req, res) => {
  const bounty = req.body;
  console.log('req.body', bounty)
  try {
    await bountyModel.createBounty(bounty);
    res.status(201).send('Bounty created');
  } catch (err) {
    console.error('Query failed: create bounty', err.message);
    res.sendStatus(400);
  }
};
