export const CA = "0x163efb16aad59ae214956dbf2b9f7ef880005559";

export const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "UserBonus",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_upline",
        "type": "address"
      }
    ],
    "name": "preRegister",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "userData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "directRefs",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "multiLevelRef",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "teamSize",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

  
//   [
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_user",
//         type: "address",
//       },
//     ],
//     name: "UserBonus",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     name: "isRegistered",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_upline",
//         type: "address",
//       },
//     ],
//     name: "preRegister",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "userAddress",
//         type: "address",
//       },
//     ],
//     name: "userData",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "directRefs",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256[]",
//         name: "multiLevelRef",
//         type: "uint256[]",
//       },
//       {
//         internalType: "uint256",
//         name: "teamSize",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];
