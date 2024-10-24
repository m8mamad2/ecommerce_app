

export const statusColorMap: Record<string, "success" | "danger" | "warning" | "default" | "primary" | "secondary"> = {
    active: "success",
    inactive: "default",
    banned: "danger",
    pending: "warning",
};

export const cartColumns:{ name:string , uid:string }[]= [
    {name: "محصول", uid: "product"},
    {name: "مبلغ", uid: "price"},
    {name: "جمع این محصول", uid: "total"},
    {name: "مقدار", uid: "howmuch"},
];