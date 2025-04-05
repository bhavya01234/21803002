function getTopUsers(users, posts) {
    const postCount = {};
    posts.forEach(post => {
        postCount[post.userId] = (postCount[post.userId] || 0) + 1;
    });

    const topUsers = Object.entries(postCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([userId, count]) => {
            const user = users.find(u => u.id == userId);
            return { id: user.id, name: user.name, postCount: count };
        });

    return topUsers;
}

function getLatestPosts(posts) {
    return posts
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 5);
}

function getPopularPosts(posts, comments) {
    const commentCount = {};
    comments.forEach(c => {
        commentCount[c.postId] = (commentCount[c.postId] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(commentCount));
    const popularPostIds = Object.entries(commentCount)
        .filter(([_, count]) => count === maxCount)
        .map(([postId]) => parseInt(postId));

    return posts.filter(p => popularPostIds.includes(p.id));
}

module.exports = {
    getTopUsers,
    getLatestPosts,
    getPopularPosts,
};
