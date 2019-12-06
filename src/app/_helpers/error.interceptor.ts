import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpEventType, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {AuthenticationService} from '../_services/authentication.service';

@Injectable()
export class ErrorInterceptor implements ErrorInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            switch (err.status) {
                case 401: //Unauthorized
                    this.authenticationService.logout();
                    console.log(err.error);
                    break;
                case 403: //Forbidden
                    break;
                case 500: //Internal Server Error
                    break;
                default:
                    console.log("Geleck do hats wos!")
                    break;
            }




            return throwError(err);
        }))
    }
    /*
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(map((event: HttpEvent<any>) => {

            if (event instanceof HttpResponse) {
                switch (event.status) {

                    case 200: //OK
                            console.log(event.body);
                        //Hier dann im DataService type setzten.
                        //Body versuchen zu JSON PARSEN und im DataService JSON Type parse.

                        break;
                    case 302: //Found

                        break;

                    case 401: //Unauthorized
                        console.log(event.body);
                        break;
                }
            } else if (event instanceof HttpErrorResponse) {
                switch (event.status) {

                    case 401: //Unauthorized
                        console.log(event.message);
                        break;
                    case 403: //Forbidden
                        break;

                    case 500: //Internal Server Error
                        break;

                    default:
                        console.log("Geleck do hats wos!")
                        break;
                }
            }
                return event;
            }));
    }

     */


}
