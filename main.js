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
			  variantColor: "green"
		},
		{     variantId: 2235,
              variantColor: "blue"
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
	
	    ]
	},

})