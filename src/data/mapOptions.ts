import { MapOption } from "../types/mapOption"


export const mapOptions: MapOption[] = [
  {
    id: 0,
    text: 'Kongresové centrum',
    mobileMap: <></>,
    desktopMap: <></>,
  },
  {
    id: 1,
    text: 'U13/knihovna a rektorát - přízemí',
    mobileMap: <Knihovna0Mobile handleTableClick={handleTableClick} />,
    desktopMap: <Knihovna0Desktop handleTableClick={handleTableClick} />,
  },
  {
    id: 2,
    text: 'U13/knihovna a rektorát - 1. patro',
    mobileMap: <Knihovna1Mobile handleTableClick={handleTableClick} />,
    desktopMap: <Knihovna1Desktop handleTableClick={handleTableClick} />,
  },
];