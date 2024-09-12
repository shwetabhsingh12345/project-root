const NodeCache = require('node-cache');
const cache = new NodeCache();

const setCache = (key, value, ttl = 600) => {
  cache.set(key, value, ttl);
};

const getCache = (key) => {
  return cache.get(key);
};

module.exports = { setCache, getCache };
