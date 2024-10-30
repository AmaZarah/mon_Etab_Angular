import { Routes } from '@angular/router';
import { AddStudentComponent } from './presentation/add-student/add-student.component';
import { ListStudentComponent } from './presentation/list-student/list-student.component';
import { EditStudentComponent } from './presentation/edit-student/edit-student.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { LoginComponent } from './presentation/login/login.component';
import { RepotComponent } from './presentation/repot/repot.component';
import { ListUserComponent } from './presentation/list-user/list-user.component';
import { AddUserComponent } from './presentation/add-user/add-user.component';
import { EditUserComponent } from './presentation/edit-user/edit-user.component';
import { ListTeacherComponent } from './presentation/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './presentation/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './presentation/edit-teacher/edit-teacher.component';


export const routes: Routes = [
    {path: "adstudent", title:"student", component: AddStudentComponent},
    {path:"liststudent", title:"studentlist", component: ListStudentComponent},
    {path: "editstudent", title: "studentedit", component: EditStudentComponent},
    {path: "dashbord",  component: DashboardComponent},
    {path: "", title: "login", component: LoginComponent},
    {path: "repor", title: "repot", component: RepotComponent},
    {path: "listuser", title:"listusr", component: ListUserComponent},
    {path: "aduser", title: "aduser", component: AddUserComponent},
    {path: "edituser", title:"edituser", component: EditUserComponent},
    {path: "listteacher", title: "listteacher", component: ListTeacherComponent},
    {path: "adteacher", title: "adteacher", component: AddTeacherComponent},
    {path: "editteacher", title: "editteacher", component: EditTeacherComponent},
     {path: "**", component: DashboardComponent}

];



