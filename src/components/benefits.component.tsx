import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {app, calc, erp, settings, transparent} from "@/assets/img/benefits/index.tsx";
import {FC} from "react";

import arrow from '@/assets/img/arrow.svg';

export const Benefits = () => {
    const benefits: BenefitItemProps[] = [
        {
            title: 'Розрахунок оптимальних маршрутів',
            description: 'Goods Partner допомагає швидко та точно визначити найкращий маршрут для доставки ваших товарів.',
            icon: calc
        },
        {
            title: 'Інтеграція з ERP системою',
            description: 'Інтеграція додатку передбачає індивідуальну адаптацію до облікової системи наших партнерів.',
            icon: erp
        }, {
            title: 'Налаштування параметрів маршруту',
            description: 'Враховуйте всі необхідні фактори, включаючи габарити і тип наявних авто, вагу та тип товару, часові проміжки здійснення доставки, тощо.',
            icon: settings
        }, {
            title: 'Додаток для водія',
            description: 'Ваші водії отримують доступ до зручного додатку, який допомагає їм ефективно рухатись маршрутами та виконувати доставки.',
            icon: app
        }, {
            title: 'Прозорість',
            description: 'Goods Partner дає змогу слідкувати за рухом транспорту в реальному часі, що дозволяє корегувати заплановані задачі або додати нові.',
            icon: transparent
        }
    ]

    return (
        <section className={'lg:px-28 px-10 pb-40 mx-auto max-md:pb-20'}>
            <div className={'text-center'}>
                <SubTitle>Зручність, Надійність та Ефективність</SubTitle>
                <p className={"text-xl mt-10  max-sm:text-sm max-sm:mt-4 text-black-primary"}>
                    Goods Partner - це інноваційний інструмент для оптимізації логістики. З нашим продуктом ви зможете
                    швидко розраховувати оптимальні маршрути, <br/>
                    враховувати всі потреби вашого бізнесу та ефективно виконувати доставки.
                </p>
            </div>

            <div className={'grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  mt-20  gap-6'}>
                {benefits.map((item, index) => <BenefitItem key={'benefit-' + index} {...item}/>)}
                <GetPresensation/>
            </div>
        </section>
    );
}

interface BenefitItemProps {
    title: string;
    description: string;
    icon: string;
}

const BenefitItem:FC<BenefitItemProps> = ({title, description, icon}) => (
    <div className={'rounded-xl h-[224px] p-10 border-[1px] border-[gray-secondary] max-sm:p-4 max-sm:h-[154px]'}>
        <div className={'flex justify-between'}>
            <h3 className={'font-bold text-xl max-sm:text-sm uppercase text-black-primary mr-2'}>{title}</h3>
            <img className={'block max-sm:w-10 max-sm:h-10 h-[64px] w-[64px]'} src={icon} alt={title}/>
        </div>
        <p className={'mt-2 text-black-primary max-sm:text-xs max-w-[400px]'}>{description}</p>
    </div>
)

const GetPresensation:FC = () => (
    <div className={'rounded-xl cursor-pointer flex justify-center items-center h-[224px] bg-blue-primary max-sm:h-[154px]'}>
       <p className={'font-bold text-white text-xl uppercase mr-4 max-sm:text-sm'}>Замовити презентацію</p>
        <img className={'block max-sm:w-6 max-sm:h-6 h-[38px] w-[38px]'} src={arrow} alt=""/>

    </div>
)