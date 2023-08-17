function BaseAccordianButton() {
  return <div className="collapse bg-white text-black m-4 border border-black">
    <input type="checkbox" />
    <div className="collapse-title text-xl font-medium">
      Click me to show/hide content
    </div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>;
}

export default BaseAccordianButton;
