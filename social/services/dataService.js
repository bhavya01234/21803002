const axiosInstance = require("../config/axiosConfig");

async function getUsersData() {
    const res = await axiosInstance.get("/users");
    return res.data.users || res.data;
}

async function getPostsData() {
    const res = await axiosInstance.get("/posts");
    return res.data.posts || res.data;
}

async function getCommentsData() {
    const res = await axiosInstance.get("/comments");
    return res.data.comments || res.data;
}

module.exports = {
    getUsersData,
    getPostsData,
    getCommentsData,
};
