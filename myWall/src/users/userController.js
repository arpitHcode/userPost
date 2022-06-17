// import user service
const userService = require('./userService');

class UserController {

    constructor() {

        console.log(' in student controller');
    }

    async createUser(req, res) {

        try {
            const body = {

                name: req.body.name,
                gender: req.body.gender,

            }

            const result = await userService.createUser(body);
            res.status(201).send(result);
        }

        catch (error) {

            res.status(404).send(error);

        }
    }

    async showAllUsers(req, res) {

        try {

            const result = await userService.showAllUsers();
            res.status(201).send(result);

        }
        catch (error) {

            res.status(404).send(error);

        }
    }

    async getUserById(req, res) {

        try {

            const id = req.params.id;
            const result = await userService.getUserById(id);
            res.status(201).send(result);

        }

        catch (error) {

            res.status(404).send(error);
        }
    }


    async updateUserById(req, res) {
        try {

            const id = req.params.id;
            const userUpdate = {

                name: req.body.name,
                gender: req.body.gender

            }

            const result = await userService.updateUserById(id, userUpdate);
            res.status(201).send(result);

        }

        catch (error) {
            res.status(404).send(error);
        }
    }

    async deleteUserById(req, res) {
        try {

            const id = req.params.id;
            const result = await userService.deleteUserById(id);
            res.status(201).send(result);

        }
        catch (error) {

            res.status(404).send(error);

        }
    }
}
module.exports = new UserController();