import { apiHelper } from '../utils/helpers'

export const getMainMaterials = () => {
    return apiHelper.get('/')
}
