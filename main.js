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
          	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
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
          	image: 'https://images.pexels.com/photos/503175/pexels-photo-503175.jpeg?h=350&auto=compress&cs=tinysrgb'
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
          	image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?h=350&auto=compress&cs=tinysrgb'
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
          	image: 'https://images.pexels.com/photos/110813/pexels-photo-110813.jpeg?h=350&auto=compress&cs=tinysrgb'
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
				           	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
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
											image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
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
										// bestDish: {
										// 	name: 'Corn Pizza',
										// 	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
										// },
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
										// bestDish: {
										// 	name: 'Corn Pizza',
										// 	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
										// },
				           	image: 'https://images.pexels.com/photos/503175/pexels-photo-503175.jpeg?h=350&auto=compress&cs=tinysrgb'
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
										// bestDish: {
										// 	name: 'Corn Pizza',
										// 	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
										// },
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
											image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
										},
				           	image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?h=350&auto=compress&cs=tinysrgb'
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
										// bestDish: {
										// 	name: 'Corn Pizza',
										// 	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
										// },
				           	image: 'https://images.pexels.com/photos/110813/pexels-photo-110813.jpeg?h=350&auto=compress&cs=tinysrgb'
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
											image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
										},
				           	image: 'https://images.pexels.com/photos/279835/pexels-photo-279835.jpeg?h=350&auto=compress&cs=tinysrgb'
				           }
				       ]
							 $scope.restaurant = restaurants[$routeParams.id - 1];

							 $scope.getIngredients = function(url) {
								//  console.log(url);
									 var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
											$http({
										 'method': 'POST',
										 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
										 'headers': {
											 'Authorization': 'KEY e1029657175c41d7b74c010a5d47127f',
											 'Content-Type': 'application/json'
										 },
										 'data': data,
											}).then(function (response) {
												console.log(response);
											 var ingredients = response.data.outputs[0].data.concepts;
											 console.log(ingredients);
											 var list = '';
													 for (var i = 0;i < ingredients.length;i++) {
														 list += '<div class="ingredient">' + ingredients[i].name + '</div>'
													 }
													//  $('.ingredients').html(list);
													 console.log('success wala function')
											 }, function (xhr) {
												 console.log('error wala function');
										});
									}

								// $scope.ingredients = [];
	})
