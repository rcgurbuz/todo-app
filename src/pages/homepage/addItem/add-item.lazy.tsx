import { LazyExoticComponent, lazy, FC } from 'react';

export const AddItem: LazyExoticComponent<FC> = lazy(() => import(/* 'AddItem' */ '.'));
