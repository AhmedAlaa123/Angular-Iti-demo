import { AbstractControl } from "@angular/forms";

export function ValidateName(control:AbstractControl)
{
    const forbidden=/admin|adminstrator/i.test(control.value)
    return forbidden ? {'forbiddenName':{value:control.value}} : null;
}