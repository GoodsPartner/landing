import logo from '@/assets/img/logo.svg';

export const Header = () => {
    return (
        <header className={'px-28 py-10 bg-transparent'}>
            <img src={logo} alt='GoodsPartner'/>
        </header>
    );
}