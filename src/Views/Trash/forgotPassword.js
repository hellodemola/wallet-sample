import '../../Styles/Authscreens/signup.css';
import '../../Styles/Authscreens/forgot-password.css';

const ForgotPassword = () => {
    return (
        <div className="container">
        <div className="logo">
        <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8106 10.5907C12.681 6.902 13.9051 2.18687 17.5602 0L34.3952 29.2874L30.0333 36.9571L14.8106 10.5907ZM0.196289 7.50381C3.86165 5.38761 8.54852 6.64335 10.6649 10.3086L21.6232 29.2873L17.2259 37L0.196289 7.50381ZM29.9678 6.88521C29.14 6.88521 28.3634 7.28567 27.8834 7.96003C27.3106 8.76481 27.2522 9.82747 27.7335 10.6901L34.0605 22.0306L42.8047 6.88521L29.9678 6.88521Z" fill="#1F6AEC" />
                </svg>
        </div>
        <div className="main">
            <div>
                <h2>Forgot Password</h2>
                <p>Kindly enter your registered email to reset your password</p>
            </div>
            <div className="form-container">
                <form>
                    <div className="width">
                        <label for="email">Email Address</label>
                        <input type="email" placeholder="Kingsleyomin@letshego.com" required></input>
                    </div>
                    <div className="width">
                        <button type="submit">Recover Password</button>
                    </div>
                    <div>
                        <span>
                            <a href="#">Return to Log In</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
} 

export default ForgotPassword;