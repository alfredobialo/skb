
export interface MainMenu {
  id: string;
  sortOrder?: number;
  name: string;
  isEnabled?: boolean;
  description?: string;
  subMenus?: SubMenu[];
  hasSubMenu?: boolean;
}
export interface SubMenu {
  id: string;
  sortOrder?: number;
  name: string;
  isEnabled?: boolean;
  description?: string;
  subMenus?: any[];
  hasSubMenu?: boolean;
}
export interface AppFeatures {
  data?: Data;
}
export interface Data {
  menus: MainMenu[];
  notificationCount: number;
}
