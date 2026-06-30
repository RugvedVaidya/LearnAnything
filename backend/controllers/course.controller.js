import {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
} from "../services/course.service.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

import  { generateCurriculum } from "../services/ai/curriculum.service.js"

export const create = async (req, res) => {
    try {
        const course = await createCourse(req.body, req.user.id);

        return successResponse(
            res,
            "Course created successfully.",
            course,
            201
        );
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

export const getAll = async (req, res) => {
    try {
        const courses = await getCourses(req.user.id);

        return successResponse(
            res,
            "Courses fetched successfully.",
            courses
        );
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

export const getById = async (req, res) => {
    try {
        const course = await getCourseById(
            req.params.id,
            req.user.id
        );

        return successResponse(
            res,
            "Course fetched successfully.",
            course
        );
    } catch (error) {
        return errorResponse(res, error.message, [], 404);
    }
};

export const update = async (req, res) => {
    try {
        const course = await updateCourse(
            req.params.id,
            req.user.id,
            req.body
        );

        return successResponse(
            res,
            "Course updated successfully.",
            course
        );
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

export const remove = async (req, res) => {
    try {
        const response = await deleteCourse(
            req.params.id,
            req.user.id
        );

        return successResponse(
            res,
            response.message
        );
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

export const generateCourse = async (req, res) => {
    try {

        const curriculum = await generateCurriculum(req.body);

        return successResponse(
            res,
            "Curriculum generated successfully.",
            curriculum
        );

    } catch (error) {

        return errorResponse(
            res,
            error.message
        );

    }
};