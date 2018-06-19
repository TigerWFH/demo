import * as React from 'react';
import { connect } from 'react-redux';

import './index.less';
import TopLabel from './components/TopLabel';
import ProductList from './components/ProductList';

interface IStateProps {}
interface IStateState {}

const mockProductList = [
	{
		store: {
			name: 'monkey'
		},
		productList: [
			{
				name: 'monkey的小屋monkey的monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋',
				spec: '1个',
				usage: '一天一次monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋',
				price: '12341293481923492174913749217497214792147398217491247921749178324',
				piece: '112341293481923492174913749217497214792147398217491247921749178324',
				image: ''
			},
			{
				name: 'monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋monkey的小屋',
				spec: '1个',
				usage: '一天一次',
				price: 1234,
				piece: 1,
				image: ''
			},
			{
				name: 'monkey的小屋',
				spec: '1个',
				usage: '一天一次',
				price: 1234,
				piece: 1,
				image: ''
			},
			{
				name: 'monkey的小屋',
				spec: '1个',
				usage: '一天一次',
				price: 1234,
				piece: 1,
				image: ''
			}
		]
	},
	{
		store: {
			name: 'cat'
		},
		productList: [
			{
				name: 'cat的小屋',
				spec: '1个',
				usage: '一天一次',
				price: 1234,
				piece: 1,
				image: ''
			},
			{
				name: 'cat的小屋',
				spec: '1个',
				usage: '一天一次',
				price: 1234,
				piece: 1,
				image: ''
			}
		]
	}
];

class State extends React.PureComponent<IStateProps, IStateState> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="state-root">
				<TopLabel />
				<ProductList productList={mockProductList} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
export default connect(mapStateToProps, null, null)(State);
