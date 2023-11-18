import backgroundImage from "@/assets/img/users_bg.png";
import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {Button} from "@/components/common/button.component.tsx";

export const Users = () => {
    return (
        <section className={'xl:h-[720px]  flex max-md:justify-between max-lg:flex-col-reverse max-lg:gap-4'}>
            <img  src={backgroundImage} alt="" className={'md:-ml-[100px] object-contain w-full'}/>
            <div className={'px-28 max-lg:px-6 md:flex-1 md:self-center'}>
                <SubTitle uppercase={true}>Кому Це Підходить</SubTitle>
                <p className={"text-xl mt-10 max-md:mt-4 max-md:text-sm text-black-primary"}>
                    Наш продукт розрахований на власників підприємств та менеджерів логістики,
                    які прагнуть зекономити час і гроші завдяки оптимізації маршрутів,
                    та підвищити ефективність бізнесу.
                </p>
                <div className={'mt-14 max-md:mt-8'}>
                    <Button classes={'max-md:w-full'}>Дізнатись більше</Button>
                </div>
            </div>
        </section>
    );
}