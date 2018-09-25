import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  rnd(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
// ###################################################################################################################  
  users = [
    { id: "1", name: "user 1", email: "email-user-1@gmail.com" },
    { id: "2", name: "user 2", email: "email-user-2@gmail.com" },
    { id: "3", name: "user 3", email: "email-user-3@gmail.com" },
    { id: "4", name: "user 4", email: "email-user-4@gmail.com" },
    { id: "5", name: "user 5", email: "email-user-5@gmail.com" }
  ];

  delUser(id){
    this.users = this.users.filter(i => { return i.id!=id });
    console.log('AppService: del user where id='+id);
  }

  editUser(u){
    if(+u.id==0){ 
      u.id = ''+this.rnd(100,10000);
      this.users.push(u);
      console.log('AppService: insert user id='+ u.id);
    }else{ 
      let ndx = this.users.findIndex(i => { return i.id==u.id });
      this.users[ndx] = {...u};
      console.log('AppService: update user where id='+ u.id);
    }
  }
// ###################################################################################################################  
  sites = [
    { id: "1", name: "сайт 1", url: "url.site-1.com", token: "token-site-1" },
    { id: "2", name: "сайт 2", url: "url.site-2.com", token: "token-site-2" },
    { id: "3", name: "сайт 3", url: "url.site-3.com", token: "token-site-3" },
    { id: "4", name: "сайт 4", url: "url.site-4.com", token: "token-site-4" },
    { id: "5", name: "сайт 5", url: "url.site-5.com", token: "token-site-5" },
    { id: "6", name: "сайт 6", url: "url.site-6.com", token: "token-site-6" },
    { id: "7", name: "сайт 7", url: "url.site-7.com", token: "token-site-7" }
  ];

  delSite(id){
    this.sites = this.sites.filter(i => { return i.id!=id });
    console.log('AppService: del site where id='+id);
  }

  editSite(s){
    if(+s.id==0){ 
      s.id = ''+this.rnd(100,10000);
      this.sites.push(s);
      console.log('AppService: insert site id='+ s.id);
    }else{ 
      let ndx = this.sites.findIndex(i => { return i.id==s.id });
      this.sites[ndx] = {...s};
      console.log('AppService: update site where id='+ s.id);
    }
  }
// ###################################################################################################################  
  periods = ["НЕДЕЛЯ","МЕСЯЦ","КВАРТАЛ"];
// ###################################################################################################################  
  stypes = [
    { id: "1", name: "тип сайта 1", gen_type: "0", period: "0", psw: ""},
    { id: "2", name: "тип сайта 2", gen_type: "0", period: "1", psw: ""},
    { id: "3", name: "тип сайта 3", gen_type: "1", period: "0", psw: "password 3"},
    { id: "4", name: "тип сайта 4", gen_type: "0", period: "2", psw: ""},
    { id: "5", name: "тип сайта 5", gen_type: "1", period: "0", psw: "password 5"}
  ];  
  
}
