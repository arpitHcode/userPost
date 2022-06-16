const commentModel = require('./commentModel');
const postModel = require('../posts/postModel');

class commentService {

    constructor() {
        console.log("In comment Service");
    }

    async createComment(id, body) {
        try {

            



            const commentBody = await commentModel.create(body);

            const b = await postModel.findByIdAndUpdate(id, { comment: commentBody._id }, { upsert: true });
            
            return commentBody;

        }


        catch (error) {
            throw error;
        }
    };
    async showAllComment() {
        try {
            return await commentModel.find();

        }
        catch (error) {
            throw error;
        }
    }

    async getCommentById(id) {
        try{

            return await commentModel.findById(id);
        }
        catch(error){
            throw error;    
        }
    }

    async updateCommentById(id, body) {
        try {
            const commentUpdate = {

                description: body.description

            };

            return await commentModel.findByIdAndUpdate(id, commentUpdate, { new: true });

        }
        catch {
            throw error
        }
    }


    async deleteCommentById(id) {
        try {
            return await commentModel.findByIdAndDelete(id);
        }
        catch {
            throw error;
        }
    }
}

module.exports = new commentService();
