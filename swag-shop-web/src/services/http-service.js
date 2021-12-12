import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        //1
        var promise = new Promise((resolve, reject) => {
            //2
            fetch('http://localhost:3004/product')
                .then(res => {
                    //4
                    resolve(res.json());
                })
        });
        //3
        return promise;
    }
}
export default HttpService;