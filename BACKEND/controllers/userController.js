const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const saltRound = 10

const userRegister = async (req, res) => {
    const { name, email, password, address, phoneNo, licenceNo, licenceImg } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            res.status(404).json({ msg: "USER ALREADY EXIST" })
        }
        const hashPasword = await bcrypt.hash(password, saltRound)
        const register = await new User({
            name,
            email,
            password: hashPasword,
            address,
            phoneNo,
            licenceNo,
            licenceImg
        })

        await register.save()
        res.status(200).json({ msg: "Registration  Successfully" })

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: `SERVER ERROR ${error}` })
    }
}

// Login
const userLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            res.status(500).json({ msg: "Plesae enter email and password " })
        }


        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ msg: "USER NOT FOUND" })
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            res.status(200).json({ msg: "PASSWORD NOT MATCH" })
        }
        res.status(200).json({ msg: "LOGIN SUCESS" })


    } catch (error) {
       res.status(500).json({ msg: `SERVER ERROR ${error}` })
    }
}

// module.exports = userLogin

module.exports = { userRegister, userLogin }