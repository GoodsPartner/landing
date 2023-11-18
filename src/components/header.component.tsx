import logo from '@/assets/img/logo.svg';

export const Header = () => {
    return (
        <header className={'px-28 py-10 bg-transparent max-lg:py-5 max-lg:px-6'}>
            <img src={logo} alt='GoodsPartner'/>
        </header>
    );
}