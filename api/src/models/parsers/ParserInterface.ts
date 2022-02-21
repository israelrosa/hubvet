export default interface Parser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parse(file: { ext: string }): Promise<any[]>;
}
