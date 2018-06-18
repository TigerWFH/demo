import * as React from 'react';
import './index.less';

function Product(props) {
	const { product = undefined } = props;
	if (!product) {
		return null;
	}

	return (
		<div className="product-root">
			<div className="product-image">image</div>
			<div className="product-description-container">
				<div className="product-description-title">{product.name + product.spec}</div>
				<div className="product-description-usage">{product.usage}</div>
				<div className="product-description-op-container">
					<span className="product-price-gold-container">
						<span className="product-price-container">
							<span className="product-price-symbol">￥</span>
							<span className="product-price">{product.price}</span>
						</span>
						<span className='product-price-health-gold'>健康金</span>
					</span>
					<span className='product-amount-container'>
						<span className='product-amount'>{product.piece}</span>
						<span className='product-instruction'>说明书</span>
					</span>
					<div />
				</div>
			</div>
		</div>
	);
}

export default Product;
