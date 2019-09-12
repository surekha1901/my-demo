import { Component } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'just a test!'}];

  onServerAdded({severData: serverName: string ; serverContent: string}){
    this.serverElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: serverName: string ; serverContent: string}){
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData. serverContent
    });
  }

  onchangeFirst(){
    this.serverElements[0].name = 'changed!';
  }

  onDestroyFirst(){
    this.serverElement.splice(0, 1);
  }

}
