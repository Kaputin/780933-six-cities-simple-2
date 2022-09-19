import TSVFileWriter from '../common/file-writer/tsv-file-writer.js';
import axios from 'axios';
import OfferGenerator from '../common/offer-generator/offer-generator.js';
import { MockData } from '../types/mock-data.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockData;

  public async execute(...parameters:string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      this.initialData = await axios.get(url).then((response) => response.data);
    } catch {
      return console.log(chalk.red(`Can't fetch data from ${url}.`));
    }

    const offerGeneratorString = new OfferGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < offerCount; i++) {
      await tsvFileWriter.write(offerGeneratorString.generate());
    }

    console.log(chalk.blue(`File ${filepath} was created!`));
  }
}
