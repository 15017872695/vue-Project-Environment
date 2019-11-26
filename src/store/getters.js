const getters = {
    requestLoading: state => state.app.requestLoading,
    size: state => state.app.size,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    currentItem: state => state.editor.currentItem,
    toolList: state => state.editor.toolList,
    log: state => state.editor.log
}
export default getters;