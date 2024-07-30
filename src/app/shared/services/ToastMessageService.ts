import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({providedIn :"root"})
export class ToastMessageService {

  constructor(private message : MessageService) {
  }

  showError(msg:string, data:any, summary:string,duration? : number ,  isSticky?: boolean){
    this.message.add( {detail : msg,data : data , id : "id" , life:duration ?? 6000,sticky :isSticky,severity:"error",summary:summary});
    console.log("SHOW ERROR TOAST CALLED")
  }
  showSuccess(msg:string, data:any, summary:string,duration? : number ,  isSticky?: boolean){
    this.message.add( {detail : msg,data : data , id : "id" , life:duration ?? 6000,sticky :isSticky,severity:"success",summary:summary});

  }

}
