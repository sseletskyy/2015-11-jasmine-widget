describe("TemperatureWidget", function () {

    var widget;
    var $container;

    var fakeAjax = function (value) {
        var fakeSuccess = {
            'status': 200,
            'content/type': 'application/json',
            'responseText': JSON.stringify({"temperature": value})
        }
        jasmine.Ajax.requests.mostRecent().respondWith(fakeSuccess)
    }

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
        it("should fetch temperature from server", function () {
            expect(jasmine.Ajax.requests.mostRecent().url).toEqual("/api/temperature");
        });
    });

    describe("when rendered", function () {
        beforeEach(function () {
            fakeAjax(22);
        });

        beforeEach(function () {
            widget.render();
        })

        it("should display temperature as '22 C", function () {
            expect($container.find('.temperature-widget').size()).toEqual(1);
            expect($container.find('.temperature-widget').text()).toEqual('22 C');
        });

        it("should contain a refresh button", function () {
            expect($container.find('button.temperature-refresh').size()).toEqual(1);
        });

    });

    describe("when refreshed button is clicked", function () {
        beforeEach(function () {
            fakeAjax(5);
            $container.find('button.temperature-refresh').click();
        });

        it("should update temperature", function () {
            expect($container.find('.temperature-widget').text()).toEqual('5 C');
        });
    });


});



















