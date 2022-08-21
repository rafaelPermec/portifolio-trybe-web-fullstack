import IService from '../interfaces/iService.interface';
import ILens, { lensZodSchema } from '../interfaces/iLens.interface';
import IModel from '../interfaces/iModel.interface';
import { ErrorTypes } from '../errors/catalog';

class LensService implements IService<ILens> {
  private _frame: IModel<ILens>;

  constructor(model: IModel<ILens>) {
    this._frame = model;
  }

  public async create(obj: ILens): Promise<ILens> {
    const parsed = lensZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(obj);
  }

  public async readOne(_id: string): Promise<ILens> {
    const lens = await this._frame.readOne(_id);
    if (!lens) throw new Error(ErrorTypes.EntityNotFound);
    return lens;
  }

  public async read(): Promise<ILens[]> {
    const lens = await this._frame.read();
    if (!lens) throw new Error(ErrorTypes.EntityNotFound);
    return lens;
  }

  public async destroy(_id: string): Promise<ILens> {
    const lensDeleted = await this._frame.destroy(_id);
    if (!lensDeleted) throw new Error(ErrorTypes.EntityNotFound);
    return lensDeleted;
  }
}

export default LensService;
