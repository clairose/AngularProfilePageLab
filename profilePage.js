"use strict";
{
    let profPage={
        templateUrl: "profilePage.html",
        controller: function(userservice) {
            const vm = this;

            vm.user = userservice.getUser();

        }

    }

    profPage.$inject = ["userservice"];

    angular 
        .module("profapp")
        .component("profPage", profPage)
}