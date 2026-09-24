import React, { Component } from 'react';

export default class LoadMore extends Component {
    
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.lazyImageObserver = null;
    }

    componentDidMount(){
        let { listmore } = this.props;
        if ("IntersectionObserver" in window) {
            const el = this.myRef.current;
            this.lazyImageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach( entry => {
                    if (entry.isIntersecting) {
                        listmore();
                        this.lazyImageObserver.unobserve(el);
                    }
                });
            });
            if(this.lazyImageObserver){
                this.lazyImageObserver.observe(el)
            }
        } else {
            // fall back
        }
    }
    
    render() {
        return <div ref={this.myRef} />;
    }

    componentWillUnmount(){
        if(this.lazyImageObserver){
            this.lazyImageObserver.unobserve(this.myRef.current);
        }
    }
}