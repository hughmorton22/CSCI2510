export default{
    name: "ExplosionScene",
    children:[
        {
            prefabName: "Explosion"
        },
        {
            gameObject:{
                name:"ChangeScene",
                components:[
                    {
                        name: "ChangeSceneComponent"
                    }
                ]
            }
        }
    ]
}