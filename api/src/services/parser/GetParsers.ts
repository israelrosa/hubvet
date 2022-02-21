import CSVToArrayParser from 'models/parsers/CSVtoArrayParser';
import Parser from 'models/parsers/ParserInterface';
import TSVToArrayParser from 'models/parsers/TSVtoArrayParser';
import TXTToArrayParser from 'models/parsers/TXTtoArrayParser';
import XLSToArrayParser from 'models/parsers/XLStoArrayParser';
import XMLToArrayParser from 'models/parsers/XMLtoArrayParser';

export default function GetParsers(): Map<string, Parser> {
  const parsers = new Map<string, Parser>();

  parsers.set('csv', new CSVToArrayParser());
  parsers.set('tsv', new TSVToArrayParser());
  parsers.set('txt', new TXTToArrayParser());
  parsers.set('xls', new XLSToArrayParser());
  parsers.set('xml', new XMLToArrayParser());

  return parsers;
}
