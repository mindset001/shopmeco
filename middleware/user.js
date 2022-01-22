export default function (context){
        const details = JSON.parse(localStorage.getItem('token'))
    return context.$axios.get('http://shopmeco-server.herokuapp.com/api/user', {
        headers: { Authtoken: details}
    }).then(res => {
        localStorage.setItem('detail', JSON.stringify(res.data))
    })


}