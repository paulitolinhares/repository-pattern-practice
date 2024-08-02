export interface Repository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;
  create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;
  update(data: Omit<T, 'createdAt' | 'updatedAt'>): Promise<T>;
  delete(id: number): Promise<void>;
}