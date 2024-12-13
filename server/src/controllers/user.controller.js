import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const userController = {
    register: async function (req, res) {
        const { username, firstName, lastName, email, password } = req.body;
        const parseUsername = username.trim().toLowerCase().replaceAll(" ", "");
        const name = firstName + " " + lastName;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            // Check to the database, is user already exist.
            const isUserExist = await prisma.user.count({
                where: {
                    username: parseUsername
                }
            });

            // If user exist, throw error message
            if (isUserExist === 1) {
                return res.status(400).json({
                    code: 400,
                    status: "error",
                    message: "User already exist"
                }).end();
            }

            // Else, store data to the database
            await prisma.user.create({
                data: {
                    username: parseUsername,
                    name,
                    email,
                    password: hashedPassword
                }
            });

            // Send success message that user data has been stored successfully
            res.status(201).json({
                code: 201,
                status: "success",
                message: "User registered successfully"
            });
        } catch (error) {
            res.status(400).json({
                code: 400,
                status: "error",
                message: "Registration Failed"
            })
            //res.json({ msg: error.message })
        }
    },
    login: async function (req, res) {
        const { username, password } = req.body;

        try {
            // Find user in database wheter exist
            const user = await prisma.user.findUnique({
                where: {
                    username
                }
            });
            if (!user) {
                // If user doesn't exist throw failed message
                return res.status(400).json({
                    code: 400,
                    status: "error",
                    message: "Username or password is wrong"
                });
            } else {
                // If user exist, compare password within database
                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                    // If password  isn't valid, throw failed message
                    return res.status(400).json({
                        code: 400,
                        status: "error",
                        message: "Username or password is wrong"
                    })
                } else {
                    // If every data have been true, create and send token
                    const token = jwt.sign(
                        {
                            username: user.username,
                            name: user.name
                        },
                        process.env.SECRET_KEY,
                        {
                            expiresIn: '1h'
                        }
                    )
                    res.cookie("token", token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'strict',
                        maxAge: 3600000
                    })
                    return res.status(200).json({
                        code: 200,
                        status: "success",
                        message: "Login successfull",
                        user: user.username,
                        token: token
                    });
                }
            }
        } catch (error) {
            // res.status(500).json("Internal server error")
            res.json({ msg: error.message })
        }
    },
    logout: async function (req, res) {
        try {
            res.clearCookie('token')
            return res.status(201).json({
                code: 201,
                status: "Success",
                message: "Logout Successfully"
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

export default userController;