const VehicleData = {
  AB12CDE: {
    make: "Nissan",
    model: "Leaf",
    guides: [
      {
        id: "527052930",
        title: "Locating the inflation kit",
        media: {
          type: "image",
          source: "https://i.ytimg.com/vi/49OJvd-k_Yk/maxresdefault.jpg",
        },
        text: "The inflation kit can be found in the nearside cubbyhole in the boot.",
      },
      {
        id: "527052520",
        title: "Charging the car",
        media: {
          type: "video",
          videoId: "KYYVhjZ14lY",
        },
        text: "The charging port unlocking button is located to the right of the steering wheel, or the bottom button on the remote fob. The left socket is a CHAdeMO connector for rapid charging, and the right side is for a Type 2 plug.",
      },
    ],
    assist: "07",
    specSheetURL: "https://www.example.com/ss.pdf",

    faqs: [
      {
        id: "2137348",
        question: "How many miles will I get on the motorway?",
        answer: "If driving at 70, 120 miles. If driving at 60, 150 miles.",
      },
      {
        id: "42898",
        question: "How many miles will I get around town?",
        answer:
          "If driving using the foot brake, 150. If slowing using regenerative braking, 180.",
      },
      {
        id: "213712455348",
        question: "How long does it take to charge to 100%?",
        answer:
          "Starting at 0%, it takes 1 hour with a CHAdeMO charger at 50kW, or 14 hours on a 3 pin plug charger. 6 hours for a 7kW charging point.",
      },
      {
        id: "590596",
        question: "Why do electric cars suck?",
        answer:
          "They don't, they just don't drive like dino-juice powered vehicles. Learn to use regenerative braking and stick the car in B-mode.",
      },
    ],
    questionnaires: [
      {
        id: "qn1234",
        title: "Handover Feedback",
        "date-start": "03-10-2022",
        "date-finish": "19-10-2022",
        questions: [
          {
            id: 1220,
            type: "text",
            qText:
              "Did you catch the name of the driver?\r\nIf yes, what was it?",
            threshold: ["no"],
          },
          {
            id: 1221,
            type: "multi",
            qText: "How would you describe the driver's clothing?",
            options: [
              { text: "Overdressed", value: 5 }, // Tux
              { text: "Smart", value: 4 }, // Suit
              { text: "Smart-casual", value: 3 }, // Collared Shirt
              { text: "Casual", value: 2 }, // polo shirt
              { text: "Surfer", value: 1 }, // t-shirt & Flip-flops
            ],
            threshold: [3, 4],
          },
          {
            id: 1222,
            type: "range",
            rangeMin: 1,
            rangeMax: 10,
            step: 1,
            defaultValue: 5,
            qText: "Out of 10, how would you rate your handover experience?",
            threshold: 6,
          },
        ],
      },
      {
        id: "qn1235",
        title: "Day 1 review",
        "date-start": "04-10-2022",
        "date-finish": "19-10-2022",
        questions: [
          {
            id: 1234,
            type: "boolean",
            qText: "Did you drive the car today?",
            options: ["Yes", "No"],
            threshold: [],
          },
          {
            id: 1235,
            type: "multi",
            reliesOn: [1234, true],
            qText: "Roughly how many miles did you drive?",
            options: [
              { text: "Under 50", value: 50 },
              { text: "51 - 100", value: 100 },
              { text: "101 - 150", value: 150 },
              { text: "151 - 200", value: 200 },
              { text: "More than 200", value: 300 },
            ],
            threshold: [],
          },
          {
            id: 1236,
            type: "text",
            qText: "What are your initial impressions of the vehicle?",
            threshold: [],
          },
        ],
      },
    ],
  },
};

export { VehicleData };
