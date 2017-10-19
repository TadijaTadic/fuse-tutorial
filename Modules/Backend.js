var baseUrl = "https://my-json-server.typicode.com/TadijaTadic/fake-server/hikes/";
//var baseUrl = "http://localhost:3000/hikes/";

function getHikes() {
    return new Promise(function(resolve, reject) {
        fetch(baseUrl)
            .then(function(response) { return response.json(); })
            .then(function(data) { resolve(data); })
            .catch(function(error) { reject(error); });
    });
}

function updateHikes(id, name, location, distance, rating, comments) {
    return new Promise(function(resolve, reject) {
        var newObject = {
            "id": id,
            "name": name,
            "location": location,
            "distance": distance,
            "rating": rating,
            "comments": comments
        };
        var options = {
            method: "PUT",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(newObject)
        };
        var url = baseUrl + id;
        fetch(url, options)
            .then(function(response) { return response.json(); })
            .then(function(data) { resolve(); })
            .catch(function(error) { reject(error); });
    });
}

module.exports = {
    getHikes: getHikes,
    updateHikes: updateHikes
};
