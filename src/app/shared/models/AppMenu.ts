import map from "lodash/map";

export interface MainMenu {
  id: string;
  sortOrder?: number;
  name: string;
  isEnabled?: boolean;
  description?: string;
  subMenus?: SubMenu[];
  hasSubMenu?: boolean;
  iconCss?: string
}

export interface SubMenu {
  id: string;
  sortOrder?: number;
  name: string;
  isEnabled?: boolean;
  description?: string;
  subMenus?: any[];
  hasSubMenu?: boolean;
  iconCss?: string
}

export interface AppFeatures {
  data: Data;
}

export interface Data {
  menus: MainMenu[];
  notificationCount: number;
}

export class AppMenuHelper {
  public static createAppMenuFrom(menus: MainMenu[]) {
    const newMenus = map(menus, m => {
      switch (m.id) {
        case MenuIdConstants.DASHBOARD:
          m.iconCss = MenuIconConstants.DASHBOARD;
          return m;
        case MenuIdConstants.SALES:
          m.iconCss = MenuIconConstants.SALES;
          return m;
        case MenuIdConstants.PURCHASES:
          m.iconCss = MenuIconConstants.PURCHASES;
          return m;
        case MenuIdConstants.INVENTORY:
          m.iconCss = MenuIconConstants.INVENTORY;
          return m;
        case MenuIdConstants.CUSTOMERS:
          m.iconCss = MenuIconConstants.CUSTOMERS;
          return m;
        case MenuIdConstants.SETTINGS:
          m.iconCss = MenuIconConstants.SETTINGS;
          return m;
         case MenuIdConstants.FINANCIAL_ACCOUNT:
          m.iconCss = MenuIconConstants.FINANCIAL_ACCOUNT;
          return m;
        default:
          return m;

      }
    });

    console.log("MAPPED menus =>>>",newMenus);
    return newMenus;
  }
}

export enum MenuIdConstants {
  DASHBOARD = "dashboard",
  SALES = "sales",
  PURCHASES = "purchases",
  CUSTOMERS = "customers",
  INVENTORY = "inventory",
  FINANCIAL_ACCOUNT = "financial-account",
  SETTINGS = "settings",

}

export enum MenuIconConstants {
  DASHBOARD = "la la-dashboard la-2x",
  SALES = "la la-shopping-cart la-2x",
  PURCHASES = "la la-dollar-sign la-2x",
  CUSTOMERS = "la la-warehouse la-2x",
  INVENTORY = "la la-users la-2x",
  FINANCIAL_ACCOUNT = "la la-coins la-2x",
  SETTINGS = "la la-gear la-2x",

}
