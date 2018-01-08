module.exports = class Page {
    constructor($element) {
        this.$element = $element;
    }

    display(total) {
        this.$element.animate({
            borderWidth: 30,
            width: 200,
            height: 50,
            borderRadius: 100,
            marginLeft: 200,
            opacity: 1.0,
            fontSize: '50px'
        }, 1000).text(total);
    }
};
