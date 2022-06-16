const userModel = require('./userModel');
const post = require('../posts/postModel');

class userService {

    constructor() {

        console.log("In User Service");
    }

    async createUser(body) {
        try {

            return await userModel.create(body);

        }
        catch {
            throw error;
        }
    };
    async showAllUsers() {
        try {
            return await userModel.find();

        }
        catch {
            throw error;
        }
    }

    async getUserById(id) {

        try {
            return await userModel.findById(id);
        }
        catch {
            throw error
        }
    }

    async updateUserById(id, body) {
        try {
            const userUpdate = {

                name: body.name,
                gender: body.gender

            };

            const a = await userModel.findByIdAndUpdate(id, userUpdate, { new: true });
            console.log(a);
            return a;

        }
        catch {
            throw error
        }
    }

    async getPostByUserId(id) {
        try {

            const result = await userModel.findById(id).populate('post');
            return result;

        }

        catch {
            throw error;
        }
    }



    async deleteUserById(id) {
        try {
            return await userModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = new userService();