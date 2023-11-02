import { Component, OnInit, ViewChild } from '@angular/core';
import{Router} from '@angular/router'
import { NgForm } from'@angular/forms'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  

  @ViewChild('Form')
  addPropertyForm!: NgForm;
  constructor(private router:Router) {
    // this.addPropertyForm = {} as NgForm;
   }

  ngOnInit() {
   // this.addPropertyForm.controls['Name'].setValue('Default Value');
    
     setTimeout(()=>{
        this.addPropertyForm.controls['Name'].setValue('Default Value');
      },1000);
  }

  onBack(){
    this.router.navigate(['/']);
  }


  onSubmit(Form : NgForm)
   
  {
    console.log("written here");
    console.log(this.addPropertyForm);
  }





}

