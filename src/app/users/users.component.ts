import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
declare var UIkit: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  curUser = {};
  users = [];
  dlgDel = null;
  dlgEdit = null;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.users = this.appService.users;
    this.dlgDel = UIkit.modal('#dlg-user-del');
    this.dlgEdit = UIkit.modal('#dlg-user-edit');
  }

  new(){
    this.curUser = { id:"0", name:"", email:"" };
    this.dlgEdit.show();
  }

  edit(i){
    this.curUser = { ...i };
    this.dlgEdit.show();
  }

  del(i){
    this.curUser = { ...i };
    this.dlgDel.show();
  }

  doEdit(){
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (this.curUser['name']=='' ||
      this.curUser['email'] == '' ||
      this.curUser['email'].length <= 5 || 
      !EMAIL_REGEXP.test(this.curUser['email'])) return;

    this.appService.editUser(this.curUser); 
    this.users = this.appService.users;
    this.dlgEdit.hide();
  }

  doDel(){
    this.appService.delUser(this.curUser['id']); 
    this.users = this.appService.users;
    this.dlgDel.hide();
  }
}
