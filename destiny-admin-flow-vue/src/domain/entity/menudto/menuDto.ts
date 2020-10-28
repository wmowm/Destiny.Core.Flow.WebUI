import { IDescription, IEntity } from "@/shared/baseentity/IEntity";

import { Guid } from "guid-typescript";

export interface IMenu extends IEntity<string> {
  /**
   * 菜单名称
   */
  name: string;

  /**
   * 父级菜单ID
   */
  parentId: string;

  /**
   * 排序
   */
  sort: number;

  /**
   * 组件地址(前端)
   */
  path: string;

  /**
   * 菜单图标
   */
  icon: string;

  /**
   * 当前菜单以上所有的父级
   */
  parentNumber: string;

  /**
   * 组件地址
   */
  component: string;

  /**
   * 类型
   */
  type: MenuEnum;

  /**
   * 子级
   */
  children: Array<IMenu>;
}

export enum MenuEnum {
  /**
   * 菜单
   */
  Menu = 0,
  /**
   * 按钮
   */
  Button = 5,
}

export interface IMenuTableDto extends IMenu, IDescription {
  /**
   * 深度
   */
  depth: number;
}

/**
 * 用户DTO
 */
export class MenuDto implements IEntity<string> {
  id: string = Guid.EMPTY;
  name: string = "";
  sort: number = 0;
  path: string = "";
  parentId: string = Guid.EMPTY;
  component: string = "";
  icon: string = "";
  description: string = "";
  parentNumber: string = "";
  depth: number = 0;
  functionId: Array<string> = [];
  type: MenuEnum = MenuEnum.Menu;
}

///菜单树DTO
export class MenuTreeOutDto {
  title: string | undefined;
  expand: boolean = true;
  key: string | undefined;
  parentId: string | undefined;
  type:MenuEnum=MenuEnum.Menu;
  children:Array<MenuTreeOutDto>=[];
}
