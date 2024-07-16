import { ReactNode } from 'react';

export type MapOption = {
  id: number;
  text: string;
  mobileMap: ReactNode;
  desktopMap: ReactNode;
};
