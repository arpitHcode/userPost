// import user Model
const userModel = require('./userModel');

// create user service class
class UserService {

    constructor() {

        console.log("In User Service");
    }

    // create user
    async createUser(body) {

        try {

            return await userModel.create(body);

        }
        catch(error) {
            throw error;
        }
    
    };

    // show all users
    async showAllUsers() {

        try {

            return await userModel.find();

        }
        catch(error) {

            throw error;

        }

    }

    // get a user by id
    async getUserById(id) {

        try {

            return await userModel.findById(id);

        }

        catch(error) {

            throw error;

        }

    }

    // update user by id
    async updateUserById(id, body) {

        try {

            const userUpdate = {

                name: body.name,
                gender: body.gender

            };

            return await userModel.findByIdAndUpdate(id, userUpdate, { new: true });

        }

        catch(error) {

            throw error;

        }
    }   

    // delete user by id
    async deleteUserById(id) {

        try {

            return await userModel.findByIdAndDelete(id);

        }
        catch (error) {

            throw error;
        }
    }
}
module.exports = new UserService();