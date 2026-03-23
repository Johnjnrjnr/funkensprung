
import { Routes } from '@angular/router';
import { StoryPageComponent } from './story-page.component/story-page.component';

export const routes: Routes = [
  { path: '', component: StoryPageComponent },
  { path: ':slug', component: StoryPageComponent },
];
