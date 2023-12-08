import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-toastify";


const contactSchema = z.object({
    name: z.string().min(1, "Вкажіть будь ласка ім'я" ),
    email: z.string().optional(),
    countryCode: z.string().min(1),
    phoneNumber: z.string(),
    comment: z.string()
}).partial()
    .superRefine((data, ctx) => {
        if (!data.email && !data.phoneNumber) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["email"],
                message: "Вкажіть, будь ласка, телефон або email",
            });
        }
    });


// extracting the type
type ContactSchema = z.infer<typeof contactSchema>;

export const Contact = () => {
    return <section className={'p-6 lg:text-center xl:px-[14%] xl:mb-[120px]'}>
        <SubTitle>Напишіть нам</SubTitle>
        <p className={"text-xl mt-10  max-sm:text-sm max-sm:mt-4 text-black-primary"}>Ми завжди готові вислухати
            та відповісти на ваші запитання. <span className={'font-bold'}>Ваш успіх - наш пріоритет!</span></p>
        <div className={'mt-8 lg:flex lg:justify-center lg:gap-7 lg:mt-20'}>
            <ContactForm/>
            <div className={'mt-6 lg:mt-0 lg:text-left xl:flex-1'}>
                <div className={'border-[1px] rounded-xl border-[#D3D3D3] p-4 mb-4'}>
                    <h3 className={'mb-2 text-sm font-bold lg:text-xl'}>Віддаєте перевагу електронній пошті?</h3>
                    <p className={'mb-1 text-xs lg:text-sm'}>Зв’яжіться з нами за допомогою email:</p>
                    <p><a href={"mailto:sales@goodspartner.io"} className={'text-blue-primary'}
                          target={'_blank'}>sales@goodspartner.io</a></p>
                </div>
                <div className={'border-[1px] rounded-xl border-[#D3D3D3] p-4'}>
                    <h3 className={'mb-2 text-sm font-bold lg:text-xl'}>Або зателефонуйте по номеру</h3>
                    <p><a href={"tel:+380935982800"} className={'text-blue-primary'} target={'_blank'}> +380 93 598 28
                        00</a></p>
                </div>
            </div>
        </div>
    </section>
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit: SubmitHandler<ContactSchema> = (data) => {

        fetch('https://arianta.goods-partner.online/api/v1/feedback', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(_ => {
            toast.success('Ваш лист відправлено! Ми зв’яжемося з вами найближчим часом', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }).catch(_=> {
            toast.error('Виникла помилка при відправленні форми', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    };

    // write contant for for name, email, phone, message using zod and react-hook-form
    return <div className={'p-4 bg-[#F3F3F3] lg:max-w-[1000px] xl:flex-1 lg:p-10'}>
        <form className={'flex flex-col gap-3 lg:gap-6'} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder={'Ваше ім’я *'}
                       {...register("name")}
                       className={'w-full rounded-sm placeholder:text-xs placeholder:text-[#999999] ' +
                           'py-3 px-4 text-gray-700 text-sm border-[1px] border-[#D3D3D3]'}/>
                {errors.name && (
                    <div className="text-xs italic text-red-500 mt-2 text-left">
                        {errors.name?.message}
                    </div>
                )}
            </div>
            <div>
                <input type="text" placeholder={'Email *'}
                       {...register("email")}
                       className={'w-full rounded-sm placeholder:text-xs placeholder:text-[#999999] ' +
                           'py-3 px-4 text-gray-700 text-sm border-[1px] border-[#D3D3D3]'}/>
                {errors.email && (
                    <p className="text-xs italic text-red-500 mt-2 text-left">
                        {errors.email?.message}
                    </p>
                )}
            </div>
            <div className={'flex flex-col gap-3'}>
                <div className={'flex gap-3'}>
                    <input type="text" placeholder={'Код країни *'}
                           {...register("countryCode")}
                           className={'max-w-[80px] rounded-sm placeholder:text-xs placeholder:text-[#999999] ' +
                               'py-3 px-4 text-gray-700 text-sm border-[1px] border-[#D3D3D3]'} value={'+38'}/>

                    <input type="text"  placeholder={'(000) 000 00 00 *'}
                           {...register("phoneNumber")}
                           className={'block min-w-[100px] flex-1 w-fit rounded-sm placeholder:text-xs placeholder:text-[#999999] ' +
                               'py-3 px-4 text-gray-700 text-sm border-[1px] border-[#D3D3D3]'}/>
                </div>
                {errors.phoneNumber && (
                    <div className="text-xs italic text-red-500 mt-2 text-left">
                        {errors.phoneNumber?.message}
                    </div>
                )}
            </div>

            <textarea rows={4}
                      {...register("comment")}
                      className={'inline-block flex-1 rounded-sm placeholder:text-xs placeholder:text-[#999999] ' +
                          'py-3 px-4 text-gray-700 text-sm border-[1px] border-[#D3D3D3]'}
                      placeholder="Коментар"></textarea>

            <button
                type={'submit'}
                style={{
                    boxShadow: '8px 8px 0px 0px #1976D2'
                }} className={'font-semibold px-6 py-3 uppercase flex justify-center items-center border-blue-primary' +
                ` rounded text-blue-primary border-[2px] hover:bg-blue-primary hover:text-white cursor-pointer w-full`}>
                Відправити
            </button>

        </form>

        <div className={'text-[#999999] mt-6 text-sm lg:mt-10 text-left'}>* ми використовуємо надану інформацію лише для
            зв’язку з вами
        </div>
    </div>
}