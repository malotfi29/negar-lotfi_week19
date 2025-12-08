import app from "./httpService";

export function getAllProducts(page,searchName=""){
    return app.get(`/products?page=${page}&limit=8&name=${searchName}`).then(data=>data.data)
}

export function addProduct(data){
    return app.post("/products",data).then(data=>data.data)
}

export function deleteProduct(id){
    return app.delete(`/products/${id}`).then(data=>data.data)
}

export function editProduct(id,data){
    return app.put(`/products/${id}`,data).then(data=>data.data)
}