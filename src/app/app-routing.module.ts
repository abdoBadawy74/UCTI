import { DocumentationComponent } from './pages/documentation/documentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { TrackComponent } from './pages/track/track.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { WeAreComponent } from './pages/we-are/we-are.component';
import { JionUSasCompanyComponent } from './pages/jion-usas-company/jion-usas-company.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { TeamComponent } from './pages/team/team.component';
import { UsagePolicyComponent } from './pages/usage-policy/usage-policy.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { ArticlesPagePreviewComponent } from './pages/articles-page-preview/articles-page-preview.component';
import { TrainingLinesComponent } from './sections/training-lines/training-lines.component';
import { TopRatedComponent } from './sections/top-rated/top-rated.component';
import { ArticlesComponent } from './sections/articles/articles.component';
import { ArticleComponent } from './sections/article/article.component';
import { AppComponent } from './app.component';
import { StudentOpinionComponent } from './sections/student-opinion/student-opinion.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { FutureComponent } from './sections/future/future.component';
import { ComplaintsSuggestionsComponent } from './pages/complaints-suggestions/complaints-suggestions.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'joinUs',
    component:JoinUsComponent
  },
  {
    path:'trainingLines/:id',
    component:TrackComponent
  },
  {
    path:'trainer',
    component:TrainerComponent
  },
  {
    path:'courses/:id',
    component:CoursesComponent
  },
  {
    path:'weare',
    component:WeAreComponent
  },
  {
    path:'asCompany',
    component:JionUSasCompanyComponent
  },
  {
    path:'trainers/:id',
    component:TrainerComponent
  },
  {

      path:'trainers',
      component:TrainerComponent

  },
  {
    path:'articles',
    component:ArticlesPageComponent
  },
  {
    path:'team',
    component:TeamComponent
  },

  {
    path:'licensses',
    component:LicensesComponent
  },
  {
    path:'usage-policy',
    component:UsagePolicyComponent
  },

  {
    path:'documention',
    component:DocumentationComponent
  },
  // {
  //   path:'articles-section',
  //   component:ArticlesComponent
  // },
  {
    path:'articles-perview/:id',
    component:ArticlesPagePreviewComponent
  },
  {
    path:'training-lines',
    component:TrainingLinesComponent
  },
  {
    path:'top-trainer',
    component:TopRatedComponent
  },
  {
    path:'student-op',
    component:StudentOpinionComponent
  },
  {
    path:'articlesSection',
    component:ArticlesComponent
  },
  {
    path:'article',
    component:ArticleComponent
  },
  {
    path:'tainer',
    component:TrainerPageComponent
  },
  {
    path:'future',
    component:FutureComponent
  },
  {
    path:'suggestions',
    component:ComplaintsSuggestionsComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'conditions',
    component:ConditionsComponent
  }





];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing:false,
    scrollPositionRestoration:"enabled",
    anchorScrolling:"enabled",
    scrollOffset:[0, 64],
  })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
