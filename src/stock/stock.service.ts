import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Stock } from "./stock.entity";
import { Repository } from "typeorm";

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>
  ) {}

  async getAllProducts() {
    await this.stockRepository.find();
  }

  async getProduct(id: number) {
    await this.stockRepository.findOneBy({ id: id});
  }

  async createProduct() {
    
  }
}