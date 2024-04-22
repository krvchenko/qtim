interface IParamArray {
  [key: string]: string,
}

export class UrlQueryBuilder {
  private params: IParamArray = {};

  addProperty(key: string, value: string): this {
    this.params[key] = value;

    return this;
  }

  removeProperty(key: string): this {
    delete this.params[key];

    return this;
  }

  toURL(): string {
    return new URLSearchParams(this.params).toString();
  }

  public toString(): string {
    return this.toURL();
  }
}
