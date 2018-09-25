import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
declare var UIkit: any;

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html'
})
export class SitesComponent implements OnInit {
  curSite = {};
  sites = [];
  dlgDel = null;
  dlgEdit = null;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.sites = this.appService.sites;
    this.dlgDel = UIkit.modal('#dlg-site-del');
    this.dlgEdit = UIkit.modal('#dlg-site-edit');
  }

  new(){
    this.curSite = { id:"0", name:"", url:"", token:"" };
    this.dlgEdit.show();
  }

  edit(i){
    this.curSite = { ...i };
    this.dlgEdit.show();
  }

  del(i){
    this.curSite = { ...i };
    this.dlgDel.show();
  }

  doEdit(){
    // let URL_REGEXP = /((ftp|http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
    // let URL_REGEXP = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (this.curSite['name']=='' ||
      this.curSite['url'] == '' ||
      // !URL_REGEXP.test(this.curSite['url']) ||
      this.curSite['url'].length <= 4) return;

    this.appService.editSite(this.curSite); 
    this.sites = this.appService.sites;
    this.dlgEdit.hide();
  }

  doDel(){
    this.appService.delSite(this.curSite['id']); 
    this.sites = this.appService.sites;
    this.dlgDel.hide();
  }
}
