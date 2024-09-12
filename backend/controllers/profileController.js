exports.getProfile = (req, res) => {
    res.status(200).json({ message: 'User profile', user: req.user });
  };
  
  exports.getSettings = (req, res) => {
    res.status(200).json({ message: 'User settings', user: req.user });
  };
  