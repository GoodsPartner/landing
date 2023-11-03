import {SubTitle} from "@/components/common/sub-title.component.tsx";
import {app, calc, erp, settings, transparent} from "@/assets/img/benefits/index.tsx";
import {FC} from "react";

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
        <section className={'px-28 pb-40'}>
            <div className={'text-center'}>
                <SubTitle>Зручність, Надійність та Ефективність</SubTitle>
                <p className={"text-xl mt-10  text-black-primary"}>
                    Goods Partner - це інноваційний інструмент для оптимізації логістики. З нашим продуктом ви зможете
                    швидко розраховувати оптимальні маршрути, <br/>
                    враховувати всі потреби вашого бізнесу та ефективно виконувати доставки.
                </p>
            </div>

            <div className={'grid grid-cols-3 mt-20 flex-wrap gap-6'}>
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
    <div className={'rounded-xl h-[224px] pt-10 px-10 border-[1px] border-[gray-secondary]'}>
        <div className={'flex justify-between'}>
            <h3 className={'font-bold text-xl uppercase text-black-primary'}>{title}</h3>
            <img src={icon} alt={title}/>
        </div>
        <p className={'mt-2 text-black-primary  max-w-[400px]'}>{description}</p>
    </div>
)

const GetPresensation:FC = () => (
    <div className={'rounded-xl cursor-pointer flex justify-center items-center h-[224px] bg-blue-primary'}>
       <p className={'font-bold text-white text-xl uppercase mr-4'}>Замовити презентацію</p>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white"/>
            <path d="M14.7143 14H24M24 14V23.2857M24 14L11 27" stroke="#1976D2" stroke-width="4"/>
            <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="white"/>
        </svg>

    </div>
)