import { apiHelper } from '../utils/helpers'

export default {
    getMainMaterials() {
        return apiHelper.get('/')
    },
}
