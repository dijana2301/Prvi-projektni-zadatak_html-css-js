function initMap() {
    var location = { lat: 44.774760, lng: 17.199860 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

}


