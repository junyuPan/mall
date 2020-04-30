import axios from 'axios'
  export function request(config,success,faillure){

    // -----------------
    //  1.创建实例 四种方案
    // -----------------
    // //   方案四.创建实例   传参数 config 利用 axios.create 返回类型是promise
    const instance = axios.create({
        baseURL:"http://123.207.32.32:8000",
        timeout:5000
    })
     // -----------------
    //   2.拦截器 Interceptor
    // -----------------
    instance.interceptors.request.use(config=>{
        //请求成功  
        console.log("请求成功"+config);
        return config;
        
    },err=>{
        //请求失败
        console.log(err);
    })
    instance.interceptors.response.use(res=>{
        //响应成功
        console.log("响应成功"+res);
        return res.data;
    },err=>{
        //响应失败
        console.log(err);
        
    })

      // -----------------
    //   3.请求网咯
    // -----------------
    return instance(config)
    //方案三  创建实例 传参数 config 用promise
    // new Promise((resolve,reject)=>{
    //     const instance = axios.create({
    //         baseURL:"http://123.207.32.32:80",
    //         timeout:5000
    //     });
    //     instance(config)
    //     .then( res => {resolve(res)})
    //     .catch( err =>{reject(res)})
    // })
    //方案二 创建实例 传参数 config(对象)
    //   const instance = axios.create({
    //       baseURL:"http://123.207.32.32:80",
    //       timeout:5000
    //   })
    //   instance(config.baseurl)
    //   .then(res=>{
    //     config.success(res)
    //   })
    //   .catch(err=>{
    //     config.faillure(err)
    //   })

    //方案一 创建实例 传 （config，success，faillure）
    //   const instance = axios.create({
    //       baseURL:"http://123.207.32.32:80",
    //       timeout:5000
    //   })
    //   instance(config)
    //   .then(res=>{
    //     success(res)
    //   })
    //   .catch(err=>{
    //     faillure(err)
    //   })

   

  }
  export function request1(config,success,faillure){

    // -----------------
    //  1.创建实例 四种方案
    // -----------------
    // //   方案四.创建实例   传参数 config 利用 axios.create 返回类型是promise
    const instance = axios.create({
        baseURL:"https://application.mingchetech.com/v1.0/",
        timeout:5000,
        headers:{
            authToken:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaW5nQ2hlIiwiZXhwIjoxNTg4MjgxODM4LCJ1c2VySWQiOjIwMTkwNDE5NzA4NDkyLCJicmFuZElkIjo0MTYsInBob25lIjoiMTgyMjAzOTIwNzYiLCJyb2xlSWQiOjF9.tkaI-J9QMl_fgmZnXdfR9fVVkpkjfC19UbOGFVKWCcwUflIG_jOEeRVCts2KHWtwbCvPOh-5rHVHpwp6Hzw_tA"
        },
    })
     // -----------------
    //   2.拦截器 Interceptor
    // -----------------
    instance.interceptors.request.use(config=>{
        //请求成功  
        console.log("请求成功"+config);
        return config;
        
    },err=>{
        //请求失败
        console.log(err);
    })
    instance.interceptors.response.use(res=>{
        //响应成功
        console.log("响应成功"+res);
        return res.data;
    },err=>{
        //响应失败
        console.log(err);
        
    })

      // -----------------
    //   3.请求网咯
    // -----------------
    return instance(config)
    //方案三  创建实例 传参数 config 用promise
    // new Promise((resolve,reject)=>{
    //     const instance = axios.create({
    //         baseURL:"http://123.207.32.32:80",
    //         timeout:5000
    //     });
    //     instance(config)
    //     .then( res => {resolve(res)})
    //     .catch( err =>{reject(res)})
    // })
    //方案二 创建实例 传参数 config(对象)
    //   const instance = axios.create({
    //       baseURL:"http://123.207.32.32:80",
    //       timeout:5000
    //   })
    //   instance(config.baseurl)
    //   .then(res=>{
    //     config.success(res)
    //   })
    //   .catch(err=>{
    //     config.faillure(err)
    //   })

    //方案一 创建实例 传 （config，success，faillure）
    //   const instance = axios.create({
    //       baseURL:"http://123.207.32.32:80",
    //       timeout:5000
    //   })
    //   instance(config)
    //   .then(res=>{
    //     success(res)
    //   })
    //   .catch(err=>{
    //     faillure(err)
    //   })

   

  }