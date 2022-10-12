$(document).ready(function (){
	if ($('.mid_animtaion').length > 0){
		let app = new PIXI.Application({
			width: innerWidth,
			height: innerHeight,
			antialias: false,
			//backgroundColor: 0x0,
			transparent: true,
			autoResize: true,
		});



		let speed = 10;
		let containerWidth = innerWidth * 0.2;
		let circleAmount = 2;

		if (containerWidth < 300) containerWidth = 300;
		if (containerWidth > 1000) containerWidth = 1000;

		window.addEventListener('resize', resize);
		function resize() {
			const parent = app.view.parentNode;
			app.renderer.resize(parent.clientWidth, parent.clientHeight);
			containerWidth = innerWidth * 0.2;
			if (containerWidth < 300) containerWidth = 300;
			if (containerWidth > 1000) containerWidth = 1000;
		}


		const texture = PIXI.Texture.from('images/circle1.png');
		const texture2 = PIXI.Texture.from('images/circle2.png');

		document.querySelector(`.mid_animtaion`).appendChild(app.view);

		const parent = app.view.parentNode;
		app.renderer.resize(parent.clientWidth, parent.clientHeight);

		const container = new PIXI.Container();
		app.stage.addChild(container);

		container.pivot.x = containerWidth / 2;
		container.pivot.y = containerWidth / 2;

		container.minX = Math.trunc(app.screen.width * 0.35);
		container.maxX = Math.trunc(app.screen.width * 0.5);
		container.minY = Math.trunc(app.screen.height * 0.35);
		container.maxY = Math.trunc(app.screen.height * 0.45);

		container.x = app.screen.width * 0.45;
		container.y = app.screen.height * 0.4;

		container.x2 = newMax(container.x, app.screen.width / 2, container.minX, container.maxX);
		container.y2 = newMax(container.y, app.screen.height / 2, container.minY, container.maxY);

		for (let i = 0; i < circleAmount; i++) {
			let x = Math.trunc(Math.random() * containerWidth);
			let y = Math.trunc(Math.random() * containerWidth);
			let radius = Math.random() * containerWidth * 3 + containerWidth*1.5;

			const circle = new PIXI.Sprite(texture);
			circle.anchor.set(0.5);

			circle.blendMode = PIXI.BLEND_MODES.SCREEN;
			circle.x = x;
			circle.y = y;
			circle.x2 = newCircleCoordinates(circle.x);
			circle.y2 = y;
			container.addChild(circle);
			circle.width = radius
			circle.height = circle.width * 0.95
			circle.radius2 = Math.random() * containerWidth * 3 + containerWidth*1.5;
		}


		app.ticker.add((delta) => {
			let xDir = (container.x <= container.x2) ? 1 : -1;
			let yDir = (container.y <= container.y2) ? 1 : -1;
			container.x += 0.1 * speed * xDir * delta;
			container.y += 0.1 * speed * yDir * delta;

			if ( (xDir === 1 && container.x >= container.x2) || (xDir === -1 && container.x <= container.x2))
				container.x2 = newMax(container.x, app.screen.width / 2, container.minX, container.maxX);
			if ( (yDir === 1 && container.y >= container.y2) || (yDir === -1 && container.y <= container.y2) )
				container.y2 = newMax(container.y, app.screen.height / 2, container.minY, container.maxY);

			container.children.forEach(function (circle, i){
				let radiusDir = (circle.width <= circle.radius2) ? 1 : -1;
				circle.width += 0.05 * speed * radiusDir * delta;
				circle.height = circle.width * 0.95;
				if ( (radiusDir === 1 && circle.width >= circle.radius2) ||
					(radiusDir === -1 && circle.width <= circle.radius2) ){
					circle.radius2 = Math.random() * containerWidth * 3 + containerWidth*1.5;
				}

				let xDir = (circle.x <= circle.x2) ? 1 : -1;
				let yDir = (circle.y <= circle.y2) ? 1 : -1;
				circle.x += 0.1 * speed * xDir * delta;
				circle.y += 0.1 * speed * yDir * delta;
				if ( (xDir === 1 && circle.x >= containerWidth) ||
					(xDir === -1 && circle.x <= 0) ||
					(yDir === 1 && circle.y >= containerWidth) ||
					(yDir === -1 && circle.y <= 0) ){
					circle.x2 = newCircleCoordinates(circle.x);
					circle.y2 = newCircleCoordinates(circle.y);
				}
			});

			container.rotation -= 0.0005 * speed * delta;
		});


		//////////


		const container2 = new PIXI.Container();
		app.stage.addChild(container2);

		container2.pivot.x = containerWidth / 2;
		container2.pivot.y = containerWidth / 2;

		container2.minX = Math.trunc(app.screen.width * 0.4);
		container2.maxX = Math.trunc(app.screen.width * 0.6);
		container2.minY = Math.trunc(app.screen.height * 0.4);
		container2.maxY = Math.trunc(app.screen.height * 0.5);

		container2.x = app.screen.width * 0.5;
		container2.y = app.screen.height * 0.45;

		container2.x2 = newMax(container2.x, app.screen.width / 2, container2.minX, container2.maxX);
		container2.y2 = newMax(container2.y, app.screen.height / 2, container2.minY, container2.maxY);


		for (let i = 0; i < circleAmount; i++) {
			let x = Math.trunc(Math.random() * containerWidth);
			let y = Math.trunc(Math.random() * containerWidth);
			let radius = Math.random() * containerWidth * 3 + containerWidth*1.5;

			const circle = new PIXI.Sprite(texture2);
			circle.blendMode = PIXI.BLEND_MODES.SCREEN;
			circle.anchor.set(0.5);
			circle.x = x;
			circle.y = y;
			circle.x2 = newCircleCoordinates(circle.x);
			circle.y2 = y;
			container2.addChild(circle);
			circle.width = radius
			circle.height = circle.width * 0.95
			circle.radius2 = Math.random() * containerWidth * 3 + containerWidth*1.5;
		}

		app.ticker.add((delta) => {
			let xDir = (container2.x <= container2.x2) ? 1 : -1;
			let yDir = (container2.y <= container2.y2) ? 1 : -1;
			container2.x += 0.1 * speed * xDir * delta;
			container2.y += 0.1 * speed * yDir * delta;

			if ( (xDir === 1 && container2.x >= container2.x2) || (xDir === -1 && container2.x <= container2.x2))
				container2.x2 = newMax(container2.x, app.screen.width / 2, container2.minX, container2.maxX);
			if ( (yDir === 1 && container2.y >= container2.y2) || (yDir === -1 && container2.y <= container2.y2) )
				container2.y2 = newMax(container2.y, app.screen.height / 2, container2.minY, container2.maxY);

			container2.children.forEach(function (circle, i){
				let radiusDir = (circle.width <= circle.radius2) ? 1 : -1;
				circle.width += 0.05 * speed * radiusDir * delta;
				circle.height = circle.width * 0.9;
				if ( (radiusDir === 1 && circle.width >= circle.radius2) ||
					(radiusDir === -1 && circle.width <= circle.radius2) ){
					circle.radius2 = Math.random() * containerWidth * 3 + containerWidth*1.5;
				}

				let xDir = (circle.x <= circle.x2) ? 1 : -1;
				let yDir = (circle.y <= circle.y2) ? 1 : -1;
				circle.x += 0.1 * speed * xDir * delta;
				circle.y += 0.1 * speed * yDir * delta;
				if ( (xDir === 1 && circle.x >= containerWidth) ||
					(xDir === -1 && circle.x <= 0) ||
					(yDir === 1 && circle.y >= containerWidth) ||
					(yDir === -1 && circle.y <= 0) ){
					circle.x2 = newCircleCoordinates(circle.x);
					circle.y2 = newCircleCoordinates(circle.y);
				}
			});

			container2.rotation -= 0.0005 * speed * delta;
		});




		function newMax(from, shift, min, max){
			let target = Math.trunc(from + (Math.round(Math.random()) * 2 - 1) * Math.random() * shift);
			if (target > max) target = max;
			if (target < min) target = min;
			return target;
		}

		function newCircleCoordinates(from){
			let target = 0;
			if (from <= 0) {
				target = containerWidth + Math.random() * containerWidth * 3;
			} else if(from >= containerWidth) {
				target = Math.random() * containerWidth * 3 * -1;
			} else {
				target = Math.random() * containerWidth * 3 * (Math.round(Math.random()) * 2 - 1);
				if (target > 0 && target < containerWidth ) target + containerWidth;
			}
			return target;
		}
	}
});

