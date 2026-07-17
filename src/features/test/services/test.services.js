import { api } from "../../../services/app"


export const testAPI = () => {
    return api.get('/')
}