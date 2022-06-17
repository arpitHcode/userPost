const postService = require('./postService');

class PostController {

    constructor() {

        console.log(' in post controller');
    }

    async createPost(req, res) {

        try {
            
             const body = {

                title: req.body.title,
                description: req.body.description,
                user: req.body.user

            }

            const result = await postService.createPost(body);
            res.status(201).send(result);
        }

        catch (error) {
            res.status(404).send(error);

        }
    }

    async showAllPost(req, res) {

        try {

            const result = await postService.showAllPost();
            res.status(201).send(result);

        }
        catch (error) {

            throw error;
        }
    }

    async getPostById(req, res) {

        try {

            const id = req.params.id;
            const result = await postService.getpostById(id);
            res.status(201).send(result);

        }
        catch (error) {
            res.status(404).send(error);
        }
    }

    async getPostByUser(req,res) {

        try {

            const id = req.params.id;
            const result = await postService.getPostByUser(id);
            res.status(201).send(result);

        }
        catch (error) {
            res.status(404).send(error);
        }
        
    }
    async updatePostById(req, res) {
        try {
            const id = req.params.id;
            const postUpdate = {

                title: req.body.title,
                description: req.body.description,
                user: req.body.user

            }

            const result = await postService.updatePostById(id, postUpdate);
            res.status(201).send(result);

        }
        catch (error) {
            res.status(404).send(error);
        }
    }

    async deletePostById(req, res) {
        try {
            const id = req.params.id;
            const result = await postService.deletePostById(id);
            res.status(201).send(result);
        }
        catch (error) {
            res.status(404).send(error);
        }
    }
}
module.exports = new PostController();