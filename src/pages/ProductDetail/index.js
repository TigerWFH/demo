module.exports = {
    path: 'detail',
    getComponent(nextState, cb){
        require.ensure([], require=>{
            
        }, 'detail')
    }
}