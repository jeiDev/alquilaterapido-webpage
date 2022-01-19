import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { AuthSocialFirebaseReponseI } from '~/interfaces/provider/firebase.provider';

const firebase = {
    auth: {
        social: {
            signInWithPopup: (provider): Promise<AuthSocialFirebaseReponseI> => {
                return new Promise((resolve) => {
                    const auth = getAuth();
                    
                    signInWithPopup(auth, provider).then(async (result) => {
                        const credential = GoogleAuthProvider.credential(await result.user.getIdToken())
                        return resolve({token: credential.idToken, payload: result.user})
                    }).catch((error) => {
                        return resolve({error})
                    });
                    
                })
            },
    
    
            google: async function(): Promise<AuthSocialFirebaseReponseI> {
                const provider = new GoogleAuthProvider();
                const res = await this.signInWithPopup(provider);
                return Promise.resolve(res);
            },
    
            facebook: async function(): Promise<AuthSocialFirebaseReponseI> {
                const provider = new FacebookAuthProvider();
                const res = await this.signInWithPopup(provider);
                return Promise.resolve(res);
            }
        }
    }
}

export default firebase;