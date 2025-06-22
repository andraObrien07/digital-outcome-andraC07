export const user = $state({
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,


})


export const landScape = $state({
    nameFarm: "",
    farmSize: "",
    herds: [
        {
            herdName: "",
            herdSize: "",
            lameCows: "",
        }
    ],
    paddocks: [
        {
            paddockNumber: "",
            paddockSize: "",
            paddockLandscape: "",
            lastGrazed: "",
            lastFertilised: "",
            currentPlantation: "",
        }
    ],
    fertHistory: [
        {
            paddockNumber: "",
            amount: "",
        }
    ]

})
