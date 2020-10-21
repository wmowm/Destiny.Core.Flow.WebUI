// IoC
import { IocTypes } from "@/shared/diconfig/ioc-types";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { ICodeGeneratorService } from "../codeGeneratorServeice/ICodeGeneratorService";
import { IMenuService } from "../menuserveice/IMenuService";
import { IRoleService } from "../roleservice/IRoleService";
import { IUserService } from "../userservice/IUserService";
@injectable()
export class MainService {
  private _menuserverceApi: IMenuService;
  private _userserverceApi: IUserService;
  private _codeGeneratorService: ICodeGeneratorService;
  private _roleService: IRoleService;
  public get MenuServiceApi(): IMenuService {
    return this._menuserverceApi;
  }
  public get UserServiceApi(): IUserService {
    return this._userserverceApi;
  }

  public get CodeGeneratorService(): ICodeGeneratorService {
    return this._codeGeneratorService;
  }

  public get RoleService(): IRoleService {
    return this._roleService;
  }
  /**
   * 好几巴垃圾不能自动注入呢？？？？？？？？？
   * @param _menu
   * @param _user
   * @param _codeGenerator
   */
  constructor(
    @inject(IocTypes.MenuService) _menu: IMenuService,
    @inject(IocTypes.UserService) _user: IUserService,
    @inject(IocTypes.CodeGeneratorService)
    _codeGenerator: ICodeGeneratorService,
    @inject(IocTypes.RoleService) _roleService: IRoleService
  ) {
    this._menuserverceApi = _menu;
    this._userserverceApi = _user;
    this._codeGeneratorService = _codeGenerator;
    this._roleService = _roleService;
  }
}
