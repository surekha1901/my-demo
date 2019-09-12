import { Component, OnInit , EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName: string ; serverContent: string}>();
  @Output('bpCreated') blueprintcreated = new EventEmitter<{serverName: string ; serverContent: string}>();

  // newServerName = '';
 // newServerContent = '';
 @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);

    
    this.serverCreated.emit
    (
      {
        serverName: nameInput.value,
        //  serverName: this.newServerName,
        serverContent: this.serverContentInput.nativeElement.value
      }
    );
    // this.serverElement.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintcreated.emit(
      {
        serverName: nameInput.value,
        // serverName: this.newServerName,
        this.serverContentInput.nativeElement.value="somthing".
        serverContent: this.serverContentInput.nativeElement.value
        // serverContent: this.newServerContent
      }
    );
    // this.serverElement.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }

}
