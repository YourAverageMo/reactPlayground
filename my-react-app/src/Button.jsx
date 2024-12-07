function Button() {
  const handleClick=(e) => e.target.textContent = "Ouch";
  

  return <button onClick={handleClick}>Click Me! 🤣</button>;
}

export default Button;
