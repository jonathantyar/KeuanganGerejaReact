import {createContext} from 'react'
import {setupType} from '../interfaces/setup.interface'

export const setupContext = createContext<setupType | undefined>(undefined)