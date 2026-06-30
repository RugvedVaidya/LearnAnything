import prisma from "../config/prisma.js";

/**
 * Create a new course
 */
export const createCourse = async (courseData, userId) => {
    const course = await prisma.course.create({
        data: {
            ...courseData,
            userId,
        },
    });

    return course;
};

/**
 * Get all courses of a user
 */
export const getCourses = async (userId) => {
    const courses = await prisma.course.findMany({
        where: {
            userId,
        },
        include: {
            modules: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return courses;
};

/**
 * Get one course with complete hierarchy
 */
export const getCourseById = async (courseId, userId) => {
    const course = await prisma.course.findFirst({
        where: {
            id: courseId,
            userId,
        },
        include: {
            modules: {
                orderBy: {
                    order: "asc",
                },
                include: {
                    chapters: {
                        orderBy: {
                            order: "asc",
                        },
                        include: {
                            lessons: {
                                orderBy: {
                                    order: "asc",
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    if (!course) {
        throw new Error("Course not found.");
    }

    return course;
};

/**
 * Update course details
 */
export const updateCourse = async (courseId, userId, updatedData) => {

    const course = await prisma.course.findFirst({
        where: {
            id: courseId,
            userId,
        },
    });

    if (!course) {
        throw new Error("Course not found.");
    }

    return await prisma.course.update({
        where: {
            id: courseId,
        },
        data: updatedData,
    });
};

/**
 * Delete course
 */
export const deleteCourse = async (courseId, userId) => {

    const course = await prisma.course.findFirst({
        where: {
            id: courseId,
            userId,
        },
    });

    if (!course) {
        throw new Error("Course not found.");
    }

    await prisma.course.delete({
        where: {
            id: courseId,
        },
    });

    return {
        message: "Course deleted successfully.",
    };
};