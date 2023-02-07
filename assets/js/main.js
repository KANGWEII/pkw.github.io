var inview = new Waypoint.Inview({
    element: $('#first-waypoint')[0],
    entered: function(direction) {
        $('#first-waypoint').addClass('start');
    },
    exited: function(direction) {
        $('#first-waypoint').removeClass('start');
    }
})

var inview = new Waypoint.Inview({
    element: $('#second-waypoint')[0],
    entered: function(direction) {
        $('#second-waypoint').addClass('start');
    },
    exited: function(direction) {
        $('#second-waypoint').removeClass('start');
    }
})

var inview = new Waypoint.Inview({
    element: $('#third-waypoint')[0],
    entered: function(direction) {
        $('#third-waypoint').addClass('start');
    },
    exited: function(direction) {
        $('#third-waypoint').removeClass('start');
    }
})

var inview = new Waypoint.Inview({
    element: $('#fourth-waypoint')[0],
    entered: function(direction) {
        $('#fourth-waypoint').addClass('start');
    },
    exited: function(direction) {
        $('#fourth-waypoint').removeClass('start');
    }
})

var inview = new Waypoint.Inview({
    element: $('#fifth-waypoint')[0],
    entered: function(direction) {
        $('#fifth-waypoint').addClass('start');
    },
    exited: function(direction) {
        $('#fifth-waypoint').removeClass('start');
    }
})