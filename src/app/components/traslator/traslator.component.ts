import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { brailleAlphabet } from 'src/app/models/traslator/braille-alphabet';

@Component({
  selector: 'app-traslator',
  templateUrl: './traslator.component.html',
})
export class TraslatorComponent implements OnInit {
  public form: FormGroup;
  private arrayForTraslation: Array<string>;
  private arrayTraslated: Array<string> = [];

  constructor( private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
			textAreaToTraslate: this.formBuilder.control(""),
			textAreaTraslated: this.formBuilder.control("")
		});		
	}


  public brailleTraslateFunction(): void{
    this.arrayTraslated = [];
    this.arrayForTraslation = this.form.get("textAreaToTraslate")?.value.split("");

    this.arrayForTraslation.forEach(element => {            
      let brailleLetter = this.findLetter(element);
      brailleLetter != undefined ? this.arrayTraslated.push(brailleLetter) : console.log("Error on letter");                          
    });
    this.form.get("textAreaTraslated")?.setValue(this.arrayTraslated.join(""));
  }

  public findLetter(letter: string){
    const test = brailleAlphabet.find(item => {
      return letter === item.letter;
    });
    return test?.braille;
  }

}
