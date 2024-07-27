import { Catch, ArgumentsHost, ExceptionFilter, HttpException, HttpStatus, ValidationError} from "@nestjs/common"
import { Request, Response } from "express"

@Catch()
export class AllExceptionFilters implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>() 
        const request = ctx.getRequest<Request>()
        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR

        console.error(exception) // logging the error
        response.status(status).json({
            statusCode: status,
            timeStamp: new Date().toISOString(),
            path: request.url,
            message: exception instanceof HttpException
              ? exception.message
              : 'Internal Server Error'
        })

    }
}