"use strict";
{
    function userservice() {
        let user = {
            name: "Grant Chirpus",
            contact: "Grant@grandcircus.co",
            bio: "I run the universe, get on my level"
        }
        const getUser = function () {
            return user;
        };
        const setUser = function (newUser) {
            user = newUser;
        };

        return {
            getUser,
            setUser
        }
    }
    angular
        .module("profapp")
        .factory("userservice", userservice);
}