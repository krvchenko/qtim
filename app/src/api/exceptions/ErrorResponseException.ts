export class ErrorResponseException extends Error {
  private errorResponse: any;

  public constructor(message: string) {
    super(message);
  }

  setErrorResponse(response: any): this {
    this.errorResponse = response;

    return this;
  }

  getErrorResponse(): any | undefined {
    return this.errorResponse;
  }
}
