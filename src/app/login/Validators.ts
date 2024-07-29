import { AbstractControl } from "@angular/forms";


export function domainValidator(control: AbstractControl): any{

    if(control.value?.includes('@infosys.com')){
        return null;
    }
    else{
        return{'domainValidator':'Invalid domain'}
    }
}