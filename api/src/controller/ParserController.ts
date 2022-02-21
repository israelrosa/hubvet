import { Request, Response } from 'express';
import GetParsers from 'services/parser/GetParsers';
import ParserFileService from 'services/parser/ParserFileService';
import ErrorHandler from 'utils/ErrorHandler';
import ERROR from 'utils/Errors';

export default class ParserController {
  async parse(request: Request, response: Response): Promise<Response> {
    const { file }: { file: { ext: string } } = request.body;

    const parsers = GetParsers();

    const selectedParser = parsers.get(file.ext);

    if (!selectedParser) {
      throw new ErrorHandler(ERROR.INVALID_FILE_EXTENSION);
    }

    const parserFileService = new ParserFileService(selectedParser);

    const result = await parserFileService.parseToArray(file);

    return response.status(200).json(result);
  }
}
