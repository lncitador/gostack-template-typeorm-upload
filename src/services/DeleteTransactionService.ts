import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

export default class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transaction = getCustomRepository(TransactionsRepository);

    const findTransaction = await transaction.findOne({ where: { id } });

    if (!findTransaction) {
      throw new AppError('Id dont exists');
    }

    await transaction.delete(findTransaction.id);
  }
}
