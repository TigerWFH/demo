import * as React from 'react';
import { connect } from 'react-redux';
import { Audit } from './components/Audit';
import DropdownLoading from './components/DropdownLoading/index';

import * as m from './modals/uiModals';
import actions from './actions';
import './index.less';

interface IFirstProps extends m.IFirstContainer {}
interface IFirstState {
	data: any[];
}

class First extends React.Component<IFirstProps, IFirstState> {
	constructor(props: IFirstProps) {
		super(props);
		this.state = {
			data: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
		};
	}

	componentDidMount() {
		actions.requestAccount();
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
		}, 1000);
	};
	render() {
		let { auditData, infoData, tableData } = this.props;
		const { data } = this.state;
		console.log(this.renderContent(data));
		return (
			<div className="first">
				{/* <Audit auditData={auditData}
					infoData={infoData}>
					{"audit"}
				</Audit>
				first page */}
				<DropdownLoading reachBottom={this.reachBottom}>{this.renderContent(data)}</DropdownLoading>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	let { first } = state;
	return { ...first };
}

export default connect(mapStateToProps, null)(First);
