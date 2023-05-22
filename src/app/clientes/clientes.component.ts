import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@gmail.com',
      createAt: '2023-05-01',
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Martinez',
      email: 'ana.martinez@yahoo.com',
      createAt: '2023-05-03',
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'Lopez',
      email: 'carlos.lopez@hotmail.com',
      createAt: '2023-05-05',
    },
    {
      id: 4,
      nombre: 'Luisa',
      apellido: 'Fernandez',
      email: 'luisa.fernandez@gmail.com',
      createAt: '2023-05-07',
    },
    {
      id: 5,
      nombre: 'Miguel',
      apellido: 'Gonzalez',
      email: 'miguel.gonzalez@yahoo.com',
      createAt: '2023-05-09',
    },
    {
      id: 6,
      nombre: 'Sofia',
      apellido: 'Castro',
      email: 'sofia.castro@hotmail.com',
      createAt: '2023-05-11',
    },
    {
      id: 7,
      nombre: 'Pedro',
      apellido: 'Rodriguez',
      email: 'pedro.rodriguez@gmail.com',
      createAt: '2023-05-13',
    },
    {
      id: 8,
      nombre: 'Daniela',
      apellido: 'Morales',
      email: 'daniela.morales@yahoo.com',
      createAt: '2023-05-15',
    },
    {
      id: 9,
      nombre: 'Manuel',
      apellido: 'Jimenez',
      email: 'manuel.jimenez@hotmail.com',
      createAt: '2023-05-17',
    },
    {
      id: 10,
      nombre: 'María',
      apellido: 'Ramirez',
      email: 'maria.ramirez@gmail.com',
      createAt: '2023-05-19',
    },
    {
      id: 11,
      nombre: 'Pablo',
      apellido: 'Vargas',
      email: 'pablo.vargas@yahoo.com',
      createAt: '2023-05-21',
    },
    {
      id: 12,
      nombre: 'Isabel',
      apellido: 'Alvarez',
      email: 'isabel.alvarez@hotmail.com',
      createAt: '2023-05-23',
    },
    {
      id: 13,
      nombre: 'Antonio',
      apellido: 'Torres',
      email: 'antonio.torres@gmail.com',
      createAt: '2023-05-25',
    },
    {
      id: 14,
      nombre: 'Patricia',
      apellido: 'Cortez',
      email: 'patricia.cortez@yahoo.com',
      createAt: '2023-05-27',
    },
    {
      id: 15,
      nombre: 'Ricardo',
      apellido: 'Vega',
      email: 'ricardo.vega@hotmail.com',
      createAt: '2023-05-29',
    },
  ];

  constructor() {}
  ngOnInit() {}
}
