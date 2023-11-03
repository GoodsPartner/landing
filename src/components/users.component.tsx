import backgroundImage from "@/assets/img/users_bg.png";
import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {Button} from "@/components/common/button.component.tsx";

export const Users = () => {
    return (
        <section className={'h-[720px] flex items-center px-28'} style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'left',
            backgroundPositionY: 'top',
        }}>
            <div className={'ml-[50%]'}>
                <SubTitle uppercase={true}>Кому Це Підходить</SubTitle>
                <p className={"text-xl mt-10  text-black-primary"}>
                    Наш продукт розрахований на власників підприємств та менеджерів логістики,
                    які прагнуть зекономити час і гроші завдяки оптимізації маршрутів,
                    та підвищити ефективність бізнесу.
                </p>
                <div className={'mt-14'}>
                    <Button>Дізнатись більше</Button>
                </div>
            </div>

        </section>
    );
}