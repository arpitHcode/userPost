const postModel = require('./postModel');
const userModel = require('../users/userModel');

class postService {

    constructor() {
        console.log("In Post Service");
    }

    async createpost(id, body) {
        try {

            // return await postModel.create(body).then((postData) => {

            //     userModel.findByIdAndUpdate(id, {post: postData._id}, {new : true})

            const a = await postModel.create(body);

            const b = await userModel.findByIdAndUpdate(id, { post: (a._id) }, { upsert: true });

            console.log(b);
            return a;



        }
        catch (error) {
            throw error;
        }
    }

    async showAllPost() {
        try {
            return await postModel.find();

        }
        catch (error) {
            throw error;
        }
    }

    async getCommentByPostId(id) {

        try {

            const result = await postModel.findById(id).populate('comment');
            return result;

        }
        catch (error) {
            throw error;
        }
    }

    async getpostById(id) {

        try {

            const result = await postModel.findById(id);
            return result;

        }
        catch {
            throw error;
        }
    }

    async updatePostById(id, body) {
        try {
            const postUpdate = {

                title: body.title,
                description: body.description

            };

            return await postModel.findByIdAndUpdate(id, postUpdate, { new: true });

        }
        catch {
            throw error
        }
    }


    async deletePostById(id) {
        try {
            return await postModel.findByIdAndDelete(id);
        }
        catch {
            throw error;
        }
    }
}

module.exports = new postService();