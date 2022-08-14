const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Santhosh", lastName: "Gangadevulla" };
const greet = "hello";
const className = "greeting";
const rootElement = document.getElementById("root");
const element = (
  <div>
    <h1 className={className}>
      {greet},{fullName(user)}!!!
    </h1>
    <p>Good to see you:)!!</p>
  </div>
);
ReactDOM.render(element, rootElement);
