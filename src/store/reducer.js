const initialState = {
  data1: {
    title: "Building Application in react and flux",
    author: "Cory House",
    category: "javascript",
    length: "20:08",
  },
  data2: {
    title: "Clean code:writing code for humans",
    author: "Cory House",
    category: "software practice",
    length: "12:09",
  },
  data3: {
    title: "Architecting Applications for the Real World",
    author: "Cory House",
    category: "Software Architecture",
    length: "10:65",
  },
  data4: {
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    author: "Cory House",
    category: "career",
    length: "12:56",
  },
  color: [
    ["data1", false],
    ["data2", false],
    ["data3", false],
    ["data4", false],
  ],
  buttons: false,
  count: 5,
};
function reducer(state = initialState, action) {
  let colors = state.color;
  if (action.type === "submit") {
    colors.push(["data" + state.count, false]);
    console.log(colors);
    return {
      ...state,
      count: state.count + 1,
      ["data" + state.count]: action.value,
      buttons: false,
    };
  }
  if (action.type === "show") {
    let present = false;
    let arr = colors.map((ele) => {
      if (ele[0] == action.key) {
        present = true;
      }
      ele[1] = false;
      if (ele[0] === action.key) {
        ele[1] = true;
      }
      return ele;
    });
    console.log(arr);
    if (state.newdata === undefined) {
      return { ...state, newdata: action.arr, buttons: true };
    } else {
      let arr1 = Object.values(action.arr)[0];
      let arr2 = Object.values(state.newdata)[0];
      if (arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
        let temp = state;
        delete temp["newdata"];
        return { ...temp, buttons: false };
      } else {
        return { ...state, newdata: action.arr, buttons: true };
      }
    }
  }
  if (action.type === "editform") {
    let arr = colors.map((ele) => {
      ele[1] = false;
      return ele;
    });
    return { ...state, [action.key]: action.value, buttons: false, color: arr };
  }
  if (action.type === "delete") {
    let temp = state;
    delete temp[action.key];
    return { ...temp, buttons: false };
  }
  if (action.type === "cancle") {
    return { ...state, buttons: false };
  }
  return state;
}
export default reducer;
