describe("TemperatureWidget", function () {

    var widget;
    var $container;

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    // INIT WIDGET PARENT
    beforeEach(function () {
        $container = $('<div class="test-contaier"></div>');
        $container.appendTo('body');

    });

    afterEach(function () {
        $container.remove();
    });

    // INIT WIDGET
    beforeEach(function () {
        widget = new TemperatureWidget($container);
    });

    describe("when initialized", function () {
        it("should fetch temperrature from server", function () {
            console.log("jasmine.Ajax.requests.mostRecent()");
            console.log(jasmine.Ajax.requests.mostRecent());
        });
    });

});
