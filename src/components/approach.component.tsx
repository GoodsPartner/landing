import backgroundImage from "@/assets/img/devices_bg.png";
import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {Button} from "@/components/common/button.component.tsx";

export const Approach = () => {
    return (
        <section className={'xl:h-[720px] max-lg:mb-40 flex max-lg:justify-between max-lg:flex-col max-lg:gap-4'} >
            <img  src={backgroundImage} alt="" className={'block w-[50%] max-lg:py-20 object-contain max-lg:w-full'}/>
            <div className={'px-28 max-lg:px-6 md:flex-1 md:self-center'}>
                <SubTitle uppercase={true}>Наш Підхід -
                    Ваша перевага</SubTitle>
                <p className={"text-xl mt-10 max-lg:mt-4 max-lg:text-sm text-black-primary"}>
                    Відмінність Goods Partner в тому, що ми пропонуємо індивідуальний підхід до кожного клієнта. Ми
                    створюємо унікальні логістичні рішення, які враховують потреби та особливості саме вашого бізнесу.
                </p>
                <div className={'mt-14 max-lg:mt-8'}>
                    <Button classes={'max-lg:w-full'}>Дізнатись більше</Button>
                </div>
            </div>

        </section>
    );
}