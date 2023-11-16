const bcrypt = require('bcrypt');

const hasPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw,12);
    console.log(hash);
}

const login = async(pw, hasedPw) => {
    const result = await bcrypt.compare(pw, hasedPw);
    if (result) {
        console.log('Logged in!');
    } else {
        console.log('error');
    }
}

// hasPassword('monkey');

login('monkey', '$2b$12$Gt64r1cJ4deABpmdlemq4uS/V/JZsFFWjS1ObHPTQhE/gkZdSi34C')