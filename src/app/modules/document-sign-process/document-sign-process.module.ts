import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentSignProcessComponent} from "./document-sign-process.component";
import {AccessProcessSignComponent} from './pages/access-process-sign/access-process-sign.component';
import {DocumentSignProcessRoutingModule} from "./document-sign-process-routing.module";
import {HeaderDocumentSignComponent} from './components/header-document-sign/header-document-sign.component';
import {ReviewDocumentComponent} from './pages/review-document/review-document.component';
import {SignUserComponent} from './pages/sign-user/sign-user.component';
import {ValidSignComponent} from './pages/valid-sign/valid-sign.component';
import {SteperComponent} from './components/steper/steper.component';
import {ToastComponent} from "@app/core/ui/toast/toast.component";
import {SignService} from "@app/core/services/sign/sign.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {DocumentService} from "@app/core/services/document/document.service";
import {UiModule} from "@app/core/ui/ui.module";

@NgModule({
  declarations: [
    DocumentSignProcessComponent,
    AccessProcessSignComponent,
    HeaderDocumentSignComponent,
    ReviewDocumentComponent,
    SignUserComponent,
    ValidSignComponent,
    SteperComponent,
    ToastComponent,
  ],
    imports: [
        CommonModule,
        DocumentSignProcessRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        UiModule
    ],
  providers: [SignService, DocumentService]
})
export class DocumentSignProcessModule {
}