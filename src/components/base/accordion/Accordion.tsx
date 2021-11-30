import accordionCSS from "./accordionCSS";
import React, {useState, useEffect, useRef, MouseEvent} from 'react';

type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

type AccordionProps = WithChildren<{
  id: string;
  drawerOpen?: boolean;
  triggerIcon?: string;
  triggerTitle: string;
}>

const Accordion = ({
  id,
  drawerOpen = false,
  triggerIcon = '',
  triggerTitle,
  children
}: AccordionProps) => {
  const accordionContentEl = useRef<HTMLDivElement>(null);
  
  const [isOpen, setOpen] = useState<boolean>(drawerOpen);
  const [height, setHeight] = useState<string>('0px');

  const toggleDrawer = (ev: MouseEvent) => {
    ev.preventDefault();

    setHeight(!isOpen ? `${accordionContentEl.current?.scrollHeight}px` : '0px');
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (drawerOpen) setHeight(`${accordionContentEl.current?.scrollHeight}px`);
  }, [drawerOpen]);

  return (
    <div id={`accordion--${id}`} data-component="Accordion" className={accordionCSS.accordion}>
      
      <div>
        <a
          href={`#${id}`}
          onClick={toggleDrawer}
          aria-owns={id}
          aria-expanded={isOpen}
        >
          <div>
            <h3>{triggerTitle}</h3>

            {triggerIcon &&
              <div>
                {triggerIcon}
              </div>
            }
          </div>
        </a>
      </div>

      <div ref={accordionContentEl} id={id} className={accordionCSS.accordion_drawer} style={{ maxHeight: `${height}` }}>
        <div>

          {children}

        </div>
      </div>

    </div>
  );
};

export default Accordion;
