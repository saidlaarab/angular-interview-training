import { inject } from "@angular/core";
import { Router } from "@angular/router";


export const AuthGuard = () =>  {
    const router = inject(Router);
    router.navigateByUrl('/denied-access');
    return false;
}