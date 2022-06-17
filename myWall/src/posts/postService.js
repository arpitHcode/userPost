const postModel = require('./postModel');

class PostService {

    constructor() {

        console.log("In Post Service");
    }

    async createPost(body) {
        try {

            return await postModel.create(body);

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

    async getpostById(id) {

        try {

            return await postModel.findById(id);

        }
        catch(error){

            throw error;
            
        }
    }

    async getPostByUser(id) {

        try {

            return await postModel.find({user : id})
        }
        catch(error) {

            throw error;
            
        }
        

    }
    async updatePostById(id, body) {

        try {

            const postUpdate = {

                title: body.title,
                description: body.description,
                user:body.user

            }

            return await postModel.findByIdAndUpdate(id, postUpdate, { new: true });

        }
        catch(error) {
            throw error
        }
    }


    async deletePostById(id) {
        try {
            return await postModel.findByIdAndDelete(id);
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = new PostService();