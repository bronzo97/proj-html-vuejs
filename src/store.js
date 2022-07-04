// store.js
import Vue from "vue";

export const state = Vue.observable({
	// conterrà tutte le proprietà che vorremmo aggiungere
	data: {
        headerListItem: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            team: 'team',
            blog: 'blog',
            icon: '<i class="fa-regular fa-user"></i>',
            button: '<div class="btn btn-primary">Get in touch</div>',

        },
    },
});