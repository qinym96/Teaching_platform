import Vuex from 'vuex'
import state from 'vuex/admin/state'
import mutations from 'vuex/admin/mutations'
import { actionLogPlugin } from 'vuex/admin/plugins'

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [actionLogPlugin]
})

export default store