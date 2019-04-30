# 关于react-redux的知识点
* **Provider**
* **connect**
* **connectedAdvanced**
* **ReactReduxContext**
## Provider
```
Provider.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }),
  context: PropTypes.object,
  children: PropTypes.any
}
```
## connect
* 可以为组件提供displayName，挂在Component.displayName 或 Component.name
* 
```
关于
1、connect()--->2、connectHOC()--->3、wrapWithConnect--->
```