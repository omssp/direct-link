import { Innertube } from 'youtubei.js';
const youtube = await Innertube.create({location: "IN"});

export default async (req, res) => {
    const { searchQuery } = req.query
    const searchResults = (await youtube.music.search(searchQuery)).contents

    res.json(searchResults)
}