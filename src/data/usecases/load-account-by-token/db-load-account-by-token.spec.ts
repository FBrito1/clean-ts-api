import { Decrypter } from '../../protocols/criptography/decrypter'
import { DbLoadAccountByToken } from './db-load-account-by-token'

describe('DbLoadAccountByToken UseCase', () => {
  test('Should call Decrypter with correct values', async () => {
    class DecrypterStub implements Decrypter {
      async decrypt (value: string): Promise<string> {
        return await new Promise((resolve) => resolve('any_value'))
      }
    }
    const descrypterStub = new DecrypterStub()
    const decryptSpy = jest.spyOn(descrypterStub, 'decrypt')
    const sut = new DbLoadAccountByToken(descrypterStub)
    await sut.load('any_token')
    expect(decryptSpy).toHaveBeenCalledWith('any_token')
  })
})
