import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const publicPostController = {
    getAll: async function (req, res) {
        try {
            // Search to the database wheter news content available
            const isPostExist = await prisma.post.count();

            if (isPostExist === 0) {
                // If there isn't available, send error message
                return res.status(404).json({
                    code: 404,
                    status: "Error",
                    message: "News content hasn't been available yet"
                })
            } else {
                // Else, retrieve all news content from database
                const posts = await prisma.post.findMany({
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
                        id: 'desc'
                    }
                })

                // Send successfull message response to the client
                return res.status(200).json({
                    code: 200,
                    status: "success",
                    message: "Ok",
                    data: posts
                })
            }
        } catch (error) {
            res.status(500).json({
                code: 500,
                status: "Error",
                message: error.message
            })
        }
    },
    getItem: async function (req, res) {
        const slug = req.params.slug;

        try {
            const post = await prisma.post.findUnique({
                where: {
                    slug
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
                }
            });

            if (!post) {
                return res.status(404).json({
                    code: 404,
                    status: "Error",
                    message: "News content isn't available"
                })
            } else {
                return res.status(200).json({
                    code: 200,
                    status: "success",
                    message: "Ok",
                    data: post
                })
            }
        } catch (error) {
            return res.status(500).json({
                code: 500,
                status: "Error",
                message: error.message
            })
        }
    },
    getByCategory: async function (req, res) {
        const categoryParams = req.params.category;
        const parseCategory = categoryParams.charAt(0).toUpperCase() + categoryParams.slice(1);


        try {
            const category = await prisma.category.findFirst({
                where: {
                    name: parseCategory
                }
            });

            if (!category) {
                return res.status(404).json({
                    code: 404,
                    status: "Error",
                    message: "News category isn't available"
                })
            } else {
                const posts = await prisma.post.findMany({
                    where: {
                        category: {
                            name: parseCategory
                        }
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
                        id: 'desc'
                    }
                });

                return res.status(200).json({
                    code: 200,
                    status: "success",
                    message: "Ok",
                    data: posts
                })
            }
        } catch (error) {
            return res.status(500).json({
                code: 500,
                status: "Error",
                message: error.message
            })
        }
    },
    getByAuthor: async function (req, res) {
        const authorParams = req.params.author;

        try {
            const author = await prisma.user.findUnique({
                where: {
                    username: authorParams
                }
            })

            if (!author) {
                return res.status(404).json({
                    code: 404,
                    status: "Error",
                    message: "News author isn't available"
                })
            } else {
                const posts = await prisma.post.findMany({
                    where: {
                        author: authorParams
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
                    }
                });

                return res.status(200).json({
                    code: 200,
                    status: "success",
                    message: "Ok",
                    data: posts
                })
            }
        } catch (error) {
            return res.status(500).json({
                code: 500,
                status: "Error",
                message: error.message
            })
        }
    }
}

export default publicPostController;