import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller-material-charts';

  @ViewChild('drawer',{static:false}) drawer: MatDrawer;  
generalActions: any[] = [    
    { name: 'Reportes',      description: 'Ver los reportes del sistema'   },   
 {      name: 'Notificación',      description: 'Acceder las notificaciones'   } 
 ];   
constructor(private snackBar: MatSnackBar) { }  
openSnackBar() {    
this.drawer.toggle();    
let snackBarRef = this.snackBar.open('Cerrando la sesión', 'Cancelar',{duration:5000});    snackBarRef.afterDismissed().subscribe(() => {     
this.snackBar.open('Justo a tiempo','',{duration:1000});   
 }); 
 }

}
