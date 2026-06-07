import './Sidebar.css';

const categoryTree = [
  {
    title: 'SHOP',
    value: 'all',
    children: [
      { title: 'All Categories', value: 'all' },
      { title: 'New Arrivals', value: 'new-arrival' },
      { title: 'Best Sellers', value: 'best-seller' },
      { title: 'Sale', value: 'sale' },
    ],
  },
  {
    title: 'Tops',
    value: 'Tops',
    children: [
      { title: 'Tees', value: 'Tees' },
      { title: 'Hoodies', value: 'Hoodies' },
      { title: 'Shirts', value: 'Shirts' },
    ],
  },
  {
    title: 'Bottoms',
    value: 'Bottoms',
    children: [
      { title: 'Jeans', value: 'Jeans' },
      { title: 'Cargo', value: 'Cargo' },
      { title: 'Joggers', value: 'Joggers' },
    ],
  },
  {
    title: 'Outerwear',
    value: 'Outerwear',
    children: [
      { title: 'Jackets', value: 'Jackets' },
      { title: 'Varsity', value: 'Varsity' },
    ],
  },
  {
    title: 'Footwear',
    value: 'Footwear',
    children: [{ title: 'Sneakers', value: 'Sneakers' }],
  },
  {
    title: 'Accessories',
    value: 'Accessories',
    children: [
      { title: 'Caps', value: 'Caps' },
      { title: 'Bags', value: 'Bags' },
      { title: 'Jewelry', value: 'Jewelry' },
    ],
  },
];

function Sidebar({ selectedCategory, onSelectCategory }) {
  return (
    <aside className="sidebar-shell">
      {categoryTree.map((group) => (
        <div key={group.title} className="sidebar-group">
          <p className="sidebar-group-title">{group.title}</p>
          <div className="sidebar-group-items">
            {group.children.map((item) => (
              <button
                key={item.value}
                className={selectedCategory === item.value ? 'active' : ''}
                onClick={() => onSelectCategory(item.value)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
