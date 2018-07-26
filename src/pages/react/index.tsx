import * as React from 'react';
import { Toast } from '../../widgets/index';

interface IReactPageProps {}
interface IReactPageState {
    toast:any;
}

export default class ReactPage extends React.PureComponent<{}, never> {
    onInfo = () => {

    }

	render() {
		return (
			<div>
				<div>
					<h1>Toast测试Demo</h1>
					<button>info</button>
					<button>success</button>
					<button>warning</button>
					<button>error</button>
                    <Toast isShow={true} text={'123123'}/>
				</div>
			</div>
		);
	}
}
