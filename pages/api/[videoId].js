import ytdl from 'ytdl-core'

export default async (req, res) => {
  const {
    query: { videoId }
  } = req
  const response = await getVideoInfo(videoId)
  res.json(response)
}

export async function getVideoInfo(videoId) {
  let info
  try {
    info = await ytdl.getInfo(videoId)
  } catch (err) {
    console.log(err)
  }
  const { url: urlVideo, mimeType: mimeVideo } = info.formats.find(elem => elem.itag === 18)
  const { url: urlAudio, mimeType: mimeAudio } = info.formats.find(elem => elem.itag === 140)
  const {
    videoDetails: { title, description = {}, thumbnails = [] }
  } = info
  const response = {
    title,
    video: {
      url: urlVideo,
      mime: mimeVideo,
    },
    audio: {
      url: urlAudio,
      mime: mimeAudio,
    },
    description,
    thumbnail: thumbnails[Math.floor(thumbnails.length / 2)]
  }
  return response
}
