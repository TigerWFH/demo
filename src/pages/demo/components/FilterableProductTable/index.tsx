/**
 * @title:      Thinking in React Demo
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:        
 * @modify Date: 2017-8-4
 */

// libs
import * as React from 'react';

let mockData = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function ProductRow(props: any = {}) {
    let { productList } = props;
    let elemList = productList.map((value: any, index: number) => {
        return (
            <div key={'pItem-' + index}>
                <span style={{ display: "inline-block", width: "80px", textAlign: "left" }}>
                    {value.name}
                </span>
                <span style={{ display: "inline-block", width: "80px", textAlign: "right" }}>
                    {value.price}
                </span>
            </div>
        )
    });
    return (
        <div style={{ marginBottom: "5px", width: "160px" }}>
            {elemList}
        </div>
    )
}

function ProductCategoryRow(props: any = {}) {
    let { category } = props;
    return (
        <div style={{ textAlign: "center", width: "160px" }}>
            {category}
        </div>
    )
}

function ProductTable(props: any = {}) {
    let { productListData } = props;
    // 产品类别
    let categories = [];
    let tmp: any = '';
    productListData.forEach((value: any) => {
        if (value.category !== tmp) {
            tmp = value.category;
            categories.push(tmp);
        }
    });
    // 根据类别，获取产品列表
    categories.forEach((value: any, index: number) => {
        categories['pl' + index] = productListData.filter((item: any) => {
            return value === item.category;
        });
    });

    let elemList = categories.map((value: any, index: number) => {
        return (
            <div key={"pCategory-" + index}>
                <ProductCategoryRow category={value} />
                <ProductRow productList={categories['pl' + index]} />
            </div>
        );
    });
    return (
        <div>
            {elemList}
        </div>
    )
}

function SearchBar(props: any = {}) {
    let { value, checked, onChange, onChecked } = props;
    function _onChange(event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }
    function _onChecked(event) {
        if (typeof onChecked === 'function') {
            onChecked(event);
        }
    }
    return (
        <div>
            <input type="text"
                placeholder="Search..."
                style={{ display: "block" }}
                value={value}
                onChange={_onChange} />
            <div style={{ lineHeight: "30px" }}>
                <input type="checkbox"
                    value="Only show products in stock"
                    checked={checked}
                    onChange={_onChecked} />
                <span>Only show products in stock</span>
            </div>
        </div>
    )
}

class FilterableProductTable extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
            checked: false,
            mockData: mockData
        };
    }
    render() {
        return (
            <div>
                <SearchBar value={this.state.value}
                    checked={this.state.checked}
                    onChange={this._onChange}
                    onChecked={this._onChecked} />
                <ProductTable productListData={this.state.mockData} />
            </div>
        )
    }
    _onChange = (event) => {
        let filterData = this._filterData(event.target.value, this.state.checked);
        this.setState({
            value: event.target.value,
            mockData: filterData
        });
    }
    _onChecked = (event) => {
        this.setState({
            checked: event.target.checked,
            mockData: this._filterData(this.state.value, event.target.checked)
        });
    }
    _filterData(value: string, isStocked = false) {
        let filterData = mockData;
        if (!value && !isStocked) {
            return filterData;
        }
        if (!value && isStocked) {
            filterData = mockData.filter((item: any) => {
                return item.stocked;
            });
            return filterData;
        }
        if (isStocked) {
            filterData = mockData.filter((item: any) => {
                if (item.name.indexOf(value) === 0 && item.stocked) {
                    return true;
                }
            });
            return filterData;
        }

        filterData = mockData.filter((item: any) => {
            if (item.name.indexOf(value) === 0) {
                return true;
            }
        });

        return filterData;
    }
}

export { FilterableProductTable };