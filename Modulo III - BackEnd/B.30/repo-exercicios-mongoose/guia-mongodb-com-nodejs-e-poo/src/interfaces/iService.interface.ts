interface IService<T> {
  create(obj: T): Promise<T>,
  readOne(_id: string): Promise<T>,
  destroy(_id: string): Promise<T>,
  read(): Promise<T[]>,
}

export default IService;
