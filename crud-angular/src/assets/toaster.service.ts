import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private config: Object = {
    positionClass: "toast-bottom-center"
  }

  constructor(
    private toastr: ToastrService
  ) { }

  success(msg: string) {
    this.toastr.success(msg, 'Sucesso!', this.config);
  }

  error(msg: string) {
    this.toastr.error(msg, 'Ops! Algo deu errado', this.config);
  }

}
