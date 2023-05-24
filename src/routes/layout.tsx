import { component$, Slot, useStyles$ } from "@builder.io/qwik";
// 1 - Añadir ContentMenu
import { ContentMenu, useContent } from "@builder.io/qwik-city";
import menuStyles from "./menu.css?inline";
export default component$(() => {
  useStyles$(menuStyles);
  
  const { menu } = useContent();

  // 2.- Para definir si un enlace es interno /externo
  const isLocalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://') ? '_blank' : '_self'
  };
  
  // 3.- Estructura del menú
  return (
    <>
      <ul id="menu">
        {menu?.items?.map((item: ContentMenu) => {
          if (item?.items?.length === 1) { // Menús sin hijos
            return (
              <li class="parent">
                <a href={item.items[0].href} target={isLocalUrl(item.items[0].href || '')}>{item.text}</a>
              </li>
            );
          }
          return <li class="parent">
              <a href="#">{item.text}</a>
              <ul class="child">
                {
                  item?.items?.map((element: ContentMenu) => (
                    <li>
                      <a href={element.href || ''} target={isLocalUrl(element.href || '')}>{element.text || ''}</a>
                    </li>
                  ))
                }
              </ul>
            </li>;
        })}
      </ul>
      <br />
      <Slot />
    </>
  );
});