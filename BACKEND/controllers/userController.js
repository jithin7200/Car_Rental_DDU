// const User = require('../models/userModel')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// const saltRound = 10

// // create 
// const userRegister = async (req, res) => {
//     const { name, email, password, address, phoneNo, licenceNo, licenceImg } = req.body
//     try {
//         const user = await User.findOne({ email })
//         if (user) {
//             return res.status(404).json({ msg: "USER ALREADY EXIST" })
//         }
//         const hashPasword = await bcrypt.hash(password, saltRound)
//         const register = await new User({
//             name,
//             email,
//             password: hashPasword,
//             address,
//             phoneNo,
//             licenceNo,
//             licenceImg
//         })

//         await register.save()
//         res.status(200).json({ msg: "Registration  Successfully" })

//     } catch (error) {
//         console.log(error);

//         res.status(500).json({ msg: `SERVER ERROR ${error}` })
//     }
// }

// // Login
// const userLogin = async (req, res) => {
//     const { email, password } = req.body
//     try {
//         if (!email || !password) {
//             return res.status(500).json({ msg: "Plesae enter email and password " })
//         }


//         const user = await User.findOne({ email })
//         if (!user) {
//             return res.status(404).json({ msg: "USER NOT FOUND" })
//         }
//         const matchPassword = await bcrypt.compare(password, user.password)
//         if (!matchPassword) {
//             return res.status(200).json({ msg: "PASSWORD NOT MATCH" })
//         }

//         const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' })

//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: true,
//             sameSite: 'strict',
//             maxAge: 24 * 60 * 60 * 1000

//         })
//         return res.status(200).json({
//             success: true,
//             msg: "LOGIN SUCCESS",
//             token: token
//         })

//     } catch (error) {

//         res.status(500).json({ msg: `SERVER ERROR ${error}` })
//         console.log(error);

//     }
// }

// module.exports = { userRegister, userLogin }


const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRound = 10;

// ================= REGISTER =================

const userRegister = async (req, res) => {
    try {

        const {
            name,
            email,
            password,
            address,
            phoneNo,
            licenceNo,
            licenceImg,
            role
        } = req.body;

        // Check User Already Exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                success: false,
                msg: "USER ALREADY EXISTS",
            });
        }

        // Hash Password
        const hashPassword = await bcrypt.hash(
            password,
            saltRound
        );

        // Create User
        const registerUser = new User({
            name,
            email,
            password: hashPassword,
            address,
            phoneNo,
            licenceNo,
            licenceImg,
            role
        });

        await registerUser.save();

        return res.status(201).json({
            success: true,
            msg: "REGISTRATION SUCCESSFUL",
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            msg: `SERVER ERROR ${error.message}`,
        });
    }
};

// ================= LOGIN =================

const userLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check Empty Fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                msg: "PLEASE ENTER EMAIL AND PASSWORD",
            });
        }

        // Find User
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "USER NOT FOUND",
            });
        }

        // Compare Password
        const matchPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!matchPassword) {
            return res.status(401).json({
                success: false,
                msg: "PASSWORD NOT MATCH",
            });
        }

        // JWT TOKEN WITH ROLE
        const token = jwt.sign(
            { id: user._id, role: user.role, },
            process.env.SECRET_KEY,
            {
                expiresIn: "1d",
            }
        );

        // Cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            msg: "LOGIN SUCCESS",
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role, },
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            msg: `SERVER ERROR ${error.message}`,
        });
    }
};


const  getUser = async(req,res)=>{
      try {
        const posts = await User.find().sort({createdAt:-1})
      res.status(200).json({msg:"All register",data:posts})
      } catch (error) {
        console.log(error);
        
          res.status(500).json({msg:"server error"})
      }
}

module.exports = { userRegister, userLogin, getUser}; 