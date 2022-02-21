import Parser from 'models/parsers/ParserInterface';

export default class ParserFileService {
  private parser: Parser;

  private file: { ext: string };

  constructor(parser: Parser) {
    this.parser = parser;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async parseToArray(file: { ext: string }): Promise<any[]> {
    const result = await this.parser.parse(file);

    return result;
  }
}
