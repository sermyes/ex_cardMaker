import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    GithubAuthProvider 
} from "firebase/auth";

class AuthService {
    constructor() {
        this.firebaseAuth = getAuth();
        this.googleAuthProvider = new GoogleAuthProvider();
        this.githubAuthProvider = new GithubAuthProvider();
    }

    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    getProvider(providerName){
        switch (providerName) {
            case 'Google':
                return this.googleAuthProvider;
            case 'Github':
                return this.githubAuthProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}

export default AuthService;