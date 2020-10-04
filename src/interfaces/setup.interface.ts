export interface setupInterface {
    setup: boolean 
    step: number
}

export type setupType = {
    setup: setupInterface
    setSetup: (setup: setupInterface) => void
}

export interface User {
    name: string
    email: string
    role: string
    avatar: string
    password: string
}

export interface Balance {
    name: string
    nominal: string
}

export interface Balances {
    balance: Balance
}

export interface Group {
    name: string
    type: string
    code: string
}

export interface Groups {
    group: Group
}

export type setupData = {
    user: User
    balances: Balances
    group: Groups
}