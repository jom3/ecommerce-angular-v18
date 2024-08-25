import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';

export const errorResponseInterceptor: HttpInterceptorFn = (req:HttpRequest<unknown>, next:HttpHandlerFn) => next(req).pipe()

function handleError (error:HttpErrorResponse): ReturnType<typeof throwError>{
  const errorResponse = `Error code : ${error.status}, message: ${error.message}`
 return throwError(()=> errorResponse)
}
