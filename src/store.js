// store.js
import Vue from "vue";

export const state = Vue.observable({
	// conterrà tutte le proprietà che vorremmo aggiungere
	data: {
        contacts: {
            phoneNumber: '+1 (305) 1234-5678',
            email: 'hello@example.com',
            location: 'Main Avenue, 987',
        },
        headerListItem: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            team: 'team',
            blog: 'blog',
            // icon: '<i class="fa-regular fa-user"></i>',
            // button: '<div class="btn btn-primary">Get in touch</div>',

        },
        footerListItems: {
            about: {
                TheCompany: 'The Company',
                Institutional: 'Institutional',
                SocialEvents: 'Social & Events',
                Innovation: 'Innmovation',
                Inviroment: 'Enviroment',
                technology: 'Tecnology'
            },
            services: {
                AuditAssurance: 'Audit & Assurance',
                FinancialAdvisory: 'Financial Advisory',
                AnalitycsMA: 'Analytics M&A',
                MiddleMarketing: 'Middle Marketing',
                LegalConsulting: 'Legal Consulting',
                RegulatoryRisk: 'Regulatory Risky',
            },
            support: {
                Responsibility: 'Responsibility',
                TermsOfUse: 'Terms of Use',
                AboutCookies: 'About Cookies',
                PrivacyPolicy: 'Privacy Policy',
                Accessibility: 'Accessibility',
                Information: 'Information',
            }
        }
    },
});