import { AppError } from "@/utils/AppError"
import { Request, Response } from "express"
import { authConfig } from "@/config/auth"
import { sign } from "jsonwebtoken"

class SessionsController {
  async create(request: Request, response: Response) {

  const fakeUser = {
    id: "1",
    name: "PabloHenrique",
    password: 123456,
    role: 'customer'
  }

  const {name, password} = request.body

  if(fakeUser.name !== name || fakeUser.password !== password){
    throw new AppError("Nome e/ou senha incorreta", 401)
  }

  const {expiresIn, secret} = authConfig.jwt

  const token = sign({ role: fakeUser.role }, secret, {
    subject: String(fakeUser.id),
    expiresIn
  } )

    return response.json({token})
  }
}

export { SessionsController }
