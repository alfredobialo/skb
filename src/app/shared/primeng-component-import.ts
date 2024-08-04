import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {ButtonModule} from "primeng/button";
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";
import {InputMaskModule} from "primeng/inputmask";
import {ChartModule} from "primeng/chart";
import {EditorModule} from "primeng/editor";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuModule} from "primeng/menu";
import {ContextMenuModule} from "primeng/contextmenu";
import {MegaMenuModule} from "primeng/megamenu";
import {ToastModule} from "primeng/toast";
import {SidebarModule} from "primeng/sidebar";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {SkeletonModule} from "primeng/skeleton";
import {ProgressBarModule} from "primeng/progressbar";
import {ProgressSpinnerModule} from "primeng/progressspinner";

export const PrimeNgInputComponents =[
  InputNumberModule, InputTextModule, InputMaskModule, EditorModule
];
export const PrimeNgSkeleton =[
 SkeletonModule
];

export const PrimeNgProgressBar =[
  ProgressBarModule, ProgressSpinnerModule
];
export const PrimeNgButtonComponents =[
  ButtonModule, RadioButtonModule, CheckboxModule, SplitButtonModule
];
export const PrimeNgDropDownComponents =[
  DropdownModule, MultiSelectModule
];

export const PrimeNgDialogComponents =[
  DialogModule, DynamicDialogModule, ToastModule, SidebarModule, ConfirmDialogModule
];
export const PrimeNgChartComponents =[
  ChartModule
];
export const PrimeNgMenuComponents =[
  MenuModule, ContextMenuModule, MegaMenuModule
];
