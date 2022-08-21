import IService from '../interfaces/iService.interface';
import IFrame, { FrameZodSchema } from '../interfaces/iFrame.interface';
import IModel from '../interfaces/iModel.interface';
import { ErrorTypes } from '../errors/catalog';

class FrameService implements IService<IFrame> {
  private _frame: IModel<IFrame>;

  constructor(model: IModel<IFrame>) {
    this._frame = model;
  }

  public async create(obj: IFrame): Promise<IFrame> {
    const parsed = FrameZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(obj);
  }

  public async readOne(_id: string): Promise<IFrame> {
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }

  public async read(): Promise<IFrame[]> {
    const frames = await this._frame.read();
    if (!frames) throw new Error(ErrorTypes.EntityNotFound);
    return frames;
  }

  public async destroy(_id: string): Promise<IFrame> {
    const frameDelete = await this._frame.destroy(_id);
    if (!frameDelete) throw new Error(ErrorTypes.EntityNotFound);
    return frameDelete;
  }
}

export default FrameService;
