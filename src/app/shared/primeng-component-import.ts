import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {ButtonModule} from "primeng/button";
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";

export const PrimeNgInputComponents =[
  InputNumberModule, InputTextModule
];
export const PrimeNgButtonComponents =[
  ButtonModule, RadioButtonModule, CheckboxModule
];
export const PrimeNgDropDownComponents =[
  DropdownModule, MultiSelectModule
];

export const PrimeNgDialogComponents =[
  DialogModule, DynamicDialogModule
];
