import { Request, Response, RequestHandler } from 'express';
import { productService } from '../services/productService';

export const getAllProducts: RequestHandler = async (req, res) => {
  const products = await productService.getAll();
  res.json(products);
};

export const createProduct: RequestHandler = async (req, res) => {
  const product = await productService.create(req.body);
  res.status(201).json(product);
};

export const getProductById: RequestHandler = async (req, res) => {
  const product = await productService.getById(Number(req.params.id));
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  res.json(product);
};

export const updateProduct: RequestHandler = async (req, res) => {
  const product = await productService.update(Number(req.params.id), req.body);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  res.json(product);
};

export const deleteProduct: RequestHandler = async (req, res) => {
  await productService.delete(Number(req.params.id));
  res.status(204).send();
}; 