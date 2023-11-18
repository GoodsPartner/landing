import {FC, PropsWithChildren} from "react";

interface ButtonProps extends PropsWithChildren{
    classes?: string;
}

export const Button:FC<ButtonProps> = ({children,classes=''}) => {
    return <div style={{
        boxShadow: '8px 8px 0px 0px #1976D2'
    }} className={'font-semibold px-6 py-3 uppercase flex justify-center items-center border-blue-primary' +
        ` rounded w-fit text-blue-primary border-[2px] hover:bg-blue-primary hover:text-white cursor-pointer ${classes}`}>{children}</div>
}