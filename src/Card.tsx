import { CardType } from "./types/cardTypes";
/**
 *
 * A simple card container with optional title and content.
 *
 * @param title- Optional title to display at the top of card
 * @param children - Content to be displayed inside the card
 */

const Card = ({ title, children }: CardType) => (
  <div className="bg-white text-center rounded-lg shadow p-6">
    {title && <h3 className="text-md  font-semibold mb-4">{title}</h3>}
    {children}
  </div>
);
export default Card;
