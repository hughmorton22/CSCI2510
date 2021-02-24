export default{
    name: "CourtScene",
    children:[
        {
            prefabName: "Basketball",
            x: 100,
            y: 500,
            direction: "EEE"
        },
        {
            prefabName: "TrashCan",
            x: 1200,
            y: 500,
            height: 140,
            width: 100
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