import * as React from 'react';
import { Toast } from '../../widgets/index';
import ListItem from './components/List';

interface IReactPageProps {
	componentName?: string;
}
interface IReactPageState {
	toast?:any;
	componentName?: string;
	data: Array<any>
}

let count = 0;
const mockData = [
	{
		id: 0,
		name: 'monkey0'
	},
	{
		id: 1,
		name: 'monkey1'
	},
	{
		id: 2,
		name: 'monkey2'
	},
	{
		id: 3,
		name: 'monkey3'
	},
	{
		id: 4,
		name: 'monkey4'
	},
	{
		id: 5,
		name: 'monkey5'
	},
	{
		id: 6,
		name: 'monkey6'
	},
	{
		id: 7,
		name: 'monkey7'
	},
	{
		id: 8,
		name: 'monkey8'
	},
	{
		id: 9,
		name: 'monkey9'
	},
	{
		id: 10,
		name: 'monkey10'
	},
	{
		id: 11,
		name: 'monkey11'
	},
	{
		id: 12,
		name: 'monkey12'
	},
	{
		id: 13,
		name: 'monkey13'
	},
	{
		id: 14,
		name: 'monkey14'
	},
	{
		id: 15,
		name: 'monkey15'
	},
	{
		id: 16,
		name: 'monkey16'
	},
	{
		id: 17,
		name: 'monkey17'
	},
	{
		id: 18,
		name: 'monkey18'
	},
	{
		id: 19,
		name: 'monkey19'
	},
	{
		id: 20,
		name: 'monkey20'
	},
	{
		id: 21,
		name: 'monkey21'
	},
	{
		id: 22,
		name: 'monkey22'
	},
	{
		id: 23,
		name: 'monkey23'
	},
	{
		id: 24,
		name: 'monkey24'
	},
	{
		id: 25,
		name: 'monkey25'
	},
	{
		id: 26,
		name: 'monkey26'
	},
	{
		id: 27,
		name: 'monkey27'
	},
	{
		id: 28,
		name: 'monkey28'
	},
	{
		id: 29,
		name: 'monkey29'
	},
	{
		id: 30,
		name: 'monkey30'
	},
	{
		id: 31,
		name: 'monkey31'
	},
	{
		id: 32,
		name: 'monkey32'
	},
	{
		id: 33,
		name: 'monkey33'
	},
	{
		id: 34,
		name: 'monkey34'
	},
	{
		id: 35,
		name: 'monkey35'
	},
	{
		id: 36,
		name: 'monkey36'
	},
	{
		id: 37,
		name: 'monkey37'
	},
	{
		id: 38,
		name: 'monkey38'
	},
	{
		id: 39,
		name: 'monkey39'
	},
	{
		id: 40,
		name: 'monkey40'
	},
	{
		id: 41,
		name: 'monkey41'
	},
	{
		id: 42,
		name: 'monkey42'
	},
	{
		id: 43,
		name: 'monkey43'
	},
	{
		id: 44,
		name: 'monkey44'
	},
	{
		id: 45,
		name: 'monkey45'
	},
	{
		id: 46,
		name: 'monkey46'
	},
	{
		id: 47,
		name: 'monkey47'
	},
	{
		id: 48,
		name: 'monkey48'
	},
	{
		id: 49,
		name: 'monkey49'
	},
	{
		id: 50,
		name: 'monkey50'
	},
	{
		id: 51,
		name: 'monkey51'
	},
	{
		id: 52,
		name: 'monkey52'
	},
	{
		id: 53,
		name: 'monkey53'
	},
	{
		id: 54,
		name: 'monkey54'
	},
	{
		id: 55,
		name: 'monkey55'
	},
	{
		id: 56,
		name: 'monkey56'
	},
	{
		id: 57,
		name: 'monkey57'
	},
	{
		id: 58,
		name: 'monkey58'
	},
	{
		id: 59,
		name: 'monkey59'
	}
];

const mockData2 = [
	{
		id: 100,
		name: 'monkey00'
	},
	{
		id: 10,
		name: 'monkey1'
	},
	{
		id: 20,
		name: 'monkey2'
	},
	{
		id: 30,
		name: 'monkey3'
	},
	{
		id: 40,
		name: 'monkey4'
	},
	{
		id: 50,
		name: 'monkey5'
	},
	{
		id: 60,
		name: 'monkey6'
	},
	{
		id: 70,
		name: 'monkey7'
	},
	{
		id: 80,
		name: 'monkey8'
	},
	{
		id: 90,
		name: 'monkey9'
	},
	{
		id: 100,
		name: 'monkey10'
	},
	{
		id: 110,
		name: 'monkey11'
	},
	{
		id: 120,
		name: 'monkey12'
	},
	{
		id: 130,
		name: 'monkey13'
	},
	{
		id: 140,
		name: 'monkey14'
	},
	{
		id: 150,
		name: 'monkey15'
	},
	{
		id: 160,
		name: 'monkey16'
	},
	{
		id: 170,
		name: 'monkey17'
	},
	{
		id: 180,
		name: 'monkey18'
	},
	{
		id: 190,
		name: 'monkey19'
	},
	{
		id: 200,
		name: 'monkey20'
	},
	{
		id: 210,
		name: 'monkey21'
	},
	{
		id: 220,
		name: 'monkey22'
	},
	{
		id: 230,
		name: 'monkey23'
	},
	{
		id: 240,
		name: 'monkey24'
	},
	{
		id: 250,
		name: 'monkey25'
	},
	{
		id: 260,
		name: 'monkey26'
	},
	{
		id: 270,
		name: 'monkey27'
	},
	{
		id: 280,
		name: 'monkey28'
	},
	{
		id: 290,
		name: 'monkey29'
	},
	{
		id: 300,
		name: 'monkey30'
	},
	{
		id: 310,
		name: 'monkey31'
	},
	{
		id: 320,
		name: 'monkey32'
	},
	{
		id: 330,
		name: 'monkey33'
	},
	{
		id: 340,
		name: 'monkey34'
	},
	{
		id: 350,
		name: 'monkey35'
	},
	{
		id: 360,
		name: 'monkey36'
	},
	{
		id: 370,
		name: 'monkey37'
	},
	{
		id: 380,
		name: 'monkey38'
	},
	{
		id: 390,
		name: 'monkey39'
	},
	{
		id: 400,
		name: 'monkey40'
	},
	{
		id: 410,
		name: 'monkey41'
	},
	{
		id: 420,
		name: 'monkey42'
	},
	{
		id: 430,
		name: 'monkey43'
	},
	{
		id: 440,
		name: 'monkey44'
	},
	{
		id: 450,
		name: 'monkey45'
	},
	{
		id: 460,
		name: 'monkey46'
	},
	{
		id: 470,
		name: 'monkey47'
	},
	{
		id: 480,
		name: 'monkey48'
	},
	{
		id: 49,
		name: 'monkey49'
	},
	{
		id: 50,
		name: 'monkey50'
	},
	{
		id: 51,
		name: 'monkey51'
	},
	{
		id: 52,
		name: 'monkey52'
	},
	{
		id: 53,
		name: 'monkey53'
	},
	{
		id: 54,
		name: 'monkey54'
	},
	{
		id: 55,
		name: 'monkey55'
	},
	{
		id: 56,
		name: 'monkey56'
	},
	{
		id: 57,
		name: 'monkey57'
	},
	{
		id: 58,
		name: 'monkey58'
	},
	{
		id: 59,
		name: 'monkey59'
	}
];

export default class ReactPage extends React.PureComponent<IReactPageProps, IReactPageState> {

	static defaultProps = {
		componentName: 'defaultPropsName'
	};
	constructor(props) {
		super(props);
		this.state = {
			componentName: 'defaultName',
			data: mockData
		};
	}
    onInfo = () => {

	}

	renderList(data) {
		return data.map((item) => {
			return <ListItem key={item.id} data={item} />
		});
	}
	
	componentDidMount() {
		this.setState({
			componentName: 'defaultName2'
		});

		const timer = setTimeout(() => {
			console.log("beigin setTime");
			this.setState({
				data: mockData2
			});
		}, 2000)
	}

	render() {
		console.log("render count===>%d and name is %s", ++count, this.state.componentName);
		const date = new Date();
		console.log("time===>%s:%s:%s:%s", date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
		return (
			<div>
				{
					this.state.componentName
				}
				<div>
					<h1>Toast测试Demo</h1>
					<button>info</button>
					<button>success</button>
					<button>warning</button>
					<button>error</button>
                    <Toast isShow={true} text={'123123'}/>
				</div>
				<div>
					{
						this.renderList(this.state.data)
					}
				</div>
			</div>
		);
	}
}
