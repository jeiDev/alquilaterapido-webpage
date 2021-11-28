
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { SocialTypeAuthEnumI } from '~/interfaces/auth/auth.enum';
import accountProvider from '~/providers/account.provider';
import firebase from '~/providers/firebase.provider';

const { auth } = firebase;

export default {
    socials: [
        {
            title: "facebook",
            signin: async function () {
                if (typeof this.callback === "function") {
                    const res = await auth.social.facebook();
                    if(res.error) return this.callback({error: res.error});

                    const response = await accountProvider.signinSocial(res.token, SocialTypeAuthEnumI.FACEBOOK)
                    this.callback(response);
                }
            },
            signup: async function () {
                if (typeof this.callback === "function") {
                    const res = await auth.social.facebook();
                    if(res.error) return this.callback({error: res.error});

                    const response = await accountProvider.signupSocial(res.token, SocialTypeAuthEnumI.FACEBOOK, res.payload)
                    this.callback(response);
                }
            },
            icon: faFacebookSquare,
        },
        {
            title: "google",
            signin: async function () {
                if (typeof this.callback === "function") {
                    const res = await auth.social.google();
                    if(res.error) return this.callback({error: res.error});

                    const response = await accountProvider.signinSocial(res.token, SocialTypeAuthEnumI.GOOGLE)
                    this.callback(response);
                }
            },
            signup: async function () {
                if (typeof this.callback === "function") {
                    const res = await auth.social.google();
                    if(res.error) return this.callback({error: res.error});

                    const response = await accountProvider.signupSocial(res.token, SocialTypeAuthEnumI.GOOGLE, res.payload)
                    this.callback(response);
                }
            },
            icon: faGoogle,
        }
    ]
}