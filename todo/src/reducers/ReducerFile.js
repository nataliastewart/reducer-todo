// export const initialList = [
//   {
//     name: "Learn about reducers",
//     completed: false,
//     id: 3892987589,
//   },
//   {
//     name: "Study React",
//     completed: false,
//     id: 3892987590,
//   },
//   {
//     name: "Read about Redux",
//     completed: false,
//     id: 3892987591,
//   },
// ];

// //action objects are pieces of data that descrive an event that just occurred in the UI
// //EVENT:click on the item to toggle completed(textDecoration: "line-through") {type: "TOGGLE_COMPLETED" }
// //STATE: {completed : false}
// //EXPECTED RESULT:  { completed: true }

// export const reducer = (state, action) => {
//   //   switch (action.type) {
//   //     case "TOGGLE_COMPLETED":
//   //       return {
//   //         ...state,
//   //         completed: !state.completed,
//   //       };
//   switch (action.type) {
//     case "ADD_ITEM":
//       return {
//         ...state,
//         name: action.payload,
//         id: Date.now(),
//         completed: false,
//       };

//     default:
//       return state; //( completed: true)
//   }
// };
