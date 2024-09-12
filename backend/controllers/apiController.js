const axios = require('axios');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // Cache TTL of 10 minutes

exports.fetchExternalData = async (req, res) => {
  const cachedData = cache.get('externalData');
  if (cachedData) {
    return res.status(200).json({ data: cachedData, message: 'Cached data' });
  }

  try {
    const response = await axios.get('https://api.example.com/weather');
    cache.set('externalData', response.data);
    res.status(200).json({ data: response.data, message: 'New data' });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching external data', error: err.message });
  }
};
