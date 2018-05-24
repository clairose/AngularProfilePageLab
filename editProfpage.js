"use strict";
{
    let editPage = {
        templateUrl: "editpage.html",
        controller: function (userservice) {
            const vm = this;
            vm.user = userservice.getUser();

            vm.update = function () {
                userservice.setUser(vm.user);
            }
        }
    }


    editPage.$inject = ["userservice"];

    angular
        .module("profapp")
        .component("editPage", editPage)
}