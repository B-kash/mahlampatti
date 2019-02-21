import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";

import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {Router} from "@angular/router";
import {MenuItems} from "../constants/MenuItems";


@Component({

  selector: 'app-home-android',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  menuItems: any = MenuItems.menuItems;

  constructor(private _changeDetectionRef: ChangeDetectorRef,
              private router: Router) {
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  private drawer: RadSideDrawer;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  toggleDrawer() {
    this.drawer.toggleDrawerState();
  }

  route(item) {
    this.router.navigate([item.route]);
  }
}
