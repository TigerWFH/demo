import * as React from 'react';
import { connect } from 'react-redux';
import { Audit } from './components/Audit';
import { Info } from './components/Info';
import DropdownLoading from './components/DropdownLoading/index';

import * as m from './modals/uiModals';
import actions from './actions';
import './index.less';

interface IFirstProps extends m.IFirstContainer {}
interface IFirstState {
	data: any[];
	title: any;
}

class First extends React.Component<IFirstProps, IFirstState> {
	constructor(props: IFirstProps) {
		super(props);
		this.state = {
			data: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			title: {
				name: 'monkey'
			},
		};
	}

	componentDidMount() {
		// actions.requestAccount({});
		let timer = setTimeout(() => {
			let title = this.state.title;
			title.name = 'timeout';
			console.log("before************");
			this.setState({
				title
			}, () => {
				console.log("timeout---run--->", this.state.title === title);
			});
		}, 1000)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	renderContent = (data) => {
		if (Array.isArray(data)) {
			return data.map((item) => {
				return (
					<div className={'dd-item'} key={`${item}-content-${Math.random()}`}>
						{item}
					</div>
				);
			});
		}

		return null;
	};

	reachBottom = (fn) => {
		console.log('reachBottom');
		setTimeout(() => {
			const { data } = this.state;
			this.setState(
				{
					data: data.concat([ 20, 21, 22, 23, 24, 25 ])
				},
				() => {
					fn();
				}
			);
		}, 5000);
	};

	onChange = (e) => {
		this.setState({
			title: {
				name: 123
			}
		});
	}

	render() {
		console.log("First---render");
		// let { auditData, infoData, tableData } = this.props;
		const infoData = {
			ticketId: 'info',
			type: 'data'
		};
		return (
			<div className="first">
				{/* <input value={title.name}
					onChange={this.onChange} /> */}
				<Audit infoData={this.state.title.name}
					auditData={null}>
				</Audit>
				<Info infoData={null} />
				{/* <DropdownLoading reachBottom={this.reachBottom}>{this.renderContent(data)}</DropdownLoading> */}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	let { first } = state;
	return { ...first };
}

// export default connect(mapStateToProps, null)(First);
export default First;
