import { HttpClient, HttpStatusCode } from '@/shared/data'
import { ISignUp } from '../../domain'

export class SignUpRepositoryImpl implements ISignUp {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ISignUp.Model>
  ) {}

  async signUp(data: ISignUp.Params): Promise<ISignUp.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'POST',
      body: data
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.CREATED:
        return httpResponse.body
      default:
        throw new Error('Something went wrong')
    }
  }
}
