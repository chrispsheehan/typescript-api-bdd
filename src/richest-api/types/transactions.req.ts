export interface TransactionsReq {
    enrichments: string[],
    transactions: [
        {
            id: string,
            date: number,
            amount: number,
            description: string
        }
    ]
}