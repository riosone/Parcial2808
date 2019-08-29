import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial2808';
  nombre: string = " ";
  simbolo: string = " ";
  numero: string = " ";
  peso: string = " ";
  elemento: any = [
    {nombre: "Germanio", simbolo: "Ge", numero: "1", peso: "1.001"},
    {nombre: "Hidrógeno" , simbolo: "H", numero: " 2", peso: "4.0151"},
    {nombre: "Helio" , simbolo: "He", numero: "3 ", peso: "4.0124"},
    {nombre: "Litio", simbolo: "Li", numero: "1 " , peso: "2.014"},
    {nombre: "Berilio" , simbolo: "Be", numero: " 2", peso: "4.014"},
    {nombre: "Boro" , simbolo: "B", numero: "1 ", peso: "4021"},
    {nombre: "Carbono" , simbolo: "C", numero: "2 ", peso: "4210"},
    {nombre: "Nitrógeno", simbolo: "N" , numero: "2 ", peso: "7857"},
    {nombre: "Oxígeno", simbolo: "O" , numero: " 1", peso: "7865"},
  ]
  
}
