import { component$, Slot, useStyles$, useTask$ } from '@builder.io/qwik';
import { useContent } from '@builder.io/qwik-city';
import menuStyles from './menu.css?inline'
export default component$(() => {
  useStyles$(menuStyles);
  const { menu } = useContent();
  
  useTask$(()=> {
    console.log(menu?.text);
    console.log(menu)
    menu?.items?.map((item: any) => {
      console.log(item)
      console.log(item?.items?.length)
      if (item?.items?.length > 1) {
        console.log(item.items)
      } else {
        console.log('Principal', item.text, item.items[0].href)
      }
    })
  })
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
      <br />
      <Slot />
    </>
  );
});
