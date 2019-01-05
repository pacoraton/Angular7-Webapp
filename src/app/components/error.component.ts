import { Component } from '@angular/core';

@Component({
    selector:'error',
    templateUrl:'../views/error.html'
})

export class ErrorComponent{
   public titulo:string;

   constructor(){
       this.titulo="Pagina no encontrada";
   }

   ngOnInit(){
       console.log("Se esta ejecutando el componente error.component");
   }
}


  


