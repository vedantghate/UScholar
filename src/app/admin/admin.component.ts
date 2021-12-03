import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  flip: boolean = false;
  showBack: boolean = false;

  ethnicityPieInfo: boolean = false;
  genderPieInfo: boolean = false;
  livingExpensesInfo: boolean = false;
  applicantsMapInfo: boolean = false;
  degreesMapInfo: boolean = false;
  tuitionLineInfo: boolean = false;
  gradLineInfo: boolean = false;
  gradGenderBarInfo: boolean = false;
  gradEthnicityBarInfo: boolean = false;
  degreesBarInfo: boolean = false;
  admissionsBarInfo: boolean = false;
  grantAmountBarInfo: boolean = false;
  grantAmountTwoBarInfo: boolean = false;
  satrInfo: boolean = false;
  satmInfo: boolean = false;
  actcInfo: boolean = false;
  acteInfo: boolean = false;
  actmInfo: boolean = false;

  ethnicityPieFlip: boolean = false;
  genderPieFlip: boolean = false;
  livingExpensesFlip: boolean = false;
  applicantsMapFlip: boolean = false;
  degreesMapFlip: boolean = false;
  tuitionLineFlip: boolean = false;
  gradLineFlip: boolean = false;
  gradGenderBarFlip: boolean = false;
  gradEthnicityBarFlip: boolean = false;
  degreesBarFlip: boolean = false;
  admissionsBarFlip: boolean = false;
  grantAmountBarFlip: boolean = false;
  grantAmountTwoBarFlip: boolean = false;
  satrFlip: boolean = false;
  satmFlip: boolean = false;
  actcFlip: boolean = false;
  acteFlip: boolean = false;
  actmFlip: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  flipit(chart: string){
    this.flip = !this.flip;
    setTimeout(()=> {this.showBack = !this.showBack}, 400)

    switch (chart) {
      case 'ethnicityPie':
          this.ethnicityPieFlip = !this.ethnicityPieFlip;
          setTimeout(()=> {this.ethnicityPieInfo = !this.ethnicityPieInfo}, 400)    
          break;
      case 'genderPie':
          this.genderPieFlip = !this.genderPieFlip;
          setTimeout(()=> {this.genderPieInfo = !this.genderPieInfo}, 400)    
          break;
      case 'livingExpenses':
          this.livingExpensesFlip = !this.livingExpensesFlip;
          setTimeout(()=> {this.livingExpensesInfo = !this.livingExpensesInfo}, 400)    
          break;
      case 'applicantsMap':
          this.applicantsMapFlip = !this.applicantsMapFlip;
          setTimeout(()=> {this.applicantsMapInfo = !this.applicantsMapInfo}, 400)    
          break;
      case 'degreesMap':
          this.degreesMapFlip = !this.degreesMapFlip;
          setTimeout(()=> {this.degreesMapInfo = !this.degreesMapInfo}, 400)    
          break;
      case 'tuitionLine':
          this.tuitionLineFlip = !this.tuitionLineFlip;
          setTimeout(()=> {this.tuitionLineInfo = !this.tuitionLineInfo}, 400)    
          break;
      case 'gradLine':
          this.gradLineFlip = !this.gradLineFlip;
          setTimeout(()=> {this.gradLineInfo = !this.gradLineInfo}, 400)    
          break;
      case 'gradGenderBar':
          this.gradGenderBarFlip = !this.gradGenderBarFlip;
          setTimeout(()=> {this.gradGenderBarInfo = !this.gradGenderBarInfo}, 400)    
          break;
      case 'gradEthnicityBar':
          this.gradEthnicityBarFlip = !this.gradEthnicityBarFlip;
          setTimeout(()=> {this.gradEthnicityBarInfo = !this.gradEthnicityBarInfo}, 400)    
          break;
      case 'degreesBar':
          this.degreesBarFlip = !this.degreesBarFlip;
          setTimeout(()=> {this.degreesBarInfo = !this.degreesBarInfo}, 400)    
          break;
      case 'admissionsBar':
          this.admissionsBarFlip = !this.admissionsBarFlip;
          setTimeout(()=> {this.admissionsBarInfo = !this.admissionsBarInfo}, 400)    
          break;
      case 'grantAmountBar':
          this.grantAmountBarFlip = !this.grantAmountBarFlip;
          setTimeout(()=> {this.grantAmountBarInfo = !this.grantAmountBarInfo}, 400)    
          break;
      case 'grantAmountTwoBar':
          this.grantAmountTwoBarFlip = !this.grantAmountTwoBarFlip;
          setTimeout(()=> {this.grantAmountTwoBarInfo = !this.grantAmountTwoBarInfo}, 400)    
          break;
      case 'satr':
          this.satrFlip = !this.satrFlip;
          setTimeout(()=> {this.satrInfo = !this.satrInfo}, 400)    
          break;
      case 'satm':
          this.satmFlip = !this.satmFlip;
          setTimeout(()=> {this.satmInfo = !this.satmInfo}, 400)    
          break;
      case 'actc':
          this.actcFlip = !this.actcFlip;
          setTimeout(()=> {this.actcInfo = !this.actcInfo}, 400)    
          break;
      case 'acte':
          this.acteFlip = !this.acteFlip;
          setTimeout(()=> {this.acteInfo = !this.acteInfo}, 400)    
          break;
      case 'actm':
          this.actmFlip = !this.actmFlip;
          setTimeout(()=> {this.actmInfo = !this.actmInfo}, 400)    
          break;
  }
  }

}
