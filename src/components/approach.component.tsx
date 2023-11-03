import backgroundImage from "@/assets/img/devices_bg.png";
import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {Button} from "@/components/common/button.component.tsx";

export const Approach = () => {
    return (
        <section className={'h-[720px] flex px-28 justify-end'} style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'left',
            backgroundPositionY: 'top',
        }}>
            <div className={'w-[40%] mt-16'}>
                <SubTitle uppercase={true}>Наш Підхід -
                    Ваша перевага</SubTitle>
                <p className={"text-xl mt-10  text-black-primary"}>
                    Відмінність Goods Partner в тому, що ми пропонуємо індивідуальний підхід до кожного клієнта. Ми
                    створюємо унікальні логістичні рішення, які враховують потреби та особливості саме вашого бізнесу.
                </p>
                <div className={'mt-10'}>
                    <Button>Дізнатись більше</Button>
                </div>
            </div>

        </section>
    );
}