const ytsr = require('ytsr');

export default async (req, res) => {
    const { searchQuery } = req.query
    const searchResults = await ytsr(searchQuery, { limit: 10 })

    res.json(searchResults)
}