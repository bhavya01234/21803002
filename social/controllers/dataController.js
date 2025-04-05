const {
    getUsersData,
    getPostsData,
    getCommentsData
} = require("../services/dataService");

const {
    getTopUsers,
    getLatestPosts,
    getPopularPosts
} = require("../utils/helpers");

async function getTopUsersController(req, res) {
    try {
        const users = await getUsersData();
        const posts = await getPostsData();
        const topUsers = getTopUsers(users, posts);

        res.json({ topUsers });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getPostsController(req, res) {
    const type = req.query.type;

    try {
        const posts = await getPostsData();

        if (type === "latest") {
            const latestPosts = getLatestPosts(posts);
            return res.json({ latestPosts });
        }

        if (type === "popular") {
            const comments = await getCommentsData();
            const popularPosts = getPopularPosts(posts, comments);
            return res.json({ popularPosts });
        }

        return res.status(400).json({ error: "Invalid type. Use ?type=latest or ?type=popular" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getTopUsersController,
    getPostsController,
};
