import moment from "moment";


export const display=()=>{
    console.log("This is file of All function!")
}

export const captilize = (name: string) => {
    let nameCap = name
      .split(" ")
      .map((ele) => ele[0].toLocaleUpperCase() + ele.slice(1))
      .join(" ");
    return nameCap;
  };

  export const getTime=(date:Date)=>{
    return moment(date).format('LT'); 
  }

