 import './LoginForm.css';
 import { useState } from 'react';
 
 function LoginForm() {

        const [showPassword, setShowPassword] = useState(false);

        function switchShowPassword() {
            setShowPassword(!showPassword);

        }

        return (
          <>
            <div>
              <input placeholder="Email" className="email-input" />
            </div>
            <div>
              <input placeholder="Password" type={showPassword ? "text" : "password"} className="password-input" />
              <button onClick={switchShowPassword}>Show</button>
            </div>
            <button className="login-button">Login</button>
            <button className="signup-button">Sign up</button>
          </>
        );
      }

      export default LoginForm