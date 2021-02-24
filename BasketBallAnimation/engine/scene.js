import GameObject from "./game-object.js"
import SceneManager from "./scene-manager.js"

class Scene {

    static deserializeObject(objectDefinition) {
        let gameObject;
        let gameObjectDefinition;
        if(objectDefinition.prefabName){
            gameObjectDefinition = SceneManager.allPrefabs.find(i=>i.name == objectDefinition.prefabName);
            if(objectDefinition.children) {
                gameObjectDefinition.children = objectDefinition.children;
            }
        }
        else{
            gameObjectDefinition = objectDefinition.gameObject;
        }

        gameObject = GameObject.deserialize(gameObjectDefinition);
        gameObject.x = objectDefinition.x || 0;
        gameObject.y = objectDefinition.y || 0;
        gameObject.height = objectDefinition.height || 50;
        gameObject.width = objectDefinition.width || 50;
        gameObject.direction = objectDefinition.direction || "";
        return gameObject;
    }

    static deserialize(sceneDef){
        let toReturn = new Scene();
        toReturn.name = sceneDef.name;
        for(let childDef of sceneDef.children){

            let gameObject = this.deserializeObject(childDef);
            toReturn.children.push(gameObject);
        }

        return toReturn;
    }

    constructor(){
        this.children = [];
    }

    getChildren(){
        return this.children;
    }

    addChild(newChild){
        this.children.push(newChild);
    }

    draw(ctx){
        for(let child of this.children) {
            child.draw(ctx);
        }
    }

    update(){
        for(let child of this.children) {
            child.update();
        }
    }

}

export default Scene;