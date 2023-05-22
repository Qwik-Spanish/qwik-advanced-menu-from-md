import { component$, Slot, useStyles$, useTask$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(`
  .menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .menu li a {
    text-decoration: none;
    color: #000;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .menu li a:hover {
    background-color: #f0f0f0;
  }
  `)
  const { menu } = useContent();
  return (
    <>
      <ul class="menu">
        {menu &&
          menu.items &&
          menu.items.map((item) => (
            <li>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
      </ul>
      <Slot />
    </>
  );
});
