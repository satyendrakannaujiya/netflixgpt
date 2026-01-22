export const validateLoginInfo = (email, password, name, isLogin) => {
        let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        let isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
        let isNameValid = /^.{4,}$/.test(name);
        if(!isNameValid && !isLogin) return "User name is not valid";
        if(!isValidEmail) return "Email id is not valid";
        if(!isValidPassword) return "Password is not valid";
        return null;
}