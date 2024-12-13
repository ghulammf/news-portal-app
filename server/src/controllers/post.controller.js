import { PrismaClient } from "@prisma/client";
import fs from 'fs';

const prisma = new PrismaClient();

const postController = {
    create: async function (req, res) {
        const { title, slug, content, category } = req.body;
        const parseSlug = slug.trim().toLowerCase().replaceAll(" ", "-");
        const parseCategory = parseInt(category);
        const user = req.user;
        const file = req.file;
        const fileName = file.filename;
        try {
            // Check wheter news title already exist
            const isTitleExist = await prisma.post.count({
                where: {
                    slug: parseSlug
                }
            });

            if (isTitleExist === 1) {
                // Send error message that title already exist
                return res.status(400).json({
                    code: 400,
                    status: "error",
                    message: "The title already exist, try another"
                }).end();
            } else {
                const pathFile = `${req.protocol}://${req.get('host')}/public/images/${fileName}`;

                // Else, store data content to the database
                await prisma.post.create({
                    data: {
                        slug: parseSlug,
                        title,
                        image: pathFile,
                        content,
                        author: user.username,
                        categoryId: parseCategory
                    }
                });
                // Send message success to the client
                return res.status(201).json({
                    code: 201,
                    status: "success",
                    message: "News content successfully created",
                    user: user
                })
            }
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    getAll: async function (req, res) {
        const user = req.user.username;
        //const user = res.data;
        try {
            const getAllNews = await prisma.post.findMany({
                where: {
                    author: user
                },
                select: {
                    slug: true,
                    title: true,
                    image: true,
                    user: {
                        select: {
                            name: true
                        }
                    },
                    content: true,
                    category: {
                        select: {
                            name: true
                        }
                    },
                    createdAt: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            return res.status(200).json({
                code: 200,
                status: "success",
                user: user,
                data: getAllNews
            })
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    getItem: async function (req, res) {
        const slugNews = req.params.slug;
        const user = req.user.username;
        //const user = res.data.username

        try {
            const isContentExist = await prisma.post.count({
                where: {
                    author: user,
                    slug: slugNews
                }
            })
            if (isContentExist === 0) {
                return res.status(404).json({
                    code: 404,
                    status: "error",
                    message: "News content isn't available"
                })
            } else {
                const post = await prisma.post.findUnique({
                    where: {
                        author: user,
                        slug: slugNews
                    },
                    select: {
                        slug: true,
                        title: true,
                        image: true,
                        user: {
                            select: {
                                name: true
                            }
                        },
                        content: true,
                        category: {
                            select: {
                                id: true
                            }
                        },
                        createdAt: true
                    }
                });

                return res.status(200).json({
                    code: 200,
                    status: "success",
                    data: post
                });
            }

        } catch (error) {
            res.json({ error: error.message });
        }
    },
    update: async function (req, res) {
        const { title, slug, content, category } = req.body;
        const parseSlug = slug.trim().toLowerCase().replaceAll(" ", "-");
        const parseCategory = parseInt(category);
        const slugNews = req.params.slug;
        const user = req.body.username;
        const file = req.file;

        if (file) {
            const imageItem = await prisma.post.findUnique({
                where: {
                    slug: slugNews
                }
            });

            const oldFileName = imageItem.image.replace(`${req.protocol}://${req.get('host')}/public/images/`, "");
            const oldFilePath = `./public/images/${oldFileName}`;

            // Remove file in the directory
            fs.unlink(oldFilePath, (err) => {
                if (err) {
                    res.status(400).json({
                        code: 400,
                        status: "error",
                        message: "Image file isn't found"
                    })
                }
            });
        }

        // Store new data request in the variable
        const fileName = file.filename;
        const pathFile = `${req.protocol}://${req.get('host')}/public/images/${fileName}`;

        try {
            const isContentExist = await prisma.post.count({
                where: {
                    author: user,
                    slug: slugNews
                }
            });
            if (isContentExist === 0) {
                return res.status(404).json({
                    code: 404,
                    status: "error",
                    message: "News constent isn't available"
                });
            } else {
                await prisma.post.update({
                    where: {
                        author: user,
                        slug: slugNews
                    },
                    data: {
                        title,
                        slug: parseSlug,
                        image: pathFile,
                        content,
                        categoryId: parseCategory
                    }
                });
                return res.status(201).json({
                    code: 201,
                    status: "success",
                    message: "News content successfully updated"
                })
            }
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    delete: async function (req, res) {
        const slugNews = req.params.slug;
        const user = req.user.username;

        try {
            const postItem = await prisma.post.findUnique({
                where: {
                    author: user,
                    slug: slugNews
                }
            });
            if (postItem) {
                const nameImage = postItem.image.replace(`${req.protocol}://${req.get('host')}/public/images/`, "");
                const filePath = `./public/images/${nameImage}`;

                fs.unlink(filePath, (err) => {
                    if (err) {
                        res.status(400)
                        throw new Error("Image file isn't exist")
                    }
                })

                await prisma.post.delete({
                    where: {
                        slug: slugNews
                    }
                });

                return res.status(201).json({
                    code: 201,
                    status: "success",
                    message: "News content successfully deleted"
                })
            } else {
                return res.status(400).json({
                    code: 400,
                    status: "error",
                    message: "News content isn't available"
                });
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}

export default postController;