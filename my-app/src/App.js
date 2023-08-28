import axios from "axios";
import React from "react";

const baseURL = "http://20.244.56.144/numbers/odd";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
    setPost(response.data);
    });
  }, []);



  if (!post) return null;

  const uniqueNumbers = new Set(post.numbers);


const uniqueNumbersArray = [...uniqueNumbers];

console.log(uniqueNumbersArray);

const uniqueNumbersObject = {};

uniqueNumbersArray.forEach((number, index) => {
  uniqueNumbersObject[`${index + 1}`] = number;
});

console.log(uniqueNumbersObject);

return (
    <div>
   {JSON.stringify(uniqueNumbersObject)} 
    </div>
  );
}