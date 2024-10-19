export interface ApiRes<T> {
    result: boolean,
    data: T,
    statusCode: number
}

export type NavbarType = {
    title: string,
    url: string,
}


export type ProductType = {
    id: number
    title: string
    description: string
    images: string[]
    price: number
    lable: string
}

export type UserType = {
    id: number,
    full_name: string,
    address_name: string
    privance: string,
    city: string,
    postal_code: string,
    plate: string,
    phoneNumber: number,
    access_token: string,
    localId: number,
}
