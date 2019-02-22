var app = new Vue({
	el: '#app',
	
	data: {
		product: 'Socks',
		image: './assets/vmSocks-green-onWhite.jpg',
		inStock: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		// inventory:8
		variants: [
			{
			  variantId:2234,
			  variantColor: "green",
			  variantImage: './assets/vmSocks-green-onWhite.jpg',
		},
		{     variantId: 2235,
			  variantColor: "blue",
			  variantImage:'./assets/vmSocks-blue-onWhite.jpg'
		}
	
	   ],

	   sizes:[{
		      sizeId: 2333,
		      dimensions: "small:8-12",
			 	 
			},
			{  
			   sizeId: 2334,
			   dimensions: "medium:19 - 23",
			},
			{   sizeId: 2335,
				dimensions: "large:24- 28",
			},
		  ],
		  cart: 0
		  
	},
      methods: {
		  addToCart(){
			  this.cart +=1
		  },
		  updateProduct(variantImage){
			  this.image = variantImage
		  },
		  removeFromCart(){
			  this.cart -=1
		  }
	  }
})