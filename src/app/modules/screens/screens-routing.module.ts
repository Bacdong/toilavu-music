import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ScreensComponent } from "./screens.component";

const ScreensRoutes: Routes = [
  {
    path: '',
    component: ScreensComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'info', component: HomeComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(ScreensRoutes)],
  exports: [RouterModule]
})

export class ScreensRoutingModule {}