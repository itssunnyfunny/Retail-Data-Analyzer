import { prisma } from '../prisma';

export const productService = {
  getAll: () => prisma.product.findMany(),
  getByCategory: (category: string) => prisma.product.findMany({ where: { category } }),
  getById: (id: number) => prisma.product.findUnique({ where: { id } }),
  create: (data: any) => prisma.product.create({ data }),
  update: (id: number, data: any) => prisma.product.update({ where: { id }, data }),
  delete: (id: number) => prisma.product.delete({ where: { id } }),
}; 