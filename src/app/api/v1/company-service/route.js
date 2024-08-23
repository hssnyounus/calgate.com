import CompanyServiceController from "@/server/controllers/CompanyServiceController";

export async function POST(request) {
  const data = await request.json();
  return CompanyServiceController.createCompanyService(data);
}
