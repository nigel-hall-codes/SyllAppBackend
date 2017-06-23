/**
 * Created by Hallshit on 6/16/17.
 */
var theApp = angular.module('app',[]);



theApp.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.work = "Hello";
    $http.get('/api/').then(function (response) {
        console.log("it worked");
        console.log(response.data)
    })
    // To access data:  ---->   response.key
    $.ajax({
        method: 'POST',
        url: '/api/',
        data: {'num': 1}
    }).then(function (response) {
        console.log(response.num)
    })



}]);





var http = new XMLHttpRequest();
var url = "54.68.63.110/ajax/getUpcoming/";
var params = "text=fdjfdkjfiefe 06/21/2017 nk \n fdjhdjhf 07/11/17 \n";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);