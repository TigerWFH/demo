import * as React from 'react';
import './index.less';

const HEALTH_GOLD_TEXT = '健康金';
const INSTRUCTION_TEXT = '说明书';
const PRICE_SYMBOL = '￥';

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
							<span className="product-price-symbol">{PRICE_SYMBOL}</span>
							<span className="product-price">{product.price}</span>
						</span>
						<span className="product-health-gold">{HEALTH_GOLD_TEXT}</span>
					</span>
					<span className="product-instruction-amount-container">
						<span className="product-instruction">{INSTRUCTION_TEXT}</span>
						<span className="product-amount">X{product.piece}</span>
					</span>
					<div />
				</div>
			</div>
		</div>
	);
}

export default Product;
