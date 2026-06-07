import './CategorySection.css';

function CategorySection({ title, description, cta, onAction, image }) {
  return (
    <article className="category-card card-shadow">
      <div className="category-copy">
        <span>{title}</span>
        <p>{description}</p>
        <button className="category-action" onClick={onAction}>
          {cta}
        </button>
      </div>
      <div className="category-image">
        <img src={image} alt={title} />
      </div>
    </article>
  );
}

export default CategorySection;
