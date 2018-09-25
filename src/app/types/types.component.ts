import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
declare var UIkit: any;

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html'
})
export class TypesComponent implements OnInit {
  curType = {};
  types = [];
  dlgDel = null;
  dlgEdit = null;

  private periods = ["НЕДЕЛЯ","МЕСЯЦ","КВАРТАЛ"];
  strType(t){
    return +t.gen_type == 0 ? 'частота генерации: '+this.periods[+t.period] : 'статический';
  }

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.types = this.appService.types;
    this.dlgDel = UIkit.modal('#dlg-type-del');
    this.dlgEdit = UIkit.modal('#dlg-type-edit');
  }

  new(){
    this.curType = { id: "0", name: "", gen_type: "0", period: "0", psw: "" };
    this.dlgEdit.show();
  }

  edit(i){
    this.curType = { ...i };
    this.dlgEdit.show();
  }

  del(i){
    this.curType = { ...i };
    this.dlgDel.show();
  }

  doEdit(){
    if (this.curType['name']=='') return;

    this.appService.editType(this.curType); 
    this.types = this.appService.types;
    this.dlgEdit.hide();
  }

  doDel(){
    this.appService.delType(this.curType['id']); 
    this.types = this.appService.types;
    this.dlgDel.hide();
  }
}
