 //"use strict";
 window.onload = function () {
 	shangeSizeImage_tseries("#containerGallery", 10);
 	window.onresize = function(){shangeSizeImage_tseries("#containerGallery", 10)};
 };


function shangeSizeImage_tseries(containerGallery, gap = 0) {
	console.log('android');
	let marginForImage = gap;//расстояние между изображениями
	let galleryBlock = document.querySelector(containerGallery);
 	galleryBlock.style.marginLeft= "auto";
	
	let elements = document.querySelectorAll(containerGallery+" .item");// проход по каждому блоку с изображениями
	Array.prototype.forEach.call(elements, function(items, i){
		let galleryWidth = Math.round(getComputedStyle(galleryBlock, null).width.replace("px", ""));// ширина блока галлереи
		
		// вот тут надо подумать над мобильностью
 /*		if (window.screen.width < 900) {
 			galleryWidth = 900;
 			return;
 		}*/

		let allWidths = 0;
 		let theLitlestHeight = 1000000;
 		let countImage = 0;
		let imgOne = items.querySelectorAll("img");
		Array.prototype.forEach.call(imgOne, function(itemsImg, i){// поиск наименьшей высоты у изображения
			console.log(itemsImg);
			let thisImgWidth = itemsImg.width;
 			if (theLitlestHeight > (itemsImg.naturalHeight)) {
 				theLitlestHeight = (itemsImg.naturalHeight);
 			}
 			countImage++;
 		});
 		var newWidth = galleryWidth - ((countImage - 1) * marginForImage);
 		galleryWidth = countImage === 1 ? galleryWidth : newWidth;
    
 		var needWidth = 0;
		Array.prototype.forEach.call(imgOne, function(itemsImg, i){// приводим соотношение сторон к общей высоте
			let naturalHeight = itemsImg.naturalHeight;
			let naturalWidth = itemsImg.naturalWidth;
 			needWidth = naturalWidth / ( naturalHeight / theLitlestHeight ); //формула соотношения сторон
			itemsImg.style.width= needWidth+"px";
			itemsImg.style.height= theLitlestHeight+"px";
 		});
 		Array.prototype.forEach.call(imgOne, function(itemsImg, i){// сумма ширины изображений в ряду
			let thisImgWidth = itemsImg.width;
 			allWidths = allWidths + thisImgWidth;
 		});

 		//высчитываем и устанавливаем новое соотношение сторон в зависимости от ширины блока галлереи
 		//allWidths -=20; //запас в 20 пикселей, увеличивать или уменьшать в зависимости о необходимого расстоянии между изображениями // я хз зачем это))) 

 		var newHightforAll = theLitlestHeight / (allWidths / galleryWidth);

		Array.prototype.forEach.call(imgOne, function(itemsImg, i){// приводим соотношение к нужной
 			needWidth = (itemsImg.width) / (itemsImg.height / newHightforAll); //формула соотношения сторон
			itemsImg.style.width= needWidth+"px";
			itemsImg.style.height= newHightforAll+"px";
 		});

 	});
 }
