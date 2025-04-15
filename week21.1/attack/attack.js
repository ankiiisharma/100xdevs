const axios = require('axios');

for(let i=0;i<100000;i++){
    axios.post('http://localhost:3000/reset-password', {
        email: 'ankit@gmail.com',
        password: i,
        newPassword: "123456"
    }
    ).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(error);
    });
}