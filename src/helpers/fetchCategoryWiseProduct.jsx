// import SummaryApi from "../Common/Url"

import SummaryApi from "../Common/Url"

const fetchCategoryWiseProduct = async(category) =>{
    

    const response = await fetch(SummaryApi.categoryWiseProduct.url , {
        method : SummaryApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
             category 
        })
    }) 
    const dataResponse = await response.json()
    // console.log(dataResponse);
    return dataResponse;

}

export default fetchCategoryWiseProduct