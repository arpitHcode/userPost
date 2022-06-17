const commentService = require('./commentService');

class CommentController {

    constructor() {

        console.log(' in comment controller');

    }

    async createComments(req, res) {

        try {

            
            const body = {

                description: req.body.description,
                user:req.body.user,
                post:req.body.post

            }

            const result = await commentService.createComment(body);
            res.status(201).send(result);
        }
        catch (error) {

            res.status(404).send(error);

        }
    }

    async showAllComments(req, res) {

        try {

            const result = await commentService.showAllComment();
            res.status(201).send(result);

        }
        catch (error) {

            throw error;
        }
    }

    async getCommentById(req, res) {

        try {

            const id = req.params.id;
            const result = await commentService.getCommentById(id);
            res.status(201).send(result);

        }
        catch (error) {

            res.status(404).send(error);

        }
    }

    async getCommentByPost(req,res) {

        try {

            const id = req.params.id;
            const result = await commentService.getCommentByPost(id);
            res.status(201).send(result);

        }
        catch (error) {

            res.status(404).send(error);

        }
    }

    async getCommentByUser(req,res) {

        try {

            const id = req.params.id;
            const result = await commentService.getCommentByUser(id);
            res.status(201).send(result);

        }
        catch (error) {

            res.status(404).send(error);

        }
    }

    async updateCommentById(req, res) {
        try {

            const id = req.params.id;
            const commentUpdate = {

                description: req.body.description,
                user: req.body.user,
                post: req.body.post

                }

            const result = await commentService.updateCommentById(id, commentUpdate);
            res.status(201).send(result);

        }
        catch (error) {
            res.status(404).send(error);
        }
    }

    async deleteCommentById(req, res) {
        try {
            const id = req.params.id;
            const result = await commentService.deleteCommentById(id);
            res.status(201).send(result);
        }
        catch (error) {
            res.status(404).send(error);
        }
    }
}

module.exports = new CommentController();