import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SharedComponentsModule } from '../components/shared-components.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from '../components/category/category.component';
import {HeaderComponent} from '../components/header/header.component';
import { ProductComponent } from '../components/product/product.component';

@NgModule({
  imports: [
  IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  declarations: [Tab1Page,HeaderComponent, CategoryComponent, ProductComponent]
})
export class Tab1PageModule {}
