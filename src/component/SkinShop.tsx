export const SkinShop = ({
  setShopOpened,
}: {
  setShopOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="left-over">
      <div
        className="edit-button"
        onClick={() => {
          setShopOpened((state) => !state);
        }}
      >
        Back to Main
      </div>
    </div>
  );
};
