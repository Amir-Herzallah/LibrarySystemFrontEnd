import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastRef, ToastrService } from 'ngx-toastr';

export const authorizationGuard: CanActivateFn = (route, state) => { //CanActivateFn :callback function 
  const router = new Router () ;
  let toastr:ToastrService=inject (ToastrService)
  const token =localStorage.getItem('token') ;
  if(token){           // any person try to login using login page becuse the token is full 
    console.log(state) ;             // the active Url that i stand on it 
    //if(state.url.indexOf('admin')>0) {
     if (state.url.includes('admin')){
      let user :any = localStorage.getItem('user') ;
      user =JSON.parse(user);
      const isAdmin = user.roleID == 1 || user.roleID == '1';
      if(isAdmin){
       
        toastr.success('Wellcome to Admin Dashboard')
        router.navigate(['admin/Dashboard']);
        console.log(user.roleID,user.username);
        return true ;
      }else{    //user not admin 
        debugger;
        toastr.warning('This page for admin  ')
         router.navigate(['auth/login']);
         console.log(user.roleID,user.username);
        return false ;
      }
    }
    return true;
  }else{      
    toastr.warning('please sign up ')   ;
    router.navigate(['auth/register']) ;
    return false;
  }

};
