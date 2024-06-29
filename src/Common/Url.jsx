

const backendDomain = "http://localhost:8080"

const SummaryApi = {
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : "POST",
     },
     signIn : {
        url : `${backendDomain}/api/signin`,
        method : "POST"
     },
     current_user : {
      url : `${backendDomain}/api/user-details`,
      method : "get"
     },
     userLogout : {
      url : `${backendDomain}/api/userLogout`,
      method : "get"
     },
     allUsers : {
      url : `${backendDomain}/api/all-user`,
      method : "get"
     },
     updateUser : {
      url : `${backendDomain}/api/update-user`,
      method : "post"

     },
     uploadProduct : {
      url : `${backendDomain}/api/upload-product`,
      method : "post"
      
     },
     allProduct : {
      url : `${backendDomain}/api/get-product`,
      method : 'get'
     },
     updateProduct : {
      url : `${backendDomain}/api/update-product`,
      method : "put"
     },
     categoryProduct : {
      url : `${backendDomain}/api/get-categoryProduct`,
      method : 'get'
     },
     //9:46
     categoryWiseProduct: {
      url: `${backendDomain}/api/category-product`,
      method: 'post',
    },
    productDetails : {
        url : `http://localhost:8080/api/product-details`,
        method : 'post'
    }
   




}
export default SummaryApi