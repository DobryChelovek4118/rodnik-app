import { Dispatch, FC } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import MenuItem from '../menu-item';
import SvgSlice from './svg-slice';
import { dataMenu } from '@/data/data-menu';
import Footer from '../footer';

const ButtonThemeToggle = dynamic(() => import('../button-theme-toggle'), {
    ssr: false,
});

type Props = {
    theme: string;
    setTheme: Dispatch<string>;
    children: JSX.Element;
};

const Layout: FC<Props> = ({ children, theme, setTheme }) => {
    if (!children) return null;

    return (
        <>
            <header className="bg-l-m-img sm:bg-l-img dark:bg-d-m-img dark:sm:bg-d-img bg-center bg-cover w-100 h-80 md:h-550 lg:h-628">
                <div className="container h-full relative">
                    <Link href="/">
                        <a>
                            <div
                                className="w-36 h-36 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-l-logo-circle dark:bg-d-logo-circle rounded-full flex justify-center items-center absolute bottom-10 left-1 md:bottom-16 lg:left-10 xl:left-20 2xl:left-52"
                                title="Санаторий РОДНИК г. Пятигорск"
                            >
                                <div className="bg-[url('../public/static/img/logo.png')] dark:opacity-80 bg-center bg-contain bg-no-repeat w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52" />
                            </div>
                        </a>
                    </Link>
                    <ButtonThemeToggle theme={theme} setTheme={setTheme} />
                </div>
            </header>
            <nav className="container grid grid-cols-4 lg:grid-cols-8 gap-1 justify-items-center">
                {dataMenu.map((item) => (
                    <MenuItem
                        key={item.href}
                        idSvgIcon={item.idSvgIcon}
                        href={item.href}
                        hiddenMobile={!!item.hiddenMobile}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </nav>
            <main className="container">{children}</main>
            <Footer menu={dataMenu} />
            <SvgSlice />
        </>
    );
};

export default Layout;
