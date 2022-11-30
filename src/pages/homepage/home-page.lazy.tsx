import { LazyExoticComponent, lazy, FC } from 'react';

export const HomePage: LazyExoticComponent<FC> = lazy(() => import(/* 'HomePage' */ '.'));
