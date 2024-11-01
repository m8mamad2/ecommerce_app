'use client'

import React, { Key, ReactNode, useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, TableHeaderProps } from "@nextui-org/react";
import { MdOutlineAddBox } from "react-icons/md";
import { CiSquareRemove } from "react-icons/ci";
import { CartType, LocalDatabaseRes, ProductType, UserType } from "@/app/types";
import { ApiService } from "@/app/service/api/ApiService";
import { cartColumns } from "@/app/utils/cart_utiles";
import { LocalDatabaseService } from "@/app/service/LocalDatabaseService";
import { useCartStore } from "@/app/service/state/cart_store";



export default function CartTable() {

  const [data, setData] = useState<CartType[]>([]);
  const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const setChangeState = useCartStore((state)=> state.setChageState)

  const getData = async () => {
    const response: CartType[] = (await ApiService.get('cart/getAll')).data as CartType[]
    const sortedData = response.sort((a, b) => a.id - b.id);
    setData(sortedData)
  }

  const incProduct = async(id: number)=>{
    setIsLoading(true)
    await ApiService.post('cart/create', { productId: id } )
    await getData();
    setIsLoading(false)
    setChangeState(Math.random())
  }

  const decProduct = async(id: number)=>{
    setIsLoading(true)
    await ApiService.post('cart/remove', { productId: id } )
    await getData()
    setIsLoading(false)
    setChangeState(Math.random())
  }

  useEffect(() => { getData(); }, [])


  const renderCell = React.useCallback((user: CartType, columnKey: Key) => {
    const cellValue = user[columnKey as keyof CartType];

    switch (columnKey) {
      case "product":
        return (
          <User
            avatarProps={{ style: { width: '45px', height: '45px' }, radius: "md", src: user.cartProduct.images[0] }}
            name={<h1 className="text-white text-base">{user.cartProduct.title}</h1>}
            // name={String(user.cartProduct.title)}
          >
            {user.cartProduct.title}
          </User>
        );
      case "price":
        return (
          <div className="flex flex-row justify-start gap-2 items-center">
            <p className="font-semibold text-lg text-white capitalize ">{user.cartProduct.price}</p>
            <p className="text-xs text-gray-400">تومان</p>
          </div>
        );
      case "total":
        return (
          <Chip size="sm" variant="flat">
            <div className="flex flex-row gap-3 py-4 px-2 items-center ">
              <h1 className="text-xs text-gray-400">  مجموع :</h1>
              <h1 className="font-semibold text-lg text-white capitalize ">{user.cartProduct.price * user.quanity}</h1>
            </div>
          </Chip>
        );
      case "howmuch":
        return (
          <div className="relative flex items-center gap-4">
            <Tooltip color="success" content="افزایش">
              <button 
                onClick={async()=> incProduct(user.productId)}
                className="text-lg text-success cursor-pointer active:opacity-50">
                  <MdOutlineAddBox size={28} />
              </button>
            </Tooltip>
            <Tooltip content="تعداد خرید" className="text-white mx-4">
              <span className="text-lg text-white cursor-pointer active:opacity-50">
                {user.quanity}
              </span>
            </Tooltip>
            <Tooltip color="danger" content="حذف">
              <button 
                onClick={async()=> decProduct(user.productId)}
                className="text-lg text-danger cursor-pointer active:opacity-50">
                <CiSquareRemove size={28} />
              </button>
            </Tooltip>
          </div>
        );
      default:
        return String(cellValue);
    }
  }, [isLoading]);


  const classNames = React.useMemo(
    () => ({
      // wrapper: ['bg-transparent', 'border', 'border-gray-400', 'shadow-none'],
      wrapper: ['bg-[#212121]', ],
      // table:[],
      // th: ["bg-transparent", "text-default-500", "border-b", "border-divider", 'border-b-black', 'text-black'],
      // td: ['border-b', 'border-b-gray-200'],
    }),
    [],
  );

  return (
    <div className="w-full">
        <div className="w-full h-full">
          {
            data.length === 0 || data === undefined
                ? <h1>EMPTYYYY</h1>
                : <Table 
                    aria-labelledby="table"  
                    aria-label="table"
                    className=""
                    classNames={classNames}
                    >
                  <TableHeader 
                    
                    columns={cartColumns}>
                    {(column) => (
                      <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                      </TableColumn>
                    )}
                  </TableHeader>

                  <TableBody items={data}>
                    {(item) => (
                      <TableRow key={item.id}>
                        {(columnKey: Key) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                      </TableRow>
                    )}
                  </TableBody>

                </Table>
          }
        </div>
    </div>
  );

}


