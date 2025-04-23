import { AppError } from "@/utils/AppError"
import { Request, Response } from "express"

class SessionsController {
  async create(request: Request, response: Response) {

  const fakeUser = {
    id: 1,
    name: "PabloHenrique",
    password: 123456,
  }

  const {name, password} = request.body

  if(fakeUser.name !== name || fakeUser.password !== password){
    throw new AppError("Nome e/ou senha incorreta", 401)
  }

    return response.json({ message: "ok"})
  }
}

export { SessionsController }
