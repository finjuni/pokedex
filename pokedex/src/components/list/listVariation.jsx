import VariationCard from "../card/variationCard"

export default function ListVariation(props) {
  if (!props) return [];

  const listVariation = props.props;

  return (
    <div className="w-full h-full max-sm:justify-center flex flex-wrap gap-7">
      {listVariation.map((item) => (
          <VariationCard key={item.id} props={item} />
      ))}
    </div>
  );
}
