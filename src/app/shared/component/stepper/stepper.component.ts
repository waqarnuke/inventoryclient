import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  providers:[{provide:CdkStepper, useExisting:StepperComponent}]
})
export class StepperComponent extends CdkStepper implements OnInit {
  @Input() linearModSelected = true;

  ngOnInit(): void {
    this.linear = this.linearModSelected;
  }
  
  onClick(index:number){
    this.selectedIndex = index;
  }

}
