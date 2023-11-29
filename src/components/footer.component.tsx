export const Footer = () => {
    return <footer className={'flex justify-between bg-[#F3F3F3] h-32 max-md:h-fit px-28 max-md:p-6 py-10 max-md:flex-col'}>
        <div className={"max-md:mb-4"}>2023 Goods Partner. All rights reserved</div>

        <div>
            <div className={'mb-3 max-md:mb-2'}>
                <a href={"mailto:sales@goodspartner.io"}  className={'text-blue-primary'}  target={'_blank'}>sales@goodspartner.io</a>
            </div>
            <div><a href={"tel:+380935982800"}  className={'text-blue-primary'}  target={'_blank'}> +380 93 598 28 00</a></div>
        </div>
    </footer>
}