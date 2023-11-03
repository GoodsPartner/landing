import {Button} from "@/components/common/button.component.tsx";
import backgroundImage from '@/assets/img/welcome_bg.png';

export const Welcome = () => {
    return <section className={'px-28 h-[1000px] -mt-[120px]'} style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right',
        backgroundPositionY: 'top',
    }}>

        <h1 className={"font-['Unbounded'] tracking-wider text-[3.5em] uppercase font-bold pt-[250px] text-black-primary"}>Логістика
            Майбутнього <br/> для Вашого Бізнесу</h1>

        <p className={"text-xl mt-10  text-black-primary"}>Ласкаво просимо до Goods Partner - вашого надійного партнера
            у світі логістики. <br/>
            Наша мета - зробити логістику максимально простою <br/>
            та продуктивною для вашого бізнесу.</p>
        <div className={'mt-14'}>
            <Button>Дізнатись більше</Button>
        </div>
    </section>
}