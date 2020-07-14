import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ListaDocumentosComponent } from "./lista-documentos/lista-documentos.component";
import { DocumentosComponent } from "./documentos/documentos.component";

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'lista',
  component: ListaDocumentosComponent
},
{
  path: 'documentos',
  component: DocumentosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
