import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
              path:'dashboard',
              loadChildren:() => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          },
          {
            path:'settings',
            loadChildren:() => import('../settings/settings.module').then(m => m.SettingsPageModule)
        },
        {
          path:'chatting',
          loadChildren:() => import('../chatting/chatting.module').then(m => m.ChattingPageModule)
      },
        ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
