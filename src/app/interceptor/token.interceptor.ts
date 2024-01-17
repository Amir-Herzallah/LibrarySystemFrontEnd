import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor{  //interface 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('user'); // to get the token fro the one who logged in 
        req =req.clone({
             setHeaders:{
                Authrization :'Bearer ${token}'  
             }
        })                   //copy of request to add the token on it 
        return next.handle(req);
    } 
   
}
