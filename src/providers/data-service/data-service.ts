import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }
  getSchools(){
    return this.http.get('http://shafihuzaib.com/temp/api.php?q=getSchools');
              
}
registerStudent(data :any){
  console.log(data.nickname);
  return this.http.post('http://shafihuzaib.com/temp/api.php?q=register',{'school_id':1001,'student_id':270012,'password':'something123'});
            
}
}
