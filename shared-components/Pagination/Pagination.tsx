import { fetchPokemonList } from "@/api-endpoints/fetchPokemonList";
import { LeftArrow } from "@/public/static/images/LeftArrow";
import { RightArrow } from "@/public/static/images/RightArrow";
import { UsePaginationProps } from "@/utils/models/pagination.model";

import {
  Ellipsis,
  Pagination,
  PaginationButton,
} from "@/utils/styles/pagination";
import usePagination from "@mui/material/usePagination";

export default function UsePagination(props: UsePaginationProps) {
  const handleChange = async (e: React.ChangeEvent<unknown>, value: number) => {
    props.setPage(value);

    props.setLoading(true);
    props.setPokemonList(await fetchPokemonList(value));
    props.setLoading(false);

    window.scrollTo({
      top: props.searchBarRef.current.offsetTop - 56,
    });
  };

  const { items } = usePagination({
    count: 100,
    siblingCount: 0,
    page: props.page,
    onChange: handleChange,
  });

  return (
    <nav>
      <Pagination>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = <Ellipsis>...</Ellipsis>;
          } else if (type === "page") {
            children = (
              <PaginationButton {...item} selected={selected}>
                {page}
              </PaginationButton>
            );
          } else {
            children = (
              <PaginationButton
                {...item}
                navigation={
                  type === "previous" || type === "next" ? "true" : undefined
                }
              >
                {type === "previous" ? <LeftArrow /> : <RightArrow />}
              </PaginationButton>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </Pagination>
    </nav>
  );
}
