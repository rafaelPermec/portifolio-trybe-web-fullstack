import { Request, Response } from 'express';
import IService from '../interfaces/iService.interface';
import ILens from '../interfaces/iLens.interface';

export default class LensController {
  constructor(private _service: IService<ILens>) { }

  public async create(
    req: Request & { body: ILens },
    res: Response<ILens>,
  ) {
    const { degree, antiGlare, blueLightFilter } = req.body;
    const frame = { degree, antiGlare, blueLightFilter };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request,
    res: Response<ILens[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<ILens>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async destroy(
    req: Request,
    res: Response<ILens>,
  ) {
    const result = await this._service.destroy(req.params.id);
    return res.status(200).json(result);
  }
}
