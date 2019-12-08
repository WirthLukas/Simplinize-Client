import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpEventType, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from "@angular/router";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

@Injectable()
export class ErrorInterceptor implements ErrorInterceptor {

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return next.handle(request).pipe(catchError((err: any) => {

            let obj = err.error;

            switch (err.status) {
                case 401: //Unauthorized
                    this.authenticationService.logout();
                    this.navigateTo(err.status, obj.resource, obj.message);
                    break;
                case 403: //Forbidden
                    this.authenticationService.logout();
                    this.navigateTo(err.status, obj.resource, obj.message);
                    break;
                case 500: //Internal Server Error
                    this.navigateTo(err.status, obj.resource, obj.message);
                    break;
                default:
                    this.navigateTo(err.status, obj.resource, obj.message);
                    break;
            }

                return new Observable<HttpEvent<any>>(); //oder  return throwError(err); zum error anzeigen
            }));
    }

    navigateTo(status: number, resource: string, message: string) {
        this.router.navigate(['/error'], {queryParams:
                {status: status, resource: resource, message: message }});
    }
}
