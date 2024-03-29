import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';
import Title from '@/components/ui/title';

const Lechenie: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Лечение в Пятигорске : Профиль Санатория &quot;Родник&quot;
                    г. Пятигорск - Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Лечение в Пятигорске, курортный отдых в лечебно-профилактическом санаторий «РОДНИК» по низким ценам в Пятигорске. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <Title>Лечение в санатории</Title>
        </>
    );
};

export default Lechenie;
