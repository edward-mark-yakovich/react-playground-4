import pageCSS from "./pageCSS";
import React, {useCallback, MouseEvent} from "react";
import Nav from '@components/pageTemplates/nav/Nav';
import LoaderIcon from '@components/base/loader-icon/LoaderIcon';

type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

type PageProps = WithChildren<{
  nameId: string;
  dataLoading: boolean
}>

const Page = ({
  nameId,
  dataLoading = false,
  children
}: PageProps) => {
  const onItemClick = useCallback((ev: MouseEvent) => {
    // console.log('You clicked - ', event.currentTarget);
  }, [nameId]); // 'handleClick' callback is memoized by useCallback(). As long as 'nameId' is the same, useCallback() returns the same function object.

  return (
    <div data-component="Page" className={pageCSS.page_wrap}>

      <LoaderIcon init={dataLoading} />

      <Nav nameId={nameId} handleClick={onItemClick} />

      {children}

    </div>
  );
};

export default Page;