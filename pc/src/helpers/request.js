import history from '../history';
let handleJson = (data) => {
    return JSON.stringify(data);
};
let handleFormData = (data) => {
    let ret = new FormData();
    Object.keys(data).map(k => {
        ret.append(k, data[k]);
    });
    return ret;
};
function request({ url, method = 'POST', postType = 'json' ,data = {}, success = () => {}, fail = () => {}}) {
    if(!url){
        throw new Error('url参数不可缺省');
    }
    let xml = new XMLHttpRequest();
    xml.open(method, url);
    let postData ;
    switch (postType){
        case 'json':
            xml.setRequestHeader('Content-Type', 'application/json');
            postData = handleJson(data);
            break;
        case 'formdata':
            // xml.setRequestHeader('Content-Type', "application/vnd.ms-excel");
            postData = handleFormData(data);
            break;
        default:
            xml.setRequestHeader('Content-Type', 'application/json');
            postData = handleJson(data);
    }
    xml.onreadystatechange = () => {
        if(xml.readyState === 4){
            if(xml.status === 200){
                let data = JSON.parse(xml.responseText);
                let code = data.code;
                try{
                    if(code === undefined) throw new Error('code is not defined');
                }catch(e){
                    try{
                      data = JSON.parse(data);
                    }catch(e2){
                        console.error('返回的数据不符合json格式');
                        success(data);
                    }
                }
                if(parseInt(data.code) === 200){
                    success(data);
                }else{
                    if(data.code === 3001){
                        history.push('/login')
                    }else{
                        fail(data);
                    }
                }
            }else{
                alert('请求遇到了问题，请稍后再尝试');
            }
        }
    };
    xml.send(postData);
}
export default request;
