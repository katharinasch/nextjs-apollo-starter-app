export const Card = ({ title, source, text, selected, onChange}) => {
  const mode = selected ? 'border-red-300 border-8' : 'border-gray-400'
  return (
    <div className={["relative p-8 bg-white border-gray-200 rounded-2xl shadow-sm flex flex-col border-2", mode].join(' ')} selected={selected} onClick={onChange}>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-10">{title}</h3>
        <img src={source} alt={text} />
      </div>
    </div>
  );
}

Card.defaultProps = {
  selected: false,
  title: 'I am default Card',
  text: 'I am default Text',
  source: 'https://images.unsplash.com/photo-1599488400918-5f5f96b3f463?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
};