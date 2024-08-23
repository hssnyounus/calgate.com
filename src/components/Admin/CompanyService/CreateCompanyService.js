'use client';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Label, Input, TextArea, FormContainer, FormContent, FormHeader, Grid, Flex, Button, Editor, InputError,ButtonCustome, Loading } from '@/components/ui';
import { companyServiceSchema } from '@/server/validation/schema/companyServiceSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowBigDown, Cloud, Dessert } from 'lucide-react';
const CreateCompanyService = (props) => {
	const [imageUrl, setImageUrl] = useState('');
	const [isPending, setPending] = useState(false);
	const [state, setState] = useState({ title: '', description: '' });
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [updateTemplate, setUpdateTemplate] = useState(false);
	const [firstRender, setFirstRender] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitted },
	} = useForm({
		resolver: zodResolver(companyServiceSchema),
	});
	const ref = useRef();
	const formSubmit = async (formData) => {
		try {
			toast.success('success');
		} catch (error) {
			if (error instanceof Error) toast.error(JSON.stringify(error.message));
		}
		// ref.current?.reset();
		setImageUrl('');
		setPending(true)
	};
	const handleChange = (e) => {
		// setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleChangeImage = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			let imageObj = e.target.files[0];
			let url = URL.createObjectURL(imageObj);
			setImageUrl(url);
		}
	};
	return (
		<Grid className='grid grid-cols gap-9 '>
			<Flex className='flex flex-col gap-9'>
				<Toaster />

				<FormContainer className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
					<FormHeader className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
						{isSubmitting ? 'submiting...' : 'Add a service '}
					</FormHeader>
					<form action={handleSubmit(formSubmit)}>
						<FormContent className='p-6.5'>
							<Flex className='flex flex-col gap-5'>
								<div className='w-full'>
									<Label>Title</Label>
									<Input
										type='text'
										placeholder='title'
										name='title'
										onChange={handleChange}
										{...register('title', {
											required: true,
											maxLength: 80,
										})}
										error={errors?.title?.message}
									/>
									{errors.title && <InputError>{errors.title.message}</InputError>}
								</div>

								<div className='w-full'>
									<Label className='mb-3 block text-black dark:text-white'>Description</Label>
									<Editor
										getText={() => description}
										setText={(value) => setDescription(value)}
										height='500px'
										updateTemplate={updateTemplate}
										firstRender={firstRender}
										setFirstRender={setFirstRender}
										editable={!props.readOnly}
									/>
								</div>
							</Flex>

							{/* <Flex className="flex flex-col gap-5">
                  <div className="w-full">
                    <Label className="mb-3 block text-black dark:text-white">
                      Image upload
                    </Label>

                    <input
                      type="file"
                      name="image"
                      onChange={handleChangeImage}
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full">
                    <div className="grid grid-cols-2">
                      <div className="w-full">
                        <label className="mb-3 block text-black dark:text-white">
                          Image preview
                        </label>

                        <div className="border-dashed border-2 border-gray-800 w-50 h-50 flex justify-center items-center">
                          {imageUrl ? (
                            <Image
                              width={100}
                              height={150}
                              className="object-cover"
                              src={imageUrl}
                              alt="service"
                            />
                          ) : (
                            // <img
                            //   objectFit="fill"
                            //   src={imageUrl}
                            //   alt="service"
                            //   style={{ width: "100%", height: "100%" }}
                            // />
                            <h6>No Image</h6>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Flex> */}

							<Flex className='flex justify-end mt-4'>
								<Button isLoading={isPending} color='success' radius='sm' size='md' type='submit'>
									Save
								</Button>
								<ButtonCustome loading={isPending} color='destructive'  radius='sm' type='submit'>
									Save
								</ButtonCustome>
							</Flex>
						</FormContent>
					</form>
				</FormContainer>
			</Flex>
		</Grid>
	);
};

export default CreateCompanyService;
