import type { JSX } from "react";
interface headerProps {
  title: string,
  subtitle: string
}
interface FooterProps {
  copy: string,
  year: number
}
interface ListProps {
  items: string[]
}
interface ListItemProp {
  text: string;
}
const items = ["item1", "item2", "item3", "item4", "item5"]
const Header = ({ title, subtitle }: headerProps) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};
const ListItem = (props: ListItemProp) => {
  return <li>{props.text}</li>
}
const List = ({ items }: ListProps): JSX.Element => {

  return (
    <>
      <ul>
        {items.map((item) =>
          <ListItem text={item} key={item} />)
        }
      </ul>
    </>
  )
}

const Footer = ({ copy, year }: FooterProps): JSX.Element => {
  return (
    <>
      &#169; {copy}  ({year})
    </>
  )
}

function App() {
  return (
    <>
      <Header title="Labo 2" subtitle="Basic Components" />
      <List items={items} />
      <Footer copy="Jonas Verbruggen" year={2026} />
    </>
  );
}

export default App;
