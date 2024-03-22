import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TestComponent,Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public name: string = '';
  public title2: string = '';
  public text:string=''
  title = 'angular-training';
  selectedValue = 1;
  options = [
    {
      value: 1,
      label: 'one',
    },
    {
      value: 2,
      label: 'two',
    },
    {
      value: 3,
      label: 'three',
    },
  ];

  ngOnInit(): void {
    console.log(this.name);
  }
  public onOptionSelect(event: any) {
    console.log(event?.target?.value);
  }


  dataFromChild2(event:any){
    this.text = event;
  }
}
