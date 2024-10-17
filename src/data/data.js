const products = [
    {
      id:"Df2121",
      name:"remera roja",
      description:"",
      stock: 10,
      price:2000,
      image: "/img/remeraroja.png",
      category: "remeras" 
    },
  
    {
      id:"Gt2233",
      name:"Gorra kike",
      description:"",
      stock: 2,
      price:1000,
      image: "/img/gorranike.jfif",
      category: "gorras" 
    },
  
    {
      id:"Mn22121",
      name:"zapatillas verdes",
      description:"",
      stock: 5,
      price:5000,
      image: "/img/zapatillaverde.jfif",
      category: "zapatillas" 
    }
  ]
  
  const getProducts = ()=> {

    return new Promise((resolve, reject)=> {

setTimeout(()=>{
resolve(products)

}, 2000)


    }) 


  }

  export { getProducts } //haremos el export de esta forma porque quizás esta archivo tendrá muchos productos para cargar