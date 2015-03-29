function TemperatureWidget($parent) {
    var self = this;
    this.dataPromise = $.get('/api/temperature');
    this.$parent = $parent;
    this.render = function() {

        this.dataPromise.done(function(data){
            $textDiv = '<div class="temperature-widget">' +
            data.temperature +
            ' C</div>' +
            '<button class="temperature-refresh"></button>';

            self.$parent.append($textDiv);

        });
    }
}

