import { HomeButton as Button } from "@/utils/styles/homeButton";
import { fetchPokemonList } from "@/api-endpoints/fetchPokemonList";
import { HomeIcon } from "@/public/static/images/HomeIcon";
import { HomeButtonProps } from "@/utils/models/homeButton.model";

const HomeButton = (props: HomeButtonProps) => {
  const handleClick = async () => {
    props.setLoading(true);
    props.setDisabledButton(true);
    props.setPokemonList(await fetchPokemonList(1));
    props.setLoading(false);
    props.setDisabledButton(false);
    props.setPage(1);
    props.setShowPagination(true);
  };

  return (
    <Button
      className="button"
      onClick={handleClick}
      disabled={props.disabledButton ? true : false}
    >
      <HomeIcon />
      Reset
    </Button>
  );
};

export default HomeButton;
