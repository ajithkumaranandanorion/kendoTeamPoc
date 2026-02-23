// gridApi.ts
import type { GridItem } from '../models/grid.type';
import datas from "./../../db.json"

// export const fetchGridData = async (
//   skip: number,
//   take: number
// ): Promise<{ data: GridItem[]; total: number }> => {

//   const params = new URLSearchParams();
//   params.append('_start', String(skip));
//   params.append('_end', String(skip + take));

//   const url = `http://localhost:4000/gridData?${params.toString()}`;

//   const res = await fetch(url);
//   const data = await res.json();

//   return {
//     data,
//     total: Number(res.headers.get('X-Total-Count')) || 50
//   };

// };

export const fetchGridData = async (
  skip: number,
  take: number
): Promise<{ data: GridItem[]; total: number }> => {

  const res = await datas.gridData.slice(skip, (skip + take));
  return { data: res, total: datas.gridData.length }
};

