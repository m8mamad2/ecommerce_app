'use client'

import React, { Key, ReactNode, useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, TableHeaderProps} from "@nextui-org/react";
import { MdOutlineAddBox } from "react-icons/md";
import { CiSquareRemove } from "react-icons/ci";
import { ProductType } from "@/app/types";
import { ApiService } from "@/app/service/api/ApiService";
import { cartColumns } from "@/app/utils/cart_utiles";



export default function CartTable() {

  const [data, setData] = useState<ProductType[]>([]);
  const getData = async()=>{
    const data:ProductType[] = (await ApiService.get('cart/getAll')).data as ProductType[]
    console.log(data)
  }

  useEffect(()=>{ getData() }, [])
  
  const renderCell = React.useCallback((user: ProductType, columnKey: Key) => {
    const cellValue = user[columnKey as keyof ProductType];

    switch (columnKey) {
      case "product":
        return (
          <User
            avatarProps={{ style:{width:'45px' , height:'45px'},radius: "md", src: user.images[0]}}
            description={<h1 className="text-gray-300 text-base">{user.title}</h1>}
            name={cellValue}
          >
            {user.title}
          </User>
        );
      case "price":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="font-semibold text-base text-gray-400 capitalize ">{user.price}</p>
          </div>
        );
      case "total":
        return (
              <Chip  size="sm" variant="flat">
                <div className="flex flex-row gap-3 py-2 px-2 items-center ">
                    <h1 className="text-gray-400 text-sm">مجموع</h1>
                    <h1 className="text-white text-sm font-bold">222$</h1>
                </div>
              </Chip>
        );
      case "howmuch":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="success" content="افزایش">
              <span className="text-lg text-success cursor-pointer active:opacity-50">
                <MdOutlineAddBox size={23}/>
              </span>
            </Tooltip>
            <Tooltip content="تعداد خرید" className="text-white mx-4">
              <span className="text-base text-white cursor-pointer active:opacity-50">
                {user.price}
              </span>
            </Tooltip>
            <Tooltip color="danger" content="حذف">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <CiSquareRemove size={25} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-labelledby="Example table with custom cells" aria-label="Example table with custom cells">
        <TableHeader columns={cartColumns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey:Key) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
  );
}


