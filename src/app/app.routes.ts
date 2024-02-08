import { Routes } from '@angular/router';

export const routes: Routes = [  
    {
      path: 'astronauts',
      loadChildren: () =>
        import('./features/astronauts/astronaut.routes').then((r) => r.routes),
    },
  ];
  