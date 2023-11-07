import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {Button} from "@/components/common/button.component.tsx";
import {FC} from "react";

export const Statistics = () => {
    const data: StatisticItemProps[] = [
        {
            statistic: '20%',
            description: 'зменшення кількості авто ' +
                'на маршрутах '
        }, {
            statistic: '25%',
            description: 'збільшення точок на маршруті'
        }, {
            statistic: '20%',
            description: 'зменшення загального пробігу транспорту'
        }, {
            statistic: '70%',
            description: 'зменшення навантаження ' +
                'на логіста'
        },
    ]

    return (
        <section className={'h-[720px] px-28 flex justify-between items-center'}>
            <div className={'w-[40%] mt-16'}>
                <SubTitle>Вигода від
                    Користування</SubTitle>
                <p className={"text-xl mt-10  text-black-primary"}>
                    Завдяки Goods Partner ви зменшите кількість автомобілів на маршруті, збільшите точність доставки та
                    значно заощадите на витратах. Наше рішення допоможе вашому бізнесу стати більш продуктивним та
                    конкурентоспроможним.
                </p>
                <div className={'mt-10'}>
                    <Button>Замовити презентацію</Button>
                </div>
            </div>
            <div className={'grid grid-cols-2 gap-6'}>
                {data.map((item, index) => <StatisticItem key={'statistic-' + index} {...item}/>)}
            </div>

        </section>
    );
}

interface StatisticItemProps {
    statistic: string;
    description: string;
}

const StatisticItem: FC<StatisticItemProps> = ({description, statistic}) => {
    return (
        <div className={'flex rounded-xl flex-col items-center px-6 py-14 h-60 bg-[#F0F0F0]'}>
            <h3 className={'font-extrabold text-6xl text-blue-primary mb-5'}>~ {statistic}</h3>
            <p className={'text-xl text-center max-w-[75%] '}>{description}</p>
        </div>
    )
}