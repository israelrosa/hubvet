import Parser from './ParserInterface';

export default class TSVToArrayParser implements Parser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async parse(file: { ext: string }): Promise<any[]> {
    return [file];
  }
}
