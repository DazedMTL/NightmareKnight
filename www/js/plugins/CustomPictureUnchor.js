Sprite_Picture.prototype.updateOrigin = function () {
  var picture = this.picture();
  switch (picture.origin()) {
    case 0:
      this.anchor.x = 0;
      this.anchor.y = 0;
      break;
    case 1:
      this.anchor.x = 0.5;
      this.anchor.y = 0.5;
      break;
    case 2:
      this.anchor.x = 0;
      this.anchor.y = 1;
      break;
    case 3:
      this.anchor.x = 1;
      this.anchor.y = 1;
      break;
    case 4:
      this.anchor.x = 1;
      this.anchor.y = 0;
      break;
  }
};
