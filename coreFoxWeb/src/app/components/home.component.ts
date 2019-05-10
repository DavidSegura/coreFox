import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "../views/home.component.html"
})
export class HomeComponent{
    ngInit(){
        console.log("ngInit Home Component");
    }
}