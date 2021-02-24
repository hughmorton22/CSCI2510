import SceneManager from "./scene-manager.js"
import Scene from "./scene.js"

class GameObject {

    static deserialize(definition){
        let toReturn = new GameObject();
        toReturn.name = definition.name;
        
        for(let componentDef of definition.components){
            let componentClass = SceneManager.allComponents.find(i=>i.name == componentDef.name);
            let component = new componentClass(toReturn, ...componentDef.args || []);
            toReturn.components.push(component);
        }
        if(definition.children){
            for(let childDefinition of definition.children) {
                let child = Scene.deserializeObject(childDefinition);
                toReturn.children.push(child);
            }
        }
        

        return toReturn;
    }

    constructor() {
        this.x = 0;
        this.y = 0;
        this.height = 50;
        this.width = 50;
        this.direction = "E";
        this.components = [];
        this.children = [];
    }

    draw(ctx) {
        for(let component of this.components){
            if(component.draw){
                component.draw(ctx);
            }
            for(let child of this.children) {
                child.draw(ctx);
            }
        }
    }

    update(){
        for(let component of this.components){
            if(component.update){
                component.update();
            }
            for(let child of this.children) {
                child.update();
            }
        }
    }
}

export default GameObject;