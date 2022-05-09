import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import{PageNotFoundComponent} from'./page-not-found/page-not-found.component'
import { PageComponent } from './staticpages/page/page.component';
import { StaticpagesModule } from './staticpages/staticpages.module';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'course',component:CourseListComponent},
  {path:'*about',component:PageComponent},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

