import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
// import { NgxCarousel3dModule }  from 'ngx-carousel-3d';
import { SectionCarouselComponent } from './section-carousel/section-carousel.component';

@NgModule({
  declarations: [HomeComponent, SectionCarouselComponent],
  imports: [
    CommonModule,
    // NgxCarousel3dModule,
  ]
})
export class HomeModule { }
