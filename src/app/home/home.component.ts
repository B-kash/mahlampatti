import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";

import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _mainContentText: string;

  constructor(private _changeDetectionRef: ChangeDetectorRef) {
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  private drawer: RadSideDrawer;

  ngOnInit() {
    this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
    this._mainContentText = value;
  }

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

}
