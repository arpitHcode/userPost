const commentService = require('./commentService');

class commentController {

    constructor() {

        console.log(' in comment controller');

    }

    async createComments(req, res) {

        try {

            const id = req.params.id;
            const body = {

                description: req.body.description

            }

            const result = await commentService.createComment(id, body);
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


    async updateCommentById(req, res) {
        try {

            const id = req.params.id;
            const commentUpdate = {

                description: req.body.description

            }
            console.log(id)
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

module.exports = new commentController();