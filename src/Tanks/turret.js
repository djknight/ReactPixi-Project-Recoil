Adding the turret
Next up: the turret. A bit of refactoring is in order. The spaceship's body and turret have to move in unison and need to be positioned relative to each other. To achieve this, we'll create a PIXI.Container and put both our spaceship's body and the turret inside.

Let's change the code in the spaceship's constructor to:

// container
this._container = new PIXI.Container();
this._container.position.x = x;
this._container.position.y = y;

// body
this._body = PIXI.Sprite.fromImage("/img/spaceship-body.png");
this._body.tint = this.tint;
this._body.anchor.x = 0.5;
this._body.anchor.y = 0.5;
this._container.addChild(this._body);

// turret
this._turret = PIXI.Sprite.fromImage("/img/spaceship-turret.png");
this._turret.tint = this.tint;

// the turret doesn't sit exactly at the center of the ship
this._turret.anchor.x = 0.45;
this._turret.anchor.y = 0.6;

// the turret's pivotin point is towards the bottom of the sprite
this._turret.pivot.x = 1;
this._turret.pivot.y = 7;
this._container.addChild(this._turret);

// add the whole container to the stage
this._game.stage.addChild(this._container);