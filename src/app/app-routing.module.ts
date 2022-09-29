import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { AboutmeMainComponent } from './aboutme-main/aboutme-main.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { PrivacyMainComponent } from './privacy-main/privacy-main.component';

export const routes: Routes = [
  {path: 'anasayfa', component: HomeMainComponent},
  {path: '', redirectTo: '/anasayfa', pathMatch: 'full'},
  {path: 'hakkimda', component: AboutmeMainComponent},
  {path: 'blog', component: BlogMainComponent},
  {path: 'iletisim', component: ContactMainComponent},
  {path: 'gizlilik-politikasi', component: PrivacyMainComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
