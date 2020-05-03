import React from 'react';
import './style.scss'
export default class Layout extends React.PureComponent {

    render() {
        const {left, right} = this.props;
        return (
            <div className="layout">
                <div className="layout__left">{left}</div>
                <div className="layout__right">{right}</div>
            </div>
        )
    }
}