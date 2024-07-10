import { HttpClient, HttpStatusCode } from '@/shared/data'

import { ISignIn } from '../../domain/usecases'

export class SignInRepositoryImpl implements ISignIn {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ISignIn.Model>
  ) {}
  async signIn(params: ISignIn.Params): Promise<ISignIn.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'POST',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.CREATED:
        return httpResponse.body
      case HttpStatusCode.UNAUTHORIZED:
        throw new Error('Unauthorized')
      default:
        throw new Error('Something went wrong')
    }
  }
}
