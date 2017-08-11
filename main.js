// // Runs when HTML file is loaded
// $('#user-email').on('input',function() {
//         var email = $('#user-email').val();
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
// });
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
						$routeProvider
						.when('/',{
							templateUrl: 'pages/login.html',
							controller: 'loginController'
						})
						.when('/home',{
							templateUrl: 'pages/main.html',
							controller: 'mainController'
						})
						.when('/restaurant/:id',{
							templateUrl: 'pages/restaurant.html',
							controller : 'restaurantController'
						})
						.when('/vegfinder',{
							templateUrl:'pages/veg-or-not.html',
							controller : 'veganController'
						})
	})
foodieApp.controller('mainController',function($scope) {
	 $scope.restaurants = [{
	  					id:'1',
	          	name: 'Farzi Cafe',
	          	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	          	location: 'Connaught Place',
	          	category: 'Casual Dining, Bar',
	          	vote: '4.2',
	          	cuisines: 'Modern Indian',
	          	cost: '2200',
	          	hours: '12 Noon to 1 AM (Mon-Sun)',
	          	image: 'https://images.pexels.com/photos/156697/pexels-photo-156697.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
	          },

	          {
	 					id:'2',
	            name: 'Jalapenos',
	          	address: 'Mussourie Diversion, Pacific Hills,Rajpur Road, Rajpur',
	          	location: 'Dehradun',
	          	category: 'CAFÉ',
	          	vote: '4.3',
	          	cuisines: 'Mexican',
	          	cost: '500',
	          	hours: '11 AM to 11 PM (Mon-Sun)',
	          	image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?h=350&auto=compress&cs=tinysrgb'
	          },

	          {
	 					id:'3',
	            name: 'TBistro',
	          	address: 'Saina Inn, 3, Old Survey Road, Karanpur',
	          	location: 'Dehradun',
	          	category: 'Quick Bite',
	          	vote: '3.9',
	          	cuisines: 'North Indian, Chinese',
	          	cost: '550',
	          	hours: '10:30 AM to 11 PM (Mon-Sun)',
	          	image: 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?h=350&auto=compress&cs=tinysrgb'
	          },

	          {
	 					id:'4',
	            name: 'Anandam',
	          	address: '69, Krishna Tower, Rajpur Road, Hathibarkala',
	          	location: 'Dehradun',
	          	category: 'CASUAL DINING,SWEET SHOP',
	          	vote: '4.0',
	          	cuisines: 'Desserts, North Indian, Chinese, South Indian, Fast Food,',
	          	cost: '650',
	          	hours: '10 AM to 11 PM (Mon-Sun)',
	          	image: 'https://images.pexels.com/photos/509796/pexels-photo-509796.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
	          },

	          {
	 					id:'5',
	            name: 'Ellora\'s Bakers and Confectioners',
	          	address: '25, Rajpur Road',
	          	location: 'Dehradun',
	          	category: 'BAKERY',
	          	vote: '4.0',
	          	cuisines: 'Bakery',
	          	cost: '700',
	          	hours: '8 AM to 11 PM (Mon-Sun)',
	          	image: 'https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?h=350&auto=compress&cs=tinysrgb'
	          },

	          {
	 					id:'6',
	            name: 'Prez Restaurant',
	          	address: 'Hotel President, 6, Astley Hall, Rajpur Road,',
	          	location: 'Dehradun',
	          	category: 'CASUAL DINING',
	          	vote: '4.0',
	          	cuisines: 'North Indian, Chinese, Continental',
	          	cost: '900',
	          	hours: '8 AM 3PM ,7 PM to 11 PM (Mon-Sun)',
	          	image: 'http://media.cntraveler.com/photos/58b8403729b30663827aa019/master/w_1024,c_limit/best-restaurants-london-brawn-2017.jpg'
	          },

	          {
	 					id:'7',
	            name: 'The Terrace - Four Points by Sheraton Dehradun',
	          	address: '152/4, Rajpur Road, Jakhan, Dehradun',
	          	location: 'Dehradun',
	          	category: 'FINE DINING',
	          	vote: '4.0',
	          	cuisines: 'North Indian, Chinese, Italian',
	          	cost: '1500',
	          	hours: '24 hrs (Mon-Sun)',
	          	image: 'http://media.cntraveler.com/photos/589a20129b67416638b3bf3a/master/w_1024,c_limit/best-restaurants-london-dinner-2017.jpg'
	          },

	          {
							id:'8',
	            name: 'Barbeque Nation',
	          	address: 'Chaudhary Plaza, Rajpur Road, Rajpur, Dehradun',
	          	location: 'Dehradun',
	          	category: ' Casual Dining',
	          	vote: '4.0',
	          	cuisines: 'North Indian, Mediterranean, Asian, Chinese',
	          	cost: '1600',
	          	hours: '12 Noon to 3 PM, 6:30 PM to 11 PM',
	          	image: 'https://images.pexels.com/photos/279835/pexels-photo-279835.jpeg?h=350&auto=compress&cs=tinysrgb'
	          }
	        ]
});
foodieApp.controller('loginController',function($scope,$location) {
					$scope.goToHome = function() {
									// console.log('Do Something');
									$location.url('home');
					}
});
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
					$scope.restaurantId = $routeParams.id;


					// var restaurants = [{$scope.restaurant = restaurants[$routeParams.id - 1] ]};
					var restaurants = [{
										id:'1',
				           	name: 'Farzi Cafe',
				           	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
				           	location: 'Connaught Place',
				           	category: 'Casual Dining, Bar',
				           	vote: '4.2',
				           	cuisines: 'Modern Indian',
				           	cost: '2200',
				           	hours: '12 Noon to 1 AM (Mon-Sun)',
										bestDish: {
											name: 'Corn Pizza',
											image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
										},
				           	image: 'https://images.pexels.com/photos/156697/pexels-photo-156697.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
				           },

				           {
										 id:'2',
				             name: 'Jalapenos',
				           	address: 'Mussourie Diversion, Pacific Hills,Rajpur Road, Rajpur',
				           	location: 'Dehradun',
				           	category: 'CAFÉ',
				           	vote: '4.3',
				           	cuisines: 'Mexican',
				           	cost: '500',
				           	hours: '11 AM to 11 PM (Mon-Sun)',
										bestDish: {
											name: 'Dark Chocolate',
											image: 'https://us.123rf.com/450wm/maxsheb/maxsheb1605/maxsheb160500688/56317371-meat-apptizer.jpg?ver=6'
										},
				           	image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?h=350&auto=compress&cs=tinysrgb'
				           },

				           {
										 id:'3',
				             name: 'TBistro',
				           	address: 'Saina Inn, 3, Old Survey Road, Karanpur',
				           	location: 'Dehradun',
				           	category: 'Quick Bite',
				           	vote: '3.9',
				           	cuisines: 'North Indian, Chinese',
				           	cost: '550',
				           	hours: '10:30 AM to 11 PM (Mon-Sun)',
										bestDish: {
											name: 'Baingan bharta',
											image: 'http://www.vegrecipesofindia.com/wp-content/uploads/2010/08/baingan-bharta-recipe15.jpg'
										},
				           	image: 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?h=350&auto=compress&cs=tinysrgb'
				           },

				           {
										 id:'4',
				             name: 'Anandam',
				           	address: '69, Krishna Tower, Rajpur Road, Hathibarkala',
				           	location: 'Dehradun',
				           	category: 'CASUAL DINING,SWEET SHOP',
				           	vote: '4.0',
				           	cuisines: 'Desserts, North Indian, Chinese, South Indian, Fast Food,',
				           	cost: '650',
				           	hours: '10 AM to 11 PM (Mon-Sun)',
										bestDish: {
											name: ' Dosa',
											image: 'https://thumbs.dreamstime.com/b/dosa-sambhar-chutney-23037321.jpg'
										},
				           	image: 'https://images.pexels.com/photos/509796/pexels-photo-509796.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
				           },

				           {
										 id:'5',
				             name: 'Ellora\'s Bakers and Confectioners',
				           	address: '25, Rajpur Road',
				           	location: 'Dehradun',
				           	category: 'BAKERY',
				           	vote: '4.0',
				           	cuisines: 'Bakery',
				           	cost: '700',
				           	hours: '8 AM to 11 PM (Mon-Sun)',
										bestDish: {
											name: 'Papri chaat',
											image: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-11/enhanced/webdr01/18/17/enhanced-buzz-orig-10832-1384815584-28.jpg'
										},
				           	image: 'https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?h=350&auto=compress&cs=tinysrgb'
				           },

				           {
										 id:'6',
				             name: 'Prez Restaurant',
				           	address: 'Hotel President, 6, Astley Hall, Rajpur Road,',
				           	location: 'Dehradun',
				           	category: 'CASUAL DINING',
				           	vote: '4.0',
				           	cuisines: 'North Indian, Chinese, Continental',
				           	cost: '900',
				           	hours: '8 AM 3PM ,7 PM to 11 PM (Mon-Sun)',
										bestDish: {
											name: 'Kebab',
											image: 'http://i.ndtvimg.com/i/2014-12/palak-kebab_600x350_81419583027.jpg'
										},
				           	image: 'http://media.cntraveler.com/photos/58b8403729b30663827aa019/master/w_1024,c_limit/best-restaurants-london-brawn-2017.jpg'
				           },

				           {
										 id:'7',
				             name: 'The Terrace - Four Points by Sheraton Dehradun',
				           	address: '152/4, Rajpur Road, Jakhan, Dehradun',
				           	location: 'Dehradun',
				           	category: 'FINE DINING',
				           	vote: '4.0',
				           	cuisines: 'North Indian, Chinese, Italian',
				           	cost: '1500',
				           	hours: '24 hrs (Mon-Sun)',
										bestDish: {
											name: 'Tandoori chicken',
											image: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-11/enhanced/webdr05/19/10/enhanced-buzz-26230-1384874274-25.jpg'
										},
				           	image: 'http://media.cntraveler.com/photos/589a20129b67416638b3bf3a/master/w_1024,c_limit/best-restaurants-london-dinner-2017.jpg'
				           },

				           {
										 id:'8',
				             name: 'Barbeque Nation',
				           	address: 'Chaudhary Plaza, Rajpur Road, Rajpur, Dehradun',
				           	location: 'Dehradun',
				           	category: ' Casual Dining',
				           	vote: '4.0',
				           	cuisines: 'North Indian, Mediterranean, Asian, Chinese',
				           	cost: '1600',
				           	hours: '12 Noon to 3 PM, 6:30 PM to 11 PM',
										bestDish: {
											name: 'Hara Bhara',
											image: 'http://www.vegrecipesofindia.com/wp-content/uploads/2013/01/hara-bhara-kabab-recipe.jpg'
										},
				           	image: 'https://images.pexels.com/photos/279835/pexels-photo-279835.jpeg?h=350&auto=compress&cs=tinysrgb'
				           }
				       ]
							 $scope.ingredients = [];
							 $scope.ingredients1 = [];
							 $scope.restaurant = restaurants[$routeParams.id - 1];
							 $scope.nonVeg=['beef','meat','egg','fish','escargots','seafood','chicken','barbecue','trout','fillet','mackerel','smoked fish','salmon','pork','steak','sirloin','becon','ham'];
							 var nonveg=0;
							 $scope.FindFoodType = function(url) {

									 var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
											$http({
																 'method': 'POST',
																 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
																 'headers': {
																	 'Authorization': 'Key e1029657175c41d7b74c010a5d47127f',
																	 'Content-Type': 'application/json'
										 					 		},
										 							'data': data
											}).then(function (response) {
												var ingredients1 = response.data.outputs[0].data.concepts;
														 // console.log(ingredients);
														 for (var i = 0 ; i < ingredients1.length ; i++) {

															 if(ingredients1[i].value > 0.75)
															 {
																 $scope.ingredients1.push(ingredients1[i].name);
																 for(var j=0 ; j<$scope.nonVeg.length ; j++){
																			 if($scope.ingredients1[i] == $scope.nonVeg[j])
																			 {
																				 nonveg=1;
																				 break;
																			 }
																			 else {
																				 nonveg=0;
																			 }
																 }
															}
																//  console.log($scope.ingredients[i]);
																 if(nonveg == 1){
																		//  console.log('food is nonveg');
																		$('.bestImage').addClass('NonVegDish');
																		$('.notice').addClass('nonvegText');
																		$('.notice').text('It\'s a NonVegDish');

																		 break;
																 }
																 else {
																		 $('.bestImage').addClass('VegDish');
																		 $('.notice').text('It\'s a VegDish' );
																		 $('.notice').addClass('vegText');
																 }


														 }

											 }, function (xhr) {
												//  console.log(xhr);
												console.log('error wala function');
										});
										$('.bestImage').removeClass('hidden');
										$('.ingredients').addClass('hidden');
										$('.notice').removeClass('hidden');


									}
									$scope.getIngredients = function(url) {

	 									 var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	 											$http({
	 																 'method': 'POST',
	 																 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	 																 'headers': {
	 																	 'Authorization': 'Key e1029657175c41d7b74c010a5d47127f',
	 																	 'Content-Type': 'application/json'
	 										 					 		},
	 										 							'data': data
	 											}).then(function (response) {
	 												var ingredients = response.data.outputs[0].data.concepts;
	 														 // console.log(ingredients);
	 														 for (var i =0;i < ingredients.length;i++) {

	 																 $scope.ingredients.push(ingredients[i].name);
																	//  console.log(ingredients[i].name);

	 														 }
																// 	$('bestImage').addClass('hidden');
																// $('ingredients').removeClass('hidden');
																console.log('success wala');
	 											 }, function (xhr) {
	 												 console.log(xhr);
														console.log('error wala function');
	 										});
											$('.bestImage').addClass('hidden');
            								$('.ingredients').removeClass('hidden');
											$('.notice').addClass('hidden');
	 									}
})
	// foodieApp.controller('veganController',function($scope) {
	// 						$scope.FindFoodType = function(url) {
	// 							console.log(url);
	// 							$scope.nonVeg=['beef','meat','egg','fish','escargots','seafood','chicken','barbecue','trout','fillet','mackerel','smoked fish','salmon','pork','steak','sirloin','becon','ham'];
	//
	// 								var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	// 								 $http({
	// 														'method' : 'POST',
	// 														'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	// 														'headers': {
	// 															'Authorization': 'Key e1029657175c41d7b74c010a5d47127f',
	// 															'Content-Type': 'application/json'
	// 														 },
	// 														 'data': data
	// 								 }).then(function (response) {
	// 											 var ingredients = response.data.outputs[0].data.concepts;
	//
	// 											 // console.log(ingredients);
	// 											 for (var i =0;i < ingredients.length;i++) {
	//
	// 												 if(ingredients[i].value > 0.75)
	// 												 {
	// 													 $scope.ingredients.push(ingredients[i].name);
	// 													 for(var j=0;j<$scope.nonVeg.length;j++){
	// 																 if($scope.ingredients[i] == $scope.nonVeg[j])
	// 																 {
	// 																	 nonveg=1;
	// 																	 break;
	// 																	 // console.log('food is nonveg');
	// 																 }
	// 																 else {
	// 																	 nonveg=0;
	// 																	 // console.log('food is veg');
	// 																 }
	// 													 }
	// 													 if(nonveg == 1){
	// 															 console.log('food is nonveg');
	// 															 break;
	// 													 }
	// 													 else {
	// 															 console.log('food is veg');
	// 													 }
	// 												 }
	// 											 }
	//
	// 											 //
	// 											 // console.log(ingredients);
	// 									}, function (xhr) {
	// 										console.log(xhr);
	// 							 });
	// 						 }
	// })
