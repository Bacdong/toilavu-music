import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";
import { ScreensRoutingModule } from "./screens-routing.module";
import { ScreensComponent } from "./screens.component";

@NgModule({
  declarations: [
    ScreensComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    ScreensRoutingModule,
  ],
})

export class ScreensModule {}
