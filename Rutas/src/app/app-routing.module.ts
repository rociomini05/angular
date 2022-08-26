import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { InfoComponent } from './componentes/info/info.component';

const routes: Routes = [
  {path:'',  pathMatch:'full', redirectTo:'informacion'},
  {path:'informacion', component:InfoComponent},
  {path: 'about',  redirectTo: 'sobre'},
  {path: 'sobre', component:AboutComponent},
  {path: 'contacto', component: ContactComponent},  
  {path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent},
  {path: '**',  redirectTo: 'contacto'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
