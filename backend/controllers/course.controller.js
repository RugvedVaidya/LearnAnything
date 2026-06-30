import {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
} from "../services/course.service.js";

import { generateCourse as generateCourseService } from "../services/generateCourse.service.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

/**
 * Create Course (Manual - Internal)
 */
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
        return errorResponse(
            res,
            error.message,
            [],
            500
        );
    }
};

/**
 * AI Generate Course
 */
export const generateCourse = async (req, res) => {
    try {
        const course = await generateCourseService(
            req.body,
            req.user.id
        );

        return successResponse(
            res,
            "Course generated successfully.",
            course,
            201
        );
    } catch (error) {
        return errorResponse(
            res,
            error.message,
            [],
            500
        );
    }
};

/**
 * Get All Courses
 */
export const getAll = async (req, res) => {
    try {
        const courses = await getCourses(req.user.id);

        return successResponse(
            res,
            "Courses fetched successfully.",
            courses
        );
    } catch (error) {
        return errorResponse(
            res,
            error.message,
            [],
            500
        );
    }
};

/**
 * Get Course By ID
 */
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
        return errorResponse(
            res,
            error.message,
            [],
            404
        );
    }
};

/**
 * Update Course
 */
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
        return errorResponse(
            res,
            error.message,
            [],
            500
        );
    }
};

/**
 * Delete Course
 */
export const remove = async (req, res) => {
    try {
        const result = await deleteCourse(
            req.params.id,
            req.user.id
        );

        return successResponse(
            res,
            result.message
        );
    } catch (error) {
        return errorResponse(
            res,
            error.message,
            [],
            500
        );
    }
};