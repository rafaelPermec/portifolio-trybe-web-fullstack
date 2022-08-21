import { Request, Response } from 'express';
import IService from '../interfaces/iService.interface';
import IFrame from '../interfaces/iFrame.interface';

export default class FrameController {
  constructor(private _service: IService<IFrame>) { }

  public async create(
    req: Request & { body: IFrame },
    res: Response<IFrame>,
  ) {
    const { material, color } = req.body;
    const frame = { material, color };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request,
    res: Response<IFrame[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IFrame>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async destroy(
    req: Request,
    res: Response<IFrame>,
  ) {
    const result = await this._service.destroy(req.params.id);
    return res.status(200).json(result);
  }
}
