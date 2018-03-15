import * as React from 'react';
import Line from '../Line';
import './index.less';

interface IGoodsListProps {
    goodsList: Array<any>;
}

class GoodsList extends React.Component<IGoodsListProps, never> {
    renderGoodsItem = (item, index) => {
        let elem = <div className={'goodsContainer'}
            key={'goods:' + index}>
            <span className={'sortContainer'}>
                <span className={'sort'}>
                    {index}
                </span>
                <span className={'sortSymbol'}>
                    .
                </span>
            </span>
            <img className={'img'}
                src={''} />
            <span className={'contentContainer'}>
                <span className={'title'}>
                    名字
                </span>
                <span className={'usage'}>
                    用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量
                </span>
                <span className={'priceContainer'}>
                    <span className={'price'}>
                        $12.02
                    </span>
                    <span className={'amount'}>
                        x12
                    </span>
                </span>
            </span>
            <button className={'instruction'}>
                说明书
            </button>
        </div>

        return elem;
    }
    render() {
        let { goodsList } = this.props;
        return (
            <div className={'rootContainerGoodsList'}>
                {
                    Array.isArray(goodsList) ?
                        goodsList.map((item, index) => {
                            return this.renderGoodsItem(item, index)
                        }) : null
                }
                <Line />
            </div>
        )
    }
}

export default GoodsList;