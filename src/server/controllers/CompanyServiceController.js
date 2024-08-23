import { response } from '../payload/response/response';
import { CompanyServiceService } from '../services/CompanyServiceService';
import { companyServiceSchema } from '../validation/schema/companyServiceSchema';
import { transformErrorToDetails } from '../validation/validator';
import { DatabaseError } from '../exceptions/errors/HttpErrors';

class CompanyServiceController {
	companyServiceService;
	constructor(companyServiceService = new CompanyServiceService()) {
		this.companyServiceService = companyServiceService;
	}

	async createCompanyService(req) {
    
    try {
      const inputValidation = companyServiceSchema.safeParse(req);
      console.log('something', { inputValidation: inputValidation });
      
      if (!inputValidation.success) {
        return response.badRequestResponse(
          'Fields are missing or incorrectly formatted',
          transformErrorToDetails(inputValidation.error),
          true,
        );
      }
			let data = await this.companyServiceService.createCompanyService(req);
			return response.successResponse(data);
		} catch (error) {
			console.log('something went wrong', error);
			if (error instanceof DatabaseError) {
				return response.badRequestResponse(error.message);
			}
			
      return response.internalServerErrorResponse(error.message);
		}
	}
}

export default new CompanyServiceController();
