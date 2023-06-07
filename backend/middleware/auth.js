import ErrorResponse from "../utils/errorResponse.js";
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";

export const isAuthenticated = async(req, res, next) => {
    const {token} = req.cookies;

    if(!token) {
        return next(new ErrorResponse('Авторизуйтесь для доступа', 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next()
    } catch (error) {
        return next(new ErrorResponse('Авторизуйтесь для доступа', 401))
    }
}

//middleware for admin
export const isAdmin = (req, res, next) => {
    if(req.user.role === 0) {
        return next(new ErrorResponse('Вы не админ, доступ закрыт', 401));
    }
    next();
}