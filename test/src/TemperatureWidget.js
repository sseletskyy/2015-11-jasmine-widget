function TemperatureWidget($parent) {
    var self = this;
    this.$parent = $parent;

    this.getData = function(){
        self.dataPromise = $.get('/api/temperature');
    }
    this.render = function () {

        this.dataPromise.done(function (data) {
            $widgetDiv = '<div><div class="temperature-widget">' +
            data.temperature +
            ' C</div>' +
            '<button class="temperature-refresh"></button></div>';

            $widgetDiv = $($widgetDiv).on("click", "button", function () {
                $.proxy(self.update(), self);
            });

            self.$parent.html($widgetDiv);

        });
    };

    this.update = function(){
        self.getData();
        self.render();
    }

    this.update();
}

