export function convertToPersianNumbers(value: number): string {
    const persianDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}



