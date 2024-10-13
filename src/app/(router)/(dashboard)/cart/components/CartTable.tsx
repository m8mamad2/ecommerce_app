'use client'

import React, { Key, ReactNode } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, TableHeaderProps} from "@nextui-org/react";
import { RiEditCircleFill } from "react-icons/ri";
import { FiDelete } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { statusColorMap, TUserTableType } from '@/app/types/cartType'
import { CiSquareRemove } from "react-icons/ci";



export default function CartTable() {
  const renderCell = React.useCallback((user: TUserTableType, columnKey: Key) => {
    const cellValue = user[columnKey as keyof TUserTableType];

    switch (columnKey) {
      case "product":
        return (
          <User
            avatarProps={{ style:{width:'45px' , height:'45px'},radius: "md", src: user.image}}
            description={<h1 className="text-gray-300 text-base">{user.name}</h1>}
            name={cellValue}
          >
            {user.name}
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
                {user.howMuch}
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
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey:Key) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

const columns:{ name:string , uid:string }[]= [
    {name: "محصول", uid: "product"},
    {name: "مبلغ", uid: "price"},
    {name: "جمع این محصول", uid: "total"},
    {name: "مقدار", uid: "howmuch"},
];
  
const users: TUserTableType[] = [
    {
        id: 1,
        name: "پیراهن گل گلی",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        price:'22$',
        howMuch:'0'
    },
    {
        id: 2,
        name: "شلوار گل منگولی",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        price:'27$',
        howMuch:'0'
    },
    {
        id: 3,
        name: "شرتک گل منگولی",
        image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        price:'27$',
        howMuch:'8'
    },
    {
        id: 4,
        name: "شرتک گل منگولی",
        image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        price:'27$',
        howMuch:'12'
    },
    {
        id: 1,
        name: "پیراهن گل گلی",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        price:'22$',
        howMuch:'0'
    },
    {
        id: 2,
        name: "شلوار گل منگولی",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        price:'27$',
        howMuch:'0'
    },
    {
        id: 3,
        name: "شرتک گل منگولی",
        image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        price:'27$',
        howMuch:'8'
    },
    {
        id: 4,
        name: "شرتک گل منگولی",
        image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        price:'27$',
        howMuch:'12'
    },
    {
        id: 1,
        name: "پیراهن گل گلی",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        price:'22$',
        howMuch:'0'
    },
    {
        id: 2,
        name: "شلوار گل منگولی",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        price:'27$',
        howMuch:'0'
    },
    {
        id: 3,
        name: "شرتک گل منگولی",
        image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        price:'27$',
        howMuch:'8'
    },
    {
        id: 4,
        name: "شرتک گل منگولی",
        image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        price:'27$',
        howMuch:'12'
    },
    
];
