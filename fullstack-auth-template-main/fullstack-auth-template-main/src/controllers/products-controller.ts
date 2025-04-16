import { Request, Response } from "express"

class ProductsController {
  async index(request: Request, response: Response) {

    response.json({ message: "Lista de produtos"})
  }

  async create(request: Request, response: Response) {

    response.json({ message: "O produto foi criado"})
  }
}

export { ProductsController }
