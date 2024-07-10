export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

export type HttpRequest = {
    url: string
    method: HttpMethod
    body?: any
    headers?: any
}

export type HttpResponse<T = any> = {
    statusCode: HttpStatusCode
    body?: T
}

export interface HttpClient<R = any> {
    request(data: HttpRequest): Promise<HttpResponse<R>>
}