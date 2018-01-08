const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM("<html><div id='main'></div></html>");

// setting up "fake" window/document from jsdom
global['window'] = dom.window;
global['document'] = dom.window.document;

const jQuery = require('jquery');
const Page  = require('../../src/Shop/Page');

describe('Page DOM', function () {
    let page;
    let $element;

    beforeEach(function () {
        $element = jQuery('#main');

        page = new Page($element);

        spyOn($element, 'animate').and.returnValue($element);
        spyOn($element, 'text').and.returnValue($element);
    });

    it('show basket total in cool animation', function () {
        let total = 1.99;

        page.display(total);

        expect($element.animate).toHaveBeenCalledWith({
            borderWidth: 30,
            width: 200,
            height: 50,
            borderRadius: 100,
            marginLeft: 200,
            opacity: 1.0,
            fontSize: '50px'
        }, 1000);

        expect($element.text).toHaveBeenCalledWith(total);
    });
});
