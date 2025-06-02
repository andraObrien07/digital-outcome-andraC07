export const user = $state({
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    farms: [
        {
            nameFarm: "",
            farmSize: "",
            herds: [
                {
                    herdNames: "",
                    herdSize: "",
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
            ]

        }
    ],

});

