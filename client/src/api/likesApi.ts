import axios from 'axios'

async function likes(data: { likeNumber: number }) {
    try {
        const res = await axios.post("/api/likes", data)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default likes
