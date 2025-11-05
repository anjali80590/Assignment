import React, { useState } from "react";

const LaptopCustomizer = () => {
  const basePrice = 60000;

  const priceConfig = {
    processor: { i5: 0, i7: 10000, i9: 25000 },
    ram: { "8GB": 0, "16GB": 5000, "32GB": 12000 },
    storage: { "512GB SSD": 0, "1TB SSD": 8000, "2TB HDD": 5000 },
    color: { Silver: 0, Black: 2000, Blue: 3000 },
  };

  const [config, setConfig] = useState({
    processor: "i5",
    ram: "8GB",
    storage: "512GB SSD",
    color: "Silver",
    totalPrice: basePrice,
  });

  const [savedConfigs, setSavedConfigs] = useState([]);

  const calculatePrice = (newConfig) => {
    const processorPrice = priceConfig.processor[newConfig.processor] || 0;
    const ramPrice = priceConfig.ram[newConfig.ram] || 0;
    const storagePrice = priceConfig.storage[newConfig.storage] || 0;
    const colorPrice = priceConfig.color[newConfig.color] || 0;

    return basePrice + processorPrice + ramPrice + storagePrice + colorPrice;
  };

  const handleChange = (key, value) => {
    const newConfig = { ...config, [key]: value };
    newConfig.totalPrice = calculatePrice(newConfig);
    setConfig(newConfig);
  };

  const saveConfiguration = () => {
    if (config.processor && config.ram && config.storage && config.color) {
      setSavedConfigs([...savedConfigs, { ...config, id: Date.now() }]);
    }
  };

  const resetConfiguration = () => {
    setConfig({
      processor: "i5",
      ram: "8GB",
      storage: "512GB SSD",
      color: "Silver",
      totalPrice: basePrice,
    });
  };

  const loadConfiguration = (savedConfig) => {
    setConfig({ ...savedConfig });
  };

  const deleteConfiguration = (id) => {
    setSavedConfigs(savedConfigs.filter((config) => config.id !== id));
  };

  return (
    <div className="container">
      <h1>Laptop Customizer</h1>

      <div className="main-content">
        <div className="config-section">
          <h2>Configure Your Laptop</h2>

          <div className="form-group">
            <label>Processor: </label>
            <select
              value={config.processor}
              onChange={(e) => handleChange("processor", e.target.value)}
            >
              <option value="i5">i5 (+₹0)</option>
              <option value="i7">i7 (+₹10,000)</option>
              <option value="i9">i9 (+₹25,000)</option>
            </select>
          </div>

          <div className="form-group">
            <label>RAM: </label>
            <select
              value={config.ram}
              onChange={(e) => handleChange("ram", e.target.value)}
            >
              <option value="8GB">8GB (+₹0)</option>
              <option value="16GB">16GB (+₹5,000)</option>
              <option value="32GB">32GB (+₹12,000)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Storage: </label>
            <select
              value={config.storage}
              onChange={(e) => handleChange("storage", e.target.value)}
            >
              <option value="512GB SSD">512GB SSD (+₹0)</option>
              <option value="1TB SSD">1TB SSD (+₹8,000)</option>
              <option value="2TB HDD">2TB HDD (+₹5,000)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Color: </label>
            <select
              value={config.color}
              onChange={(e) => handleChange("color", e.target.value)}
            >
              <option value="Silver">Silver (+₹0)</option>
              <option value="Black">Black (+₹2,000)</option>
              <option value="Blue">Blue (+₹3,000)</option>
            </select>
          </div>

          <div className="action-buttons">
            <button onClick={saveConfiguration}>Save Configuration</button>
            <button onClick={resetConfiguration}>Reset</button>
          </div>
        </div>

        <div className="preview-section">
          <h2>Preview</h2>
          <div className={`laptop-preview ${config.color.toLowerCase()}`}>
            Laptop Preview
          </div>

          <h3>Selected Specifications:</h3>
          <p>Processor: {config.processor}</p>
          <p>RAM: {config.ram}</p>
          <p>Storage: {config.storage}</p>
          <p>Color: {config.color}</p>

          <h3>Total Price: ₹{config.totalPrice.toLocaleString()}</h3>
        </div>
      </div>

      {savedConfigs.length > 0 && (
        <div className="saved-configs">
          <h2>Saved Configurations</h2>
          {savedConfigs.map((savedConfig) => (
            <div key={savedConfig.id} className="saved-config">
              <p>
                <strong>Specs:</strong> {savedConfig.processor},{" "}
                {savedConfig.ram}, {savedConfig.storage}, {savedConfig.color}
              </p>
              <p>
                <strong>Price:</strong> ₹
                {savedConfig.totalPrice.toLocaleString()}
              </p>
              <div className="config-actions">
                <button onClick={() => loadConfiguration(savedConfig)}>
                  Load
                </button>
                <button onClick={() => deleteConfiguration(savedConfig.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LaptopCustomizer;
