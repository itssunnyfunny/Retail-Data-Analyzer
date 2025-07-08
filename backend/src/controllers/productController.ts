import { Request, Response } from 'express';
import { productService } from '../services/productService';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const product = await productService.create(req.body);
  res.status(201).json(product);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await productService.getById(Number(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await productService.update(Number(req.params.id), req.body);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  await productService.delete(Number(req.params.id));
  res.status(204).send();
}; 