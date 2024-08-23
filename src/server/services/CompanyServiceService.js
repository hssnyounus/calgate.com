import { DatabaseError } from '../exceptions/errors/HttpErrors';
import { companyServiceSchema } from '../validation/schema/companyServiceSchema';

const { Prisma } = require('@prisma/client');
const { CompanyServiceRepository } = require('../repository/CompanyServiceRepository');
const { validateInputs } = require('../validation/validate');

export class CompanyServiceService {
	companyServiceRepository;
	constructor(companyServiceRepository = new CompanyServiceRepository()) {
		this.companyServiceRepository = companyServiceRepository;
	}

	async createCompanyService(req) {
		validateInputs(companyServiceSchema, req);
		try {
			const companyService = await this.companyServiceRepository.companyService.create({
				data: {
					title: req.title,
				},
			});

			return companyService;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				throw new DatabaseError(error.message);
			}
			throw error;
		}
	}
	async allServices() {
		try {
			const services = [];
			return (services = this.companyServiceRepository.getServices());
		} catch (error) {
			if (error instanceof Prisma.PrismaClientInitializationError) {
				throw new DatabaseError(error.message);
			}
		}
	}
}
