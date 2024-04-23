const Users = require("../../model/Users");

const addUser = async (req, res) => {
    try {
        const {
            user_name,
            user_image,
            user_phone,
            user_address,
        } = req.body;

        const userData = {
            user_name,
            user_image,
            user_phone,
            user_address
        }
        const user = await Users.create(userData);
        res.status(200).send({
            payload: user,
            success: true,
            error: null
        });
    } catch (error) {
        res.status(500).send({
            payload: null,
            succes: false,
            error: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).send({
            success: true,
            payload: users,
            error: null
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            payload: null,
            error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const users = await Users.findByIdAndDelete(userId);
        res.status(200).send({
            success: true,
            payload: users,
            error: null
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            payload: null,
            error: error.message
        })
    }
}

module.exports = {
    addUser,
    getAllUsers,
    deleteUser
}