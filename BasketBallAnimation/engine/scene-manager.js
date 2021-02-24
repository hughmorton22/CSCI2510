import Scene from "./scene.js"

class SceneManager {
    static currentScene;

    static allComponents;
    static allPrefabs;
    static allScenes = [];

    static setCurrentScene(sceneName){
        if(this.currentScene && sceneName == this.currentScene.name) {
            return console.log("Please don't change the scene to itself");
        }
        let proposedDefinition = this.allScenes.find(i=>i.name == sceneName);
        if(!proposedDefinition) return console.error("Couldn't find scene " + sceneName);
        let proposedScene = Scene.deserialize(proposedDefinition, this.allComponents, this.allPrefabs);
        this.currentScene = proposedScene;
    }
}

export default SceneManager;