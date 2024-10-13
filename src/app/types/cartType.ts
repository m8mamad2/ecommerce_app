export type TUserTableType = {
    id: number,
    name: string,
    image: string,
    price: string,
    howMuch: string,
}

export const statusColorMap: Record<string, "success" | "danger" | "warning" | "default" | "primary" | "secondary"> = {
    active: "success",
    inactive: "default",
    banned: "danger",
    pending: "warning",
};