"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
const http_status_codes_1 = require("http-status-codes");
class HttpResponse {
    OK(res, data) {
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            status: http_status_codes_1.StatusCodes.OK,
            statusMessage: http_status_codes_1.ReasonPhrases.OK,
            data,
        });
    }
    BadRequest(res, data) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            status: http_status_codes_1.StatusCodes.BAD_REQUEST,
            statusMessage: http_status_codes_1.ReasonPhrases.BAD_REQUEST,
            data,
        });
    }
    NotFound(res, data) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            statusMessage: http_status_codes_1.ReasonPhrases.NOT_FOUND,
            data,
        });
    }
    Unauthorized(res, data) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
            statusMessage: http_status_codes_1.ReasonPhrases.UNAUTHORIZED,
            data,
        });
    }
    Forbidden(res, data) {
        return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({
            status: http_status_codes_1.StatusCodes.FORBIDDEN,
            statusMessage: http_status_codes_1.ReasonPhrases.FORBIDDEN,
            data,
        });
    }
    InternalServerError(res, data) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
            statusMessage: http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR,
            data,
        });
    }
}
exports.HttpResponse = HttpResponse;
//# sourceMappingURL=http.response.js.map