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