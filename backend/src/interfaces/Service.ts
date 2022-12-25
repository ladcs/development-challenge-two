export interface Service<T> {
  getOne(email: string): Promise<T>,
  create(obj: T): Promise<T>,
  getAll(): Promise<T[]>,
  update(obj: T): Promise<T>,
  delete(email: string): Promise<null>
}