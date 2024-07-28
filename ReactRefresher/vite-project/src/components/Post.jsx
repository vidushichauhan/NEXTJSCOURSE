const names =["Vidushi","Rohan"];
export default function post() {
  const chosenNames = Math.random() > 0.5 ? names[0] : names[1]
  return (
    <div>
        <p>
        {chosenNames}
        </p>
    </div>
  )
}