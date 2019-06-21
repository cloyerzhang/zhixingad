window.onload = () => {
    const data = {};
    const $ = window.document.querySelector.bind(window.document);
    const undefined = () => {
        let data = this.props.data && this.props.data.$data || {};
        let $attr = this.props.data && this.props.data.$attr || {};
        let $theme = this.props.data && this.props.data.$theme || {};
        return {
            data,
            $attr,
            $theme,
        };
    };
};