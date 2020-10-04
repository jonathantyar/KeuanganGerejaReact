import axios, {AxiosResponse} from 'axios'
import {setupInterface, User} from '../interfaces/setup.interface'

const baseURL: string = 'http://127.0.0.1:8000'

// Ambil API untuk check sudah setup atau belum

export const getSetup = async (): Promise<AxiosResponse<setupInterface>> => {
    try {
        const setup: AxiosResponse<setupInterface> = await axios.get(
            baseURL + '/api/setup'
        )
        return setup
    } catch (error) {
        throw new Error(error)
    }
}

// Process Setup
export const postUser = async (): Promise<AxiosResponse<setupInterface>> => {
    try {
        const postUser: AxiosResponse<setupInterface> = await axios.post(
            baseURL + '/api/setup/post-user', {} as User
        )
        return postUser
    } catch (error) {
        throw new Error(error)
    }
}