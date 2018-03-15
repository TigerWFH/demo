import * as React from 'react';
import Line from '../Line';
import './index.less';

interface IGoodsListProps {
    goodsList: Array<any>;
}

class GoodsList extends React.Component<IGoodsListProps, never> {

    onInstruction = () => {

    }

    renderGoodsItem = (item, index) => {
        let elem = <div className={'goodsContainer'}
            key={'goods:' + index}>
            <span className={'sortContainer'}>
                <span className={'sort'}>
                    {index + 1}
                </span>
                <span className={'sortSymbol'}>
                    .
                </span>
            </span>
            <img className={'img'}
                src={item.img || ''} />
            <span className={'contentContainer'}>
                <span className={'title'}>
                    {item.title || 'title'}
                </span>
                <span className={'usage'}>
                    {item.usage || '用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用法用量用'}
                </span>
                <span className={'priceContainer'}>
                    <span className={'price'}>
                        <span>
                            {`￥${item.price || 12.01}`}
                        </span>
                    </span>
                    <span className={'amount'}>
                        {`x${item.amount || 12}`}
                    </span>
                </span>
            </span>
            <button className={'instruction'}
                onClick={this.onInstruction}>
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