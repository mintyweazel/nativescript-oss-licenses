import * as platformModule from "tns-core-modules/platform";
import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import * as application from "application";
import * as utils from "utils/utils";

declare var com: any;
declare var android: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    startOSSLicenseActivity() {
        if (platformModule.isAndroid) {
            const ossLicensesMenuActivity = com.google.android.gms.oss.licenses.OssLicensesMenuActivity;
            const intent = new android.content.Intent(
              utils.ad.getApplicationContext(),
              ossLicensesMenuActivity.class
            );
            ossLicensesMenuActivity.setActivityTitle("TITLE");
            application.android.foregroundActivity.startActivity(intent);
        }
    }
}
