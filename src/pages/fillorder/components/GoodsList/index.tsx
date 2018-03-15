import * as React from 'react';

interface IGoodsListProps {
    goodsList: Array<any>;
}

class GoodsList extends React.Component<IGoodsListProps, never> {
    render() {
        return (
            <div className={'rootContainerGoodsList'}>
                GoodsList
            </div>
        )
    }
}

export default GoodsList;