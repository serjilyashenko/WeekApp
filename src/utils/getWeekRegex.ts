export function getMaxWeekRegex(maxWeek: number): string {
    const [_, ones] = String(maxWeek).split('');

    return `[1-9]|[1-4][0-9]|5[0-${ones}]`
}