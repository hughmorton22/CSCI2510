import Component from "../../engine/component.js"
class DrawComponent extends Component{

    static name = "DrawComponent";

    constructor(gameObject, colorIn){
        super(gameObject);
        this.color = colorIn;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.gameObject.x, this.gameObject.y, this.gameObject.width, this.gameObject.height);

    }
}

export default DrawComponent;