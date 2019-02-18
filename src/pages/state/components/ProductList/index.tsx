import * as React from 'react';

import './index.less';
import Product from '../Product';
import Line from '../../../../widgets/line';

interface IProductListProps {
	productList: Array<any>;
}
interface IProductListState {}

class ProductList extends React.PureComponent<IProductListProps, IProductListState> {
	renderStoreWithProducts = (storeWithProducts, index) => {
		const { store: { name = undefined }, productList = [] } = storeWithProducts;
		if (!name) {
			return null;
		}
		return (
			<div className="store-with-products-container" key={`store-with-products-container-${index}`}>
				<div className='product-store-name'>{name}</div>
				{productList.map((item, index) => {
					return <Product product={item} key={`productlist-product-${index}`} />;
				})}
			</div>
		);
	};
	render() {
		const { productList = [] } = this.props;
		const cureRate = '99.1%';
		if (!Array.isArray(productList) || !productList.length) {
			return null;
		}
		return (
			<div className="productlist-root">
				{productList.map((item, index) => {
					return this.renderStoreWithProducts(item, index);
				})}
				<div className="productlist-cure-rate">{`处方治愈好转率：${cureRate}`}</div>
			</div>
		);
	}
}

export default ProductList;
