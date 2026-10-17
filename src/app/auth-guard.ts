import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthgoogleService } from './authgoogle.service';
import { Profile } from './landingpage/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: AuthgoogleService = inject(AuthgoogleService);
  const router: Router = inject(Router);

  const loggedProffile: Profile = loginService.getLoggedProfile();
  
  if(loggedProffile){
    return true;
  }

  router.navigate(['']);

  return true;
};
