export class CircleColor {
  id: number;
  size: number;
  color1: string;
  color2: string;
  color3: string;
  upTime: number;
  constTime: number;
  downTime: number;
  speed: number;

  static fromJson(json:string): CircleColor {
    const colorObj = JSON.parse(json)
    const circleColor = new CircleColor()

    circleColor.id = colorObj.id || 0;
    circleColor.size = colorObj.size || 0;
    circleColor.color1 = colorObj.color1 || '';
    circleColor.color2 = colorObj.color2 || '';
    circleColor.color3 = colorObj.color3 || '';
    circleColor.upTime = colorObj.upTime || 0;
    circleColor.constTime = colorObj.constTime || 0;
    circleColor.downTime = colorObj.downTime || 0;
    circleColor.speed = colorObj.speed || 0;

    return circleColor
  }

  toJson(): string {
    const jsonObj = {};

    jsonObj['id'] = this.id;
    jsonObj['size'] = this.size;
    jsonObj['color1'] = this.color1;
    jsonObj['color2'] = this.color2;
    jsonObj['color3'] = this.color3;
    jsonObj['upTime'] = this.upTime;
    jsonObj['constTime'] = this.constTime;
    jsonObj['downTime'] = this.downTime;
    jsonObj['speed'] = this.speed;

    return JSON.stringify(jsonObj);
  }
}
