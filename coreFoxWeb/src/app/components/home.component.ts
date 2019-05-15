import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "../views/home.component.html"
})
export class HomeComponent{
    public apps = [];

    constructor(){}

    ngOnInit(){
        this.apps.push(
            {name: "codeFox", icon: "https://cdn.icon-icons.com/icons2/1088/PNG/512/1485282143-adobe-illustrator-cc-creative-cloud_78298.png"},
            {name: "ForceOfWill", icon: "https://cdn1.iconfinder.com/data/icons/adobe-3/512/Photoshop.png"},
            {name: "dataFox", icon: "https://mir-s3-cdn-cf.behance.net/project_modules/source/6b7d0325768845.5634a73de86d0.png"}, 
            {name: "Legend of Fate", icon: "https://lh3.googleusercontent.com/1JJMfwHTCT-wDIxciN2XFCqQV7neyoJ1DhXQIuEkPJ5mxwiYDiAqdeZT8UxLEfW8AQ"});
        console.log(this.apps);
    }
}