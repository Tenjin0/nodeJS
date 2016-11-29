import { Component } from '@angular/core'

@Component({
    selector: "my-app",
    templateUrl:"template/app.html"
})
export class AppComponent {
     public person = {
        id: 1,
        firstname: "Henry",
        lastname: "Dupont",
        age: 3
      }
      public showDetail = false
      onDetail() {
          this.showDetail = true
          console.log('Detail')
      }


}