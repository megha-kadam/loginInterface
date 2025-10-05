import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

const matArr = [
  MatSnackBarModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports : [...matArr]
})
export class MaterialModule { }
