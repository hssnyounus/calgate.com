"use server";

import prisma from "@/lib/prisma";

export async function createServiceAction(formData) {
  // let title = formData.get("title");
  // let description = formData.get("description");
  // let image = formData.get("image");
  let title = formData.title;
  let description = formData.description;
  let image = formData.image;
  throw new Error("something went wrong");
  const service = await prisma.companyService.create({
    data: {
      title: title,
      description: description,
      // image: image ? image.name : null,
    },
  });
  console.log(service);
  return service.id;
}
export async function getServices() {
  const Allservice = await prisma.service.findMany();
  console.log(Allservice);
  return Allservice;
}
