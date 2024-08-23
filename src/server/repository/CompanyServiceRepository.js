const { PrismaClient } = require("@prisma/client");

export class CompanyServiceRepository extends PrismaClient {
  data = [];
  constructor(params) {
    super();
  }

  async getServices(){
    return this.data = this.companyServiceImages.findMany();
  }
}