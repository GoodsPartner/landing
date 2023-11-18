import {Button} from "@/components/common/button.component.tsx";
import backgroundImage from '@/assets/img/welcome_bg.png';

//
//
//     backgroundRepeat: 'no-repeat',
//     backgroundPositionX: 'right',
//     backgroundPositionY: 'top',
export const Welcome = () => {
    return <section className={`px-6 lg:px-28 md:h-[1000px] -mt-[120px]  bg-welcome-image bg-right-top bg-no-repeat bg-size-50 max-2xl:bg-right-center max-md:bg-none max-md:-mt-[60px]`} >

        <h1 className={"font-['Unbounded'] tracking-wider  text-[1.75em] md:text-[3.5em] uppercase font-bold pt-[370px] text-black-primary max-md:pt-[84px]"}>Логістика
            Майбутнього <br/> для Вашого Бізнесу</h1>

        <p className={"text-xl mt-10  text-black-primary max-md:text-sm"}>Ласкаво просимо до Goods Partner - вашого надійного партнера
            у світі логістики. <br className={"max-md:hidden"}/>
            Наша мета - зробити логістику максимально простою <br className={"max-md:hidden"}/>
            та продуктивною для вашого бізнесу.</p>
        <div className={'mt-14 max-md:flex max-md:justify-center max-md:mt-8'}>
            <Button classes={'max-md:w-full'}>Дізнатись більше</Button>
        </div>
        <div className={"max-md:block md:hidden"}>
            <img src={backgroundImage} alt=""/>
        </div>
    </section>
}