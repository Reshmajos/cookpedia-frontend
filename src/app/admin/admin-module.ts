import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminUserlist } from './admin-userlist/admin-userlist';
import { AdminDownloadlist } from './admin-downloadlist/admin-downloadlist';
import { AdminFeedbacklist } from './admin-feedbacklist/admin-feedbacklist';
import { AdminManagerecipe } from './admin-managerecipe/admin-managerecipe';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search-pipe';


@NgModule({
  declarations: [
    AdminDashboard,
    AdminRecipelist,
    AdminUserlist,
    AdminDownloadlist,
    AdminFeedbacklist,
    AdminManagerecipe,
    AdminSidebar
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SearchPipe
  ]
})
export class AdminModule { }
