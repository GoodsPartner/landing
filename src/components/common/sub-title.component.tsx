import {FC, PropsWithChildren} from "react";

interface SubTitleProps extends PropsWithChildren{
    uppercase?: boolean
}

export const SubTitle:FC<SubTitleProps> = ({ children, uppercase=false }) => {
    return <h2 className={`font-[Unbounded] tracking-wider text-[3.5em] ${uppercase ? ' uppercase ' : ''} font-bold text-black-primary`}>{children}</h2>;
}