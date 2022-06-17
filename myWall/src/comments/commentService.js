
const commentModel = require('../comments/commentModel');

class CommentService {

    constructor() {

        console.log("In comment Service");

    }

    async createComment(body) {

        try {

           return await commentModel.create(body);

        }


        catch (error) {

            throw error;

        }
    }

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

    async getCommentByPost(id) {

        try{

            return await commentModel.find({ post : id});
        }
        catch(error){

            throw error;
        }
    }

    async getCommentByUser(id) {

        try{

            return await commentModel.find({ user : id});
        }
        catch(error){

            throw error;
        }
    }

    async updateCommentById(id, body) {
        try {
            const commentUpdate = {

                description: body.description,
                user:body.user,
                post:body.post

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

module.exports = new CommentService();
