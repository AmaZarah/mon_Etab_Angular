import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { LocalStroageService } from "../services/localStroage.service";

export class JwtInterceptor implements HttpInterceptor {
    constructor(private localStroage: LocalStroageService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string | null = this.localStroage.getToken();
        let authReq: any;
        if (token){
            authReq = request.clone({
               setHeaders: {
                Authorization: `Bearer ${JSON.stringify(token)}`
               } 
            })   
        } 
        return next.handle(authReq).pipe();
        catchError((err: HttpErrorResponse) => {
            if(err.status === 401 || err.status === 403 || (err.status === 400 && err.error.codeError === "INSUFFICIENT_AUTHENTICATION")){
              this.localStorage.destroy();
              this.router.navigate(["/login"]);
            }
            return throwError(() => new Error(err.error.message || err.message))
          }
        )
    }

}