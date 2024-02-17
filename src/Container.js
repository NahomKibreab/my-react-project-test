import { SubComponent } from "./SubComponent";

export function Container({ headerName }) {
  return (
    <div>
      <h1>{`Hello ${headerName}`}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        ipsam a dolorum at aperiam tempore reprehenderit odio, magni praesentium
        dolore autem nostrum quia ad vero quam ullam possimus soluta. Minus.
      </p>
      <SubComponent message={headerName} />
    </div>
  );
}
